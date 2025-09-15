
  useEffect(() => {
    const key = 'langPromptShown';
    const preferred = localStorage.getItem('preferredLanguage');
    if (preferred) return; // user has chosen
    if (localStorage.getItem(key)) return; // already prompted

    const detected = i18n.language || i18n.resolvedLanguage || navigator.language || 'en';
    const normalized = detected.split('-')[0];
    const suggestion = supportedLocales.includes(normalized as any) && normalized !== 'en' ? normalized : null;
    if (suggestion) setSuggested(suggestion);

  if (!suggested) return null;

  const accept = async () => {
    await i18n.changeLanguage(suggested!);
    setSuggested(null);
  };

  const decline = () => {
    setSuggested(null);
  };

  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4 text-sm">
        <div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 rounded bg-amber-600 text-white" onClick={accept}>{t('lang.switch_accept')}</button>
          <button className="px-3 py-1 rounded border border-amber-300 dark:border-amber-700" onClick={decline}>{t('lang.switch_decline')}</button>
        </div>
      </div>
    </div>
  );
}