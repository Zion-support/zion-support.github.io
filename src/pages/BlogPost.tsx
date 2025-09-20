import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import type { BlogPost as BlogPostType } from "@/types/blog";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from 'react-markdown';
import { logErrorToProduction } from '@/utils/productionLogger';
import { BLOG_POSTS } from "@/data/blog-posts";
import { useSkeletonTimeout } from '@/hooks/useSkeletonTimeout';
import { fetchWithRetry } from '@/utils/fetchWithRetry';
import { SEO } from '@/components/SEO';


// Mock data - in a real app this would come from props or API
const post = {
  title: 'Sample Blog Post',
  excerpt: 'This is a sample blog post excerpt',
  tags: ['AI', 'Technology'],
  featuredImage: '/images/sample.jpg',
  slug: 'sample-post'
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": post.title,
  "description": post.excerpt
};

export default function BlogPost() {
  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        ogImage={post.featuredImage}
        canonical={`https://app.ziontechgroup.com/blog/${post.slug}`}
      />
      
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto'>
          {/* Back to blog button */}
          <div className='mb-8'>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="text-zion-blue hover:bg-zion-blue hover:text-white border-zion-blue"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </div>

          {/* Blog post content */}
          <article className='max-w-4xl mx-auto'>
            <header className='mb-8'>
              <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                {post.title}
              </h1>
              <div className='flex items-center text-zion-light-gray text-sm space-x-4'>
                <div className='flex items-center'>
                  <Calendar className='w-4 h-4 mr-2' />
                  {new Date().toLocaleDateString()}
                </div>
                <div className='flex items-center'>
                  <Clock className='w-4 h-4 mr-2' />
                  5 min read
                </div>
              </div>
            </header>

            <div className='prose prose-lg prose-invert max-w-none'>
              <p className='text-xl text-zion-light-gray mb-8'>
                {post.excerpt}
              </p>
              
              <div className='bg-zion-dark-blue p-8 rounded-lg mb-8'>
                <h2 className='text-2xl font-bold text-white mb-4'>Sample Content</h2>
                <p className='text-zion-light-gray mb-4'>
                  This is a sample blog post content. In a real application, this would contain the actual blog post content fetched from a CMS or API.
                </p>
                <p className='text-zion-light-gray'>
                  The content would include rich text, images, code snippets, and other formatted content to provide valuable information to readers.
                </p>
              </div>

              <h2 className='text-2xl font-bold text-white mb-4'>Key Takeaways</h2>
              <ul className='list-disc list-inside text-zion-light-gray space-y-2'>
                <li>This is a sample blog post</li>
                <li>It demonstrates the blog post layout</li>
                <li>Real content would be fetched from an API</li>
                <li>The design is responsive and accessible</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}