import {useEffect, useState} from 'react';
import CertificatePreview from '../../components/learn/CertificatePreview';
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
