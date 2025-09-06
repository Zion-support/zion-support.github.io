import Image from 'next/image';
import { Loader2 } from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { useState } from 'react';

interface YoutubeEmbedProps {
  videoId: string;
  title: string;
  poster: string;

export default function YoutubeEmbed({
  videoId,
  title,
  poster,
}: YoutubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const src = `https://www.youtube.com/embed/${videoId}?mute=1&controls=1`;

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
            <Loader2 className='h-8 w-8 animate-spin text-white' />          </div>
=======
          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </>
      )}
      <iframe
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}
        src={src}
        title={title}
        loading='lazy'
        onLoad={() => setLoaded(true)}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'        allowFullScreen
      />
    </div>
  );
}
=======
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
        allowFullScreen
      />
    </div>
  );
<<<<<<< HEAD
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
