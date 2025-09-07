type SearchResult = ProductSearchResult | TalentSearchResult | BlogSearchResult | CategorySearchResult
//Type guard functions const productResults = MARKETPLACE LISTINGS.filter ( (p) => match (p.title) || match (p.description) || match (p.category) || : undefined
tags: p.tags
category: p.category
date: p.createdAt 
}) )
const talentResults = TALENT PROFILES.filter ( (t) => match (t.full name) || match (t.professional title) || match (t.bio) || tags: t.skills
category: t.location
date: undefined 
}) )
const blogResults = BLOG POSTS.filter ( (b) => match (b.title) || match (b.excerpt) || match (b.content) || 
}if (typeof filters.maxPrice === 'number') {
  all = all.filter (r => {
  if (r.type === 'product') {
  
}if (typeof filters.minRating === 'number') {
  all = all.filter (r => {
  if (r.type === 'product' || r.type === 'talent') {
  
}if (filters.sortBy && filters.sortBy !== 'relevance') {
  switch (filters.sortBy) {
  case 'price asc': setTotalResults (data.totalCount || data.results?.length || 0)
}
}
const filteredResults = results.filter ( (r) => {
  if (categoryFilter !== 'all' && categoryFilter && r.category !== categoryFilter) {
  
}return true
})
//Group results by type for better display const renderResultCard = (result: SearchResult) => {
  switch (result.type) {
  case 'product': case 'equipment': return (<div key= {
  result.id 
}data-testid="result-card" > <ProductCard product= {
  {
  id: result.id, name: result.title, title: result.title, description: result.description || '', price: result.price || 0, images: result.image ? [result.image] : [], rating: result.rating || 0, reviewCount: 0, tags: result.tags || [], category: result.category || '', currency: '$', created at: new Date () .toISOString (), updated at: new Date () .toISOString (), stock: (result as any) .stock, in stock: ( (result as any) .stock || 0) > 0 
}
}/> </div>)
case 'talent': 
}
}isAuthenticated= {
  isAuthenticated 
}/> </div>)
case 'category': return (<CategoryCard title= {
  result.title 
}description= {
  result.description || '' 
}icon= {
  result.image || '📁' 
}/> </div>)
default: return (<div </p> </div>) 
}
}
return (<> <SEO /> <div className="min-h-screen bg-gray-50 dark:bg-gray-900" > <div className="container mx-auto px-4 py-8" data-testid="search-results" > Search Results </h1> <p className="text-gray-600 dark:text-gray-200" data-testid="results-count" > /> </div> </div> <Button variant="outline" size="sm" className="flex items-center gap-2" data-testid="filter-button" > <Filter className="h-4 w-4" /> Filters </Button> <select > <option value="relevance" >Relevance</option> <option value="newest" >Newest</option> <option value="price asc" >Price: Low to High</option> <option value="price desc" >Price: High to Low</option> <option value="rating" >Highest Rated</option> </select> <select </option>) ) 
}</select> <div className="flex items-center gap-1" > <input /> </div> <select > <option value="">All Ratings</option> <option value=" 4">4★ & up</option> <option value=" 3">3★ & up</option> <option value=" 2">2★ & up</option> </select> </div> <div className="flex items-center gap-2"> <Button > <Grid className="h-4 w-4"/> </Button> <Button > <List className="h-4 w-4"/> </Button> </div> </div> </div> {
  /* Loading State */ 
}{
  loading && results.length === 0 && (<div className="flex justify-center py-12"> <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div> </div>) 
}<SearchEmptyState onRetry= {
  () => fetchResults (searchQuery) 
}/> </div>) 
}{
  /* Results */ 
}{
  filteredResults.length > 0 && (<div className="space-y-8"> {
  Object.entries (groupedResults) .map ( ([type, typeResults]) => (<div key= {
  type 
}> <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize"> {
  type 
}s ({
  typeResults.length 
}) </h2> <div className= {
  viewMode === 'grid'? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6': 'space-y-4' 
}> {
  typeResults.map (renderResultCard) 
}</div> </div>) ) 
}{
  /* Load More Button */ 
}{
  results.length < totalResults && (<div className="flex justify-center py-8"> <Button onClick= {
  loadMore 
}disabled= {
  loading 
}className="flex items-center gap-2"> {
  loading ? (<> <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div> Loading... </>) : ('Load More Results') 
}</Button> </div>) 
}</div>) 
}</div> </div> </>) 
}export const getServerSideProps: GetServerSideProps< SearchResultsPageProps 
}
}