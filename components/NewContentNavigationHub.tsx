import React from 'react';
import Link from 'next/link';

const NewContentNavigationHub: React.FC = () => {
  const newContent = [
    {
      title: "Next-Generation AI Systems Revolution
      description: "Revolutionary breakthrough in AI systems with 99.9% automation accuracy and $2.8B proven ROI
      href: "/blog/ai-2025-january-next-generation-ai-systems-revolution
      category: "AI Innovation
      readTime: "12 min read
      featured: true,
      metrics: {
        accuracy: "99.9%
        roi: "$2.8B
        costReduction: "87%"
      }
    },
    {
      title: "Autonomous Business Intelligence Revolution
      description: "Transform business intelligence with 95% decision accuracy and $1.2B value creation
      href: "/blog/ai-2025-january-autonomous-business-intelligence-revolution
      category: "Business Intelligence
      readTime: "15 min read
      featured: true,
      metrics: {
        accuracy: "95%
        roi: "$1.2B
        insights: "Real-time"
      }
    },
    {
      title: "$2.8B Fortune 100 Success Story
      description: "How a Fortune 100 manufacturing conglomerate achieved unprecedented results with next-gen AI
      href: "/case-studies/ai-2025-january-next-generation-ai-systems-2-8-billion-success
      category: "Case Studies
      readTime: "18 min read
      featured: true,
      metrics: {
        companies: "47 Countries
        employees: "2.3M
        roi: "$2.8B"
      }
    }
  ];

  return (
    <section className="text-left">
      <div className="text-left">
        <div className="text-left">
          <div className="text-left">
            <span className="text-left">
              🆕 NEW JANUARY 2025 CONTENT
            <
          </div>
          <h2 className="text-left">
            Latest AI Breakthroughs & Success Stories
          </h2>
          <p className="text-left">
            Discover the newest content covering revolutionary AI systems, autonomous business intelligence, 
            and real-world success stories with proven ROI.
          </p>
        </div>

        <div className="text-left">
          {newContent.map((content, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                content.featured 
                  ? 'border-indigo-500/50 hover:border-indigo-400/70' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {content.featured && (
                <div className="text-left">
                  <span className="text-left">
                    FEATURED
                  <
                </div>
              )}
              
              <div className="text-left">
                <div className="text-left">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    content.category === 'AI Innovation' ? 'bg-indigo-500/20 text-indigo-300' :
                    content.category === 'Business Intelligence' ? 'bg-purple-500/20 text-purple-300' :
                    'bg-green-500/20 text-green-300'
                  }`}>
                    {content.category}
                  <
                  <span className="text-left">{content.readTime}<
                </div>
                
                <h3 className="text-left">
                  {content.title}
                </h3>
                
                <p className="text-left">
                  {content.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="text-left">
                {Object.entries(content.metrics).map(([key, value], metricIndex) => (
                  <div key={metricIndex} className="text-left">
                    <div className="text-left">{value}</div>
                    <div className="text-left">{key}</div>
                  </div>
                ))}
              </div>

              <Link
                href={content.href}
                className={`block w-full text-center py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
                  content.featured
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white shadow-lg hover:shadow-indigo-500/50'
                    : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/20 hover:border-white/40'
                }`}
              >
                {content.category === 'Case Studies' ? 'View Case Study →' : 'Read Article →'}
              </Link>
            </div>
          ))}
        </div>

        {/* Quick Access Links */}
        <div className="text-left">
          <h3 className="text-left">
            Quick Access to All New Content
          </h3>
          <div className="text-left">
            <Link
              href="/blog"
              className="text-left"
            >
              📚 All Blog Posts
            </Link>
            <Link
              href="/case-studies"
              className="text-left"
            >
              💼 Case Studies
            </Link>
            <Link
              href="/services"
              className="text-left"
            >
              🚀 AI Services
            </Link>
            <Link
              href="/contact"
              className="text-left"
            >
              💬 Contact Us
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-left">
          <div className="text-left">
            <h3 className="text-left">
              Ready to Implement Next-Generation AI Systems?
            </h3>
            <p className="text-left">
              Join the organizations already achieving unprecedented results with our revolutionary AI solutions. 
              Get expert guidance and implementation support from our experienced team.
            </p>
            <div className="text-left">
              <Link
                href="/contact"
                className="text-left"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services/ai-implementation"
                className="text-left"
              >
                View Implementation Services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentNavigationHub;