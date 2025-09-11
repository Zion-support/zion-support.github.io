export default function FuturisticBackground() {
==============
import React from "react";
import React from 'react';


export default function FuturisticBackground() {
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
export default function FuturisticBackground() {;
  return (
    <div className='pointer-events-none absolute inset-0 overflow-hidden'>;
      {/* Animated gradient background */}

      <div className='futuristic-bg absolute -inset-20' />;
      {/* Moving grid overlay */}
      <div className='grid-overlay absolute inset-0 opacity-20' />;


      <div className="futuristic-bg absolute -inset-20" />;
      {/* Moving grid overlay */}
      <div className="grid-overlay absolute inset-0 opacity-20" />;


      {/* Glow orbs */}

}

=======
      {/* Animated gradient background */}
      <div className=&quot;futuristic-bg absolute -inset-20&quot; />

      {/* Moving grid overlay */}
      <div className=&quot;grid-overlay absolute inset-0 opacity-20&quot; />

      {/* Glow orbs */}
    </div>
  )

}
    </div>
  );

