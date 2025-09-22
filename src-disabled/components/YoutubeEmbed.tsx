:src_backup/components/YoutubeEmbed.tsx
import Image from 'next/image',;
import { Loader2 } from 'lucide-react';
import { useState } from 'react',;
interface YoutubeEmbedProps {;
  videoId: string,;
  title: string,;
  poster: string;
}

export default function YoutubeEmbed({ videoId, title, poster }: YoutubeEmbedProps) {
  const [loaded, setLoaded] = useState(false),
  const src = `https://www.youtube.com/embed/${videoId}?mute=1&controls=1`,
<div className="absolute inset-0 flex items-center justify-center bg-black/30">"
            <Loader2 className="h-8 w-8 animate-spin text-white" />"

import Image from 'next/image';

interface YoutubeEmbedProps {
  videoId: string;
  title: string;
  poster: string
}

  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (
        <>
:src_backup/components/YoutubeEmbed.tsx
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">            <Loader2 className="h-8 w-8 animate-spin text-white" />
<div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          <Image
            src={poster}
            alt={`${title} poster`}
            fill
            className='object-cover rounded'
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
            <Loader2 className='h-8 w-8 animate-spin text-white' />
:src/components/YoutubeEmbed.tsx
          </div>
        </>
      )}
      <iframe
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}`
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}
:src_backup/components/YoutubeEmbed.tsx
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'        allowFullScreen
      />
    </div>
  )
}        loading="lazy"
        onLoad = {() => setLoaded(true),}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
        loading="lazy"
:src_backup/components/YoutubeEmbed.tsx
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
        loading="lazy";
        onLoad={() => setLoaded(true)}        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
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
        loading="lazy";
        onLoad={() => setLoaded(true)}

:src_backup/components/YoutubeEmbed.tsx
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
        allowFullScreen;
      />;
    </div>;
  );
:src_backup/components/YoutubeEmbed.tsx

}
  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (
<>
          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
        </>
      )}
      <iframe;
:src_backup/components/YoutubeEmbed.tsx
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}
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
:src_backup/components/YoutubeEmbed.tsx

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
:src/components/YoutubeEmbed.tsx
