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
import { X  } from 'lucide-react';

export type SmartNudgeBannerProps = any;

export type SmartNudgeBannerProps = {
  role: 'talent' | 'client';
}
  user_id?: string | null;}
  message: string;() => `zion-nudge-${role}-${userId ?? 'anon'}`,[role, userId];)const [hidden, setHidden] = React.useState<boolean    />(false)React.useEffect(() => {
try {const v =;}
        typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;}
      setHidden(v = == 'dismissed')} catch ;
}

export type SmartNudgeBannerProps = {role: 'talent' | 'client',userId?: string | null;
  message: string;
}
}
}

export default function SmartNudgeBanner({
  role;
userId,}
message}
}: SmartNudgeBannerProps) {}
  const storageKey = React.useMemo(}
    () => `zion-nudge-${role}-${userId ?? 'anon'}`
    [role, userId]
  );

const [hidden, setHidden] = React.useState<boolean    />(false);


    try {
const v =

  role: 'talent' | 'client';
  user_id?: string | null;
  message: string;


}
  );
