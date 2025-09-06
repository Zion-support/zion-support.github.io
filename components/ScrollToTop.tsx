
<<<<<<< HEAD

import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
export default function ScrollToTop() {;
  const [isVisible, setIsVisible] = useState(false);
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


const ScrollToTop: React.FC = () => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export default function ScrollToTop() {;
  const [isVisible, setIsVisible] = useState(false);

const ScrollToTop: React.FC = () => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
<<<<<<< HEAD

      }
    };

    window.addEventListener('scroll', toggleVisibility);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
=======
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsVisible(true);
      } else {
        setIsVisible(false);
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
      behavior: 'smooth'
    })
};

    window.addEventListener('scroll', toggleVisibility);
<<<<<<< HEAD
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

=======
    return () => window.removeEventListener('scroll', toggleVisibility)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }, []);
  const scrollToTop = () => {
    window.scrollTo({

=======
origin/main
origin/automation-improvements-final
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }, []);
  const scrollToTop = () => {
    window.scrollTo({

      top: 0
<<<<<<< HEAD
origin/main
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      behavior: 'smooth'
    });
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

      behavior: 'smooth'
    })
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

  const scrollToTop = () => {;
    window && window.scrollTo({;
      top: 0,;
      behavior: 'smooth',;
    })
};      behavior: 'smooth'});

      behavior: 'smooth'})
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  };

  if (!isVisible) {
    return null;
  }

<<<<<<< HEAD
      behavior: 'smooth',

    });  };      behavior: 'smooth'})
  }

=======
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
    })
};      behavior: 'smooth'})
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
<<<<<<< HEAD
          className='fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group'
          aria-label='Scroll to top'

        >
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
          aria-label='Scroll to top'>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <svg
            className='w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
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
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
            />
          </svg>
        </button>
      )}
    </>
  );
}
}
export default ScrollToTop;
  )
};

export default ScrollToTop;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
            viewBox='0 0 24 24';
            xmlns='http://www.w3.org / 2000 / svg';
          >;
            <path;
              strokeLinecap='round';
              strokeLinejoin='round';
              strokeWidth={2}
              d='M5 10l7 - 7m0 0l7 7m - 7-7v18'            />        >;
          <svg;
            className="w - 6 h - 6 transform group - hover:-translate - y-1 transition-transform duration-300";
            fill="none";
            stroke="current_color";
            viewBox="0 0 24 24";
            xmlns="http://www.w3.org / 2000 / svg";
          >;
            <path;
              strokeLinecap="round";
              strokeLinejoin="round";
              strokeWidth={2}
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
