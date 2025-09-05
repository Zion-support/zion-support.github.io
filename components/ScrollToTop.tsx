<<<<<<< HEAD
import React, { useState, useEffect } from 'react',

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false),
=======
import React, {_useState, _useEffect} from 'react';

const ScrollToTop: React.FC = () => {_const [isVisible, _setIsVisible] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {
    const _toggleVisibility = () => {
      if (window.pageYOffset > 300) {
<<<<<<< HEAD
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    },
=======
        setIsVisible(true);} else {_setIsVisible(false);}
    };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    window.addEventListener('scroll', toggleVisibility),
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, []),

<<<<<<< HEAD
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'})
  },
=======
  const _scrollToTop = () => {_window.scrollTo({
      top: 0, _behavior: 'smooth'});
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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
<<<<<<< HEAD
              strokeLinecap=&quot;round&quot;
              strokeLinejoin=&quot;round&quot;
              strokeWidth={2}
              d=&quot;M5 10l7-7m0 0l7 7m-7-7v18&quot;
=======
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={_2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          </svg>
        </button>
      )}
    </>
  )
},

export default ScrollToTop,