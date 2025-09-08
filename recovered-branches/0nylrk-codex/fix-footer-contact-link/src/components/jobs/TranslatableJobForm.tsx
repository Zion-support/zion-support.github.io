import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent } from "@/components/ui/card",
import { Loader2, Globe } from "lucide-react",
import { useTranslation } from "react-i18next",
import { useTranslationService } from "@/hooks/useTranslationService",





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









  const [description, setDescription] = useState<Record<SupportedLanguage, string>>({;



  const [requirements, setRequirements] = useState<Record<SupportedLanguage, string>>({;





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







          description: error
          variant: "destructive"})
        return









      console.error(`Error translating ${field}:`, error);



      promises.push(autoTranslate('title'));











    try {;
      const { translations, error } = await translateContent(content, 'job', sourceLanguage);

      }


  // Ensure all translations are available;
  const ensureAllTranslations = async () => {;
    const promises = [];
    if (!title && title.en && !title && title.es && !title && title.pt && !title && title.ar) return;
    if (!description && description.en && !description && description.es && !description && description.pt && !description && description.ar) return;

  return (




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




