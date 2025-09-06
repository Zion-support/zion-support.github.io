
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
  onSubmit: (formData: any) => void,
  isSubmitting?: boolean
}

export function TranslatableJobForm({ onSubmit, isSubmitting = false }: TranslatableJobFormProps) {
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
  );
}

        </Button>;
      </div>;
    </form>;
  );
}
        </Button>;
      </div>;
    </form>;
  );
}
;
;
