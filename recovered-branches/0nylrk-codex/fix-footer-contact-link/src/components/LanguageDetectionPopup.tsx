<<<<<<< HEAD
import { useState, useEffect } from 'react',
import { useTranslation } from 'react-i18next',
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle} from '../components/ui/alert-dialog',
import { useLanguage, SupportedLanguage, LanguageContextType } from '../context/LanguageContext',

export function LanguageDetectionPopup() {
  const [open, setOpen] = useState(false),
  const { t } = useTranslation(),
  const { changeLanguage, currentLanguage, supportedLanguages } = useLanguage() as LanguageContextType,
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguage | null>(null),

  useEffect(() => {
    // Check if this is first visit
    const hasVisited = localStorage.getItem('zion_has_visited'),
    if (hasVisited) return,

    // Mark as visited
    localStorage.setItem('zion_has_visitedtrue'),
    
    // Get browser language
    const browserLang = navigator.language.substring(0, 2) as SupportedLanguage,
    
    // Check if browser language is supported and different from current language
    const isSupported = supportedLanguages.some(lang => lang.code === browserLang),
    if (isSupported && browserLang !== currentLanguage) {
      setDetectedLanguage(browserLang),
      setOpen(true)
    }
  }, []),
=======
import {_AlertDialog, _AlertDialogAction, _AlertDialogCancel, _AlertDialogContent, _AlertDialogDescription, _AlertDialogFooter, _AlertDialogHeader, _AlertDialogTitle} from '../components/ui/alert-dialog';

export function LanguageDetectionPopup() {_const [open, _setOpen] = useState(false);
  const { t} = useTranslation();
  const {_changeLanguage, _currentLanguage, _supportedLanguages} = useLanguage() as LanguageContextType;
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguage | null>(null);

  useEffect__(() => {_// Check if this is first visit
    const _hasVisited = localStorage.getItem('zion_has_visited');
    if (hasVisited) return;

    // Mark as visited
    localStorage.setItem('zion_has_visited', _'true');
    
    // Get browser language
    const _browserLang = navigator.language.substring(0, _2) as SupportedLanguage;
    
    // Check if browser language is supported and different from current language
    const _isSupported = supportedLanguages.some(lang => lang.code === browserLang);
    if (isSupported && browserLang !== currentLanguage) {
      setDetectedLanguage(browserLang);
      setOpen(true);}
  }, []);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (!detectedLanguage) return null,

<<<<<<< HEAD
  const languageName = supportedLanguages.find(lang => lang.code === detectedLanguage)?.name || detectedLanguage,

  const handleAccept = async () => {
    await changeLanguage(detectedLanguage),
    setOpen(false)
  },

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className=&quot;bg-zion-blue-dark text-white border border-zion-purple/20&quot;>
        <AlertDialogHeader>
          <AlertDialogTitle className=&quot;text-white&quot;>
            {t('language.switch_to_detected', { language: languageName })}
          </AlertDialogTitle>
          <AlertDialogDescription className=&quot;text-zion-slate-light&quot;>
            {`${supportedLanguages.find(lang => lang.code === detectedLanguage)?.flag || ''} ${languageName}`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className=&quot;bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10&quot;>
            {t('general.no')}
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleAccept}
            className=&quot;bg-zion-purple text-white hover:bg-zion-purple-dark&quot;
=======
  const _languageName = supportedLanguages.find(lang => lang.code === detectedLanguage)?.name || detectedLanguage;

  const _handleAccept = async () => {_await changeLanguage(detectedLanguage);
    setOpen(false);};

  return (
    <AlertDialog open={_open} onOpenChange={_setOpen}>
      <AlertDialogContent className="bg-zion-blue-dark text-white border border-zion-purple/20">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            {_t('language.switch_to_detected', _{ language: languageName})}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-zion-slate-light">
            {_`${supportedLanguages.find(lang => lang.code === detectedLanguage)?.flag || ''} ${_languageName}`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">
            {_t('general.no')}
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={_handleAccept}
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_t('general.yes')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}