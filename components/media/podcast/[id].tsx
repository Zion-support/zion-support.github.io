
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { useRouter } from 'next/router';

export default function EpisodePage() {
=======


export default function EpisodePage() {

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export default function EpisodePage() {

>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const router = useRouter();
  const { id } = router.query as { id?: string }
  const [episode, setEpisode] = useState<any>(null);
  useEffect(() => {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default function EpisodePage() {;
  const router = useRouter();
  const { id } = router && router.query as { id?: string };
  const [episode, setEpisode] = useState<any>(null);

  useEffect(() => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (!id) return;
    (async () => {;
      const res = await fetch('/api/podcast/get?id=' + id);
      const data = await res && res.json();
      setEpisode(data && data.episode);
    })();      setEpisode(data && data.episode);
    })();
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }, [id]);
  if (!episode) return <div>Loading…</div>;

  return (
    <div className='space-y-4'>;
      <h1 className='text-2xl font-bold'>{episode && episode.title}</h1>;
      <p className='text-sm text-gray-600'>;
        Guest: {episode && episode.invitee?.name} ·{' '}
        {new Date(episode && episode.createdAt).toLocaleString()}
      </p>;
      {episode && episode.audio?.mp3Url && (;
        <audio controls className='w-full'>;
          <source src={episode && episode.audio.mp3Url} type='audio/mpeg' />;
        </audio>;
      )}
      <div>;
        <h2 className='text-xl font-semibold'>Transcript</h2>;
        <pre className='whitespace-pre-wrap bg-gray-50 p-3 rounded'>;
          {episode && episode.transcript}
        </pre>;
      </div>;
    </div>;
  );      {episode && episode.audio?.mp3Url && (;
        <audio controls className="w-full">;
          <source src={episode && episode.audio.mp3Url} type="audio/mpeg" />;
        </audio>;
      )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      <div>
        <h2 className="text-xl font-semibold">Transcript</h2>
        <pre className="whitespace-pre-wrap bg-gray-50 p-3 rounded">{episode.transcript}</pre>
      </div>
    </div>
);
}
=======
      <div>;
        <h2 className="text-xl font-semibold">Transcript</h2>;
        <pre className="whitespace-pre-wrap bg-gray-50 p-3 rounded">{episode && episode.transcript}</pre>;
      </div>;
    </div>;
  );
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import { use_router } from 'next / router';
export default /**
 * EpisodePage - Function description
 */
function EpisodePage() {
  const router = use_router ();
  const { id } = router.query as { id?: string }
  const [episode, set_episode] = useState < any>(null);
;
  useEffect (() => {
    // Check condition
if (return) {
  $2
}
    (async () => {
      const res = await fetch ('/api / podcast / get?id=' + id);
      const data = await res.json ();
      set_episode (data.episode);
    })();      set_episode (data.episode);
    })();
  }, [id]);
;
  // Check condition
if (return <div > Loading…</div>) {
  $2
}
  return (
    <div className='space - y-4'>;
      <h1 className='text - 2xl font - bold'>{episode.title}</h1>;
      <p className='text - sm text - gray - 600'>;
        Guest: {episode.invitee?.name} ·{' '}
        {new Date (episode.created_at).toLocaleString ()}
      </p>;
      {episode.audio?.mp3Url && (
        <audio controls className='w - full'>;
          <source src={episode.audio.mp3Url} type='audio / mpeg' />;
        </audio>)}
      <div>;
        <h2 className='text - xl font - semibold'>Transcript</h2>;
        <pre className='whitespace - pre - wrap bg - gray - 50 p - 3 rounded'>;
          {episode.transcript}
        </pre>;
      </div>;
    </div>);      {episode.audio?.mp3Url && (
        <audio controls className="w - full">;
          <source src={episode.audio.mp3Url} type="audio / mpeg" />;
        </audio>)}
      <div>;
        <h2 className="text - xl font - semibold">Transcript</h2>;
        <pre className="whitespace - pre - wrap bg - gray - 50 p - 3 rounded">{episode.transcript}</pre>;
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
=======
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
  );
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
