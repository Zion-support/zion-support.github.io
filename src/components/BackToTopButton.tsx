import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from "react";
export function BackToTopButton() {
  const [visible, setVisible] = useState($2);
  useEffect(() => {
    const updateVisibility = $2;
    updateVisibility($2);
    window.addEventListener($2);
    return () => window.removeEventListener("scroll", updateVisibility)
  }, []),

  const scrollToTop = () => {
    const opts: ScrollToOptions = { top: 0, behavior: "smooth" },
    window.scrollTo($2);
    document.documentElement.scrollTo($2);
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
}
