
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
      const { translations, error } = await translateContent(content, 'job', sourceLanguage),

      if (error) {
        toast({
          title: t('translation.translation_failed'),
          description: error,
          variant: "destructive"}),
        return
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
  }
  // Ensure all translations are available;
  const ensureAllTranslations = async () => {
}
;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
