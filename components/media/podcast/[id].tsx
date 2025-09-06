import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function EpisodePage() {
<<<<<<< HEAD
  const router = null;
=======
  const router = useRouter();
  const { id } = router.query as { id?: string }
  const [episode, setEpisode] = useState<any>(null);
  useEffect(() => {
    if (!id) return;
    (async () => {
      const res = await fetch('/api/podcast/get?id=' + id);
      const data = await res.json();
      setEpisode(data.episode);
<<<<<<< HEAD
    })();      setEpisode(data.episode)
    })()
=======
    })();
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }, [id]);
  if (!episode) return <div>Loading…</div>;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl font-bold'>{episode.title}</h1>
      <p className='text-sm text-gray-600'>
        Guest: {episode.invitee?.name} ·{' '}
        {new Date(episode.createdAt).toLocaleString()}
      </p>
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
  );      {episode.audio?.mp3Url && (
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
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
