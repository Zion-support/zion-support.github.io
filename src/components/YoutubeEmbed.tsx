import Image from 'next/image',;
import { Loader2 } from 'lucide-react';
import { useState } from 'react',;
interface YoutubeEmbedProps {;
  videoId: string,;
  title: string,;
  poster: string;
}
<<<<<<< HEAD

export default function YoutubeEmbed({ videoId, title, poster }: YoutubeEmbedProps) {
  const [loaded, setLoaded] = useState(false),
  const src = `https://www.youtube.com/embed/${videoId}?mute=1&controls=1`,

  return (
    <div className=&quot;relative aspect-video max-w-3xl mx-auto&quot;>
      {!loaded && (
        <>
          <Image src={poster} alt={`${title} poster`} fill className=&quot;object-cover rounded&quot; />
          <div className=&quot;absolute inset-0 flex items-center justify-center bg-black/30&quot;>
            <Loader2 className=&quot;h-8 w-8 animate-spin text-white&quot; />
          </div>
        </>
=======
;
export default function YoutubeEmbed({ videoId, title, poster }: YoutubeEmbedProps) {;
  const [loaded, setLoaded] = useState(false);
  const src = `https://www.youtube.com/embed/${videoId}?mute=1&controls=1`;
  return (;
    <div className="relative aspect-video max-w-3xl mx-auto">;
      {!loaded && (;
        <>;
          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />;
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">;
            <Loader2 className="h-8 w-8 animate-spin text-white" />;
          </div>;
        </>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      )}
      <iframe;
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}
        src={src}
        title={title}
<<<<<<< HEAD
        loading=&quot;lazy&quot;
        onLoad={() => setLoaded(true)}
<<<<<<< HEAD
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
=======
        allow=&quot;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        allowFullScreen
      />
    </div>
  )
=======
        loading="lazy";
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
        allowFullScreen;
      />;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;