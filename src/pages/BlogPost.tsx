<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  Bookmark, 
  Heart,
  MessageSquare,
  ArrowLeft,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Link
} from 'lucide-react';

const BlogPost = () => {
  const blogPost = {
    id: 1,
    title: "The Future of AI in Business: 2024 Trends and Predictions",
    excerpt: "Discover how artificial intelligence is reshaping industries and what businesses need to know to stay competitive in the AI revolution.",
    content: `
      <p class="mb-6">Artificial Intelligence has evolved from a futuristic concept to a fundamental business tool that's transforming industries across the globe. As we move through 2024, the pace of AI adoption is accelerating, and businesses that fail to adapt risk being left behind.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Key AI Trends Shaping 2024</h2>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">1. Generative AI Goes Mainstream</h3>
      <p class="mb-4">Generative AI tools like ChatGPT, DALL-E, and Midjourney have moved beyond novelty to become essential business tools. Companies are now integrating these technologies into their workflows for content creation, design, and customer service.</p>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">2. AI-Powered Decision Making</h3>
      <p class="mb-4">Businesses are increasingly relying on AI to make data-driven decisions. From predictive analytics to automated reporting, AI is helping executives make better, faster decisions based on comprehensive data analysis.</p>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">3. Hyper-Personalization</h3>
      <p class="mb-4">AI is enabling unprecedented levels of personalization in customer experiences. From product recommendations to marketing campaigns, businesses can now deliver highly targeted content that resonates with individual customers.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Implementation Strategies for Businesses</h2>
      
      <p class="mb-4">Successfully implementing AI requires a strategic approach. Here are key considerations for businesses looking to adopt AI technologies:</p>
      
      <ul class="list-disc list-inside space-y-2 mb-6 text-zion-slate-light">
        <li>Start with clear business objectives and use cases</li>
        <li>Invest in data quality and infrastructure</li>
        <li>Focus on employee training and change management</li>
        <li>Ensure ethical AI practices and transparency</li>
        <li>Measure ROI and iterate based on results</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Challenges and Considerations</h2>
      
      <p class="mb-4">While AI offers tremendous opportunities, businesses must also navigate several challenges:</p>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">Data Privacy and Security</h3>
      <p class="mb-4">As AI systems process vast amounts of data, ensuring privacy and security becomes paramount. Businesses must implement robust data protection measures and comply with relevant regulations.</p>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">Ethical AI Development</h3>
      <p class="mb-4">AI systems must be developed and deployed ethically, avoiding bias and ensuring fairness. This requires careful consideration of training data and algorithm design.</p>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">Workforce Transformation</h3>
      <p class="mb-4">AI will change the nature of work, requiring businesses to reskill employees and adapt organizational structures. Success depends on managing this transition effectively.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Looking Ahead: 2025 and Beyond</h2>
      
      <p class="mb-6">As we look to the future, AI will continue to evolve and become even more integrated into business operations. The key to success will be staying informed about emerging technologies while maintaining focus on business value and customer needs.</p>
      
      <p class="mb-6">Businesses that embrace AI strategically and ethically will be well-positioned to thrive in the increasingly competitive digital landscape.</p>
    `,
    author: {
      name: "Zion Tech Team",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      bio: "Our team of AI experts and business strategists share insights on emerging technologies and their business applications."
    },
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Technology",
    tags: ["AI", "Business", "Technology", "Innovation", "Digital Transformation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=400"
  };

  const relatedPosts = [
    {
      title: "Micro SAAS: The New Era of Software Solutions",
      excerpt: "Explore how micro SAAS platforms are democratizing software access and enabling businesses to scale efficiently.",
      date: "2024-01-12",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Learn essential cybersecurity strategies to protect your business from evolving digital threats.",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Cloud Migration Strategies: A Comprehensive Guide",
      excerpt: "Navigate the complexities of cloud migration with proven strategies and best practices.",
      date: "2024-01-08",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&h=250"
    }
  ];

  const comments = [
    {
      id: 1,
      author: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=50&h=50",
      content: "Great insights on AI trends! We've been implementing AI in our customer service and the results are impressive.",
      date: "2024-01-16",
      replies: 2
    },
    {
      id: 2,
      author: "Mike Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=50&h=50",
      content: "The section on ethical AI development is crucial. Many companies are rushing into AI without considering the implications.",
      date: "2024-01-16",
      replies: 1
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="outline" className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </div>

        {/* Article Header */}
        <div className="mb-12">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">{blogPost.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {blogPost.title}
            </h1>
            <p className="text-zion-slate-light text-lg mb-8">
              {blogPost.excerpt}
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-zion-slate-light mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{blogPost.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(blogPost.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{blogPost.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Button variant="outline" className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
              <Heart className="h-4 w-4 mr-2" />
              Like
            </Button>
            <Button variant="outline" className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
              <Bookmark className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blogPost.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-zion-cyan border-zion-cyan/20">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Content */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 mb-12">
              <CardContent className="p-8">
                <div 
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </CardContent>
            </Card>

            {/* Author Bio */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 mb-12">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={blogPost.author.avatar}
                    alt={blogPost.author.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-white font-medium mb-2">About {blogPost.author.name}</h3>
                    <p className="text-zion-slate-light">{blogPost.author.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 mb-12">
              <CardHeader>
                <CardTitle className="text-white">Comments ({comments.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border-b border-zion-cyan/10 pb-6 last:border-b-0">
                      <div className="flex items-start gap-4">
                        <img
                          src={comment.avatar}
                          alt={comment.author}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-white font-medium">{comment.author}</span>
                            <span className="text-zion-slate-light text-sm">{new Date(comment.date).toLocaleDateString()}</span>
                          </div>
                          <p className="text-zion-slate-light mb-3">{comment.content}</p>
                          <div className="flex items-center gap-4">
                            <button className="text-zion-cyan hover:text-zion-cyan-light text-sm">
                              Reply
                            </button>
                            <button className="text-zion-cyan hover:text-zion-cyan-light text-sm">
                              Like
                            </button>
                            {comment.replies > 0 && (
                              <span className="text-zion-slate-light text-sm">
                                {comment.replies} replies
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comment Form */}
                <div className="mt-8 pt-6 border-t border-zion-cyan/20">
                  <h4 className="text-white font-medium mb-4">Leave a Comment</h4>
                  <textarea
                    rows={4}
                    placeholder="Share your thoughts..."
                    className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none resize-none"
                  />
                  <Button className="mt-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                    Post Comment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button variant="outline" className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous Post
              </Button>
              <Button variant="outline" className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
                Next Post
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Share */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 mb-8">
              <CardHeader>
                <CardTitle className="text-white text-lg">Share This Post</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                    <Facebook className="h-4 w-4 mr-2" />
                    Share on Facebook
                  </Button>
                  <Button variant="outline" className="w-full border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                    <Twitter className="h-4 w-4 mr-2" />
                    Share on Twitter
                  </Button>
                  <Button variant="outline" className="w-full border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                    <Linkedin className="h-4 w-4 mr-2" />
                    Share on LinkedIn
                  </Button>
                  <Button variant="outline" className="w-full border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                    <Link className="h-4 w-4 mr-2" />
                    Copy Link
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Posts */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">Related Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {relatedPosts.map((post, index) => (
                    <div key={index} className="border-b border-zion-cyan/10 pb-4 last:border-b-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="text-white font-medium mb-2 line-clamp-2">{post.title}</h4>
                      <p className="text-zion-slate-light text-sm mb-2 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-zion-slate-light">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
=======
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SEO } from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import ImageWithRetry from '@/components/ui/ImageWithRetry';
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import type { BlogPost as BlogPostType } from "@/types/blog";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from 'react-markdown';
import {logErrorToProduction} from '@/utils/productionLogger';

// Importing the sample blog posts - in a real app, you would fetch this from an API
import { BLOG_POSTS } from "@/data/blog-posts";
import { useSkeletonTimeout } from '@/hooks/useSkeletonTimeout';
import { fetchWithRetry } from '@/utils/fetchWithRetry';

export default function BlogPost() {

  const router = useRouter();
  const { slug } = router.query as { slug: string };
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const timedOut = useSkeletonTimeout(20000);
  
  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchWithRetry(`/api/blog/${slug}`);
        setPost(data);
        const related = BLOG_POSTS.filter(
          (p) =>
            p.id !== data.id &&
            (p.category === data.category ||
              p.tags.some((tag) => data.tags.includes(tag)))
        ).slice(0, 3);
        setRelatedPosts(related);
        setIsLoading(false);
        return;
      } catch (err) {
        logErrorToProduction('Failed to fetch blog post', { data: err });
        setError('Failed to load article');
      }

      const currentPost = BLOG_POSTS.find((p) => p.slug === slug);
      if (currentPost) {
        setPost(currentPost);
        const related = BLOG_POSTS.filter(
          (p) =>
            p.id !== currentPost.id &&
            (p.category === currentPost.category ||
              p.tags.some((tag) => currentPost.tags.includes(tag)))
        ).slice(0, 3);
        setRelatedPosts(related);
      } else {
        router.replace('/blog');
      }
      setIsLoading(false);
    };

    fetchPost();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, router]);
  
  if (isLoading && !timedOut) {
    return (
      <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">
        <div className="animate-pulse">Loading article...</div>
      </div>
    );
  }

  if (!post && (error || timedOut)) {
    return (
      <div className="min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4">
        <p>Failed to load article.</p>
        <Button onClick={() => router.reload()}>Retry</Button>
      </div>
    );
  }

  // If post is still null after loading, show not found
  if (!post) {
    return (
      <div className="min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4">
        <p>Article not found.</p>
        <Button onClick={() => router.push('/blog')}>Back to Blog</Button>
      </div>
    );
  }

  // Helper function to get share URL
  const getShareUrl = (platform: string) => {
    if (!post) return '';
    
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    
    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
      default:
        return '#';
    }
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedDate,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
  };
  
  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        ogImage={post.featuredImage}
        canonical={`https://app.ziontechgroup.com/blog/${post.slug}`}
      />
      <JsonLd data={articleLd} />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          {/* Back to blog button */}
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
          
          {/* Article header */}
          <div className="mb-8 max-w-4xl mx-auto">
            <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              {post.excerpt}
            </p>
            
            {/* Author and metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <div className="flex items-center mb-4 sm:mb-0">
                <ImageWithRetry
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full mr-3"
                  fallbackSrc="/images/blog-placeholder.svg"
                />
                <div>
                  <p className="text-white font-medium">{post.author.name}</p>
                  <p className="text-sm text-zion-slate-light">{post.author.title}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-zion-slate-light">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{post.publishedDate}</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{post.readTime}</span>
                </div>
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-zion-slate-light hover:text-white hover:bg-zion-blue-dark"
                    onClick={() => setShowShareMenu(!showShareMenu)}
                  >
                    <Share2 className="h-4 w-4 mr-1" />
                    <span className="text-sm">Share</span>
                  </Button>
                  
                  {showShareMenu && (
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
                        href={getShareUrl('twitter')}
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
                        href={getShareUrl('linkedin')}
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
          
          {/* Featured image */}
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="aspect-[21/9] rounded-lg overflow-hidden">
              <ImageWithRetry
                src={post.featuredImage}
                alt={post.featuredImageAlt || post.title}
                className="object-cover w-full h-full"
                fallbackSrc="/images/blog-placeholder.svg"
              />
            </div>
          </div>
          
          {/* Article content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <ReactMarkdown>
                {post.content}
              </ReactMarkdown>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <Separator className="my-12 bg-zion-blue-light" />
            
            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <Link 
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300"
                    >
                      <div className="aspect-[16/9] relative">
                        <ImageWithRetry
                          src={relatedPost.featuredImage}
                          alt={relatedPost.featuredImageAlt || relatedPost.title}
                          className="object-cover w-full h-full"
                          fallbackSrc="/images/blog-placeholder.svg"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-zion-cyan">{relatedPost.category}</span>
                        <h4 className="text-white font-bold mt-1 line-clamp-2">{relatedPost.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 text-center">
              <p className="text-zion-slate-light">
                Ready to put these ideas into action? Explore our{' '}
                <Link href="/services" className="text-zion-cyan underline">AI services</Link>{' '}
                or browse expert{' '}
                <Link href="/talent" className="text-zion-cyan underline">talent</Link> to accelerate your projects.
              </p>
            </div>

            {/* Navigation */}
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
>>>>>>> autobot/2025-08-24T03-49-38-332Z
