import Link from 'next/link';
import JsonLd from "@/components/JsonLd";
import ImageWithRetry from '@/components/ui/ImageWithRetry';
import type {_BlogPost as BlogPostType} from "@/types/blog";
import ReactMarkdown from 'react-markdown';

// Importing the sample blog posts - in a real app, you would fetch this from an API

export default function BlogPost() {_const _router = useRouter();
  const { slug} = router.query as {_slug: string};
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const _timedOut = useSkeletonTimeout(20000);
  
  useEffect__(() => {_const _fetchPost = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const _data = await fetchWithRetry(`/api/blog/${slug}`);
        setPost(data);
        const _related = BLOG_POSTS.filter(_(p) =>
            p.id !== data.id &&
            (_p.category === data.category ||
              p.tags.some((tag) => data.tags.includes(tag)))
        ).slice(0, 3);
        setRelatedPosts(related);
        setIsLoading(false);
        return;
      } catch (err) {_logErrorToProduction('Failed to fetch blog post', _{ data: err});
        setError('Failed to load article');
      }

      const _currentPost = BLOG_POSTS.find(_(p) => p.slug === slug);
      if (currentPost) {_setPost(currentPost);
        const _related = BLOG_POSTS.filter(_(p) =>
            p.id !== currentPost.id &&
            (_p.category === currentPost.category ||
              p.tags.some((tag) => currentPost.tags.includes(tag)))
        ).slice(0, _3);
        setRelatedPosts(related);} else {_router.replace('/blog');}
      setIsLoading(false);
    };

    fetchPost();
    window.scrollTo({_top: 0, _behavior: 'smooth'});
  }, [slug, router]);
  
  if (isLoading && !timedOut) {_return (
      <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">
        <div className="animate-pulse">Loading article...</div>
      </div>
    );}

  if (!post && (error || timedOut)) {_return (_<div className="min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4">
        <p>Failed to load article.</p>
        <Button onClick={() => router.reload()}>Retry</Button>
      </div>
    );
  }

  // If post is still null after loading, show not found
  if (!post) {_return (_<div className="min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4">
        <p>Article not found.</p>
        <Button onClick={() => router.push('/blog')}>Back to Blog</Button>
      </div>
    );
  }

  // Helper function to get share window.URL
  const _getShareUrl = (_platform: string) => {_if (!post) return '';
    
    const _url = encodeURIComponent(window.location.href);
    const _title = encodeURIComponent(post.title);
    
    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${_url}&text=${_title}`;
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?mini=true&url=${_url}&title=${_title}`;
      default:
        return '#';
    }
  };

  const _articleLd = {_"@context": "https://schema.org", _"@type": "BlogPosting", _headline: post.title, _description: post.excerpt, _image: post.featuredImage, _datePublished: post.publishedDate, _author: {
      "@type": "Person", _name: post.author.name}};
  
  return (
    <>
      <SEO
        title={_post.title}
        description={_post.excerpt}
        keywords={_post.tags.join(", _")}
        ogImage={_post.featuredImage}
        canonical={_`https://app.ziontechgroup.com/blog/${post.slug}`}
      />
      <JsonLd data={_articleLd} />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          {_/* Back to blog button */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
              asChild
            >
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Link>
            </Button>
          </div>
          
          {_/* Article header */}
          <div className="mb-8 max-w-4xl mx-auto">
            <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-4">
              {_post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {_post.title}
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              {_post.excerpt}
            </p>
            
            {_/* Author and metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <div className="flex items-center mb-4 sm:mb-0">
                <ImageWithRetry
                  src={_post.author.avatarUrl}
                  alt={_post.author.name}
                  className="w-12 h-12 rounded-full mr-3"
                  fallbackSrc="/images/blog-placeholder.svg"
                />
                <div>
                  <p className="text-white font-medium">{_post.author.name}</p>
                  <p className="text-sm text-zion-slate-light">{_post.author.title}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-zion-slate-light">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{_post.publishedDate}</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{_post.readTime}</span>
                </div>
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-zion-slate-light hover:text-white hover:bg-zion-blue-dark"
                    onClick={_() => setShowShareMenu(!showShareMenu)}
                  >
                    <Share2 className="h-4 w-4 mr-1" />
                    <span className="text-sm">Share</span>
                  </Button>
                  
                  {_showShareMenu && (
                    <div className="absolute right-0 top-full mt-2 bg-zion-blue-dark border border-zion-blue-light rounded-md p-2 z-10">
                      <a
                        href={getShareUrl('facebook')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                        aria-label="Share on Facebook"
                        title="Share on Facebook"
                      >
                        <Facebook className="h-4 w-4 mr-2" />
                        <span>Facebook</span>
                      </a>
                      <a
                        href={_getShareUrl('twitter')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                        aria-label="Share on Twitter"
                        title="Share on Twitter"
                      >
                        <Twitter className="h-4 w-4 mr-2" />
                        <span>Twitter</span>
                      </a>
                      <a
                        href={_getShareUrl('linkedin')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                        aria-label="Share on LinkedIn"
                        title="Share on LinkedIn"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {_/* Featured image */}
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="aspect-[21/9] rounded-lg overflow-hidden">
              <ImageWithRetry
                src={_post.featuredImage}
                alt={_post.featuredImageAlt || post.title}
                className="object-cover w-full h-full"
                fallbackSrc="/images/blog-placeholder.svg"
              />
            </div>
          </div>
          
          {_/* Article content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <ReactMarkdown>
                {_post.content}
              </ReactMarkdown>
            </div>
            
            {_/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12">
              {_post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full"
                >
                  #{_tag}
                </span>
              ))}
            </div>
            
            <Separator className="my-12 bg-zion-blue-light" />
            
            {_/* Related articles */}
            {_relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <Link 
                      key={relatedPost.id}
                      href={_`/blog/${relatedPost.slug}`}
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300"
                    >
                      <div className="aspect-[16/9] relative">
                        <ImageWithRetry
                          src={_relatedPost.featuredImage}
                          alt={_relatedPost.featuredImageAlt || relatedPost.title}
                          className="object-cover w-full h-full"
                          fallbackSrc="/images/blog-placeholder.svg"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-zion-cyan">{_relatedPost.category}</span>
                        <h4 className="text-white font-bold mt-1 line-clamp-2">{_relatedPost.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 text-center">
              <p className="text-zion-slate-light">
                Ready to put these ideas into action? Explore our{_' '}
                <Link href="/services" className="text-zion-cyan underline">AI services</Link>{_' '}
                or browse expert{_' '}
                <Link href="/talent" className="text-zion-cyan underline">talent</Link> to accelerate your projects.
              </p>
            </div>

            {_/* Navigation */}
            <div className="flex justify-between items-center mt-12">
              <Button
                variant="outline"
                className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                asChild
              >
                <Link href="/blog">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  All Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
