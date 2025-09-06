import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
<<<<<<< HEAD

const BackToTopButton: React.FC = () => {
=======
import { useEffect, useState } from 'react';
<<<<<<< HEAD
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
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793

export function BackToTopButton() {
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
<<<<<<< HEAD
  
  return (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 text-white p-3 shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
<<<<<<< HEAD
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTopButton;
=======
      <ArrowUp className="h-4 w-4" />
    </button>
  );
<<<<<<< HEAD
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
=======
}
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
