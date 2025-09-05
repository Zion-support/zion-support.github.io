
import React, {_useState} from "react";


interface TranslatableJobFormProps {_onSubmit: (_formData: unknown) => void;
  isSubmitting?: boolean;}

export function TranslatableJobForm(_{_onSubmit, _isSubmitting = false}: TranslatableJobFormProps) {_const { t} = useTranslation();
  const {_translateContent, _isTranslating} = useTranslationService();
  const {_supportedLanguages, _currentLanguage} = useLanguage();
  
  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage);
  
  // Form fields with translations
  const [title, setTitle] = useState<Record<SupportedLanguage, string>>({_en: "", _es: "", _fr: "", _pt: "", _ar: ""});
  
  const [description, setDescription] = useState<Record<SupportedLanguage, string>>({_en: "", _es: "", _fr: "", _pt: "", _ar: ""});
  
  const [requirements, setRequirements] = useState<Record<SupportedLanguage, string>>({_en: "", _es: "", _fr: "", _pt: "", _ar: ""});
  
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  
  // Handle text changes
  const _handleTitleChange = (_value: string) => {_setTitle({ ...title, _[activeTab]: value});
  };
  
  const _handleDescriptionChange = (_value: string) => {_setDescription({ ...description, _[activeTab]: value});
  };
  
  const _handleRequirementsChange = (_value: string) => {_setRequirements({ ...requirements, _[activeTab]: value});
  };
  
  // Handle form submission
  const _handleSubmit = async (_e: React.FormEvent) => {_e.preventDefault();
    
    // Complete any missing translations with auto-translation
    await ensureAllTranslations();
    
    onSubmit({
      title, _description, _requirements, _budget, _deadline});
  };
  
  // Auto translate content when language tab changes
  const _handleTabChange = async (_tab: string) => {_const _selectedLanguage = tab as SupportedLanguage;
    if (selectedLanguage !== activeTab) {
      setActiveTab(selectedLanguage);}
  };
  
  // Auto translate function
  const _autoTranslate = async (_field: 'title' | 'description' | 'requirements') => {_let sourceLanguage: SupportedLanguage = 'en';
    let _content = '';
    
    // Find first non-empty content to translate
    for (const lang of supportedLanguages.map(l => l.code)) {
      if (field === 'title' && title[lang]) {
        content = title[lang];
        sourceLanguage = lang;
        break;} else if (field === 'description' && description[lang]) {_content = description[lang];
        sourceLanguage = lang;
        break;} else if (field === 'requirements' && requirements[lang]) {_content = requirements[lang];
        sourceLanguage = lang;
        break;}
    }
    
    if (!content) {_toast({
        title: t('translation.no_content'), _description: t('translation.add_content_first'), _variant: "destructive"});
      return;
    }
    
    try {_const { translations, _error} = await translateContent(content, 'job', sourceLanguage);
      
      if (error) {_toast({
          title: t('translation.translation_failed'), _description: error, _variant: "destructive"});
        return;
      }
      
      if (field === 'title') {_setTitle(translations);} else if (field === 'description') {_setDescription(translations);} else if (field === 'requirements') {_setRequirements(translations);}
      
      toast({_title: t('translation.translation_success'), _description: t('translation.content_translated')});
    } catch (error) {_logErrorToProduction('Error translating ${field}:', {_data: error});
      toast({_title: t('translation.translation_failed'), _description: error instanceof Error ? error.message : t('translation.unknown_error'), _variant: "destructive"});
    }
  };
  
  // Ensure all translations are available
  const _ensureAllTranslations = async () => {_const _promises = [];
    
    if (!title.en && !title.es && !title.fr && !title.pt && !title.ar) return;
    if (!description.en && !description.es && !description.fr && !description.pt && !description.ar) return;
    
    // Title translations
    if (Object.values(title).some(val => val) && Object.values(title).some(val => !val)) {
      promises.push(autoTranslate('title'));}
    
    // Description translations
    if (Object.values(description).some(val => val) && Object.values(description).some(val => !val)) {_promises.push(autoTranslate('description'));}
    
    // Requirements translations
    if (Object.values(requirements).some(val => val) && Object.values(requirements).some(val => !val)) {_promises.push(autoTranslate('requirements'));}
    
    if (promises.length) {_await Promise.all(promises);}
  };
  
  return (
    <form onSubmit={_handleSubmit} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-6">{_t('jobs.post_job_title')}</h1>
        <p className="text-zion-slate-light mb-6">
          {_t('jobs.post_job_description')}
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="title" className="text-lg font-medium">
              {_t('jobs.job_title')}
            </label>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={_() => autoTranslate('title')}
              disabled={_isTranslating || (!title.en && !title.es && !title.fr && !title.pt && !title.ar)}
              className="flex items-center gap-1"
            >
              {_isTranslating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Globe className="h-4 w-4" />
              )}
              {_t('translation.auto_translate')}
            </Button>
          </div>
          
          <Tabs value={_activeTab} onValueChange={_handleTabChange} className="w-full">
            <TabsList className="w-full">
              {_supportedLanguages.map(_(lang) => (
                <TabsTrigger key={lang.code} value={_lang.code} className="flex-1">
                  <span className="mr-1">{_lang.flag}</span> {_lang.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {_supportedLanguages.map(_(lang) => (_<TabsContent key={lang.code} value={_lang.code} className="mt-2">
                <div className="space-y-1">
                  <Input
                    id={_`title-${lang.code}`}
                    value={_title[lang.code] || ''}
                    onChange={_(e) => handleTitleChange(e.target.value)}
                    className="w-full"
                    dir={_lang.code === 'ar' ? 'rtl' : 'ltr'}
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="description" className="text-lg font-medium">
              {_t('jobs.job_description')}
            </label>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={_() => autoTranslate('description')}
              disabled={_isTranslating || (!description.en && !description.es && !description.fr && !description.pt && !description.ar)}
              className="flex items-center gap-1"
            >
              {_isTranslating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Globe className="h-4 w-4" />
              )}
              {_t('translation.auto_translate')}
            </Button>
          </div>
          
          <Tabs value={_activeTab} onValueChange={_handleTabChange} className="w-full">
            <TabsList className="w-full">
              {_supportedLanguages.map(_(lang) => (
                <TabsTrigger key={lang.code} value={_lang.code} className="flex-1">
                  <span className="mr-1">{_lang.flag}</span> {_lang.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {_supportedLanguages.map(_(lang) => (_<TabsContent key={lang.code} value={_lang.code} className="mt-2">
                <Textarea
                  id={_`description-${lang.code}`}
                  value={_description[lang.code] || ''}
                  onChange={_(e) => handleDescriptionChange(e.target.value)}
                  className="min-h-32 w-full"
                  dir={_lang.code === 'ar' ? 'rtl' : 'ltr'}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="requirements" className="text-lg font-medium">
              {_t('jobs.skills_required')}
            </label>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={_() => autoTranslate('requirements')}
              disabled={_isTranslating || (!requirements.en && !requirements.es && !requirements.fr && !requirements.pt && !requirements.ar)}
              className="flex items-center gap-1"
            >
              {_isTranslating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Globe className="h-4 w-4" />
              )}
              {_t('translation.auto_translate')}
            </Button>
          </div>
          
          <Tabs value={_activeTab} onValueChange={_handleTabChange} className="w-full">
            <TabsList className="w-full">
              {_supportedLanguages.map(_(lang) => (
                <TabsTrigger key={lang.code} value={_lang.code} className="flex-1">
                  <span className="mr-1">{_lang.flag}</span> {_lang.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {_supportedLanguages.map(_(lang) => (_<TabsContent key={lang.code} value={_lang.code} className="mt-2">
                <Textarea
                  id={_`requirements-${lang.code}`}
                  value={_requirements[lang.code] || ''}
                  onChange={_(e) => handleRequirementsChange(e.target.value)}
                  className="min-h-24 w-full"
                  dir={_lang.code === 'ar' ? 'rtl' : 'ltr'}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="budget" className="text-lg font-medium">
              {_t('jobs.budget')}
            </label>
            <Input
              id="budget"
              value={_budget}
              onChange={_(_e) => setBudget(e.target.value)}
              placeholder="$1000 - $2000"
              className="w-full"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="deadline" className="text-lg font-medium">
              {_t('jobs.deadline')}
            </label>
            <Input
              id="deadline"
              type="date"
              value={_deadline}
              onChange={_(_e) => setDeadline(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      </div>
      
      <div className="pt-4">
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan"
          disabled={_isSubmitting || isTranslating}
        >
          {_isSubmitting ? (
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
  );
}
