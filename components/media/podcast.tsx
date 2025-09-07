
<<<<<<< HEAD
=======
<<<<<<< HEAD

import React, { useEffect, useState } from 'react';'
import Link from 'next/link';'

type EpisodeListItem = any;
useEffect ( () => {
  }
  const load = async () => {
  }
  try {
 ;
}
return (;
    <div className='space-y-6'>;'

      <div className='flex items-center justify-between'>;'
        <h1 className='text-3xl font-bold'>Zion Podcast</h1>;'
        <Link href='/studio/host' className='text-blue-600 underline'>;'
          Create Episode;
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from 'react;
import Link from next/link';
=======
=======

  if (loading) return <div>Loading episodes…</div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

>>>>>>> origin/chore/fix-lint-and-merge
type EpisodeListItem = any;
useEffect ( () => {
  const load = async () => {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  if (loading) return <div>Loading episodes…</div>;



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <div className='space-y-6'>;
=======
 ;
  return (
    <div className='space-y-6'    />;
>>>>>>> origin/chore/fix-lint-and-merge

      <div className='flex items-center justify-between'    />;
        <h1 className='text-3xl font-bold'    />Zion Podcast</h1>;
        <Link href='/studio/host' className='text-blue-600 underline'    />;
          Create Episode;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        </Link>;
      </div>;
      {episodes && episodes.length === 0 && <p>No episodes yet.</p>}
      <ul className='space-y-4'>;'
        {episodes && episodes.map(ep => (<li key={ep && ep.id} className='border rounded p-4'>;'
            <div className='flex items-center justify-between'>;'
              <div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <h2 className='text-xl font-semibold'>{ep && ep.title}</h2>;'
                <p className='text-sm text-gray-500'>;'
                  "Guest": {ep && ep.inviteeName} ·{' '}'
                  {new Date(ep && ep.createdAt).toLocaleString(
}
=======
>>>>>>> origin/resolved-merge-conflicts
                <h2 className='text-xl font-semibold'>{ep && ep.title}</h2>;
                <p className='text-sm text-gray-500'>;
                  Guest: {ep && ep.inviteeName} ·{' '}
                  {new Date(ep && ep.createdAt).toLocaleString()}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                </p>;
                {ep && ep.summary && (<p className=mt-2 text-gray-700'>{ep && ep.summary}</p>;
                )}
              </div>;
              <div className='flex gap-3>;
                {ep && ep.audio?.mp3Url && (<a;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    }
                    href = {ep && ep.audio.mp3Url}

                    className='px-3 py-2 bg-blue-600 text-white rounded''

                    download
                  >
 ;
return (;
    <div className="space-y-6">;"

      <div className="flex items-center justify-between">;"
        <h1 className="text-3xl font-bold">Zion Podcast</h1>;"
        <Link href="/studio/host" className="text-blue-600 underline">Create Episode</Link>;"
=======
>>>>>>> origin/resolved-merge-conflicts
                    href={ep && ep.audio.mp3Url}
                    className='px-3 py-2 bg-blue-600 text-white rounded';
                    download>                    MP3;
                  </a>;
                )}
                {ep && ep.audio?.wavUrl && (  if (loading) return <div>Loading episodes…</div>;download;
                  >;
  return (<div className="space-y-6">;
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
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      </div>;
      {episodes && episodes.length === 0 && <p>No episodes yet.</p>}
      <ul className="space-y-4">;"
        {episodes && episodes.map((ep) => (<li key={ep && ep.id} className="border rounded p-4">;"
            <div className="flex items-center justify-between">;"
              <div>;
                <h2 className="text-xl font-semibold">{ep && ep.title}</h2>;"
                <p className="text-sm text-gray-500">"Guest": {ep && ep.inviteeName} · {new Date(ep && ep.createdAt).toLocaleString(,"
}</p>;
                {ep && ep.summary && <p className="mt-2 text-gray-700">{ep && ep.summary}</p>}"
              </div>;
              <div className="flex gap-3">;"
                {ep && ep.audio?.mp3Url && (<a href={ep && ep.audio.mp3Url} className="px-3 py-2 bg-blue-600 text-white rounded" download>;"
                    MP3;
                  </a>;
                )}{ep && ep.audio?.wavUrl && (<a;
                )}
                {ep && ep.audio?.wavUrl && (;
                  <a
                )}{ep && ep.audio?.wavUrl && (<a;
                    href={ep && ep.audio.wavUrl}
origin/cursor/automate-test-improve-and-merge-code-2533
useEffect ( () => {
  const load = async () => {
  try {
  return (
    <div className=space-y-6'>;'
      <div className=flex items-center justify-between>;'
        <h1 className='text-3xl font-bold>Zion Podcast</h1>;
        <Link href='/studio/host' className=text-blue-600 underline>;
          Create Episode;
        </Link>;
      </div>;
      {episodes && episodes.length === 0 && <p>No episodes yet.</p>}'
      <ul className='space-y-4>;
        {episodes && episodes.map(ep => (;
          <li key={ep && ep.id} className='border rounded p-4'>;
            <div className=flex items-center justify-between'>;
              <div>;'
                <h2 className=text-xl font-semibold>{ep && ep.title}</h2>;'
                <p className='text-sm text-gray-500>;
                  Guest: {ep && ep.inviteeName} ·{' '}
                  {new Date(ep && ep.createdAt).toLocaleString()}
                </p>;
                {ep && ep.summary && (;
                  <p className=mt-2 text-gray-700'>{ep && ep.summary}</p>;
                )}
              </div>;'
              <div className=flex gap-3>;
                {ep && ep.audio?.mp3Url && (;
                  <a;
                    href={ep && ep.audio.mp3Url}'
                    className='px-3 py-2 bg-blue-600 text-white rounded
                    download>                    MP3;
                  </a>;
                )}
                {ep && ep.audio?.wavUrl && (  if (loading) return <div>Loading episodes…</div>;
                    download
                  >
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className=space-y-6">;"
      <div className=flex items-center justify-between>;"
        <h1 className="text-3xl font-bold>Zion Podcast</h1>;
        <Link href="/studio/host" className=text-blue-600 underline>Create Episode</Link>;
      </div>;
      {episodes && episodes.length === 0 && <p>No episodes yet.</p>}"
      <ul className="space-y-4>;
        {episodes && episodes.map((ep) => (;
          <li key={ep && ep.id} className="border rounded p-4">;
            <div className=flex items-center justify-between">;
              <div>;"
                <h2 className=text-xl font-semibold>{ep && ep.title}</h2>;"
                <p className="text-sm text-gray-500>Guest: {ep && ep.inviteeName} · {new Date(ep && ep.createdAt).toLocaleString()}</p>;
                {ep && ep.summary && <p className="mt-2 text-gray-700">{ep && ep.summary}</p>}
              </div>;
              <div className=flex gap-3">;
                {ep && ep.audio?.mp3Url && (;"
                  <a href={ep && ep.audio.mp3Url} className=px-3 py-2 bg-blue-600 text-white rounded download>;
                    MP3;
                  </a>;
                )}

                )}
                {ep && ep.audio?.wavUrl && (;
                  <a;
                    href={ep && ep.audio.wavUrl}
                    className='px-3 py-2 bg-gray-700 text-white rounded'
                    download>                    WAV;
                  </a>;
                )}"
<<<<<<< HEAD
=======
<<<<<<< HEAD
                {ep && ep.audio?.mp4Url && (                  <a href={ep && ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded" download>;

                {ep.audio?.wavUrl && (
<a
}
href={ep.audio.wavUrl}
                    className='px-3 py-2 bg-gray-700 text-white rounded';'
                    download>

                    WAV;
                  </a>;
                )}
                {ep.audio?.mp4Url && (<a;
                    }
                    href={ep.audio.mp4Url}
                    className='px-3 py-2 bg-purple-700 text-white rounded';'
                    download>

=======
>>>>>>> origin/resolved-merge-conflicts
                {ep && ep.audio?.mp4Url && (                  <a href={ep && ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded download>;
=======
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
>>>>>>> origin/chore/fix-lint-and-merge

                {ep.audio?.wavUrl && (}
<a;}
href={ep.audio.wavUrl}
                    className='px-3 py-2 bg-gray-700 text-white rounded';
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                    MP4;
                  </a>;
                )}
              </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<div className='mt-3 flex gap-4'>;'
              <Link;
                href={`/media/podcast/${ep.id}`}`

                className='text-blue-600 underline''
              >
                View Transcript
              </Link>
            </div>
          </li>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/resolved-merge-conflicts
            </div>;'
            <div className='mt-3 flex gap-4'>;
              <Link;
                href={`/media/podcast/${ep && ep.id}`}'
                className='text-blue-600 underline'>;
                View Transcript;"
              </Link>            </div>            <div className="mt-3 flex gap-4">;"`
              <Link href={`/media/podcast/${ep && ep.id}`} className="text-blue-600 underline">View Transcript</Link>;
            </div>;
            <div className='mt-3 flex gap-4'>;
              <Link;
                href={`/media/podcast/${ep && ep.id}`}
                className='text-blue-600 underline'>;
                View Transcript;
              </Link>            </div>            <div className="mt-3 flex gap-4">;
              <Link href={`/media/podcast/${ep && ep.id}`} className="text-blue-600 underline">View Transcript</Link>;
            </div>;
          </li>;{ep.audio?.wavUrl && (<a;
                    href={ep.audio.wavUrl}
                    className='px-3 py-2 bg-gray-700 text-white rounded';
                    download;
                  >;
                    WAV;
                  </a>;
                )}
=======
<<<<<<< HEAD
                    download    />

                    WAV;
                  </a>;
                )}
                {ep.audio?.mp4Url && (<a;}
                    href={ep.audio.mp4Url}
                    className='px-3 py-2 bg-purple-700 text-white rounded';
                    download    />
>>>>>>> origin/chore/fix-lint-and-merge

                    MP4;
                  </a>;
                )}
              </div>;
            </div>;
<div className='mt-3 flex gap-4'    />;
              <Link;
                href={`/media/podcast/${ep.id}`}
<<<<<<< HEAD
          </li>;
=======

                className='text-blue-600 underline'
                  />
                View Transcript;
              </Link>
            </div>
          </li>
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        ))}
      </ul>;
    </div>;
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  // Check condition
if (return <div > Loading episodes…</div>) {
  $2
}
                className='text-blue-600 underline';
              >;
                View Transcript;
              </Link>;
            </div>;
          </li>;
        ))}
      </ul>;
    </div>;
  )// Check condition;
if (return <div > Loading episodes…</div>) {$2;
}
  return (<div className='space - y-6'>;
      <div className='flex items - center justify - between'>;
        <h1 className='text - 3xl font - bold'>Zion Podcast</h1>;
<<<<<<< HEAD
  // Check condition;
if (return <div > Loading episodes…</div>) {}
  $2;
=======
<<<<<<< HEAD
=======
  // Check condition;
if (return <div > Loading episodes…</div>) {}
  $2;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}
  return ('
    <div className='space - y-6'>;'
      <div className='flex items - center justify - between'>;'
        <h1 className='text - 3xl font - bold'>Zion Podcast</h1>;'
        <Link href='/studio / host' className='text - blue - 600 underline'>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
          Create Episode;
        </Link>;
      </div>;
      {episodes.length === 0 && <p > No episodes yet.</p>}
      <ul className='space - y-4'>;
        {episodes.map (ep => (<li key={ep.id} className='border rounded p - 4'>;
            <div className='flex items - center justify - between'>;
              <div>;
                <h2 className='text - xl font - semibold'>{ep.title}</h2>;
                <p className='text - sm text - gray - 500'>;
                  Guest: {ep.invitee_name} ·{' '}
                  {new Date (ep.created_at).toLocaleString ()}
                </p>;
                {ep.summary && (<p className='mt - 2 text - gray - 700'>{ep.summary}</p>)}
              </div>;
              <div className='flex gap - 3'>;
                {ep.audio?.mp3Url && (<a;
                    href={ep.audio.mp3Url}
        <Link href='/studio / host' className=text - blue - 600 underline>;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          Create Episode;
        </Link>;
      </div>;

                    className='px - 3 py - 2 bg - blue - 600 text - white rounded';
                    download;
                  >                    MP3;
                  </a>)}
                {ep.audio?.wav_url && (  // Check condition;
if (return <div > Loading episodes…</div>) {$2;
}
  return (<div className="space - y-6">;
      <div className="flex items - center justify - between">;
        <h1 className="text - 3xl font - bold">Zion Podcast</h1>;
        <Link href="/studio / host" className="text - blue - 600 underline">Create Episode</Link>;
      </div>;
      {episodes.length === 0 && <p > No episodes yet.</p>}
      <ul className="space - y-4">;
        {episodes.map ((ep) => (<li key={ep.id} className="border rounded p - 4">;
            <div className="flex items - center justify - between">;
              <div>;
                <h2 className="text - xl font - semibold">{ep.title}</h2>;
                <p className="text - sm text - gray - 500">Guest: {ep.invitee_name} · {new Date (ep.created_at).toLocaleString ()}</p>;
                {ep.summary && <p className="mt - 2 text - gray - 700">{ep.summary}</p>}
              </div>;
              <div className="flex gap - 3">;
                {ep.audio?.mp3Url && (<a href={ep.audio.mp3Url} className="px - 3 py - 2 bg - blue - 600 text - white rounded" download>;
                    MP3;
                  </a>)}
                {ep.audio?.wav_url && (<a;
                    href={ep.audio.wav_url}
                    className='px - 3 py - 2 bg - gray - 700 text - white rounded';
                    download;
                  >                    WAV;
                  </a>)}
                {ep.audio?.mp4Url && (                  <a href={ep.audio.wav_url} className="px - 3 py - 2 bg - gray - 700 text - white rounded" download>;
                    WAV;
                  </a>)}
                {ep.audio?.mp4Url && (<a;
                    href={ep.audio.mp4Url}
                    className='px - 3 py - 2 bg - purple - 700 text - white rounded';
                    download;
                  >                    MP4                  <a href={ep.audio.mp4Url} className="px - 3 py - 2 bg - purple - 700 text - white rounded" download>;
                    MP4;
                  </a>)}
              </div>;
<<<<<<< HEAD
            </div>;
=======
<<<<<<< HEAD
=======
            </div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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



}
    </div>)}}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
type EpisodeListItem = $2;
  title: string,
  inviteeName: string,
  createdAt: string,
  summary: string,
  audio?: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        setEpisodes(data.episodes || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    },
    load()
  }, []),

  if (loading) return <div>Loading episodes…</div>,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

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
=======
<<<<<<< HEAD
                  <a href={ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded" download>
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
                  <a
                    href={ep.audio.wavUrl}
                    className='px-3 py-2 bg-gray-700 text-white rounded'
                    download
                  >                    WAV
                  </a>
                )}
                {ep.audio?.mp4Url && (                  <a href={ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded" download>
=======
                  <a href={ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded" download>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                    WAV
                  </a>
                )}
                {ep.audio?.mp4Url && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  <a href={ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
                  <a
                    href={ep.audio.mp4Url}
                    className='px-3 py-2 bg-purple-700 text-white rounded'
                    download
                  >                    MP4                  <a href={ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>
=======
                  <a href={ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                    MP4
                  </a>
                )}
              </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
            </div>
<<<<<<< HEAD
            <div className='mt-3 flex gap-4'>
              <Link
                href={`/media/podcast/${ep.id}`}
                className='text-blue-600 underline'
              >
                View Transcript
              </Link>            </div>            <div className="mt-3 flex gap-4">
              <Link href={`/media/podcast/${ep.id}`} className="text-blue-600 underline">View Transcript</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


}
;
}
}
}
}
}
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            <div className="mt-3 flex gap-4">
              <Link href={`/media/podcast/${ep.id}`} className="text-blue-600 underline">View Transcript</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
}

"
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}


origin/cursor/automate-test-improve-and-merge-code-2533
}
'"`
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/resolved-merge-conflicts

}
<<<<<<< HEAD

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
