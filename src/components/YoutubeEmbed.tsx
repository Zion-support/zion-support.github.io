import Image from 'next/image';
<<<<<<< HEAD
import { Loader2 } from 'lucide-react'
=======
import { Loader2 } from 'lucide-react';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import { useState } from 'react';
interface YoutubeEmbedProps {
<<<<<<< HEAD
  videoId: string;
  title: string;
<<<<<<< HEAD
  poster: string
=======
  poster: string;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}

export default function YoutubeEmbed({ videoId, title, poster }: YoutubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const src = null;
=======
  videoId: string
  title: string
  poster: string
}
interface YoutubeEmbedProps {
  videoId: string
  title: string
  poster: string
export default function YoutubeEmbed({
  videoId
  title
  poster
}: YoutubeEmbedProps) {
  const [loaded, setLoaded] = useState(false)
  const src = `https://www.youtube.com/embed/${videoId}?mute=1&controls=1`
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <div className='relative aspect-video max-w-3xl mx-auto'>
      {!loaded && (
        <>
          <Image
            src={poster}
            alt={`${title} poster`}
            fill
            className='object-cover rounded'
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
<<<<<<< HEAD
            <Loader2 className='h-8 w-8 animate-spin text-white' />          </div>          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
=======
            <Loader2 className='h-8 w-8 animate-spin text-white' />
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          </div>
        </>
      )}
      <iframe
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}
        src={src}
        title={title}
        loading='lazy'
        onLoad={() => setLoaded(true)}
<<<<<<< HEAD
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'        allowFullScreen
      />
    </div>
  )
}        loading="lazy"
        onLoad = {() => setLoaded(true),}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
=======
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
