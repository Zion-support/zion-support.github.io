import { useState, useEffect } from 'react';

export default function Page() {
, [currentLanguage, supportedLanguages]); // Added dependencies

  if(!detectedLanguage) return null;

  const languageName = supportedLanguages.find(lang => lang.code === detectedLanguage)?.name || detectedLanguage;

  const handleAccept = async () => {
    if(detectedLanguage) { // Ensure detectedLanguage is not null
      await changeLanguage(detectedLanguage);
    }
    setOpen(false);
  };

  return (<AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-zion-blue-dark text-white border border-zion-purple/20">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            {t('language.switch_to_detected', { language: languageName })}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-zion-slate-light">
            {`${supportedLanguages.find(lang => lang.code === detectedLanguage)?.flag || ''} ${languageName}`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">
            {t('general.no')}
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleAccept}
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
          >
            {t('general.yes')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}