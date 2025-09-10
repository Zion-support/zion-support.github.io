import { _ArrowUp } from "lucide-react";
import { _useEffect, useState } from "react";
import { _useTranslation } from "react-i18next";
export function BackToTopButton() {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();
    useEffect(() => {
        const _onScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const _scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    return (<button aria-label={t('general.back_to_top')} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <ArrowUp aria-hidden="true" className="h-5 w-5"/>
    </button>);
}
