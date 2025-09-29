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
            title="GenAI Guardrails 2025: Practical Playbook for Reliable AI"
            excerpt="Concrete patterns to make generative AI systems safe, reliable, and auditable in production."
            date="September 29, 2025"
            category="AI Reliability"
            readTime="11 min"
            image="🛡️"
          />
          <BlogPost
            title="AI Agents in the Enterprise: 2025 Adoption Playbook"
            excerpt="A practical playbook for deploying autonomous AI agents across revenue ops and IT with measurable ROI."
            date="September 29, 2025"
            category="Autonomous AI"
            readTime="10 min"
            image="🧠"
          />
          <BlogPost
            title="AI Workflow Automation: Transforming Business Operations"
            excerpt="Discover how AI-powered workflow automation is revolutionizing business processes, reducing manual work by 80% and improving efficiency across industries."
            date="January 15, 2025"
            category="Automation"
            readTime="6 min"
            image="🤖"
          />
          <BlogPost
            title="Cloud Migration Best Practices for 2025"
            excerpt="Learn the essential strategies for successful cloud migration, including zero-downtime approaches and cost optimization techniques."
            date="January 12, 2025"
            category="Cloud"
            readTime="7 min"
            image="☁️"
          />
          <BlogPost
            title="Cybersecurity in the AI Era: Protecting Your Digital Assets"
            excerpt="Explore advanced cybersecurity strategies for AI-powered environments, including zero-trust architecture and automated threat detection."
            date="January 10, 2025"
            category="Security"
            readTime="5 min"
            image="🔒"
          />
          <BlogPost
            title="Data Analytics Revolution: From Insights to Action"
            excerpt="See how modern data analytics platforms are transforming raw data into actionable business insights with real-time dashboards and predictive modeling."
            date="January 8, 2025"
            category="Analytics"
            readTime="6 min"
            image="📊"
          />
          <BlogPost
            title="DevOps Automation: Scaling Infrastructure with Intelligence"
            excerpt="Learn how automated DevOps practices are enabling rapid deployment, infrastructure scaling, and continuous integration at enterprise scale."
            date="January 5, 2025"
            category="DevOps"
            readTime="8 min"
            image="⚙️"
          />
          <BlogPost
            title="The Rise of AI Virtual Assistants in Customer Service"
            excerpt="Discover how AI virtual assistants are revolutionizing customer support with 24/7 availability, natural language processing, and personalized interactions."
            date="January 3, 2025"
            category="AI"
            readTime="5 min"
            image="💬"
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
}: {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}) {
  return (
    <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
      <div className="text-4xl mb-4">{image}</div>
      <div className="mb-4">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-3">
        {excerpt}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{date}</span>
        <span>{readTime}</span>
      </div>
    </article>
  );
}