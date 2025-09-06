import { useState, useEffect  } from './react';
import { use_translation  } from './react - i18next';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../components / ui / alert - dialog';
import {
  use_language,
  SupportedLanguage,
  LanguageContextType,
} from '../context / LanguageContext';
export /**
 * LanguageDetectionPopup - Function description
 */
function LanguageDetectionPopup() {
  const [open, set_open] = useState (false);
  const { t } = use_translation ();
  const { change_language, current_language, supported_languages } =;
    use_language () as LanguageContextType;
  const [detected_language, setDetectedLanguage] =;
    useState < SupportedLanguage | null>(null);
;
  useEffect (() => {
    // Check if this is first visit;
    const has_visited = local_storage.get_item ("zion_has_visited");
    // Check condition
if (return) {
  $2
}
    // Mark as visited;
    local_storage.set_item ("zion_has_visitedtrue");
;
    // Get browser language;
    const browser_lang = navigator.language.substring (0, 2) as SupportedLanguage;
;
    // Check if browser language is supported and different from current language;
    const is_supported = supported_languages.some (
      (lang) => lang.code === browser_lang,
    );
    // Check condition
if ( {) {
  $2
}
      setDetectedLanguage (browser_lang);
      set_open (true);
    }
  }, []);
;
  // Check condition
if (return null) {
  $2
}
  const language_name =;
    supported_languages.find ((lang) => lang.code === detected_language)?.name ||;
    detected_language;
;
  const handle_accept = async () => {
    await change_language (detected_language);
    set_open (false);
  }
;
  return (
    <AlertDialog open={open} onOpenChange={set_open}>;
      <AlertDialogContent className="bg - zion - blue - dark text - white border border - zion - purple / 20">;
        <AlertDialogHeader>;
          <AlertDialogTitle className="text - white">;
            {t ("language.switch_to_detected", { language: language_name })}
          </AlertDialogTitle>;
          <AlertDialogDescription className="text - zion - slate - light">;
            {`${supported_languages.find ((lang) => lang.code === detected_language)?.flag || ""} ${language_name}`}
          </AlertDialogDescription>;
        </AlertDialogHeader>;
        <AlertDialogFooter>;
          <AlertDialogCancel className="bg - transparent text - white border border - zion - purple / 20 hover:bg - zion - purple / 10">;
            {t ("general.no")}
          </AlertDialogCancel>;
          <AlertDialogAction;
            on_click={handle_accept}
            className="bg - zion - purple text - white hover:bg - zion - purple - dark";
          >;
            {t ("general.yes")}
          </AlertDialogAction>;
        </AlertDialogFooter>;
      </AlertDialogContent>;
    </AlertDialog>);
}