<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

import {useTranslation} from 'react-i18next';
import {supabase} from '../integrations/supabase/client';
import {toast} from '../components/ui/use-toast';
export type SupportedLanguage = 'en' | 'es' | 'pt' | 'ar';
export type LanguageContextType = {
<<<<<<< HEAD
  currentLanguage: SupportedLanguage
  changeLanguage: (lang: SupportedLanguage) => Promise<void>
  isRTL: boolean
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string }[]
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  currentLanguage: SupportedLanguage,
  changeLanguage: (lang: SupportedLanguage) => Promise<void>,
  isRTL: boolean,
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string }[];
};

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx
export type LanguageContextType = {;
  currentLanguage: SupportedLanguage,;
  changeLanguage: (lang: SupportedLanguage) => Promise<void>,;
  isRTL: boolean,;
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string }[];
};
const supportedLanguages = [;
  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇺🇸' },;
  { code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' },;
  { code: 'pt' as SupportedLanguage, name: 'Português', flag: '🇧🇷' },;
  { code: 'ar' as SupportedLanguage, name: 'العربية', flag: '🇸🇦' }
];
const defaultLanguageContext: LanguageContextType = {;
  currentLanguage: 'en',;
  changeLanguage: async () => {},;
  isRTL: false,;
  supportedLanguages;
};
const LanguageContext = createContext(defaultLanguageContext);
export const useLanguage = (): LanguageContextType => useContext(LanguageContext);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx
<<<<<<< HEAD
=======
const LanguageContext = createContext(defaultLanguageContext);
export const useLanguage = (): LanguageContextType => useContext(LanguageContext);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface LanguageProviderProps {
  children: ReactNode
  authState?: {
    isAuthenticated: boolean
    user: { id?: string } | null
  }
}
<<<<<<< HEAD

=======



=======
<<<<<<< HEAD
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children
  authState = { isAuthenticated: false, user: null }
}) => {
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  authState = { isAuthenticated: false, user: null } 
}) => {;
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react',;
import { useTranslation } from 'react-i18next',;
import { supabase } from '../integrations/supabase/client',;
import { toast } from '../components/ui/use-toast',;
export type SupportedLanguage = 'en' | 'es' | 'pt' | 'ar',;
export type LanguageContextType = {;
  currentLanguage: SupportedLanguage,;
  changeLanguage: (lang: SupportedLanguage) => Promise<void>,;
  isRTL: boolean,;
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string }[];
},;
const supportedLanguages = [;
  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇺🇸' },;
  { code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' },;
  { code: 'pt' as SupportedLanguage, name: 'Português', flag: '🇧🇷' },;
<<<<<<< HEAD
=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx
import React, { create_context, useState, useContext, useEffect, ReactNode } from 'react';
import {use_translation} from 'react - i18next';
import {supabase} from '../integrations / supabase / client';
import {toast} from '../components / ui / use - toast';
export type SupportedLanguage = 'en' | 'es' | 'pt' | 'ar';
;
export type LanguageContextType = {
  current_language: SupportedLanguage,
  change_language: (lang: SupportedLanguage) => Promise < void>,
  isRTL: boolean,
  supported_languages: { code: SupportedLanguage, name: string, flag: string }[];
}
;
const supported_languages = [;
  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇺🇸' },
  { code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' },
  { code: 'pt' as SupportedLanguage, name: 'Português', flag: '🇧🇷' },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  { code: 'ar' as SupportedLanguage, name: 'العربية', flag: '🇸🇦' }
];
;
const defaultLanguageContext: LanguageContextType = {
  current_language: 'en',
  change_language: async () => {},
  isRTL: false,
  supported_languages;
}
;
const LanguageContext = create_context (defaultLanguageContext);
;
export const use_language = (): LanguageContextType => useContext (LanguageContext);
;
interface LanguageProviderProps {
  children: ReactNode,
  auth_state?: {
    is_authenticated: boolean,
    user: { id?: string } | null;
  }
}
export const LanguageProvider: React.FC < LanguageProviderProps> = ({
  children,
  auth_state = { is_authenticated: false, user: null }
}) => {
  const { i18n, t } = use_translation ();
  const { is_authenticated, user } = auth_state;
  const [current_language, setCurrentLanguage] = useState < SupportedLanguage>(
    (i18n.language?.substring (0, 2) as SupportedLanguage) || 'en');
  const [isRTL, setIsRTL] = useState (i18n.dir () === 'rtl');
;
  useEffect (() => {
    // Set initial language from local_storage or browser;
    const saved_lang = local_storage.get_item ('zion_language') as SupportedLanguage;
    if () {) {
  $2
}
      i18n.change_language (saved_lang);
      setCurrentLanguage (saved_lang);
    }
  }, []);
;
  // Update RTL status when language changes;
  useEffect (() => {
    setIsRTL (i18n.dir () === 'rtl');
    document.document_element.dir = i18n.dir ();
    document.document_element.lang = current_language;
;
    // Add RTL class for Tailwind;
    // Check condition
if (=== 'rtl') {) {
  $2
}
      document.document_element.class_list.add ('rtl');
    } else {
      document.document_element.class_list.remove ('rtl');
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx
  }, [current_language, i18n]);
;
  // Sync language preference with user profile when authenticated;
  useEffect (() => {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx
    const syncLanguageWithProfile = async () => {
      // Check condition
if ( {) {
  $2
}
        try {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx
interface LanguageProviderProps {;
  children: ReactNode,;
  authState?: { ;
=======
  { code: 'ar' as SupportedLanguage, name: 'العربية', flag: '🇸🇦' }
],;
const defaultLanguageContext: LanguageContextType = {;
  currentLanguage: 'en',;
  changeLanguage: async () => {},;
  isRTL: false,;
  supportedLanguages;
},;
const LanguageContext = createContext(defaultLanguageContext),;
export const useLanguage = (): LanguageContextType => useContext(LanguageContext),;
interface LanguageProviderProps {;
  children: ReactNode,;
  authState?: {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    isAuthenticated: boolean,;
    user: { id?: string } | null;
  }
}
<<<<<<< HEAD
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
=======
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react',;
import { useTranslation } from 'react-i18next',;
import { supabase } from '../integrations/supabase/client',;
import { toast } from '../components/ui/use-toast',;
;
export type SupportedLanguage = 'en' | 'es' | 'pt' | 'ar',;
;
export type LanguageContextType = {;
  currentLanguage:SupportedLanguage,;
  changeLanguage:(lang:SupportedLanguage) => Promise<void>,;
  isRTL:boolean,;
  supportedLanguages:{ code:SupportedLanguage, name:string, flag:string }[],;
},;
;
const supportedLanguages = [;
  { code:'en' as SupportedLanguage, name:'English', flag:'🇺🇸' },;
  { code:'es' as SupportedLanguage, name:'Español', flag:'🇪🇸' },;
  { code:'pt' as SupportedLanguage, name:'Português', flag:'🇧🇷' },;
  { code:'ar' as SupportedLanguage, name:'العربية', flag:'🇸🇦' }
],;
;
const defaultLanguageContext:LanguageContextType = {;
  currentLanguage:'en',;
  changeLanguage:async () => {},;
  isRTL:false,;
  supportedLanguages;
},;
;
const LanguageContext = createContext(defaultLanguageContext),;
;
export const useLanguage = ():LanguageContextType => useContext(LanguageContext),;
;
interface LanguageProviderProps {;
  children:ReactNode,;
  authState?:{ ;
    isAuthenticated:boolean,;
    user:{ id?:string } | null,;
  },;
}
;
export const LanguageProvider:React.FC<LanguageProviderProps> = ({ ;
  children, ;
  authState = { isAuthenticated:false, user:null } ;
}) => {;
=======
;
export const LanguageProvider: React.FC<LanguageProviderProps> = ({;
  children,;
  authState = { isAuthenticated: false, user: null } ;
}) => {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { i18n, t } = useTranslation(),;
  const { isAuthenticated, user } = authState,;
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(;
    (i18n.language?.substring(0, 2) as SupportedLanguage) || 'en';
  ),;
  const [isRTL, setIsRTL] = useState(i18n.dir() === 'rtl'),;
<<<<<<< HEAD
  ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {;
    // Set initial language from localStorage or browser;
    const savedLang = localStorage.getItem('zion_language') as SupportedLanguage,;
    if (savedLang && supportedLanguages.some(lang => lang.code === savedLang)) {;
      i18n.changeLanguage(savedLang),;
<<<<<<< HEAD
      setCurrentLanguage(savedLang),;
    }
  }, []),;
  ;
=======
      setCurrentLanguage(savedLang);
    }
  }, []),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Update RTL status when language changes;
  useEffect(() => {;
    setIsRTL(i18n.dir() === 'rtl'),;
    document.documentElement.dir = i18n.dir(),;
    document.documentElement.lang = currentLanguage,;
<<<<<<< HEAD
    ;
    // Add RTL class for Tailwind;
    if (i18n.dir() === 'rtl') {;
      document.documentElement.classList.add('rtl'),;
    } else {;
      document.documentElement.classList.remove('rtl'),;
    }
  }, [currentLanguage, i18n]),;
  ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
    // Add RTL class for Tailwind;
    if (i18n.dir() === 'rtl') {;
      document.documentElement.classList.add('rtl');
    } else {;
      document.documentElement.classList.remove('rtl');
    }
  }, [currentLanguage, i18n]),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Sync language preference with user profile when authenticated;
  useEffect(() => {;
    const syncLanguageWithProfile = async () => {;
      if (isAuthenticated && user?.id) {;
        try {;
          const { error } = await supabase;
            .from('profiles');
<<<<<<< HEAD
<<<<<<< HEAD
            .update({ preferred_language: currentLanguage });
            .eq('id', user && user.id);
          if (error) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx
<<<<<<< HEAD
            console.error('Error updating language preference:', error);

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
            console && console.error('Error updating language preference:', error);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx
          }
        } catch (err) {;
          console && console.error('Error syncing language with profile:', err);
        }
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx

<<<<<<< HEAD
=======

    };
    


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            .update({ preferred_language: currentLanguage });
            .eq('id', user.id),;
          if (error) {;
            console.error('Error updating language preference:', error);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          }
        } catch (err) {
          console.error('Error syncing language with profile:', err)
        }
      }
<<<<<<< HEAD
<<<<<<< HEAD
    }
=======
    };
    
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

    },;
=======
=======
    };

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx
    syncLanguageWithProfile();
  }, [currentLanguage, isAuthenticated, user]);
  const changeLanguage = async (lang: SupportedLanguage) => {;
    if (lang === currentLanguage) return;
    try {;
      await i18n && i18n.changeLanguage(lang);
      setCurrentLanguage(lang),;
      localStorage && localStorage.setItem('zion_language', lang);
      // Get language name for toast;
      const langName = supportedLanguages && supportedLanguages.find(l => l && l.code === lang)?.name || lang;
      toast({;
        description: t('language && language.language_changed', { language: langName });
      });
=======
=======
    },;
    syncLanguageWithProfile();
  }, [currentLanguage, isAuthenticated, user]),;
  const changeLanguage = async (lang: SupportedLanguage) => {;
    if (lang === currentLanguage) return,;
    try {;
      await i18n.changeLanguage(lang),;
      setCurrentLanguage(lang),;
      localStorage.setItem('zion_language', lang),;
      // Get language name for toast;
      const langName = supportedLanguages.find(l => l.code === lang)?.name || lang,;
      toast({;
        description: t('language.language_changed', { language: langName });
      }),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // If user is authenticated, update their profile;
      if (isAuthenticated && user?.id) {;
        const { error } = await supabase;
          .from('profiles');
          .update({ preferred_language: lang });
<<<<<<< HEAD
          .eq('id', user && user.id);
        if (error) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx

          console.error('Error updating language preference:', error);

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
          console && console.error('Error updating language preference:', error);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx
        }
      }
    } catch (err) {;
      console && console.error('Error changing language:', err);
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx

<<<<<<< HEAD
=======

  };
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          .eq('id', user.id),;
        if (error) {;
          console.error('Error updating language preference:', error);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        }
      }
    } catch (err) {
      console.error('Error changing language:', err)
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  };
  
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <LanguageContext.Provider
      value={{
        currentLanguage
        changeLanguage
        isRTL;
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx
  };
  return (
    <LanguageContext&& LanguageContext.Provider 
      value={{ 
        currentLanguage, 
        changeLanguage, 
        isRTL
        supportedLanguages
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx

<<<<<<< HEAD
=======
    </LanguageContext && LanguageContext.Provider>;
  );
};

=======
========
      }}>;
      {children}
    </LanguageContext && LanguageContext.Provider>;
  );
};
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx
          const { error } = await supabase;
            .from ('profiles');
            .update ({ preferred_language: current_language });
            .eq ('id', user.id);
;
          // Check condition
if ( {) {
  $2
}
            console.error ('Error updating language preference:', error);
          }
        } catch (err) {
          console.error ('Error syncing language with profile:', err);
        }
      }
    }
;
    syncLanguageWithProfile ();
  }, [current_language, is_authenticated, user]);
;
  const change_language = async (lang: SupportedLanguage) => {
    // Check condition
if (return) {
  $2
}
    try {
      await i18n.change_language (lang);
      setCurrentLanguage (lang),
      local_storage.set_item ('zion_language', lang);
;
      // Get language name for toast;
      const lang_name = supported_languages.find (l => l.code === lang)?.name || lang;
      toast ({
        description: t ('language.language_changed', { language: lang_name });
      });
;
      // If user is authenticated, update their profile;
      // Check condition
if ( {) {
  $2
}
        const { error } = await supabase;
          .from ('profiles');
          .update ({ preferred_language: lang });
          .eq ('id', user.id);
;
        // Check condition
if ( {) {
  $2
}
          console.error ('Error updating language preference:', error);
        }
      }
    } catch (err) {
      console.error ('Error changing language:', err);
    }
  }
;
  return (
    <LanguageContext.Provider;
      value={{
        current_language,
        change_language,
        isRTL;
        supported_languages;
      }}
    >;
      {children}
    </LanguageContext.Provider>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        supportedLanguages
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },;
  return (;
    <LanguageContext.Provider;
      value={{;
        currentLanguage,;
        changeLanguage,;
        isRTL;
        supportedLanguages;
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      }}
    >
      {children}

<<<<<<< HEAD
=======
};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    </LanguageContext.Provider>;
  );
};

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
            .update({ preferred_language:currentLanguage });
            .eq('id', user.id),;
            ;
          if (error) {;
            console.error('Error updating language preference:', error),;
          }
        } catch (err) {;
          console.error('Error syncing language with profile:', err),;
        }
      }
    },;
    ;
    syncLanguageWithProfile(),;
  }, [currentLanguage, isAuthenticated, user]),;
  ;
  const changeLanguage = async (lang:SupportedLanguage) => {;
    if (lang === currentLanguage) return,;
    ;
    try {;
      await i18n.changeLanguage(lang),;
      setCurrentLanguage(lang),;
      localStorage.setItem('zion_language', lang),;
      ;
      // Get language name for toast;
      const langName = supportedLanguages.find(l => l.code === lang)?.name || lang,;
      toast({;
        description:t('language.language_changed', { language:langName });
      }),;
      ;
      // If user is authenticated, update their profile;
      if (isAuthenticated && user?.id) {;
        const { error } = await supabase;
          .from('profiles');
          .update({ preferred_language:lang });
          .eq('id', user.id),;
          ;
        if (error) {;
          console.error('Error updating language preference:', error),;
        }
      }
    } catch (err) {;
      console.error('Error changing language:', err),;
    }
  },;
  ;
  return (;
    <LanguageContext.Provider ;
      value={{ ;
        currentLanguage, ;
        changeLanguage, ;
        isRTL,;
        supportedLanguages;
      }}
    >;
      {children}
    </LanguageContext.Provider>;
  ),;},
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/LanguageContext.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }}
    >
      {children}
<<<<<<< HEAD
    </LanguageContext.Provider>
  )
<<<<<<< HEAD
}

=======
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    </LanguageContext.Provider>;
  );
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
