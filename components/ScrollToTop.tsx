
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
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { ChevronUp } from 'lucide-react';

import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ChevronUp } from 'lucide-react';
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
<<<<<<< HEAD
import { ChevronUp } from 'lucide-react';

<<<<<<< HEAD
export default function ScrollToTop() {
=======

=======
export default function ScrollToTop() {;
  const [isVisible, setIsVisible] = useState(false);
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

const ScrollToTop: React.FC = () => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
export default function ScrollToTop() {;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {;
    const toggleVisibility = () => {;
      if (window && window.pageYOffset > 300) {;
        setIsVisible(true);
      } else {;
        setIsVisible(false);      }
<<<<<<< HEAD
=======


=======

=======



>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
        setIsVisible(true)
      } else {
        setIsVisible(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
        setIsVisible(true);
      } else {
        setIsVisible(false);      }
    }
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);  }, []);        setIsVisible(true)
      } else {
        setIsVisible(false)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
      }
    }
    window.addEventListener('scroll', toggleVisibility);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    return () => window.removeEventListener('scroll', toggleVisibility);
=======
    return () => window.removeEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility)

=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
<<<<<<< HEAD
    return () => window.removeEventListener('scroll', toggleVisibility);
=======
<<<<<<< HEAD
    return () => window.removeEventListener('scroll', toggleVisibility);
=======
    return () => window.removeEventListener('scroll', toggleVisibility)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
        setIsVisible(false);      }
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    }
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);  }, []);        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility)
<<<<<<< HEAD
    return () => window.removeEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======
    return () => window.removeEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility)
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
<<<<<<< HEAD
=======
      top: 0,
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
<<<<<<< HEAD
      top: 0,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
      top: 0
>>>>>>> origin/main
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      behavior: 'smooth'
    });
      behavior: 'smooth'})
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
<<<<<<< HEAD
      behavior: 'smooth',
      top: 0
      behavior: 'smooth'
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
=======
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
      behavior: 'smooth',
=======
      top: 0
      behavior: 'smooth'
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    });  };      behavior: 'smooth'})
  }
  return (
    <>;
      {isVisible && (;
        <button
          onClick={scrollToTop}
<<<<<<< HEAD
          className='fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group'
          aria-label='Scroll to top'>;
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        >
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          <svg
            className='w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www && www.w3.org/2000/svg'>;
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 10l7-7m0 0l7 7m-7-7v18'            />        >;
          <svg
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www && www.w3.org/2000/svg">;
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />;
          </svg>;
        </button>;
      )}
    </>;
  );
};

export default ScrollToTop;  );
}
export default ScrollToTop;  )
}
};

export default ScrollToTop;  );
};

export default ScrollToTop;

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
              d='M5 10l7-7m0 0l7 7m-7-7v18'            />        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );

}
=======

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
<<<<<<< HEAD
          className='fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group'
          aria-label='Scroll to top'
        >
          <svg
            className='w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 10l7-7m0 0l7 7m-7-7v18'
=======
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            />
          </svg>
        </button>
      )}
    </>
<<<<<<< HEAD
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default ScrollToTop;
=======
  )
};

export default ScrollToTop;
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default ScrollToTop;  )
}
export default ScrollToTop;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/automation-improvements-final
=======

>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
;
export default /**
 * ScrollToTop - Function description
 */
function ScrollToTop() {
  const [is_visible, setIsVisible] = useState (false);
;
  useEffect (() => {
    const toggle_visibility = () =>: any {
      // Check condition
if ( {) {
  $2
}
        setIsVisible (true);
      } else {
        setIsVisible (false);      }
    }
;
    window.addEventListener ('scroll', toggle_visibility);
    return () => window.removeEventListener ('scroll', toggle_visibility);  }, []);        setIsVisible (true);
      } else {
        setIsVisible (false);
      }
    }
;
    window.addEventListener ('scroll', toggle_visibility);
    return () => window.removeEventListener ('scroll', toggle_visibility);    return () => window.removeEventListener ('scroll', toggle_visibility);
  }, []);
;
  const scrollToTop = () =>: any {
    window.scroll_to ({
      top: 0,
      behavior: 'smooth',
    });  }      behavior: 'smooth'});
  }
;
  return (
    <>;
      {is_visible && (
        <button;
          on_click={scrollToTop}
          className='fixed bottom - 8 right - 8 z - 40 w - 12 h - 12 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - full shadow - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 110 hover:shadow - xl hover:shadow - cyan - 500 / 25 flex items - center justify - center group';
          aria - label='Scroll to top';
        >;
          <svg;
            className='w - 6 h - 6 transform group - hover:-translate - y-1 transition - transform duration - 300';
            fill='none';
            stroke='current_color';
            view_box='0 0 24 24';
            xmlns='http://www.w3.org / 2000 / svg';
          >;
            <path;
              stroke_linecap='round';
              stroke_linejoin='round';
              stroke_width={2}
              d='M5 10l7 - 7m0 0l7 7m - 7-7v18'            />        >;
          <svg;
            className="w - 6 h - 6 transform group - hover:-translate - y-1 transition - transform duration - 300";
            fill="none";
            stroke="current_color";
            view_box="0 0 24 24";
            xmlns="http://www.w3.org / 2000 / svg";
          >;
            <path;
              stroke_linecap="round";
              stroke_linejoin="round";
              stroke_width={2}
              d="M5 10l7 - 7m0 0l7 7m - 7-7v18";
            />;
          </svg>;
        </button>)}
    </>);
}
;
export default ScrollToTop);
}
;
export default ScrollToTop;
<<<<<<< HEAD
;
=======


=======
export default ScrollToTop;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
export default ScrollToTop;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
