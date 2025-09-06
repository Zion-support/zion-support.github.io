<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState  } from 'react';
import CertificatePreview from '../../components/learn/CertificatePreview';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function Certifications() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  useEffect(() => {
<<<<<<< HEAD
    fetch('/api/learn/leaderboard').then(r;
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
import {useEffect, useState} from 'react';
import CertificatePreview from '../../components/learn/CertificatePreview';
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
        </div>
      </div>
      <div>
        <div className='font-medium mb-2'>Leaderboard (Top Learners)</div>
        <ol className='list-decimal pl-6 space-y-1 text-sm'>
          {leaderboard.map(u => (
            <li key={u.userId}>
              {u.name} — {u.points} pts
<<<<<<< HEAD
            </li>          ))}
        </ol>
      </div>
    </div>
);
<<<<<<< HEAD
=======
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useEffect, useState } from 'react',
import CertificatePreview from '../../components/learn/CertificatePreview'
export default function Certifications() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]),
  useEffect(() => {
    fetch('/api/learn/leaderboard').then(r => r.json()).then(d => setLeaderboard(d.leaderboard || []))
  }, []),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Certifications</h1>
        <div className="text-gray-500 text-sm">Your achievements and top learners</div>
      </div>
      <div>
        <div className="font-medium mb-2">Your Certificates</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<<<<<<< HEAD
          {/* Demo: show a sample preview for one course to illustrate */}
=======
          {/* Demo: show a sample preview for one course to illustrate */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          <CertificatePreview courseId="ai-dev-foundations" />
        </div>
      </div>
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='font-medium mb-2'>Leaderboard (Top Learners)</div>
        <ol className='list-decimal pl-6 space-y-1 text-sm'>
          {leaderboard.map(u => (
            <li key={u.userId}>
              {u.name} — {u.points} pts
            </li>          ))}
        </ol>
      </div>
    </div>
);
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className="font-medium mb-2">Leaderboard (Top Learners)</div>
        <ol className="list-decimal pl-6 space-y-1 text-sm">
          {leaderboard.map((u) => (
            <li key={u.userId}>{u.name} — {u.points} pts</li>
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </ol>;
      </div>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
