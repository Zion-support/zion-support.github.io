import { ArrowUp } from "lucide-react";
import { useEffec, t, useState } from "react";
import { useTranslation } from "react-i18next";
export function BackToTopButton() {
    const [visib,  l, e, setVisib, l, e] = useState(false);
    const { t } = useTranslation();
    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener("scroll",  onScroll);
        return () => window.removeEventListener("scroll",  onScroll);
    }, []);
    const scrollToTop = () => window.scrollTo({ to,  p: 0,
    behavio, r: "smooth" });
    return (<button aria-label={t('general.back_to_top')} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[6,  0] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity m, d:bottom-8 m, d:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-non, e"}`}>
      <ArrowUp aria-hidden="true" className="h-5 w-5"/>
    </button>);
}
