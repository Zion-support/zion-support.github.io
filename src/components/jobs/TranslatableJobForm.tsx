
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent } from "@/components/ui/card",
import { Loader2, Globe } from 'lucide-react'
import { useTranslation } from "react-i18next",
import { useTranslationService } from "@/hooks/useTranslationService",
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext",
import { toast } from "@/components/ui/use-toast",
import {logErrorToProduction} from '@/utils/productionLogger',interface TranslatableJobFormProps {
  onSubmit: (formData: any) => void,
  isSubmitting?: boolean
}

export function TranslatableJobForm({ onSubmit, isSubmitting = false }: TranslatableJobFormProps) {
  const { t } = useTranslation(),
  const { translateContent, isTranslating } = useTranslationService(),
  const { supportedLanguages, currentLanguage } = useLanguage(),
import React, {useState} from "react";

interface TranslatableJobFormProps {onSubmit: (formData: unknown) => void;
  isSubmitting?: boolean}

export function TranslatableJobForm(_{onSubmit, isSubmitting = false}: TranslatableJobFormProps) {const { t} = useTranslation();
  const {translateContent, isTranslating} = useTranslationService();
  const {supportedLanguages, currentLanguage} = useLanguage();
  
  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage),
  
  // Form fields with translations,
const [title, setTitle] = useState<Record<SupportedLanguage string>>({
    en: "",
    es: "",
    fr: "",
    pt: "",
    ar: ""}),
  
  const [description, setDescription] = useState<Record<SupportedLanguage string>>({
    en: "",
    es: "",
    fr: "",
    pt: "",
    ar: ""}),
  
  const [requirements, setRequirements] = useState<Record<SupportedLanguage string>>({
    en: "",
    es: "",
    fr: "",
    pt: "",
    ar: ""}),
  
  const [budget, setBudget] = useState(""),
  const [deadline, setDeadline] = useState(""),  
  const [budget, setBudget] = useState("&quot;);
  const [deadline, setDeadline] = useState("&quot;);
  
  // Handle text changes,
const handleTitleChange = (value: string) => {
    setTitle({ ...title, [activeTab]: value })
  },
  
  const handleDescriptionChange = (value: string) => {
    setDescription({ ...description, [activeTab]: value })
  },
  
  const handleRequirementsChange = (value: string) => {
    setRequirements({ ...requirements, [activeTab]: value })
  },
  
  // Handle form submission,
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),    
    // Complete any missing translations with auto-translation,
await ensureAllTranslations(),
    
    onSubmit({
      title,
      description,
      requirements,
      budget,
      deadline})
  },
  
  // Auto translate content when language tab changes,
const handleTabChange = async (tab: string) => {
    const selectedLanguage = tab as SupportedLanguage,
    if (selectedLanguage !== activeTab) {
      setActiveTab(selectedLanguage)
    }
  },
  
  // Auto translate function,
const autoTranslate = async (field: 'title' | 'description' | 'requirements') => {
    let sourceLanguage: SupportedLanguage = 'en',
    let content = '',    
    // Find first non-empty content to translate,
for (const lang of supportedLanguages.map(l => l.code)) {
      if (field === 'title' && title[lang]) {
        content = title[lang],
        sourceLanguage = lang,
        break
      } else if (field === 'description' && description[lang]) {
        content = description[lang],
        sourceLanguage = lang,
        break
      } else if (field === 'requirements' && requirements[lang]) {
        content = requirements[lang],
        sourceLanguage = lang,
        break
      }
    }
    
    if (!content) {
      toast({
        title: t('translation.nocontent'),
        description: t('translation.addcontent_first'),
        variant: "destructive"}),
      return      return
    }
    
    try {
      const { translations, error } = await translateContent(content, 'job', sourceLanguage),
      
      if (error) {
        toast({
          title: t('translation.translationfailed'),
          description: error,
          variant: "destructive"}),
        return        return
      }
      
      if (field === 'title') {
        setTitle(translations)
      } else if (field === 'description') {
        setDescription(translations)
      } else if (field === 'requirements') {
        setRequirements(translations)
      }
      
      toast({
        title: t('translation.translationsuccess'),
        description: t('translation.contenttranslated')})
    } catch (error) {
      logErrorToProduction('Error translating ${field}:', { data: error }),
      toast({
        title: t('translation.translationfailed'),
        description: error instanceof Error ? error.message : t('translation.unknownerror'),
        variant: "destructive"})      if (field === 'title') {setTitle(translations)} else if (field === 'description') {setDescription(translations)} else if (field === 'requirements') {setRequirements(translations)}
      
      toast({title: t('translation.translationsuccess'), description: t('translation.contenttranslated')})
    } catch (error) {logErrorToProduction('Error translating ${field}:', {data: error});
      toast({title: t('translation.translationfailed'), description: error instanceof Error ? error.message : t('translation.unknownerror'), variant: "destructive"})
    }
  },
  
  // Ensure all translations are available,
const ensureAllTranslations = async () => {
    const promises = [],    
    if (!title.en && !title.es && !title.fr && !title.pt && !title.ar) return,
    if (!description.en && !description.es && !description.fr && !description.pt && !description.ar) return,
    
    // Title translations,
if (Object.values(title).some(val => val) && Object.values(title).some(val => !val)) {
      promises.push(autoTranslate('title'))
    }
    
    // Description translations,
if (Object.values(description).some(val => val) && Object.values(description).some(val => !val)) {
      promises.push(autoTranslate('description'))
    }
    
    // Requirements translations,
if (Object.values(requirements).some(val => val) && Object.values(requirements).some(val => !val)) {
      promises.push(autoTranslate('requirements'))
    }
    
    if (promises.length) {
      await Promise.all(promises)
    }
  },  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-6">{t('jobs.postjob_title')}</h1>
        <p className="text-zion-slate-light mb-6">
          {t('jobs.postjob_description')}
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center&quot;>
            <label htmlFor=&quot;title" className="text-lg font-medium&quot;>
              {t('jobs.jobtitle')}
            </label>
            <Button,
type=&quot;button&quot;
              size=&quot;sm&quot;
              variant=&quot;outline"
              onClick={() => autoTranslate('title')}
              disabled={isTranslating || (!title.en && !title.es && !title.fr && !title.pt && !title.ar)}              className="flex items-center gap-1"
            >
              {isTranslating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Globe className="h-4 w-4" />
              )}
              {t('translation.autotranslate')}
            </Button>
          </div>
          
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full">
              {supportedLanguages.map(_(lang) => (
                <TabsTrigger key={lang.code} value={lang.code} className="flex-1">
                  <span className="mr-1">{lang.flag}</span> {lang.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {supportedLanguages.map(_(lang) => (_<TabsContent key={lang.code} value={lang.code} className="mt-2">
                <div className="space-y-1">
                  <Input,
id={_`title-${lang.code}`}
                    value={title[lang.code] || ''}
                    onChange={_(e) => handleTitleChange(e.target.value)}
                    className="w-full"
                    dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center&quot;>
            <label htmlFor=&quot;description" className="text-lg font-medium&quot;>
              {t('jobs.jobdescription')}
            </label>
            <Button,
type=&quot;button&quot;
              size=&quot;sm&quot;
              variant=&quot;outline"
              onClick={() => autoTranslate('description')}
              disabled={isTranslating || (!description.en && !description.es && !description.fr && !description.pt && !description.ar)}              className="flex items-center gap-1"
            >
              {isTranslating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Globe className="h-4 w-4" />
              )}
              {t('translation.autotranslate')}
            </Button>
          </div>
          
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full">
              {supportedLanguages.map(_(lang) => (
                <TabsTrigger key={lang.code} value={lang.code} className="flex-1">
                  <span className="mr-1">{lang.flag}</span> {lang.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {supportedLanguages.map(_(lang) => (_<TabsContent key={lang.code} value={lang.code} className="mt-2">
                <Textarea,
id={_`description-${lang.code}`}
                  value={description[lang.code] || ''}
                  onChange={_(e) => handleDescriptionChange(e.target.value)}
                  className="min-h-32 w-full"
                  dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center&quot;>
            <label htmlFor=&quot;requirements" className="text-lg font-medium&quot;>
              {t('jobs.skillsrequired')}
            </label>
            <Button,
type=&quot;button&quot;
              size=&quot;sm&quot;
              variant=&quot;outline"
              onClick={() => autoTranslate('requirements')}
              disabled={isTranslating || (!requirements.en && !requirements.es && !requirements.fr && !requirements.pt && !requirements.ar)}              className="flex items-center gap-1"
            >
              {isTranslating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Globe className="h-4 w-4" />
              )}
              {t('translation.autotranslate')}
            </Button>
          </div>
          
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full">
              {supportedLanguages.map(_(lang) => (
                <TabsTrigger key={lang.code} value={lang.code} className="flex-1">
                  <span className="mr-1">{lang.flag}</span> {lang.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {supportedLanguages.map(_(lang) => (_<TabsContent key={lang.code} value={lang.code} className="mt-2">
                <Textarea,
id={_`requirements-${lang.code}`}
                  value={requirements[lang.code] || ''}
                  onChange={_(e) => handleRequirementsChange(e.target.value)}
                  className="min-h-24 w-full"
                  dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1&quot;>
            <label htmlFor=&quot;budget" className="text-lg font-medium&quot;>
              {t('jobs.budget')}
            </label>
            <Input,
id=&quot;budget&quot;
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder=&quot;$1000 - $2000"
              className="w-full"
            />
          </div>
          <div className="space-y-1&quot;>
            <label htmlFor=&quot;deadline" className="text-lg font-medium&quot;>
              {t('jobs.deadline')}
            </label>
            <Input,
id=&quot;deadline&quot;
              type=&quot;date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}              className="w-full"
            />
          </div>
        </div>
      </div>
      
      <div className="pt-4&quot;>
        <Button,
type=&quot;submit"
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan"
          disabled={isSubmitting || isTranslating}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t('jobs.submitting')}
            </>
          ) : (
            t('jobs.postjob_button')
          )}
        </Button>
      </div>
    </form>
  )
}
