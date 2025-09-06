<<<<<<< HEAD
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
=======
<<<<<<< HEAD
import { ArrowUp } from 'lucide-react'
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
      >;
      <ArrowUp className='h - 5 w - 5' />;
    </button>);
}"}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
