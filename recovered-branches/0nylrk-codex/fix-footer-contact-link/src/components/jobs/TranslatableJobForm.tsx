import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent } from "@/components/ui/card",
import { Loader2, Globe } from "lucide-react",
import { useTranslation } from "react-i18next",
import { useTranslationService } from "@/hooks/useTranslationService",
<<<<<<< HEAD
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";
import { toast } from "@/components/ui/use-toast";
interface TranslatableJobFormProps {
  onSubmit: (formData: any) => void,
  isSubmitting?: boolean
}

export function TranslatableJobForm({ onSubmit, isSubmitting;
interface TranslatableJobFormProps {

  onSubmit: (formData: any) => void
  isSubmitting?: boolean
}
export function TranslatableJobForm({ onSubmit, isSubmitting = false }: TranslatableJobFormProps) {
  const { t } = useTranslation($2);
  const { translateContent, isTranslating } = useTranslationService($2);
  const { supportedLanguages, currentLanguage } = useLanguage($2);
  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage),
  
  // Form fields with translations
  const [title, setTitle] = useState<Record<SupportedLanguage, string>>({
    en: "",
    es: "",
    pt: "",
    ar: ""}),
  
  const [description, setDescription] = useState<Record<SupportedLanguage, string>>({
    en: "",
    es: "",
    pt: "",
    ar: ""}),
  
  const [requirements, setRequirements] = useState<Record<SupportedLanguage, string>>({
    en: "",
    es: "",
    pt: "",
    ar: ""}),
  
  const [budget, setBudget] = useState($2);
  const [deadline, setDeadline] = useState($2);
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
    e.preventDefault($2);
    // Complete any missing translations with auto-translation
    await ensureAllTranslations($2);
    onSubmit({
      title,
      description,
      requirements,
      budget,
      deadline})
  },
  
  // Auto translate content when language tab changes
  const handleTabChange = $2;
  // Auto translate function
  const autoTranslate = $2;
    let content = $2;
    // Find first non-empty content to translate
    for (const lang of supportedLanguages.map(l = $2;
        sourceLanguage = $2;
        break
      } else if (field = $2;
        sourceLanguage = $2;
        break
      } else if (field = $2;
        sourceLanguage = $2;
        break
      }
    }
    
    if (!content) {
      toast($2);
        description: t($2);
        variant: "destructive"}),
      return
    }
    try {
      const { translations, error } = await translateContent($2);
      if (error) {
        toast($2);
          description: error,
          variant: "destructive"}),
        return
      }
      if (field === 'title') {
        setTitle(translations)
      } else if (field === 'description') {
        setDescription(translations)
      } else if (field === 'requirements') {
        setRequirements(translations)
      }
      
      toast($2);
        description: t('translation.content_translated')})
    } catch (error) {
      console.error($2);
      toast($2);
        description: error instanceof Error ? error.message : t($2);
        variant: "destructive"})
    }
  },
  
  // Ensure all translations are available
  const ensureAllTranslations = $2;
    if (!title.en && !title.es && !title.pt && !title.ar) return,
    if (!description.en && !description.es && !description.pt && !description.ar) return,
    
    // Title translations
    if (Object.values(title).some(val = $2;
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
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface TranslatableJobFormProps {

  // Auto translate content when language tab changes
  const handleTabChange = async (tab: SupportedLanguage) => {
    if (tab !== activeTab) {
      setActiveTab(tab)

<<<<<<< HEAD
interface TranslatableJobFormProps {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

interface TranslatableJobFormProps {

      setActiveTab(tab)

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
interface TranslatableJobFormProps {};
  onSubmit: (formData: any) => void;
  isSubmitting?: boolean;
}

export function TranslatableJobForm() { return null; }
  const { t } = useTranslation();
  const { translateContent, isTranslating } = useTranslationService();
  const { supportedLanguages, currentLanguage } = useLanguage();
export function TranslatableJobForm({ onSubmit, isSubmitting = false }: TranslatableJobFormProps) {}
  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage),
  ;
  // Form fields with translations;
  const [title, setTitle] = useState<Record<SupportedLanguage string>>({"
    en: "","
    es: "","
    pt: "","
    ar: ""}),
  
  const [description, setDescription] = useState<Record<SupportedLanguage string>>({"
    en: "","
    es: "","
    pt: "","
    ar: ""}),
  
  const [requirements, setRequirements] = useState<Record<SupportedLanguage string>>({"
    en: "","
    es: "","
    pt: "","
    ar: ""}),
  "
  const [budget, setBudget] = useState(""),"
  const [deadline, setDeadline] = useState(""),
  
  // Handle text changes;
  const handleTitleChange = (value: string) => {}
    setTitle({ ...title, [activeTab]: value })
  },
  
  const handleDescriptionChange = (value: string) => {}
    setDescription({ ...description, [activeTab]: value })
  },
  
  const handleRequirementsChange = (value: string) => {}
    setRequirements({ ...requirements, [activeTab]: value })
  },
  
  // Handle form submission;
  const handleSubmit = async (e: React.FormEvent) => {}
    e.preventDefault(),
    
    // Complete any missing translations with auto-translation;
    await ensureAllTranslations(),
    
    onSubmit({}

      title,
      description,
      requirements,
      budget,
      deadline})
  },

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface TranslatableJobFormProps {;
  onSubmit: (formData: any) => void,;
  isSubmitting?: boolean;
}
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

<<<<<<< HEAD
=======
export function TranslatableJobForm(): any ({ onSubmit, isSubmitting = false }: TranslatableJobFormProps) {;
  const { t } = useTranslation();
  const { translateContent, isTranslating } = useTranslationService();
  const { supportedLanguages, currentLanguage } = useLanguage();

  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage);

  // Form fields with translations;
  const [title, setTitle] = useState<Record<SupportedLanguage, string>>({;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    en: "",;
    es: "",;
    pt: "",;
    ar: ""}),;
<<<<<<< HEAD
  const [description, setDescription] = useState<Record<SupportedLanguage string>>({;
=======

  const [description, setDescription] = useState<Record<SupportedLanguage, string>>({;
<<<<<<< HEAD
<<<<<<< HEAD
  }
    }
    "en": "",;"
    "es": "",;"
    "pt": "",;"
    "ar": ""}),;"
  const [requirements, setRequirements] = useState<Record<SupportedLanguage, string>>({;
  }
    }
    "en": "",;"
    "es": "",;"
    "pt": "",;"
    "ar": ""}),;"
=======

  const [description, setDescription] = useState<Record<SupportedLanguage, string>>({;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    en: "",;
    es: "",;
    pt: "",;
    ar: ""}),;
<<<<<<< HEAD
  const [requirements, setRequirements] = useState<Record<SupportedLanguage string>>({;
=======

  const [requirements, setRequirements] = useState<Record<SupportedLanguage, string>>({;
<<<<<<< HEAD

  const [requirements, setRequirements] = useState<Record<SupportedLanguage, string>>({;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    en: "",;
    es: "",;
    pt: "",;
    ar: ""}),;
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
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Auto translate content when language tab changes;
  const handleTabChange = async (tab: SupportedLanguage) => {;
    if (tab !== activeTab) {;
      setActiveTab(tab);
    }
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  };

  // Auto translate function;'
  const autoTranslate = async (field: 'title' | 'description' | 'requirements') => {;'
    let sourceLanguage: SupportedLanguage = 'en',;'
    let content = '';

    // Find first non-empty content to translate;
    for (const lang of supportedLanguages && supportedLanguages.map(l => l && l.code)) {;'
      if (field === 'title' && title[lang]) {;
        content = title[lang];
        sourceLanguage = lang;
        break;'
      } else if (field === 'description' && description[lang]) {;
        content = description[lang];
        sourceLanguage = lang;
        break;'

      } else if (field === 'requirements' && requirements[lang]) {;
        content = requirements[lang];
        sourceLanguage = lang;
        break;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
    }

'
      const { translations, error } = await translateContent(content, 'job', sourceLanguage),

<<<<<<< HEAD
      const { translations, error } = await translateContent(content, 'job', sourceLanguage);
      const { translations, error } = await translateContent(content, 'job', sourceLanguage),
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (error) {

        toast({

          title: t('translation.translation_failed')
<<<<<<< HEAD
          description: error"
          variant: "destructive"});
=======
          description: error
          variant: "destructive"})
        return

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
      if (field === 'title') {
        setTitle(translations)
      } else if (field === 'description') {
        setDescription(translations)
      } else if (field === 'requirements') {
        setRequirements(translations)
      }
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
      
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast({
        title: t('translation.translation_success')
        description: t('translation.content_translated')})
    } catch (error) {
<<<<<<< HEAD
      console.error(`Error translating ${field}:`, error),
=======
      console.error(`Error translating ${field}:`, error);
<<<<<<< HEAD
      console.error(`Error translating ${field}:`, error),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast({
        title: t('translation.translation_failed')
        description: error instanceof Error ? error.message : t('translation.unknown_error')
        variant: "destructive"})

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
  }

  },

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    if (!content) {;

        variant: "destructive"}),;
      return;
    }
<<<<<<< HEAD
=======
    try {;
      const { translations, error } = await translateContent(content, 'job', sourceLanguage);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      if (error) {;

          variant: "destructive"}),;
        return;
<<<<<<< HEAD
      }'
=======
      }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      if (field === 'title') {;
        setTitle(translations);'
      } else if (field === 'description') {;
        setDescription(translations);'
      } else if (field === 'requirements') {;
        setRequirements(translations);
      }
<<<<<<< HEAD

        variant: "destructive"});
    }
  };
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  return ("
=======
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

      }

=======
<<<<<<< HEAD
=======
              {t('jobs && jobs.job_title')}
            </label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('title')}
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
=======
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

<<<<<<< HEAD
            <Button"
              type="button""
              size="sm""
              variant="outline"'
              onClick={() => autoTranslate('title')}

              {isTranslating ? (;
                <Loader2 className="h-4 w-4 animate-spin" />;
      }
    }            >;
=======
              disabled={isTranslating || (!title && title.en && !title && title.es && !title && title.pt && !title && title.ar)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className="flex items-center gap-1";
            >;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              {isTranslating ? (;
                <Loader2 className="h-4 w-4 animate-spin" />;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> merged-prs-20250907-203621
          </Tabs>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="description" className="text-lg font-medium">
              {t('jobs.job_description')}
            </label>
<<<<<<< HEAD
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('description')}
              disabled={isTranslating |(!description.en && !description.es && !description.pt && !description.ar)}
=======
=======

        <div className="space-y-2">;
          <div className="flex justify-between items-center">;
            <label htmlFor="description" className="text-lg font-medium">;
              {t('jobs && jobs.job_description')}
            </label>;

<<<<<<< HEAD
disabled={isTranslating |(!description.en && !description.es && !description.pt && !description.ar)}
>>>>>>> merged-prs-20250907-203621
              className="flex items-center gap-1"
            >
              {isTranslating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Globe className="h-4 w-4" />
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('description')}
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
<<<<<<< HEAD
onClick={() => autoTranslate('requirements')}
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              className="flex items-center gap-1";
            >;
              {isTranslating ? (;
                <Loader2 className="h-4 w-4 animate-spin" />;
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
<<<<<<< HEAD

=======
                  dir={lang && lang.code === 'ar' ? 'rtl' : 'ltr'}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </TabsContent>;
            ))}
          </Tabs>;
        </div>;
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
>>>>>>> merged-prs-20250907-203621
          </Tabs>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="requirements" className="text-lg font-medium">
              {t('jobs.skills_required')}
            </label>
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
            <Button"
              type="button""
              size="sm""
              variant="outline"
"
=======
        <div className="space-y-2">;
          <div className="flex justify-between items-center">;
            <label htmlFor="requirements" className="text-lg font-medium">;
              {t('jobs && jobs.skills_required')}
            </label>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('requirements')}
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              className="flex items-center gap-1";
            >;
              {isTranslating ? (;"
                <Loader2 className="h-4 w-4 animate-spin" />;
<<<<<<< HEAD

=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                />;

              </TabsContent>;
            ))}
          </Tabs>;
        </div>;
<<<<<<< HEAD
=======

<<<<<<< HEAD
              onClick={() => autoTranslate('requirements')}
            <Input"
              id="budget"
              value={budget}
=======
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <div className="space-y-1">;
            <label htmlFor="budget" className="text-lg font-medium">;
              {t('jobs && jobs.budget')}
            </label>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Input
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e && e.target.value)}
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
              placeholder="$1000 - $2000";
              className="w-full";
            />;
          </div>;
          <div className="space-y-1">;
            <label htmlFor="deadline" className="text-lg font-medium">;
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
            <Input
              id="deadline"
              type="date"
              value={deadline}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
          )}
        </Button>
      </div>
    </form>
  )
}
=======
          )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

              onChange={(e) => setDeadline(e && e.target.value)}"
              className="w-full";
<<<<<<< HEAD
'
import React, { useState } from './react';'
import { Button } from '@/components / ui / button';'
import { Input } from '@/components / ui / input';'
import { Textarea } from '@/components / ui / textarea';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { Card, CardContent } from '@/components / ui / card';'
import { Loader2, Globe } from './lucide-react';'
import { use_translation } from './react - i18next';'
import { useTranslationService } from '@/hooks / useTranslationService';'
import { use_language, SupportedLanguage } from '@/context / LanguageContext';'
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { toast } from '@/components / ui / use - toast';
interface TranslatableJobFormProps {}
  on_submit: (form_data: any) => void,
  is_submitting?: boolean;
}
export /**;
 * TranslatableJobForm - Function description;
 */
function TranslatableJobForm() {}

  const { t } = use_translation ();
  const { translate_content, is_translating } = useTranslationService ();
  const { supported_languages, current_language } = use_language ();
;
  const [active_tab, setActiveTab] = useState < SupportedLanguage>(current_language);
;
  // Form fields with translations;

    set_requirements ({ ...requirements, [active_tab]: value });
  }
;
  // Handle form submission;

    e.prevent_default ();
;
    // Complete any missing translations with auto - translation;
    await ensureAllTranslations ();
;

      title;
      description;
      requirements;
      budget,
      deadline});
  }
;
  // Auto translate content when language tab changes;

}
      setActiveTab (tab);
    }
  }
;

}
        content = title[lang];
        source_language = lang;
        break;

}
        content = description[lang];
        source_language = lang;
        break;

}
        content = requirements[lang];
        source_language = lang;
        break;
      }
    }

        variant: "destructive"});
    }
  }
;
  // Ensure all translations are available;

}
      await Promise.all (promises);
    }
  }
;

                    dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                  />;
                </div>;
              </TabsContent>))}
          </Tabs>;

                  dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                />;
              </TabsContent>))}
          </Tabs>;

                  dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                />;
              </TabsContent>))}
          </Tabs>;

              className="w - full";

{t('jobs.deadline')}
            </label>;
            <Input;
              id="deadline";
              type="date";
              value={deadline}
<<<<<<< HEAD
=======
              on_change={(e) => set_deadline (e.target.value)}
              className="w - full";
              {t('jobs.deadline')}
            </label>;
            <Input;
              id="deadline";
              type="date";
              value={deadline}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full";
            />;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
        </Button>
      </div>
    </form>
  )
}
=======

<<<<<<< HEAD
</Button>
      </div>
    </form>
  )
}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        </Button>;

      </div>;
    </form>;
  );
}
<<<<<<< HEAD
      ;
      <div className="pt-4">;
=======

<<<<<<< HEAD
        <Button;
          type="submit";
          className="w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion-cyan";
          disabled={is_submitting || is_translating}
=======
      <div className="pt - 4">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Button;
          type="submit";
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan";
          disabled={isSubmitting || isTranslating}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        >;
          {isSubmitting ? (;
            <>;
<<<<<<< HEAD
              <Loader2 className="mr - 2 h - 4 w - 4 animate-spin" />;
              {t ('jobs.submitting')}
            </>) : (
            t ('jobs.post_job_button'))}
        </Button>;
      </div>;
<<<<<<< HEAD
    </form>);
}          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark "hover":from-zion-cyan-light "hover":to-zion-cyan";"
          disabled={isSubmitting || isTranslating}
        >;
          {isSubmitting ? (;
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;              {t('jobs.submitting')}'
            </>;
          ) :(;
            t('jobs.post_job_button');'
          )}
        </Button>;
      </div>;
    </form>;
  ),; interface TranslatableJobFormProps {
  }
  "onSubmit": ("formData": any) => void;
isSubmitting?: boolean
}export function TranslatableJobForm() {
  }
  const {
  }
  t
}= useTranslation ();
  }
  translateContent, isTranslating
}= useTranslationService ();
  }
  supportedLanguages, currentLanguage
}= useLanguage ();
//Form fields with translations const [budget, setBudget] = useState ("");"
const [deadline, setDeadline] = useState ("");"
onSubmit ({
  //Find first non-empty content to translate for (const lang of supportedLanguages.map (l => l.code) ) {
  }
  if (field === 'title' && title[lang]) {'
  }
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return;
}return;
}
;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
};
//Ensure all translations are available if (!title.en && !title.es && !title.pt && !title.ar) return;
if (!description.en && !description.es && !description.pt && !description.ar) return;
//Title translations if (Object.values (title) .some (val => val) && Object.values (title) .some (val => !val) ) {
<<<<<<< HEAD
  ) : (<Globe className=" h-4 w-4" />)"
}{
  }
  t ('translation.auto translate')'
}</Button> </div> </TabsTrigger>) )
}</TabsList> /> </div> </TabsContent>) )
}</Tabs> </div>) : (<Globe className=" h-4 w-4" />)"
}{
  }
  t ('translation.auto translate')'
}</Button> </div> </TabsTrigger>) )
}</TabsList> /> </TabsContent>) )
}</Tabs> </div>) : (<Globe className=" h-4 w-4" />)"
}{
  }
  t ('translation.auto translate')'
}</Button> </div> </TabsTrigger>) )
}</TabsList> /> </TabsContent>) )
}</Tabs> </div> /> </div> </div> </div> <div className=" pt-4"> <Button > {"
  }
  isSubmitting ? (<> <Loader2 className=" mr-2 h-4 w-4 animate-spin" /> {"
  }
  t ('jobs.submitting')'
}</>) : (t ('jobs.post job button') )'
}</Button> </div> </form>)
}
;
=======
    </form>);
>>>>>>> origin/chore/fix-lint-and-merge
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
