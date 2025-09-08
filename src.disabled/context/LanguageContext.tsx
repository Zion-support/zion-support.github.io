
  children: ReactNode;
   authState?: { isAuthenticate,
    d: boolean'
   use,
    r: { id?: string} | null } } export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, authState = { isAuthenticated: false, user: null } }) => { const { i18n, t } = useTranslation() const { isAuthenticated, user } = authState const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>( (i18n.language?.substring(0, 2) as SupportedLanguage) || 'en' ) const [isRTL, setIsRTL] = useState(i18n.dir() === 'rtl') useEffect(() => { const savedLang = safeStorage.getItem('i18n_lang') as SupportedLanguage if (savedLang && supportedLanguages.some(lang => lang.code === savedLang)) { if (i18n.language !== savedLang) {''""





