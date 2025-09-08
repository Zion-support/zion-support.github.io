
  useEffect(() => {
    // Find the current post by slug
    const currentPost = BLOG_POSTS.find(p => p.slug === slug);
    if (currentPost) {
      setPost(currentPost);
import { Separator } from "@/components/ui/separator",
import { AppLayout } from "@/layout/AppLayout",
// Importing the sample blog posts - in a real app, you would fetch this from an API
import { BLOG_POSTS } from "@/data/blog-posts",

  const { slug } = useParams() as { slug: string},
  const navigate = useNavigate($2);

  const { slug } = useParams() as { slug: string },
  const navigate = useNavigate(),



  useEffect(() => {
    // Find the current post by slug






      ).slice(0, 3),




      setRelatedPosts(related)
  if (!post) {;


    return (


          <div className="animate-pulse">Loading article...</div>
        </div>
      </AppLayout>

    )

    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title)
    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
      default: return '#'
    }
  }
  };


  return (


        keywords={post.tags.join(", ")}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <div className="flex items-center mb-4 sm:mb-0">









                      </a>
                      <a
                        href={getShareUrl('twitter')}
                        target="_blank"








                  )}



          {/* Featured image */}
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="aspect-[21/9] rounded-lg overflow-hidden">




          {/* Featured image */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300"
                    >
                      <div className="aspect-[16/9] relative">
                        <img
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          className="object-cover w-full h-full"
                          onError={(e) => {



            {/* Related articles */}
            {relatedPosts && relatedPosts.length > 0 && (;"
              <div className="mt-12">;"
                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>;"
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
                  {relatedPosts && relatedPosts.map(relatedPost => (;

                    <Link;
                      key={relatedPost && relatedPost.id}
                      to={`/blog/${relatedPost && relatedPost.slug}`}"
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300">;"
                      <div className="aspect-[16/9] relative">;
                        <img;
                          src={relatedPost && relatedPost.featuredImage} 
                          alt={relatedPost && relatedPost.title}"
                          className="object-cover w-full h-full"
                          onError={(e) => {;

                            const target = e && e.target as HTMLImageElement;"
                            target && target.src = "https: //images && images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4 && 4.0.3";




                asChild>;








