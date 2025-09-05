<<<<<<< HEAD
import React, { useEffect, useState } from 'react',
import Link from 'next/link',
type EpisodeListItem = {
  id: string,
  title: string,
  inviteeName: string,
  createdAt: string,
  summary: string,
  audio?: {
    mp3Url?: string,
    wavUrl?: string,
    mp4Url?: string
  }
},

export default function PodcastIndexPage() {
  const [episodes, setEpisodes] = useState<EpisodeListItem[]>([]),
  const [loading, setLoading] = useState<boolean>(true),
=======
import React, {_useEffect, _useState} from 'react';
import Link from 'next/link';

type EpisodeListItem = {_id: string;
  title: string;
  inviteeName: string;
  createdAt: string;
  summary: string;
  audio?: {
    mp3Url?: string;
    wavUrl?: string;
    mp4Url?: string;};
};

export default function PodcastIndexPage() {_const [episodes, _setEpisodes] = useState<EpisodeListItem[]>([]);
  const [loading, _setLoading] = useState<boolean>(true);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {
    const _load = async () => {
      try {
<<<<<<< HEAD
        const res = await fetch('/api/podcast/list'),
        const data = await res.json(),
        setEpisodes(data.episodes || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    },
    load()
  }, []),
=======
        const _res = await fetch('/api/podcast/list');
        const _data = await res.json();
        setEpisodes(data.episodes || []);} catch (err) {} finally {_setLoading(false);}
    };
    load();
  }, []);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (loading) return <div>Loading episodes…</div>,

<<<<<<< HEAD
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
                    MP3
                  </a>
                )}
                {ep.audio?.wavUrl && (
                  <a href={ep.audio.wavUrl} className=&quot;px-3 py-2 bg-gray-700 text-white rounded&quot; download>
                    WAV
                  </a>
                )}
                {ep.audio?.mp4Url && (
                  <a href={ep.audio.mp4Url} className=&quot;px-3 py-2 bg-purple-700 text-white rounded&quot; download>
=======
  return (_<div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Zion Podcast</h1>
        <Link href="/studio/host" className="text-blue-600 underline">Create Episode</Link>
      </div>
      {_episodes.length === 0 && <p>No episodes yet.</p>}
      <ul className="space-y-4">
        {_episodes.map((ep) => (
          <li key={ep.id} className="border rounded p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">{_ep.title}</h2>
                <p className="text-sm text-gray-500">Guest: {_ep.inviteeName} · {_new Date(ep.createdAt).toLocaleString()}</p>
                {_ep.summary && <p className="mt-2 text-gray-700">{ep.summary}</p>}
              </div>
              <div className="flex gap-3">
                {_ep.audio?.mp3Url && (
                  <a href={ep.audio.mp3Url} className="px-3 py-2 bg-blue-600 text-white rounded" download>
                    MP3
                  </a>
                )}
                {_ep.audio?.wavUrl && (
                  <a href={ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded" download>
                    WAV
                  </a>
                )}
                {_ep.audio?.mp4Url && (
                  <a href={ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    MP4
                  </a>
                )}
              </div>
            </div>
<<<<<<< HEAD
            <div className=&quot;mt-3 flex gap-4&quot;>
              <Link href={`/media/podcast/${ep.id}`} className=&quot;text-blue-600 underline&quot;>View Transcript</a>
=======
            <div className="mt-3 flex gap-4">
              <Link href={_`/media/podcast/${ep.id}`} className="text-blue-600 underline">View Transcript</Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
