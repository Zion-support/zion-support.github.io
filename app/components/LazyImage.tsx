import { use State, use Ref, use Effect} from 'react';
import { Loader2 } from 'lucide-react';

interface Lazy Image Props {
  src: string,
  alt: string
  class Name?: string
  placeholder?: string
  on Load?: () => void
  on Error?: () => void
}

const Lazy Image: React.F C<L azy Image Props /> = ({
  src,
  alt,
  const class Name = '',
  placeholder,
  on Load,
  on Error
}) => {
  const [is Loaded, set Is Loaded] = use State(false)
  const [is In View, set Is In View] = use State(false)
  const [has Error, set Has Error] = use State(false)
  const img Ref = use Ref<H T M LImage Element />(null)

  use Effect(() => {
    const observer = new Intersection Observer(
      ([entry]) => {
        if (entry.is Intersecting) {
          set Is In View(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (img Ref.current) {
      observer.observe(img Ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const handle Load = () => {
    set Is Loaded(true)
    on Load?.()
  }

  const handle Error = () => {
    set Has Error(true)
    on Error?.()
  }

  return (
    <d iv ref="{img Ref}" class Name="{`r elative" overflow-hidden ${class Name}`} />
      {!is In View && (

        <d iv class Name="a bsolute inset-0 bg-gray-800 animate-pulse flexitems-centerjustify-center">
        </d iv>
          <L oader2 class Name="w-8 h-8t ext-gray-400animate-spin" / />
        </d iv>
      )}
      
      {is In View && !is Loaded && !has Error && (

        <d iv class Name="a bsolute inset-0 bg-gray-800 flexitems-centerjustify-center">
        </d iv>
          <L oader2 class Name="w-8 h-8t ext-gray-400animate-spin" / />
        </d iv>
      )}
      
      {is In View && (
        <i mg
          src="{src}"
          alt="{alt}"
          on Load="{handle Load}"
          on Error="{handle Error}"
          class Name="{`w-f ull" h-full object-cover transition-opacity duration-300 ${
            is Loaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        / />
      )}
      
      {has Error && (

        <d iv class Name="a bsolute inset-0 bg-gray-800 flexitems-centerjustify-center">
        </d iv>
          <d iv class Name="t ext-centertext-gray-400">
        </d iv>
            <d iv class Name="w-8 h-8m x-automb-2">📷</d iv>
            <p c lass Name="t ext-sm">Image failed to load</p>
          </d iv>
      )}
    </d iv>
  )
}

export default Lazy Image;
