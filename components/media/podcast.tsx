


<<<<<<< HEAD
=======
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

>>>>>>> origin/cursor/delete-old-data-records-6bba
type EpisodeListItem = any;
useEffect ( () => {
  const load = async () => {
  try {
  if (loading) return <div>Loading episodes…</div>;



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
            <div className='mt-3 flex gap-4'>;
              <Link
                href={`/media/podcast/${ep && ep.id}`}
                className='text-blue-600 underline'>;
                View Transcript;
              </Link>            </div>            <div className="mt-3 flex gap-4">;
              <Link href={`/media/podcast/${ep && ep.id}`} className="text-blue-600 underline">View Transcript</Link>;
            </div>;
          </li>;

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
                    MP3
                  </a>
                )}
                {ep.audio?.wavUrl && (
                  <a href={ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded" download>
                    WAV
                  </a>
                )}
                {ep.audio?.mp4Url && (
                  <a href={ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>
                    MP4
                  </a>
                )}
              </div>
            </div>
            <div className="mt-3 flex gap-4">
              <Link href={`/media/podcast/${ep.id}`} className="text-blue-600 underline">View Transcript</Link>
            </div>
          </li>

        ))}
      </ul>;
    </div>;
  );
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
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h1 className="text-3xl font-bold">Zion Podcast</h1>;
        <Link href="/studio / host" className="text-blue-600 underline">Create Episode</Link>;
      </div>;
      {episodes.length === 0 && <p > No episodes yet.</p>}
      <ul className="space-y-4">;
        {episodes.map ((ep) => (
          <li key={ep.id} className="border rounded p-4">;
            <div className="flex items-center justify-between">;
              <div>;
                <h2 className="text-xl font-semibold">{ep.title}</h2>;
                <p className="text - sm text-gray-500">Guest: {ep.invitee_name} · {new Date (ep.created_at).toLocaleString ()}</p>;
                {ep.summary && <p className="mt - 2 text-gray-700">{ep.summary}</p>}
              </div>;
              <div className="flex gap-3">;
                {ep.audio?.mp3Url && (
                  <a href={ep.audio.mp3Url} className="px - 3 py - 2 bg - blue-600 text-white rounded" download>;
                    MP3;
                  </a>)}
                {ep.audio?.wav_url && (
                  <a;
                    href={ep.audio.wav_url}
                    className='px - 3 py - 2 bg - gray - 700 text - white rounded';
                    download;
                  >                    WAV;
                  </a>)}
                {ep.audio?.mp4Url && (                  <a href={ep.audio.wav_url} className="px - 3 py - 2 bg - gray-700 text-white rounded" download>;
                    WAV;
                  </a>)}
                {ep.audio?.mp4Url && (
                  <a;
                    href={ep.audio.mp4Url}
                    className='px - 3 py - 2 bg - purple - 700 text - white rounded';
                    download;
                  >                    MP4                  <a href={ep.audio.mp4Url} className="px - 3 py - 2 bg - purple-700 text-white rounded" download>;
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
              </Link>            </div>            <div className="mt-3 flex gap-4">;
              <Link href={`/media / podcast/${ep.id}`} className="text-blue-600 underline">View Transcript</Link>;
            </div>;
          </li>))}
      </ul>;
    </div>);
}

}
'"`

}
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
