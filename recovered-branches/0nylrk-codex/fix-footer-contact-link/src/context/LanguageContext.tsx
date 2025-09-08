<<<<<<< HEAD
=======
'currentLanguage': SupportedLanguage;
    'changeLanguage': ('lang': SupportedLanguage) => Promise<void>
  'isRTL': boolean,
'supportedLanguages': { 'code': SupportedLanguage, 'name': string, 'flag': string }[]
}const supportedLanguages = [
  { 'code': 'en' as SupportedLanguage, 'name': 'English', 'flag': '🇺🇸' }'
  { 'code': 'es' as SupportedLanguage, 'name': 'Español', 'flag': '🇪🇸' }'
  { 'code': 'pt' as SupportedLanguage, 'name': 'Português', 'flag': '🇧🇷' }'
  { 'code': 'ar' as SupportedLanguage, 'name': 'العربية', 'flag': '🇸🇦' }'
import {useTranslation} from 'react-i18next';
import {supabase} from '../integrations/supabase/client';
import {toast} from '../components/ui/use-toast';
export type SupportedLanguage = 'en' | 'es' | 'pt' | 'ar';
export type LanguageContextType = {


  currentLanguage: SupportedLanguage

  changeLanguage: (lang: SupportedLanguage) => Promise<void>
  isRTL: boolean;
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string }[]

>>>>>>> origin/cursor/delete-old-data-records-6bba

import {useTranslation} from 'react-i18next';
import {supabase} from '../integrations/supabase/client';
import {toast} from '../components/ui/use-toast';
export type SupportedLanguage = 'en' | 'es' | 'pt' | 'ar';
export type LanguageContextType = {
<<<<<<< HEAD


=======
  currentLanguage: SupportedLanguage
  changeLanguage: (lang: SupportedLanguage) => Promise<void>
  isRTL: boolean
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string }[]
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
  currentLanguage: SupportedLanguage,
  changeLanguage: (lang: SupportedLanguage) => Promise<void>,
  isRTL: boolean,
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string }[];
};


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
const supportedLanguages = [

  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇺🇸' }
  { code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' }
  { code: 'pt' as SupportedLanguage, name: 'Português', flag: '🇧🇷' }

  { code: 'ar' as SupportedLanguage, name: 'العربية', flag: '🇸🇦' }
];
<<<<<<< HEAD

const defaultLanguageContext: LanguageContextType = {'
  currentLanguage: 'en'
  changeLanguage: async () => {}



=======
const 'defaultLanguageContext': LanguageContextType = {
  }
  'currentLanguage': 'currentLanguage','
    'changeLanguage': async () => {}
  'isRTL': false,
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
    'isAuthenticated': boolean,;
    'user': { id?: string } | null;
  }
}
export const 'LanguageProvider': React.FC<LanguageProviderProps> = ({ ;
  }
  children, ;
  authState = { 'isAuthenticated': false, 'user': null } ;
}) => {;
  }
  const { i18n, t } = useTranslation();
  const { isAuthenticated, user } = authState;
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(;
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


>>>>>>> origin/cursor/delete-old-data-records-6bba
interface LanguageProviderProps {
  children: ReactNode
  authState?: {
    isAuthenticated: boolean
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
    user: { id?: string } | null
  }
}

<<<<<<< HEAD
=======
const LanguageContext = createContext(defaultLanguageContext);
export const useLanguage = (): LanguageContextType => useContext(LanguageContext);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 


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
>>>>>>> origin/cursor/delete-old-data-records-6bba


export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  authState = { isAuthenticated: false, user: null } 
}) => {;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    // Add RTL class for Tailwind
    if (i18n.dir() === 'rtl') {
      document.documentElement.classList.add('rtl')

=======

      document.documentElement.classList.remove('rtl')
    }
  }, [currentLanguage, i18n]),
  
  // Sync language preference with user profile when authenticated
  useEffect(() => {
    const syncLanguageWithProfile = async () => {
      if (isAuthenticated && user?.id) {
        try {
          const { error } = await supabase
            .from('profiles')
            .update({ preferred_language: currentLanguage})
            .eq($2);
          if (error) {
            console.error('Error updating language preference:', error)


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


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    isAuthenticated: boolean,;
    user: { id?: string } | null;
  }
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Sync language preference with user profile when authenticated;
  useEffect(() => {;
    const syncLanguageWithProfile = async () => {;
      if (isAuthenticated && user?.id) {;
        try {;

<<<<<<< HEAD
          const { error } = await supabase;
            .from('profiles');
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD
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



=======
    },
    
>>>>>>> origin/cursor/delete-old-data-records-6bba
    syncLanguageWithProfile()
  }, [currentLanguage, isAuthenticated, user]),
  
  const changeLanguage = $2;
    try {
      await i18n.changeLanguage($2);
      setCurrentLanguage($2);
      localStorage.setItem($2);
      // Get language name for toast
      const langName = $2;
      toast({
        description: t('language.language_changed', { language: langName})
      }),
      
      // If user is authenticated, update their profile
      if (isAuthenticated && user?.id) {
        const { error } = await supabase
          .from('profiles')
<<<<<<< HEAD

=======
    try {;
      }
      await i18n && i18n.changeLanguage(lang);
>>>>>>> origin/cursor/delete-old-data-records-6bba
          .update({ preferred_language: lang })
          .eq('id', user.id);
        if (error) {
          console.error('Error updating language preference:', error)

<<<<<<< HEAD
=======

    };

    syncLanguageWithProfile();
  }, [currentLanguage, isAuthenticated, user]);

  const changeLanguage = async (lang: SupportedLanguage) => {;
    if (lang === currentLanguage) return;

>>>>>>> origin/cursor/delete-old-data-records-6bba
    try {;
      await i18n && i18n.changeLanguage(lang);
      setCurrentLanguage(lang),;'
      localStorage && localStorage.setItem('zion_language', lang);

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Get language name for toast;
      const langName = supportedLanguages && supportedLanguages.find(l => l && l.code === lang)?.name || lang;

        description: t('language && language.language_changed', { language: langName });
      });

<<<<<<< HEAD


=======
      setCurrentLanguage(lang),;
      localStorage && localStorage.setItem('zion_language', lang);'
      // Get language name for toast;
      const langName = supportedLanguages && supportedLanguages.find(l => { return l && l.code === lang)?.name || lang; }
      toast({
  }
  'description': t('language && language.language_changed', { 'language': langName });'
      });        }
      }
    } catch (err) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // If user is authenticated, update their profile;
      if (isAuthenticated && user?.id) {;
        const { error } = await supabase;'
          .from('profiles');
          .update({ preferred_language: lang });


<<<<<<< HEAD
=======
        }
>>>>>>> origin/cursor/delete-old-data-records-6bba

  };

        if (error) {;
          console.error('Error updating language preference:', error);
        }
      }
    } catch (err) {
      console.error('Error changing language:', err)
    }
  }
  };

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <LanguageContext.Provider
      value={{
        currentLanguage
        changeLanguage

<<<<<<< HEAD
        isRTL;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  };

  return (
    <LanguageContext&& LanguageContext.Provider;
      value={{}
        currentLanguage, 
        changeLanguage, 
<<<<<<< HEAD

        isRTL
        supportedLanguages

=======
        isRTL;
        supportedLanguages;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </LanguageContext && LanguageContext.Provider>;
  );
};


<<<<<<< HEAD
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


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },;
  return (;
    <LanguageContext.Provider;
      value={{;
        currentLanguage,;
        changeLanguage,;
        isRTL;
        supportedLanguages;

<<<<<<< HEAD



=======
      }

      }}
    >
      {children}
    </LanguageContext.Provider>
  )
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }}
    >
      {children}

};

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </LanguageContext.Provider>;
  );
};

        supportedLanguages
      }}>;
      {children}
          const { error } = await supabase;

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba





<<<<<<< HEAD
=======
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

    <LanguageContext.Provider ;
      value={{ ;
        currentLanguage, ;
        changeLanguage, ;
        isRTL,;


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

};
>>>>>>> origin/cursor/delete-old-data-records-6bba
