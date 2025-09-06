import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
const ScrollToTop: React.FC;
=======
import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
<<<<<<< HEAD
        setIsVisible(false);      }
    }
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);  }, []);        setIsVisible(true)
      } else {
        setIsVisible(false)
=======
        setIsVisible(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      }
    }
    window.addEventListener('scroll', toggleVisibility);
<<<<<<< HEAD
    return () => window.removeEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility)
=======
    return () => window.removeEventListener('scroll', toggleVisibility);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
<<<<<<< HEAD
      top: 0
      behavior: 'smooth'
    });  };      behavior: 'smooth'})
  }
=======
      top: 0,
      behavior: 'smooth',
    });
  };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
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
=======
              d='M5 10l7-7m0 0l7 7m-7-7v18'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            />
          </svg>
        </button>
      )}
    </>
  );
<<<<<<< HEAD
}
export default ScrollToTop;  )
}
export default ScrollToTop;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
};
}

export default ScrollToTop;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
