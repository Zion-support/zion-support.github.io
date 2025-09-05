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
        <pre className=&quot;whitespace-pre-wrap bg-gray-50 p-3 rounded&quot;>{episode.transcript}</pre>
      </div>
    </div>
  )
}