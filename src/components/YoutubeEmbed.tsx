import Image from 'next/image';
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
=======
import { useState } from 'react',;
interface YoutubeEmbedProps {;
  videoId: string,;
  title: string,;
  poster: string;
}

export default function YoutubeEmbed({ videoId, title, poster }: YoutubeEmbedProps) {
  const [loaded, setLoaded] = useState(false),
  const src = `https://www.youtube.com/embed/${videoId}?mute=1&controls=1`,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (
        <>
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
<<<<<<< HEAD
        src={src}
        title={title}
        loading='lazy'
        onLoad={() => setLoaded(true)}
        src={src};
        title={title};
        loading='lazy';
        onLoad={() => setLoaded(true)};
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'        allowFullScreen
      />
    </div>
  )
}        loading="lazy"
        onLoad = {() => setLoaded(true),}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
        loading="lazy"
<<<<<<< HEAD
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


;
<<<<<<< HEAD

=======


=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
=======
=======
        src={src}
        title={title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        allowFullScreen
      />
    </div>
<<<<<<< HEAD


;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  )
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        loading="lazy";
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
        allowFullScreen;
      />;
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
