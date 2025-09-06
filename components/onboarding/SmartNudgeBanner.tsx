
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
    setHidden(true);




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



    } catch {}
  }, [storageKey]);
  if (hidden) return null;
  return (



        {message}

      </div>;
    </div>;
  );



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

}




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4




