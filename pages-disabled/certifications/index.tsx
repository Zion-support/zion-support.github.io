<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934





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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useEffect, useState  } from 'react';
import CertificatePreview from '../../components/learn/CertificatePreview';
=======
import { useEffect, useState  } from 'react';
import CertificatePreview from '../../components/learn/CertificatePreview';
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function Certifications() {
=======
'
import { useEffect, useState  } from 'react';'
import CertificatePreview from '../../components/learn/CertificatePreview';
export default function Certifications() {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  useEffect(() => {'
    fetch('/api/learn/leaderboard').then(r;'
import {useEffect, useState} from 'react';'
import CertificatePreview from '../../components/learn/CertificatePreview';
        </div>
      </div>
<<<<<<< HEAD
      <div>
        <div className='font-medium mb-2'>Leaderboard (Top Learners)</div>
<<<<<<< HEAD
=======
=======

        </div>
      </div>

      <div>
<div className='font-medium mb-2'>Leaderboard (Top Learners)</div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <ol className='list-decimal pl-6 space-y-1 text-sm'>
          {leaderboard.map(u => (
            <li key={u.userId}>
              {u.name} — {u.points} pts
<<<<<<< HEAD
=======
      <div>'
        <div className='font-medium mb-2'>Leaderboard (Top Learners)</div>'
        <ol className='list-decimal pl-6 space-y-1 text-sm'>
          {leaderboard.map(u => (
            <li key={u.userId}>
              {u.name} — {u.points} pts;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </li>          ))}
=======
            </li>
          ))}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </ol>
      </div>
    </div>
<<<<<<< HEAD
);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useEffect, useState } from 'react',
=======
);'
import { useEffect, useState } from 'react','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
      <div>
        <div className="font-medium mb-2">Your Certificates</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<<<<<<< HEAD
<<<<<<< HEAD

          {/* Demo: show a sample preview for one course to illustrate */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      <div>"
        <div className="font-medium mb-2">Your Certificates</div>"
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
            <li key={u && u.userId}>;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div className="font-medium mb-2">Leaderboard (Top Learners)</div>
=======
            <li key={u && u.userId}>;"
        <div className="font-medium mb-2">Leaderboard (Top Learners)</div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======






  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======





'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
