:src_backup/components/YoutubeEmbed.tsx
<<<<<<< HEAD
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
<div className="absolute inset-0 flex items-center justify-center bg-black/30">"
            <Loader2 className="h-8 w-8 animate-spin text-white" />"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/YoutubeEmbed.tsx
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
<<<<<<< HEAD
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">            <Loader2 className="h-8 w-8 animate-spin text-white" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
<div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/YoutubeEmbed.tsx
          <Image
            src={poster}
            alt={`${title} poster`}
            fill
            className='object-cover rounded'
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
            <Loader2 className='h-8 w-8 animate-spin text-white' />
:src/components/YoutubeEmbed.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </div>
        </>
      )}
      <iframe
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}`
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}
:src_backup/components/YoutubeEmbed.tsx
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/YoutubeEmbed.tsx
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        allowFullScreen;
      />;
    </div>;
  );
:src_backup/components/YoutubeEmbed.tsx

<<<<<<< HEAD:src/components/YoutubeEmbed.tsx
<<<<<<< HEAD
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/YoutubeEmbed.tsx
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/YoutubeEmbed.tsx
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
