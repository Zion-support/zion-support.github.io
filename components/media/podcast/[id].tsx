<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
export default function EpisodePage() {
export default function EpisodePage() {
  const router = useRouter();
  const { id } = router.query as { id?: string };
  const [episode, setEpisode] = useState<any>(null);

  const router = useRouter();
  const { id } = router.query as { id?: string }
  const [episode, setEpisode] = useState<any>(null)
  useEffect(() => {}
export default function EpisodePage() { return null; }
  const { id } = router && router.query as { id?: string }
  const [episode, setEpisode] = useState<any>(null)
  useEffect(() => {
    if (!id) return
    (async () => {
      const res = await fetch('/api/podcast/get?id=' + id)
  }, [id])
  if (!episode) return <div>Loading…</div>
  return (
      <div>
        <h2 className="text-xl font-semibold">Transcript</h2>"
        <pre className="whitespace-pre-wrap bg-gray-50 p-3 rounded">{episode.transcript}</pre>
      </div>
    </div>
<<<<<<< HEAD

  );

=======
if (!episode) return <div>Loading…</div>
return (</div> </div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
);
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
