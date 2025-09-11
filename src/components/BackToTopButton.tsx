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
import { useEffect, useState } from 'react'
import { useEffect, useState } from "react"
export function BackToTopButton() {
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
=======
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useEffect, useState } from "react"
export function BackToTopButton() {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [visible, setVisible] = useState(false)
  useEffect((,) => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 400)
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    }
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      >;
      <ArrowUp className='h - 5 w - 5' />;
    </button>);
}"}
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
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
<<<<<<< HEAD
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}"}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    >;
      <ArrowUp className="h-5 w-5" />;
    </button>;
  );
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
