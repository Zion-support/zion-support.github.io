import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
<<<<<<< HEAD:src/components/BackToTopButton.tsx
import { useTranslation } from "react-i18next";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

=======
export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/BackToTopButton.tsx
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
<<<<<<< HEAD:src/components/BackToTopButton.tsx

  const scrollToTop = () => {
    const anchor = document.getElementById("top");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

=======
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/BackToTopButton.tsx
  return (
    <button
      aria-label={t('general.back_to_top')}
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}
