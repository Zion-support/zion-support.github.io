<<<<<<< HEAD
export function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window && window.scrollY > 400)}; window && window.addEventListener("scroll",onScroll); return () => window && window.removeEventListener("scroll",onScroll)},[]); const scrollToTop = () => window && window.scrollTo({ "top": '0',"behavior": "smooth" }
}); return () <button" aria-label={t("general && general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
}); return () <button" aria-label={t("general && general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
=======
import React from 'react';

const BackToTopButton = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BackToTopButton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BackToTopButton;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
