<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
<div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
=======

  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (
        <>
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">            <Loader2 className="h-8 w-8 animate-spin text-white" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

            <Loader2 className="h-8 w-8 animate-spin text-white" />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          </div>
        </>
      )}
      <iframe
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}
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
=======

        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        allowFullScreen;
      />;
    </div>;
  );

<<<<<<< HEAD
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (
<<<<<<< HEAD
        <>
          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
        </>
      )}
=======
        <>;
          <Image;
            src={poster}
            alt={`${title} poster`}
            fill;
            className='object - cover rounded';
          />;
          <div className='absolute inset - 0 flex items - center justify - center bg - black / 30'>;
            <Loader2 className='h - 8 w - 8 animate - spin text - white' />          </div>          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />;
          <div className="absolute inset - 0 flex items - center justify - center bg-black / 30">;
            <Loader2 className="h - 8 w - 8 animate - spin text-white" />;
          </div>;
        </>)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <iframe;
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
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
