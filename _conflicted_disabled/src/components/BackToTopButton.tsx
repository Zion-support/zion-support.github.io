import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 400)
=======
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
      setVisible(window.scrollY > 400);
>>>>>>> cursor/automate-test-improve-and-merge-code-6d57
    };
    updateVisibility();
    window.addEventListener("scroll", updateVisibility);
    return () => window.removeEventListener("scroll", updateVisibility)
  }, []);
<<<<<<< HEAD

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-6d57
  const scrollToTop = () => {
    const opts: ScrollToOptions = { top: 0, behavior: 'smooth' };
    window.scrollTo(opts);
    document.documentElement.scrollTo(opts);
    document.body.scrollTo(opts);
  };

=======
  },
>>>>>>> cursor/automate-test-improve-and-merge-code-6d57
  return (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${
<<<<<<< HEAD
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
=======
        visible ? "opacity-100" : "opacity-0 pointer-events-none",
      }`}
>>>>>>> cursor/automate-test-improve-and-merge-code-6d57
