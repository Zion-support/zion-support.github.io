import Image from 'next/image';
<<<<<<< HEAD
<<<<<<< HEAD
import { Loader2 } from 'lucide-react';
=======
import { Loader2 } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { useState } from 'react';
interface YoutubeEmbedProps {
  videoId: string,
  title: string,
  poster: string
}

export default function YoutubeEmbed({ videoId, title, poster }: YoutubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const src = `https://www.youtube.com/embed/${videoId}?mute=1&controls=1`;

  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (
        <>
<<<<<<< HEAD
          <Image
            src={poster}
            alt={`${title} poster`}
            fill
            className='object-cover rounded'
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
            <Loader2 className='h-8 w-8 animate-spin text-white' />
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </div>
        </>
      )}
      <iframe
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}
        src={src}
        title={title}
<<<<<<< HEAD
<<<<<<< HEAD
        loading='lazy'
        onLoad={() => setLoaded(true)}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
=======
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        allowFullScreen
      />
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
