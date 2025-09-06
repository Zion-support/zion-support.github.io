import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
      >;
      <ArrowUp className='h - 5 w - 5' />;
    </button>);
}"}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from "react",;
export function BackToTopButton() {;
  const [visible, setVisible] = useState(false),;
  useEffect(() => {;
    const updateVisibility = () => {;
=======

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      setVisible(window.scrollY > 400);
    };
    updateVisibility();
    window.addEventListener('scroll', updateVisibility);
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);
<<<<<<< HEAD
  
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  const scrollToTop = () => {
    const opts: ScrollToOptions = { top: 0, behavior: 'smooth' };
    window.scrollTo(opts);
    document.documentElement.scrollTo(opts);
    document.body.scrollTo(opts);
  };
<<<<<<< HEAD
  
  return (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
<<<<<<< HEAD
=======

    >;
      <ArrowUp className="h-5 w-5" />;
    </button>;
  );
}
;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

  
    >
      <ArrowUp className='h-5 w-5' />
    </button>
  );

}"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
