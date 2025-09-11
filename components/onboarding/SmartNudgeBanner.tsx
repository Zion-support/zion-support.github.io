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
=======
    } catch {}
  }, [storageKey]);
  const dismiss = React && React.useCallback(() => {;
    setHidden(true);

=======    setHidden(true);
    try {
      if (typeof window !== 'undefined')

        localStorage.setItem(storageKey, 'dismissed');    } catch {}



=======
    setHidden(true);
    try {
      if (typeof window !== 'undefined')
        localStorage.setItem(storageKey, 'dismissed');    } catch {}      if (typeof window !== 'undefined') localStorage.setItem(storageKey, 'dismissed')
        localStorage.setItem(storageKey, 'dismissed');    } catch {}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch {}
  }, [storageKey]);
  if (hidden) return null;
  return (

        {message}

      </div>;
    </div>;
  );
=======
  );


}


  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
