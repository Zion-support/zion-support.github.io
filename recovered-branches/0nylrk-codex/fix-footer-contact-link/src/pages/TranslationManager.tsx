

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
  const { t, i18n } = useTranslation();
  const isMobile = null;

  return (
    <>
      <SEO 
        title={t('translation.manager_title')} 
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
              {/* Search and filter */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder={t('translation.search_placeholder')}
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
                                  {editedTranslations[key][lang.code]?.includes('\n') || 
                                   editedTranslations[key][lang.code]?.length > 100 ? (
                                    <Textarea
                                      value={editedTranslations[key][lang.code] || ''}
                                      onChange={(e) => handleChange(lang.code, key, e.target.value)}
                                      dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                                      className="min-h-20"
                                    />
                                  ) : (
                                    <Input
                                      value={editedTranslations[key][lang.code] || ''}
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
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                onClick={handleCancel}
                              >
                                {t('general.cancel')}
                              </Button>
                              <Button
                                size="sm"
                                variant="secondary"
                                onClick={() => handleTranslateKey(key)}
                                disabled={isTranslating}
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
                                    {translations[lang.code]?.[key] || t('translation.missing')}
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
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEdit(key)}
                            >
                              {t('translation.edit')}
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
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
;