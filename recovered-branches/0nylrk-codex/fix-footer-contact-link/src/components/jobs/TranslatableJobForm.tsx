import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent } from "@/components/ui/card",
import { Loader2, Globe } from "lucide-react",
import { useTranslation } from "react-i18next",
import { useTranslationService } from "@/hooks/useTranslationService",



interface TranslatableJobFormProps {

  // Auto translate content when language tab changes
  const handleTabChange = async (tab: SupportedLanguage) => {
    if (tab !== activeTab) {
      setActiveTab(tab)



import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent} from "@/components/ui/card";
import {Loader2, Globe} from "lucide-react";
import {useTranslation} from "react-i18next";
import {useTranslationService} from "@/hooks/useTranslationService";
import {useLanguage, SupportedLanguage} from "@/context/LanguageContext";
import {toast} from "@/components/ui/use-toast";


import React, { useState } from "react",;

import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent } from "@/components/ui/card",;
import { Loader2, Globe } from "lucide-react",;
import { useTranslation } from "react-i18next",;
import { useTranslationService } from "@/hooks/useTranslationService",;
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext",;
import { toast } from "@/components/ui/use-toast",;



interface TranslatableJobFormProps {;
  onSubmit: (formData: any) => void,;
  isSubmitting?: boolean;
}



    en: "",;
    es: "",;
    pt: "",;
    ar: ""}),;


  const [description, setDescription] = useState<Record<SupportedLanguage, string>>({;

    en: "",;
    es: "",;
    pt: "",;
    ar: ""}),;


  const [requirements, setRequirements] = useState<Record<SupportedLanguage, string>>({;

    en: "",;
    es: "",;
    pt: "",;
    ar: ""}),;


  const [deadline, setDeadline] = useState("");

  // Handle text changes;
  const handleTitleChange = (value: string) => {;
    setTitle({ ...title, [activeTab]: value });
  };

  const handleDescriptionChange = (value: string) => {;
    setDescription({ ...description, [activeTab]: value });
  };

  const handleRequirementsChange = (value: string) => {;
    setRequirements({ ...requirements, [activeTab]: value });
  };

  // Handle form submission;
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();

    // Complete any missing translations with auto-translation;
    await ensureAllTranslations();

    onSubmit({;
      title;
      description;
      requirements;
      budget,;
      deadline});
  };



  // Auto translate content when language tab changes;
  const handleTabChange = async (tab: SupportedLanguage) => {;
    if (tab !== activeTab) {;
      setActiveTab(tab);
    }



      }
    }
    
    if (!content) {
      toast({
        title: t('translation.no_content')
        description: t('translation.add_content_first')
        variant: "destructive"})
      return
    }
    try {




      }
    }

'
      const { translations, error } = await translateContent(content, 'job', sourceLanguage),



      if (error) {

        toast({

          title: t('translation.translation_failed')

          description: error
          variant: "destructive"})
        return


    if (!content) {;
      toast({;'
        title: t('translation.no_content'),;'
        description: t('translation.add_content_first'),;"
        variant: "destructive"}),;
      return;
    }
;
    try {;'
      const { translations, error } = await translateContent(content, 'job', sourceLanguage),;
      if (error) {;
        toast({;'
          title: t('translation.translation_failed'),;
          description: error,;"
          variant: "destructive"}),;
        return;

      }
      if (field === 'title') {
        setTitle(translations)
      } else if (field === 'description') {
        setDescription(translations)
      } else if (field === 'requirements') {
        setRequirements(translations)
      }

      toast({
        title: t('translation.translation_success')

        description: t('translation.content_translated')})
    } catch (error) {}
      console.error(`Error translating ${field}:`, error),

      toast({'
        title: t('translation.translation_failed')'
        description: error instanceof Error ? error.message : t('translation.unknown_error')"
        variant: "destructive"})

    }
  }
  // Ensure all translations are available;
  const ensureAllTranslations = async () => {}
    const promises = [];
    if (!title.en && !title.es && !title.pt && !title.ar) return;
    if (!description.en && !description.es && !description.pt && !description.ar) return;

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
      if (field === 'title') {
        setTitle(translations)
      } else if (field === 'description') {
        setDescription(translations)
      } else if (field === 'requirements') {
        setRequirements(translations)
      }



      toast({
        title: t('translation.translation_success')
        description: t('translation.content_translated')})
    } catch (error) {

      console.error(`Error translating ${field}:`, error);

      toast({
        title: t('translation.translation_failed')
        description: error instanceof Error ? error.message : t('translation.unknown_error')
        variant: "destructive"})



;
      toast({;
        title: t('translation.translation_success'),;
        description: t('translation.content_translated')});
    } catch (error) {;
      console.error(`Error translating ${field}:`, error),;
      toast({;
        title: t('translation.translation_failed'),;
        description: error instanceof Error ? error.message : t('translation.unknown_error'),;
        variant: "destructive"});
    }
  },;
  // Ensure all translations are available;
  const ensureAllTranslations = async () => {;
    const promises = [],;
    if (!title.en && !title.es && !title.pt && !title.ar) return,;
    if (!description.en && !description.es && !description.pt && !description.ar) return;
    // Title translations;
    if (Object.values(title).some(val => val) && Object.values(title).some(val => !val)) {;
      promises.push(autoTranslate('title'));




    }
    // Description translations;
    if (Object.values(description).some(val => val) && Object.values(description).some(val => !val)) {'
      promises.push(autoTranslate('description'))
    }
    // Requirements translations;
    if (Object.values(requirements).some(val => val) && Object.values(requirements).some(val => !val)) {'
      promises.push(autoTranslate('requirements'))
    }
    if (promises.length) {}
      await Promise.all(promises)
    }





  return (

    <form onSubmit={handleSubmit} className="space-y-6">
      <div>'"
        <h1 className="text-2xl font-bold mb-6">{t('jobs.post_job_title')}</h1>"
        <p className="text-zion-slate-light mb-6">'
          {t('jobs.post_job_description')}
        </p>
      </div>"
      <div className="space-y-4">"
        <div className="space-y-2">"
          <div className="flex justify-between items-center">"
            <label htmlFor="title" className="text-lg font-medium">'
              {t('jobs.job_title')}
            </label>



    if (!content) {;

        variant: "destructive"}),;
      return;
    }

    try {;
      const { translations, error } = await translateContent(content, 'job', sourceLanguage);

      if (error) {;

          variant: "destructive"}),;
        return;

      }

      if (field === 'title') {;
        setTitle(translations);'
      } else if (field === 'description') {;
        setDescription(translations);'
      } else if (field === 'requirements') {;
        setRequirements(translations);
      }

      toast({;
        title: t('translation && translation.translation_success'),;
        description: t('translation && translation.content_translated')});
    } catch (error) {;
      console && console.error(`Error translating ${field}:`, error);
      toast({;
        title: t('translation && translation.translation_failed'),;
        description: error instanceof Error ? error && error.message : t('translation && translation.unknown_error'),;
        variant: "destructive"});
    }
  };
  // Ensure all translations are available;
  const ensureAllTranslations = async () => {;
    const promises = [];
    if (!title && title.en && !title && title.es && !title && title.pt && !title && title.ar) return;
    if (!description && description.en && !description && description.es && !description && description.pt && !description && description.ar) return;

    // Title translations;
    if (Object && Object.values(title).some(val => val) && Object && Object.values(title).some(val => !val)) {;'
      promises && promises.push(autoTranslate('title'));
    }
    // Description translations;
    if (Object && Object.values(description).some(val => val) && Object && Object.values(description).some(val => !val)) {;'
      promises && promises.push(autoTranslate('description'));
    }
    // Requirements translations;
    if (Object && Object.values(requirements).some(val => val) && Object && Object.values(requirements).some(val => !val)) {;'
      promises && promises.push(autoTranslate('requirements'));
    }
    if (promises && promises.length) {;
      await Promise && Promise.all(promises);
    }
  };

  return (

    <form onSubmit={handleSubmit} className="space-y-6">;
      <div>;'"
        <h1 className="text-2xl font-bold mb-6">{t('jobs && jobs.post_job_title')}</h1>;"
        <p className="text-zion-slate-light mb-6">;'
          {t('jobs && jobs.post_job_description')}
        </p>;
      </div>;

import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent } from "@/components/ui/card",;
import { Loader2, Globe } from "lucide-react",;
import { useTranslation } from "react-i18next",;
import { useTranslationService } from "@/hooks/useTranslationService",;
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext",;
import { toast } from "@/components/ui/use-toast",;
;
interface TranslatableJobFormProps {;
  onSubmit:(formData:any) => void,;
  isSubmitting?:boolean;
}
;
export function TranslatableJobForm({ onSubmit, isSubmitting = false } TranslatableJobFormProps) {;
  const { t } = useTranslation(),;
  const { translateContent, isTranslating } = useTranslationService(),;
  const { supportedLanguages, currentLanguage } = useLanguage(),;
  ;
  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage),;
  ;
  // Form fields with translations;
  const [title, setTitle] = useState<Record<SupportedLanguage string>>({;
    en:"",;
    es:"",;
    pt:"",;
    ar:""}),;
  ;
  const [description, setDescription] = useState<Record<SupportedLanguage string>>({;
    en:"",;
    es:"",;
    pt:"",;
    ar:""}),;
  ;
  const [requirements, setRequirements] = useState<Record<SupportedLanguage string>>({;
    en:"",;
    es:"",;
    pt:"",;
    ar:""}),;
  ;
  const [budget, setBudget] = useState(""),;
  const [deadline, setDeadline] = useState(""),;
  ;
  // Handle text changes;
  const handleTitleChange = (value:string) => {;
    setTitle({ ...title, [activeTab]:value }),;
  },;
  ;
  const handleDescriptionChange = (value:string) => {;
    setDescription({ ...description, [activeTab]:value }),;
  },;
  ;
  const handleRequirementsChange = (value:string) => {;
    setRequirements({ ...requirements, [activeTab]:value }),;
  },;
  ;
  // Handle form submission;
  const handleSubmit = async (e:React.FormEvent) => {;
    e.preventDefault(),;
    ;
    // Complete any missing translations with auto-translation;
    await ensureAllTranslations(),;
    ;
    onSubmit({;
      title,;
      description,;
      requirements,;
      budget,;
      deadline}),;
  },;
  ;
  // Auto translate content when language tab changes;
  const handleTabChange = async (tab:SupportedLanguage) => {;
    if (tab !== activeTab) {;
      setActiveTab(tab);
    }
  },;
  ;
  // Auto translate function;
  const autoTranslate = async (field:'title' | 'description' | 'requirements') => {;
    let sourceLanguage:SupportedLanguage = 'en',;
    let content = '',;
    ;
    // Find first non-empty content to translate;
    for (const lang of supportedLanguages.map(l => l.code)) {;
      if (field === 'title' && title[lang]) {;
        content = title[lang],;
        sourceLanguage = lang,;
        break;
      } else if (field === 'description' && description[lang]) {;
        content = description[lang],;
        sourceLanguage = lang,;
        break,;
      } else if (field === 'requirements' && requirements[lang]) {;
        content = requirements[lang],;
        sourceLanguage = lang,;
        break,;
      }
    }
    ;
    if (!content) {;
      toast({;
        title:t('translation.no_content'),;
        description:t('translation.add_content_first'),;
        variant:"destructive"}),;
      return,;
    }
    ;
    try {;
      const { translations, error } = await translateContent(content, 'job', sourceLanguage),;
      ;
      if (error) {;
        toast({;
          title:t('translation.translation_failed'),;
          description:error,;
          variant:"destructive"}),;
        return,;
      }
      ;
      if (field === 'title') {;
        setTitle(translations),;
      } else if (field === 'description') {;
        setDescription(translations),;
      } else if (field === 'requirements') {;
        setRequirements(translations),;
      }
      ;
      toast({;
        title:t('translation.translation_success'),;
        description:t('translation.content_translated')}),;
    } catch (error) {;
      console.error(`Error translating ${field} `, error),;
      toast({;
        title:t('translation.translation_failed'),;
        description:error instanceof Error ? error.message :t('translation.unknown_error'),;
        variant:"destructive"}),;
    }
  },;
  ;
  // Ensure all translations are available;
  const ensureAllTranslations = async () => {;
    const promises = [],;
    ;
    if (!title.en && !title.es && !title.pt && !title.ar) return,;
    if (!description.en && !description.es && !description.pt && !description.ar) return,;
    ;
    // Title translations;
    if (Object.values(title).some(val => val) && Object.values(title).some(val => !val)) {;
      promises.push(autoTranslate('title')),;
    }
    ;
    // Description translations;
    if (Object.values(description).some(val => val) && Object.values(description).some(val => !val)) {;
      promises.push(autoTranslate('description')),;
    }
    ;
    // Requirements translations;
    if (Object.values(requirements).some(val => val) && Object.values(requirements).some(val => !val)) {;
      promises.push(autoTranslate('requirements')),;
    }
    ;
    if (promises.length) {;
      await Promise.all(promises),;
    }
  },;
  ;
  return (;
    <form onSubmit={handleSubmit} className="space-y-6">;
      <div>;
        <h1 className="text-2xl font-bold mb-6">{t('jobs.post_job_title')}</h1>;
        <p className="text-zion-slate-light mb-6">;
          {t('jobs.post_job_description')}
        </p>;
      </div>;
      ;
      <div className="space-y-4">;
        <div className="space-y-2">;
          <div className="flex justify-between items-center">;
            <label htmlFor="title" className="text-lg font-medium">;




            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('title')}


              {isTranslating ? (;
                <Loader2 className="h-4 w-4 animate-spin" />;

              ) : (;
                <Globe className="h-4 w-4" />;
              )}
              {t('translation && translation.auto_translate')}
            </Button>;
          </div>;

          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">;
            <TabsList className="w-full">;
              {supportedLanguages && supportedLanguages.map((lang) => (;
                <TabsTrigger key={lang && lang.code} value={lang && lang.code} className="flex-1">;
                  <span className="mr-1">{lang && lang.flag}</span> {lang && lang.name}
                </TabsTrigger>;
              ))}
            </TabsList>;

            {supportedLanguages && supportedLanguages.map((lang) => (;
              <TabsContent key={lang && lang.code} value={lang && lang.code} className="mt-2">;
                <div className="space-y-1">;
                  <Input
                    id={`title-${lang && lang.code}`}
                    value={title[lang && lang.code] || ''}
                    onChange={(e) => handleTitleChange(e && e.target.value)}
                    placeholder={t('jobs && jobs.title_placeholder')}
                    className="w-full";
                    dir={lang && lang.code === 'ar' ? 'rtl' : 'ltr'}

                  />;
                </div>;
) :(;
                <Globe className="h-4 w-4" />;
              )}
              {t('translation.auto_translate')}
            </Button>;
          </div>;
          ;
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">;
            <TabsList className="w-full">;
              {supportedLanguages.map((lang) => (;
                <TabsTrigger key={lang.code} value={lang.code} className="flex-1">;
                  <span className="mr-1">{lang.flag}</span> {lang.name}
                </TabsTrigger>;
              ))}
            </TabsList>;
            ;
            {supportedLanguages.map((lang) => (;
              <TabsContent key={lang.code} value={lang.code} className="mt-2">;
                <Textarea;                  id={`description-${lang.code}`}
                  value={description[lang.code] || ''}
                  onChange={(e) => handleDescriptionChange(e.target.value)}
                  placeholder={t('jobs.description_placeholder')}
                  className="min-h-32 w-full";
                  dir={lang.code === 'ar' ? 'rtl' :'ltr'}
                />;
              </TabsContent>;
                </div>;              </TabsContent>;
            ))}
          </Tabs>;
        </div>;




