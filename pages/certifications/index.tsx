<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState  } from 'react';
import CertificatePreview from '../../components/learn/CertificatePreview';
export default function Certifications() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/learn/leaderboard').then(r;
=======
import {useEffect, useState} from 'react';
import CertificatePreview from '../../components/learn/CertificatePreview';
        </div>
      </div>
      <div>
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Certifications</h1>
        <div className="text-gray-500 text-sm">Your achievements and top learners</div>
      </div>

      <div>
        <div className="font-medium mb-2">Your Certificates</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">


          {/* Demo: show a sample preview for one course to illustrate */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


          <CertificatePreview courseId="ai-dev-foundations" />
        </div>
      </div>
      <div>
<<<<<<< HEAD


        </div>;
      </div>;

      <div>;
        <div className='font-medium mb-2'>Leaderboard (Top Learners)</div>;
        <ol className='list-decimal pl-6 space-y-1 text-sm'>;
          {leaderboard && leaderboard.map(u => (;
            <li key={u && u.userId}>;
              {u && u.name} — {u && u.points} pts;
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='font-medium mb-2'>Leaderboard (Top Learners)</div>
        <ol className='list-decimal pl-6 space-y-1 text-sm'>
          {leaderboard.map(u => (
            <li key={u.userId}>
              {u.name} — {u.points} pts
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            </li>          ))}
=======
<<<<<<< HEAD

=======

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        <div className="font-medium mb-2">Leaderboard (Top Learners)</div>
        <ol className="list-decimal pl-6 space-y-1 text-sm">
          {leaderboard.map((u) => (
            <li key={u.userId}>{u.name} — {u.points} pts</li>
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        </ol>;
      </div>;
    </div>;
  );


=======
        <div className="font-medium mb-2">Leaderboard (Top Learners)</div>
        <ol className="list-decimal pl-6 space-y-1 text-sm">
          {leaderboard.map((u) => (
            <li key={u.userId}>{u.name} — {u.points} pts</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import {useEffect, useState} from 'react';
import CertificatePreview from '../../components / learn / CertificatePreview';
        </div>;
      </div>;
      <div>;
        <div className='font - medium mb - 2'>Leaderboard (Top Learners)</div>;
        <ol className='list - decimal pl - 6 space - y-1 text - sm'>;
          {leaderboard.map (u => (
            <li key={u.user_id}>;
              {u.name} — {u.points} pts;
            </li>          ))}
        </ol>;
      </div>;
    </div>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
