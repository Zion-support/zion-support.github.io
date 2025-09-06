
<<<<<<< HEAD
<<<<<<< HEAD
=======

  if (loading) return <div>Loading episodes…</div>;
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
useEffect ( () => {
  const load = async () => {
  try {
  if (loading) return <div>Loading episodes…</div>;

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
useEffect ( () => {;
  const load = async () => {;
  try {;
  if (loading) return <div>Loading episodes…</div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className='space-y-6'>;
      <div className='flex items-center justify-between'>;
        <h1 className='text-3xl font-bold'>Zion Podcast</h1>;
        <Link href='/studio/host' className='text-blue-600 underline'>;
          Create Episode;
        </Link>;
      </div>;
      {episodes && episodes.length === 0 && <p>No episodes yet.</p>}
      <ul className='space-y-4'>;
        {episodes && episodes.map(ep => (;
          <li key={ep && ep.id} className='border rounded p-4'>;
            <div className='flex items-center justify-between'>;
              <div>;
                <h2 className='text-xl font-semibold'>{ep && ep.title}</h2>;
                <p className='text-sm text-gray-500'>;
                  Guest: {ep && ep.inviteeName} ·{' '}
                  {new Date(ep && ep.createdAt).toLocaleString()}
                </p>;
                {ep && ep.summary && (;
                  <p className='mt-2 text-gray-700'>{ep && ep.summary}</p>;
                )}
              </div>;
              <div className='flex gap-3'>;
                {ep && ep.audio?.mp3Url && (;
                  <a
                    href={ep && ep.audio.mp3Url}
                    className='px-3 py-2 bg-blue-600 text-white rounded'
                    download>                    MP3;
                  </a>;
                )}
                {ep && ep.audio?.wavUrl && (  if (loading) return <div>Loading episodes…</div>;
  return (
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h1 className="text-3xl font-bold">Zion Podcast</h1>;
        <Link href="/studio/host" className="text-blue-600 underline">Create Episode</Link>;
      </div>;
      {episodes && episodes.length === 0 && <p>No episodes yet.</p>}
      <ul className="space-y-4">;
        {episodes && episodes.map((ep) => (;
          <li key={ep && ep.id} className="border rounded p-4">;
            <div className="flex items-center justify-between">;
              <div>;
                <h2 className="text-xl font-semibold">{ep && ep.title}</h2>;
                <p className="text-sm text-gray-500">Guest: {ep && ep.inviteeName} · {new Date(ep && ep.createdAt).toLocaleString()}</p>;
                {ep && ep.summary && <p className="mt-2 text-gray-700">{ep && ep.summary}</p>}
              </div>;
              <div className="flex gap-3">;
                {ep && ep.audio?.mp3Url && (;
                  <a href={ep && ep.audio.mp3Url} className="px-3 py-2 bg-blue-600 text-white rounded" download>;
                    MP3;
                  </a>;
                )}
                {ep && ep.audio?.wavUrl && (;
                  <a
                    href={ep && ep.audio.wavUrl}
                    className='px-3 py-2 bg-gray-700 text-white rounded'
                    download>                    WAV;
                  </a>;
                )}
                {ep && ep.audio?.mp4Url && (                  <a href={ep && ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded" download>;
                    WAV;
                  </a>;
                )}
                {ep && ep.audio?.mp4Url && (;
                  <a
                    href={ep && ep.audio.mp4Url}
                    className='px-3 py-2 bg-purple-700 text-white rounded'
                    download>                    MP4                  <a href={ep && ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>;
                    MP4;
                  </a>;
                )}
              </div>;
            </div>;
            <div className='mt-3 flex gap-4'>;
              <Link
                href={`/media/podcast/${ep && ep.id}`}
                className='text-blue-600 underline'>;
                View Transcript;
              </Link>            </div>            <div className="mt-3 flex gap-4">;
              <Link href={`/media/podcast/${ep && ep.id}`} className="text-blue-600 underline">View Transcript</Link>;
            </div>;
          </li>;
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

  useEffect__(() => {
    const _load = async () => {
      try {
        const res = await fetch('/api/podcast/list')
        const data = await res.json()

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

  if (loading) return <div>Loading episodes…</div>,

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Zion Podcast</h1>
        <Link href=&quot;/studio/host&quot; className=&quot;text-blue-600 underline&quot;>Create Episode</a>
      </div>
      {episodes.length === 0 && <p>No episodes yet.</p>}
      <ul className=&quot;space-y-4&quot;>
        {episodes.map((ep) => (
          <li key={ep.id} className=&quot;border rounded p-4&quot;>
            <div className=&quot;flex items-center justify-between&quot;>
              <div>
                <h2 className=&quot;text-xl font-semibold&quot;>{ep.title}</h2>
                <p className=&quot;text-sm text-gray-500&quot;>Guest: {ep.inviteeName} · {new Date(ep.createdAt).toLocaleString()}</p>
                {ep.summary && <p className=&quot;mt-2 text-gray-700&quot;>{ep.summary}</p>}
              </div>
              <div className=&quot;flex gap-3&quot;>
                {ep.audio?.mp3Url && (
                  <a href={ep.audio.mp3Url} className=&quot;px-3 py-2 bg-blue-600 text-white rounded&quot; download>

=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
useEffect ( () => {
  const load = async () => {
  try {
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
                  <a
                    href={ep.audio.mp3Url}
                    className='px-3 py-2 bg-blue-600 text-white rounded'
                    download
                  >                    MP3
                  </a>
                )}
                {ep.audio?.wavUrl && (  if (loading) return <div>Loading episodes…</div>;

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
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    MP3
                  </a>
                )}
                {ep.audio?.wavUrl && (
<<<<<<< HEAD
                  <a href={ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded" download>
=======
<<<<<<< HEAD
<a href={ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded" download>
=======
                  <a
                    href={ep.audio.wavUrl}
                    className='px-3 py-2 bg-gray-700 text-white rounded'
                    download
                  >                    WAV
                  </a>
                )}
                {ep.audio?.mp4Url && (                  <a href={ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded" download>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    WAV
                  </a>
                )}
                {ep.audio?.mp4Url && (
<<<<<<< HEAD
                  <a href={ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>
=======
<<<<<<< HEAD
<a href={ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>
=======
                  <a
                    href={ep.audio.mp4Url}
                    className='px-3 py-2 bg-purple-700 text-white rounded'
                    download
                  >                    MP4                  <a href={ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    MP4
                  </a>
                )}
              </div>
            </div>
<<<<<<< HEAD
            <div className="mt-3 flex gap-4">
              <Link href={`/media/podcast/${ep.id}`} className="text-blue-600 underline">View Transcript</Link>
            </div>
          </li>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        ))}
      </ul>;
    </div>;
=======
<<<<<<< HEAD
<div className="mt-3 flex gap-4">
=======
            <div className='mt-3 flex gap-4'>
              <Link
                href={`/media/podcast/${ep.id}`}
                className='text-blue-600 underline'
              >
                View Transcript
              </Link>            </div>            <div className="mt-3 flex gap-4">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <Link href={`/media/podcast/${ep.id}`} className="text-blue-600 underline">View Transcript</Link>
            </div>
          </li>
        ))}
<<<<<<< HEAD
      </ul>;
    </div>;
=======
      </ul>
    </div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Check condition
if (return <div > Loading episodes…</div>) {
  $2
}
  return (
    <div className='space - y-6'>;
      <div className='flex items - center justify - between'>;
        <h1 className='text - 3xl font - bold'>Zion Podcast</h1>;
        <Link href='/studio / host' className='text - blue - 600 underline'>;
          Create Episode;
        </Link>;
      </div>;
      {episodes.length === 0 && <p > No episodes yet.</p>}
      <ul className='space - y-4'>;
        {episodes.map (ep => (
          <li key={ep.id} className='border rounded p - 4'>;
            <div className='flex items - center justify - between'>;
              <div>;
                <h2 className='text - xl font - semibold'>{ep.title}</h2>;
                <p className='text - sm text - gray - 500'>;
                  Guest: {ep.invitee_name} ·{' '}
                  {new Date (ep.created_at).toLocaleString ()}
                </p>;
                {ep.summary && (
                  <p className='mt - 2 text - gray - 700'>{ep.summary}</p>)}
              </div>;
              <div className='flex gap - 3'>;
                {ep.audio?.mp3Url && (
                  <a;
                    href={ep.audio.mp3Url}
                    className='px - 3 py - 2 bg - blue - 600 text - white rounded';
                    download;
                  >                    MP3;
                  </a>)}
                {ep.audio?.wav_url && (  // Check condition
if (return <div > Loading episodes…</div>) {
  $2
}
  return (
    <div className="space - y-6">;
      <div className="flex items - center justify - between">;
        <h1 className="text - 3xl font - bold">Zion Podcast</h1>;
        <Link href="/studio / host" className="text - blue - 600 underline">Create Episode</Link>;
      </div>;
      {episodes.length === 0 && <p > No episodes yet.</p>}
      <ul className="space - y-4">;
        {episodes.map ((ep) => (
          <li key={ep.id} className="border rounded p - 4">;
            <div className="flex items - center justify - between">;
              <div>;
                <h2 className="text - xl font - semibold">{ep.title}</h2>;
                <p className="text - sm text - gray - 500">Guest: {ep.invitee_name} · {new Date (ep.created_at).toLocaleString ()}</p>;
                {ep.summary && <p className="mt - 2 text - gray - 700">{ep.summary}</p>}
              </div>;
              <div className="flex gap - 3">;
                {ep.audio?.mp3Url && (
                  <a href={ep.audio.mp3Url} className="px - 3 py - 2 bg - blue - 600 text - white rounded" download>;
                    MP3;
                  </a>)}
                {ep.audio?.wav_url && (
                  <a;
                    href={ep.audio.wav_url}
                    className='px - 3 py - 2 bg - gray - 700 text - white rounded';
                    download;
                  >                    WAV;
                  </a>)}
                {ep.audio?.mp4Url && (                  <a href={ep.audio.wav_url} className="px - 3 py - 2 bg - gray - 700 text - white rounded" download>;
                    WAV;
                  </a>)}
                {ep.audio?.mp4Url && (
                  <a;
                    href={ep.audio.mp4Url}
                    className='px - 3 py - 2 bg - purple - 700 text - white rounded';
                    download;
                  >                    MP4                  <a href={ep.audio.mp4Url} className="px - 3 py - 2 bg - purple - 700 text - white rounded" download>;
                    MP4;
                  </a>)}
              </div>;
            </div>;
            <div className='mt - 3 flex gap - 4'>;
              <Link;
                href={`/media / podcast/${ep.id}`}
                className='text - blue - 600 underline';
              >;
                View Transcript;
              </Link>            </div>            <div className="mt - 3 flex gap - 4">;
              <Link href={`/media / podcast/${ep.id}`} className="text - blue - 600 underline">View Transcript</Link>;
            </div>;
          </li>))}
      </ul>;
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
;
}
}
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
