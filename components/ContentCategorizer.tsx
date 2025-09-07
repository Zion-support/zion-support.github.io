//Sample content data - in a real implementation, this would come from an API const contentItems: ContentItem[] = [ {
  switch (sortBy) {
  case 'date': comparison = new Date (a.date) .getTime () - new Date (b.date) .getTime ()
break
case 'relevance': case 'title': comparison = a.title.localeCompare (b.title)
break 
}return sortOrder === 'asc' ? comparison : -comparison 
})
return filtered
}, [searchTerm, selectedCategory, selectedSubcategory, selectedType, selectedRelevance, sortBy, sortOrder])
<div> <label className="block text-sm font-medium text-white/70 mb-2" >Category</label> <select > {
  categories.map (category => (<option key= {
  category.id 
}value= {
  category.id 
}> {
  category.name 
}({
  category.count 
}) </option>) ) 
}</select> </div> {
  /* Subcategory Filter */ 
}<div> <label className="block text-sm font-medium text-white/70 mb-2" >Subcategory</label> <select </option>) ) 
}</select> </div> {
  /* Content Type Filter */ 
}<div> <label className="block text-sm font-medium text-white/70 mb-2" >Content Type</label> <select > {
  contentTypes.map (type => (<option key= {
  type.id 
}value= {
  type.id 
}> {
  type.name 
}</option>) ) 
}</select> </div> {
  /* Relevance Filter */ 
}<div> <label className="block text-sm font-medium text-white/70 mb-2" >Relevance</label> <select > {
  relevanceLevels.map (level => (<option key= {
  level.id 
}value= {
  level.id 
}> {
  level.name 
}</option>) ) 
}</select> </div> </div> > <option value="date" >Date</option> <option value="relevance" >Relevance</option> <option value="title" >Title</option> </select> <button > {
  sortOrder === 'asc' ? '↑' : '↓' 
}</button> </div> </div> <button > Clear All Filters </button> </div> </div> {
  /* Category Pills */ 
}<div> <button key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 $ {
  selectedCategory === category.id ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300' : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10' 
}` 
}> </span> </button>) ) 
}</div> </div> {
  filteredItems.map ( (item) => {
  const CategoryIcon = getCategoryIcon (item.category)
const TypeIcon = getTypeIcon (item.type)
const category = categories.find (c => c.id === item.category)
item.id 
}className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> + {
  item.tags.length - 3 
}</span>) 
}</div> target="blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover: text-cyan-200 transition-colors duration-200 text-sm font-medium" 
}) 
}</div> Try adjusting your search terms or filters to find what you're looking for. </p> <button onClick= {
  clearAllFilters 
}className="px-6 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-300 hover:bg-cyan-500/30 transition-all duration-200" > Reset All Filters </button> </div>) 
}</div>) 
}
export default ContentCategorizer