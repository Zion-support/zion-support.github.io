 const keyFeatures = useMemo ( () => {
  return featuresInput .split ('\n') <div> <label className="block text-sm font-medium mb-1" >Service Title</label> <input required /> </div> <div> <label className="block text-sm font-medium mb-1" >Target Audience</label> <input required /> </div> <div> <label className="block text-sm font-medium mb-1" >Key Features (one per line) </label> <textarea required /> </div> <div> <label className="block text-sm font-medium mb-1" >Tone</label> <select > <option value="professional" >Professional</option> <option value="friendly" >Friendly</option> <option value="persuasive" >Persuasive</option> <option value="technical" >Technical</option> </select> </div> <div> <label className="block text-sm font-medium mb-1" >Additional Notes (optional) </label> <textarea /> </div> <div className="flex items-center gap-3" > <button > {
  loading ? 'Generating…' : 'Generate Description' 
}</button> <button onClick= {
  handleCopy 
}className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800" > Copy </button> <button > Accept </button> </div> </div> <textarea) 
}</div>) 
}</div>) 
}