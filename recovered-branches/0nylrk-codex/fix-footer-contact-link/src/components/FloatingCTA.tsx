<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FloatingCTA.tsx

<<<<<<< HEAD
import { useState, useEffect } from "react";
import { X } from "lucide-react";

  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

=======

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function FloatingCTA() {

  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

=======
<<<<<<< HEAD

import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
=======
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { useState, useEffect } from "react";
import { X } from "lucide-react";
<<<<<<< HEAD
export function FloatingCTA() {;
=======
export function FloatingCTA() {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
import { useState, useEffect } from "react",
import { X } from "lucide-react",
export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false),
  const [isClosed, setIsClosed] = useState(false),

<<<<<<< HEAD

  useEffect(() => {

    const handleScroll = () => {

      const scrollPosition = window.scrollY,
      const threshold = 600, // Show CTA after scrolling 600px



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      if (scrollPosition > threshold && !isClosed) {
=======

  useEffect(() => {;
========
<<<<<<< HEAD
useEffect(() => {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FloatingCTA.tsx
    const handleScroll = () => {;
      const scrollPosition = window && window.scrollY;
      const threshold = 600; // Show CTA after scrolling 600px;
      if (scrollPosition > threshold && !isClosed) {;
        setIsVisible(true);
      } else {;
        setIsVisible(false);
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FloatingCTA.tsx
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FloatingCTA.tsx
    };
    window && window.addEventListener("scroll", handleScroll);
    return () => {;
      window && window.removeEventListener("scroll", handleScroll);
    };
  }, [isClosed]);
  const handleClose = () => {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FloatingCTA.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FloatingCTA.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  useEffect(() => {

    const handleScroll = () => {
<<<<<<< HEAD
      const scrollPosition = window.scrollY;
      const threshold = 600; // Show CTA after scrolling 600px
=======
      const scrollPosition = window.scrollY,
      const threshold = 600, // Show CTA after scrolling 600px

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
<<<<<<< HEAD
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [isClosed]);
  const handleClose = () => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    setIsClosed(true);
    setIsVisible(false);
  }
  if (!isVisible) return null;
<<<<<<< HEAD
  return (
=======

<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FloatingCTA.tsx
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
            <Link to="/signup">Register Now</Link>
          </Button>
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
  )
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FloatingCTA.tsx
=======
<<<<<<< HEAD
  );
}
=======
  )
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { useState, useEffect } from "react",;
import { X } from "lucide-react",;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FloatingCTA.tsx
export function FloatingCTA() {;
  const [isVisible, setIsVisible] = useState(false),;
  const [isClosed, setIsClosed] = useState(false),;
========
;
export function FloatingCTA() {;
  const [isVisible, setIsVisible] = useState(false),;
  const [isClosed, setIsClosed] = useState(false),;
;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FloatingCTA.tsx
=======
export function FloatingCTA() {;
  const [isVisible, setIsVisible] = useState(false),;
  const [isClosed, setIsClosed] = useState(false),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {;
    const handleScroll = () => {;
      const scrollPosition = window.scrollY,;
      const threshold = 600, // Show CTA after scrolling 600px;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FloatingCTA.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FloatingCTA.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">;
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">;
        <div className="mr-4">;
          <p className="text-white font-medium">Ready to explore Zion?</p>;
<<<<<<< HEAD
<<<<<<< HEAD
          <p className="text-zion-slate-light text-sm">;
            Register today to access all features!;
          </p>;
        </div>;
        <div className="flex items-center gap-2">;
          <Button
            variant="default"
            size="sm"
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap"
            asChild>;
            <Link to="/signup">Register Now</Link>;
          </Button>;
          <button
            onClick={handleClose}
            className="text-zion-slate hover: text-white p-1"
            aria-label="Close">;
=======
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>;
        </div>;
        <div className="flex items-center gap-2">;
          <Button ;
            variant="default" ;
            size="sm" ;
=======
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>;
        </div>;
        <div className="flex items-center gap-2">;
          <Button;
            variant="default";
            size="sm";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap";
            asChild;
          >;
            <Link to="/signup">Register Now</Link>;
          </Button>;
<<<<<<< HEAD
          <button ;
            onClick={handleClose}
            className="text-zion-slate hover:text-white p-1";
            aria-label="Close";
          >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          <button;
            onClick={handleClose}
            className="text-zion-slate hover: text-white p-1";
            aria-label="Close";
          >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <X className="w-5 h-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FloatingCTA.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FloatingCTA.tsx
import { Button  } from '@/components / ui / button';
import { Link  } from './react-router-dom';
import { useState, useEffect  } from './react';
import { X  } from './lucide-react';
export /**
 * FloatingCTA - Function description
 */
function FloatingCTA() {
  const [is_visible, setIsVisible] = useState (false);
  const [is_closed, setIsClosed] = useState (false);
;
  useEffect (() => {
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
    }
;
    window.addEventListener ("scroll", handle_scroll);
    return () => {
      window.removeEventListener ("scroll", handle_scroll);
    }
  }, [is_closed]);
;
  const handle_close = () =>: any {
    setIsClosed (true);
    setIsVisible (false);
  }
;
  // Check condition
if (return null) {
  $2
}
  return (
    <div className="fixed bottom - 6 left - 0 right - 0 mx - auto max - w-md px - 4 z - 50 animate - fade - in">;
      <div className="bg - gradient - to - r from - zion - blue - dark to - zion - blue p - 4 rounded - lg border border - zion - purple shadow - lg flex items - center justify - between">;
        <div className="mr - 4">;
          <p className="text - white font - medium">Ready to explore Zion?</p>;
          <p className="text - zion - slate - light text - sm">;
            Register today to access all features!;
          </p>;
        </div>;
        <div className="flex items - center gap - 2">;
          <Button;
            variant="default";
            size="sm";
            className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple whitespace - nowrap";
            as_child;
          >;
            <Link to="/signup">Register Now</Link>;
          </Button>;
          <button;
            on_click={handle_close}
            className="text - zion - slate hover: text - white p - 1";
            aria - label="Close";
          >;
            <X className="w - 5 h - 5" />;
          </button>;
        </div>;
      </div>;
    </div>);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FloatingCTA.tsx

}
=======
}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ); export function FloatingCTA () {
  const [isVisible, setIsVisible] = useState (false);
const [isClosed, setIsClosed] = useState (false);
useEffect ( () => {
  const handleScroll = () => {
  const scrollPosition = window.scrollY;
const threshold = 600, //Show CTA after scrolling 600px if (scrollPosition > threshold && !isClosed) {
  setIsVisible (true) 
}else {
  setIsVisible (false) 
}
};
}, [isClosed]);
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link to="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FloatingCTA.tsx
=======
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
