


<<<<<<< HEAD
=======
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

>>>>>>> origin/cursor/delete-old-data-records-6bba
type EpisodeListItem = any;
useEffect ( () => {
  const load = async () => {
  try {
<<<<<<< HEAD

  if (loading) return <div>Loading episodes…</div>;




  return (
    <div className='space-y-6'>;

=======

 ;
  return (
    <div className='space-y-6'    />;
>>>>>>> origin/cursor/delete-old-data-records-6bba

      <div className='flex items-center justify-between'    />;
        <h1 className='text-3xl font-bold'    />Zion Podcast</h1>;
        <Link href='/studio/host' className='text-blue-600 underline'    />;
          Create Episode;

        </Link>;}
      </div>;}
      {episodes && episodes.length === 0 && <p    />No episodes yet.</p>}
      <ul className='space-y-4'    />;
        {episodes && episodes.map(ep => (<li key={ep && ep.id} className='border rounded p-4'    />;
            <div className='flex items-center justify-between'    />;
              <div    />;
                <h2 className='text-xl font-semibold'    />{ep && ep.title}</h2>;
                <p className='text-sm text-gray-500'    />;
                  Guest: {ep && ep.inviteeName} ·{' '}
                  {new Date(ep && ep.createdAt).toLocaleString(}
}
                </p>;
                {ep && ep.summary && (<p className='mt-2 text-gray-700'    />{ep && ep.summary}</p>;
                )}
              </div>;
              <div className='flex gap-3'    />;
                {ep && ep.audio?.mp3Url && (<a;}
                    href = {ep && ep.audio.mp3Url}

                    className='px-3 py-2 bg-blue-600 text-white rounded'

                    download;
                      />
 ;
  return (
    <div className=\"space-y-6\"    />;
"
      <div className=\"flex items-center justify-between\"    />;"
        <h1 className=\"text-3xl font-bold\"    />Zion Podcast</h1>;"
        <Link href=\"/studio/host\" className=\"text-blue-600 underline\"    />Create Episode</Link>;
      </div>;
      {episodes && episodes.length === 0 && <p    />No episodes yet.</p>}"
      <ul className=\"space-y-4\"    />;"
        {episodes && episodes.map((ep) => (<li key={ep && ep.id} className=\"border rounded p-4\"    />;"
            <div className=\"flex items-center justify-between\"    />;
              <div    />;"
                <h2 className=\"text-xl font-semibold\"    />{ep && ep.title}</h2>;"
                <p className=\"text-sm text-gray-500\"    />Guest: {ep && ep.inviteeName} · {new Date(ep && ep.createdAt).toLocaleString(}
}</p>;"
                {ep && ep.summary && <p className=\"mt-2 text-gray-700\"    />{ep && ep.summary}</p>}
              </div>;"
              <div className=\"flex gap-3\"    />;"
                {ep && ep.audio?.mp3Url && (<a href={ep && ep.audio.mp3Url} className=\"px-3 py-2 bg-blue-600 text-white rounded\" download    />;
                    MP3;
                  </a>;

                )}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                {ep.audio?.wavUrl && (}
<a;}
href={ep.audio.wavUrl}
                    className='px-3 py-2 bg-gray-700 text-white rounded';
<<<<<<< HEAD


=======
                    download>                    WAV;
                  </a>;
                )}
                {ep && ep.audio?.mp4Url && (                  <a href={ep && ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded" download>;
                    WAV;
                  </a>;
                )}
                {ep && ep.audio?.mp4Url && (<a;
                    href={ep && ep.audio.mp4Url}
                    className='px-3 py-2 bg-purple-700 text-white rounded';
                    download>                    MP4                  <a href={ep && ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>;
                {ep && ep.audio?.mp4Url && (;
                  <a;
                    href={ep && ep.audio.mp4Url}'
                    className='px-3 py-2 bg-purple-700 text-white rounded'"
                    download>                    MP4                  <a href={ep && ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>;

                    download    />

                    WAV;
                  </a>;
                )}
                {ep.audio?.mp4Url && (<a;}
                    href={ep.audio.mp4Url}
                    className='px-3 py-2 bg-purple-700 text-white rounded';
                    download    />

                    MP4;
                  </a>;
                )}
              </div>;
            </div>;
<div className='mt-3 flex gap-4'    />;
              <Link;
                href={`/media/podcast/${ep.id}`}
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
type EpisodeListItem = $2;
  title: string,
  inviteeName: string,
  createdAt: string,
  summary: string,
  audio?: {
<<<<<<< HEAD

=======

    mp3Url?: string,
    wavUrl?: string,
    mp4Url?: string
  }
},

export default function PodcastIndexPage() {
  const [episodes, setEpisodes] = useState<EpisodeListItem[]>([]),
  const [loading, setLoading] = useState<boolean>(true),

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch($2);
        const data = await res.json($2);

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        setEpisodes(data.episodes || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
<<<<<<< HEAD

=======

    },
    load()
  }, []),

  if (loading) return <div>Loading episodes…</div>,

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
                    MP3
                  </a>
                )}
                {ep.audio?.wavUrl && (
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    WAV
                  </a>
                )}
                {ep.audio?.mp4Url && (
<<<<<<< HEAD

                  <a href={ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>

=======
                  <a
                    href={ep.audio.mp4Url}
                    className='px-3 py-2 bg-purple-700 text-white rounded'
                    download
                  >                    MP4                  <a href={ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    MP4
                  </a>
                )}
              </div>
<<<<<<< HEAD
            </div>
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <div className="mt-3 flex gap-4">
              <Link href={`/media/podcast/${ep.id}`} className="text-blue-600 underline">View Transcript</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

"
}
<<<<<<< HEAD




=======
}


origin/cursor/automate-test-improve-and-merge-code-2533
}
'"`

>>>>>>> origin/cursor/delete-old-data-records-6bba
