<<<<<<< HEAD
import { useEffect, useState } from 'react',;
import CertificatePreview from '../../components/learn/CertificatePreview',;
;
export default function Certifications() {;
  const [leaderboard, setLeaderboard] = useState<any[]>([]),;
;
  useEffect(() => {;
    fetch('/api/learn/leaderboard').then(r => r.json()).then(d => setLeaderboard(d.leaderboard || [])),;
  }, []),;
;
  return (;
    <div className="space-y-6">;
      <div>;
        <h1 className="text-2xl font-semibold">Certifications</h1>;
        <div className="text-gray-500 text-sm">Your achievements and top learners</div>;
      </div>;
;
      <div>;
        <div className="font-medium mb-2">Your Certificates</div>;
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">;
          {/* Demo:show a sample preview for one course to illustrate */}
          <CertificatePreview courseId="ai-dev-foundations" />;
        </div>;
      </div>;
;
      <div>;
        <div className="font-medium mb-2">Leaderboard (Top Learners)</div>;
        <ol className="list-decimal pl-6 space-y-1 text-sm">;
          {leaderboard.map((u) => (;
            <li key={u.userId}>{u.name} — {u.points} pts</li>;
          ))}
        </ol>;
      </div>;
    </div>;
  ),;
=======
import { useEffect, useState } from 'react',
import CertificatePreview from '../../components/learn/CertificatePreview',
export default function Certifications() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]),

  useEffect(() => {
    fetch('/api/learn/leaderboard').then(r => r.json()).then(d => setLeaderboard(d.leaderboard || []))
  }, []),
  return (
    <div className=&quot;space-y-6&quot;>
      <div>
        <h1 className=&quot;text-2xl font-semibold&quot;>Certifications</h1>
        <div className=&quot;text-gray-500 text-sm&quot;>Your achievements and top learners</div>
      </div>

      <div>
        <div className=&quot;font-medium mb-2&quot;>Your Certificates</div>
        <div className=&quot;grid sm:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
          {/* Demo: show a sample preview for one course to illustrate */}
          <CertificatePreview courseId=&quot;ai-dev-foundations&quot; />        </div>
      </div>

      <div>
        <div className=&quot;font-medium mb-2&quot;>Leaderboard (Top Learners)</div>
        <ol className=&quot;list-decimal pl-6 space-y-1 text-sm&quot;>
          {leaderboard.map((u) => (
            <li key={u.userId}>{u.name} — {u.points} pts</li>          ))}
        </ol>
      </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}