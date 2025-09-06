import { useEffect, useState } from 'react';
import CertificatePreview from '../../components/learn/CertificatePreview';
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
export default function Certifications() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);

  useEffect(() => {
<<<<<<< HEAD
    fetch('/api/learn/leaderboard')
      .then(r => r.json())
      .then(d => setLeaderboard(d.leaderboard || []));
  }, []);

  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-2xl font-semibold'>Certifications</h1>
        <div className='text-gray-500 text-sm'>
          Your achievements and top learners
        </div>
      </div>

      <div>
        <div className='font-medium mb-2'>Your Certificates</div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* Demo: show a sample preview for one course to illustrate */}
          <CertificatePreview courseId='ai-dev-foundations' />
=======
    fetch('/api/learn/leaderboard').then(r => r.json()).then(d => setLeaderboard(d.leaderboard || []))
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Certifications</h1>
        <div className="text-gray-500 text-sm">Your achievements and top learners</div>
      </div>

      <div>
        <div className="font-medium mb-2">Your Certificates</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Demo: show a sample preview for one course to illustrate */}
          <CertificatePreview courseId="ai-dev-foundations" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        </div>
      </div>

      <div>
<<<<<<< HEAD
        <div className='font-medium mb-2'>Leaderboard (Top Learners)</div>
        <ol className='list-decimal pl-6 space-y-1 text-sm'>
          {leaderboard.map(u => (
            <li key={u.userId}>
              {u.name} — {u.points} pts
            </li>
=======
        <div className="font-medium mb-2">Leaderboard (Top Learners)</div>
        <ol className="list-decimal pl-6 space-y-1 text-sm">
          {leaderboard.map((u) => (
            <li key={u.userId}>{u.name} — {u.points} pts</li>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          ))}
        </ol>
      </div>
    </div>
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
