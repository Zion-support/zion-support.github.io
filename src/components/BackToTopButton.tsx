import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from &quot;react&quot;;

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 400);
    };
    updateVisibility();
    window.addEventListener(&quot;scroll&quot;, updateVisibility);
    return () => window.removeEventListener(&quot;scroll&quot;, updateVisibility);
  }, []);

  const scrollToTop = () => {
    const opts: ScrollToOptions = { top: 0, behavior: &quot;smooth&quot; };
    window.scrollTo(opts);
    document.documentElement.scrollTo(opts);
    document.body.scrollTo(opts);
  };

  return (
    <button
      aria-label=&quot;Back to top&quot;
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${
        visible ? &quot;opacity-100&quot; : &quot;opacity-0 pointer-events-none&quot;
      }`}
    >
      <ArrowUp className=&quot;h-5 w-5&quot; />
    </button>
  );
}
