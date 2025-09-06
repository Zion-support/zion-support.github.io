import Image from 'next/image';
<<<<<<< HEAD
import { Loader2 } from 'lucide-react';
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
          </div>
        </>
      )}
      <iframe
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}
        src={src}
        title={title}
<<<<<<< HEAD
        loading='lazy'
        onLoad={() => setLoaded(true)}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
=======
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        allowFullScreen
      />
    </div>
  );
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
