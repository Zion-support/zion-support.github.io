<<<<<<< HEAD
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
=======
import { ArrowUp } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from "react";
export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const updateVisibility = null;
  return (
    <button
      aria-label="Back to top"
=======
import { useEffect, useState } from 'react'
import { useEffect, useState } from "react"
export function BackToTopButton() {
  const [visible, setVisible] = useState(false)
  useEffect((,) => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 400)
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    }
    update_visibility ();
    window.addEventListener ('scroll', update_visibility);
    return () => window.removeEventListener ('scroll', update_visibility);
  }, []);
  const scrollToTop = () =>: any {
    const opts: ScrollToOptions = { top: 0, behavior: 'smooth' }
    window.scroll_to (opts);
    document.document_element.scroll_to (opts);
    document.body.scroll_to (opts);
  }
<<<<<<< HEAD
      >;
      <ArrowUp className='h - 5 w - 5' />;
    </button>);
}"}
=======
import { ArrowUp } from 'lucide-react'
=======
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import { ArrowUp } from 'lucide-react';
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
<<<<<<< HEAD
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}"}
    >;
      <ArrowUp className="h-5 w-5" />;
    </button>;
  );
}
;
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
