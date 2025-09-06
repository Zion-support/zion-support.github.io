
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

  const router = useRouter();
  const { id } = router.query as { id?: string };
  const [episode, setEpisode] = useState<any>(null);
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

export default function EpisodePage() {

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const router = useRouter();
  const { id } = router.query as { id?: string }
  const [episode, setEpisode] = useState<any>(null);
  useEffect(() => {

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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

