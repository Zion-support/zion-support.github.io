import { ArrowUp } from 'lucide-react'
<<<<<<< HEAD
import { useEffect, useState } from 'react'
import { useEffect, useState } from "react"
export function BackToTopButton() {
  const [visible, setVisible] = useState(false)
  useEffect((,) => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 400)
    }
    updateVisibility()
    window.addEventListener('scroll', updateVisibility)
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])
  const scrollToTop = () => {
    const opts: ScrollToOptions = { top: 0, behavior: 'smooth' }
    window.scrollTo(opts)
    document.documentElement.scrollTo(opts)
    document.body.scrollTo(opts)
  }
      >
      <ArrowUp className='h-5 w-5' />
    </button>;
  );
}"};
=======
import { useEffect, useState } from "react",

export function BackToTopButton() {
  const [visible, setVisible] = useState(false),

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 400)
    },
    updateVisibility(),
    window.addEventListener("scroll", updateVisibility),
    return () => window.removeEventListener("scroll", updateVisibility)
  }, []),

  const scrollToTop = () => {
    const opts: ScrollToOptions = { top: 0, behavior: "smooth" },
    window.scrollTo(opts),
    document.documentElement.scrollTo(opts),
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
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from "react",;
export function BackToTopButton() {;
  const [visible, setVisible] = useState(false),;
  useEffect(() => {;
    const updateVisibility = () => {;
      setVisible(window.scrollY > 400);
    },;
    updateVisibility(),;
    window.addEventListener("scroll", updateVisibility),;
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []),;
  const scrollToTop = () => {;
    const opts: ScrollToOptions = { top: 0, behavior: "smooth" },;
    window.scrollTo(opts),;
    document.documentElement.scrollTo(opts);
    document.body.scrollTo(opts);
  };
  return (;
    <button;
      aria-label="Back to top";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
<<<<<<< HEAD
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}"}
=======
    >;
      <ArrowUp className="h-5 w-5" />;
    </button>;
  );
}
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
