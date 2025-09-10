import React from 'react';
<<<<<<< HEAD
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const BlogPost = () => {
  const { slug } = useParams();
  
  // Mock blog post data
  const post = {
    id: slug,
    title: "The Future of AI in Business",
    content: `
      <p>Artificial Intelligence is revolutionizing the way businesses operate, offering unprecedented opportunities for growth and efficiency. In this comprehensive guide, we explore the key trends and applications that are shaping the future of business.</p>
      
      <h2>Key AI Trends in 2024</h2>
      <p>From machine learning to natural language processing, AI technologies are becoming more sophisticated and accessible. Businesses are leveraging these tools to automate processes, gain insights from data, and enhance customer experiences.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Successfully implementing AI in your business requires careful planning and execution. We'll walk you through the essential steps to get started with AI transformation.</p>
      
      <h2>Future Outlook</h2>
      <p>The future of AI in business looks promising, with continued advancements in technology and increasing adoption across industries. Companies that embrace AI today will be better positioned for tomorrow's challenges.</p>
    `,
    author: "Zion Tech Team",
    date: "2024-01-15",
    readTime: "5 min read"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title={`${post.title} - Zion Tech Group Blog`}
        description="Read our latest insights on AI and technology trends."
        keywords={["blog", "AI", "technology", "business"]}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <article className="bg-slate-800/50 rounded-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-400 mb-6">
              <User className="h-4 w-4 mr-2" />
              <span className="mr-4">{post.author}</span>
              <Calendar className="h-4 w-4 mr-2" />
              <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div 
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
=======
import SEO from '../components/SEO';

export default function BlogPost() {
  return (
    <>
      <SEO 
        title="Blog Post - Zion Tech Group"
        description="Read our latest insights on AI, technology, and business innovation."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Blog Post</h1>
            <p className="text-xl text-slate-300">
              This page is under construction. Please check back later for our latest blog posts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
