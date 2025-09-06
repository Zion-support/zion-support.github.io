<<<<<<< HEAD
import { ArrowUp } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useEffect, useState } from "react";
export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const updateVisibility = null;
  return (
    <button
      aria-label="Back to top"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useEffect, useState } from 'react'
import { useEffect, useState } from "react"
export function BackToTopButton() {
  const [visible, setVisible] = useState(false)
  useEffect((,) => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 400)
=======
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useEffect, useState  } from './react';
export /**
 * BackToTopButton - Function description
 */
function BackToTopButton() {
  const [visible, set_visible] = useState (false);
  useEffect ((, ) => {
    const update_visibility = () =>: any {
      set_visible (window.scroll_y > 400);
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    }
    updateVisibility()
    window.addEventListener('scroll', updateVisibility)
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])
  const scrollToTop = () => {
    const opts: ScrollToOptions = { top: 0, behavior: 'smooth' }
    window.scrollTo(opts)
    document.documentElement.scrollTo(opts)
    document.body.scrollTo(opts)
  }
<<<<<<< HEAD
      >
      <ArrowUp className='h-5 w-5' />
    </button>;
  );
}"};
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useEffect, useState } from "react",

export function BackToTopButton() {
  const [visible, setVisible] = useState(false),

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 400)
    },
    updateVisibility(),
    window.addEventListener("scroll", updateVisibility),
    return () => window.removeEventListener("scroll", updateVisibility)
  }, []),

  const scrollToTop = () => {
    const opts: ScrollToOptions = { top: 0, behavior: "smooth" },
    window.scrollTo(opts),
    document.documentElement.scrollTo(opts),
    document.body.scrollTo(opts)
  },

  return (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
<<<<<<< HEAD
>>>>>>> import { ArrowUp } from 'lucide-react';
=======
=======
      >;
      <ArrowUp className='h - 5 w - 5' />;
    </button>);
}"}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { ArrowUp } from 'lucide-react';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useEffect, useState } from "react",;
export function BackToTopButton() {;
  const [visible, setVisible] = useState(false),;
  useEffect(() => {;
    const updateVisibility = () => {;
      setVisible(window.scrollY > 400);
    },;
    updateVisibility(),;
    window.addEventListener("scroll", updateVisibility),;
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []),;
  const scrollToTop = () => {;
    const opts: ScrollToOptions = { top: 0, behavior: "smooth" },;
    window.scrollTo(opts),;
    document.documentElement.scrollTo(opts);
    document.body.scrollTo(opts);
  };
  return (;
    <button;
      aria-label="Back to top";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}"}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    >;
      <ArrowUp className="h-5 w-5" />;
    </button>;
  );
}
<<<<<<< HEAD
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
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
