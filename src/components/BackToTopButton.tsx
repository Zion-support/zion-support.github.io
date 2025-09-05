<<<<<<< HEAD
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from "react",;
;
export function BackToTopButton() {;
  const [visible, setVisible] = useState(false),;
;
  useEffect(() => {;
    const updateVisibility = () => {;
      setVisible(window.scrollY > 400),;
    },;
    updateVisibility(),;
    window.addEventListener("scroll", updateVisibility),;
    return () => window.removeEventListener("scroll", updateVisibility),;
  }, []),;
;
  const scrollToTop = () => {;
    const opts:ScrollToOptions = { top:0, behavior:"smooth" },;
    window.scrollTo(opts),;
    document.documentElement.scrollTo(opts),;
    document.body.scrollTo(opts),;
  },;
;
  return (;
    <button;
      aria-label="Back to top";
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${;
        visible ? "opacity-100" :"opacity-0 pointer-events-none";
      }`}
    >;
      <ArrowUp className="h-5 w-5" />;
    </button>;
  ),;
=======
import { ArrowUp } from 'lucide-react'
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
  },    updateVisibility();
    window.addEventListener(&quot;scroll&quot;, updateVisibility);
    return () => window.removeEventListener(&quot;scroll&quot;, updateVisibility);
  }, []);

  const scrollToTop = () => {
    const opts: ScrollToOptions = { top: 0, behavior: &quot;smooth&quot; };    window.scrollTo(opts);
    document.documentElement.scrollTo(opts);
    document.body.scrollTo(opts);
  };

  return (
    <button
      aria-label=&quot;Back to top&quot;
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${
        visible ? &quot;opacity-100&quot; : &quot;opacity-0 pointer-events-none&quot;
      }`}    >
      <ArrowUp className=&quot;h-5 w-5&quot; />
    </button>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
