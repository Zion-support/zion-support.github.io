
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

  const { t, i18n } = useTranslation();

  const isMobile = useIsMobile();
  const { supportedLanguages } = useLanguage();
  const { translateContent, isTranslating } = useTranslationService();



  const [selectedNamespace, setSelectedNamespace] = useState("translation");
  const [searchQuery, setSearchQuery] = useState("");
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [filteredKeys, setFilteredKeys] = useState<string[]>([]);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editedTranslations, setEditedTranslations] = useState<Record<string, Record<SupportedLanguage, string>>>({});
  const [isSaving, setIsSaving] = useState(false);
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
      const res = i18n.getResourceBundle(lang.code, selectedNamespace);
      if (res) {
        // Flatten nested objects for easier management
        const flattenObject = (obj: any, prefix = '') => {
          return Object.keys(obj).reduce((acc, key) => {
            const pre = prefix.length ? `${prefix}.` : '',
            if (typeof obj[key] === 'object' && obj[key] !== null) {
              Object.assign(acc, flattenObject(obj[key], `${pre}${key}`))
            } else {
              acc[`${pre}${key}`] = obj[key]


=======
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

            } else {;
              acc[`${pre}${key}`] = obj[key];
            }
            return acc;


    setFilteredKeys(Array && Array.from(allKeys));
  }, [selectedNamespace, i18n]);

  // Filter keys based on search query;
  useEffect(() => {;
    if (!searchQuery && searchQuery.trim()) {;
      // Get all unique keys across all languages;

      const allKeys = new Set<string>();
      Object && Object.values(translations).forEach(langTranslations => {;
        Object && Object.keys(langTranslations).forEach(key => allKeys && allKeys.add(key));
      });
      setFilteredKeys(Array && Array.from(allKeys));
      return;
    }

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



          updatedTranslations[lang.code] = {}
        }
        updatedTranslations[lang.code][key] = editedTranslations[key][lang.code]
      }),
      
      setTranslations(updatedTranslations),
      setEditingKey(null),
      setIsSaving(false),
      
      toast({
        title: t("translation.saved")
        description: t("translation.changes_saved")})
    }, 1000)
  }
  const handleTranslateKey = async (key: string) => {
    // Find first non-empty translation to use as source
    let sourceLanguage: SupportedLanguage = 'en'
    let sourceText = '';
  },
  
  const handleTranslateKey = async (key: string) => {
    // Find first non-empty translation to use as source
    let sourceLanguage: SupportedLanguage = 'en',
    let sourceText = '',
    
    for (const lang of supportedLanguages.map(l => l.code)) {
      if (translations[lang]?.[key]) {
=======

    const query = searchQuery && searchQuery.toLowerCase().trim();
    const filtered: string[] = [],;

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

    setFilteredKeys([...new Set(filtered)]);
  }, [searchQuery, translations]);

  const handleEdit = (key: string) => {;
    setEditingKey(key),;

    // Initialize edited translations for this key;
    const initialEdits: Record<SupportedLanguage, string> = {} as Record<SupportedLanguage, string>;
    supportedLanguages && supportedLanguages.forEach(lang => {;
      initialEdits[lang && lang.code] = translations[lang && lang.code]?.[key] || '';
    });

    setEditedTranslations({;
      ...editedTranslations;
      [key]: initialEdits;
    });
  };

  const handleSave = (key: string) => {;
    setIsSaving(true),;

    // In a real application, you would save these to your backend;
    setTimeout(() => {;
      // Update translations with edited values;
      const updatedTranslations = { ...translations };

      supportedLanguages && supportedLanguages.forEach(lang => {;
        if (!updatedTranslations[lang && lang.code]) {;
          updatedTranslations[lang && lang.code] = {}
        }
        updatedTranslations[lang && lang.code][key] = editedTranslations[key][lang && lang.code];
      });

      setTranslations(updatedTranslations);
      setEditingKey(null);
      setIsSaving(false);

      toast({;
        title: t("translation && translation.saved"),;
        description: t("translation && translation.changes_saved")});
    }, 1000);
  };

  const handleTranslateKey = async (key: string) => {;
    // Find first non-empty translation to use as source;
    let sourceLanguage: SupportedLanguage = 'en',;
    let sourceText = '';

    for (const lang of supportedLanguages && supportedLanguages.map(l => l && l.code)) {;
      if (translations[lang]?.[key]) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        sourceLanguage = lang;
        sourceText = translations[lang][key];
        break;
      }
    }
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
      );
      ),
      
      if (error) {
        toast({
          title: t('translation.translation_failed')
          description: error
          variant: "destructive"})
        return
      }
      // Update edited translations with auto-translated content
      setEditedTranslations({


    if (!sourceText) {;
      toast({;
        title: t('translation && translation.no_content'),;
        description: t('translation && translation.add_content_first'),;
        variant: "destructive"}),;
      return;
    }

    try {;
      const { translations: translatedText, error } = await translateContent(;
        sourceText, ;
        'general', ;
        sourceLanguage;
      );

      if (error) {;
        toast({;
          title: t('translation && translation.translation_failed'),;
          description: error,;
          variant: "destructive"}),;
        return;
      }

      // Update edited translations with auto-translated content;
      setEditedTranslations({;

        ...editedTranslations;
        [key]: translatedText;
      });

        ...editedTranslations,
        [key]: translatedText
      });
      }),
      
      toast({
        title: t('translation.translation_success')
        description: t('translation.content_translated')})
    } catch (error) {
      console.error(`Error translating key ${key}:`, error);
      toast({
        title: t('translation.translation_failed')
        description: error instanceof Error ? error.message : t('translation.unknown_error')
        variant: "destructive"})
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


      <SEO 
        title={t('translation.manager_title')} 

=======
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======

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

  const handleCancel = () => {;
    setEditingKey(null);
  };

  const handleChange = (lang: SupportedLanguage, key: string, value: string) => {;
    setEditedTranslations({;
      ...editedTranslations;
      [key]: {;
        ...editedTranslations[key],;
        [lang]: value;
      }
    });
  };

  const getMissingLanguages = (key: string): SupportedLanguage[] => {;
    return supportedLanguages;
      .map(lang => lang && lang.code);
      .filter(lang => !translations[lang]?.[key]);
  };

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
              


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
                                  )}
                                </div>
                              ))}
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Button
                                size="sm"
                              <Button 
                                size="sm" 
                                onClick={() => handleSave(key)}
                                disabled={isSaving}
                              >;
                                {isSaving ? (;
                                  <>;
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                                    {t('general && general.saving')}
                                  </>;
                                ) : (;
                                  <>;
                                    <Check className="mr-2 h-4 w-4" />;
                                    {t('general && general.save')}
                                  </>;
                                )}
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

                                size="sm" 
                                variant="outline" 
                                onClick={handleCancel}>;
                                {t('general && general.cancel')}
                              </Button>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                              <Button
                                size="sm"
                                variant="secondary"
                                onClick={() => handleTranslateKey(key)}
                                disabled={isTranslating}
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
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEdit(key)}
                            >;
                              {t('translation && translation.edit')}
                            </Button>;
                          )}
                        </div>;
                      </div>;
                    ))}
                  </div>;
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </main>;
      <Footer />;

    </>);
}

=======
;
