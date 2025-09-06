
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
<<<<<<< HEAD
import {
  AlertDialog
  AlertDialogAction
  AlertDialogCancel
  AlertDialogContent
  AlertDialogDescription
  AlertDialogFooter
  AlertDialogHeader
  AlertDialogTitle
} from "../components/ui/alert-dialog";
import {
  useLanguage
  SupportedLanguage
  LanguageContextType
} from "../context/LanguageContext";
export function LanguageDetectionPopup() {
=======
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle,;
} from "../components/ui/alert-dialog";
import {;
  useLanguage,;
  SupportedLanguage,;
  LanguageContextType,;
} from "../context/LanguageContext";

export function LanguageDetectionPopup() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { changeLanguage, currentLanguage, supportedLanguages } =;
    useLanguage() as LanguageContextType;
  const [detectedLanguage, setDetectedLanguage] =;
    useState<SupportedLanguage | null>(null);
<<<<<<< HEAD
  useEffect(() => {
    // Check if this is first visit
    const hasVisited = localStorage.getItem("zion_has_visited");
    if (hasVisited) return;
    // Mark as visited
    localStorage.setItem("zion_has_visitedtrue");
    // Get browser language
    const browserLang = navigator.language.substring(0, 2) as SupportedLanguage;
    // Check if browser language is supported and different from current language
    const isSupported = supportedLanguages.some(
      (lang) => lang.code === browserLang
=======

  useEffect(() => {;
    // Check if this is first visit;
    const hasVisited = localStorage && localStorage.getItem("zion_has_visited");
    if (hasVisited) return;

    // Mark as visited;
    localStorage && localStorage.setItem("zion_has_visitedtrue");

    // Get browser language;
    const browserLang = navigator && navigator.language.substring(0, 2) as SupportedLanguage;

    // Check if browser language is supported and different from current language;
    const isSupported = supportedLanguages && supportedLanguages.some(;
      (lang) => lang && lang.code === browserLang,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
    if (isSupported && browserLang !== currentLanguage) {;
      setDetectedLanguage(browserLang);
      setOpen(true);
    }
  }, []);
  if (!detectedLanguage) return null;
<<<<<<< HEAD
  const languageName =
    supportedLanguages.find((lang) => lang.code === detectedLanguage)?.name |
    detectedLanguage;
  const handleAccept = async () => {
=======

  const languageName =;
    supportedLanguages && supportedLanguages.find((lang) => lang && lang.code === detectedLanguage)?.name ||;
    detectedLanguage;

  const handleAccept = async () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    await changeLanguage(detectedLanguage);
    setOpen(false);
  }

  return (
<<<<<<< HEAD
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-zion-blue-dark text-white border border-zion-purple/20">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            {t("language.switch_to_detected", { language: languageName })}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-zion-slate-light">
            {`${supportedLanguages.find((lang) => lang.code === detectedLanguage)?.flag |""} ${languageName}`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">
            {t("general.no")}
          </AlertDialogCancel>
=======
    <AlertDialog open={open} onOpenChange={setOpen}>;
      <AlertDialogContent className="bg-zion-blue-dark text-white border border-zion-purple/20">;
        <AlertDialogHeader>;
          <AlertDialogTitle className="text-white">;
            {t("language && language.switch_to_detected", { language: languageName })}
          </AlertDialogTitle>;
          <AlertDialogDescription className="text-zion-slate-light">;
            {`${supportedLanguages && supportedLanguages.find((lang) => lang && lang.code === detectedLanguage)?.flag || ""} ${languageName}`}
          </AlertDialogDescription>;
        </AlertDialogHeader>;
        <AlertDialogFooter>;
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">;
            {t("general && general.no")}
          </AlertDialogCancel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <AlertDialogAction
            onClick={handleAccept}
            className="bg-zion-purple text-white hover:bg-zion-purple-dark">;
            {t("general && general.yes")}
          </AlertDialogAction>;
        </AlertDialogFooter>;
      </AlertDialogContent>;
    </AlertDialog>;
  );
}