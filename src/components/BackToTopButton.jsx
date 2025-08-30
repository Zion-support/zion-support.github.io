import { ArrowUp import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
export function BackToTopButton() {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();
    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 400)};
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)}, []);
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    return (<button aria-label={t('general.back_to_top')} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <ArrowUp aria-hidden="true" className="h-5 w-5"/>
<<<<<<< HEAD
    </button>);
}}
=======
    </button>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
