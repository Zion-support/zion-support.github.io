import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function EpisodePage() {
  const router = useRouter();
  const { id } = router.query as { id?: string };
  const [episode, setEpisode] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const res = await fetch('/api/podcast/get?id=' + id);
      const data = await res.json();
<<<<<<< HEAD
<<<<<<< HEAD
      setEpisode(data.episode);
    })();
=======
      setEpisode(data.episode)
    })()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setEpisode(data.episode)
    })()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }, [id]);

  if (!episode) return <div>Loading…</div>;

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    <div className='space-y-4'>
      <h1 className='text-2xl font-bold'>{episode.title}</h1>
      <p className='text-sm text-gray-600'>
        Guest: {episode.invitee?.name} ·{' '}
        {new Date(episode.createdAt).toLocaleString()}
      </p>
<<<<<<< HEAD
=======
=======
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{episode.title}</h1>
      <p className="text-sm text-gray-600">Guest: {episode.invitee?.name} · {new Date(episode.createdAt).toLocaleString()}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {episode.audio?.mp3Url && (
        <audio controls className='w-full'>
          <source src={episode.audio.mp3Url} type='audio/mpeg' />
        </audio>
      )}
      <div>
        <h2 className='text-xl font-semibold'>Transcript</h2>
        <pre className='whitespace-pre-wrap bg-gray-50 p-3 rounded'>
          {episode.transcript}
        </pre>
      </div>
    </div>
<<<<<<< HEAD
  );
=======
  );
<<<<<<< HEAD
=======
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
    </div>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
