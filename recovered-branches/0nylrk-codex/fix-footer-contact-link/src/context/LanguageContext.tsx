 const defaultLanguageContext: LanguageContextType = {
  currentLanguage: 'en', changeLanguage: async () => {
  
};
isRTL: false;
supportedLanguages 
};
const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage> ( (i18n.language?.substring (0, 2) as SupportedLanguage) || 'en');
const [isRTL, setIsRTL] = useState (i18n.dir () === 'rtl');
// Sync language preference with user profile when authenticated useEffect ( () => {
  const syncLanguageWithProfile = async () => {
  if (isAuthenticated && user?.id) {
  try {
  const {
  error 
}= await supabase .from ('profiles') 
}
};
syncLanguageWithProfile () 
}, [currentLanguage, isAuthenticated, user]);
// If user is authenticated, update their profile if (isAuthenticated && user?.id) {
  const {
  error 
}= await supabase .from ('profiles') return (<LanguageContext.Provider value= {
  {
  currentLanguage, changeLanguage, isRTL, supportedLanguages 
}
}> {
  children 
}</LanguageContext.Provider>) 
};
