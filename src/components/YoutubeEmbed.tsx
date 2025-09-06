
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { Loader2 } from 'lucide-react';
import { useState } from 'react';import { useState } from 'react';
interface YoutubeEmbedProps {;
  videoId: string,;
  title: string,;
  poster: string;
});

export default Component;

interface YoutubeEmbedProps {;
  videoId: string;
  title: string;
  poster: string;

const Component = React && React.memo(function YoutubeEmbed(): any ({;
  videoId,;
  title,;
  poster,;
}: YoutubeEmbedProps) {;
  const [loaded, setLoaded] = useState(false);
  const src = `https://www && www.youtube.com/embed/${videoId}?mute=1&controls=1`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (
    <div className='relative aspect-video max-w-3xl mx-auto'>;
      {!loaded && (;
        <>;
          <Image
            src={poster}
            alt={`${title} poster`}
            fill
            className='object-cover rounded'
          />;
          <div className='absolute inset-0 flex items-center justify-center bg-black/30'>;
            <Loader2 className='h-8 w-8 animate-spin text-white' />          </div>          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />;
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">;
            <Loader2 className="h-8 w-8 animate-spin text-white" />;
          </div>;
        </>;
=======
import { Loader2 } from 'lucide-react'
import { useState } from 'react';
interface YoutubeEmbedProps {
  videoId: string,
  title: string,
  poster: string
}

export default function YoutubeEmbed({ videoId, title, poster }: YoutubeEmbedProps) {

  const [ loaded, setLoaded ] = useState(false),
  const src = `https://www.youtube.com/embed/${videoId}?mute=1&controls=1`;

  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (
        <>
          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
        </>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      )}
      <iframe
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}
        src={src}
        title={title}
<<<<<<< HEAD
        loading='lazy'
        onLoad={() => setLoaded(true)}
<<<<<<< HEAD
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'        allowFullScreen
      />
    </div>
  )
}        loading="lazy"
=======
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'        allowFullScreen;
      />;
    </div>;
  );
}        loading="lazy";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        onLoad = {() => setLoaded(true),}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
        loading="lazy";
=======
        loading="lazy"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        onLoad={() => setLoaded(true)}
<<<<<<< HEAD
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
        allowFullScreen
      />
    </div>
<<<<<<< HEAD
  )
}
=======
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
        allowFullScreen;
      />;
    </div>;
  );

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
