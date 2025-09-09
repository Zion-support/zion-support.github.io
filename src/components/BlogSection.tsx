import React from 'react';
import { Link } from 'react-router-dom';

// Get the 3 most recent blog posts
const recentPosts = [...BLOG_POSTS].sort((a, b) => {
  return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
}).slice(0, 3);

// Define a sub-component for the image to manage its state
const PostImage = ({ post }: { post: typeof recentPosts[0] }) => {
  const [imageSrc, setImageSrc] = useState(post.featuredImage);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    if (!imageError) { // Prevent infinite loops if placeholder also fails
      setImageSrc("/images/blog-placeholder.svg");
      setImageError(true);
    }
  };

  return (
    <Image
      src={imageSrc}
      alt={post.title}
      width={300} // Placeholder width
      height={200} // Placeholder height
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // General sizes
      onError={handleImageError}
      className="object-cover w-full h-full hover:opacity-80 transition-opacity duration-300"
      priority={false} // Not LCP
    />
  );
};

export function BlogSection() {
  return (
    <section className="py-20 bg-zion-blue-dark" id="blog">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <GradientHeading>Latest Insights</GradientHeading>
            <p className="mt-2 text-zion-slate-light text-xl max-w-2xl">
              Stay updated with trends in AI technology, marketplace strategies, and IT services
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 border-zion-purple text-white hover:bg-zion-purple/10"
            asChild
          >
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <Card
              key={post.id}
              asChild
              className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 overflow-hidden group-hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="h-48 bg-zion-blue-dark relative overflow-hidden">
                  <PostImage post={post} /> {/* Use the sub-component */}
                  <div className="absolute bottom-4 left-4 text-zion-purple/70 text-4xl font-bold">{index + 1}</div>
                </div>
                <h3 className="text-xl font-bold text-zion-blue-dark mb-3">{post.title}</h3>
                <p className="text-zion-blue-dark line-clamp-2">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  variant="link"
                  className="text-zion-blue-dark p-0 hover:text-zion-purple-dark"
                  asChild
                >
                  <Link href={`/blog/${post.slug}`}>Read More →</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/types/blog';

export const BlogSection: React.FC = () => {
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Insights & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest articles on AI, technology trends, and business innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.tags[0]}
                  </Badge>
                </div>
                <CardTitle className="text-lg line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>
                
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
