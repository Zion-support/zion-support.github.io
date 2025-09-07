<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
<<<<<<< HEAD:src/components/FloatingCTA.tsx

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/FloatingCTA.tsx
import { Button } from "@/components/ui/button",
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx

<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useEffect } from 'react'

<<<<<<< HEAD:src/components/FloatingCTA.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/FloatingCTA.tsx
import { X } from 'lucide-react'

  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
  // TODO: Add dependencies if needed
<<<<<<< HEAD:src/components/FloatingCTA.tsx
=======
";
import { Button } from "@/components/ui/button";"
import Link from "next/link";"
import { useState, useEffect } from "react";


import { Button } from '@/components/ui/button''
import Link from 'next/link''
import { useState, useEffect } from 'react'

'
import { X } from 'lucide-react'

  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {}
  // TODO: Add dependencies if needed';
import { Button } from '@/components / ui / button';'
import Link from 'next / link';'
import { useState, useEffect } from 'react';'
import { X } from 'lucide-react';
  const [is_visible, setIsVisible] = useState (false);
  useEffect (() => {}
  // TODO: Add dependencies if needed;
  return () => {}
    // Cleanup function;
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/FloatingCTA.tsx

<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
export function FloatingCTA() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import { Button } from "@/components/ui/button",
import Link from "next/link",
import { useState, useEffect } from "react",
=======
export function FloatingCTA() {}
"
import { Button } from "@/components/ui/button","
import Link from "next/link","
import { useState, useEffect } from "react",'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/FloatingCTA.tsx
import { X } from 'lucide-react'




export function FloatingCTA() {}
  const [isVisible, setIsVisible] = useState(false),
  const [isClosed, setIsClosed] = useState(false),

<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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
import { useState, useEffect } from "react"export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false),
  const [isClosed, setIsClosed] = useState(false),

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
=======
import { Button } from '@/components / ui / button';
=======
import { Button } from '@/components/ui/button''
import Link from 'next/link''
import { useState, useEffect } from 'react''
import { X } from 'lucide-react''
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
  // TODO: Add dependencies if needed,
import { Button } from '@/components / ui / button';
import { Button } from "@/components/ui/button",""
import { Button } from "@/components/ui/button";""
import Link from "next/link";""
import { useState, useEffect } from "react";""
import { Button } from '@/components/ui/button
import Link from 'next/link
import { useState, useEffect } from 'react
import { X } from 'lucide-react
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
  // TODO: Add dependencies if needed;
import { Button } from '@/components/ui/ button';
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
import Link from 'next / link';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
  const [is_visible, setIsVisible] = useState (false);
  useEffect (() => {
  // TODO: Add dependencies if needed;,
  return () => {
    // Cleanup function;
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx

=======
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
}



<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/FloatingCTA.tsx

=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
export function FloatingCTA() {

import { Button } from "@/components/ui/button",;
import Link from "next/link",;
import { useState, useEffect } from "react",;
import { X } from 'lucide-react'

<<<<<<< HEAD:src/components/FloatingCTA.tsx
=======



<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/FloatingCTA.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
export function FloatingCTA() {
import { Button } from "@/components/ui/button","
import Link from "next/link","
import { useState, useEffect } from "react","
import { X } from 'lucide-react''
export function FloatingCTA() {,
  const [isVisible, setIsVisible] = useState(false),
  const [isClosed, setIsClosed] = useState(false),
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx

<<<<<<< HEAD:src/components/FloatingCTA.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/FloatingCTA.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY,
      const threshold = 600, // Show CTA after scrolling 600px

<<<<<<< HEAD:src/components/FloatingCTA.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true)
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      } else {
        setIsVisible (false);
      }
=======


      if (scrollPosition > threshold && !isClosed) {
=======
  useEffect(() => {}
    const handleScroll = () => {};
      const scrollPosition = window.scrollY,;
      const threshold = 600, // Show CTA after scrolling 600px;
      if (scrollPosition > threshold && !isClosed) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/FloatingCTA.tsx
        setIsVisible(true)
export function FloatingCTA() {

import Link from "next/link",""
import { useState, useEffect } from "react",""
  const [isVisible, setIsVisible] = useState(false),
  const [isClosed, setIsClosed] = useState(false),


    const handleScroll = () => {
      const scrollPosition = window.scrollY,
      const threshold = 600, // Show CTA after scrolling 600px;
pr-12325
      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true)
}, []); []);,
    // Show CTA after 5 seconds;
      setIsVisible (true) }, 5000);
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
    return () => clear_timeout (timer) }, []) }
  ];"
  const quick_services = [";"
    { name: "AI Solutions", icon: Brain, link: "/ai - services" }, ";"
    { name: "Cybersecurity", icon: Shield, link: "/cybersecurity" }, ";"
    { name: "Cloud Services", icon: Cloud, link: "/cloud - solutions" }, ";"
    { name: "Digital Transformation", icon: Zap, link: "/digital - transformation" }
  ];
  // Check condition;
if (return null) {}
  $2;
}"
                    to="/services";"
                    className="flex items - center gap - 3 p - 3 rounded - lg hover:bg - slate - 700 transition - colors duration - 200 text - white";
                    on_click={() => setIsExpanded (false)}"
                  >";"
                    <span className="text - xl">🚀</span>;"
                    <div>";"
                      <div className="font - semibold">Our Services</div>";"
                      <div className="text - sm text - gray - 400">Explore solutions</div>;
                    </div>;
                  </Link>;'
import { Button  } from '@/components / ui / button';'
import Link from './next / link';'
=======
    return () => clear_timeout (timer) }, []) },
  ];,
  const quick_services = [";
    { name: "AI Solutions", icon: Brain, link: "/ai - services" }, ";
    { name: "Cybersecurity", icon: Shield, link: "/cybersecurity" }, ";
    { name: "Cloud Services", icon: Cloud, link: "/cloud - solutions" }, ";
    { name: "Digital Transformation", icon: Zap, link: "/digital - transformation" }"
  ];
  // Check condition
if (return,  null) {
  $2
}
                    to="/services";
                    className="flex items - center gap - 3 p - 3 rounded - lg hover:bg - slate - 700 transition - colors duration - 200 text - white";",
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
import { useState, useEffect  } from './react';
export /**;
 * FloatingCTA - Function description;
 */
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
function FloatingCTA() {}
=======
function FloatingCTA() {,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
  const [ is_visible, setIsVisible ] = useState (false),
  const [ is_closed, setIsClosed ] = useState (false),
  useEffect ((, ) => {}
    const handle_scroll = () =>: any {}
      const scroll_position = window.scroll_y;
      const threshold = 600; // Show CTA after scrolling 600px;
      // Check condition;
if ( {) {}
  $2;
}
        setIsVisible (true);
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
      } else {
=======
      } else {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/FloatingCTA.tsx
        setIsVisible (false);
      }
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
'
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
import { X } from 'lucide-react';
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
export function FloatingCTA() {;
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/FloatingCTA.tsx
=======
export function FloatingCTA() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/FloatingCTA.tsx
    },

<<<<<<< HEAD
    window.addEventListener("scroll", handleScroll),
    return () => {
      window.removeEventListener("scroll", handleScroll)
=======

  const [ isVisible, setIsVisible ] = useState(false),;
=======
    },
  const [ isVisible, setIsVisible ] = useState(false),;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
  const [ isClosed, setIsClosed ] = useState(false),;
  useEffect((,) => {;
    const handleScroll = () => {;
      const scrollPosition = window && window.scrollY;
      const threshold = 600; // Show CTA after scrolling 600px;
      if (scrollPosition > threshold && !isClosed) {;
        setIsVisible(true);
      } else {;

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  useEffect(() => {
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 600; // Show CTA after scrolling 600px

      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true);
      } else {
origin/cursor/automate-test-improve-and-merge-code-2533
        setIsVisible(false);
      }
    };
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx

<<<<<<< HEAD:src/components/FloatingCTA.tsx
<<<<<<< HEAD
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/FloatingCTA.tsx
    window && window.addEventListener('scroll', handleScroll);
    return () => {;'
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
"
    window && window.addEventListener("scroll", handleScroll);
    return () => {;"
      window && window.removeEventListener("scroll", handleScroll);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
  }, [isClosed]),


<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/FloatingCTA.tsx
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClosed]);

  const handleClose = () => {
    setIsClosed(true);
setIsVisible(false);
  };

  if (!isVisible) return null;

<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
return (
<<<<<<< HEAD:src/components/FloatingCTA.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/FloatingCTA.tsx
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
  return (
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">
        <div className="mr-4">
          <p className="text-white font-medium">Ready to explore Zion?</p>
=======

  return ("
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">"
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">"
        <div className="mr-4">"
          <p className="text-white font-medium">Ready to explore Zion?</p>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/FloatingCTA.tsx
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>
        </div>"
        <div className="flex items-center gap-2">
          <Button "
            variant="default" "
            size="sm" "
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap"
            asChild;
          >"
            <Link href="/signup">Register Now</Link>
          </Button>
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx

<<<<<<< HEAD:src/components/FloatingCTA.tsx
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <button 
            onClick={handleClose}
<<<<<<< HEAD
            className="text-zion-slate hover: text-white p-1"
            aria-label="Close"
          >
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <X className="w-5 h-5" />
=======
=======



<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
          <button 
            onClick={handleClose}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/FloatingCTA.tsx
            className='text-zion-slate hover:text-white p-1'
            aria-label='Close'
          >
            <X className='w-5 h-5' />
origin/cursor/automate-test-improve-and-merge-code-2533
=======
          <button;
            onClick={handleClose}"
            className="text-zion-slate hover: text-white p-1""
            aria-label="Close"
          >


"
            <X className="w-5 h-5" />
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/FloatingCTA.tsx
=======
          <button 
            onClick={handleClose}
            className="text-zion-slate hover: text-white p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
            className='text-zion-slate hover:text-white p-1'
            aria-label='Close'
          >
            <X className='w-5 h-5' />
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
          </button>
        </div>
      </div>
    </div>
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
<<<<<<< HEAD:src/components/FloatingCTA.tsx
<<<<<<< HEAD
  )
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/FloatingCTA.tsx

=======
'"
            aria-label='Close'           aria-label="Button">;'
            <X className='w-5 h-5' />          </button>;"
            <X className="w-5 h-5" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/FloatingCTA.tsx

<<<<<<< HEAD:src/components/FloatingCTA.tsx
;
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/FloatingCTA.tsx
import { Button } from "@/components/ui/button",;
import Link from "next/link",;
import { useState, useEffect } from "react",;
=======
"
import { Button } from "@/components/ui/button",;"
import Link from "next/link",;"
import { useState, useEffect } from "react",;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/FloatingCTA.tsx
import { X } from 'lucide-react';
export function FloatingCTA() { return null; }
      } else {;
        setIsVisible(false);
      }
    },;"
    window.addEventListener("scroll", handleScroll),;
    return () => {;"
      window.removeEventListener("scroll", handleScroll);
    }
  }, [isClosed]),;
  const handleClose = () => {;
    setIsClosed(true),;
    setIsVisible(false);
  };
  if (!isVisible) return null;
  return (;"
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">;"
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">;"
        <div className="mr-4">;"
          <p className="text-white font-medium">Ready to explore Zion?</p>;"
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>;
        </div>;"
        <div className="flex items-center gap-2">;
          <Button;"
            variant="default";"
            size="sm";"
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap";
            asChild;
          >;"
            <Link href="/signup">Register Now</Link>;
          </Button>;
          <button;
            onClick={handleClose}"
            className="text-zion-slate hover: text-white p-1";"
            aria-label="Close";
          >;
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
<<<<<<< HEAD:src/components/FloatingCTA.tsx
<<<<<<< HEAD
            <X className="w-5 h-5" />;
=======

            aria-label='Close'           aria-label="Button">;
            <X className='w-5 h-5' />          </button>;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/FloatingCTA.tsx
            <X className="w-5 h-5" />;

;

=======
      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true)      } else {
        setIsVisible (false);
      }

import { X } from 'lucide-react';
export function FloatingCTA() {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  )
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
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
    setIsVisible(false)
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
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
<<<<<<< HEAD

=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/FloatingCTA.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
            <X className="w-5 h-5" />;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </button>;
        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
<<<<<<< HEAD:src/components/FloatingCTA.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/FloatingCTA.tsx
=======
}
;
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx

  }, [is_closed]);
  const handle_close = () =>: any {}
    setIsClosed (true);
    setIsVisible (false);    setIsVisible (false);
  }
  // Check condition;
if (return null) {}
  $2;
}
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
  return ('
    <div className='fixed bottom - 6 left - 0 right - 0 mx - auto max - w-md px - 4 z - 50 animate - fade - in'>;'
      <div className='bg - gradient - to - r from - zion - blue - dark to - zion - blue p - 4 rounded - lg border border - zion - purple shadow - lg flex items - center justify - between'>;'
        <div className='mr - 4'>;'
          <p className='text - white font - medium'>Ready to explore Zion?</p>;'
          <p className='text - zion - slate - light text - sm'>;
            Register today to access all features!;
          </p>;
        </div>;'
=======
  return (
  const quick_services = [";""
    { name: "AI Solutions", icon: Brain, link: "/ai - services" }, ";""
    { name: "Cybersecurity", icon: Shield, link: "/cybersecurity" }, ";""
    { name: "Cloud Services", icon: Cloud, link: "/cloud - solutions" }, ";""
    { name: "Digital Transformation", icon: Zap, link: "/digital - transformation" }"]
  // Check condition;
if (return null) {
  $2;
}"
                    to="/services";""
                    className="flex items - center gap - 3 p - 3 rounded - lg hover:bg - slate - 700 transition - colors duration - 200 text - white";"
                    on_click={() => setIsExpanded (false)}"
                  >";""
                    <span className="text - xl">🚀</span>;""
                    <div>";"
</div>"
                      <div className="font - semibold">Our Services</div>";""
                      <div className="text - sm text - gray - 400">Explore solutions</div>;"
                    </div>;
                  ;"
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">"
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">"
        <div className="mr-4">"
          <p className="text-white font-medium">Ready to explore Zion?</p>""
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>"
        <div className="flex items-center gap-2">"
</div>
          <Button;"
            variant="default"""
            size="sm"""
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap""
            asChild;
          >
"
            <Link href="/signup">Register Now"



          <button;
            onClick={handleClose}"
            className="text-zion-slate hover: text-white p-1"""
            aria-label="Close""
</button>


            <X className="w-5 h-5" />"

            <X className='w-5 h-5' />          </button>;

            <X className="w-5 h-5" />;"
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">;"
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">;"
        <div className="mr-4">;"
          <p className="text-white font-medium">Ready to explore Zion?</p>;""
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>;"
        </div>;"
        <div className="flex items-center gap-2">;"
            variant="default";""
            size="sm";""
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap";"
          >;
            <Link href="/signup">Register Now;"
          ;
            className="text-zion-slate hover: text-white p-1";""
            aria-label="Close";"

          </button>;
pr-12325
    <div className='fixed bottom - 6 left - 0 right - 0 mx - auto max - w-md px - 4 z - 50 animate - fade - in'>;
      <div className='bg - gradient - to - r from - zion - blue - dark to - zion - blue p - 4 rounded - lg border border - zion - purple shadow - lg flex items - center justify - between'>;
        <div className='mr - 4'>;
          <p className='text - white font - medium'>Ready to explore Zion?</p>;
          <p className='text - zion - slate - light text - sm'>;
            Register today to access all features!;
          </p>;
        </div>;
</p>
          </p>;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
        <div className='flex items - center gap - 2'>;
          <Button;'
            variant='default';'
            size='sm';'
            className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple whitespace - nowrap';
            as_child;
          >;'
            <Link href='/signup'>Register Now</Link>;
          </Button>;
          <button;
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
            on_click={handle_close}'
            className='text - zion - slate hover:text - white p - 1';'
            aria - label='Close'          >;'
            <X className='w - 5 h - 5' />          </button>;"
            <X className="w - 5 h - 5" />;"
=======

            <Link href='/signup'>Register Now;
pr-12325
            on_click={handle_close}
            className='text - zion - slate hover:text - white p - 1';
            aria - label='Close'          >;
            <X className='w - 5 h - 5' />          </button>;
            <X className="w - 5 h - 5" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
            <X className="w - 5 h - 5" />;
          </button>;
        </div>;
      </div>;
    </div>);
}
}, [is_closed]);"
return (<div className="fixed bottom - 6 left - 0 right - 0 mx - auto max - w-md px - 4 z - 50 animate - fade - in" > <div className="bg - gradient - to - r from - zion - blue - dark to - zion - blue p - 4 rounded - lg border border - zion - purple shadow - lg flex items - center justify - between" > <div className="mr - 4" > <p className="text - white font - medium" >Ready to explore Zion?</p> <p className="text - zion - slate - light text - sm" >Register today to access all features!</p> </div> <div className="flex items - center gap - 2" > <Button variant="default" size="sm" className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple whitespace - nowrap" as_child > <Link href="/signup" >Register Now</Link> </Button> <button aria - label="Close" w - 5 h - 5" /> </button> </div> </div> </div>);'"
}'";
      {/* Backdrop */}
      <AnimatePresence>;
        {is_expanded && ("
          <motion.div";"
            className="fixed inset - 0 bg - black / 20 z - 40";


            <X className="w - 5 h - 5" />;"

    </div>);"
return (<div className="fixed bottom - 6 left - 0 right - 0 mx - auto max - w-md px - 4 z - 50 animate - fade - in" > <div className="bg - gradient - to - r from - zion - blue - dark to - zion - blue p - 4 rounded - lg border border - zion - purple shadow - lg flex items - center justify - between" > <div className="mr - 4" > <p className="text - white font - medium" >Ready to explore Zion?</p> <p className="text - zion - slate - light text - sm" >Register today to access all features!</p> </div> <div className="flex items - center gap - 2" > <Button variant="default" size="sm" className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple whitespace - nowrap" as_child > <Link href="/signup" >Register Now  <button aria - label="Close" w - 5 h - 5" /> </button> </div> </div> </div>);"
      <AnimatePresence>;
          <motion.div";""
            className="fixed inset - 0 bg - black / 20 z - 40";"
pr-12325
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            on_click={ () => setIsExpanded (false) }
          />) }

}

      </AnimatePresence>;
    </>)}
            on_click={ () => setIsExpanded (false) }
          />) }
      </AnimatePresence>;
    </>)}'"
'";
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:src/components/FloatingCTA.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/FloatingCTA.tsx
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
  );
};
}, [isClosed]);
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link href="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>) ;
}'"
<<<<<<< HEAD:src/components/FloatingCTA.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:src_backup/components/FloatingCTA.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/FloatingCTA.tsx
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/FloatingCTA.tsx
=======
</motion>
    </>)}
          />) }
    </>)}"
";"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/FloatingCTA.tsx
