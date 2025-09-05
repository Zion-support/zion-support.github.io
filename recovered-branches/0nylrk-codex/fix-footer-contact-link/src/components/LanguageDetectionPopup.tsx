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

  if (!detectedLanguage) return null;

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
          >
            {_t('general.yes')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}