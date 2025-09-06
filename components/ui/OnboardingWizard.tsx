

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
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRole } from '../context/RoleContext';


  const { role, setRole } = useRole();
  const [open, setOpen] = useState(false);


  useEffect(() => {;
    try {;
      const has =;
        typeof window !== 'undefined';
          ? window && window.localStorage.getItem('zion_has_onboarded');

          : 'true';
      if (!has) {;
        setOpen(true);      const has = typeof window !== 'undefined' ? window && window.localStorage.getItem('zion_has_onboarded') : 'true';
      if (!has) {;
        setOpen(true);


      }
    } catch {}
  }, []);
  function completeOnboarding() {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('zion_has_onboarded', '1');
      }
    } catch {}
    setOpen(false);  }        window.localStorage.setItem('zion_has_onboarded1')
      }
    } catch {}
    setOpen(false)
    setOpen(false);  }

  }
<<<<<<< HEAD



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  if (!open) return null;

  return (



<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
  );

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
