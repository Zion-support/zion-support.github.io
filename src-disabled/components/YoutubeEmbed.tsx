import Image from 'next/image';
:src/components/YoutubeEmbed.tsx
import { Loader2 } from 'lucide-react'
import { useState } from 'react';
interface YoutubeEmbedProps {
  videoId: string;
  title: string;
  poster: string
}

export default function YoutubeEmbed({ videoId, title, poster }: YoutubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const src = null;
interface YoutubeEmbedProps {

interface YoutubeEmbedProps {
  videoId: string;
  title: string;
  poster: string
}
:src/components/YoutubeEmbed.tsx
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
import { useState } from 'react',;
interface YoutubeEmbedProps {;
  videoId: string,;
  title: string,;
  poster: string;
}

export default function YoutubeEmbed({ videoId, title, poster }: YoutubeEmbedProps) {
  const [loaded, setLoaded] = useState(false),
  const src = `https://www.youtube.com/embed/${videoId}?mute=1&controls=1`,

  return (
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
:src/components/YoutubeEmbed.tsx
            <Loader2 className='h-8 w-8 animate-spin text-white' />          </div>          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
            <Loader2 className='h-8 w-8 animate-spin text-white' />

          </div>
        </>
      )}
      <iframe
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}`
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}
:src/components/YoutubeEmbed.tsx
        src={src}
        title={title}
        loading='lazy'
        onLoad={() => setLoaded(true)}

        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'        allowFullScreen
      />
    </div>
  )
}        loading="lazy"
        onLoad = {() => setLoaded(true),}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
        loading="lazy"
:src/components/YoutubeEmbed.tsx

        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
        src={src}
        title={title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
        allowFullScreen
      />
    </div>
  )
:src/components/YoutubeEmbed.tsx
        loading="lazy";
        onLoad={() => setLoaded(true)}

        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";

        allowFullScreen;
      />;
    </div>;
  );

}

  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (

      <iframe;

        src={src}
        title={title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
        allowFullScreen
      />
    </div>
  )
        loading="lazy";
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
        allowFullScreen;
      />;
    </div>;
  );
}
;

        src={src}
        title={title}
loading='lazy'
        onLoad={() => setLoaded(true)}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
}