
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect } from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {SEO} from "@/components/SEO";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "@/components/ui/use-toast";
import {useTranslation} from "react-i18next";
import {AlertTriangle, Check, Globe, Search, Loader2} from "lucide-react";
import {useIsMobile} from "@/hooks/use-mobile";
import {useLanguage, SupportedLanguage} from "@/context/LanguageContext";
import {useTranslationService} from "@/hooks/useTranslationService";
export default function TranslationManager() {;
<<<<<<< HEAD
<<<<<<< HEAD
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();
  const { supportedLanguages } = useLanguage();
  const { translateContent, isTranslating } = useTranslationService();
import React, { useState, useEffect } from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { toast } from "@/components/ui/use-toast",
import { useTranslation } from "react-i18next",
import { AlertTriangle, Check, Globe, Search, Loader2 } from "lucide-react",
import { useIsMobile } from "@/hooks/use-mobile",
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";
import { useTranslationService } from "@/hooks/useTranslationService";
export default function TranslationManager() {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { t, i18n } = useTranslation();

  const isMobile = useIsMobile();
  const { supportedLanguages } = useLanguage();
  const { translateContent, isTranslating } = useTranslationService();
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [selectedNamespace, setSelectedNamespace] = useState("translation");
  const [searchQuery, setSearchQuery] = useState("");
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [filteredKeys, setFilteredKeys] = useState<string[]>([]);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editedTranslations, setEditedTranslations] = useState<Record<string, Record<SupportedLanguage, string>>>({});
  const [isSaving, setIsSaving] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Simulated translation data - in a real app, this would come from your backend
  useEffect(() => {
    // For demo purposes, we're using the loaded translations from i18next
    const currentTranslations: Record<string, any> = {}
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext",
import { useTranslationService } from "@/hooks/useTranslationService",
export default function TranslationManager() {
  const { t, i18n } = useTranslation(),
  const isMobile = useIsMobile(),
  const { supportedLanguages } = useLanguage(),
  const { translateContent, isTranslating } = useTranslationService(),
  
  const [selectedNamespace, setSelectedNamespace] = useState("translation"),
  const [searchQuery, setSearchQuery] = useState(""),
  const [translations, setTranslations] = useState<Record<string any>>({}),
  const [filteredKeys, setFilteredKeys] = useState<string[]>([]),
  const [editingKey, setEditingKey] = useState<string | null>(null),
  const [editedTranslations, setEditedTranslations] = useState<Record<string Record<SupportedLanguage string>>>({}),
  const [isSaving, setIsSaving] = useState(false),
  
  // Simulated translation data - in a real app, this would come from your backend
  useEffect(() => {
    // For demo purposes, we're using the loaded translations from i18next
    const currentTranslations: Record<string any> = {},
    
    supportedLanguages.forEach(lang => {
<<<<<<< HEAD
      const res = i18n.getResourceBundle(lang.code, selectedNamespace),
=======




    supportedLanguages.forEach(lang => {
      const res = i18n.getResourceBundle(lang.code, selectedNamespace);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      const res = i18n.getResourceBundle(lang.code, selectedNamespace);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (res) {
        // Flatten nested objects for easier management
        const flattenObject = (obj: any, prefix = '') => {
          return Object.keys(obj).reduce((acc, key) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            const pre = prefix.length ? `${prefix}.` : '',
            if (typeof obj[key] === 'object' && obj[key] !== null) {
              Object.assign(acc, flattenObject(obj[key], `${pre}${key}`))
            } else {
              acc[`${pre}${key}`] = obj[key]
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState, useEffect } from 'react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { SEO } from '@/components / SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { Textarea } from '@/components / ui / textarea';
import { toast } from '@/components / ui / use - toast';
import { use_translation } from './react - i18next';
import { AlertTriangle, Check, Globe, Search, Loader2 } from './lucide-react';
import { useIsMobile } from '@/hooks / use - mobile';
import { use_language, SupportedLanguage } from '@/context / LanguageContext';
import { useTranslationService } from '@/hooks / useTranslationService';
export default /**
 * TranslationManager - Function description
 */
function TranslationManager() {
  const { t, i18n } = use_translation ();
  const is_mobile = useIsMobile ();
  const { supported_languages } = use_language ();
  const { translate_content, is_translating } = useTranslationService ();
;
  const [selected_namespace, setSelectedNamespace] = useState ("translation");
  const [search_query, setSearchQuery] = useState ("");
  const [translations, set_translations] = useState < Record < string, any>>({});
  const [filtered_keys, setFilteredKeys] = useState < string[]>([]);
  const [editing_key, setEditingKey] = useState < string | null>(null);
  const [edited_translations, setEditedTranslations] = useState < Record < string, Record < SupportedLanguage, string>>>({});
  const [is_saving, setIsSaving] = useState (false);
;
  // Simulated translation data - in a real app, this would come from your backend;
  useEffect (() => {
    // For demo purposes, we're using the loaded translations from i18next;
    const current_translations: Record < string, any> = {}
;
    supported_languages.for_each (lang => {
      const res = i18n.getResourceBundle (lang.code, selected_namespace);
      // Check condition
if ( {) {
  $2
}
        // Flatten nested objects for easier management;
        const flatten_object = (obj: any, prefix = '') =>: any {
          return Object.keys (obj).reduce ((acc, key) => {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            const pre = prefix.length ? `${prefix}.` : '';
            // Check condition
if ( {) {
  $2
}
              Object.assign (acc, flatten_object (obj[key], `${pre}${key}`));
            } else {
<<<<<<< HEAD
              acc[`${pre}${key}`] = obj[key];
            }
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Simulated translation data - in a real app, this would come from your backend;
  useEffect(() => {;
    // For demo purposes, we're using the loaded translations from i18next;
    const currentTranslations: Record<string, any> = {};
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    supportedLanguages && supportedLanguages.forEach(lang => {;
      const res = i18n && i18n.getResourceBundle(lang && lang.code, selectedNamespace);
      if (res) {;
        // Flatten nested objects for easier management;
        const flattenObject = (obj: any, prefix = '') => {;
          return Object && Object.keys(obj).reduce((acc, key) => {;
            const pre = prefix && prefix.length ? `${prefix}.` : '';
            if (typeof obj[key] === 'object' && obj[key] !== null) {;
              Object && Object.assign(acc, flattenObject(obj[key], `${pre}${key}`));
<<<<<<< HEAD
              acc[`${pre}${key}`] = obj[key]


            }
            return acc
          }, {} as Record<string, string>)
        }
        currentTranslations[lang.code] = flattenObject(res)
      }
    });
    setTranslations(currentTranslations);
    // Get all unique keys across all languages
    const allKeys = new Set<string>();
    Object.values(currentTranslations).forEach(langTranslations => {
      Object.keys(langTranslations).forEach(key => allKeys.add(key))
    });
    setFilteredKeys(Array.from(allKeys))
  }, [selectedNamespace, i18n]);
  // Filter keys based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      // Get all unique keys across all languages
      const allKeys = new Set<string>();
      Object.values(translations).forEach(langTranslations => {
        Object.keys(langTranslations).forEach(key => allKeys.add(key))
      });
      setFilteredKeys(Array.from(allKeys));
      return
    }
    const query = searchQuery.toLowerCase().trim();
    const filtered: string[] = []
    // Search in keys and values
    Object.values(translations).forEach(langTranslations => {
      Object.entries(langTranslations).forEach(([key, value]) => {
        if (
          key.toLowerCase().includes(query) |
          (typeof value === 'string' && value.toLowerCase().includes(query))
        ) {
          filtered.push(key)
        }
      })
    });
    setFilteredKeys([...new Set(filtered)])
  }, [searchQuery, translations]);
  const handleEdit = (key: string) => {
    setEditingKey(key)
    // Initialize edited translations for this key
    const initialEdits: Record<SupportedLanguage, string> = {} as Record<SupportedLanguage, string>;
    supportedLanguages.forEach(lang => {
      initialEdits[lang.code] = translations[lang.code]?.[key] |''
    });
    setEditedTranslations({
      ...editedTranslations;
      [key]: initialEdits
    })
  }
  const handleSave = (key: string) => {
    setIsSaving(true)
    // In a real application, you would save these to your backend
    setTimeout(() => {
      // Update translations with edited values
      const updatedTranslations = { ...translations }
      supportedLanguages.forEach(lang => {
        if (!updatedTranslations[lang.code]) {
          updatedTranslations[lang.code] = {}
        }
        updatedTranslations[lang.code][key] = editedTranslations[key][lang.code]
      });
      setTranslations(updatedTranslations);
      setEditingKey(null);
      setIsSaving(false);
=======
=======
              acc[`${pre}${key}`] = obj[key]


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect } from 'react',;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { toast } from "@/components/ui/use-toast",;
import { useTranslation } from "react-i18next",;
import { AlertTriangle, Check, Globe, Search, Loader2 } from "lucide-react",;
import { useIsMobile } from "@/hooks/use-mobile",;
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext",;
import { useTranslationService } from "@/hooks/useTranslationService",;
export default function TranslationManager() {;
  const { t, i18n } = useTranslation(),;
  const isMobile = useIsMobile(),;
  const { supportedLanguages } = useLanguage(),;
  const { translateContent, isTranslating } = useTranslationService(),;
  const [selectedNamespace, setSelectedNamespace] = useState("translation"),;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [translations, setTranslations] = useState<Record<string any>>({}),;
  const [filteredKeys, setFilteredKeys] = useState<string[]>([]),;
  const [editingKey, setEditingKey] = useState<string | null>(null),;
  const [editedTranslations, setEditedTranslations] = useState<Record<string Record<SupportedLanguage string>>>({}),;
  const [isSaving, setIsSaving] = useState(false),;
  // Simulated translation data - in a real app, this would come from your backend;
  useEffect(() => {;
    // For demo purposes, we're using the loaded translations from i18next;
    const currentTranslations: Record<string any> = {},;
    supportedLanguages.forEach(lang => {;
      const res = i18n.getResourceBundle(lang.code, selectedNamespace),;
      if (res) {;
        // Flatten nested objects for easier management;
        const flattenObject = (obj: any, prefix = '') => {;
          return Object.keys(obj).reduce((acc, key) => {;
            const pre = prefix.length ? `${prefix}.` : '',;
            if (typeof obj[key] === 'object' && obj[key] !== null) {;
              Object.assign(acc, flattenObject(obj[key], `${pre}${key}`));
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            } else {;
              acc[`${pre}${key}`] = obj[key];
            }
            return acc;
<<<<<<< HEAD
<<<<<<< HEAD
          }, {} as Record<string, string>);
        };
        currentTranslations[lang && lang.code] = flattenObject(res);
      }
    });
    setTranslations(currentTranslations);
    // Get all unique keys across all languages;
    const allKeys = new Set<string>();
    Object && Object.values(currentTranslations).forEach(langTranslations => {;
      Object && Object.keys(langTranslations).forEach(key => allKeys && allKeys.add(key));
    });
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setFilteredKeys(Array && Array.from(allKeys));
  }, [selectedNamespace, i18n]);
=======


    setFilteredKeys(Array && Array.from(allKeys));
  }, [selectedNamespace, i18n]);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Filter keys based on search query;
  useEffect(() => {;
    if (!searchQuery && searchQuery.trim()) {;
      // Get all unique keys across all languages;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const allKeys = new Set<string>();
      Object && Object.values(translations).forEach(langTranslations => {;
        Object && Object.keys(langTranslations).forEach(key => allKeys && allKeys.add(key));
      });
      setFilteredKeys(Array && Array.from(allKeys));
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }, {} as Record<string string>);
        },;
        currentTranslations[lang.code] = flattenObject(res);
      }
    }),;
    setTranslations(currentTranslations),;
    // Get all unique keys across all languages;
    const allKeys = new Set<string>(),;
    Object.values(currentTranslations).forEach(langTranslations => {;
      Object.keys(langTranslations).forEach(key => allKeys.add(key));
    }),;
    setFilteredKeys(Array.from(allKeys));
  }, [selectedNamespace, i18n]),;
  // Filter keys based on search query;
  useEffect(() => {;
    if (!searchQuery.trim()) {;
      // Get all unique keys across all languages;
      const allKeys = new Set<string>(),;
      Object.values(translations).forEach(langTranslations => {;
        Object.keys(langTranslations).forEach(key => allKeys.add(key));
      }),;
      setFilteredKeys(Array.from(allKeys)),;
      return;
    }
;
    const query = searchQuery.toLowerCase().trim(),;
    const filtered: string[] = [],;
    // Search in keys and values;
    Object.values(translations).forEach(langTranslations => {;
      Object.entries(langTranslations).forEach(([key, value]) => {;
        if (;
          key.toLowerCase().includes(query) ||;
          (typeof value === 'string' && value.toLowerCase().includes(query));
        ) {;
          filtered.push(key);
        }
      });
    }),;
    setFilteredKeys([...new Set(filtered)]);
  }, [searchQuery, translations]),;
  const handleEdit = (key: string) => {;
    setEditingKey(key),;
    // Initialize edited translations for this key;
    const initialEdits: Record<SupportedLanguage string> = {} as Record<SupportedLanguage string>,;
    supportedLanguages.forEach(lang => {;
      initialEdits[lang.code] = translations[lang.code]?.[key] || '';
    }),;
    setEditedTranslations({;
      ...editedTranslations,;
      [key]: initialEdits;
    });
  },;
  const handleSave = (key: string) => {;
    setIsSaving(true),;
    // In a real application, you would save these to your backend;
    setTimeout(() => {;
      // Update translations with edited values;
      const updatedTranslations = { ...translations },;
      supportedLanguages.forEach(lang => {;
        if (!updatedTranslations[lang.code]) {;


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          updatedTranslations[lang.code] = {}
        }
        updatedTranslations[lang.code][key] = editedTranslations[key][lang.code]
      }),
      
      setTranslations(updatedTranslations),
      setEditingKey(null),
      setIsSaving(false),
      
<<<<<<< HEAD
<<<<<<< HEAD
      
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: t("translation.saved")
        description: t("translation.changes_saved")})
    }, 1000)
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const handleTranslateKey = async (key: string) => {
    // Find first non-empty translation to use as source
    let sourceLanguage: SupportedLanguage = 'en'
    let sourceText = '';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },
  
  const handleTranslateKey = async (key: string) => {
    // Find first non-empty translation to use as source
    let sourceLanguage: SupportedLanguage = 'en',
    let sourceText = '',
    
<<<<<<< HEAD

<<<<<<< HEAD
    const query = searchQuery && searchQuery.toLowerCase().trim();
    const filtered: string[] = [],;
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    for (const lang of supportedLanguages.map(l => l.code)) {
      if (translations[lang]?.[key]) {
=======

    const query = searchQuery && searchQuery.toLowerCase().trim();
    const filtered: string[] = [],;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Search in keys and values;
    Object && Object.values(translations).forEach(langTranslations => {;
      Object && Object.entries(langTranslations).forEach(([key, value]) => {;
        if (;
          key && key.toLowerCase().includes(query) || ;
          (typeof value === 'string' && value && value.toLowerCase().includes(query));
        ) {;
          filtered && filtered.push(key);
        }
      });
    });
<<<<<<< HEAD
<<<<<<< HEAD
    setFilteredKeys([...new Set(filtered)]);
  }, [searchQuery, translations]);
  const handleEdit = (key: string) => {;
    setEditingKey(key),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    setFilteredKeys([...new Set(filtered)]);
  }, [searchQuery, translations]);

  const handleEdit = (key: string) => {;
    setEditingKey(key),;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Initialize edited translations for this key;
    const initialEdits: Record<SupportedLanguage, string> = {} as Record<SupportedLanguage, string>;
    supportedLanguages && supportedLanguages.forEach(lang => {;
      initialEdits[lang && lang.code] = translations[lang && lang.code]?.[key] || '';
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setEditedTranslations({;
      ...editedTranslations;
      [key]: initialEdits;
    });
  };
<<<<<<< HEAD
<<<<<<< HEAD
  const handleSave = (key: string) => {;
    setIsSaving(true),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleSave = (key: string) => {;
    setIsSaving(true),;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // In a real application, you would save these to your backend;
    setTimeout(() => {;
      // Update translations with edited values;
      const updatedTranslations = { ...translations };
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      supportedLanguages && supportedLanguages.forEach(lang => {;
        if (!updatedTranslations[lang && lang.code]) {;
          updatedTranslations[lang && lang.code] = {}
        }
        updatedTranslations[lang && lang.code][key] = editedTranslations[key][lang && lang.code];
      });
<<<<<<< HEAD
<<<<<<< HEAD
      setTranslations(updatedTranslations);
      setEditingKey(null);
      setIsSaving(false);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      setTranslations(updatedTranslations);
      setEditingKey(null);
      setIsSaving(false);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({;
        title: t("translation && translation.saved"),;
        description: t("translation && translation.changes_saved")});
    }, 1000);
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleTranslateKey = async (key: string) => {;
    // Find first non-empty translation to use as source;
    let sourceLanguage: SupportedLanguage = 'en',;
    let sourceText = '';
<<<<<<< HEAD
<<<<<<< HEAD
    for (const lang of supportedLanguages && supportedLanguages.map(l => l && l.code)) {;
      if (translations[lang]?.[key]) {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    for (const lang of supportedLanguages && supportedLanguages.map(l => l && l.code)) {;
      if (translations[lang]?.[key]) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        sourceLanguage = lang;
        sourceText = translations[lang][key];
        break;
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
    for (const lang of supportedLanguages.map(l => l.code)) {
      if (translations[lang]?.[key]) {
        sourceLanguage = lang,
        sourceText = translations[lang][key],
        break
      }
    }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!sourceText) {
      toast({
        title: t('translation.no_content')
        description: t('translation.add_content_first')
        variant: "destructive"})
      return
    }
    try {
      const { translations: translatedText, error } = await translateContent(
        sourceText
        'general'
        sourceLanguage
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


      ),
      


<<<<<<< HEAD
      );
      ),
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      );
      ),
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (error) {
        toast({
          title: t('translation.translation_failed')
          description: error
          variant: "destructive"})
        return
      }
      // Update edited translations with auto-translated content
      setEditedTranslations({
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!sourceText) {;
      toast({;
        title: t('translation && translation.no_content'),;
        description: t('translation && translation.add_content_first'),;
        variant: "destructive"}),;
      return;
    }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {;
      const { translations: translatedText, error } = await translateContent(;
        sourceText, ;
        'general', ;
        sourceLanguage;
      );
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (error) {;
        toast({;
          title: t('translation && translation.translation_failed'),;
          description: error,;
          variant: "destructive"}),;
        return;
      }
<<<<<<< HEAD
      // Update edited translations with auto-translated content;
      setEditedTranslations({;
      }),
      


<<<<<<< HEAD
=======

      // Update edited translations with auto-translated content;
      setEditedTranslations({;

        ...editedTranslations;
        [key]: translatedText;
      });

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ...editedTranslations,
        [key]: translatedText
      });
      }),
      
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: t('translation.translation_success')
        description: t('translation.content_translated')})
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.error(`Error translating key ${key}:`, error),
=======
      console.error(`Error translating key ${key}:`, error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      console.error(`Error translating key ${key}:`, error);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: t('translation.translation_failed')
        description: error instanceof Error ? error.message : t('translation.unknown_error')
        variant: "destructive"})
<<<<<<< HEAD

<<<<<<< HEAD
      <SEO 
        title={t('translation.manager_title')} 

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
  const handleCancel = () => {
    setEditingKey(null)
  }
  const handleChange = (lang: SupportedLanguage, key: string, value: string) => {
    setEditedTranslations({
      ...editedTranslations;
      [key]: {
        ...editedTranslations[key]
        [lang]: value
      }
    })
  }
  const getMissingLanguages = (key: string): SupportedLanguage[] => {
    return supportedLanguages
      .map(lang => lang.code)
      .filter(lang => !translations[lang]?.[key])
  }

<<<<<<< HEAD
  return (
    <>
      <SEO
        title={t('translation.manager_title')}
      <SEO 
        title={t('translation.manager_title')} 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <SEO 
        title={t('translation.manager_title')} 

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        updatedTranslations[lang.code][key] = editedTranslations[key][lang.code];
      }),;
      setTranslations(updatedTranslations),;
      setEditingKey(null),;
      setIsSaving(false),;
      toast({;
        title: t("translation.saved"),;
        description: t("translation.changes_saved")});
    }, 1000);
  },;
  const handleTranslateKey = async (key: string) => {;
    // Find first non-empty translation to use as source;
    let sourceLanguage: SupportedLanguage = 'en',;
    let sourceText = '',;
    for (const lang of supportedLanguages.map(l => l.code)) {;
      if (translations[lang]?.[key]) {;
        sourceLanguage = lang,;
        sourceText = translations[lang][key],;
        break;
      }
    }
;
    if (!sourceText) {;
      toast({;
        title: t('translation.no_content'),;
        description: t('translation.add_content_first'),;
        variant: "destructive"}),;
      return;
    }
;
    try {;
      const { translations: translatedText, error } = await translateContent(;
        sourceText,;
        'general',;
        sourceLanguage;
      ),;
      if (error) {;
        toast({;
          title: t('translation.translation_failed'),;
          description: error,;
          variant: "destructive"}),;
        return;
      }
;
      // Update edited translations with auto-translated content;
      setEditedTranslations({;
        ...editedTranslations,;
        [key]: translatedText;
      }),;
      toast({;
        title: t('translation.translation_success'),;
        description: t('translation.content_translated')});
    } catch (error) {;
      console.error(`Error translating key ${key}:`, error),;
      toast({;
        title: t('translation.translation_failed'),;
        description: error instanceof Error ? error.message : t('translation.unknown_error'),;
        variant: "destructive"});
    }
  },;
  const handleCancel = () => {;
    setEditingKey(null);
  },;
  const handleChange = (lang: SupportedLanguage, key: string, value: string) => {;
    setEditedTranslations({;
      ...editedTranslations,;
      [key]: {;
        ...editedTranslations[key],;
        [lang]: value;
      }
    });
  };
  const getMissingLanguages = (key: string): SupportedLanguage[] => {;
    return supportedLanguages;
      .map(lang => lang.code);
      .filter(lang => !translations[lang]?.[key]);
  };
  return (;
    <>;
      <SEO;
        title={t('translation.manager_title')} ;


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        description={t('translation.manager_description')}
      />
      <Header />
      <main className={`container mx-auto px-${isMobile ? '4' : '6'} py-8`}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{t('translation.manager_title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
<<<<<<< HEAD
<<<<<<< HEAD

        ...editedTranslations;
        [key]: translatedText;
      });
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({;
        title: t('translation && translation.translation_success'),;
        description: t('translation && translation.content_translated')});
    } catch (error) {;
      console && console.error(`Error translating key ${key}:`, error);
      toast({;
        title: t('translation && translation.translation_failed'),;
        description: error instanceof Error ? error && error.message : t('translation && translation.unknown_error'),;
        variant: "destructive"});
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD
  const handleCancel = () => {;
    setEditingKey(null);
  };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleCancel = () => {;
    setEditingKey(null);
  };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleChange = (lang: SupportedLanguage, key: string, value: string) => {;
    setEditedTranslations({;
      ...editedTranslations;
      [key]: {;
        ...editedTranslations[key],;
        [lang]: value;
      }
    });
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const getMissingLanguages = (key: string): SupportedLanguage[] => {;
    return supportedLanguages;
      .map(lang => lang && lang.code);
      .filter(lang => !translations[lang]?.[key]);
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <>;
      <SEO
        title={t('translation && translation.manager_title')} 
        description={t('translation && translation.manager_description')}
      />;
      <Header />;
      <main className={`container mx-auto px-${isMobile ? '4' : '6'} py-8`}>;
        <Card>;
          <CardHeader>;
            <CardTitle className="text-2xl">{t('translation && translation.manager_title')}</CardTitle>;
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState, useEffect } from 'react',;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { toast } from "@/components/ui/use-toast",;
import { useTranslation } from "react-i18next",;
import { AlertTriangle, Check, Globe, Search, Loader2 } from "lucide-react",;
import { useIsMobile } from "@/hooks/use-mobile",;
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext",;
import { useTranslationService } from "@/hooks/useTranslationService",;
;
export default function TranslationManager() {;
  const { t, i18n } = useTranslation(),;
  const isMobile = useIsMobile(),;
  const { supportedLanguages } = useLanguage(),;
  const { translateContent, isTranslating } = useTranslationService(),;
  ;
  const [selectedNamespace, setSelectedNamespace] = useState("translation"),;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [translations, setTranslations] = useState<Record<string any>>({}),;
  const [filteredKeys, setFilteredKeys] = useState<string[]>([]),;
  const [editingKey, setEditingKey] = useState<string | null>(null),;
  const [editedTranslations, setEditedTranslations] = useState<Record<string Record<SupportedLanguage string>>>({}),;
  const [isSaving, setIsSaving] = useState(false),;
  ;
  // Simulated translation data - in a real app, this would come from your backend;
  useEffect(() => {;
    // For demo purposes, we're using the loaded translations from i18next;
    const currentTranslations:Record<string any> = {},;
    ;
    supportedLanguages.forEach(lang => {;
      const res = i18n.getResourceBundle(lang.code, selectedNamespace),;
      if (res) {;
        // Flatten nested objects for easier management;
        const flattenObject = (obj:any, prefix = '') => {;
          return Object.keys(obj).reduce((acc, key) => {;
            const pre = prefix.length ? `${prefix}.` :'',;
            if (typeof obj[key] === 'object' && obj[key] !== null) {;
              Object.assign(acc, flattenObject(obj[key], `${pre}${key}`)),;
            } else {;
              acc[`${pre}${key}`] = obj[key],;
            }
            return acc,;
          }, {} as Record<string string>),;
        },;
        ;
        currentTranslations[lang.code] = flattenObject(res),;
      }
    }),;
    ;
    setTranslations(currentTranslations),;
    ;
    // Get all unique keys across all languages;
    const allKeys = new Set<string>(),;
    Object.values(currentTranslations).forEach(langTranslations => {;
      Object.keys(langTranslations).forEach(key => allKeys.add(key)),;
    }),;
    ;
    setFilteredKeys(Array.from(allKeys)),;
  }, [selectedNamespace, i18n]),;
  ;
  // Filter keys based on search query;
  useEffect(() => {;
    if (!searchQuery.trim()) {;
      // Get all unique keys across all languages;
      const allKeys = new Set<string>(),;
      Object.values(translations).forEach(langTranslations => {;
        Object.keys(langTranslations).forEach(key => allKeys.add(key)),;
      }),;
      setFilteredKeys(Array.from(allKeys)),;
      return,;
    }
    ;
    const query = searchQuery.toLowerCase().trim(),;
    const filtered:string[] = [],;
    ;
    // Search in keys and values;
    Object.values(translations).forEach(langTranslations => {;
      Object.entries(langTranslations).forEach(([key, value]) => {;
        if (;
          key.toLowerCase().includes(query) || ;
          (typeof value === 'string' && value.toLowerCase().includes(query));
        ) {;
          filtered.push(key),;
        }
      }),;
    }),;
    ;
    setFilteredKeys([...new Set(filtered)]),;
  }, [searchQuery, translations]),;
  ;
  const handleEdit = (key:string) => {;
    setEditingKey(key),;
    ;
    // Initialize edited translations for this key;
    const initialEdits:Record<SupportedLanguage string> = {} as Record<SupportedLanguage string>,;
    supportedLanguages.forEach(lang => {;
      initialEdits[lang.code] = translations[lang.code]?.[key] || '',;
    }),;
    ;
    setEditedTranslations({;
      ...editedTranslations,;
      [key]:initialEdits;
    }),;
  },;
  ;
  const handleSave = (key:string) => {;
    setIsSaving(true),;
    ;
    // In a real application, you would save these to your backend;
    setTimeout(() => {;
      // Update translations with edited values;
      const updatedTranslations = { ...translations },;
      ;
      supportedLanguages.forEach(lang => {;
        if (!updatedTranslations[lang.code]) {;
          updatedTranslations[lang.code] = {},;
        }
        updatedTranslations[lang.code][key] = editedTranslations[key][lang.code],;
      }),;
      ;
      setTranslations(updatedTranslations),;
      setEditingKey(null),;
      setIsSaving(false),;
      ;
      toast({;
        title:t("translation.saved"),;
        description:t("translation.changes_saved")}),;
    }, 1000),;
  },;
  ;
  const handleTranslateKey = async (key:string) => {;
    // Find first non-empty translation to use as source;
    let sourceLanguage:SupportedLanguage = 'en',;
    let sourceText = '',;
    ;
    for (const lang of supportedLanguages.map(l => l.code)) {;
      if (translations[lang]?.[key]) {;
        sourceLanguage = lang,;
        sourceText = translations[lang][key],;
        break;
      }
    }
    ;
    if (!sourceText) {;
      toast({;
        title:t('translation.no_content'),;
        description:t('translation.add_content_first'),;
        variant:"destructive"}),;
      return,;
    }
    ;
    try {;
      const { translations:translatedText, error } = await translateContent(;
        sourceText, ;
        'general', ;
        sourceLanguage;
      ),;
      ;
      if (error) {;
        toast({;
          title:t('translation.translation_failed'),;
          description:error,;
          variant:"destructive"}),;
        return,;
      }
      ;
      // Update edited translations with auto-translated content;
      setEditedTranslations({;
        ...editedTranslations,;
        [key]:translatedText;
      }),;
      ;
      toast({;
        title:t('translation.translation_success'),;
        description:t('translation.content_translated')}),;
    } catch (error) {;
      console.error(`Error translating key ${key} `, error),;
      toast({;
        title:t('translation.translation_failed'),;
        description:error instanceof Error ? error.message :t('translation.unknown_error'),;
        variant:"destructive"}),;
    }
  },;
  ;
  const handleCancel = () => {;
    setEditingKey(null),;
  },;
  ;
  const handleChange = (lang:SupportedLanguage, key:string, value:string) => {;
    setEditedTranslations({;
      ...editedTranslations,;
      [key]:{;
        ...editedTranslations[key],;
        [lang]:value;
      }
    }),;
  },;
  ;
  const getMissingLanguages = (key:string):SupportedLanguage[] => {;
    return supportedLanguages;
      .map(lang => lang.code);
      .filter(lang => !translations[lang]?.[key]);
  },;
  ;
  return (;
    <>;
      <SEO ;
        title={t('translation.manager_title')} ;
        description={t('translation.manager_description')}
      />;
      <Header />;
      <main className={`container mx-auto px-${isMobile ? '4' :'6'} py-8`}>;
        <Card>;
          <CardHeader>;
            <CardTitle className="text-2xl">{t('translation.manager_title')}</CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className="space-y-6">;
              {/* Search and filter */}
              <div className="flex flex-col sm:flex-row gap-4">;
                <div className="relative flex-1">;
              {/* Search and filter */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder={t('translation.search_placeholder')}
=======
          </CardHeader>;
          <CardContent>;
            <div className="space-y-6">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              {/* Search and filter */}
              <div className="flex flex-col sm:flex-row gap-4">;
                <div className="relative flex-1">;
                  <Search className="absolute left-2 && 2.5 top-2 && 2.5 h-4 w-4 text-muted-foreground" />;
                  <Input
                    type="search"
                    placeholder={t('translation && translation.search_placeholder')}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Tabs
                  defaultValue="translation"
                  value={selectedNamespace}
                  onValueChange={(value) => setSelectedNamespace(value)}
                  className="w-full sm:w-auto"
                >
                  <TabsList>
                    <TabsTrigger value="translation">General</TabsTrigger>
                    <TabsTrigger value="admin">Admin</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
<<<<<<< HEAD
=======
          </CardHeader>;
          <CardContent>;
            <div className="space-y-6">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              {/* Search and filter */}
              <div className="flex flex-col sm:flex-row gap-4">;
                <div className="relative flex-1">;
                  <Search className="absolute left-2 && 2.5 top-2 && 2.5 h-4 w-4 text-muted-foreground" />;
                  <Input
                    type="search"
                    placeholder={t('translation && translation.search_placeholder')}
                    className="pl-8"
                    value={searchQuery}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


              


<<<<<<< HEAD
              
              
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Translations table */}
              <div className="border rounded-md">
                <div className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr_auto] border-b">
                  <div className="p-3 font-medium">{t('translation.key')}</div>
                  <div className="p-3 font-medium">{t('translation.translations')}</div>
                  <div className="hidden sm:block p-3 font-medium">{t('translation.actions')}</div>
                </div>
                {filteredKeys.length === 0 ? (
                  <div className="p-6 text-center text-muted-foreground">
                    {t('translation.no_results')}
                  </div>
                ) : (
                  <div className="divide-y">
                    {filteredKeys.map((key) => (
                      <div key={key} className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr_auto]">
                        <div className="p-3 break-words">{key}</div>
                        {editingKey === key ? (
                          <div className="p-3">
                            <div className="space-y-4">
                              {supportedLanguages.map((lang) => (
                                <div key={lang.code}>
                                  <div className="flex items-center gap-2 mb-1">
                                    <span>{lang.flag}</span>
                                    <span>{lang.name}</span>
                                  </div>
                                  {editedTranslations[key][lang.code]?.includes('\n') |
                                   editedTranslations[key][lang.code]?.length > 100 ? (
                                    <Textarea
                                      value={editedTranslations[key][lang.code] |''}
                                      onChange={(e) => handleChange(lang.code, key, e.target.value)}
                                      dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                                      className="min-h-20"
                                    />
                                  ) : (
                                    <Input
                                      value={editedTranslations[key][lang.code] |''}
                                      onChange={(e) => handleChange(lang.code, key, e.target.value)}
                                      dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                                    />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                  )}
                                </div>
                              ))}
                            </div>
                            <div className="flex gap-2 mt-4">
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    onChange={(e) => setSearchQuery(e && e.target.value)}
                  />;
                </div>;
                <Tabs
                  defaultValue="translation" 
<<<<<<< HEAD
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />;
                  <Input;
                    type="search";
                    placeholder={t('translation.search_placeholder')}
                    className="pl-8";
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />;
                </div>;
                <Tabs ;
                  defaultValue="translation" ;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  value={selectedNamespace}
                  onValueChange={(value) => setSelectedNamespace(value)}
                  className="w-full sm:w-auto";
                >;
                  <TabsList>;
                    <TabsTrigger value="translation">General</TabsTrigger>;
                    <TabsTrigger value="admin">Admin</TabsTrigger>;
                  </TabsList>;
                </Tabs>;
              </div>;
<<<<<<< HEAD
              ;
              {/* Translations table */}
              <div className="border rounded-md">;
                <div className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr_auto] border-b">;
                  <div className="p-3 font-medium">{t('translation.key')}</div>;
                  <div className="p-3 font-medium">{t('translation.translations')}</div>;
                  <div className="hidden sm:block p-3 font-medium">{t('translation.actions')}</div>;
                </div>;
                ;
                {filteredKeys.length === 0 ? (;
                  <div className="p-6 text-center text-muted-foreground">;
                    {t('translation.no_results')}
                  </div>;
                ) :(;
                  <div className="divide-y">;
                    {filteredKeys.map((key) => (;
=======

              {/* Translations table */}
              <div className="border rounded-md">;
                <div className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr_auto] border-b">;
                  <div className="p-3 font-medium">{t('translation && translation.key')}</div>;
                  <div className="p-3 font-medium">{t('translation && translation.translations')}</div>;
                  <div className="hidden sm:block p-3 font-medium">{t('translation && translation.actions')}</div>;
                </div>;

                {filteredKeys && filteredKeys.length === 0 ? (;
                  <div className="p-6 text-center text-muted-foreground">;
                    {t('translation && translation.no_results')}
                  </div>;
                ) : (;
                  <div className="divide-y">;
                    {filteredKeys && filteredKeys.map((key) => (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <div key={key} className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr_auto]">;
                        <div className="p-3 break-words">{key}</div>;
                        {editingKey === key ? (;
                          <div className="p-3">;
                            <div className="space-y-4">;
<<<<<<< HEAD
                              {supportedLanguages.map((lang) => (;
                                <div key={lang.code}>;
                                  <div className="flex items-center gap-2 mb-1">;
                                    <span>{lang.flag}</span>;
                                    <span>{lang.name}</span>;
                                  </div>;
                                  {editedTranslations[key][lang.code]?.includes('\n') || ;
                                   editedTranslations[key][lang.code]?.length > 100 ? (;
                                    <Textarea;
                                      value={editedTranslations[key][lang.code] || ''}
                                      onChange={(e) => handleChange(lang.code, key, e.target.value)}
                                      dir={lang.code === 'ar' ? 'rtl' :'ltr'}
                                      className="min-h-20";
                                    />;
                                  ) :(;
                                    <Input;
                                      value={editedTranslations[key][lang.code] || ''}
                                      onChange={(e) => handleChange(lang.code, key, e.target.value)}
                                      dir={lang.code === 'ar' ? 'rtl' :'ltr'}
                                    />;                                  )}
                                </div>;
                              ))}
                            </div>;
                            <div className="flex gap-2 mt-4">;
=======
                              {supportedLanguages && supportedLanguages.map((lang) => (;
                                <div key={lang && lang.code}>;
                                  <div className="flex items-center gap-2 mb-1">;
                                    <span>{lang && lang.flag}</span>;
                                    <span>{lang && lang.name}</span>;
                                  </div>;
                                  {editedTranslations[key][lang && lang.code]?.includes('\n') || ;
                                   editedTranslations[key][lang && lang.code]?.length > 100 ? (;
                                    <Textarea
                                      value={editedTranslations[key][lang && lang.code] || ''}
                                      onChange={(e) => handleChange(lang && lang.code, key, e && e.target.value)}
                                      dir={lang && lang.code === 'ar' ? 'rtl' : 'ltr'}
                                      className="min-h-20";
                                    />;
                                  ) : (;
                                    <Input
                                      value={editedTranslations[key][lang && lang.code] || ''}
                                      onChange={(e) => handleChange(lang && lang.code, key, e && e.target.value)}
                                      dir={lang && lang.code === 'ar' ? 'rtl' : 'ltr'}
                                    />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                                  )}
                                </div>;
                              ))}

                            </div>;
                            <div className="flex gap-2 mt-4">;
                              <Button
                                size="sm" 

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                              <Button 
                                size="sm" 

<<<<<<< HEAD
                              <Button ;
                                size="sm" ;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                              <Button
                                size="sm"
                              <Button 
                                size="sm" 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                onClick={() => handleSave(key)}
                                disabled={isSaving}
                              >;
                                {isSaving ? (;
                                  <>;
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
<<<<<<< HEAD
<<<<<<< HEAD
                              </Button>;
                              <Button
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                    {t('general && general.saving')}
                                  </>;
                                ) : (;
                                  <>;
                                    <Check className="mr-2 h-4 w-4" />;
                                    {t('general && general.save')}
                                  </>;
                                )}
<<<<<<< HEAD

                              </Button>;
                              <Button
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                              </Button>
                              <Button 

                                size="sm" 
                                variant="outline" 
                                onClick={handleCancel}>;
                                {t('general && general.cancel')}
                              </Button>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                              <Button



<<<<<<< HEAD
                                size="sm"
                                variant="secondary"
                                    {t('general.saving')}
                                  </>;
                                ) :(;
                                  <>;
                                    <Check className="mr-2 h-4 w-4" />;
                                    {t('general.save')}
                                  </>;
                                )}
                              </Button>;
                              <Button ;
                                size="sm" ;
                                variant="outline" ;
                                onClick={handleCancel}
                              >;
                                {t('general.cancel')}
                              </Button>;
                              <Button;
                                size="sm";
                                variant="secondary";
                                onClick={() => handleTranslateKey(key)}
                                disabled={isTranslating}
                              >;
                                {isTranslating ? (;
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                                {t('translation && translation.auto_translate')}
                              </Button>;
                            </div>;
                          </div>;
                        ) : (;
                          <div className="p-3">;
                            <div className="space-y-2">;
                              {supportedLanguages && supportedLanguages.slice(0, 2).map((lang) => (;
                                <div key={lang && lang.code} className="flex items-start gap-2">;
                                  <span className="mt-0 && 0.5 flex-shrink-0">{lang && lang.flag}</span>;
                                  <span
                                    className={`${!translations[lang && lang.code]?.[key] ? 'text-zion-purple italic' : ''}`}
                                    dir={lang && lang.code === 'ar' ? 'rtl' : 'ltr'}>;
                                    {translations[lang && lang.code]?.[key] || t('translation && translation.missing')}
                                ) :(;
                                  <Globe className="mr-2 h-4 w-4" />;
                                )}
                                {t('translation.auto_translate')}
                              </Button>;
                            </div>;
                          </div>;
                        ) :(;
                          <div className="p-3">;
                            <div className="space-y-2">;
                              {supportedLanguages.slice(0, 2).map((lang) => (;
                                <div key={lang.code} className="flex items-start gap-2">;
                                  <span className="mt-0.5 flex-shrink-0">{lang.flag}</span>;
                                  <span ;
                                    className={`${!translations[lang.code]?.[key] ? 'text-zion-purple italic' :''}`}
                                    dir={lang.code === 'ar' ? 'rtl' :'ltr'}
                                  >;                                    {translations[lang.code]?.[key] || t('translation.missing')}
                                  </span>;
                                </div>;
                              ))}
                              {getMissingLanguages(key).length > 0 && (;
                                <div className="flex items-center gap-2 text-sm text-zion-purple">;
                                  <AlertTriangle className="h-4 w-4" />;
                                  {t('translation.missing_languages', { count:getMissingLanguages(key).length })}
                                </div>;                              )}
                            </div>;
                          </div>;
                        )}
                        <div className="p-3 flex items-center justify-end">;
                              <Button
                                size="sm"
                              <Button 
                                size="sm" 
                                onClick={() => handleSave(key)}
                                disabled={isSaving}
                              >
                                {isSaving ? (
                                  <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    {t('general.saving')}
                                  </>
                                ) : (
                                  <>
                                    <Check className="mr-2 h-4 w-4" />
                                    {t('general.save')}
                                  </>
                                )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={handleCancel}
                              >
                                {t('general.cancel')}
                              </Button>
                              <Button
                              </Button>
                              <Button 
<<<<<<< HEAD
                                size="sm" 
                                variant="outline" 
                                onClick={handleCancel}
                              >
                                {t('general.cancel')}
                              </Button>
                              <Button
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                                size="sm" 
                                variant="outline" 
                                onClick={handleCancel}>;
                                {t('general && general.cancel')}
                              </Button>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                              <Button
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                size="sm"
                                variant="secondary"
                                onClick={() => handleTranslateKey(key)}
                                disabled={isTranslating}
<<<<<<< HEAD
<<<<<<< HEAD
                              >
                                {isTranslating ? (
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                  <Globe className="mr-2 h-4 w-4" />
                                )}
                                {t('translation.auto_translate')}
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="p-3">
                            <div className="space-y-2">
                              {supportedLanguages.slice(0, 2).map((lang) => (
                                <div key={lang.code} className="flex items-start gap-2">
                                  <span className="mt-0.5 flex-shrink-0">{lang.flag}</span>
                                  <span
                                    className={`${!translations[lang.code]?.[key] ? 'text-zion-purple italic' : ''}`}
                                    dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                                  >
                                    {translations[lang.code]?.[key] |t('translation.missing')}
                                  </span>
                                </div>
                              ))}
                              {getMissingLanguages(key).length > 0 && (
                                <div className="flex items-center gap-2 text-sm text-zion-purple">
                                  <AlertTriangle className="h-4 w-4" />
                                  {t('translation.missing_languages', { count: getMissingLanguages(key).length })}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                        <div className="p-3 flex items-center justify-end">
                          {editingKey === key ? null : (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              >;
                                {isTranslating ? (;
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                                ) : (;
                                  <Globe className="mr-2 h-4 w-4" />;
                                )}

                                {t('translation && translation.auto_translate')}
                              </Button>;
                            </div>;
                          </div>;
                        ) : (;
                          <div className="p-3">;
                            <div className="space-y-2">;
                              {supportedLanguages && supportedLanguages.slice(0, 2).map((lang) => (;
                                <div key={lang && lang.code} className="flex items-start gap-2">;
                                  <span className="mt-0 && 0.5 flex-shrink-0">{lang && lang.flag}</span>;
                                  <span
                                    className={`${!translations[lang && lang.code]?.[key] ? 'text-zion-purple italic' : ''}`}
                                    dir={lang && lang.code === 'ar' ? 'rtl' : 'ltr'}>;
                                    {translations[lang && lang.code]?.[key] || t('translation && translation.missing')}
                                  </span>;
                                </div>;

                              ))}
                              {getMissingLanguages(key).length > 0 && (;
                                <div className="flex items-center gap-2 text-sm text-zion-purple">;
                                  <AlertTriangle className="h-4 w-4" />;
                                  {t('translation && translation.missing_languages', { count: getMissingLanguages(key).length })}
                                </div>;
                              )}
                            </div>;
                          </div>;
                        )}
                        <div className="p-3 flex items-center justify-end">;
                          {editingKey === key ? null : (;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEdit(key)}
<<<<<<< HEAD
<<<<<<< HEAD
                          {editingKey === key ? null :(;
                            <Button;
                              size="sm";
                              variant="outline";
                              onClick={() => handleEdit(key)}
                            >;                              {t('translation.edit')}
=======
                            >;
                              {t('translation && translation.edit')}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                            >;
                              {t('translation && translation.edit')}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            </Button>;
                          )}
                        </div>;
                      </div>;
                    ))}
                  </div>;
                )}
<<<<<<< HEAD

            return acc;
          }, {} as Record < string, string>);
        }
;
        current_translations[lang.code] = flatten_object (res);
      }
    });
;
    set_translations (current_translations);
;
    // Get all unique keys across all languages;
    const all_keys = new Set < string>();
    Object.values (current_translations).for_each (lang_translations => {
      Object.keys (lang_translations).for_each (key => all_keys.add (key));
    });
;
    setFilteredKeys (Array.from (all_keys));
  }, [selected_namespace, i18n]);
;
  // Filter keys based on search query;
  useEffect (() => {
    if () {) {
  $2
}
      // Get all unique keys across all languages;
      const all_keys = new Set < string>();
      Object.values (translations).for_each (lang_translations => {
        Object.keys (lang_translations).for_each (key => all_keys.add (key));
      });
      setFilteredKeys (Array.from (all_keys));
      return;
    }
    const query = search_query.toLowerCase ().trim ();
    const filtered: string[] = [],
    // Search in keys and values;
    Object.values (translations).for_each (lang_translations => {
      Object.entries (lang_translations).for_each (([key, value]) => {
        if (.includes (query) ||) {
  $2
}
          (typeof value === 'string' && value.toLowerCase ().includes (query))) {
          filtered.push (key);
        }
      });
    });
;
    setFilteredKeys ([...new Set (filtered)]);
  }, [search_query, translations]);
;
  const handle_edit = (key: string) =>: any {
    setEditingKey (key),
    // Initialize edited translations for this key;
    const initial_edits: Record < SupportedLanguage, string> = {} as Record < SupportedLanguage, string>;
    supported_languages.for_each (lang => {
      initial_edits[lang.code] = translations[lang.code]?.[key] || '';
    });
;
    setEditedTranslations ({
      ...edited_translations;
      [key]: initial_edits;
    });
  }
;
  const handle_save = (key: string) =>: any {
    setIsSaving (true),
    // In a real application, you would save these to your backend;
    set_timeout (() => {
      // Update translations with edited values;
      const updated_translations = { ...translations }
;
      supported_languages.for_each (lang => {
        // Check condition
if ( {) {
  $2
}
          updated_translations[lang.code] = {}
        }
        updated_translations[lang.code][key] = edited_translations[key][lang.code];
      });
;
      set_translations (updated_translations);
      setEditingKey (null);
      setIsSaving (false);
;
      toast ({
        title: t ("translation.saved"),
        description: t ("translation.changes_saved")});
    }, 1000);
  }
;
  const handleTranslateKey = async (key: string) => {
    // Find first non - empty translation to use as source;
    let source_language: SupportedLanguage = 'en',
    let source_text = '';
;
    for (const lang of supported_languages.map (l => l.code)) {
      // Check condition
if ( {) {
  $2
}
        source_language = lang;
        source_text = translations[lang][key];
        break;
      }
    }
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: t ('translation.no_content'),
        description: t ('translation.add_content_first'),
        variant: "destructive"}),
      return;
    }
    try {
      const { translations: translated_text, error } = await translate_content (
        source_text,
        'general',
        source_language);
;
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: t ('translation.translation_failed'),
          description: error,
          variant: "destructive"}),
        return;
      }
      // Update edited translations with auto - translated content;
      setEditedTranslations ({
        ...edited_translations;
        [key]: translated_text;
      });
;
      toast ({
        title: t ('translation.translation_success'),
        description: t ('translation.content_translated')});
    } catch (error) {
      console.error (`Error translating key ${key}:`, error);
      toast ({
        title: t ('translation.translation_failed'),
        description: error instanceof Error ? error.message : t ('translation.unknown_error'),
        variant: "destructive"});
    }
  }
;
  const handle_cancel = () =>: any {
    setEditingKey (null);
  }
;
  const handle_change = (lang: SupportedLanguage, key: string, value: string) =>: any {
    setEditedTranslations ({
      ...edited_translations;
      [key]: {
        ...edited_translations[key],
        [lang]: value;
      }
    });
  }
;
  const getMissingLanguages = (key: string): SupportedLanguage[] => {
    return supported_languages;
      .map (lang => lang.code);
      .filter (lang => !translations[lang]?.[key]);
  }
;
  return (
    <>;
      <SEO;
        title={t ('translation.manager_title')}
        description={t ('translation.manager_description')}
      />;
      <Header />;
      <main className={`container mx - auto px-${is_mobile ? '4' : '6'} py - 8`}>;
        <Card>;
          <CardHeader>;
            <CardTitle className="text - 2xl">{t ('translation.manager_title')}</CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className="space - y-6">;
              {/* Search and filter */}
              <div className="flex flex - col sm:flex - row gap - 4">;
                <div className="relative flex - 1">;
                  <Search className="absolute left - 2.5 top - 2.5 h - 4 w - 4 text - muted - foreground" />;
                  <Input;
                    type="search";
                    placeholder={t ('translation.search_placeholder')}
                    className="pl - 8";
                    value={search_query}
                    on_change={(e) => setSearchQuery (e.target.value)}
                  />;
                </div>;
                <Tabs;
                  default_value="translation";
                  value={selected_namespace}
                  onValueChange={(value) => setSelectedNamespace (value)}
                  className="w - full sm:w - auto";
                >;
                  <TabsList>;
                    <TabsTrigger value="translation">General</TabsTrigger>;
                    <TabsTrigger value="admin">Admin</TabsTrigger>;
                  </TabsList>;
                </Tabs>;
              </div>;
              {/* Translations table */}
              <div className="border rounded - md">;
                <div className="grid grid - cols-[1fr_2fr] sm:grid - cols-[1fr_2fr_auto] border - b">;
                  <div className="p - 3 font - medium">{t ('translation.key')}</div>;
                  <div className="p - 3 font - medium">{t ('translation.translations')}</div>;
                  <div className="hidden sm:block p - 3 font - medium">{t ('translation.actions')}</div>;
                </div>;
                {filtered_keys.length === 0 ? (
                  <div className="p - 6 text - center text - muted - foreground">;
                    {t ('translation.no_results')}
                  </div>) : (
                  <div className="divide - y">;
                    {filtered_keys.map ((key) => (
                      <div key={key} className="grid grid - cols-[1fr_2fr] sm:grid - cols-[1fr_2fr_auto]">;
                        <div className="p - 3 break - words">{key}</div>;
                        {editing_key === key ? (
                          <div className="p - 3">;
                            <div className="space - y-4">;
                              {supported_languages.map ((lang) => (
                                <div key={lang.code}>;
                                  <div className="flex items - center gap - 2 mb - 1">;
                                    <span>{lang.flag}</span>;
                                    <span>{lang.name}</span>;
                                  </div>;
                                  {edited_translations[key][lang.code]?.includes ('\n') ||;
                                  edited_translations[key][lang.code]?.length > 100 ? (
                                    <Textarea;
                                      value={edited_translations[key][lang.code] || ''}
                                      on_change={(e) => handle_change (lang.code, key, e.target.value)}
                                      dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                                      className="min - h-20";
                                    />) : (
                                    <Input;
                                      value={edited_translations[key][lang.code] || ''}
                                      on_change={(e) => handle_change (lang.code, key, e.target.value)}
                                      dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                                    />)}
                                </div>))}
                            </div>;
                            <div className="flex gap - 2 mt - 4">;
                              <Button;
                                size="sm";
                                on_click={() => handle_save (key)}
                                disabled={is_saving}
                              >;
                                {is_saving ? (
                                  <>;
                                    <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
                                    {t ('general.saving')}
                                  </>) : (
                                  <>;
                                    <Check className="mr - 2 h - 4 w - 4" />;
                                    {t ('general.save')}
                                  </>)}
                              </Button>;
                              <Button;
                                size="sm";
                                variant="outline";
                                on_click={handle_cancel}
                              >;
                                {t ('general.cancel')}
                              </Button>;
                              <Button;
                                size="sm";
                                variant="secondary";
                                on_click={() => handleTranslateKey (key)}
                                disabled={is_translating}
                              >;
                                {is_translating ? (
                                  <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />) : (
                                  <Globe className="mr - 2 h - 4 w - 4" />)}
                                {t ('translation.auto_translate')}
                              </Button>;
                            </div>;
                          </div>) : (
                          <div className="p - 3">;
                            <div className="space - y-2">;
                              {supported_languages.slice (0, 2).map ((lang) => (
                                <div key={lang.code} className="flex items - start gap - 2">;
                                  <span className="mt - 0.5 flex - shrink - 0">{lang.flag}</span>;
                                  <span;
                                    className={`${!translations[lang.code]?.[key] ? 'text - zion - purple italic' : ''}`}
                                    dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                                  >;
                                    {translations[lang.code]?.[key] || t ('translation.missing')}
                                  </span>;
                                </div>))}
                              {getMissingLanguages (key).length > 0 && (
                                <div className="flex items - center gap - 2 text - sm text - zion - purple">;
                                  <AlertTriangle className="h - 4 w - 4" />;
                                  {t ('translation.missing_languages', { count: getMissingLanguages (key).length })}
                                </div>)}
                            </div>;
                          </div>)}
                        <div className="p - 3 flex items - center justify - end">;
                          {editing_key === key ? null : (
                            <Button;
                              size="sm";
                              variant="outline";
                              on_click={() => handle_edit (key)}
                            >;
                              {t ('translation.edit')}
                            </Button>)}
                        </div>;
                      </div>))}
                  </div>)}

<<<<<<< HEAD
                            >
                              {t('translation.edit')}
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </main>;
      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD
    </>;
  ),; export default function TranslationManager () {
  const {
  t, i18n 
}= useTranslation ();
const isMobile = useIsMobile ();
const {
  supportedLanguages 
}= useLanguage ();
const {
  translateContent, isTranslating 
}= useTranslationService ();
}return acc;
}, {
  
}as Record<string string>) 
};
currentTranslations[lang.code] = flattenObject (res) 
}
;

});
setTranslations (currentTranslations);
//Get all unique keys across all languages setFilteredKeys (Array.from (allKeys) ) 
}, [selectedNamespace, i18n]);
//Filter keys based on search query useEffect ( () => {
  if (!searchQuery.trim () ) {
  //Get all unique keys across all languages //Search in keys and values Object.values (translations) .forEach (langTranslations => {
  Object.entries (langTranslations) .forEach ( ([key, value]) => {
  if (key.toLowerCase () .includes (query) || (typeof value === 'string' && value.toLowerCase () .includes (query) ) ) {
  setFilteredKeys ([...new Set (filtered) ]) 
}, [searchQuery, translations]);
//In a real application, you would save these to your backend setTimeout ( () => {
  //Update translations with edited values 
}updatedTranslations[lang.code][key] = editedTranslations[key][lang.code] 
});
setTranslations (updatedTranslations);
setEditingKey (null);
setIsSaving (false);
}, 1000);
};
}try {
  const {
  translations: translatedText, error 
}= await translateContent (sourceText;
'general';
sourceLanguage);
return;
}//Update edited translations with auto-translated content 
}
};
const getMissingLanguages = (key: string) : SupportedLanguage[] => {
  return supportedLanguages .map (lang => lang.code) return (<> <SEO title= {
  t ('translation.manager title') 
}description= {
  t ('translation.manager description') 
}/> <Header /> <main className= {
  `container mx-auto px-$ {
  isMobile ? '4' : '6' 
}py-8` 
}> <Card> <CardHeader> <CardTitle className="text-2xl"> {
  t ('translation.manager title') 
}</CardTitle> </CardHeader> <CardContent> <div className="space-y-6"> {
  /* Search and filter */ 
}<div className="flex flex-col sm:flex-row gap-4"> <div className="relative flex-1"> <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> <Input > <TabsList> <TabsTrigger value="translation" >General</TabsTrigger> <TabsTrigger value="admin">Admin</TabsTrigger> </TabsList> </Tabs> </div> {
  /* Translations table */ 
}<div className="border rounded-md"> <div className="grid grid-cols-[1fr 2fr] sm:grid-cols-[1fr 2fr auto] border-b"> <div className="p-3 font-medium"> {
  t ('translation.key') 
}</div> <div className="p-3 font-medium"> {
  t ('translation.translations') 
}</div> <div className="hidden sm:block p-3 font-medium"> {
  t ('translation.actions') 
}</div> </div> {
  filteredKeys.length === 0 ? (<div className="p-6 text-center text-muted-foreground"> {
  t ('translation.no results') 
}</div>) : (<div className="divide-y"> {
  filteredKeys.map ( (key) => (<div key= {
  key 
}className="grid grid-cols-[1fr 2fr] sm:grid-cols-[1fr 2fr auto]"> <div className="p-3 break-words"> {
  key 
}</div> {
  editingKey === key ? (<div className="p-3"> <div className="space-y-4"> {
  supportedLanguages.map ( (lang) => (<div key= {
  lang.code 
}> <div className="flex items-center gap-2 mb-1"> <span> {
  lang.flag 
}</span> <span> {
  lang.name 
}</span> </div> {
  editedTranslations[key][lang.code]?.includes ('\n') || editedTranslations[key][lang.code]?.length > 100 ? (<Textarea value= {
  editedTranslations[key][lang.code] || '' 
}onChange= {
  (e) => handleChange (lang.code, key, e.target.value) 
}dir= {
  lang.code === 'ar'? 'rtl': 'ltr' 
}className="min-h-20" />) : (<Input value= {
  editedTranslations[key][lang.code] || '' 
}onChange= {
  (e) => handleChange (lang.code, key, e.target.value) 
}dir= {
  lang.code === 'ar'? 'rtl': 'ltr' 
}/>) 
}</div>) ) 
}</div> <div className="flex gap-2 mt-4" > <Button > {
  isSaving ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> {
  t ('general.saving') 
}</>) : (<> </>) 
}</Button> <Button > {
  t ('general.cancel') 
}</Button> <Button > {
  isTranslating ? (<Loader2 className="mr-2 h-4 w-4 animate-spin" />) : (<Globe className="mr-2 h-4 w-4" />) 
}{
  t ('translation.auto translate') 
}</Button> </div> </div>) : (<div className="p-3"> <div className="space-y-2"> {
  supportedLanguages.slice (0, 2) .map ( (lang) => (<div key= {
  lang.code 
}className="flex items-start gap-2"> <span className="mt-0.5 flex-shrink-0"> {
  lang.flag 
}</span> <span className= {
  `$ {
  !translations[lang.code]?.[key] ? 'text-zion-purple italic': '' 
}` 
}dir= {
  lang.code === 'ar'? 'rtl': 'ltr' 
}> {
  translations[lang.code]?.[key] || t ('translation.missing') 
}</span> </div>) ) 
}{
  getMissingLanguages (key) .length > 0 && (<div className="flex items-center gap-2 text-sm text-zion-purple"> <AlertTriangle className="h-4 w-4" /> {
  t ('translation.missing languages', {
  count: getMissingLanguages (key) .length 
}) 
}</div>) 
}</div> </div>) 
}onClick= {
  () => handleEdit (key) 
}> {
  t ('translation.edit') 
}</Button>) 
}</div> </div>) ) 
}</div>) 
}</div> </div> </CardContent> </Card> </main> <Footer /> </>) 
}
    </>;
  );
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </>);
}

=======
;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
