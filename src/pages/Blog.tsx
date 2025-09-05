import Link from "next/link";


// Categories for filtering
const _CATEGORIES = [
  "All Categories",
  "Trends",
  "Marketing",
  "Sustainability",
  "Ethics",
  "Recruitment",
  "Infrastructure"
];

export interface BlogProps {_posts?: BlogPost[];}

export default function Blog(_{_posts: initialPosts = BLOG_POSTS}: BlogProps) {_logInfo('BlogPage rendering. Initial BLOG_POSTS:', _{ data: initialPosts});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [posts, setPosts] = useState<BlogPost[]>([...initialPosts]);
  const _query = useDebounce(searchQuery, 300);
  const [isLoading, setIsLoading] = useState(false);
  const _router = useRouter();

  // Reset state when navigating away to avoid cross-page leakage
  useEffect__(() => {_return () => {
      setSearchQuery("");
      setSelectedCategory("All Categories");
      setPosts([...initialPosts]);};
  }, [router.asPath, initialPosts]);

  // useEffect__(() => {_//   const _interval = setInterval__(() => {
  //     setPosts(prev => [...prev, _generateRandomBlogPost()]);
  //}, 120000); // every 2 minutes
  //   return () => clearInterval(interval);
  // }, []);

  useEffect__(() => {_const _fetchPosts = async () => {
      setIsLoading(true);
      try {
        const data: BlogPost[] = await fetchWithRetry(
          `/api/blog?query=${encodeURIComponent(query)}`
        );
        setPosts(data);
      } catch (err) {_logErrorToProduction('Failed to fetch blog posts', _{ data: err});
      } finally {_setIsLoading(false);}
    };

    fetchPosts();
  }, [query]);

  // Filter blog posts based on selected category only.
  // Search filtering is handled server-side.
  const _filteredPosts = posts.filter(post => {_const _matchesCategory =
      selectedCategory === "All Categories" || post.category === selectedCategory;

    return matchesCategory;});
  
  // Get featured posts
  const _featuredPosts = posts.filter(post => post.isFeatured);

  logInfo('BlogPage filteredPosts:', {_data: filteredPosts});
  
  return (_<>
      <SEO
        title="Blog - Latest from Zion Tech Marketplace"
        description="Read expert insights and news on the Zion Tech Marketplace blog. Stay informed about trends, _tips, _and stories that help you succeed. Sign up for updates and never miss a breakthrough."
        keywords="AI blog, _tech trends, _IT services blog, _artificial intelligence news, _technology innovation, _digital transformation, _sustainable IT"
        canonical="https://app.ziontechgroup.com/blog"
      />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <h1>Blog</h1>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>AI & Tech Insights</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Expert perspectives on artificial intelligence, _tech innovation, _and digital transformation
            </p>
          </div>
          
          {_/* Featured Post Section - Only show if there are featured posts */}
          {_featuredPosts.length > 0 && (() => {
            const _featuredPost = featuredPosts[0];
            if (!featuredPost) return null;
            
            return (_<div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={featuredPost.featuredImage}
                    alt={_featuredPost.featuredImageAlt || featuredPost.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    onError={_(e) => {
                      const _target = e.currentTarget as HTMLImageElement;
                      target.src = "/images/blog-placeholder.svg";}}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-2">
                    {_featuredPost.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {_featuredPost.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6">
                    {_featuredPost.excerpt}
                  </p>
                  <div className="flex items-center mb-6">
                    <img
                      src={_featuredPost.author.avatarUrl}
                      alt={_featuredPost.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                      onError={_(_e) => {
                        const _target = e.currentTarget as HTMLImageElement;
                        target.src = "/images/blog-placeholder.svg";}}
                    />
                    <div>
                      <p className="text-white font-medium">{_featuredPost.author.name}</p>
                      <p className="text-sm text-zion-slate-light">
                        {_featuredPost.publishedDate} • {_featuredPost.readTime}
                      </p>
                    </div>
                  </div>
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit"
                  >
                    <Link href={_`/blog/${featuredPost.slug}`}>
                      Read Article
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            );
          })()}
        
          {_/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={_searchQuery}
                  onChange={_(_e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
                />
              </div>
              
              <Select value={_selectedCategory} onValueChange={_setSelectedCategory}>
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" aria-label="Filter by category">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {_CATEGORIES.map(_(category) => (
                    <SelectItem key={category} value={_category} className="text-white">
                      {_category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {_isLoading && (
              <div className="text-center py-4 text-white">
                Loading articles...
              </div>
            )}
          </div>

          {_/* Blog Posts Grid */}
          {_!isLoading && filteredPosts.length > 0 ? (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (_<Card
                  key={post.id}
                  asChild
                  className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300 group-hover:shadow-lg"
                >
                  <Link href={_`/blog/${post.slug}`} className="block group">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={_post.featuredImage}
                      alt={_post.featuredImageAlt || post.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      onError={_(e) => {
                        const _target = e.currentTarget as HTMLImageElement;
                        target.src = "/images/blog-placeholder.svg";}}
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full">
                        {_post.category}
                      </span>
                      <div className="text-xs text-zion-slate-light">
                        {_post.publishedDate} • {_post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {_post.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4 line-clamp-3">
                      {_post.excerpt}
                    </p>
                    <div className="flex items-center">
                      <img
                        src={_post.author.avatarUrl}
                        alt={_post.author.name}
                        className="w-8 h-8 rounded-full mr-2"
                        onError={_(_e) => {
                          const _target = e.currentTarget as HTMLImageElement;
                          target.src = "/images/blog-placeholder.svg";}}
                      />
                      <span className="text-sm text-white">{_post.author.name}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <span className="text-zion-cyan group-hover:text-zion-purple">Read More →</span>
                  </CardFooter>
                  </Link>
                </Card>
              ))}
            </div>
          ) : null}

          {_/* No Results Message - Show only if not loading and no posts */}
          {_!isLoading && filteredPosts.length === 0 && (_<div className="text-center py-16">
              <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-zion-slate-light mb-6">Try adjusting your search or filter criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Categories");}}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
