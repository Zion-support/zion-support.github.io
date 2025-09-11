
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


export default function EpisodePage() {

  const router = useRouter();
  const { id } = router.query as { id?: string }
  const [episode, setEpisode] = useState<any>(null);
  useEffect(() => {
=======
export default function EpisodePage() {;
  const router = useRouter();
  const { id } = router && router.query as { id?: string };
  const [episode, setEpisode] = useState<any>(null);
  useEffect(() => {;
    if (!id) return;
    (async () => {;
      const res = await fetch('/api/podcast/get?id=' + id);


  }, [id]);
  if (!episode) return <div>Loading…</div>;
  return (


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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
