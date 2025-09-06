<<<<<<< HEAD
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
=======
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from "react";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 400);
    };
    updateVisibility();
    window.addEventListener('scroll', updateVisibility);
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const scrollToTop = () => {
    const opts: ScrollToOptions = { top: 0, behavior: 'smooth' };
    window.scrollTo(opts);
    document.documentElement.scrollTo(opts);
    document.body.scrollTo(opts);
  };

  
    >
      <ArrowUp className='h-5 w-5' />
    </button>
  );
<<<<<<< HEAD

}"
=======
<<<<<<< HEAD

}"
=======
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from "react";

export function BackToTopButton() {

  const [ visible, setVisible ] = useState(false),


  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 400)
    };
    updateVisibility();
    window.addEventListener("scroll", updateVisibility);
    return () => window.removeEventListener("scroll", updateVisibility)
  }, []);

  const scrollToTop = () => {
    const opts: ScrollToOptions = { top: 0, behavior: "smooth" },
    window.scrollTo(opts);
    document.documentElement.scrollTo(opts);
    document.body.scrollTo(opts)
  };


  return (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none", }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
