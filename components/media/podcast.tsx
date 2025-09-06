<<<<<<< HEAD
 useEffect ( () => {
  const load = async () => {
  try {
=======
<<<<<<< HEAD
<<<<<<< HEAD
 useEffect ( () => {
  const load = async () => {
  try {
=======
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
type EpisodeListItem = {
  id: string,
  title: string,
  inviteeName: string,
  createdAt: string,
  summary: string,
  audio?: {
    mp3Url?: string;
    wavUrl?: string;
    mp4Url?: string
  }
};

export default function PodcastIndexPage() {
  const [episodes, setEpisodes] = useState<EpisodeListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/podcast/list');
        const data = await res.json();
        setEpisodes(data.episodes || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    };
    load()
  }, []);

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  if (loading) return <div>Loading episodes…</div>;

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Zion Podcast</h1>
        <Link href='/studio/host' className='text-blue-600 underline'>
          Create Episode
        </Link>
      </div>
      {episodes.length === 0 && <p>No episodes yet.</p>}
      <ul className='space-y-4'>
        {episodes.map(ep => (
          <li key={ep.id} className='border rounded p-4'>
            <div className='flex items-center justify-between'>
              <div>
                <h2 className='text-xl font-semibold'>{ep.title}</h2>
                <p className='text-sm text-gray-500'>
                  Guest: {ep.inviteeName} ·{' '}
                  {new Date(ep.createdAt).toLocaleString()}
                </p>
                {ep.summary && (
                  <p className='mt-2 text-gray-700'>{ep.summary}</p>
                )}
              </div>
              <div className='flex gap-3'>
                {ep.audio?.mp3Url && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <a
                    href={ep.audio.mp3Url}
                    className='px-3 py-2 bg-blue-600 text-white rounded'
                    download
<<<<<<< HEAD
                  >                    MP3
                  </a>
                )}
                {ep.audio?.wavUrl && (
=======
                  >
=======
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
type EpisodeListItem = {
  id: string,
  title: string,
  inviteeName: string,
  createdAt: string,
  summary: string,
  audio?: {
    mp3Url?: string;
    wavUrl?: string;
    mp4Url?: string
  }
};

export default function PodcastIndexPage() {
  const [episodes, setEpisodes] = useState<EpisodeListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/podcast/list');
        const data = await res.json();
        setEpisodes(data.episodes || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    };
    load()
  }, []);

  if (loading) return <div>Loading episodes…</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Zion Podcast</h1>
        <Link href="/studio/host" className="text-blue-600 underline">Create Episode</Link>
      </div>
      {episodes.length === 0 && <p>No episodes yet.</p>}
      <ul className="space-y-4">
        {episodes.map((ep) => (
          <li key={ep.id} className="border rounded p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">{ep.title}</h2>
                <p className="text-sm text-gray-500">Guest: {ep.inviteeName} · {new Date(ep.createdAt).toLocaleString()}</p>
                {ep.summary && <p className="mt-2 text-gray-700">{ep.summary}</p>}
              </div>
              <div className="flex gap-3">
                {ep.audio?.mp3Url && (
                  <a href={ep.audio.mp3Url} className="px-3 py-2 bg-blue-600 text-white rounded" download>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <a href={ep.audio.mp3Url} className="px-3 py-2 bg-blue-600 text-white rounded" download>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    MP3
                  </a>
                )}
                {ep.audio?.wavUrl && (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <a
                    href={ep.audio.wavUrl}
                    className='px-3 py-2 bg-gray-700 text-white rounded'
                    download
<<<<<<< HEAD
                  >                    WAV
                  </a>
                )}
                {ep.audio?.mp4Url && (
=======
                  >
=======
                  <a href={ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded" download>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <a href={ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded" download>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    WAV
                  </a>
                )}
                {ep.audio?.mp4Url && (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <a
                    href={ep.audio.mp4Url}
                    className='px-3 py-2 bg-purple-700 text-white rounded'
                    download
<<<<<<< HEAD
                  >                    MP4
=======
                  >
=======
                  <a href={ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <a href={ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    MP4
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </a>
                )}
              </div>
            </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <div className='mt-3 flex gap-4'>
              <Link
                href={`/media/podcast/${ep.id}`}
                className='text-blue-600 underline'
              >
                View Transcript
<<<<<<< HEAD
              </Link>            </div>
=======
              </Link>
=======
            <div className="mt-3 flex gap-4">
              <Link href={`/media/podcast/${ep.id}`} className="text-blue-600 underline">View Transcript</Link>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="mt-3 flex gap-4">
              <Link href={`/media/podcast/${ep.id}`} className="text-blue-600 underline">View Transcript</Link>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </li>
        ))}
      </ul>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
