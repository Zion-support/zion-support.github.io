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