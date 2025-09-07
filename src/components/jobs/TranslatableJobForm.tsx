<<<<<<< HEAD

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Globe } from 'lucide-react'
import { useTranslation } from "react-i18next";
import { useTranslationService } from "@/hooks/useTranslationService";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";
import { toast } from "@/components/ui/use-toast";
import {logErrorToProduction} from '@/utils/productionLogger';
interface TranslatableJobFormProps {
=======
<<<<<<< HEAD:src/components/jobs/TranslatableJobForm.tsx

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Globe } from 'lucide-react'import { useTranslation } from "react-i18next"
import { useTranslationService } from "@/hooks/useTranslationService"
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext"
import { toast } from "@/components/ui/use-toast"
import {logErrorToProduction} from '@/utils/productionLogger'
interface TranslatableJobFormProps {
  onSubmit: (formData: any) => void
  isSubmitting?: boolean }

export function TranslatableJobForm({ onSubmit, isSubmitting = false }: TranslatableJobFormProps) {
  const { t } = useTranslation()
  const { translateContent, isTranslating } = useTranslationService()
  const { supportedLanguages, currentLanguage } = useLanguage()
  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage)
  // Form fields with translations
  const [title, setTitle] = useState<Record<SupportedLanguage, string>>({
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
import { toast } from "@/components/ui/use-toast";
import {logErrorToProduction} from '@/utils/productionLogger';
interface TranslatableJobFormProps {

  onSubmit: (formData: any) => void
  isSubmitting?: boolean }
export function TranslatableJobForm({ onSubmit, isSubmitting = false }: TranslatableJobFormProps) {
  const { t } = useTranslation()
  const { translateContent, isTranslating } = useTranslationService()
  const { supportedLanguages, currentLanguage } = useLanguage()
  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage)
  // Form fields with translations
  const [title, setTitle] = useState<Record<SupportedLanguage, string>>({
    en: ""
    es: ""
    fr: ""
    pt: ""
  const [title, setTitle] = useState<Record<SupportedLanguage string>>({
    en: "",
    es: "",
    fr: "",
    pt: "",
      return
        title: t('translation.translation_success')
        description: t('translation.content_translated')
      })
    } catch (error) {
      logErrorToProduction('Error translating ${field}:', { data: error })
      toast({
        title: t('translation.translation_failed')
        description: error instanceof Error ? error.message : t('translation.unknown_error')
        variant: "destructive"
      })
    ar: ""}),
  
  const [description, setDescription] = useState<Record<SupportedLanguage string>>({
  const [title, setTitle] = useState<Record<SupportedLanguage string>>({
    en: "",
    es: "",
    fr: "",
    pt: "",
    ar: ""
  })
    ar: ""
  })
    let sourceLanguage: SupportedLanguage = 'en'
    let content = ''
        content = title[lang]
        sourceLanguage = lang
        break } else if (field === 'description' && description[lang]) {
        content = description[lang]
        sourceLanguage = lang
        break
      } else if (field === 'requirements' && requirements[lang]) {
        content = requirements[lang]
        sourceLanguage = lang
        break
        title: t('translation.no_content')
        description: t('translation.add_content_first')
        variant: "destructive"
      })
      return;
          variant: "destructive"
      })
      return
        title: t('translation.translation_success')
      return;
        title: t('translation.translation_success'),
        description: t('translation.content_translated')
      })
    } catch (error) {
      logErrorToProduction('Error translating ${field}:', { data: error })
      toast({
        title: t('translation.translation_failed')
        description: error instanceof Error ? error.message : t('translation.unknown_error')
        variant: "destructive"
      })
import { toast } from "@/components/ui/use-toast",
import {logErrorToProduction} from '@/utils/productionLogger',
interface TranslatableJobFormProps {
>>>>>>> merged-prs-20250907-203621
  onSubmit: (formData: any) => void,
  isSubmitting?: boolean
}

export function TranslatableJobForm({ onSubmit, isSubmitting = false }: TranslatableJobFormProps) {
<<<<<<< HEAD
  const { t } = useTranslation();
  const { translateContent, isTranslating } = useTranslationService();
  const { supportedLanguages, currentLanguage } = useLanguage();
  
  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage);
  
  // Form fields with translations
  const [title, setTitle] = useState<Record<SupportedLanguage, string>>({
=======
  const { t } = useTranslation(),
  const { translateContent, isTranslating } = useTranslationService(),
  const { supportedLanguages, currentLanguage } = useLanguage(),
  
  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage),
  
  // Form fields with translations
  const [title, setTitle] = useState<Record<SupportedLanguage string>>({
    en: "",
    es: "",
    fr: "",
    pt: "",
    }
  }
  // Ensure all translations are available
  const ensureAllTranslations = async () => {
    const promises = [];
};
  );
};
    ar: ""}),
  
  const [description, setDescription] = useState<Record<SupportedLanguage string>>({
>>>>>>> merged-prs-20250907-203621
    en: "",
    es: "",
    fr: "",
    pt: "",
    ar: ""}),
  
<<<<<<< HEAD
  const [description, setDescription] = useState<Record<SupportedLanguage, string>>({
=======
  const [requirements, setRequirements] = useState<Record<SupportedLanguage string>>({
>>>>>>> merged-prs-20250907-203621
    en: "",
    es: "",
    fr: "",
    pt: "",
    ar: ""}),
  
<<<<<<< HEAD
  const [requirements, setRequirements] = useState<Record<SupportedLanguage, string>>({
    en: "",
    es: "",
    fr: "",
    pt: "",
    ar: ""}),
  
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
=======
  const [budget, setBudget] = useState(""),
  const [deadline, setDeadline] = useState(""),
>>>>>>> merged-prs-20250907-203621
  
  // Handle text changes
  const handleTitleChange = (value: string) => {
    setTitle({ ...title, [activeTab]: value })
<<<<<<< HEAD
  };
  
  const handleDescriptionChange = (value: string) => {
    setDescription({ ...description, [activeTab]: value })
  };
  
  const handleRequirementsChange = (value: string) => {
    setRequirements({ ...requirements, [activeTab]: value })
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Complete any missing translations with auto-translation
    await ensureAllTranslations();
    
    onSubmit({
      title;
      description;
      requirements;
      budget;
      deadline})
  };
  
  // Auto translate content when language tab changes
  const handleTabChange = async (tab: string) => {
    const selectedLanguage = tab as SupportedLanguage;
    if (selectedLanguage !== activeTab) {
      setActiveTab(selectedLanguage)
    }
  };
  
  // Auto translate function
  const autoTranslate = async (field: 'title' | 'description' | 'requirements') => {
    let sourceLanguage: SupportedLanguage = 'en',
    let content = '';
    
    // Find first non-empty content to translate
    for (const lang of supportedLanguages.map(l => l.code)) {
      if (field === 'title' && title[lang]) {
        content = title[lang];
        sourceLanguage = lang;
        break
      } else if (field === 'description' && description[lang]) {
        content = description[lang];
        sourceLanguage = lang;
        break
      } else if (field === 'requirements' && requirements[lang]) {
        content = requirements[lang];
        sourceLanguage = lang;
        break
=======
  },
  
  const handleDescriptionChange = (value: string) => {
    setDescription({ ...description, [activeTab]: value })
  },
  
  const handleRequirementsChange = (value: string) => {
    setRequirements({ ...requirements, [activeTab]: value })
  },
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    
    // Complete any missing translations with auto-translation
    await ensureAllTranslations(),
    
    onSubmit({
      title,
      description,
      requirements,
      budget,
      deadline})
  },
  
  // Auto translate content when language tab changes
  const handleTabChange = async (tab: string) => {
    const selectedLanguage = tab as SupportedLanguage,
    if (selectedLanguage !== activeTab) {
      setActiveTab(selectedLanguage)
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent } from "@/components/ui/card",;
import { Loader2, Globe } from 'lucide-react';
import { useTranslation } from "react-i18next",;
import { useTranslationService } from "@/hooks/useTranslationService",;
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext",;
import { toast } from "@/components/ui/use-toast",;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface TranslatableJobFormProps {;
  onSubmit: (formData: any) => void,;
  isSubmitting?: boolean;
}
;
export function TranslatableJobForm({ onSubmit, isSubmitting = false }: TranslatableJobFormProps) {;
  const { t } = useTranslation(),;
  const { translateContent, isTranslating } = useTranslationService(),;
  const { supportedLanguages, currentLanguage } = useLanguage(),;
  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage),;
  // Form fields with translations;
  const [title, setTitle] = useState<Record<SupportedLanguage string>>({;
    en: "",;
    es: "",;
    fr: "",;
    pt: "",;
    ar: ""}),;
  const [description, setDescription] = useState<Record<SupportedLanguage string>>({;
    en: "",;
    es: "",;
    fr: "",;
    pt: "",;
    ar: ""}),;
  const [requirements, setRequirements] = useState<Record<SupportedLanguage string>>({;
    en: "",;
    es: "",;
    fr: "",;
    pt: "",;
    ar: ""}),;
  const [budget, setBudget] = useState(""),;
  const [deadline, setDeadline] = useState(""),;
  // Handle text changes;
  const handleTitleChange = (value: string) => {;
    setTitle({ ...title, [activeTab]: value });
  },;
  const handleDescriptionChange = (value: string) => {;
    setDescription({ ...description, [activeTab]: value });
  },;
  const handleRequirementsChange = (value: string) => {;
    setRequirements({ ...requirements, [activeTab]: value });
  },;
  // Handle form submission;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    // Complete any missing translations with auto-translation;
    await ensureAllTranslations(),;
    onSubmit({;
      title,;
      description,;
      requirements,;
      budget,;
      deadline});
  },;
  // Auto translate content when language tab changes;
  const handleTabChange = async (tab: string) => {;
    const selectedLanguage = tab as SupportedLanguage,;
    if (selectedLanguage !== activeTab) {;
      setActiveTab(selectedLanguage);
    }
  },;
  // Auto translate function;
  const autoTranslate = async (field: 'title' | 'description' | 'requirements') => {;
    let sourceLanguage: SupportedLanguage = 'en',;
    let content = '',;
    // Find first non-empty content to translate;
    for (const lang of supportedLanguages.map(l => l.code)) {;
      if (field === 'title' && title[lang]) {;
        content = title[lang],;
        sourceLanguage = lang,;
        break;
      } else if (field === 'description' && description[lang]) {;
        content = description[lang],;
        sourceLanguage = lang,;
        break;
      } else if (field === 'requirements' && requirements[lang]) {;
        content = requirements[lang],;
        sourceLanguage = lang,;
        break;
>>>>>>> merged-prs-20250907-203621
      }
    }
    
    if (!content) {
      toast({
        title: t('translation.no_content'),
        description: t('translation.add_content_first'),
        variant: "destructive"}),
      return
    }
    
    try {
<<<<<<< HEAD
      const { translations, error } = await translateContent(content, 'job', sourceLanguage);
=======
      const { translations, error } = await translateContent(content, 'job', sourceLanguage),
>>>>>>> merged-prs-20250907-203621
      
      if (error) {
        toast({
          title: t('translation.translation_failed'),
          description: error,
          variant: "destructive"}),
        return
<<<<<<< HEAD
      }
      
      if (field === 'title') {
        setTitle(translations)
      } else if (field === 'description') {
        setDescription(translations)
      } else if (field === 'requirements') {
        setRequirements(translations)
=======
;
    if (!content) {;
      toast({;
        title: t('translation.no_content'),;
        description: t('translation.add_content_first'),;
        variant: "destructive"}),;
      return;
    }
;
    try {;
      const { translations, error } = await translateContent(content, 'job', sourceLanguage),;
      if (error) {;
        toast({;
          title: t('translation.translation_failed'),;
          description: error,;
          variant: "destructive"}),;
        return;
      }
;
      if (field === 'title') {;
        setTitle(translations);
      } else if (field === 'description') {;
        setDescription(translations);
      } else if (field === 'requirements') {;
        setRequirements(translations);
>>>>>>> merged-prs-20250907-203621
      }
      
      toast({
        title: t('translation.translation_success'),
        description: t('translation.content_translated')})
    } catch (error) {
      logErrorToProduction('Error translating ${field}:', { data: error }),
      toast({
        title: t('translation.translation_failed'),
        description: error instanceof Error ? error.message : t('translation.unknown_error'),
        variant: "destructive"})
<<<<<<< HEAD
    }
  };
  
  // Ensure all translations are available
  const ensureAllTranslations = async () => {
    const promises = [];
    
    if (!title.en && !title.es && !title.fr && !title.pt && !title.ar) return;
    if (!description.en && !description.es && !description.fr && !description.pt && !description.ar) return;
    
    // Title translations
    if (Object.values(title).some(val => val) && Object.values(title).some(val => !val)) {
      promises.push(autoTranslate('title'))
    }
    
    // Description translations
    if (Object.values(description).some(val => val) && Object.values(description).some(val => !val)) {
      promises.push(autoTranslate('description'))
    }
    
    // Requirements translations
    if (Object.values(requirements).some(val => val) && Object.values(requirements).some(val => !val)) {
      promises.push(autoTranslate('requirements'))
    }
    
    if (promises.length) {
      await Promise.all(promises)
    }
  };
  
=======
;
      toast({;
        title: t('translation.translation_success'),;
        description: t('translation.content_translated')});
    } catch (error) {;
      logErrorToProduction('Error translating ${field}:', { data: error }),;
      toast({;
        title: t('translation.translation_failed'),;
        description: error instanceof Error ? error.message : t('translation.unknown_error'),;
        variant: "destructive"});
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36:backup-problematic-files/src/components/jobs/TranslatableJobForm.tsx
}
  }
  // Ensure all translations are available;
  const ensureAllTranslations = async () => {
<<<<<<< HEAD:src/components/jobs/TranslatableJobForm.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36:backup-problematic-files/src/components/jobs/TranslatableJobForm.tsx
interface TranslatableJobFormProps {;
  onSubmit: (formData: any) => void;
  isSubmitting?: boolean;}
export function TranslatableJobForm(): any ({ onSubmit, isSubmitting = false }: TranslatableJobFormProps) {;
  const { t } = useTranslation();
  const { translateContent, isTranslating } = useTranslationService();
  const { supportedLanguages, currentLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage);
  // Form fields with translations;
  const [title, setTitle] = useState<Record<SupportedLanguage, string>>({;
    en: "",;
    es: "",;
    fr: "",;
    pt: "",;
    ar: "";
  });
    ar: "";
  });
    let sourceLanguage: SupportedLanguage = 'en';
    let content = '';
        content = title[lang];
        sourceLanguage = lang;
        break;      } else if (field === 'description' && description[lang]) {;
        content = description[lang];
        sourceLanguage = lang;
        break;
      } else if (field === 'requirements' && requirements[lang]) {;
        content = requirements[lang];
        sourceLanguage = lang;
        break;
        title: t('translation && translation.no_content'),;
        description: t('translation && translation.add_content_first'),;
        variant: "destructive";
      });
      return;
          variant: "destructive";
      });
      return;
        title: t('translation && translation.translation_success'),;
        description: t('translation && translation.content_translated');
      });
    } catch (error) {;
      logErrorToProduction('Error translating ${field}:', { data: error });
      toast({;
  }
  // Ensure all translations are available
  const ensureAllTranslations = async () => {
    const promises = []

}
  );

}


        title: t('translation && translation.translation_failed'),;
        description: error instanceof Error ? error && error.message : t('translation && translation.unknown_error'),;
        variant: "destructive";
      });
    }
  };
  // Ensure all translations are available;
  const ensureAllTranslations = async () => {;
    const promises = [];
}
  );
<<<<<<< HEAD:src/components/jobs/TranslatableJobForm.tsx
}
=======

}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36:backup-problematic-files/src/components/jobs/TranslatableJobForm.tsx
export function TranslatableJobForm({ onSubmit, isSubmitting;
>>>>>>> merged-prs-20250907-203621
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-6">{t('jobs.post_job_title')}</h1>
        <p className="text-zion-slate-light mb-6">
          {t('jobs.post_job_description')}
        </p>
      </div>
<<<<<<< HEAD
      
=======
>>>>>>> merged-prs-20250907-203621
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="title" className="text-lg font-medium">
              {t('jobs.job_title')}
            </label>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('title')}
              disabled={isTranslating || (!title.en && !title.es && !title.fr && !title.pt && !title.ar)}
              className="flex items-center gap-1"
            >
              {isTranslating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Globe className="h-4 w-4" />
              )}
              {t('translation.auto_translate')}
            </Button>
          </div>
<<<<<<< HEAD
          
=======
>>>>>>> merged-prs-20250907-203621
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full">
              {supportedLanguages.map((lang) => (
                <TabsTrigger key={lang.code} value={lang.code} className="flex-1">
                  <span className="mr-1">{lang.flag}</span> {lang.name}
                </TabsTrigger>
              ))}
            </TabsList>
<<<<<<< HEAD
            
=======
>>>>>>> merged-prs-20250907-203621
            {supportedLanguages.map((lang) => (
              <TabsContent key={lang.code} value={lang.code} className="mt-2">
                <div className="space-y-1">
                  <Input
                    id={`title-${lang.code}`}
                    value={title[lang.code] || ''}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full"
                    dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
<<<<<<< HEAD
        
=======
>>>>>>> merged-prs-20250907-203621
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="description" className="text-lg font-medium">
              {t('jobs.job_description')}
            </label>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('description')}
              disabled={isTranslating || (!description.en && !description.es && !description.fr && !description.pt && !description.ar)}
              className="flex items-center gap-1"
            >
              {isTranslating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Globe className="h-4 w-4" />
              )}
              {t('translation.auto_translate')}
            </Button>
          </div>
<<<<<<< HEAD
          
=======
>>>>>>> merged-prs-20250907-203621
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full">
              {supportedLanguages.map((lang) => (
                <TabsTrigger key={lang.code} value={lang.code} className="flex-1">
                  <span className="mr-1">{lang.flag}</span> {lang.name}
                </TabsTrigger>
              ))}
            </TabsList>
<<<<<<< HEAD
            
=======
>>>>>>> merged-prs-20250907-203621
            {supportedLanguages.map((lang) => (
              <TabsContent key={lang.code} value={lang.code} className="mt-2">
                <Textarea
                  id={`description-${lang.code}`}
                  value={description[lang.code] || ''}
                  onChange={(e) => handleDescriptionChange(e.target.value)}
                  className="min-h-32 w-full"
                  dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
<<<<<<< HEAD
        
=======
>>>>>>> merged-prs-20250907-203621
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="requirements" className="text-lg font-medium">
              {t('jobs.skills_required')}
            </label>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('requirements')}
              disabled={isTranslating || (!requirements.en && !requirements.es && !requirements.fr && !requirements.pt && !requirements.ar)}
              className="flex items-center gap-1"
            >
              {isTranslating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Globe className="h-4 w-4" />
              )}
              {t('translation.auto_translate')}
            </Button>
          </div>
<<<<<<< HEAD
          
=======
>>>>>>> merged-prs-20250907-203621
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full">
              {supportedLanguages.map((lang) => (
                <TabsTrigger key={lang.code} value={lang.code} className="flex-1">
                  <span className="mr-1">{lang.flag}</span> {lang.name}
                </TabsTrigger>
              ))}
            </TabsList>
<<<<<<< HEAD
            
=======
>>>>>>> merged-prs-20250907-203621
            {supportedLanguages.map((lang) => (
              <TabsContent key={lang.code} value={lang.code} className="mt-2">
                <Textarea
                  id={`requirements-${lang.code}`}
                  value={requirements[lang.code] || ''}
                  onChange={(e) => handleRequirementsChange(e.target.value)}
                  className="min-h-24 w-full"
                  dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
<<<<<<< HEAD
        
=======
>>>>>>> merged-prs-20250907-203621
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="budget" className="text-lg font-medium">
              {t('jobs.budget')}
            </label>
            <Input
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="$1000 - $2000"
              className="w-full"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="deadline" className="text-lg font-medium">
              {t('jobs.deadline')}
            </label>
            <Input
              id="deadline"
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      </div>
<<<<<<< HEAD
      
=======
>>>>>>> merged-prs-20250907-203621
      <div className="pt-4">
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan"
          disabled={isSubmitting || isTranslating}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t('jobs.submitting')}
            </>
          ) : (
            t('jobs.post_job_button')
          )}
<<<<<<< HEAD
=======
<<<<<<< HEAD:src/components/jobs/TranslatableJobForm.tsx
>>>>>>> merged-prs-20250907-203621
        </Button>
      </div>
    </form>
  )
}
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36:backup-problematic-files/src/components/jobs/TranslatableJobForm.tsx

        </Button>;
      </div>;
    </form>;
  );
}
<<<<<<< HEAD:src/components/jobs/TranslatableJobForm.tsx
        </Button>;
      </div>;
    </form>;
  );
}
;
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36:backup-problematic-files/src/components/jobs/TranslatableJobForm.tsx
>>>>>>> merged-prs-20250907-203621
