import Image from 'next/image';

interface YoutubeEmbedProps {_videoId: string;
  title: string;
  poster: string;}

export default function YoutubeEmbed(_{_videoId, _title, _poster}: YoutubeEmbedProps) {_const [loaded, _setLoaded] = useState(false);
  const _src = `https://www.youtube.com/embed/${videoId}?mute=1&controls=1`;

  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {_!loaded && (
        <>
          <Image src={poster} alt={_`${title} poster`} fill className="object-cover rounded" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
        </>
      )}
      <iframe
        className={_`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}
        src={_src}
        title={_title}
        loading="lazy"
        onLoad={_() => setLoaded(true)}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
