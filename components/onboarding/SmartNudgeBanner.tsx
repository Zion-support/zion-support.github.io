import React from 'react';
import { X } from 'lucide-react';
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export type SmartNudgeBannerProps = {
  role: 'talent' | 'client';
  userId?: string | null;
  message: string;
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function SmartNudgeBanner({
  role,
  userId,
  message,
}: SmartNudgeBannerProps) {
  const storageKey = React.useMemo(
    () => `zion-nudge-${role}-${userId ?? 'anon'}`,
    [role, userId]
<<<<<<< HEAD
  );  const [hidden, setHidden] = React.useState<boolean>(false);

  React.useEffect(() => {
    try {
      const v =
        typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed');    } catch {}
=======
  );
=======
export type SmartNudgeBannerProps = {
  role: 'talent' | 'client',
  userId?: string | null;
  message: string
};

export default function SmartNudgeBanner({ role, userId, message }: SmartNudgeBannerProps) {
  const storageKey = React.useMemo(() => `zion-nudge-${role}-${userId ?? 'anon'}`, [role, userId]);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default function SmartNudgeBanner({ role, userId, message }: SmartNudgeBannerProps) {
  const storageKey = React.useMemo(() => `zion-nudge-${role}-${userId ?? 'anon'}`, [role, userId]);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const [hidden, setHidden] = React.useState<boolean>(false);

  React.useEffect(() => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const v =
        typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed');
=======
      const v = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed')
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      const v = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    } catch {}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }, [storageKey]);

  const dismiss = React.useCallback(() => {
    setHidden(true);
    try {
<<<<<<< HEAD
      if (typeof window !== 'undefined')
        localStorage.setItem(storageKey, 'dismissed');    } catch {}
=======
<<<<<<< HEAD
<<<<<<< HEAD
      if (typeof window !== 'undefined')
        localStorage.setItem(storageKey, 'dismissed');
=======
      if (typeof window !== 'undefined') localStorage.setItem(storageKey, 'dismissed')
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      if (typeof window !== 'undefined') localStorage.setItem(storageKey, 'dismissed')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    } catch {}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }, [storageKey]);

  if (hidden) return null;

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    <div className='relative rounded-xl border border-cyan-300/40 dark:border-cyan-400/30 bg-cyan-50/60 dark:bg-cyan-900/20 p-4'>
      <button
        onClick={dismiss}
        aria-label='Dismiss'
        className='absolute top-2 right-2 p-1 rounded hover:bg-black/5 dark:hover:bg-white/10'
      >
<<<<<<< HEAD
=======
=======
    <div className="relative rounded-xl border border-cyan-300/40 dark:border-cyan-400/30 bg-cyan-50/60 dark:bg-cyan-900/20 p-4">
      <button onClick={dismiss} aria-label="Dismiss" className="absolute top-2 right-2 p-1 rounded hover:bg-black/5 dark:hover:bg-white/10">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <X size={16} />
      </button>
      <div className='text-sm'>{message}</div>
    </div>
<<<<<<< HEAD
  );
=======
  );
<<<<<<< HEAD
=======
    <div className="relative rounded-xl border border-cyan-300/40 dark:border-cyan-400/30 bg-cyan-50/60 dark:bg-cyan-900/20 p-4">
      <button onClick={dismiss} aria-label="Dismiss" className="absolute top-2 right-2 p-1 rounded hover:bg-black/5 dark:hover:bg-white/10">
        <X size={16} />
      </button>
      <div className="text-sm">
        {message}
      </div>
    </div>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
