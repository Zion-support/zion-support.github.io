<<<<<<< HEAD
import React from 'react',
import { X } from 'lucide-react',
export type SmartNudgeBannerProps = {
  role: 'talent' | 'client',
  userId?: string | null,
  message: string
},

export default function SmartNudgeBanner({ role, userId, message }: SmartNudgeBannerProps) {
  const storageKey = React.useMemo(() => `zion-nudge-${role}-${userId ?? 'anon'}`, [role, userId]),
  const [hidden, setHidden] = React.useState<boolean>(false),

  React.useEffect(() => {
    try {
      const v = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null,
      setHidden(v === 'dismissed')
    } catch {}
  }, [storageKey]),

  const dismiss = React.useCallback(() => {
    setHidden(true),
    try {
      if (typeof window !== 'undefined') localStorage.setItem(storageKey, 'dismissed')
    } catch {}
  }, [storageKey]),
=======
import React from 'react';

export type SmartNudgeBannerProps = {_role: 'talent' | 'client';
  userId?: string | null;
  message: string;};

export default function SmartNudgeBanner(_{_role, _userId, _message}: SmartNudgeBannerProps) {_const _storageKey = React.useMemo__(() => `zion-nudge-${role}-${_userId ?? 'anon'}`, [role, userId]);
  const [hidden, setHidden] = React.useState<boolean>(false);

  React.useEffect__(() => {_try {
      const _v = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed');} catch {}
  }, [storageKey]);

  const _dismiss = React.useCallback__(() => {_setHidden(true);
    try {
      if (typeof window !== 'undefined') localStorage.setItem(storageKey, _'dismissed');} catch {}
  }, [storageKey]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (hidden) return null,

  return (
<<<<<<< HEAD
    <div className=&quot;relative rounded-xl border border-cyan-300/40 dark:border-cyan-400/30 bg-cyan-50/60 dark:bg-cyan-900/20 p-4&quot;>
      <button onClick={dismiss} aria-label=&quot;Dismiss&quot; className=&quot;absolute top-2 right-2 p-1 rounded hover:bg-black/5 dark:hover:bg-white/10&quot;>
        <X size={16} />
      </button>
      <div className=&quot;text-sm&quot;>
        {message}
=======
    <div className="relative rounded-xl border border-cyan-300/40 dark:border-cyan-400/30 bg-cyan-50/60 dark:bg-cyan-900/20 p-4">
      <button onClick={_dismiss} aria-label="Dismiss" className="absolute top-2 right-2 p-1 rounded hover:bg-black/5 dark:hover:bg-white/10">
        <X size={_16} />
      </button>
      <div className="text-sm">
        {_message}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    </div>
  )
}