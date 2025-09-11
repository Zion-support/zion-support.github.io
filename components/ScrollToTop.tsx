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
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36





import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {
=======
import { ChevronUp } from 'lucide-react';
origin/main

import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {
import { ChevronUp } from 'lucide-react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


const ScrollToTop: React.FC = () => {

<<<<<<< HEAD

=======
>>>>>>> origin/automation-improvements-final
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function ScrollToTop() {;
  const [isVisible, setIsVisible] = useState(false);


const ScrollToTop: React.FC = () => {
<<<<<<< HEAD


=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
<<<<<<< HEAD


        setIsVisible(true);
      } else {;
        setIsVisible(false);      }







<<<<<<< HEAD

import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {

  useEffect__(() => {
    const _toggleVisibility = () => {

      if (window.pageYOffset > 300) {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsVisible(true);
      } else {
        setIsVisible(false);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
}
    window.addEventListener('scroll', toggleVisibility);
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    return () => window.removeEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility)




=======
    return () => window.removeEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility)
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setIsVisible(false);      }
    }
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);  }, []);        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility)
<<<<<<< HEAD

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, []);
  const scrollToTop = () => {
    window.scrollTo({


      behavior: 'smooth'
    });
<<<<<<< HEAD
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
origin/main
origin/automation-improvements-final
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
ursor/integrate-build-improve-and-re-verify-8f7d
      top: 0
origin/main
      behavior: 'smooth'
    });
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    };
    window && window.addEventListener('scroll', toggleVisibility);
    return () => window && window.removeEventListener('scroll', toggleVisibility);  }, []);        setIsVisible(true);
      } else {;
        setIsVisible(false);
      }
    };
    window && window.addEventListener('scroll', toggleVisibility);
    return () => window && window.removeEventListener('scroll', toggleVisibility);    return () => window && window.removeEventListener('scroll', toggleVisibility);
  }, []);
<<<<<<< HEAD
<<<<<<< HEAD
      behavior: 'smooth'})
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const scrollToTop = () => {;
    window && window.scrollTo({;
      top: 0,;
      behavior: 'smooth',;
    });  };      behavior: 'smooth'});
<<<<<<< HEAD
<<<<<<< HEAD
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
      top: 0
      behavior: 'smooth'
    });  };      behavior: 'smooth'})
  }
  return (
    <>;
      {isVisible && (;
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
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

    window.addEventListener('scroll', toggleVisibility),
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, []),

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'})
  },

  return (
    <>
      {_isVisible && (
        <button
          onClick={scrollToTop}
          className=&quot;fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group&quot;
          aria-label=&quot;Scroll to top&quot;
        >
          <svg
            className=&quot;w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300&quot;
            fill=&quot;none&quot;
            stroke=&quot;currentColor&quot;
            viewBox=&quot;0 0 24 24&quot;
            xmlns=&quot;http://www.w3.org/2000/svg&quot;
          >
            <path
              strokeLinecap=&quot;round&quot;
              strokeLinejoin=&quot;round&quot;
              strokeWidth={2}
              d=&quot;M5 10l7-7m0 0l7 7m-7-7v18&quot;

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
origin/main

import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
export default function ScrollToTop() {;
  const [isVisible, setIsVisible] = useState(false);

const ScrollToTop: React.FC = () => {
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsVisible(true)
      } else {
        setIsVisible(false)
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
        setIsVisible(true);
      } else {
        setIsVisible(false);      }
    }
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);  }, []);        setIsVisible(true)
      } else {
        setIsVisible(false)
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility)
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
        setIsVisible(false);      }
    }
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);  }, []);        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility)
origin/main
origin/automation-improvements-final
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
ursor/integrate-build-improve-and-re-verify-8f7d
      top: 0
origin/main
      behavior: 'smooth'
    });
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
      behavior: 'smooth'})
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };

  if (!isVisible) {
    return null;
  }

<<<<<<< HEAD



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

    });  };      behavior: 'smooth'})
  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
origin/automation-improvements-final
      behavior: 'smooth',
      top: 0
      behavior: 'smooth'
    });  };      behavior: 'smooth'})
  }
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className='fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group'
          aria-label='Scroll to top'


<<<<<<< HEAD

        >
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group"
          aria-label="Scroll to top"
        >

<<<<<<< HEAD
<<<<<<< HEAD
              d='M5 10l7-7m0 0l7 7m-7-7v18'            />        >
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
            />
          </svg>
        </button>
      )}
    </>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


};
export default ScrollToTop;  );
};
export default ScrollToTop;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

}
export default ScrollToTop;  )
}
export default ScrollToTop;



<<<<<<< HEAD
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
export default ScrollToTop;


;
  );
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
      behavior: 'smooth',
    });
      behavior: 'smooth'})
  };

<<<<<<< HEAD
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
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
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
  )
};

export default ScrollToTop;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
}
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default ScrollToTop;  )
}
export default ScrollToTop;

origin/main
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final

export default ScrollToTop;
export default ScrollToTop;
<<<<<<< HEAD
=======


=======
export default ScrollToTop;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
