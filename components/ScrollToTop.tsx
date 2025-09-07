
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts

import React, { useState, useEffect } from 'react';'
setIsVisible(true);
      } else {
        }
        setIsVisible(false);
      }
      'behavior': 'smooth''
    })
};

    window.addEventListener('scroll', toggleVisibility);'

return () => window.removeEventListener('scroll', toggleVisibility);'
  }, []);

const scrollToTop = () => {
    }
    window.scrollTo({
      }
      'top': 0,
'behavior': 'smooth','
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
    const toggleVisibility = $2;
    window.addEventListener($2);
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, []),
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
useEffect ( () => {
  const toggleVisibility = () => {
  if (window.pageYOffset > 300) {
  window.addEventListener ('scroll', toggleVisibility)
return () => window.removeEventListener ('scroll', toggleVisibility) 
}, [])
return (<> {
  isVisible && (<button onClick= {
  scrollToTop 
}className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group" aria-label="Scroll to top" > <svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <path /> </svg> </button>) 
}</>) 
<<<<<<< HEAD
}
export default ScrollToTop
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
export default ScrollToTop
import React, { useState, useEffect } from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, []);
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
    }
=======
}
    window.addEventListener('scroll', toggleVisibility);
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    window.addEventListener(scroll', toggleVisibility);
    return () => window.removeEventListener('scroll, toggleVisibility)
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
setIsVisible(true);
      } else {}
        setIsVisible(false);}
      }
      behavior: 'smooth'
    })}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    window.addEventListener('scroll', toggleVisibility);

return () => window.removeEventListener('scroll', toggleVisibility);
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    return () => window.removeEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility)




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

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, []);
>>>>>>> origin/resolved-merge-conflicts
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
<<<<<<< HEAD
      behavior: 'smooth'})
  };
=======
<<<<<<< HEAD
      behavior: 'smooth'})
  };
=======
<<<<<<< HEAD
      behavior: smooth'})
  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

return (;
    <>
      {isVisible && (
        <button
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
}
onClick={scrollToTop}

className='fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg 'hover': from-cyan-600 'hover':to-blue-700 transition-all duration-300 transform 'hover':scale-110 'hover':shadow-xl 'hover':shadow-cyan-500/25 flex items-center justify-center group''
          aria-label='Scroll to top''
        >
          <svg,
className='w-6 h-6 transform group-'hover':-translate-y-1 transition-transform duration-300''
            fill='none''
            stroke='currentColor''
            viewBox='0 0 24 24''
            <path,
strokeLinecap='round''
              strokeLinejoin='round''

              strokeWidth={
}
              d='M5 10l7-7m0 0l7 7m-7-7v18';' />;
          </svg>;
        </button>;
      )}
    </>
  );
}
}
export default ScrollToTop;
  )
};

export default ScrollToTop;
origin/cursor/automate-test-improve-and-merge-code-2533
    </>;
  )}
}
<<<<<<< HEAD
=======
=======
          onClick={scrollToTop}
<<<<<<< HEAD
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group"
=======
<<<<<<< HEAD
          className='fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group'
          aria-label='Scroll to top'



        >
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          aria-label="Scroll to top"
        >
          <svg,
className='w-6 h-6 transform group-"hover":-translate-y-1 transition-transform duration-300''
            fill='none''
            stroke='currentColor''
            viewBox='0 0 24 24''
            <path,
strokeLinecap='round''
              strokeLinejoin='round''

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
export default ScrollToTop;
  )}export default ScrollToTop;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
ursor/integrate-build-improve-and-re-verify-8f7d;
}
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
              d='M5 10l7-7m0 0l7 7m-7-7v18'            />        >
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
            />
          </svg>
        </button>
      )}
    </>
=======


};
export default ScrollToTop;  );
};
export default ScrollToTop;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

}
export default ScrollToTop;  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
export default ScrollToTop;  )}
export default ScrollToTop;origin/main;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
origin/automation-improvements-final;
export default ScrollToTop;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
export default ScrollToTop;export default /**;
 * ScrollToTop - Function description;
 */;
function ScrollToTop() {const [is_visible, setIsVisible]  = useState (false)useEffect (() => {const toggle_visibility = () =>: any {// Check condition;
if ( {) {$2;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======



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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}
        setIsVisible (true)} else {setIsVisible (false)}
    }window.addEventListener ('scroll', toggle_visibility)return () => window.removeEventListener ('scroll', toggle_visibility)}, [])setIsVisible (true)} else {setIsVisible (false)}
    }window.addEventListener ('scroll', toggle_visibility)return () => window.removeEventListener ('scroll', toggle_visibility)return () => window.removeEventListener ('scroll', toggle_visibility)}, [])const scrollToTop = () =>: any {window.scroll_to ({top: 0,behavior: 'smooth',})}      behavior: 'smooth'})}return (<>;
      {is_visible && (<button;
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
            className='w - 6 h - 6 transform group - hover:-translate - y-1 transition-transform duration-300';
            fill='none';
            stroke='current_color';
            viewBox='0 0 24 24';
            xmlns='http://www.w3.org / 2000 / svg';
          >;
            <path;
              strokeLinecap='round';
              strokeLinejoin='round';
              strokeWidth={2}
              d='M5 10l7 - 7m0 0l7 7m - 7-7v18';
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
    </>)}export default ScrollToTop)}export default ScrollToTop;)}export default ScrollToTop;
          onClick = $2;
export default ScrollToTop,
=======
<<<<<<< HEAD
    </>)}export default ScrollToTop)}export default ScrollToTop;)}export default ScrollToTop;
          onClick = $2;
export default ScrollToTop,
=======
<<<<<<< HEAD
    </>)}export default ScrollToTop)}export default ScrollToTop;)}export default ScrollToTop;
          onClick = $2;
export default ScrollToTop,
=======
<<<<<<< HEAD
export default ScrollToTop;


;
  );
}
}
      behavior: 'smooth',
    });
      behavior: 'smooth'})
  };

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
export default ScrollToTop;  )
}
export default ScrollToTop;

origin/main
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final

export default ScrollToTop;
export default ScrollToTop;
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
behavior: 'smooth',) => {
  return $3;}
}
    })
};


  return (
    <>
      {isVisible && (}
        <button;}
onClick={scrollToTop}

className='fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group'
          aria-label='Scroll to top'
            />
          <svg;
className='w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            <path;
strokeLinecap='round'
              strokeLinejoin='round'

              strokeWidth={,}
}
              d='M5 10l7-7m0 0l7 7m-7-7v18';
               />;
          </svg>;
        </button>;
      )}

    <   />

)
};


export default ScrollToTop;

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
