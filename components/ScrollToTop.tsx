<<<<<<< HEAD








import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {


const ScrollToTop: React.FC = () => {


export default function ScrollToTop() {;
  const [isVisible, setIsVisible] = useState(false);


const ScrollToTop: React.FC = () => {


  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {


        setIsVisible(true);
      } else {;
        setIsVisible(false);      }











        setIsVisible(true)
=======


import React, { useState, useEffect } from 'react';'
setIsVisible(true);
>>>>>>> origin/cursor/delete-old-data-records-6bba
      } else {
        }
        setIsVisible(false);
      }
<<<<<<< HEAD

}
    window.addEventListener('scroll', toggleVisibility);

  }, []);




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

    });  };      behavior: 'smooth'})
  }
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
=======
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

import React, { useState, useEffect } from 'react';
setIsVisible(true);
      } else {}
        setIsVisible(false);}
      }
      behavior: 'smooth'
    })}

    window.addEventListener('scroll', toggleVisibility);

return () => window.removeEventListener('scroll', toggleVisibility);

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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'})
  };
return () => window.removeEventListener('scroll', toggleVisibility);'
  }, []);

const scrollToTop = () => {
    }
    window.scrollTo({
      }
      "top": 0,
"behavior": 'smooth','
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
      behavior: 'smooth'})
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

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'})
  };

return (;
    <>
      {isVisible && (
        <button
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
onClick={scrollToTop}

<<<<<<< HEAD
          aria-label="Scroll to top"
=======
className='fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg "hover": from-cyan-600 "hover":to-blue-700 transition-all duration-300 transform "hover":scale-110 "hover":shadow-xl "hover":shadow-cyan-500/25 flex items-center justify-center group''
          aria-label='Scroll to top''
>>>>>>> origin/cursor/delete-old-data-records-6bba
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



};
export default ScrollToTop;  );
};
export default ScrollToTop;




=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
              strokeWidth={
}
              d='M5 10l7-7m0 0l7 7m-7-7v18';' />;
          </svg>;
        </button>;
      )}
    </>
  );
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
export default ScrollToTop;  )}
export default ScrollToTop;origin/main;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
origin/automation-improvements-final;
export default ScrollToTop;
<<<<<<< HEAD






=======
export default ScrollToTop;export default /**;
 * ScrollToTop - Function description;
 */;
function ScrollToTop() {const [is_visible, setIsVisible]  = useState (false)useEffect (() => {const toggle_visibility = () =>: any {// Check condition;
if ( {) {$2;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
export default ScrollToTop;
origin/cursor/automate-test-improve-and-merge-code-2533
    </>;
  )}
}
export default ScrollToTop;
  )}export default ScrollToTop;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
ursor/integrate-build-improve-and-re-verify-8f7d;
}
export default ScrollToTop;  )}
export default ScrollToTop;origin/main;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
origin/automation-improvements-final;
export default ScrollToTop;
export default ScrollToTop;export default /**;
 * ScrollToTop - Function description;
 */;
function ScrollToTop() {const [is_visible, setIsVisible]  = useState (false)useEffect (() => {const toggle_visibility = () =>: any {// Check condition;
if ( {) {$2;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

    </>)}export default ScrollToTop)}export default ScrollToTop;)}export default ScrollToTop;
          onClick = $2;
export default ScrollToTop,
>>>>>>> origin/cursor/delete-old-data-records-6bba
