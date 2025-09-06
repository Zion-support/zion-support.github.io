<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/FloatingCTA.tsx

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { Button } from "@/components/ui/button",

========
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {;
  // TODO: Add dependencies if needed;
import { Button } from "@/components/ui/button",
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FloatingCTA.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
<<<<<<<< HEAD:src/components/FloatingCTA.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import { Button } from "@/components/ui/button",
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useEffect } from 'react'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { X } from 'lucide-react'

  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
  // TODO: Add dependencies if needed
<<<<<<< HEAD
<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FloatingCTA.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { Button } from '@/components / ui / button';
import Link from 'next / link';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
  const [is_visible, setIsVisible] = useState (false);
  useEffect (() => {
  // TODO: Add dependencies if needed;
  return () => {
    // Cleanup function;
<<<<<<<< HEAD:src/components/FloatingCTA.tsx
=======
  return () => {
    // Cleanup function;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
};
}, []); [])
    // Show CTA after 5 seconds
      setIsVisible(true) }, 5000)
    return () => clearTimeout(timer) }, []) }
  ]
  const quickServices = ["
    { name: "AI Solutions", icon: Brain, link: "/ai-services" },"
    { name: "Cybersecurity", icon: Shield, link: "/cybersecurity" },"
    { name: "Cloud Services", icon: Cloud, link: "/cloud-solutions" },"
    { name: "Digital Transformation", icon: Zap, link: "/digital-transformation" }
  ]
  if(!isVisible) return null
                    to="/services"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-white"
                    onClick={() => setIsExpanded(false)}
                  >"
                    <span className="text-xl">🚀</span>
                    <div>"
                      <div className="font-semibold">Our Services</div>"
                      <div className="text-sm text-gray-400">Explore solutions</div>
                    </div>
                  </Link>
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function FloatingCTA() {
  const [ isVisible, setIsVisible ] = useState(false)
  const [ isClosed, setIsClosed ] = useState(false)
  useEffect((,) => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const threshold = 600; // Show CTA after scrolling 600px
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
export function FloatingCTA() {

import { Button } from "@/components/ui/button",
import Link from "next/link",
import { useState, useEffect } from "react",
import { X } from 'lucide-react'

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false),
  const [isClosed, setIsClosed] = useState(false),

<<<<<<< HEAD
<<<<<<< HEAD
      if (scrollPosition > threshold && !isClosed) {
=======
xport function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false),
  const [isClosed, setIsClosed] = useState(false),

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const [ isVisible, setIsVisible ] = useState(false),
  const [ isClosed, setIsClosed ] = useState(false),
;
  useEffect((,) => {;
    const handleScroll = () => {;
      const scrollPosition = window.scrollY;
      const threshold = 600; // Show CTA after scrolling 600px
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 
>>>>>>>       if (scrollPosition > threshold && !isClosed) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY,
      const threshold = 600, // Show CTA after scrolling 600px

      if (scrollPosition > threshold && !isClosed) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    } }, [isClosed])
  const handleClose = () => {
    setIsClosed(true)
    setIsVisible(false) };      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isClosed])
  const handleClose = () => {
    setIsClosed(true)
    setIsVisible(false);    setIsVisible(false)
  }
  if (!isVisible) return null
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>>   return (
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true)
========
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FloatingCTA.tsx
=======
      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true)
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
}, []); []);
    // Show CTA after 5 seconds;
      setIsVisible (true) }, 5000);
    return () => clear_timeout (timer) }, []) }
  ];
  const quick_services = [";
    { name: "AI Solutions", icon: Brain, link: "/ai - services" }, ";
    { name: "Cybersecurity", icon: Shield, link: "/cybersecurity" }, ";
    { name: "Cloud Services", icon: Cloud, link: "/cloud - solutions" }, ";
    { name: "Digital Transformation", icon: Zap, link: "/digital - transformation" }
  ];
  // Check condition
if (return null) {
  $2
}
                    to="/services";
                    className="flex items - center gap - 3 p - 3 rounded - lg hover:bg - slate - 700 transition - colors duration - 200 text - white";
                    on_click={() => setIsExpanded (false)}
                  >";
                    <span className="text - xl">🚀</span>;
                    <div>";
                      <div className="font - semibold">Our Services</div>";
                      <div className="text - sm text - gray - 400">Explore solutions</div>;
                    </div>;
                  </Link>;
import { Button  } from '@/components / ui / button';
import Link from './next / link';
import { useState, useEffect  } from './react';
export /**
 * FloatingCTA - Function description
 */
function FloatingCTA() {
  const [ is_visible, setIsVisible ] = useState (false),
  const [ is_closed, setIsClosed ] = useState (false),
  useEffect ((, ) => {
    const handle_scroll = () =>: any {
      const scroll_position = window.scroll_y;
      const threshold = 600; // Show CTA after scrolling 600px;
      // Check condition
if ( {) {
  $2
}
        setIsVisible (true);
      } else {
        setIsVisible (false);
      }
<<<<<<<< HEAD:src/components/FloatingCTA.tsx

import { X } from 'lucide-react';
export function FloatingCTA() {;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    },


========
    }
    window.addEventListener ('scroll', handle_scroll);
    return () => {
      window.removeEventListener ('scroll', handle_scroll);
    } }, [is_closed]);
  const handle_close = () =>: any {
    setIsClosed (true);
    setIsVisible (false) }      // Check condition
if ( {) {
  $2
}
        setIsVisible (true);
      } else {
        setIsVisible (false);
      }
    }
    window.addEventListener ("scroll", handle_scroll);
    return () => {
      window.removeEventListener ("scroll", handle_scroll);
    }
import { X } from 'lucide-react';
export function FloatingCTA() {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FloatingCTA.tsx
  const [ isVisible, setIsVisible ] = useState(false),;
  const [ isClosed, setIsClosed ] = useState(false),;
  useEffect((,) => {;
    const handleScroll = () => {;
      const scrollPosition = window && window.scrollY;
      const threshold = 600; // Show CTA after scrolling 600px;
      if (scrollPosition > threshold && !isClosed) {;
        setIsVisible(true);
      } else {;
        setIsVisible(false);
      }
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => {;
      window && window.removeEventListener('scroll', handleScroll);
    };  }, [isClosed]);
  const handleClose = () => {;
    setIsClosed(true);
    setIsVisible(false);  };      if (scrollPosition > threshold && !isClosed) {;
        setIsVisible(true);
      } else {;
        setIsVisible(false);
      }
    };
    window && window.addEventListener("scroll", handleScroll);
    return () => {;
      window && window.removeEventListener("scroll", handleScroll);
    }
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/FloatingCTA.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FloatingCTA.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  }, [isClosed]);
  const handleClose = () => {;
    setIsClosed(true);
<<<<<<<< HEAD:src/components/FloatingCTA.tsx


  };



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    setIsVisible(false)
  };
  if (!isVisible) return null;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FloatingCTA.tsx
  return (
>>>>>>>     <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    },

    window.addEventListener("scroll", handleScroll),
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isClosed]),

  const handleClose = () => {
    setIsClosed(true),
    setIsVisible(false)
  },

  if (!isVisible) return null,

  return (
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">
        <div className="mr-4">
          <p className="text-white font-medium">Ready to explore Zion?</p>
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="default" 
            size="sm" 
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap"
            asChild
          >
            <Link href="/signup">Register Now</Link>
          </Button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
          <button
            onClick={handleClose}
<<<<<<<< HEAD:src/components/FloatingCTA.tsx
            className='text-zion-slate hover:text-white p-1'
            aria-label='Close'          >
            <X className='w-5 h-5' />          </button>
========
            className="text-zion-slate hover: text-white p-1"
            aria-label="Close"
          >
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FloatingCTA.tsx
            <X className="w-5 h-5" />
>>>>>>>             <X className="w-5 h-5" />
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <X className="w-5 h-5" />
>>>>>>>           </button>
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <button
            onClick={handleClose}
            className='text-zion-slate hover:text-white p-1'
            aria-label='Close'          >
            <X className='w-5 h-5' />          </button>
            <X className="w-5 h-5" />
          <button 
            onClick={handleClose}
            className="text-zion-slate hover: text-white p-1"
            aria-label="Close"
          >
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <X className="w-5 h-5" />
          </button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/FloatingCTA.tsx
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}, [isClosed])
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link href="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>)
}'"
      {/* Backdrop */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div"
            className="fixed inset-0 bg-black/20 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={ () => setIsExpanded(false) }
          />) }
      </AnimatePresence>
    </>
  )}
            onClick={ () => setIsExpanded(false) }
          />;) }
      </AnimatePresence>
    </>
  )}
'"
}
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
            aria-label='Close'           aria-label="Button">;
            <X className='w-5 h-5' />          </button>;
            <X className="w-5 h-5" />;

;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { Button } from "@/components/ui/button",;
import Link from "next/link",;
import { useState, useEffect } from "react",;
import { X } from 'lucide-react';
export function FloatingCTA() {;
  const [isVisible, setIsVisible] = useState(false),;
  const [isClosed, setIsClosed] = useState(false),;
  useEffect(() => {;
    const handleScroll = () => {;
      const scrollPosition = window.scrollY,;
      const threshold = 600, // Show CTA after scrolling 600px;
      if (scrollPosition > threshold && !isClosed) {;
        setIsVisible(true);
      } else {;
        setIsVisible(false);
      }
    },;
    window.addEventListener("scroll", handleScroll),;
    return () => {;
      window.removeEventListener("scroll", handleScroll);
    }
  }, [isClosed]),;
  const handleClose = () => {;
    setIsClosed(true),;
    setIsVisible(false);
  };
  if (!isVisible) return null;
  return (;
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">;
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">;
        <div className="mr-4">;
          <p className="text-white font-medium">Ready to explore Zion?</p>;
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>;
        </div>;
        <div className="flex items-center gap-2">;
          <Button;
            variant="default";
            size="sm";
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap";
            asChild;
          >;
            <Link href="/signup">Register Now</Link>;
          </Button>;
          <button;
            onClick={handleClose}
            className="text-zion-slate hover: text-white p-1";
            aria-label="Close";
          >;
<<<<<<< HEAD

========
}
}, [isClosed])
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link href="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>)
}'"
      {/* Backdrop */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div"
            aria-label='Close'           aria-label="Button">;
            <X className='w-5 h-5' />          </button>;
            <X className="w-5 h-5" />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FloatingCTA.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <X className="w-5 h-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/FloatingCTA.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FloatingCTA.tsx
  }, [is_closed]);
  const handle_close = () =>: any {
    setIsClosed (true);
    setIsVisible (false);    setIsVisible (false);
  }
  // Check condition
if (return null) {
  $2
}
  return (
    <div className='fixed bottom - 6 left - 0 right - 0 mx - auto max - w-md px - 4 z - 50 animate - fade - in'>;
      <div className='bg - gradient - to - r from - zion - blue - dark to - zion - blue p - 4 rounded - lg border border - zion - purple shadow - lg flex items - center justify - between'>;
        <div className='mr - 4'>;
          <p className='text - white font - medium'>Ready to explore Zion?</p>;
          <p className='text - zion - slate - light text - sm'>;
            Register today to access all features!;
          </p>;
        </div>;
        <div className='flex items - center gap - 2'>;
          <Button;
            variant='default';
            size='sm';
            className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple whitespace - nowrap';
            as_child;
          >;
            <Link href='/signup'>Register Now</Link>;
          </Button>;
          <button;
            on_click={handle_close}
            className='text - zion - slate hover:text - white p - 1';
            aria - label='Close'          >;
            <X className='w - 5 h - 5' />          </button>;
            <X className="w - 5 h - 5" />;
            <X className="w - 5 h - 5" />;
          </button>;
        </div>;
      </div>;
    </div>);
}
}, [is_closed]);
return (<div className="fixed bottom - 6 left - 0 right - 0 mx - auto max - w-md px - 4 z - 50 animate - fade - in" > <div className="bg - gradient - to - r from - zion - blue - dark to - zion - blue p - 4 rounded - lg border border - zion - purple shadow - lg flex items - center justify - between" > <div className="mr - 4" > <p className="text - white font - medium" >Ready to explore Zion?</p> <p className="text - zion - slate - light text - sm" >Register today to access all features!</p> </div> <div className="flex items - center gap - 2" > <Button variant="default" size="sm" className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple whitespace - nowrap" as_child > <Link href="/signup" >Register Now</Link> </Button> <button aria - label="Close" w - 5 h - 5" /> </button> </div> </div> </div>);
}'";
      {/* Backdrop */}
      <AnimatePresence>;
        {is_expanded && (
          <motion.div";
            className="fixed inset - 0 bg - black / 20 z - 40";
<<<<<<<< HEAD:src/components/FloatingCTA.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FloatingCTA.tsx
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            on_click={ () => setIsExpanded (false) }
          />) }
<<<<<<<< HEAD:src/components/FloatingCTA.tsx

}

<<<<<<< HEAD
========
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FloatingCTA.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      </AnimatePresence>;
    </>)}
            on_click={ () => setIsExpanded (false) }
          />) }
      </AnimatePresence>;
    </>)}
'";
}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/FloatingCTA.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

import { Button } from "@/components/ui/button",;
import Link from "next/link",;
import { useState, useEffect } from "react",;
import { X } from 'lucide-react';
;
export function FloatingCTA() {;
  const [isVisible, setIsVisible] = useState(false),;
  const [isClosed, setIsClosed] = useState(false),;
;
  useEffect(() => {;
    const handleScroll = () => {;
      const scrollPosition = window.scrollY,;
      const threshold = 600, // Show CTA after scrolling 600px;
;
      if (scrollPosition > threshold && !isClosed) {;
        setIsVisible(true),;
      } else {;
        setIsVisible(false),;
      }
    },;
;
    window.addEventListener("scroll", handleScroll),;
    return () => {;
      window.removeEventListener("scroll", handleScroll),;
    },;
  }, [isClosed]),;
;
  const handleClose = () => {;
    setIsClosed(true),;
    setIsVisible(false),;
  },;
;
  if (!isVisible) return null,;
;
  return (;
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">;
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">;
        <div className="mr-4">;
          <p className="text-white font-medium">Ready to explore Zion?</p>;
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>;
        </div>;
        <div className="flex items-center gap-2">;
          <Button ;
            variant="default" ;
            size="sm" ;
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap";
            asChild;
          >;
            <Link href="/signup">Register Now</Link>;
          </Button>;
          <button ;
            onClick={handleClose}
            className="text-zion-slate hover:text-white p-1";
            aria-label="Close";
          >;
            <X className="w-5 h-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
  ); import {;
  {;
  {;
  X ;
}from 'lucide-react' export function FloatingCTA () {;
  const [isVisible, setIsVisible] = useState (false);
const [isClosed,  setIsClosed] = useState (false);
useEffect ( () => {;
  const handleScroll = () => {;
  const scrollPosition = window.scrollY;
const threshold = 600, //Show CTA after scrolling 600px if (scrollPosition > threshold && !isClosed) {;
  setIsVisible (true) ;
}else {;
  setIsVisible (false) ;
}
};
}, [isClosed]);
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link href="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FloatingCTA.tsx
=======
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
