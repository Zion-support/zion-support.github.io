import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from "react";
export function BackToTopButton() {;
  const [visible, setVisible] = useState(false);
<<<<<<< HEAD
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
=======

  useEffect((,) => {;
    const updateVisibility = () => {;
      setVisible(window && window.scrollY > 400);
    };
    updateVisibility();
    window && window.addEventListener('scroll', updateVisibility);
    return () => window && window.removeEventListener('scroll', updateVisibility);
  }, []);

  const scrollToTop = () => {;
    const opts: ScrollToOptions = { top: 0, behavior: 'smooth' };
    window && window.scrollTo(opts);
    document && document.documentElement.scrollTo(opts);
    document && document.body.scrollTo(opts);
  };

      >;
      <ArrowUp className='h-5 w-5' />;
    </button>;
  );
<<<<<<< HEAD

}"}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
