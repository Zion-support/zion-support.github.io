<<<<<<< HEAD
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 400);
    };
    updateVisibility();
    window.addEventListener('scroll', updateVisibility);
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const scrollToTop = () => {
    const opts: ScrollToOptions = { top: 0, behavior: 'smooth' };
    window.scrollTo(opts);
    document.documentElement.scrollTo(opts);
    document.body.scrollTo(opts);
  };

  return (
    <button
      aria-label='Back to top'
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <ArrowUp className='h-5 w-5' />
    </button>
  );
}
=======
 export function BackToTopButton () {;
  const [visible, setVisible] = useState (false);
useEffect ( () => {;
  const updateVisibility = () => {;
  updateVisibility ();
window.addEventListener ("scroll",  updateVisibility);";
return () => window.removeEventListener ("scroll", updateVisibility);
}, []);
window.scrollTo (opts);
document.documentElement.scrollTo (opts);
document.body.scrollTo (opts);
};";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 return (<button > <ArrowUp className="h-5 w-5" /> </button>) ;
}"
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
