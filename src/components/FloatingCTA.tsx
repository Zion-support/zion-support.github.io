<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {;
  // TODO: Add dependencies if needed;

  return () => {;
    // Cleanup function;
};
}, []); []);
    // Show CTA after 5 seconds;
      setIsVisible(true) }, 5000) ;
    return () => clearTimeout(timer) }, []) };
  ];
  const quickServices = [";
    { name: "AI Solutions", icon: Brain, link: "/ai-services" },";
    { name: "Cybersecurity", icon: Shield, link: "/cybersecurity" },";
    { name: "Cloud Services", icon: Cloud, link: "/cloud-solutions" },";
    { name: "Digital Transformation", icon: Zap, link: "/digital-transformation" };
  ];
  if(!isVisible) return null;
                    to="/services";
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-white";
                    onClick={() => setIsExpanded(false)}
                  >";
                    <span className="text-xl"></span>;
                    <div>";
                      <div className="font-semibold">Our Services</div>";
                      <div className="text-sm text-gray-400">Explore solutions</div>;
                    </div>;
                  </Link>;
=======
<<<<<<< HEAD
<<<<<<< HEAD

import { Button } from "@/components/ui/button",
=======

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
<<<<<<< HEAD
=======
=======
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useEffect } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { X } from 'lucide-react'

  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
  // TODO: Add dependencies if needed
  return () => {
    // Cleanup function;
<<<<<<< HEAD
}
=======
};
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
                    <span className="text-xl"></span>
=======
                    <span className="text-xl">🚀</span>
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                    <div>"
                      <div className="font-semibold">Our Services</div>"
                      <div className="text-sm text-gray-400">Explore solutions</div>
                    </div>
                  </Link>
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
<<<<<<< HEAD
export function FloatingCTA() {
  const [ isVisible, setIsVisible ] = useState(false)
  const [ isClosed, setIsClosed ] = useState(false)
  useEffect((,) => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const threshold = 600; // Show CTA after scrolling 600px
=======
<<<<<<< HEAD
export function FloatingCTA() {
  const [ isVisible, setIsVisible ] = useState(false)
  const [ isClosed, setIsClosed ] = useState(false)
  useEffect((,) => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const threshold = 600; // Show CTA after scrolling 600px
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export function FloatingCTA() {

import { Button } from "@/components/ui/button",
import Link from "next/link",
import { useState, useEffect } from "react",
import { X } from 'lucide-react'

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false),
  const [isClosed, setIsClosed] = useState(false),


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY,
      const threshold = 600, // Show CTA after scrolling 600px
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true)
      } else {
        setIsVisible (false);
      }
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
<<<<<<< HEAD
    window.addEventListener ("scroll", handle_scroll);
    return () => {
      window.removeEventListener ("scroll", handle_scroll);
    }
  }, [isClosed])
  const handleClose = () => {
    setIsClosed(true)
    setIsVisible(false);    setIsVisible(false)
  }
  if (!isVisible) return null
  }, [isClosed]);

  const handleClose = () => {;
    setIsClosed(true);
    setIsVisible(false);    setIsVisible(false);
    setIsVisible(false);    setIsVisible(false);
  };

  if (!isVisible) return null;

=======
  }, [isClosed]),

  const handleClose = () => {
    setIsClosed(true),
    setIsVisible(false)
  },

  if (!isVisible) return null,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <div className='fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in'>;
      <div className='bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between'>;
        <div className='mr-4'>;
          <p className='text-white font-medium'>Ready to explore Zion?</p>;
          <p className='text-zion-slate-light text-sm'>;
            Register today to access all features!;
          </p>;
        </div>;
        <div className='flex items-center gap-2'>;
          <Button
            variant='default'
            size='sm'
            className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap'
            asChild>;
            <Link href='/signup'>Register Now</Link>;
          </Button>;
          <button
            onClick={handleClose}
<<<<<<< HEAD
            className='text-zion-slate hover:text-white p-1'
            aria-label='Close'           aria-label="Button">;
            <X className='w-5 h-5' />          </button>;
            <X className="w-5 h-5" />;
=======
            className="text-zion-slate hover: text-white p-1"
            aria-label="Close"
          >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======

;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            <X className="w-5 h-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
  );

};
}, [isClosed]);
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link href="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" / aria-label="Button"> </button> </div> </div> </div>) ;
}'";
      {/* Backdrop */}
      <AnimatePresence>;
        {isExpanded && (;
          <motion&& motion.div"
            className="fixed inset-0 bg-black/20 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={ () => setIsExpanded(false) }
          />) }
      </AnimatePresence>;
    </>;
  )};
            onClick={ () => setIsExpanded(false) };
          />;) };
      </AnimatePresence>;
    </>;
  )}
'";
            aria-label='Close'          >
            <X className='w-5 h-5' />          </button>
            <X className="w-5 h-5" />
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
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
            <X className="w-5 h-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
  );

};
}, [isClosed]);
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link href="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" / aria-label="Button"> </button> </div> </div> </div>) ;
}'";
      {/* Backdrop */}
      <AnimatePresence>;
        {isExpanded && (;
          <motion&& motion.div"
            className="fixed inset-0 bg-black/20 z-40"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            on_click={ () => setIsExpanded (false) }
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
      </AnimatePresence>;
    </>)}
            on_click={ () => setIsExpanded (false) }
          />) }
      </AnimatePresence>;
    </>)}
'";
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
