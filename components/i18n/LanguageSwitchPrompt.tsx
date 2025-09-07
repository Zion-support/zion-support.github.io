if (!suggested) return null
return (<div className="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200" > <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4 text-sm" > <div> {
  t ('lang.switch prompt', {
  language: t (localeLabelKey[suggested]) 
}) 
}</div> </div> </div> </div>) 
}