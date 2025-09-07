<<<<<<< HEAD
=======


<<<<<<< HEAD:pages.disabled/certifications/index.tsx
import { useEffect, useState  } from 'react';
import CertificatePreview from '../../components/learn/CertificatePreview';
export default function Certifications() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/learn/leaderboard').then(r;
import {useEffect, useState} from 'react';
import CertificatePreview from '../../components/learn/CertificatePreview';
        </div>
      </div>
      <div>
        <div className='font-medium mb-2'>Leaderboard (Top Learners)</div>

        </div>
      </div>

      <div>
<div className='font-medium mb-2'>Leaderboard (Top Learners)</div>
origin/cursor/automate-test-improve-and-merge-code-2533
        <ol className='list-decimal pl-6 space-y-1 text-sm'>
          {leaderboard.map(u => (
            <li key={u.userId}>
              {u.name} — {u.points} pts
            </li>          ))}
            </li>
          ))}
        </ol>
      </div>
    </div>
);
import { useEffect, useState } from 'react',
import { useEffect, useState } from 'react',;
import CertificatePreview from '../../components/learn/CertificatePreview'
export default function Certifications() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]),
  useEffect(() => {
    fetch('/api/learn/leaderboard').then(r => r.json()).then(d => setLeaderboard(d.leaderboard || []))
  }, []),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/certifications/index.tsx
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Certifications</h1>
        <div className="text-gray-500 text-sm">Your achievements and top learners</div>
      </div>

      <div>
        <div className="font-medium mb-2">Your Certificates</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <CertificatePreview courseId="ai-dev-foundations" />

        </div>
      </div>
      <div>


        </div>;
      </div>;

      <div>;
        <div className='font-medium mb-2'>Leaderboard (Top Learners)</div>;
        <ol className='list-decimal pl-6 space-y-1 text-sm'>;
          {leaderboard && leaderboard.map(u => (;
            <li key={u && u.userId}>;
<<<<<<< HEAD:pages.disabled/certifications/index.tsx
=======
              {u && u.name} — {u && u.points} pts;
            </li>          ))}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/certifications/index.tsx
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
<<<<<<< HEAD:pages.disabled/certifications/index.tsx
=======


        <div className="font-medium mb-2">Leaderboard (Top Learners)</div>
        <ol className="list-decimal pl-6 space-y-1 text-sm">
<<<<<<< HEAD
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/certifications/index.tsx
import {useEffect, useState} from 'react';
import CertificatePreview from '../../components / learn / CertificatePreview';
        </div>;
      </div>;
      <div>;
        <div className='font - medium mb - 2'>Leaderboard (Top Learners)</div>;
        <ol className='list - decimal pl - 6 space - y-1 text - sm'>;
          {leaderboard.map (u => (
            <li key={u.user_id}>;
            </li>          ))}
        </ol>;
      </div>;
    </div>);
;
<<<<<<< HEAD:pages.disabled/certifications/index.tsx
=======
<<<<<<< HEAD
import { useEffect, useState  } from 'react';
import CertificatePreview from '../../components/learn/CertificatePreview';
export default function Certifications() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/learn/leaderboard').then(r;
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
import { useEffect, useState } from 'react',
import CertificatePreview from '../../components/learn/CertificatePreview'
export default function Certifications() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]),
  useEffect(() => {
    fetch('/api/learn/leaderboard').then(r => r.json()).then(d => setLeaderboard(d.leaderboard || []))
  }, []),
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
          {/* Demo: show a sample preview for one course to illustrate */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <CertificatePreview courseId="ai-dev-foundations" />
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/certifications/index.tsx
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages.disabled/certifications/index.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
=======

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/certifications/index.tsx
