<<<<<<< HEAD
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
=======


import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function FloatingCTA() {

  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

>>>>>>> main

import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
import { useState, useEffect } from "react",
import { X } from "lucide-react",
export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false),
  const [isClosed, setIsClosed] = useState(false),

<<<<<<< HEAD
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
=======

  useEffect(() => {

    const handleScroll = () => {

      const scrollPosition = window.scrollY,
      const threshold = 600, // Show CTA after scrolling 600px



      if (scrollPosition > threshold && !isClosed) {
=======

  useEffect(() => {;
    const handleScroll = () => {;
      const scrollPosition = window && window.scrollY;
      const threshold = 600; // Show CTA after scrolling 600px;

      if (scrollPosition > threshold && !isClosed) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        setIsVisible(true);
      } else {;
        setIsVisible(false);
      }

    };

    window && window.addEventListener("scroll", handleScroll);
    return () => {;
      window && window.removeEventListener("scroll", handleScroll);
    };
  }, [isClosed]);

  const handleClose = () => {;

>>>>>>> main
    setIsClosed(true);
    setIsVisible(false);
  }
  if (!isVisible) return null;
<<<<<<< HEAD
=======
=======

  return (
=======

>>>>>>> main
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> main

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
  );
}
=======
=======

>>>>>>> main
  )
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { useState, useEffect } from "react",;
import { X } from "lucide-react",;
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
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">;
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">;
        <div className="mr-4">;
          <p className="text-white font-medium">Ready to explore Zion?</p>;
<<<<<<< HEAD
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>;
        </div>;
        <div className="flex items-center gap-2">;
          <Button;
            variant="default";
            size="sm";
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap";
            asChild;
          >;
            <Link to="/signup">Register Now</Link>;
          </Button>;
          <button;
            onClick={handleClose}
            className="text-zion-slate hover: text-white p-1";
            aria-label="Close";
          >;
=======
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
>>>>>>> main
            <X className="w-5 h-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

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

}
=======
}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
