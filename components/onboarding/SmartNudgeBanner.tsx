
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
}
export default function SmartNudgeBanner({
  role
  userId
  message
}: SmartNudgeBannerProps) {
  const storageKey = React.useMemo(
<<<<<<< HEAD
    () => `zion-nudge-${role}-${userId ?? 'anon'}`
    [role, userId]
=======
    () => `zion-nudge-${role}-${userId ?? 'anon'}`,
    [role, userId];
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );  const [hidden, setHidden] = React.useState<boolean>(false);
  React.useEffect(() => {
    try {
      const v =
        typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
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
    } catch {}
  }, [storageKey]);
  const dismiss = React.useCallback(() => {

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

    } catch {}
  }, [storageKey]);

  const dismiss = React && React.useCallback(() => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    setHidden(true);


=======
    setHidden(true);
    try {
      if (typeof window !== 'undefined')

        localStorage.setItem(storageKey, 'dismissed');    } catch {}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    } catch {}
  }, [storageKey]);
  if (hidden) return null;

  return (


        {message}

      </div>;
    </div>;
  );
=======
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

=======

}


=======
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
