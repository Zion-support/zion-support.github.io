<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import { X } from 'lucide-react';


  role: 'talent' | 'client';
  user_id?: string | null;
  message: string;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    () => `zion-nudge-${role}-${userId ?? 'anon'}`,
    [role, userId];


  );  const [hidden, setHidden] = React.useState<boolean>(false);
  React.useEffect(() => {
    try {
      const v =
        typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed');    } catch {}export type SmartNudgeBannerProps = {


  role: 'talent' | 'client',;
  userId?: string | null;
  message: string
};

export default function SmartNudgeBanner({ role, userId, message }: SmartNudgeBannerProps) {;


  const storageKey = React.useMemo(() => `zion-nudge-${role}-${userId ?? 'anon'}`, [role, userId]);
  const [hidden, setHidden] = React.useState<boolean>(false);
  React.useEffect(() => {
    try {
      const v =
        typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed');      const v = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed')
    } catch {}
  }, [storageKey]);
  const dismiss = React.useCallback(() => {

<<<<<<< HEAD
<<<<<<< HEAD
;
export type SmartNudgeBannerProps = {
  role: 'talent' | 'client';
  user_id?: string | null;
  message: string;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};
export default function SmartNudgeBanner(): any ({;
  role,;
  userId,;
  message,;
}: SmartNudgeBannerProps) {;
  const storageKey = React && React.useMemo(;
    () => `zion-nudge-${role}-${userId ?? 'anon'}`,;
    [role, userId];
  );  const [hidden, setHidden] = React && React.useState<boolean>(false);
  React && React.useEffect(() => {;
    try {;
      const v =;
        typeof window !== 'undefined' ? localStorage && localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed');    } catch {}export type SmartNudgeBannerProps = {;
  role: 'talent' | 'client',;
  userId?: string | null;
  message: string;
};
export default function SmartNudgeBanner(): any ({ role, userId, message }: SmartNudgeBannerProps) {;
  const storageKey = React && React.useMemo(() => `zion-nudge-${role}-${userId ?? 'anon'}`, [role, userId]);
  const [hidden, setHidden] = React && React.useState<boolean>(false);
  React && React.useEffect(() => {;
    try {;
      const v =;
        typeof window !== 'undefined' ? localStorage && localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed');      const v = typeof window !== 'undefined' ? localStorage && localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed');
<<<<<<< HEAD
<<<<<<< HEAD
export type SmartNudgeBannerProps = {
  role: 'talent' | 'client',
  userId?: string | null;
  message: string
};
export default function SmartNudgeBanner({ role, userId, message }: SmartNudgeBannerProps) {
  const storageKey = React.useMemo(() => `zion-nudge-${role}-${userId ?? 'anon'}`, [role, userId]);
  const [hidden, setHidden] = React.useState<boolean>(false);
  React.useEffect(() => {
    try {
      const v = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed')
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch {}
  }, [storageKey]);
  const dismiss = React && React.useCallback(() => {;
    setHidden(true);
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setHidden(true);
    try {
      if (typeof window !== 'undefined')

        localStorage.setItem(storageKey, 'dismissed');    } catch {}


<<<<<<< HEAD
    try {
      if (typeof window !== 'undefined') localStorage.setItem(storageKey, 'dismissed')
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
    setHidden(true);
    try {
      if (typeof window !== 'undefined')
        localStorage.setItem(storageKey, 'dismissed');    } catch {}      if (typeof window !== 'undefined') localStorage.setItem(storageKey, 'dismissed')
        localStorage.setItem(storageKey, 'dismissed');    } catch {}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch {}
  }, [storageKey]);
  if (hidden) return null;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        {message}

      </div>;
    </div>;
  );
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='text-sm'>{message}</div>
    </div>

  );

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


}


<<<<<<< HEAD
<<<<<<< HEAD
    <div className="relative rounded-xl border border-cyan-300/40 dark:border-cyan-400/30 bg-cyan-50/60 dark:bg-cyan-900/20 p-4">
      <button onClick={dismiss} aria-label="Dismiss" className="absolute top-2 right-2 p-1 rounded hover:bg-black/5 dark:hover:bg-white/10">
        <X size={16} />
      </button>
      <div className="text-sm">
        {message}
      </div>;
    </div>;
  );
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
;
export default /**
 * SmartNudgeBanner - Function description
 */
function SmartNudgeBanner() {
  const storage_key = React.useMemo (
    () => `zion - nudge-${role}-${user_id ?? 'anon'}`,
    [role, user_id]);  const [hidden, set_hidden] = React.useState < boolean>(false);
;
  React.useEffect (() => {
    try {
      const v =;
        typeof window !== 'undefined' ? local_storage.get_item (storage_key) : null;
      set_hidden (v === 'dismissed');    } catch {}export type SmartNudgeBannerProps = {
  role: 'talent' | 'client',
  user_id?: string | null;
  message: string;
}
;
export default /**
 * SmartNudgeBanner - Function description
 */
function SmartNudgeBanner() {
  const storage_key = React.useMemo (() => `zion - nudge-${role}-${user_id ?? 'anon'}`, [role, user_id]);
  const [hidden, set_hidden] = React.useState < boolean>(false);
;
  React.useEffect (() => {
    try {
      const v =;
        typeof window !== 'undefined' ? local_storage.get_item (storage_key) : null;
      set_hidden (v === 'dismissed');      const v = typeof window !== 'undefined' ? local_storage.get_item (storage_key) : null;
      set_hidden (v === 'dismissed');
    } catch {}
  }, [storage_key]);
;
  const dismiss = React.useCallback (() => {
    set_hidden (true);
    try {
      if (
        local_storage.set_item (storage_key, 'dismissed')) {
  $2
}    } catch {}      if (local_storage.set_item (storage_key, 'dismissed')) {
  $2
}
    } catch {}
  }, [storage_key]);
;
  // Check condition
if (return null) {
  $2
}
  return (
    <div className='relative rounded - xl border border - cyan - 300 / 40 dark:border - cyan - 400 / 30 bg - cyan - 50 / 60 dark:bg - cyan - 900 / 20 p - 4'>;
      <button;
        on_click={dismiss}
        aria - label='Dismiss';
        className='absolute top - 2 right - 2 p - 1 rounded hover:bg - black / 5 dark:hover:bg - white / 10';
      >;
        <X size={16} />;
      </button>;
      <div className='text - sm'>{message}</div>;
    </div>);        <X size={16} />;
      </button>;
      <div className="text - sm">;
        {message}
      </div>;
    </div>);
  if (hidden) return null,

  return (
    <div className=&quot;relative rounded-xl border border-cyan-300/40 dark:border-cyan-400/30 bg-cyan-50/60 dark:bg-cyan-900/20 p-4&quot;>
      <button onClick={dismiss} aria-label=&quot;Dismiss&quot; className=&quot;absolute top-2 right-2 p-1 rounded hover:bg-black/5 dark:hover:bg-white/10&quot;>
        <X size={16} />
      </button>
      <div className=&quot;text-sm&quot;>
        {message}
      </div>
    </div>
  )

}
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { X } from 'lucide-react';

export type SmartNudgeBannerProps = {;
  role: 'talent' | 'client';
  userId?: string | null;
  message: string;
}
export default function SmartNudgeBanner({
  role
  userId
  message
}: SmartNudgeBannerProps) {
  const storageKey = React.useMemo(
    () => `zion-nudge-${role}-${userId ?? 'anon'}`
    [role, userId]
    () => `zion-nudge-${role}-${userId ?? 'anon'}`,
    [role, userId];
  );  const [hidden, setHidden] = React.useState<boolean>(false);
  React.useEffect(() => {
    try {
      const v =
        typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed');    } catch {}export type SmartNudgeBannerProps = {
  role: 'talent' | 'client'
  userId?: string | null;
  message: string
}
export default function SmartNudgeBanner({ role, userId, message }: SmartNudgeBannerProps) {
  role: 'talent' | 'client',;
  userId?: string | null;
  message: string
};

export default function SmartNudgeBanner({ role, userId, message }: SmartNudgeBannerProps) {;
  const storageKey = React.useMemo(() => `zion-nudge-${role}-${userId ?? 'anon'}`, [role, userId]);
  const [hidden, setHidden] = React.useState<boolean>(false);
  React.useEffect(() => {
    try {
      const v =
        typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed');      const v = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed')
    } catch {}
  }, [storageKey]);
  const dismiss = React.useCallback(() => {
    setHidden(true);
    try {
      if (typeof window !== 'undefined')
        localStorage.setItem(storageKey, 'dismissed');    } catch {}      if (typeof window !== 'undefined') localStorage.setItem(storageKey, 'dismissed')
        localStorage.setItem(storageKey, 'dismissed');    } catch {}

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
  );        <X size={16} />
      </button>
      <div className="text-sm">
        {message}
      </div>
    </div>
);
}
  );

}
  );
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
