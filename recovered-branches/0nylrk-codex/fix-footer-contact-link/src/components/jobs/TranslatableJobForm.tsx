  onSubmit: (formData: any) => void
  isSubmitting?: boolean
}

  // Auto translate content when language tab changes
  const handleTabChange = async (tab: SupportedLanguage) => {
    if (tab !== activeTab) {
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
  const [description, setDescription] = useState<Record<SupportedLanguage, string>>({;
    en: "",;
    es: "",;
    pt: "",;
    ar: ""}),;

  const [requirements, setRequirements] = useState<Record<SupportedLanguage, string>>({;
  const [requirements, setRequirements] = useState<Record<SupportedLanguage, string>>({;
    en: "",;
    es: "",;
    pt: "",;
    ar: ""}),;
  // Auto translate content when language tab changes;
  const handleTabChange = async (tab: SupportedLanguage) => {;
    if (tab !== activeTab) {;
      setActiveTab(tab);
    }

      }
    }      if (error) {
        toast({
          title: t('translation.translation_failed')
          description: error
          variant: "destructive"})
  
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
        return;
      toast({;
        title: t('translation.translation_success'),,
  description: t('translation.content_translated')});
    } catch (error) {;
      console.error(`Error translating ${field}:`, error),;
      toast({;
        title: t('translation.translation_failed'),,
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

  },
  };
  },
    return (
      
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
    if (!content) {;
      toast({;
        title: t('translation && translation.no_content'),,
  description: t('translation && translation.add_content_first'),;
        variant: "destructive"}),;
      return;
    }
      if (error) {;
        toast({;
          title: t('translation && translation.translation_failed'),,
  description: error,;
          variant: "destructive"}),;
        return;
      }
      if (field === 'title') {;
        setTitle(translations);
      } else if (field === 'description') {;
        setDescription(translations);
      } else if (field === 'requirements') {;
        setRequirements(translations);
      }
      toast({;
        title: t('translation && translation.translation_success'),,
  description: t('translation && translation.content_translated')});
    } catch (error) {;
      console && console.error(`Error translating ${field}:`, error);
      toast({;
        title: t('translation && translation.translation_failed'),,
  description: error instanceof Error ? error && error.message : t('translation && translation.unknown_error'),;
        variant: "destructive"});
    }
  };
    // Title translations;
    if (Object && Object.values(title).some(val => val) && Object && Object.values(title).some(val => !val)) {;
      promises && promises.push(autoTranslate('title'));
    }
    // Description translations;
    if (Object && Object.values(description).some(val => val) && Object && Object.values(description).some(val => !val)) {;
      promises && promises.push(autoTranslate('description'));
    }
    // Requirements translations;
    if (Object && Object.values(requirements).some(val => val) && Object && Object.values(requirements).some(val => !val)) {;
      promises && promises.push(autoTranslate('requirements'));
    }
    if (promises && promises.length) {;
      await Promise && Promise.all(promises);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">;
      <div>;
        <h1 className="text-2xl font-bold mb-6">{t('jobs && jobs.post_job_title')}</h1>;
        <p className="text-zion-slate-light mb-6">;
          {t('jobs && jobs.post_job_description')}
        </p>;
      </div>;

      <div className="space-y-4">;
        <div className="space-y-2">;
          <div className="flex justify-between items-center">;
            <label htmlFor="title" className="text-lg font-medium">;
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('title')}
      }
    }            >;
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
                </div>;              </TabsContent>;
            ))}
          </Tabs>;
        </div>;

        <div className="space-y-2">;
          <div className="flex justify-between items-center">;
            <label htmlFor="description" className="text-lg font-medium">;
              {t('jobs && jobs.job_description')}
            </label>;
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
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('description')}
            >;
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
                <Textarea
                  id={`description-${lang && lang.code}`}
                  value={description[lang && lang.code] || ''}
                  onChange={(e) => handleDescriptionChange(e && e.target.value)}
                  placeholder={t('jobs && jobs.description_placeholder')}
                  className="min-h-32 w-full";
                  dir={lang && lang.code === 'ar' ? 'rtl' : 'ltr'}                />;
              </TabsContent>;
            ))}
          </Tabs>;
        </div>;

        <div className="space-y-2">;
          <div className="flex justify-between items-center">;
            <label htmlFor="requirements" className="text-lg font-medium">;
              {t('jobs && jobs.skills_required')}
            </label>;
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
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('requirements')}
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
            <Input
              id="deadline"
              type="date"
              value={deadline}
              onChange={(e) => setBudget(e && e.target.value)}        </Button>;
      </div>;
    </form>;
  );
}

      <div className="pt-4">;
        <Button;
          type="submit";
          className="w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion-cyan";
          disabled={is_submitting || is_translating}
        >;
          {is_submitting ? (
            <>;
              <Loader2 className="mr - 2 h - 4 w - 4 animate-spin" />;
              {t ('jobs.submitting')}
            </>) : (
            t ('jobs.post_job_button'))}
        </Button>;
      </div>;
    </form>);
}          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan";
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
        </Button>
      </div>
    </form>
  )
}
