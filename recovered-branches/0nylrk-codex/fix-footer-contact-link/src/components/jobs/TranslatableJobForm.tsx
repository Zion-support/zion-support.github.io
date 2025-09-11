
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface TranslatableJobFormProps {

  onSubmit: (formData: any) => void
  isSubmitting?: boolean
}





  // Auto translate content when language tab changes
  const handleTabChange = async (tab: SupportedLanguage) => {
    if (tab !== activeTab) {
      setActiveTab(tab)

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent } from "@/components/ui/card",
import { Loader2, Globe } from "lucide-react",
import { useTranslation } from "react-i18next",
import { useTranslationService } from "@/hooks/useTranslationService",
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";
import { toast } from "@/components/ui/use-toast";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext",
import { toast } from "@/components/ui/use-toast",
interface TranslatableJobFormProps {

  onSubmit: (formData: any) => void
  isSubmitting?: boolean
}

export function TranslatableJobForm({ onSubmit, isSubmitting = false }: TranslatableJobFormProps) {;
  const { t } = useTranslation();
  const { translateContent, isTranslating } = useTranslationService();
  const { supportedLanguages, currentLanguage } = useLanguage();
export function TranslatableJobForm({ onSubmit, isSubmitting = false }: TranslatableJobFormProps) {
  const { t } = useTranslation();
  const { translateContent, isTranslating } = useTranslationService();
  const { supportedLanguages, currentLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage);
  // Form fields with translations
  const [title, setTitle] = useState<Record<SupportedLanguage, string>>({
    en: ""
    es: ""
    pt: ""
    ar: ""})
  const [description, setDescription] = useState<Record<SupportedLanguage, string>>({
    en: ""
    es: ""
    pt: ""
    ar: ""})
  const [requirements, setRequirements] = useState<Record<SupportedLanguage, string>>({
    en: ""
    es: ""
    pt: ""
    ar: ""})
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  // Handle text changes
  const handleTitleChange = (value: string) => {
    setTitle({ ...title, [activeTab]: value })
  }
  const handleDescriptionChange = (value: string) => {
    setDescription({ ...description, [activeTab]: value })
  }
  const handleRequirementsChange = (value: string) => {
    setRequirements({ ...requirements, [activeTab]: value })
  }
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Complete any missing translations with auto-translation
    await ensureAllTranslations();
    onSubmit({
      title;
      description;
      requirements;
      budget
      deadline})
  }
  const { t } = useTranslation(),
  const { translateContent, isTranslating } = useTranslationService(),
  const { supportedLanguages, currentLanguage } = useLanguage(),
  
  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage),
  
  // Form fields with translations
  const [title, setTitle] = useState<Record<SupportedLanguage string>>({
    en: "",
    es: "",
    pt: "",
    ar: ""}),
  
  const [description, setDescription] = useState<Record<SupportedLanguage string>>({
    en: "",
    es: "",
    pt: "",
    ar: ""}),
  
  const [requirements, setRequirements] = useState<Record<SupportedLanguage string>>({
    en: "",
    es: "",
    pt: "",
    ar: ""}),
  
  const [budget, setBudget] = useState(""),
  const [deadline, setDeadline] = useState(""),
  
  // Handle text changes
  const handleTitleChange = (value: string) => {
    setTitle({ ...title, [activeTab]: value })
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
  const handleTabChange = async (tab: SupportedLanguage) => {
    if (tab !== activeTab) {
      setActiveTab(tab)


interface TranslatableJobFormProps {

  onSubmit: (formData: any) => void
  isSubmitting?: boolean
}





  // Auto translate content when language tab changes
  const handleTabChange = async (tab: SupportedLanguage) => {
    if (tab !== activeTab) {
      setActiveTab(tab)



    }
  }
  // Auto translate function
  const autoTranslate = async (field: 'title' | 'description' | 'requirements') => {
    let sourceLanguage: SupportedLanguage = 'en'
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
      }
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface TranslatableJobFormProps {;
  onSubmit: (formData: any) => void,;
  isSubmitting?: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD
;
export function TranslatableJobForm({ onSubmit, isSubmitting = false }: TranslatableJobFormProps) {;
  const { t } = useTranslation(),;
  const { translateContent, isTranslating } = useTranslationService(),;
  const { supportedLanguages, currentLanguage } = useLanguage(),;
  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage),;
  // Form fields with translations;
  const [title, setTitle] = useState<Record<SupportedLanguage string>>({;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function TranslatableJobForm(): any ({ onSubmit, isSubmitting = false }: TranslatableJobFormProps) {;
  const { t } = useTranslation();
  const { translateContent, isTranslating } = useTranslationService();
  const { supportedLanguages, currentLanguage } = useLanguage();

  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage);

  // Form fields with translations;
  const [title, setTitle] = useState<Record<SupportedLanguage, string>>({;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    en: "",;
    es: "",;
    pt: "",;
    ar: ""}),;
<<<<<<< HEAD
<<<<<<< HEAD
  const [description, setDescription] = useState<Record<SupportedLanguage string>>({;
=======

  const [description, setDescription] = useState<Record<SupportedLanguage, string>>({;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  const [description, setDescription] = useState<Record<SupportedLanguage, string>>({;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    en: "",;
    es: "",;
    pt: "",;
    ar: ""}),;
<<<<<<< HEAD
<<<<<<< HEAD
  const [requirements, setRequirements] = useState<Record<SupportedLanguage string>>({;
=======

  const [requirements, setRequirements] = useState<Record<SupportedLanguage, string>>({;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  const [requirements, setRequirements] = useState<Record<SupportedLanguage, string>>({;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    en: "",;
    es: "",;
    pt: "",;
    ar: ""}),;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const [budget, setBudget] = useState("");
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Auto translate content when language tab changes;
  const handleTabChange = async (tab: SupportedLanguage) => {;
    if (tab !== activeTab) {;
      setActiveTab(tab);
    }
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };

  // Auto translate function;
  const autoTranslate = async (field: 'title' | 'description' | 'requirements') => {;
    let sourceLanguage: SupportedLanguage = 'en',;
    let content = '';

    // Find first non-empty content to translate;
    for (const lang of supportedLanguages && supportedLanguages.map(l => l && l.code)) {;
      if (field === 'title' && title[lang]) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        content = title[lang];
        sourceLanguage = lang;
        break;
      } else if (field === 'description' && description[lang]) {;
        content = description[lang];
        sourceLanguage = lang;
        break;
      } else if (field === 'requirements' && requirements[lang]) {;
        content = requirements[lang];
        sourceLanguage = lang;
        break;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



      }
    }


      const { translations, error } = await translateContent(content, 'job', sourceLanguage),
      


<<<<<<< HEAD
      const { translations, error } = await translateContent(content, 'job', sourceLanguage);
      const { translations, error } = await translateContent(content, 'job', sourceLanguage),
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
      const { translations, error } = await translateContent(content, 'job', sourceLanguage);
      const { translations, error } = await translateContent(content, 'job', sourceLanguage),
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (error) {
        toast({
          title: t('translation.translation_failed')
          description: error
          variant: "destructive"})
        return
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      if (field === 'title') {
        setTitle(translations)
      } else if (field === 'description') {
        setDescription(translations)
      } else if (field === 'requirements') {
        setRequirements(translations)
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


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
      console.error(`Error translating ${field}:`, error),
=======
      console.error(`Error translating ${field}:`, error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      console.error(`Error translating ${field}:`, error);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: t('translation.translation_failed')
        description: error instanceof Error ? error.message : t('translation.unknown_error')
        variant: "destructive"})
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
  // Ensure all translations are available
  const ensureAllTranslations = async () => {
    const promises = [];
    if (!title.en && !title.es && !title.pt && !title.ar) return;
    if (!description.en && !description.es && !description.pt && !description.ar) return;
    // Title translations
    if (Object.values(title).some(val => val) && Object.values(title).some(val => !val)) {
      promises.push(autoTranslate('title'))
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  },
  };
  },
<<<<<<< HEAD
  
  
=======


  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  },
=======
  };
  },


  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-6">{t('jobs.post_job_title')}</h1>
        <p className="text-zion-slate-light mb-6">
          {t('jobs.post_job_description')}
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="title" className="text-lg font-medium">
              {t('jobs.job_title')}
            </label>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    if (!content) {;
      toast({;
        title: t('translation && translation.no_content'),;
        description: t('translation && translation.add_content_first'),;
        variant: "destructive"}),;
      return;
    }
<<<<<<< HEAD
    try {;
      const { translations, error } = await translateContent(content, 'job', sourceLanguage);
=======

    try {;
      const { translations, error } = await translateContent(content, 'job', sourceLanguage);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (error) {;
        toast({;
          title: t('translation && translation.translation_failed'),;
          description: error,;
          variant: "destructive"}),;
        return;
      }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (field === 'title') {;
        setTitle(translations);
      } else if (field === 'description') {;
        setDescription(translations);
      } else if (field === 'requirements') {;
        setRequirements(translations);
      }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  // Ensure all translations are available;
  const ensureAllTranslations = async () => {;
    const promises = [];
    if (!title && title.en && !title && title.es && !title && title.pt && !title && title.ar) return;
    if (!description && description.en && !description && description.es && !description && description.pt && !description && description.ar) return;
=======

  // Ensure all translations are available;
  const ensureAllTranslations = async () => {;
    const promises = [];

    if (!title && title.en && !title && title.es && !title && title.pt && !title && title.ar) return;
    if (!description && description.en && !description && description.es && !description && description.pt && !description && description.ar) return;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Title translations;
    if (Object && Object.values(title).some(val => val) && Object && Object.values(title).some(val => !val)) {;
      promises && promises.push(autoTranslate('title'));
    }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Description translations;
    if (Object && Object.values(description).some(val => val) && Object && Object.values(description).some(val => !val)) {;
      promises && promises.push(autoTranslate('description'));
    }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Requirements translations;
    if (Object && Object.values(requirements).some(val => val) && Object && Object.values(requirements).some(val => !val)) {;
      promises && promises.push(autoTranslate('requirements'));
    }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (promises && promises.length) {;
      await Promise && Promise.all(promises);
    }
  };
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <form onSubmit={handleSubmit} className="space-y-6">;
      <div>;
        <h1 className="text-2xl font-bold mb-6">{t('jobs && jobs.post_job_title')}</h1>;
        <p className="text-zion-slate-light mb-6">;
          {t('jobs && jobs.post_job_description')}
        </p>;
      </div>;

<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="space-y-4">;
        <div className="space-y-2">;
          <div className="flex justify-between items-center">;
            <label htmlFor="title" className="text-lg font-medium">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
              {t('jobs && jobs.job_title')}
            </label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              {t('jobs && jobs.job_title')}
            </label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('title')}
<<<<<<< HEAD
<<<<<<< HEAD
              disabled={isTranslating || (!title && title.en && !title && title.es && !title && title.pt && !title && title.ar)}
              {t('jobs.job_title')}
            </label>;
            <Button;
              type="button";
              size="sm";
              variant="outline";
              onClick={() => autoTranslate('title')}
              disabled={isTranslating || (!title.en && !title.es && !title.pt && !title.ar)}
=======

              disabled={isTranslating || (!title && title.en && !title && title.es && !title && title.pt && !title && title.ar)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              disabled={isTranslating || (!title && title.en && !title && title.es && !title && title.pt && !title && title.ar)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="flex items-center gap-1";
            >;
              {isTranslating ? (;
                <Loader2 className="h-4 w-4 animate-spin" />;
<<<<<<< HEAD
<<<<<<< HEAD
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
                <div className="space-y-1">;
                  <Input;                    id={`title-${lang.code}`}
                    value={title[lang.code] || ''}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder={t('jobs.title_placeholder')}
                    className="w-full";
                    dir={lang.code === 'ar' ? 'rtl' :'ltr'}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  />;
                </div>;
              </TabsContent>;
            ))}
          </Tabs>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
              disabled={isTranslating |(!title.en && !title.es && !title.pt && !title.ar)}
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
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full">
              {supportedLanguages.map((lang) => (
                <TabsTrigger key={lang.code} value={lang.code} className="flex-1">
                  <span className="mr-1">{lang.flag}</span> {lang.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {supportedLanguages.map((lang) => (
              <TabsContent key={lang.code} value={lang.code} className="mt-2">
                <div className="space-y-1">
                  <Input
                    id={`title-${lang.code}`}
                    value={title[lang.code] |''}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder={t('jobs.title_placeholder')}
                    className="w-full"
                    dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="description" className="text-lg font-medium">
              {t('jobs.job_description')}
            </label>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="space-y-2">;
          <div className="flex justify-between items-center">;
            <label htmlFor="description" className="text-lg font-medium">;
              {t('jobs && jobs.job_description')}
            </label>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('description')}
<<<<<<< HEAD
<<<<<<< HEAD
              disabled={isTranslating || (!description && description.en && !description && description.es && !description && description.pt && !description && description.ar)}
        ;
        <div className="space-y-2">;
          <div className="flex justify-between items-center">;
            <label htmlFor="description" className="text-lg font-medium">;
              {t('jobs.job_description')}
            </label>;
            <Button;
              type="button";
              size="sm";
              variant="outline";
              onClick={() => autoTranslate('description')}
              disabled={isTranslating || (!description.en && !description.es && !description.pt && !description.ar)}
=======

              disabled={isTranslating || (!description && description.en && !description && description.es && !description && description.pt && !description && description.ar)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              disabled={isTranslating || (!description && description.en && !description && description.es && !description && description.pt && !description && description.ar)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="flex items-center gap-1";
            >;
              {isTranslating ? (;
                <Loader2 className="h-4 w-4 animate-spin" />;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                <Textarea
                  id={`description-${lang && lang.code}`}
                  value={description[lang && lang.code] || ''}
                  onChange={(e) => handleDescriptionChange(e && e.target.value)}
                  placeholder={t('jobs && jobs.description_placeholder')}
                  className="min-h-32 w-full";
                  dir={lang && lang.code === 'ar' ? 'rtl' : 'ltr'}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                />;
              </TabsContent>;
            ))}
          </Tabs>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
              disabled={isTranslating |(!description.en && !description.es && !description.pt && !description.ar)}
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
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full">
              {supportedLanguages.map((lang) => (
                <TabsTrigger key={lang.code} value={lang.code} className="flex-1">
                  <span className="mr-1">{lang.flag}</span> {lang.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {supportedLanguages.map((lang) => (
              <TabsContent key={lang.code} value={lang.code} className="mt-2">
                <Textarea
                  id={`description-${lang.code}`}
                  value={description[lang.code] |''}
                  onChange={(e) => handleDescriptionChange(e.target.value)}
                  placeholder={t('jobs.description_placeholder')}
                  className="min-h-32 w-full"
                  dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="requirements" className="text-lg font-medium">
              {t('jobs.skills_required')}
            </label>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="space-y-2">;
          <div className="flex justify-between items-center">;
            <label htmlFor="requirements" className="text-lg font-medium">;
              {t('jobs && jobs.skills_required')}
            </label>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('requirements')}
<<<<<<< HEAD
<<<<<<< HEAD
              disabled={isTranslating || (!requirements && requirements.en && !requirements && requirements.es && !requirements && requirements.pt && !requirements && requirements.ar)}
        ;
        <div className="space-y-2">;
          <div className="flex justify-between items-center">;
            <label htmlFor="requirements" className="text-lg font-medium">;
              {t('jobs.skills_required')}
            </label>;
            <Button;
              type="button";
              size="sm";
              variant="outline";
              onClick={() => autoTranslate('requirements')}
              disabled={isTranslating || (!requirements.en && !requirements.es && !requirements.pt && !requirements.ar)}
=======

              disabled={isTranslating || (!requirements && requirements.en && !requirements && requirements.es && !requirements && requirements.pt && !requirements && requirements.ar)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              disabled={isTranslating || (!requirements && requirements.en && !requirements && requirements.es && !requirements && requirements.pt && !requirements && requirements.ar)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="flex items-center gap-1";
            >;
              {isTranslating ? (;
                <Loader2 className="h-4 w-4 animate-spin" />;
<<<<<<< HEAD
<<<<<<< HEAD
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
                <Textarea;                  id={`requirements-${lang.code}`}
                  value={requirements[lang.code] || ''}
                  onChange={(e) => handleRequirementsChange(e.target.value)}
                  placeholder={t('jobs.requirements_placeholder')}
                  className="min-h-24 w-full";
                  dir={lang.code === 'ar' ? 'rtl' :'ltr'}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                <Textarea
                  id={`requirements-${lang && lang.code}`}
                  value={requirements[lang && lang.code] || ''}
                  onChange={(e) => handleRequirementsChange(e && e.target.value)}
                  placeholder={t('jobs && jobs.requirements_placeholder')}
                  className="min-h-24 w-full";
                  dir={lang && lang.code === 'ar' ? 'rtl' : 'ltr'}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                />;
              </TabsContent>;
            ))}
          </Tabs>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <div className="space-y-1">;
            <label htmlFor="budget" className="text-lg font-medium">;
              {t('jobs && jobs.budget')}
            </label>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Input
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e && e.target.value)}
<<<<<<< HEAD
<<<<<<< HEAD
        ;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <div className="space-y-1">;
            <label htmlFor="budget" className="text-lg font-medium">;
              {t('jobs.budget')}
            </label>;
            <Input;
              id="budget";
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              placeholder="$1000 - $2000";
              className="w-full";
            />;
          </div>;
          <div className="space-y-1">;
            <label htmlFor="deadline" className="text-lg font-medium">;
<<<<<<< HEAD
<<<<<<< HEAD
              disabled={isTranslating |(!requirements.en && !requirements.es && !requirements.pt && !requirements.ar)}
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
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full">
              {supportedLanguages.map((lang) => (
                <TabsTrigger key={lang.code} value={lang.code} className="flex-1">
                  <span className="mr-1">{lang.flag}</span> {lang.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {supportedLanguages.map((lang) => (
              <TabsContent key={lang.code} value={lang.code} className="mt-2">
                <Textarea
                  id={`requirements-${lang.code}`}
                  value={requirements[lang.code] |''}
                  onChange={(e) => handleRequirementsChange(e.target.value)}
                  placeholder={t('jobs.requirements_placeholder')}
                  className="min-h-24 w-full"
                  dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
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
=======
              {t('jobs && jobs.deadline')}
            </label>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              {t('jobs && jobs.deadline')}
            </label>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Input
              id="deadline"
              type="date"
              value={deadline}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="pt-4">
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan"
          disabled={isSubmitting |isTranslating}
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              onChange={(e) => setDeadline(e && e.target.value)}
              className="w-full";
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Card, CardContent } from '@/components / ui / card';
import { Loader2, Globe } from './lucide-react';
import { use_translation } from './react - i18next';
import { useTranslationService } from '@/hooks / useTranslationService';
import { use_language, SupportedLanguage } from '@/context / LanguageContext';
import { toast } from '@/components / ui / use - toast';
interface TranslatableJobFormProps {
  on_submit: (form_data: any) => void,
  is_submitting?: boolean;
}
export /**
 * TranslatableJobForm - Function description
 */
function TranslatableJobForm() {
  const { t } = use_translation ();
  const { translate_content, is_translating } = useTranslationService ();
  const { supported_languages, current_language } = use_language ();
;
  const [active_tab, setActiveTab] = useState < SupportedLanguage>(current_language);
;
  // Form fields with translations;
  const [title, set_title] = useState < Record < SupportedLanguage, string>>({
    en: "",
    es: "",
    pt: "",
    ar: ""}),
  const [description, set_description] = useState < Record < SupportedLanguage, string>>({
    en: "",
    es: "",
    pt: "",
    ar: ""}),
  const [requirements, set_requirements] = useState < Record < SupportedLanguage, string>>({
    en: "",
    es: "",
    pt: "",
    ar: ""}),
  const [budget, set_budget] = useState ("");
  const [deadline, set_deadline] = useState ("");
;
  // Handle text changes;
  const handleTitleChange = (value: string) =>: any {
    set_title ({ ...title, [active_tab]: value });
  }
;
  const handleDescriptionChange = (value: string) =>: any {
    set_description ({ ...description, [active_tab]: value });
  }
;
  const handleRequirementsChange = (value: string) =>: any {
    set_requirements ({ ...requirements, [active_tab]: value });
  }
;
  // Handle form submission;
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
;
    // Complete any missing translations with auto - translation;
    await ensureAllTranslations ();
;
    on_submit ({
      title;
      description;
      requirements;
      budget,
      deadline});
  }
;
  // Auto translate content when language tab changes;
  const handleTabChange = async (tab: SupportedLanguage) => {
    // Check condition
if ( {) {
  $2
}
      setActiveTab (tab);
    }
  }
;
  // Auto translate function;
  const auto_translate = async (field: 'title' | 'description' | 'requirements') => {
    let source_language: SupportedLanguage = 'en',
    let content = '';
;
    // Find first non - empty content to translate;
    for (const lang of supported_languages.map (l => l.code)) {
      // Check condition
if ( {) {
  $2
}
        content = title[lang];
        source_language = lang;
        break;
      } else // Check condition
if ( {) {
  $2
}
        content = description[lang];
        source_language = lang;
        break;
      } else // Check condition
if ( {) {
  $2
}
        content = requirements[lang];
        source_language = lang;
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
      const { translations, error } = await translate_content (content, 'job', source_language);
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
      // Check condition
if ( {) {
  $2
}
        set_title (translations);
      } else // Check condition
if ( {) {
  $2
}
        set_description (translations);
      } else // Check condition
if ( {) {
  $2
}
        set_requirements (translations);
      }
      toast ({
        title: t ('translation.translation_success'),
        description: t ('translation.content_translated')});
    } catch (error) {
      console.error (`Error translating ${field}:`, error);
      toast ({
        title: t ('translation.translation_failed'),
        description: error instanceof Error ? error.message : t ('translation.unknown_error'),
        variant: "destructive"});
    }
  }
;
  // Ensure all translations are available;
  const ensureAllTranslations = async () => {
    const promises = [];
;
    // Check condition
if (return) {
  $2
}
    // Check condition
if (return) {
  $2
}
    // Title translations;
    if (.some (val => val) && Object.values (title).some (val => !val)) {) {
  $2
}
      promises.push (auto_translate ('title'));
    }
    // Description translations;
    if (.some (val => val) && Object.values (description).some (val => !val)) {) {
  $2
}
      promises.push (auto_translate ('description'));
    }
    // Requirements translations;
    if (.some (val => val) && Object.values (requirements).some (val => !val)) {) {
  $2
}
      promises.push (auto_translate ('requirements'));
    }
    // Check condition
if ( {) {
  $2
}
      await Promise.all (promises);
    }
  }
;
  return (
    <form on_submit={handle_submit} className="space - y-6">;
      <div>;
        <h1 className="text - 2xl font - bold mb - 6">{t ('jobs.post_job_title')}</h1>;
        <p className="text - zion - slate - light mb - 6">;
          {t ('jobs.post_job_description')}
        </p>;
      </div>;
      <div className="space - y-4">;
        <div className="space - y-2">;
          <div className="flex justify - between items - center">;
            <label html_for="title" className="text - lg font - medium">;
              {t ('jobs.job_title')}
            </label>;
            <Button;
              type="button";
              size="sm";
              variant="outline";
              on_click={() => auto_translate ('title')}
              disabled={is_translating || (!title.en && !title.es && !title.pt && !title.ar)}
              className="flex items - center gap - 1";
            >;
              {is_translating ? (
                <Loader2 className="h - 4 w - 4 animate - spin" />) : (
                <Globe className="h - 4 w - 4" />)}
              {t ('translation.auto_translate')}
            </Button>;
          </div>;
          <Tabs value={active_tab} onValueChange={handleTabChange} className="w - full">;
            <TabsList className="w - full">;
              {supported_languages.map ((lang) => (
                <TabsTrigger key={lang.code} value={lang.code} className="flex - 1">;
                  <span className="mr - 1">{lang.flag}</span> {lang.name}
                </TabsTrigger>))}
            </TabsList>;
            {supported_languages.map ((lang) => (
              <TabsContent key={lang.code} value={lang.code} className="mt - 2">;
                <div className="space - y-1">;
                  <Input;
                    id={`title-${lang.code}`}
                    value={title[lang.code] || ''}
                    on_change={(e) => handleTitleChange (e.target.value)}
                    placeholder={t ('jobs.title_placeholder')}
                    className="w - full";
                    dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                  />;
                </div>;
              </TabsContent>))}
          </Tabs>;
        </div>;
        <div className="space - y-2">;
          <div className="flex justify - between items - center">;
            <label html_for="description" className="text - lg font - medium">;
              {t ('jobs.job_description')}
            </label>;
            <Button;
              type="button";
              size="sm";
              variant="outline";
              on_click={() => auto_translate ('description')}
              disabled={is_translating || (!description.en && !description.es && !description.pt && !description.ar)}
              className="flex items - center gap - 1";
            >;
              {is_translating ? (
                <Loader2 className="h - 4 w - 4 animate - spin" />) : (
                <Globe className="h - 4 w - 4" />)}
              {t ('translation.auto_translate')}
            </Button>;
          </div>;
          <Tabs value={active_tab} onValueChange={handleTabChange} className="w - full">;
            <TabsList className="w - full">;
              {supported_languages.map ((lang) => (
                <TabsTrigger key={lang.code} value={lang.code} className="flex - 1">;
                  <span className="mr - 1">{lang.flag}</span> {lang.name}
                </TabsTrigger>))}
            </TabsList>;
            {supported_languages.map ((lang) => (
              <TabsContent key={lang.code} value={lang.code} className="mt - 2">;
                <Textarea;
                  id={`description-${lang.code}`}
                  value={description[lang.code] || ''}
                  on_change={(e) => handleDescriptionChange (e.target.value)}
                  placeholder={t ('jobs.description_placeholder')}
                  className="min - h-32 w - full";
                  dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                />;
              </TabsContent>))}
          </Tabs>;
        </div>;
        <div className="space - y-2">;
          <div className="flex justify - between items - center">;
            <label html_for="requirements" className="text - lg font - medium">;
              {t ('jobs.skills_required')}
            </label>;
            <Button;
              type="button";
              size="sm";
              variant="outline";
              on_click={() => auto_translate ('requirements')}
              disabled={is_translating || (!requirements.en && !requirements.es && !requirements.pt && !requirements.ar)}
              className="flex items - center gap - 1";
            >;
              {is_translating ? (
                <Loader2 className="h - 4 w - 4 animate - spin" />) : (
                <Globe className="h - 4 w - 4" />)}
              {t ('translation.auto_translate')}
            </Button>;
          </div>;
          <Tabs value={active_tab} onValueChange={handleTabChange} className="w - full">;
            <TabsList className="w - full">;
              {supported_languages.map ((lang) => (
                <TabsTrigger key={lang.code} value={lang.code} className="flex - 1">;
                  <span className="mr - 1">{lang.flag}</span> {lang.name}
                </TabsTrigger>))}
            </TabsList>;
            {supported_languages.map ((lang) => (
              <TabsContent key={lang.code} value={lang.code} className="mt - 2">;
                <Textarea;
                  id={`requirements-${lang.code}`}
                  value={requirements[lang.code] || ''}
                  on_change={(e) => handleRequirementsChange (e.target.value)}
                  placeholder={t ('jobs.requirements_placeholder')}
                  className="min - h-24 w - full";
                  dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                />;
              </TabsContent>))}
          </Tabs>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
          <div className="space - y-1">;
            <label html_for="budget" className="text - lg font - medium">;
              {t ('jobs.budget')}
            </label>;
            <Input;
              id="budget";
              value={budget}
              on_change={(e) => set_budget (e.target.value)}
              placeholder="$1000 - $2000";
              className="w - full";
            />;
          </div>;
          <div className="space - y-1">;
            <label html_for="deadline" className="text - lg font - medium">;
              {t ('jobs.deadline')}
            </label>;
            <Input;
              id="deadline";
              type="date";
              value={deadline}
              on_change={(e) => set_deadline (e.target.value)}
              className="w - full";
              {t('jobs.deadline')}
            </label>;
            <Input;
              id="deadline";
              type="date";
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full";
            />;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </Button>
      </div>
    </form>
  )
}
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </Button>;
      </div>;
    </form>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
      ;
      <div className="pt-4">;
=======

      <div className="pt - 4">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Button;
          type="submit";
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan";
          disabled={isSubmitting || isTranslating}
        >;
          {isSubmitting ? (;
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;              {t('jobs.submitting')}
            </>;
          ) :(;
            t('jobs.post_job_button');
          )}
        </Button>;
      </div>;
    </form>;
  ),; interface TranslatableJobFormProps {
  onSubmit: (formData: any) => void;
isSubmitting?: boolean 
}export function TranslatableJobForm ({
  onSubmit, isSubmitting = false 
}: TranslatableJobFormProps) {
  const {
  t 
}= useTranslation ();
const {
  translateContent, isTranslating 
}= useTranslationService ();
const {
  supportedLanguages, currentLanguage 
}= useLanguage ();
//Form fields with translations const [budget, setBudget] = useState ("");
const [deadline, setDeadline] = useState ("");
onSubmit ({
  //Find first non-empty content to translate for (const lang of supportedLanguages.map (l => l.code) ) {
  if (field === 'title' && title[lang]) {
  return;
}return;
}
;

<<<<<<< HEAD
}
};
//Ensure all translations are available if (!title.en && !title.es && !title.pt && !title.ar) return;
if (!description.en && !description.es && !description.pt && !description.ar) return;
//Title translations if (Object.values (title) .some (val => val) && Object.values (title) .some (val => !val) ) {
  ) : (<Globe className=" h-4 w-4"/>) 
}{
  t ('translation.auto translate') 
}</Button> </div> </TabsTrigger>) ) 
}</TabsList> /> </div> </TabsContent>) ) 
}</Tabs> </div>) : (<Globe className=" h-4 w-4"/>) 
}{
  t ('translation.auto translate') 
}</Button> </div> </TabsTrigger>) ) 
}</TabsList> /> </TabsContent>) ) 
}</Tabs> </div>) : (<Globe className=" h-4 w-4"/>) 
}{
  t ('translation.auto translate') 
}</Button> </div> </TabsTrigger>) ) 
}</TabsList> /> </TabsContent>) ) 
}</Tabs> </div> /> </div> </div> </div> <div className=" pt-4"> <Button > {
  isSubmitting ? (<> <Loader2 className=" mr-2 h-4 w-4 animate-spin" /> {
  t ('jobs.submitting') 
}</>) : (t ('jobs.post job button') ) 
}</Button> </div> </form>) 
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      <div className="pt - 4">;
        <Button;
          type="submit";
          className="w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan";
          disabled={is_submitting || is_translating}
        >;
          {is_submitting ? (
            <>;
              <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
              {t ('jobs.submitting')}
            </>) : (
            t ('jobs.post_job_button'))}
        </Button>;
      </div>;
    </form>);
}

=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
