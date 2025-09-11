import { Button } from "@/components/ui/button",
<<<<<<< HEAD


<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useEffect } from 'react'
=======
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";


=======


import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useEffect } from 'react'


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { X } from 'lucide-react'

  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
  // TODO: Add dependencies if needed
import { Button } from '@/components / ui / button';
import Link from 'next / link';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
  const [is_visible, setIsVisible] = useState (false);
  useEffect (() => {
  // TODO: Add dependencies if needed;
  return () => {
    // Cleanup function;
<<<<<<< HEAD
<<<<<<< HEAD
  return () => {
    // Cleanup function;
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
export function FloatingCTA() {
  const [ isVisible, setIsVisible ] = useState(false)
  const [ isClosed, setIsClosed ] = useState(false)
  useEffect((,) => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const threshold = 600; // Show CTA after scrolling 600px
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function FloatingCTA() {

import { Button } from "@/components/ui/button",
import Link from "next/link",
import { useState, useEffect } from "react",
import { X } from 'lucide-react'

<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false),
  const [isClosed, setIsClosed] = useState(false),

<<<<<<< HEAD
<<<<<<< HEAD
xport function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false),
  const [isClosed, setIsClosed] = useState(false),

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [ isVisible, setIsVisible ] = useState(false),
  const [ isClosed, setIsClosed ] = useState(false),
;
  useEffect((,) => {;
    const handleScroll = () => {;
      const scrollPosition = window.scrollY;
      const threshold = 600; // Show CTA after scrolling 600px
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY,
      const threshold = 600, // Show CTA after scrolling 600px
<<<<<<< HEAD

<<<<<<< HEAD
      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
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
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true)
}, []); []);
    // Show CTA after 5 seconds;
      setIsVisible (true) }, 5000);
    return () => clear_timeout (timer) }, []) }
  ];
  if(!isVisible) return null;
                    to="/services";
                    className="flex items-center gap-3 p-3 rounded-lg "hover": "b g-slate-700 transition-colors duration-200 text-white";
                    onClick={() => setIsExpanded(false)"}
                  >";
                    <span className="text-xl">🚀</span>;
                    <div>";
                      <div className="font-semibold">Our Services</div>";
                      <div className="text-sm text-gray-400">Explore solutions</div>;
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

    },


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
  }, [isClosed]);
  const handleClose = () => {;
    setIsClosed(true);
    setIsVisible(false)
  };
  if (!isVisible) return null;
  return (
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
          <button
            onClick={handleClose}
            className="text-zion-slate hover: text-white p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
ursor/fix-website-loading-errors-and-merge-6662
            <X className="w-5 h-5" />
          <button
            onClick={handleClose}
            className='text-zion-slate hover:text-white p-1'
            aria-label='Close'          >
            <X className='w-5 h-5' />          </button>
            <X className="w-5 h-5" />
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <button 
            onClick={handleClose}
            className="text-zion-slate hover: text-white p-1"
            aria-label="Close"
          >



            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
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
      </AnimatePresence>;
    </>
  )};
            onClick={ () => setIsExpanded(false) };
          />;) };
      </AnimatePresence>;
    </>';
  )}';';
'"
</motion>
</any>';
</any>;';;';    </>
  )}
'"
}
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            aria-label='Close'           aria-label="Button">;
            <X className='w-5 h-5' />          </button>;
            <X className="w-5 h-5" />;

;

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
}
}, [isClosed])
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link href="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>)
}'"
      {/* Backdrop */}
      <AnimatePresence>
        {!isExpanded ? (<motion.button onClick={() => setIsExpanded(true)} className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 group" initial = {
  { opacity: 0,
  scale: 0.8 

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <X className="w-5 h-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true)
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
        setIsVisible(false)
      }

import { X } from 'lucide-react';
export function FloatingCTA() {;

    },


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
  }, [isClosed]);

  const handleClose = () => {;
    setIsClosed(true);


  };

  const handleClose = () => {
    setIsClosed(true),
    setIsVisible(false)
  },

  if (!isVisible) return null,

  }, [isClosed]),

  const handleClose = () => {
    setIsClosed(true),
    setIsVisible(false)
  },

  if (!isVisible) return null,

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  return (
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


<<<<<<< HEAD
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
}
;
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )

            aria-label='Close'           aria-label="Button">;
            <X className='w-5 h-5' />          </button>;
            <X className="w-5 h-5" />;

;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
