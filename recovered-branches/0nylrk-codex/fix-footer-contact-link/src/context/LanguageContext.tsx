<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../integrations/supabase/client';
import { toast } from '../components/ui/use-toast';
export type SupportedLanguage = $2;
export type LanguageContextType = $2;
  changeLanguage: (lang: SupportedLanguage) => Promise<void>,
  isRTL: boolean,
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string}[]
},

const supportedLanguages = [
  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇺🇸' }
  { code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' }
  { code: 'pt' as SupportedLanguage, name: 'Português', flag: '🇧🇷' }
  { code: 'ar' as SupportedLanguage, name: 'العربية', flag: '🇸🇦' }
],

const defaultLanguageContext: LanguageContextType = $2;
  changeLanguage: async() => {},
  isRTL: false,
  supportedLanguages
},

const LanguageContext = createContext($2);
export const useLanguage = (): LanguageContextType => useContext($2);
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useTranslation} from 'react-i18next';
import {supabase} from '../integrations/supabase/client';
import {toast} from '../components/ui/use-toast';
export type SupportedLanguage = 'en' | 'es' | 'pt' | 'ar';
export type LanguageContextType = {

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  currentLanguage: SupportedLanguage

  changeLanguage: (lang: SupportedLanguage) => Promise<void>
  isRTL: boolean;
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string }[]
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import {useTranslation} from 'react-i18next';
import {supabase} from '../integrations/supabase/client';
import {toast} from '../components/ui/use-toast';
export type SupportedLanguage = 'en' | 'es' | 'pt' | 'ar';
export type LanguageContextType = {
  currentLanguage: SupportedLanguage
  changeLanguage: (lang: SupportedLanguage) => Promise<void>
  isRTL: boolean
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string }[]
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  currentLanguage: SupportedLanguage,
  changeLanguage: (lang: SupportedLanguage) => Promise<void>,
  isRTL: boolean,
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string }[];
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const supportedLanguages = [

  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇺🇸' }
  { code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' }
  { code: 'pt' as SupportedLanguage, name: 'Português', flag: '🇧🇷' }

  { code: 'ar' as SupportedLanguage, name: 'العربية', flag: '🇸🇦' }
];
<<<<<<< HEAD
const "defaultLanguageContext": LanguageContextType = {
  }
  "currentLanguage": "currentLanguage","
    "changeLanguage": async () => {}
  "isRTL": false,
supportedLanguages
}  const { i18n, t } = useTranslation();
  const { isAuthenticated, user } = authState;
const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(;
    (i18n.language?.substring(0, 2) as SupportedLanguage) |'en''
  );
  const [isRTL, setIsRTL] = useState(i18n.dir() === 'rtl');'
  useEffect(() => {
    // Set initial language from localStorage or browser
}
const savedLang = localStorage.getItem('zion_language') as SupportedLanguage;'
    if (savedLang && supportedLanguages.some(lang => lang.code === savedLang)) {
      }
      i18n.changeLanguage(savedLang);
      setCurrentLanguage(savedLang)
    }
  }, []);
  // Update RTL status when language changes,
useEffect(() => {
    }
    setIsRTL(i18n.dir() === 'rtl');'
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = currentLanguage;
    // Add RTL class for Tailwind,
if (i18n.dir() === 'rtl') {'
      }
      document.documentElement.classList.add('rtl')    const syncLanguageWithProfile = async () => {'
      // Check condition
}
if ( {) {
  $2
}
        try {
    }
    "isAuthenticated": boolean,;
    "user": { id?: string } | null;
  }
}
export const "LanguageProvider": React.FC<LanguageProviderProps> = ({ ;
  }
  children, ;
  authState = { "isAuthenticated": false, "user": null } ;
}) => {;
  }
  const { i18n, t } = useTranslation();
    (i18n && i18n.language?.substring(0, 2) as SupportedLanguage) || 'en';'
  );
  const [isRTL, setIsRTL] = useState(i18n && i18n.dir() === 'rtl');'
  useEffect(() => {;
    // Set initial language from localStorage or browser;
    }
    const savedLang = localStorage && localStorage.getItem('zion_language') as SupportedLanguage;'
    if (savedLang && supportedLanguages && supportedLanguages.some(lang => lang && lang.code === savedLang)) {;
      }
      i18n && i18n.changeLanguage(savedLang);
      setCurrentLanguage(savedLang);
    }
  }, []);
=======
const defaultLanguageContext: LanguageContextType = {'
  currentLanguage: 'en'
  changeLanguage: async () => {}
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface LanguageProviderProps {
  children: ReactNode
  authState?: {
    isAuthenticated: boolean
<<<<<<< HEAD
=======
    user: { id?: string } | null
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

const LanguageContext = createContext(defaultLanguageContext);
export const useLanguage = (): LanguageContextType => useContext(LanguageContext);
interface LanguageProviderProps {
  children: ReactNode
  authState?: {
    isAuthenticated: boolean
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    user: { id?: string } | null
  }
}

<<<<<<< HEAD
=======


export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children
  authState = { isAuthenticated: false, user: null }
}) => {
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const LanguageContext = createContext(defaultLanguageContext);
export const useLanguage = (): LanguageContextType => useContext(LanguageContext);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  children, 
  authState = { isAuthenticated: false, user: null } ;
}) => {;

  const { i18n, t } = useTranslation();

const LanguageContext = createContext(defaultLanguageContext);
export const useLanguage = (): LanguageContextType => useContext(LanguageContext);
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children
  authState = { isAuthenticated: false, user: null }
}) => {
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  authState = { isAuthenticated: false, user: null } 
}) => {;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const { i18n, t } = useTranslation();

  const { isAuthenticated, user } = authState;
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('
    (i18n.language?.substring(0, 2) as SupportedLanguage) |'en'
  );'
  const [isRTL, setIsRTL] = useState(i18n.dir() === 'rtl');
  useEffect(() => {}
    // Set initial language from localStorage or browser'
    const savedLang = localStorage.getItem('zion_language') as SupportedLanguage;
    if (savedLang && supportedLanguages.some(lang => lang.code === savedLang)) {}
      i18n.changeLanguage(savedLang);
      setCurrentLanguage(savedLang)
    }
  }, []);
  // Update RTL status when language changes;
  useEffect(() => {'
    setIsRTL(i18n.dir() === 'rtl');
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = currentLanguage;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
    // Add RTL class for Tailwind
    if (i18n.dir() === 'rtl') {
      document.documentElement.classList.add('rtl')
<<<<<<< HEAD
    } else {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { create_context, useState, useContext, useEffect, ReactNode } from 'react';
import {use_translation} from 'react - i18next';
import {supabase} from '../integrations / supabase / client';
import {toast} from '../components / ui / use - toast';

export type SupportedLanguage = 'en' | 'es' | 'pt' | 'ar';
;
export type LanguageContextType = {}
  current_language: SupportedLanguage,
  change_language: (lang: SupportedLanguage) => Promise < void>,
  isRTL: boolean,;
  supported_languages: { code: SupportedLanguage, name: string, flag: string }[];
}
;
const supported_languages = [;'
  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇺🇸' },'
  { code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' },'
  { code: 'pt' as SupportedLanguage, name: 'Português', flag: '🇧🇷' },'
  { code: 'ar' as SupportedLanguage, name: 'العربية', flag: '🇸🇦' }
];
;
const defaultLanguageContext: LanguageContextType = {'

}
      i18n.change_language (saved_lang);
      setCurrentLanguage (saved_lang);
    }
  }, []);
;
  // Update RTL status when language changes;

    setIsRTL (i18n.dir () === 'rtl');

    document.document_element.dir = i18n.dir ();
    document.document_element.lang = current_language;
;
    // Add RTL class for Tailwind;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
    // Check condition
if (=== 'rtl') {) {
  $2
}
      document.document_element.class_list.add ('rtl');
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
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    isAuthenticated: boolean,;
    user: { id?: string } | null;
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
;
export const LanguageProvider: React.FC<LanguageProviderProps> = ({;
  children,;
  authState = { isAuthenticated: false, user: null } ;
}) => {;
  const { i18n, t } = useTranslation(),;
  const { isAuthenticated, user } = authState,;
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(;
    (i18n.language?.substring(0, 2) as SupportedLanguage) || 'en';
  ),;
  const [isRTL, setIsRTL] = useState(i18n.dir() === 'rtl'),;
  useEffect(() => {;
    // Set initial language from localStorage or browser;
    const savedLang = localStorage.getItem('zion_language') as SupportedLanguage,;
    if (savedLang && supportedLanguages.some(lang => lang.code === savedLang)) {;
      i18n.changeLanguage(savedLang),;
      setCurrentLanguage(savedLang);
    }
  }, []),;
  // Update RTL status when language changes;
  useEffect(() => {;
    setIsRTL(i18n.dir() === 'rtl'),;
    document.documentElement.dir = i18n.dir(),;
    document.documentElement.lang = currentLanguage,;
    // Add RTL class for Tailwind;
    if (i18n.dir() === 'rtl') {;
      document.documentElement.classList.add('rtl');
    } else {;
      document.documentElement.classList.remove('rtl');
    }
  }, [currentLanguage, i18n]),;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
;
export const LanguageProvider: React.FC<LanguageProviderProps> = ({;
  children,;
  authState = { isAuthenticated: false, user: null } ;
}) => {;
  const { i18n, t } = useTranslation(),;
  const { isAuthenticated, user } = authState,;
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(;
    (i18n.language?.substring(0, 2) as SupportedLanguage) || 'en';
  ),;
  const [isRTL, setIsRTL] = useState(i18n.dir() === 'rtl'),;
  useEffect(() => {;
    // Set initial language from localStorage or browser;
    const savedLang = localStorage.getItem('zion_language') as SupportedLanguage,;
    if (savedLang && supportedLanguages.some(lang => lang.code === savedLang)) {;
      i18n.changeLanguage(savedLang),;
      setCurrentLanguage(savedLang);
    }
  }, []),;
  // Update RTL status when language changes;
  useEffect(() => {;
    setIsRTL(i18n.dir() === 'rtl'),;
    document.documentElement.dir = i18n.dir(),;
    document.documentElement.lang = currentLanguage,;
    // Add RTL class for Tailwind;
    if (i18n.dir() === 'rtl') {;
      document.documentElement.classList.add('rtl');
    } else {;
      document.documentElement.classList.remove('rtl');
    }
  }, [currentLanguage, i18n]),;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Sync language preference with user profile when authenticated;
  useEffect(() => {;
    const syncLanguageWithProfile = async () => {;
      if (isAuthenticated && user?.id) {;
        try {;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
          const { error } = await supabase;
            .from('profiles');
<<<<<<< HEAD
=======
            .update({ preferred_language: currentLanguage });
            .eq('id', user && user.id);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            console && console.error('Error updating language preference:', error);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          }
        } catch (err) {;'
          console && console.error('Error syncing language with profile:', err);
        }
      }

    };

            .eq('id', user.id),;
          if (error) {;
            console.error('Error updating language preference:', error);
          }
        } catch (err) {
          console.error('Error syncing language with profile:', err)
        }
      }
    }
    };

    syncLanguageWithProfile()
  }, [currentLanguage, isAuthenticated, user]);
  const changeLanguage = async (lang: SupportedLanguage) => {}
    if (lang === currentLanguage) return;
    try {}
      await i18n.changeLanguage(lang);
      setCurrentLanguage(lang)'
      localStorage.setItem('zion_language', lang);
      // Get language name for toast;
      const langName = supportedLanguages.find(l => l.code === lang)?.name |lang;
      toast({'
        description: t('language.language_changed', { language: langName })
      });
      // If user is authenticated, update their profile;
      if (isAuthenticated && user?.id) {}
        const { error } = await supabase'
          .from('profiles')
          .update({ preferred_language: lang })'
          .eq('id', user.id);
        if (error) {'
          console.error('Error updating language preference:', error)

<<<<<<< HEAD
=======
<<<<<<< HEAD
            .update({ preferred_language: currentLanguage });
            .eq('id', user.id),;
          if (error) {;
            console.error('Error updating language preference:', error);
          }
        } catch (err) {
          console.error('Error syncing language with profile:', err)
        }
      }
    }
    };
    
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
          .from('profiles')
<<<<<<< HEAD
=======
<<<<<<< HEAD
          .update({ preferred_language: lang})
          .eq($2);
        if (error) {
          console.error('Error updating language preference:', error)
        }
      }
    } catch (err) {
      console.error('Error changing language:', err)
    }
  },
  
  return (
    <LanguageContext.Provider 
      value = $2;
        changeLanguage, 
        isRTL,
        supportedLanguages
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
},
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          .update({ preferred_language: lang })
          .eq('id', user.id);
        if (error) {
          console.error('Error updating language preference:', error)
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
    };

    };
    syncLanguageWithProfile();
  }, [currentLanguage, isAuthenticated, user]);
  const changeLanguage = async (lang: SupportedLanguage) => {;
    if (lang === currentLanguage) return;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    };

    syncLanguageWithProfile();
  }, [currentLanguage, isAuthenticated, user]);

  const changeLanguage = async (lang: SupportedLanguage) => {;
    if (lang === currentLanguage) return;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    try {;
      await i18n && i18n.changeLanguage(lang);
      setCurrentLanguage(lang),;'
      localStorage && localStorage.setItem('zion_language', lang);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      // Get language name for toast;
      const langName = supportedLanguages && supportedLanguages.find(l => l && l.code === lang)?.name || lang;

        description: t('language && language.language_changed', { language: langName });
      });
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      // If user is authenticated, update their profile;
      if (isAuthenticated && user?.id) {;
        const { error } = await supabase;'
          .from('profiles');
          .update({ preferred_language: lang });
<<<<<<< HEAD

        }
=======
<<<<<<< HEAD

        }
=======
<<<<<<< HEAD
=======
          .eq('id', user && user.id);

        if (error) {;

          console.error('Error updating language preference:', error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


          console && console.error('Error updating language preference:', error);
        }
      }
    } catch (err) {;
      console && console.error('Error changing language:', err);
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  };

        if (error) {;
          console.error('Error updating language preference:', error);
<<<<<<< HEAD
        }
      }
    } catch (err) {
      console.error('Error changing language:', err)
    }
  }
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage
        changeLanguage

  };

  return (
    <LanguageContext&& LanguageContext.Provider;
      value={{}
        currentLanguage, 
        changeLanguage, 
        isRTL;
        supportedLanguages;
    </LanguageContext && LanguageContext.Provider>;
  );
};

=======
        }
      }
    } catch (err) {
      console.error('Error changing language:', err)
    }
  }
  };

<<<<<<< HEAD
          .eq('id', user.id),;
        if (error) {;
          console.error('Error updating language preference:', error);
        }
      }
    } catch (err) {
      console.error('Error changing language:', err)
    }
  }
  };
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <LanguageContext.Provider
      value={{
        currentLanguage
        changeLanguage
<<<<<<< HEAD

=======
        isRTL;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  };
  return (
    <LanguageContext&& LanguageContext.Provider;
      value={{}
        currentLanguage, 
        changeLanguage, 
<<<<<<< HEAD
        isRTL;
        supportedLanguages;
=======
        isRTL
        supportedLanguages
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    </LanguageContext && LanguageContext.Provider>;
  );
};

<<<<<<< HEAD
=======
      }}>;
      {children}
    </LanguageContext && LanguageContext.Provider>;
  );
};
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
<<<<<<< HEAD
        supportedLanguages
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },;
  return (;
    <LanguageContext.Provider;
      value={{;
<<<<<<< HEAD
=======
        currentLanguage,;
        changeLanguage,;
        isRTL;
        supportedLanguages;

<<<<<<< HEAD
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }}
    >
      {children}

};

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    </LanguageContext.Provider>;
  );
};

        supportedLanguages
      }}>;
      {children}
          const { error } = await supabase;

<<<<<<< HEAD
            .from ('profiles');
            .update ({ preferred_language: current_language });'
            .eq ('id', user.id);
;
          // Check condition;
if ( {) {}
  $2;
}'
            console.error ('Error updating language preference:', error);
          }
        } catch (err) {'
          console.error ('Error syncing language with profile:', err);
</LanguageProviderProps>
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(;
</SupportedLanguage>
    <LanguageContext.Provider;
      value={{
        currentLanguage;
        changeLanguage;
        isRTL;
  };

  return (
    <LanguageContext&& LanguageContext.Provider;
      value={{ 
        currentLanguage, 
        changeLanguage, 
        isRTL;
        supportedLanguages;
    </LanguageContext && LanguageContext.Provider>;
</LanguageContext>
    <LanguageContext.Provider;
      value={{;
        currentLanguage,;
        changeLanguage,;
        isRTL;
        supportedLanguages;
      }}
    >
</LanguageContext>
    </LanguageContext.Provider>)
  )
      }}
    >
      {children}

};

    </LanguageContext.Provider>;
  );
};

        supportedLanguages;
      }}>;
      {children}
          const { error } = await supabase;'
            .from ('profiles');'
            .update ({ preferred_language: current_language });'
            .eq ('id', user.id);'
;
          // Check condition;
if ( {) {
  $2;
}'
            console.error ('Error updating language preference:', error);'
          }
        } catch (err) {'
          console.error ('Error syncing language with profile:', err);'

        }
      }
    }
;
    syncLanguageWithProfile ();
  }, [current_language, is_authenticated, user]);
;

}
    try {}
      await i18n.change_language (lang);
      setCurrentLanguage (lang),'
      local_storage.set_item ('zion_language', lang);
;
      // Get language name for toast;
      const lang_name = supported_languages.find (l => l.code === lang)?.name || lang;
      toast ({'
        description: t ('language.language_changed', { language: lang_name });
      });
;
      // If user is authenticated, update their profile;
      // Check condition;
if ( {) {}
  $2;
}
        const { error } = await supabase;'
          .from ('profiles');
          .update ({ preferred_language: lang });'
          .eq ('id', user.id);
;
        // Check condition;
if ( {) {}
  $2;
}'
          console.error ('Error updating language preference:', error);
        }
      }
    } catch (err) {'
      console.error ('Error changing language:', err);
    // Check condition;
if (return) {
  $2;

}
    try {
  // TODO: Implement
}
      await i18n.change_language (lang);
      setCurrentLanguage (lang),'
      local_storage.set_item ('zion_language', lang);'
;
      // Get language name for toast;

      const lang_name = supported_languages.find (l => l.code === lang)?.name || lang;
      toast ({)'
        description: t ('language.language_changed', { language: lang_name });'

      });
;
      // If user is authenticated, update their profile;
      // Check condition;

if ( {) {
  $2;

}
        const { error } = await supabase;'
          .from ('profiles');'
          .update ({ preferred_language: lang });'
          .eq ('id', user.id);'
;
        // Check condition;

if ( {) {
  $2;
}'
          console.error ('Error updating language preference:', error);'
        }
      }
    } catch (err) {'
      console.error ('Error changing language:', err);'

    }
  }
;
  return (
    <LanguageContext.Provider;
      value={{}
        current_language,
        change_language,
        isRTL;}
        supported_languages;}
      }}

    >;
      {children}
    </LanguageContext.Provider>);
}
;

  return (;
    <LanguageContext.Provider;
      value={{;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        currentLanguage,;
        changeLanguage,;
        isRTL;
        supportedLanguages;

      }}
    >
      {children}
<<<<<<< HEAD
    </LanguageContext.Provider>
  )
      }}
    >
      {children}

};

    </LanguageContext.Provider>;
  );
};

        supportedLanguages
      }}>;
      {children}
          const { error } = await supabase;

            .from ('profiles');
            .update ({ preferred_language: current_language });'
            .eq ('id', user.id);
;
          // Check condition;
if ( {) {}
  $2;
}'
            console.error ('Error updating language preference:', error);
          }
        } catch (err) {'
          console.error ('Error syncing language with profile:', err);
</LanguageProviderProps>
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(;
</SupportedLanguage>
    <LanguageContext.Provider;
      value={{
        currentLanguage;
        changeLanguage;
        isRTL;
  };

  return (
    <LanguageContext&& LanguageContext.Provider;
      value={{ 
        currentLanguage, 
        changeLanguage, 
        isRTL;
        supportedLanguages;
    </LanguageContext && LanguageContext.Provider>;
</LanguageContext>
    <LanguageContext.Provider;
      value={{;
        currentLanguage,;
        changeLanguage,;
        isRTL;
        supportedLanguages;
      }}
    >
</LanguageContext>
    </LanguageContext.Provider>)
  )
      }}
    >
      {children}

};

    </LanguageContext.Provider>;
  );
};

        supportedLanguages;
      }}>;
      {children}
          const { error } = await supabase;'
            .from ('profiles');'
            .update ({ preferred_language: current_language });'
            .eq ('id', user.id);'
;
          // Check condition;
if ( {) {
  $2;
}'
            console.error ('Error updating language preference:', error);'
          }
        } catch (err) {'
          console.error ('Error syncing language with profile:', err);'

        }
      }
    }
;
    syncLanguageWithProfile ();
  }, [current_language, is_authenticated, user]);
;

}
    try {}
      await i18n.change_language (lang);
      setCurrentLanguage (lang),'
      local_storage.set_item ('zion_language', lang);
;
      // Get language name for toast;
      const lang_name = supported_languages.find (l => l.code === lang)?.name || lang;
      toast ({'
        description: t ('language.language_changed', { language: lang_name });
      });
;
      // If user is authenticated, update their profile;
      // Check condition;
if ( {) {}
  $2;
}
        const { error } = await supabase;'
          .from ('profiles');
          .update ({ preferred_language: lang });'
          .eq ('id', user.id);
;
        // Check condition;
if ( {) {}
  $2;
}'
          console.error ('Error updating language preference:', error);
        }
      }
    } catch (err) {'
      console.error ('Error changing language:', err);
    // Check condition;
if (return) {
  $2;

}
    try {
  // TODO: Implement
}
      await i18n.change_language (lang);
      setCurrentLanguage (lang),'
      local_storage.set_item ('zion_language', lang);'
;
      // Get language name for toast;

      const lang_name = supported_languages.find (l => l.code === lang)?.name || lang;
      toast ({)'
        description: t ('language.language_changed', { language: lang_name });'

      });
;
      // If user is authenticated, update their profile;
      // Check condition;

if ( {) {
  $2;

}
        const { error } = await supabase;'
          .from ('profiles');'
          .update ({ preferred_language: lang });'
          .eq ('id', user.id);'
;
        // Check condition;

if ( {) {
  $2;
}'
          console.error ('Error updating language preference:', error);'
        }
      }
    } catch (err) {'
      console.error ('Error changing language:', err);'

    }
  }
;
  return (
    <LanguageContext.Provider;
      value={{}
        current_language,
        change_language,
        isRTL;}
        supported_languages;}
      }}

    >;
      {children}
    </LanguageContext.Provider>);
}
;

  return (;
    <LanguageContext.Provider;
      value={{;
        currentLanguage,;
        changeLanguage,;
        isRTL;
        supportedLanguages;

      }}
    >
      {children}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

};

      }}>;
          const { error } = await supabase;
            .from ('profiles');
            .update ({ preferred_language: current_language });
            .eq ('id', user.id);
          // Check condition;
            console.error ('Error updating language preference:', error);
        } catch (err) {
          console.error ('Error syncing language with profile:', err);
    syncLanguageWithProfile ();
  }, [current_language, is_authenticated, user]);
  const change_language = async (lang: SupportedLanguage) => {
    // Check condition;
if (return) {
  // TODO: Implement
      await i18n.change_language (lang);
      setCurrentLanguage (lang),
      local_storage.set_item ('zion_language', lang);
      // Get language name for toast;
      const lang_name = supported_languages.find (l => l.code === lang)?.name || lang;
      toast ({)
        description: t ('language.language_changed', { language: lang_name });
      });
      // If user is authenticated, update their profile;
      // Check condition;
          .update ({ preferred_language: lang });
        // Check condition;
      console.error ('Error changing language:', err);
        current_language,
        change_language,
    >;
    </LanguageContext.Provider>);
  },;
  return (;

    </LanguageContext.Provider>;)

}}
    >
      {children}

};

    </LanguageContext.Provider>;
  );
};

            .update({ preferred_language:currentLanguage });
            .eq('id', user.id),;
          if (error) {;
            console.error('Error updating language preference:', error),;
        } catch (err) {;

          console.error('Error syncing language with profile:', err),;
    syncLanguageWithProfile(),;
  }, [currentLanguage, isAuthenticated, user]),;
  const changeLanguage = async (lang:SupportedLanguage) => {;
    if (lang === currentLanguage) return,;
    try {;
      await i18n.changeLanguage(lang),;

      localStorage.setItem('zion_language', lang),;
      // Get language name for toast;
      const langName = supportedLanguages.find(l => l.code === lang)?.name || lang,;

        description:t('language.language_changed', { language:langName });
      }),;
      // If user is authenticated, update their profile;
      if (isAuthenticated && user?.id) {;

      console.error('Error changing language:', err),;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <LanguageContext.Provider ;
      value={{ ;
        currentLanguage, ;
        changeLanguage, ;
        isRTL,;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  ),;},

  currentLanguage: 'en', changeLanguage: async () => {
isRTL: false;
const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage> ( (i18n.language?.substring (0, 2) as SupportedLanguage) || 'en');

}= await supabase .from ('profiles') return (<LanguageContext.Provider value= {
  {
  currentLanguage, changeLanguage, isRTL, supportedLanguages;
}> {
}</LanguageContext.Provider>) 

    </LanguageContext.Provider>

pr-12325
        isRTL;}
        supportedLanguages;}
      }}
     />
      {children}
<<<<<<< HEAD
};
=======
};
=======
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
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

};
    </LanguageContext.Provider>;
  );
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
