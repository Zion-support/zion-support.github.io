
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
import { useRouter } from 'next/router';
export default function EpisodePage() {;
  const router = useRouter();
  const { id } = router && router.query as { id?: string };
  const [episode, setEpisode] = useState<any>(null);

  useEffect(() => {;
    if (!id) return;
    (async () => {;
      const res = await fetch('/api/podcast/get?id=' + id);
      const data = await res && res.json();
      setEpisode(data && data.episode);
    })();      setEpisode(data && data.episode);
    })();
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
      <div>;
        <h2 className="text-xl font-semibold">Transcript</h2>;
        <pre className="whitespace-pre-wrap bg-gray-50 p-3 rounded">{episode && episode.transcript}</pre>;
      </div>;
    </div>;
  );
}
