import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useEffect, useState } from "react";
export function BackToTopButton() {;
  const [visible, setVisible] = useState(false);

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

}"}
