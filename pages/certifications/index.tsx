<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
import { useEffect, useState } from 'react',
import CertificatePreview from '../../components/learn/CertificatePreview'
export default function Certifications() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]),
  useEffect(() => {
    fetch('/api/learn/leaderboard').then(r => r.json()).then(d => setLeaderboard(d.leaderboard || []))
  }, []),

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======

          {/* Demo: show a sample preview for one course to illustrate */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <CertificatePreview courseId="ai-dev-foundations" />
        </div>
      </div>
      <div>

<<<<<<< HEAD
=======

        </div>;
      </div>;

      <div>;
        <div className='font-medium mb-2'>Leaderboard (Top Learners)</div>;
        <ol className='list-decimal pl-6 space-y-1 text-sm'>;
          {leaderboard && leaderboard.map(u => (;
            <li key={u && u.userId}>;
              {u && u.name} — {u && u.points} pts;
            </li>          ))}
=======

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
<<<<<<< HEAD
export default function Certifications() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  useEffect(() => {
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
              {u && u.name} — {u && u.points} pts;
            </li>          ))}
        </ol>;
      </div>;
    </div>;
  );
        <div className="font-medium mb-2">Leaderboard (Top Learners)</div>
        <ol className="list-decimal pl-6 space-y-1 text-sm">

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
          <CertificatePreview courseId=&quot;ai-dev-foundations&quot; />
        </div>
      </div>

      <div>
        <div className=&quot;font-medium mb-2&quot;>Leaderboard (Top Learners)</div>
        <ol className=&quot;list-decimal pl-6 space-y-1 text-sm&quot;>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {leaderboard.map((u) => (
            <li key={u.userId}>{u.name} — {u.points} pts</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
