<<<<<<< HEAD

  return (
    <div className="space-y-6">
      <div>"
        <h1 className="text-2xl font-semibold">Certifications</h1>"
        <div className="text-gray-500 text-sm">Your achievements and top learners</div>
      </div>

      <div>"
        <div className="font-medium mb-2">Your Certificates</div>"
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Demo: show a sample preview for one course to illustrate */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

"
          <CertificatePreview courseId="ai-dev-foundations" />
        </div>
      </div>
      <div>

        </div>;
      </div>;

      <div>;
        <div className='font-medium mb-2'>Leaderboard (Top Learners)</div>;'
        <ol className='list-decimal pl-6 space-y-1 text-sm'>;
          {leaderboard && leaderboard.map(u => (;
            <li key={u && u.userId}>;
              {u && u.name} — {u && u.points} pts;
            </li>          ))}

"
        <div className="font-medium mb-2">Leaderboard (Top Learners)</div>"
        <ol className="list-decimal pl-6 space-y-1 text-sm">
          {leaderboard.map((u) => (
            <li key={u.userId}>{u.name} — {u.points} pts</li>
          ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

        </ol>;
      </div>;
    </div>;
  );

"
        <div className="font-medium mb-2">Leaderboard (Top Learners)</div>"
        <ol className="list-decimal pl-6 space-y-1 text-sm">

          {leaderboard.map((u) => (
            <li key={u.userId}>{u.name} — {u.points} pts</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

'
import {useEffect, useState} from 'react';'
import CertificatePreview from '../../components / learn / CertificatePreview';
        </div>;
      </div>;
      <div>;'
        <div className='font - medium mb - 2'>Leaderboard (Top Learners)</div>;'
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useEffect, useState  } from 'react';
import CertificatePreview from '../../components/learn/CertificatePreview';
export default function Certifications() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  useEffect(() => {'
    fetch('/api/learn/leaderboard').then(r;'
import {useEffect, useState} from 'react';'
import CertificatePreview from '../../components/learn/CertificatePreview';
        </div>
      </div>
<div>
        <div className='font-medium mb-2'>Leaderboard (Top Learners)</div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
export default function Certifications() {}
  const [leaderboard, setLeaderboard] = useState<any[]>([]),
  useEffect(() => {'
    fetch('/api/learn/leaderboard').then(r => r.json()).then(d => setLeaderboard(d.leaderboard || []))
  }, []),
  return ("
    <div className="space-y-6">
      <div>"
        <h1 className="text-2xl font-semibold">Certifications</h1>"
        <div className="text-gray-500 text-sm">Your achievements and top learners</div>
      </div>

<div>
        <div className="font-medium mb-2">Your Certificates</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<<<<<<< HEAD

          {/* Demo: show a sample preview for one course to illustrate */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          <CertificatePreview courseId="ai-dev-foundations" />
        </div>
      </div>
      <div>
;
;
        </div>;
      </div>;

      <div>;'
        <div className='font-medium mb-2'>Leaderboard (Top Learners)</div>;'
        <ol className='list-decimal pl-6 space-y-1 text-sm'>;
          {leaderboard && leaderboard.map(u => (;
<li key={u && u.userId}>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="font-medium mb-2">Leaderboard (Top Learners)</div>
        <ol className="list-decimal pl-6 space-y-1 text-sm">
          {leaderboard.map((u) => (
            <li key={u.userId}>{u.name} — {u.points} pts</li>
          ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </ol>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
