
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
    }
    return this.props.children;
  }
}
import React, { useCallback, useEffect, useState } from 'react';
type Web3LoginModalProps = {
  isOpen: boolean
  onClose: () => void
  onLoggedIn?: (user: { address: string, chain: 'evm' | 'sol', displayName?: string }) => void

import dynamic from 'next/dynamic';

const isClient = typeof window !== 'undefined';

  return <ModalInner {...props} />
}

  return <ModalInner {...props} />;
  return <ModalInner {...props} />
}
origin/cursor/automate-test-improve-and-merge-code-2533
"
