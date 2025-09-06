
=======

  currentLanguage: SupportedLanguage,
  changeLanguage: (lang: SupportedLanguage) => Promise<void>,
  isRTL: boolean,
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string }[];
};



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const supportedLanguages = [
  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇺🇸' }
  { code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' }
  { code: 'pt' as SupportedLanguage, name: 'Português', flag: '🇧🇷' }
  { code: 'ar' as SupportedLanguage, name: 'العربية', flag: '🇸🇦' }
];
const defaultLanguageContext: LanguageContextType = {
  currentLanguage: 'en'
  changeLanguage: async () => {}
  isRTL: false
  supportedLanguages
}
const LanguageContext = createContext(defaultLanguageContext);
export const useLanguage = (): LanguageContextType => useContext(LanguageContext);
interface LanguageProviderProps {
  children: ReactNode
  authState?: {
    isAuthenticated: boolean
    user: { id?: string } | null
  }
}

  const { i18n, t } = useTranslation();
  const { isAuthenticated, user } = authState;
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(
    (i18n.language?.substring(0, 2) as SupportedLanguage) |'en'
  );
  const [isRTL, setIsRTL] = useState(i18n.dir() === 'rtl');
  useEffect(() => {
    // Set initial language from localStorage or browser
    const savedLang = localStorage.getItem('zion_language') as SupportedLanguage;
    if (savedLang && supportedLanguages.some(lang => lang.code === savedLang)) {
      i18n.changeLanguage(savedLang);
      setCurrentLanguage(savedLang)
    }
  }, []);
  // Update RTL status when language changes
  useEffect(() => {
    setIsRTL(i18n.dir() === 'rtl');
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = currentLanguage;
    // Add RTL class for Tailwind
    if (i18n.dir() === 'rtl') {
      document.documentElement.classList.add('rtl')
    } else {
      document.documentElement.classList.remove('rtl')
    }
  }, [currentLanguage, i18n]);
  // Sync language preference with user profile when authenticated
  useEffect(() => {
    const syncLanguageWithProfile = async () => {
      if (isAuthenticated && user?.id) {
        try {
          const { error } = await supabase
            .from('profiles')
            .update({ preferred_language: currentLanguage })
            .eq('id', user.id);
          if (error) {
            console.error('Error updating language preference:', error)

    } else {
      document.document_element.class_list.remove ('rtl');
    }

  }, [current_language, i18n]);
;
  // Sync language preference with user profile when authenticated;
  useEffect (() => {

    const syncLanguageWithProfile = async () => {
      // Check condition
if ( {) {
  $2
}
        try {


interface LanguageProviderProps {;
  children: ReactNode,;
  authState?: { ;
    isAuthenticated: boolean,;
    user: { id?: string } | null;
  }
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ ;
  children, ;
  authState = { isAuthenticated: false, user: null } ;
}) => {;
  const { i18n, t } = useTranslation();
  const { isAuthenticated, user } = authState;
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(;
    (i18n && i18n.language?.substring(0, 2) as SupportedLanguage) || 'en';
  );
  const [isRTL, setIsRTL] = useState(i18n && i18n.dir() === 'rtl');

  useEffect(() => {;
    // Set initial language from localStorage or browser;
    const savedLang = localStorage && localStorage.getItem('zion_language') as SupportedLanguage;
    if (savedLang && supportedLanguages && supportedLanguages.some(lang => lang && lang.code === savedLang)) {;
      i18n && i18n.changeLanguage(savedLang);
      setCurrentLanguage(savedLang);
    }
  }, []);

  // Update RTL status when language changes;
  useEffect(() => {;
    setIsRTL(i18n && i18n.dir() === 'rtl');
    document && document.documentElement.dir = i18n && i18n.dir();
    document && document.documentElement.lang = currentLanguage;

    // Add RTL class for Tailwind;
    if (i18n && i18n.dir() === 'rtl') {;
      document && document.documentElement.classList && classList.add('rtl');
    } else {;
      document && document.documentElement.classList && classList.remove('rtl');
    }
  }, [currentLanguage, i18n]);

  // Sync language preference with user profile when authenticated;
  useEffect(() => {;
    const syncLanguageWithProfile = async () => {;
      if (isAuthenticated && user?.id) {;
        try {;
          const { error } = await supabase;
            .from('profiles');
            .update({ preferred_language: currentLanguage });
            .eq('id', user && user.id);

          if (error) {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          }
        } catch (err) {;
          console && console.error('Error syncing language with profile:', err);
        }
      }

=======

    };
    


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    syncLanguageWithProfile()
  }, [currentLanguage, isAuthenticated, user]);
  const changeLanguage = async (lang: SupportedLanguage) => {
    if (lang === currentLanguage) return;
    try {
      await i18n.changeLanguage(lang);
      setCurrentLanguage(lang)
      localStorage.setItem('zion_language', lang);
      // Get language name for toast
      const langName = supportedLanguages.find(l => l.code === lang)?.name |lang;
      toast({
        description: t('language.language_changed', { language: langName })
      });
      // If user is authenticated, update their profile
      if (isAuthenticated && user?.id) {
        const { error } = await supabase
          .from('profiles')
          .update({ preferred_language: lang })
          .eq('id', user.id);
        if (error) {
          console.error('Error updating language preference:', error)

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        }
      }
    } catch (err) {;
      console && console.error('Error changing language:', err);
    }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage
        changeLanguage
        isRTL;
        supportedLanguages

=======
    </LanguageContext && LanguageContext.Provider>;
  );
};

=======
=======
  },;
  return (;
    <LanguageContext.Provider;
      value={{;
        currentLanguage,;
        changeLanguage,;
        isRTL;
        supportedLanguages;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      }}
    >
      {children}

=======
};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
