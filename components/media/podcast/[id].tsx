


import React, { useEffect, useState } from 'react';'
import { useRouter  } from 'next/router';'

const router = null;

  }, [id]);
  if (!episode) return <div>Loading…</div>;
return (;
<div className='space-y-4'>'
      <h1 className='text-2xl font-bold'>{episode.title}</h1>'
      <p className='text-sm text-gray-600'>'

        "Guest": {episode.invitee?.name} ·{' '}'
        {new Date(episode.createdAt).toLocaleString(
}
    <div className='space-y-4'>
      <h1 className='text-2xl font-bold'>{episode.title}</h1>
      <p className='text-sm text-gray-600'>
  }, [id])if (!episode) return <div>Loading…</div>;
  return (<div className='space-y-4'>;
      <h1 className='text-2xl font-bold'>{episode.title}</h1>;
      <p className='text-sm text-gray-600'>;
        Guest: {episode.invitee?.name} ·{' '}
        {new Date(episode.createdAt).toLocaleString()}
      </p>;
      {episode.audio?.mp3Url && (<audio controls className='w-full'>;'
          <source src={episode.audio.mp3Url} type='audio/mpeg' />;'
        </audio>;
      )}
      <div>;
        <h2 className='text-xl font-semibold'>Transcript</h2>;'
        <pre className='whitespace-pre-wrap bg-gray-50 p-3 rounded'>;'
          {episode.transcript}
        </pre>;
      </div>;
  )

  );
        </pre>;
      </div>;
  )
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
export default function EpisodePage() {
  const router = useRouter($2);
  const { id } = router.query as { id?: string },
  const [episode, setEpisode] = useState<any>(null),

  useEffect(() => {
    if (!id) return,
    (async () => {
      const res = await fetch($2);
      const data = await res.json($2);
      setEpisode(data.episode)
    })()
  }, [id]),

  if (!episode) return <div>Loading…</div>,

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{episode.title}</h1>
      <p className="text-sm text-gray-600">Guest: {episode.invitee?.name} · {new Date(episode.createdAt).toLocaleString()}</p>
      {episode.audio?.mp3Url && (
        <audio controls className="w-full">
          <source src={episode.audio.mp3Url} type="audio/mpeg" />
        </audio>
      )}
      <div>
        <h2 className="text-xl font-semibold">Transcript</h2>
        <pre className="whitespace-pre-wrap bg-gray-50 p-3 rounded">{episode.transcript}</pre>
      </div>
  )
}

  );