import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
<<<<<<< HEAD
        setIsVisible(true);
      } else {
        setIsVisible(false);      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);  }, []);
=======
<<<<<<< HEAD
<<<<<<< HEAD
        setIsVisible(true);
      } else {
        setIsVisible(false);
=======
        setIsVisible(true)
      } else {
        setIsVisible(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        setIsVisible(true)
      } else {
        setIsVisible(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    };

    window.addEventListener('scroll', toggleVisibility);
<<<<<<< HEAD
<<<<<<< HEAD
    return () => window.removeEventListener('scroll', toggleVisibility);
=======
    return () => window.removeEventListener('scroll', toggleVisibility)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return () => window.removeEventListener('scroll', toggleVisibility)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
<<<<<<< HEAD
      behavior: 'smooth',
    });  };
=======
<<<<<<< HEAD
<<<<<<< HEAD
      behavior: 'smooth',
    });
=======
      behavior: 'smooth'})
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      behavior: 'smooth'})
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
<<<<<<< HEAD
          className='fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group'
          aria-label='Scroll to top'
=======
<<<<<<< HEAD
<<<<<<< HEAD
          className='fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group'
          aria-label='Scroll to top'
=======
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group"
          aria-label="Scroll to top"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
              d='M5 10l7-7m0 0l7 7m-7-7v18'            />
=======
<<<<<<< HEAD
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
=======
              d="M5 10l7-7m0 0l7 7m-7-7v18"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </svg>
        </button>
      )}
    </>
<<<<<<< HEAD
  );
};

export default ScrollToTop;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default ScrollToTop;
=======
  )
};

export default ScrollToTop;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default ScrollToTop;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
