import React, { useEffect, useState } from 'react',;
import Link from 'next/link',;
type EpisodeListItem = {;
  id: string,;
  title: string,;
  inviteeName: string,;
  createdAt: string,;
  summary: string,;
  audio?: {;
    mp3Url?: string,;
    wavUrl?: string,;
    mp4Url?: string;
  }
},;
export default function PodcastIndexPage() {;
  const [episodes, setEpisodes] = useState<EpisodeListItem[]>([]),;

  const [loading, setLoading] = useState<boolean>(true),;
</boolean>
  if (loading) return <div>Loading episodes</div>,
    <div className="space-y-6">"
</div>"
      <div className="flex items-center justify-between">"
        <h1 className="text-3xl font-bold">Zion Podcast</h1>""
        <Link href="/studio/host" className="text-blue-600 underline">Create Episode</a>"

      </div>
      {episodes.length === 0 && <p>No episodes yet.</p>}"
      <ul className="space-y-4">"
</ul>"
          <li key={ep.id} className="border rounded p-4">"
</li>"
              <div>
                <h2 className="text-xl font-semibold">{ep.title}</h2>""
                <p className="text-sm text-gray-500">Guest: {ep.inviteeName}  {new Date(ep.createdAt).toLocaleString()}</p>""
                {ep.summary && <p className="mt-2 text-gray-700">{ep.summary}</p>}"
              <div className="flex gap-3">"
                  <a href={ep.audio.mp3Url} className="px-3 py-2 bg-blue-600 text-white rounded" download>"
</a>
                  </a>"
                  <a href={ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded" download>"
                  <a href={ep.audio.mp4Url} className="px-3 py-2 bg-purple-700 text-white rounded" download>"
            <div className="mt-3 flex gap-4">"
              <Link href={`/media/podcast/${ep.id}`} className="text-blue-600 underline">View Transcript</a>"

          </li>
      </ul>;
    </div>;"`;