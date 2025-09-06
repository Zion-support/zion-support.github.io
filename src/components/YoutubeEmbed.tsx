<<<<<<< HEAD
import Image from 'next/image';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Loader2 } from 'lucide-react'
import { useState } from 'react';
import { useState } from 'react'; import { useState } from 'react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Loader2 } from 'lucide-react'
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useState } from 'react'; import { useState } from 'react'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Loader2 } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
import { Loader2 } from 'lucide-react';
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { Loader2 } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (
        <>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>>   return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (
        <>
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Image
            src={poster}
            alt={`${title} poster`}
            fill
            className='object-cover rounded'
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
            <Loader2 className='h-8 w-8 animate-spin text-white' />          </div>          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
=======
<div className="absolute inset-0 flex items-center justify-center bg-black/30">
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <Loader2 className="h-8 w-8 animate-spin text-white" />
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
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        src={src};
        title={title};
        loading='lazy';
        onLoad={() => setLoaded(true)};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
        src={src}
        title={title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        allowFullScreen
      />
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
>>>>>>>         allowFullScreen
      />
    </div>
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        loading="lazy";
        onLoad={() => setLoaded(true)}

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
;
        loading="lazy";
        onLoad={() => setLoaded(true)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
        allowFullScreen;
      />;
    </div>;
  );
<<<<<<< HEAD

}
<<<<<<< HEAD
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

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
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
