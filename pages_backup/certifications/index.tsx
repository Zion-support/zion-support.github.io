import { useEffect, useState  } from 'react';
import CertificatePreview from '../../components/learn/CertificatePreview';

        </div>
      </div>

      <div>
<div className='font-medium mb-2'>Leaderboard (Top Learners)</div>
origin/cursor/automate-test-improve-and-merge-code-2533
        <ol className='list-decimal pl-6 space-y-1 text-sm'>
          {leaderboard.map(u => (
            <li key={u.userId}>
              {u.name} — {u.points} pts
            </li>
          ))}
        </ol>
      </div>
    </div>
);
origin/cursor/automate-test-improve-and-merge-code-2533
