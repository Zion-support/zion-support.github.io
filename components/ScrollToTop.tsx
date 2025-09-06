import React, { useState, useEffect } from 'react';
setIsVisible(true);
      } else {
        setIsVisible(false);
origin/cursor/automate-test-improve-and-merge-code-2533
      }
      behavior: 'smooth'
    })
};

    window.addEventListener('scroll', toggleVisibility);
return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
behavior: 'smooth',
    });
  };

origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
className='fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group'
          aria-label='Scroll to top'
        >
origin/cursor/automate-test-improve-and-merge-code-2533
          <svg
            className='w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 10l7-7m0 0l7 7m-7-7v18'
            />
          </svg>
        </button>
      )}
    </>
);
};

export default ScrollToTop;
origin/cursor/automate-test-improve-and-merge-code-2533
