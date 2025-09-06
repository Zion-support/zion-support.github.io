import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { ChevronUp } from 'lucide-react';
=======
>>>>>>> origin/main

import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {
=======
<<<<<<< HEAD
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
=======

const ScrollToTop: React.FC = () => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
<<<<<<< HEAD
        setIsVisible(true);
      } else {
<<<<<<< HEAD
        setIsVisible(false);
=======
<<<<<<< HEAD
        setIsVisible(true);
      } else {
        setIsVisible(false);
=======
<<<<<<< HEAD
        setIsVisible(true);
      } else {
        setIsVisible(false);
=======
        setIsVisible(true)
      } else {
        setIsVisible(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
      }
    };

    window.addEventListener('scroll', toggleVisibility);
<<<<<<< HEAD
    return () => window.removeEventListener('scroll', toggleVisibility);
=======
<<<<<<< HEAD
    return () => window.removeEventListener('scroll', toggleVisibility);
=======
<<<<<<< HEAD
    return () => window.removeEventListener('scroll', toggleVisibility);
=======
    return () => window.removeEventListener('scroll', toggleVisibility)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
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
>>>>>>> origin/main
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
<<<<<<< HEAD
      top: 0,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
      top: 0
>>>>>>> origin/main
      behavior: 'smooth'
    });  };      behavior: 'smooth'})
  }
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
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
=======
<<<<<<< HEAD
      behavior: 'smooth',
    });
=======
      behavior: 'smooth'})
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  };

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

export default ScrollToTop;
=======
  )
};

export default ScrollToTop;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
}
export default ScrollToTop;  )
}
export default ScrollToTop;

>>>>>>> origin/main
