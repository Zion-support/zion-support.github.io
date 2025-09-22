
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

                      <div key={key} className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr_auto]">;
                        <div className="p-3 break-words">{key}</div>;
                        {editingKey === key ? (;
                          <div className="p-3">;
                            <div className="space-y-4">;

                                </div>;
                              ))}
                            </div>;
                            <div className="flex gap-2 mt-4">;

                                onClick={() => handleSave(key)}
                                disabled={isSaving}
                              >;
                                {isSaving ? (;
                                  <>;
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />;

                                onClick={() => handleTranslateKey(key)}
                                disabled={isTranslating}
                              >;
                                {isTranslating ? (;
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;

                                  </span>;
                                </div>;
                              ))}
                              {getMissingLanguages(key).length > 0 && (;
                                <div className="flex items-center gap-2 text-sm text-zion-purple">;
                                  <AlertTriangle className="h-4 w-4" />;

                            </div>;
                          </div>;
                        )}
                        <div className="p-3 flex items-center justify-end">;

                            </Button>;
                          )}
                        </div>;
                      </div>;
                    ))}
                  </div>;
                )}

}