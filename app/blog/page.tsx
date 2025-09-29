import Link from 'next/link';

export const metadata = {
  title: 'AI & Tech Blog | Zion Tech Group',
  description: 'Latest insights on AI trends, technology innovations, and business automation strategies.',
};

export default function BlogPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16 py-12 bg-gradient-to-br from-blue-50 to-teal-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI & Technology Insights
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay ahead with expert insights on AI trends, automation strategies, and emerging technologies
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white">
            <div className="max-w-4xl">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Featured Article
              </span>
              <h2 className="text-3xl font-bold mb-4">
                The Future of AI in Business: 2025 Trends and Predictions
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Explore the latest AI trends shaping business operations, from autonomous workflows 
                to predictive analytics, and discover how companies are gaining competitive advantages.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span>January 17, 2025</span>
                <span>•</span>
                <span>8 min read</span>
                <span>•</span>
                <span>AI Trends</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <BlogPost
            title="AI Revolution 2025: Complete Business Transformation Guide"
            excerpt="Discover how AI is reshaping industries and creating unprecedented opportunities for growth in 2025. Complete strategy guide with implementation roadmap."
            date="January 17, 2025"
            category="Featured"
            readTime="12 min"
            image="🚀"
            featured={true}
            href="/blog/ai-revolution-2025"
          />
          <BlogPost
            title="AI Workflow Automation: Complete Implementation Guide"
            excerpt="Master AI workflow automation with our comprehensive guide. Reduce manual work by 80% and improve efficiency across all departments."
            date="January 17, 2025"
            category="Guide"
            readTime="15 min"
            image="⚙️"
            featured={true}
            href="/blog/ai-workflow-automation-guide"
          />
          <BlogPost
            title="AI Analytics Implementation: Transform Data into Insights"
            excerpt="Learn how to implement AI-powered analytics that transform raw data into actionable business insights with real-time dashboards and predictive modeling."
            date="January 17, 2025"
            category="Analytics"
            readTime="18 min"
            image="📊"
            featured={true}
            href="/blog/ai-analytics-implementation"
          />
          <BlogPost
            title="AI Agents in the Enterprise: 2025 Adoption Playbook"
            excerpt="A practical playbook for deploying autonomous AI agents across revenue ops and IT with measurable ROI."
            date="September 29, 2025"
            category="Autonomous AI"
            readTime="10 min"
            image="🧠"
            href="/blog/ai-agents-in-the-enterprise-2025"
          />
          <BlogPost
            title="Cloud Migration Best Practices for 2025"
            excerpt="Learn the essential strategies for successful cloud migration, including zero-downtime approaches and cost optimization techniques."
            date="January 12, 2025"
            category="Cloud"
            readTime="7 min"
            image="☁️"
            href="/blog/cloud-migration-best-practices"
          />
          <BlogPost
            title="Cybersecurity in the AI Era: Protecting Your Digital Assets"
            excerpt="Explore advanced cybersecurity strategies for AI-powered environments, including zero-trust architecture and automated threat detection."
            date="January 10, 2025"
            category="Security"
            readTime="5 min"
            image="🔒"
            href="/blog/cybersecurity-ai-era"
          />
          <BlogPost
            title="DevOps Automation: Scaling Infrastructure with Intelligence"
            excerpt="Learn how automated DevOps practices are enabling rapid deployment, infrastructure scaling, and continuous integration at enterprise scale."
            date="January 5, 2025"
            category="DevOps"
            readTime="8 min"
            image="⚙️"
            href="/blog/devops-automation-scaling"
          />
          <BlogPost
            title="The Rise of AI Virtual Assistants in Customer Service"
            excerpt="Discover how AI virtual assistants are revolutionizing customer support with 24/7 availability, natural language processing, and personalized interactions."
            date="January 3, 2025"
            category="AI"
            readTime="5 min"
            image="💬"
            href="/blog/ai-virtual-assistants-customer-service"
          />
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Never Miss an Update
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest AI insights, tech trends, and exclusive content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogPost({
  title,
  excerpt,
  date,
  category,
  readTime,
  image,
  featured = false,
  href,
}: {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
  href?: string;
}) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Featured':
        return 'bg-orange-100 text-orange-800';
      case 'Guide':
        return 'bg-emerald-100 text-emerald-800';
      case 'Analytics':
        return 'bg-indigo-100 text-indigo-800';
      case 'Autonomous AI':
        return 'bg-purple-100 text-purple-800';
      case 'Cloud':
        return 'bg-blue-100 text-blue-800';
      case 'Security':
        return 'bg-red-100 text-red-800';
      case 'DevOps':
        return 'bg-gray-100 text-gray-800';
      case 'AI':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
    if (href) {
      return (
        <Link href={href} className="block">
          {children}
        </Link>
      );
    }
    return <>{children}</>;
  };

  return (
    <ContentWrapper>
      <article className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border ${
        featured ? 'border-orange-200 ring-2 ring-orange-100' : 'border-gray-200'
      } group cursor-pointer`}>
        <div className="text-4xl mb-4">{image}</div>
        <div className="mb-4 flex items-center gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(category)}`}>
            {category}
          </span>
          {featured && (
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
        {href && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
              Read Article →
            </div>
          </div>
        )}
      </article>
    </ContentWrapper>
  );
}