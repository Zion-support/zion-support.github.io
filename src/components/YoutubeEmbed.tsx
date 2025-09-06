import Image from 'next/image';
<<<<<<< HEAD

=======
import { Loader2 } from 'lucide-react'
import { useState } from 'react';
import { useState } from 'react'; import { useState } from 'react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface YoutubeEmbedProps {

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
<<<<<<< HEAD

=======
import { Loader2 } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { useState } from 'react',;
interface YoutubeEmbedProps {;
  videoId: string,;
  title: string,;
  poster: string;
}

export default function YoutubeEmbed({ videoId, title, poster }: YoutubeEmbedProps) {
  const [loaded, setLoaded] = useState(false),
  const src = `https://www.youtube.com/embed/${videoId}?mute=1&controls=1`,
<<<<<<< HEAD

  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (
        <>

=======
>>>>>>> 
>>>>>>>   return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (
        <>
          <Image
            src={poster}
            alt={`${title} poster`}
            fill
            className='object-cover rounded'
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
            <Loader2 className='h-8 w-8 animate-spin text-white' />          </div>          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />
>>>>>>>           <div className="absolute inset-0 flex items-center justify-center bg-black/30">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
>>>>>>>             <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
        </>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>       )}
      <iframe
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}
<<<<<<< HEAD

=======
        loading='lazy'
        onLoad={() => setLoaded(true)}
        src={src};
        title={title};
        loading='lazy';
        onLoad={() => setLoaded(true)};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

        allowFullScreen
      />
    </div>
  )

=======
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
>>>>>>>         allowFullScreen
      />
    </div>
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        loading="lazy";
        onLoad={() => setLoaded(true)}

        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
        allowFullScreen;
      />;
    </div>;
  );

}
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
