import Image from 'next/image';
<<<<<<< HEAD
<<<<<<< HEAD
import { Loader2 } from 'lucide-react'
import { useState } from 'react';
=======
import { Loader2 } from 'lucide-react';
<<<<<<< HEAD
import { useState } from 'react'; import { useState } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface YoutubeEmbedProps {

<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import Image from 'next/image';
import { Loader2 } from 'lucide-react'
import { useState } from 'react';
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

  return (
    <div className='relative aspect-video max-w-3xl mx-auto'>;
      {!loaded && (;
        <>;
=======
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
<<<<<<< HEAD
import { Loader2 } from 'lucide-react';
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (
        <>
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          <Image
            src={poster}
            alt={`${title} poster`}
            fill
            className='object-cover rounded'
<<<<<<< HEAD
          />;
          <div className='absolute inset-0 flex items-center justify-center bg-black/30'>;
            <Loader2 className='h-8 w-8 animate-spin text-white' />          </div>          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />;
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">;
            <Loader2 className="h-8 w-8 animate-spin text-white" />;
          </div>;
        </>;
interface YoutubeEmbedProps {
  video_id: string,
  title: string,
  poster: string;
}

export default function YoutubeEmbed({ videoId, title, poster }: YoutubeEmbedProps) {

  const [ loaded, setLoaded ] = useState(false),
  const src = `https://www.youtube.com/embed/${videoId}?mute=1&controls=1`;

  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (
        <>
          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />
=======
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
            <Loader2 className='h-8 w-8 animate-spin text-white' />          </div>          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />
=======
          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
        loading='lazy'
        onLoad={() => setLoaded(true)}
=======
<<<<<<< HEAD
        src={src}
        title={title}
<<<<<<< HEAD
        loading='lazy'
        onLoad={() => setLoaded(true)}
=======
<<<<<<< HEAD
        src={src};
        title={title};
        loading='lazy';
        onLoad={() => setLoaded(true)};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'        allowFullScreen
      />
    </div>
  )
}        loading="lazy"
        onLoad = {() => setLoaded(true),}
<<<<<<< HEAD
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
        loading="lazy";
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
=======
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        allowFullScreen
      />
    </div>
  )
<<<<<<< HEAD
}
  );
}
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

        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
        allowFullScreen;
      />;
    </div>;
  );

}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
