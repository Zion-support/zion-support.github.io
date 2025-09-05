 interface TranslatableJobFormProps {
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Handle text changes //Complete any missing translations with auto-translation await ensureAllTranslations ();
onSubmit ({
  //Find first non-empty content to translate for (const lang of supportedLanguages.map (l => l.code) ) {
  if (field === 'title' && title[lang]) {
  return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
}
};
//Ensure all translations are available if (!title.en && !title.es && !title.fr && !title.pt && !title.ar) return;
if (!description.en && !description.es && !description.fr && !description.pt && !description.ar) return;
//Title translations if (Object.values (title) .some (val => val) && Object.values (title) .some (val => !val) ) {
  return (<form onSubmit= {
  handleSubmit 
}className="space-y-6"> <div> <h1 className="text-2xl font-bold mb-6"> {
  t ('jobs.post job title') 
}</h1> <p className="text-zion-slate-light mb-6"> {
  t ('jobs.post job description') 
}</p> </div> <div className="space-y-4"> <div className="space-y-2"> className="flex items-center gap-1"> {
  isTranslating ? (<Loader2 className="h-4 w-4 animate-spin"/>) : (<Globe className="h-4 w-4"/>) 
}{
  t ('translation.auto translate') 
}</Button> </div> <Tabs value= {
  activeTab 
}onValueChange= {
  handleTabChange 
}className="w-full"> <TabsList className="w-full"> {
  supportedLanguages.map ( (lang) => (<TabsTrigger key= {
  lang.code 
}value= {
  lang.code 
}className="flex-1"> <span className="mr-1"> {
  lang.flag 
}</span> {
  lang.name 
}</TabsTrigger>) ) 
}</TabsList> {
  supportedLanguages.map ( (lang) => (<TabsContent key= {
  lang.code 
}value= {
  lang.code 
}className="mt-2"> <div className="space-y-1"> <Input id= {
  `title-$ {
  lang.code 
}` 
}value= {
  title[lang.code] || '' 
}onChange= {
  (e) => handleTitleChange (e.target.value) 
}className="w-full"dir= {
  lang.code === 'ar'? 'rtl': 'ltr' 
}/> </div> </TabsContent>) ) 
}</Tabs> </div> <div className="space-y-2"> className="flex items-center gap-1"> {
  isTranslating ? (<Loader2 className="h-4 w-4 animate-spin"/>) : (<Globe className="h-4 w-4"/>) 
}{
  t ('translation.auto translate') 
}</Button> </div> <Tabs value= {
  activeTab 
}onValueChange= {
  handleTabChange 
}className="w-full"> <TabsList className="w-full"> {
  supportedLanguages.map ( (lang) => (<TabsTrigger key= {
  lang.code 
}value= {
  lang.code 
}className="flex-1"> <span className="mr-1"> {
  lang.flag 
}</span> {
  lang.name 
}</TabsTrigger>) ) 
}</TabsList> {
  supportedLanguages.map ( (lang) => (<TabsContent key= {
  lang.code 
}value= {
  lang.code 
}className="mt-2"> <Textarea id= {
  `description-$ {
  lang.code 
}` 
}value= {
  description[lang.code] || '' 
}onChange= {
  (e) => handleDescriptionChange (e.target.value) 
}className="min-h-32 w-full"dir= {
  lang.code === 'ar'? 'rtl': 'ltr' 
}/> </TabsContent>) ) 
}</Tabs> </div> <div className="space-y-2"> className="flex items-center gap-1"> {
  isTranslating ? (<Loader2 className="h-4 w-4 animate-spin"/>) : (<Globe className="h-4 w-4"/>) 
}{
  t ('translation.auto translate') 
}</Button> </div> <Tabs value= {
  activeTab 
}onValueChange= {
  handleTabChange 
}className="w-full"> <TabsList className="w-full"> {
  supportedLanguages.map ( (lang) => (<TabsTrigger key= {
  lang.code 
}value= {
  lang.code 
}className="flex-1"> <span className="mr-1"> {
  lang.flag 
}</span> {
  lang.name 
}</TabsTrigger>) ) 
}</TabsList> {
  supportedLanguages.map ( (lang) => (<TabsContent key= {
  lang.code 
}value= {
  lang.code 
}className="mt-2"> <Textarea id= {
  `requirements-$ {
  lang.code 
}` 
}value= {
  requirements[lang.code] || '' 
}onChange= {
  (e) => handleRequirementsChange (e.target.value) 
}className="min-h-24 w-full"dir= {
  lang.code === 'ar'? 'rtl': 'ltr' 
}/> </TabsContent>) ) 
}</Tabs> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> className="w-full"/> </div> </div> </div> <div className="pt-4"> <Button type=" submit"className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan"disabled= {
  isSubmitting || isTranslating 
}> {
  isSubmitting ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> {
  t ('jobs.submitting') 
}</>) : (t ('jobs.post job button') ) 
}</Button> </div> </form>) 
}