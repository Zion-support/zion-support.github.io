import React from 'react';
import { X } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type SmartNudgeBannerProps = any;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export type SmartNudgeBannerProps = {
=======

export type SmartNudgeBannerProps = {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  role: 'talent' | 'client';
  userId?: string | null;
  message: string;
<<<<<<< HEAD
}
=======
};
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function SmartNudgeBanner({
  role
  userId
  message
}: SmartNudgeBannerProps) {
  const storageKey = React.useMemo(
<<<<<<< HEAD
    () => `zion-nudge-${role}-${userId ?? 'anon'}`
    [role, userId]
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    () => `zion-nudge-${role}-${userId ?? 'anon'}`,
    [role, userId];
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  );  const [hidden, setHidden] = React.useState<boolean>(false);
=======
  );
  const [hidden, setHidden] = React.useState<boolean>(false);

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  React.useEffect(() => {
    try {
      const v =
        typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
<<<<<<< HEAD
      setHidden(v === 'dismissed');    } catch {}export type SmartNudgeBannerProps = {
<<<<<<< HEAD
  role: 'talent' | 'client'
  userId?: string | null;
  message: string
}
export default function SmartNudgeBanner({ role, userId, message }: SmartNudgeBannerProps) {
=======
  role: 'talent' | 'client',;
  userId?: string | null;
  message: string
};

export default function SmartNudgeBanner({ role, userId, message }: SmartNudgeBannerProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const storageKey = React.useMemo(() => `zion-nudge-${role}-${userId ?? 'anon'}`, [role, userId]);
  const [hidden, setHidden] = React.useState<boolean>(false);
  React.useEffect(() => {
    try {
      const v =
        typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed');      const v = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed')
=======
      setHidden(v === 'dismissed');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    } catch {}
  }, [storageKey]);
  const dismiss = React.useCallback(() => {
    setHidden(true);
    try {
      if (typeof window !== 'undefined')
<<<<<<< HEAD
        localStorage.setItem(storageKey, 'dismissed');    } catch {}      if (typeof window !== 'undefined') localStorage.setItem(storageKey, 'dismissed')
=======
<<<<<<< HEAD
        localStorage.setItem(storageKey, 'dismissed');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
        localStorage.setItem(storageKey, 'dismissed');    } catch {}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    } catch {}
  }, [storageKey]);
  if (hidden) return null;

  return (
    <div className='relative rounded-xl border border-cyan-300/40 dark:border-cyan-400/30 bg-cyan-50/60 dark:bg-cyan-900/20 p-4'>
      <button
        onClick={dismiss}
        aria-label='Dismiss'
        className='absolute top-2 right-2 p-1 rounded hover:bg-black/5 dark:hover:bg-white/10'
      >
        <X size={16} />
      </button>
      <div className='text-sm'>{message}</div>
    </div>
<<<<<<< HEAD
  );        <X size={16} />
      </button>
      <div className="text-sm">
        {message}
      </div>
    </div>
);
}
<<<<<<< HEAD
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
=======
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
