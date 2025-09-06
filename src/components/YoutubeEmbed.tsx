import Image from 'next/image';
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Loader2 } from 'lucide-react'
import { useState } from 'react';
import { useState } from 'react'; import { useState } from 'react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import { Loader2 } from 'lucide-react'
import { useState } from 'react';
=======
import { Loader2 } from 'lucide-react';
<<<<<<< HEAD
import { useState } from 'react'; import { useState } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (
        <>
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
          <Image
            src={poster}
            alt={`${title} poster`}
            fill
            className='object-cover rounded'
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
            <Loader2 className='h-8 w-8 animate-spin text-white' />          </div>          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />
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
          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
        </>
      )}
      <iframe
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}
<<<<<<< HEAD
        src={src}
        title={title}
<<<<<<< HEAD
        loading='lazy'
        onLoad={() => setLoaded(true)}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        src={src};
        title={title};
        loading='lazy';
        onLoad={() => setLoaded(true)};
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
=======
<<<<<<< HEAD
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
        src={src}
        title={title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        allowFullScreen
      />
    </div>
  )
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
        loading="lazy";
        onLoad={() => setLoaded(true)}

=======
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
