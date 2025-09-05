 import {
  {
  {
  Search 
}from 'lucide-react' import {
  {
  {
  fetchWithRetry 
}from '@/utils/fetchWithRetry';
import {
  {
  {
  logInfo, logErrorToProduction 
}from '@/utils/productionLogger';
//Categories for filtering const CATEGORIES = [ "All Categories";
"Trends";
"Marketing";
"Sustainability";
"Ethics";
"Recruitment";
"Infrastructure" ];
const query = useDebounce (searchQuery, 300);
const [isLoading, setIsLoading] = useState (false);
}, [router.asPath, initialPosts]);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 fetchPosts () 
}, [query]);
//Filter blog posts based on selected category only. //Search filtering is handled server-side. return matchesCategory;
});
//Get featured posts const featuredPosts = posts.filter (post => post.isFeatured);
logInfo ('BlogPage filteredPosts:', {
  data: filteredPosts 
});
min-h-screen bg-zion-blue pt-12 pb-20 px-4"> <h1>Blog</h1> <div className=" container mx-auto"> <div className=" text-center mb-12"> <GradientHeading>AI & Tech Insights</GradientHeading> 
}
}/> </div> <div className=" flex flex-col justify-center"> <span className=" text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-2"> {
  featuredPost.category 
}</span> <h3 className=" text-3xl font-bold text-white mb-4"> {
  featuredPost.title 
}</h3> <p className=" text-zion-slate-light mb-6"> {
  featuredPost.excerpt 
}flex items-center mb-6" > <img 
}
}/> <div> <p className="text-white font-medium" > {
  featuredPost.author.name 
}</p> <p className="text-sm text-zion-slate-light" > {
  featuredPost.publishedDate 
}• {
  featuredPost.readTime 
}bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit"> <Link href= {
  `/blog/$ {
  featuredPost.slug 
}` 
}> Read Article </Link> </Button> </div> </div> </div>) 
}) () 
}</SelectItem>) ) 
}</SelectContent> </Select> </div> Loading articles... </div>) 
}</div> key= {
  post.id 
}asChild className=" bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300 group-hover:shadow-lg"> 
}
}/> </div> <CardContent className=" p-6"> <div className=" flex items-center justify-between mb-3"> <span className=" text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full"> {
  post.category 
}</span> <div className=" text-xs text-zion-slate-light"> {
  post.publishedDate 
}• {
  post.readTime 
}</div> </div> <h3 className=" text-xl font-bold text-white mb-3"> {
  post.title 
}</h3> <p className=" text-zion-slate-light mb-4 line-clamp-3"> {
  post.excerpt 
}flex items-center" > <img 
}
}/> <span className="text-sm text-white" > {
  post.author.name 
}</span> p-6 pt-0"> <span className=" text-zion-cyan group-hover:text-zion-purple">Read More →</span> </CardFooter> </Link> </Card>) ) 
}</div>) : null 
}<Button variant=" outline" onClick= {
  () => {
  
}
}
}</div> </div> </>) 
}