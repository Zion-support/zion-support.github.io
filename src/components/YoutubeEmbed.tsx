<<<<<<< HEAD
<<<<<<< HEAD
import { Loader2 } from 'lucide-react'
import { useState } from 'react';
import { useState } from 'react'; import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useState } from 'react'; import { useState } from 'react'
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
import { Loader2 } from 'lucide-react';
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


  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (
        <>
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
        loading='lazy'
        onLoad={() => setLoaded(true)}
          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
<div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
        </>
      )}
      <iframe
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}
<<<<<<< HEAD
<<<<<<< HEAD
        src={src}
        title={title}
        loading='lazy'
        onLoad={() => setLoaded(true)}
        src={src};
        title={title};
        loading='lazy';
        onLoad={() => setLoaded(true)};
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
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        onLoad={() => setLoaded(true)}




        allowFullScreen
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />
    </div>
  )
=======
      />
    </div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

;

        loading="lazy";
        onLoad={() => setLoaded(true)}

<<<<<<< HEAD
<<<<<<< HEAD
}
;
        loading="lazy";
        onLoad={() => setLoaded(true)}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
        allowFullScreen;
      />;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
;
=======

}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  );
}

interface YoutubeEmbedProps {
  video_id: string;
  title: string;
  poster: string;
export default /**
 * YoutubeEmbed - Function description
 */
function YoutubeEmbed() {
  const [loaded, set_loaded] = useState (false);
  const src = `https://www.youtube.com / embed/${video_id}?mute = 1&controls = 1`;
  return (
    <div className='relative aspect - video max - w-3xl mx - auto'>;
      {!loaded && (
        <>;
          <Image;
            src={poster}
            alt={`${title} poster`}
            fill;
            className='object - cover rounded';
          />;
          <div className='absolute inset - 0 flex items - center justify - center bg - black / 30'>;
            <Loader2 className='h - 8 w - 8 animate - spin text - white' />          </div>          <Image src={poster} alt={`${title} poster`} fill className="object - cover rounded" />;
          <div className="absolute inset - 0 flex items - center justify - center bg - black / 30">;
            <Loader2 className="h - 8 w - 8 animate - spin text - white" />;
          </div>;
        </>)}
      <iframe;
        className={`absolute inset - 0 w - full h - full ${loaded ? 'visible' : 'invisible'}`}
        src={src}
        title={title}
        loading='lazy';
        on_load={() => set_loaded (true)}
        allow='accelerometer; autoplay; clipboard - write; encrypted - media; gyroscope; picture - in - picture'        allowFullScreen;
      />;
    </div>);
}        loading="lazy";
        on_load = {() => set_loaded (true), }
        allow="accelerometer, autoplay, clipboard - write, encrypted - media, gyroscope, picture - in - picture";
        loading="lazy";
        on_load={() => set_loaded (true)}
        allow="accelerometer, autoplay, clipboard - write, encrypted - media, gyroscope, picture - in - picture";
        allowFullScreen;
      />;
    </div>);
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
