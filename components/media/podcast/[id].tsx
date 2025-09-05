<<<<<<< HEAD
import React, { useEffect, useState } from 'react',;
import { useRouter } from 'next/router',;
;
export default function EpisodePage() {;
  const router = useRouter(),;
  const { id } = router.query as { id?:string },;
  const [episode, setEpisode] = useState<any>(null),;
;
  useEffect(() => {;
    if (!id) return,;
    (async () => {;
      const res = await fetch('/api/podcast/get?id=' + id),;
      const data = await res.json(),;
      setEpisode(data.episode),;
    })(),;
  }, [id]),;
;
  if (!episode) return <div>Loading…</div>,;
;
  return (;
    <div className="space-y-4">;
      <h1 className="text-2xl font-bold">{episode.title}</h1>;
      <p className="text-sm text-gray-600">Guest:{episode.invitee?.name} · {new Date(episode.createdAt).toLocaleString()}</p>;
      {episode.audio?.mp3Url && (;
        <audio controls className="w-full">;
          <source src={episode.audio.mp3Url} type="audio/mpeg" />;
        </audio>;
      )}
      <div>;
        <h2 className="text-xl font-semibold">Transcript</h2>;
        <pre className="whitespace-pre-wrap bg-gray-50 p-3 rounded">{episode.transcript}</pre>;
      </div>;
    </div>;
  ),;
=======
import React, { useEffect, useState } from 'react',
import { useRouter } from 'next/router',
export default function EpisodePage() {
  const router = useRouter(),
  const { id } = router.query as { id?: string },
  const [episode, setEpisode] = useState<any>(null),

  useEffect(() => {
    if (!id) return,
    (async () => {
      const res = await fetch('/api/podcast/get?id=' + id),
      const data = await res.json(),
      setEpisode(data.episode)
    })()
  }, [id]),
  if (!episode) return <div>Loading…</div>,

  return (
    <div className=&quot;space-y-4&quot;>
      <h1 className=&quot;text-2xl font-bold&quot;>{episode.title}</h1>
      <p className=&quot;text-sm text-gray-600&quot;>Guest: {episode.invitee?.name} · {new Date(episode.createdAt).toLocaleString()}</p>
      {episode.audio?.mp3Url && (
        <audio controls className=&quot;w-full&quot;>
          <source src={episode.audio.mp3Url} type=&quot;audio/mpeg&quot; />
        </audio>
      )}
      <div>
        <h2 className=&quot;text-xl font-semibold&quot;>Transcript</h2>
        <pre className=&quot;whitespace-pre-wrap bg-gray-50 p-3 rounded&quot;>{episode.transcript}</pre>      </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}