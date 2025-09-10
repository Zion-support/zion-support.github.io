:src_backup/components/FloatingCTA.tsx
import { Button } from "@/components/ui/button",


import { Button } from "@/components/ui/button,


import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";


import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useEffect } from 'react'



import { Button } from "@/components/ui/button",


:src_backup/components/FloatingCTA.tsx

import { Button } from '@/components / ui / button';
import { Button } from '@/components/ui/ button';

import { Button } from '@/components / ui / button;
import { Button } from @/components/ui/ button';



:src_backup/components/FloatingCTA.tsx

}



:src_backup/components/FloatingCTA.tsx
import { Button } from "@/components/ui/button",;
import Link from "next/link",;
import { useState, useEffect } from "react",;
import { X } from 'lucide-react'

:src_backup/components/FloatingCTA.tsx
import { Button } from @/components/ui/button",
import Link from "next/link,
import { useState, useEffect } from react",


import { useState, useEffect } from "react"
:src_backup/components/FloatingCTA.tsx

:src_backup/components/FloatingCTA.tsx

      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true)
}, []); []);
    // Show CTA after 5 seconds;
      setIsVisible (true) }, 5000);
    return () => clear_timeout (timer) }, []) }

;
import { Button } from "@/components/ui/button",import { Button  } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect  } from 'react';
import { X  } from 'lucide-react';
  const [isVisible, setIsVisible] = useState(false)useEffect(() => {// TODO: Add dependencies if needed;
import { Button  } from '@/components / ui / button';
import Link from 'next / link';
  const [is_visible, setIsVisible] = useState (false)useEffect (() => {// TODO: Add dependencies if needed;
  return () => {// Cleanup function;}}}, [])[])// Show CTA after 5 seconds;
      setIsVisible(true) }, 5000)return () => clearTimeout(timer) }, []) }
  ];
  const quickServices = [";
    { name: "AI Solutions", icon: Brain, link: "/ai-services" },";
    { name: "Cybersecurity", icon: Shield, link: "/cybersecurity" },";
    { name: "Cloud Services", icon: Cloud, link: "/cloud-solutions" },";
    { name: "Digital Transformation", icon: Zap, link: "/digital-transformation" }
  ];
  if(!isVisible) return null;
                    to="/services";
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-white";
                    onClick={() => setIsExpanded(false)}
                  >";
                    <span className="text-xl">🚀</span>;
                    <div>";
                      <div className="font-semibold">Our Services</div>";
                      <div className="text-sm text-gray-400">Explore solutions</div>;
                    </div>;
                  </Link>;
export function FloatingCTA() {import Link from "next/link",import { useState, useEffect } from "react",export function FloatingCTA() {const [isVisible, setIsVisible] = useState(false),const [isClosed, setIsClosed] = useState(false),useEffect(() => {const handleScroll = () => {const scrollPosition = window.scrollY,const threshold = 600, // Show CTA after scrolling 600px;
      if (scrollPosition > threshold && !isClosed) {setIsVisible(true)if (scrollPosition > threshold && !isClosed) {setIsVisible(true)}, [])[])// Show CTA after 5 seconds;
      setIsVisible (true) }, 5000)return () => clear_timeout (timer) }, []) }
  ];
  const quick_services = [";
    { name: "AI Solutions", icon: Brain, link: "/ai - services" }, ";
    { name: "Cybersecurity", icon: Shield, link: "/cybersecurity" }, ";
    { name: "Cloud Services", icon: Cloud, link: "/cloud - solutions" }, ";
    { name: "Digital Transformation", icon: Zap, link: "/digital - transformation" }
  ];
  // Check condition;
if (return null) {$2;
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
import { Button   } from '@/components / ui / button';
import Link from './next / link';
import { useState, useEffect   } from './react';
export /**;
 * FloatingCTA - Function description;
 */;
function FloatingCTA() {const [ is_visible, setIsVisible ] = useState (false),const [ is_closed, setIsClosed ] = useState (false),useEffect ((, ) => {const handle_scroll = () =>: any {const scroll_position = window.scroll_y;
      const threshold = 600; // Show CTA after scrolling 600px;
      // Check condition;
if ( {) {$2;
}
:src_backup/components/FloatingCTA.tsx
:src_backup/components/FloatingCTA.tsx


    },

  const [ isClosed, setIsClosed ] = useState(false),;
  useEffect((,) => {;
    const handleScroll = () => {;
      const scrollPosition = window && window.scrollY;
      const threshold = 600; // Show CTA after scrolling 600px;
      if (scrollPosition > threshold && !isClosed) {;
        setIsVisible(true);
      } else {;
:src_backup/components/FloatingCTA.tsx


:src_backup/components/FloatingCTA.tsx
      } else {
origin/cursor/automate-test-improve-and-merge-code-2533
      } else {;
      } else {
origin/cursor/automate-test-improve-and-merge-code-2533
      } else {
:src_backup/components/FloatingCTA.tsx
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

      window.removeEventListener(scroll', handleScroll);
    }
  }, [isClosed]);

  const handleClose = () => {
    setIsClosed(true);
setIsVisible(false);
  };

  if (!isVisible) return null;

:src_backup/components/FloatingCTA.tsx


:src_backup/components/FloatingCTA.tsx



:src_backup/components/FloatingCTA.tsx



          <button 
            onClick={handleClose}
            className='text-zion-slate hover:text-white p-1'
            aria-label='Close'
          >
            <X className='w-5 h-5' />
origin/cursor/automate-test-improve-and-merge-code-2533

          <button 
            onClick={handleClose}
            className="text-zion-slate hover: text-white p-1"
            aria-label="Close"
          >



            <X className="w-5 h-5" />
:src_backup/components/FloatingCTA.tsx


  )
        <div className="flex items-center gap-2">;
          <Button;"
            variant="default";"
            size="sm";"
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap";


        setIsVisible (true)} else {setIsVisible (false)}export function FloatingCTA() {},const [ isVisible, setIsVisible ] = useState(false),const [ isClosed, setIsClosed ]  = useState(false),useEffect((,) => {const handleScroll = () => {const scrollPosition = window && window.scrollY;
      const threshold = 600; // Show CTA after scrolling 600px;if (scrollPosition > threshold && !isClosed) {setIsVisible(true)} else {export function FloatingCTA() {const [isVisible, setIsVisible] = useState(false)const [isClosed, setIsClosed] = useState(false)useEffect(() => {const handleScroll = () => {const scrollPosition = window.scrollY;
      const threshold = 600; // Show CTA after scrolling 600px;
      if (scrollPosition > threshold && !isClosed) {setIsVisible(true)} else {setIsVisible(false)}
    }window && window.addEventListener('scroll', handleScroll)return () => {window && window.removeEventListener('scroll', handleScroll)}}, [isClosed])const handleClose = () => {setIsClosed(true)setIsVisible(false)}if (scrollPosition > threshold && !isClosed) {setIsVisible(true)} else {setIsVisible(false)}
    }window && window.addEventListener("scroll", handleScroll)return () => {window && window.removeEventListener("scroll", handleScroll)}
  }, [isClosed])const handleClose = () => {setIsClosed(true)}window.addEventListener('scroll', handleScroll)return () => {window.removeEventListener('scroll', handleScroll)}}, [isClosed])const handleClose = () => {setIsClosed(true)setIsVisible(false)}if (!isVisible) return null;return (return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">;
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">;
        <div className=mr-4">;"
          <p className=text-white font-medium>Ready to explore Zion?</p>;"
          <p className="text-zion-slate-light text-sm>Register today to access all features!</p>;
        </div>;
        <div className="flex items-center gap-2">;
          <Button;
            variant=default";"
            size=sm;"
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap;
            onClick={handleClose}"
            className="text-zion-slate hover: text-white p-1";"
            aria-label="Close";

            className=text-zion-slate hover: text-white p-1";"
            aria-label=Close;
          >;

            <X className="w-5 h-5" />;

:src_backup/components/FloatingCTA.tsx
            onClick={handleClose}className="text-zion-slate hover: text-white p-1";
            aria-label="Close";
          >;
            <X className="w-5 h-5" />;
            className='text-zion-slate hover:text-white p-1';
            aria-label='Close';
          >;
            <X className='w-5 h-5' />;
          </button>;
        </div>;
  )aria-label='Close'           aria-label="Button">;
            <X className='w-5 h-5' />          </button>;
            <X className="w-5 h-5" />;;export function FloatingCTA() {const [isVisible, setIsVisible] = useState(false),const [isClosed, setIsClosed] = useState(false),useEffect(() => {const handleScroll = () => {const scrollPosition = window.scrollY,const threshold = 600, // Show CTA after scrolling 600px;
      if (scrollPosition > threshold && !isClosed) {setIsVisible(true)} else {setIsVisible(false)}
    },window.addEventListener("scroll", handleScroll),return () => {window.removeEventListener("scroll", handleScroll)}
  }, [isClosed]),const handleClose = () => {setIsClosed(true),setIsVisible(false)}if (!isVisible) return null;
  return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">;
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
:src_backup/components/FloatingCTA.tsx
          >;

            <X className="w-5 h-5" />;
:src_backup/components/FloatingCTA.tsx
          >;<X className="w-5 h-5" />;

          </button>;
        </div>;
:src_backup/components/FloatingCTA.tsx
  );
:src_backup/components/FloatingCTA.tsx
          >;<X className="w-5 h-5" />;
          >;

            <X className="w-5 h-5" />;
          >;<X className=w-5 h-5 />;


:src_backup/components/FloatingCTA.tsx
  return (
    <div className='fixed bottom - 6 left - 0 right - 0 mx - auto max - w-md px - 4 z - 50 animate - fade - in'>;
  )}}, [is_closed])const handle_close = () =>: any {setIsClosed (true)setIsVisible (false)setIsVisible (false)}
  // Check condition;
if (return null) {$2;
}
  return (<div className='fixed bottom - 6 left - 0 right - 0 mx - auto max - w-md px - 4 z - 50 animate - fade - in'>;
      <div className='bg - gradient - to - r from - zion - blue - dark to - zion - blue p - 4 rounded - lg border border - zion - purple shadow - lg flex items - center justify - between'>;
        <div className='mr - 4'>;
          <p className='text - white font - medium'>Ready to explore Zion?</p>;
          <p className='text - zion - slate - light text - sm'>;
            Register today to access all features!;
          </p>;
        </div>;
:src_backup/components/FloatingCTA.tsx


    </div>)}
}, [is_closed])return (<div className="fixed bottom - 6 left - 0 right - 0 mx - auto max - w-md px - 4 z - 50 animate - fade - in" > <div className="bg - gradient - to - r from - zion - blue - dark to - zion - blue p - 4 rounded - lg border border - zion - purple shadow - lg flex items - center justify - between" > <div className="mr - 4" > <p className="text - white font - medium" >Ready to explore Zion?</p> <p className="text - zion - slate - light text - sm" >Register today to access all features!</p> </div> <div className="flex items - center gap - 2" > <Button variant="default" size="sm" className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple whitespace - nowrap" as_child > <Link href="/signup" >Register Now</Link> </Button> <button aria - label="Close" w - 5 h - 5" /> </button> </div> </div> </div>)}'";
      {/* Backdrop */}
      <AnimatePresence>;
        {is_expanded && (<motion.div";
            className="fixed inset - 0 bg - black / 20 z - 40";initial={{ opacity: 0 }}


:src_backup/components/FloatingCTA.tsx
}
;
}
;
}
}

}
;

  );
};
}, [isClosed]);
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link href="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>) ;
}'"
:src_backup/components/FloatingCTA.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
})}}, [isClosed])return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link href="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>)}'";

return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link href="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>) ;
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className=bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between > <div className="mr-4" > <p className=text-white font-medium >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className=flex items-center gap-2 > <Button variant="default" size=sm className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link href=/signup >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>) ;
}'"
