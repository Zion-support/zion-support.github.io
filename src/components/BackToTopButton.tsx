import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from "react";
export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const updateVisibility = null;
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
}"}
