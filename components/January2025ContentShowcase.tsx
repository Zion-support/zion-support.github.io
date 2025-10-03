import React from 'react';

const January2025ContentShowcase: React.FC = () => {
  const contentItems = [
    {
      title: "AI-Powered Customer Experience
      description: "Transform customer interactions with intelligent automation and personalized experiences that drive engagement and loyalty.
      metrics: { accuracy: "96%", satisfaction: "94%", growth: "67%" },
      category: "Customer Experience
      link: "/blog/ai-customer-experience-2025"
    },
    {
      title: "Autonomous Business Operations
      description: "Streamline operations with self-managing AI systems that optimize processes, reduce costs, and improve efficiency.
      metrics: { automation: "89%", savings: "$2.3M", efficiency: "156%" },
      category: "Business Operations
      link: "/blog/autonomous-business-operations"
    },
    {
      title: "Predictive Analytics Mastery
      description: "Leverage advanced analytics to forecast trends, predict outcomes, and make data-driven decisions with confidence.
      metrics: { accuracy: "92%", roi: "8.5x", insights: "47%" },
      category: "Analytics & Insights
      link: "/blog/predictive-analytics-mastery"
    },
    {
      title: "Intelligent Security Framework
      description: "Protect your enterprise with AI-powered security systems that detect threats, prevent breaches, and ensure compliance.
      metrics: { detection: "99.7%", response: "<2min", compliance: "100%" },
      category: "Security & Compliance
      link: "/blog/intelligent-security-framework"
    },
    {
      title: "Real-Time Decision Intelligence
      description: "Make instant, informed decisions with real-time AI processing that analyzes data streams and provides actionable insights.
      metrics: { speed: "<1ms", accuracy: "99.8%", throughput: "1M+/sec" },
      category: "Decision Intelligence
      link: "/blog/real-time-decision-intelligence"
    },
    {
      title: "Sustainable AI Solutions
      description: "Implement environmentally conscious AI solutions that reduce carbon footprint while delivering exceptional performance.
      metrics: { reduction: "78%", efficiency: "3.2x", savings: "$127M" },
      category: "Sustainability
      link: "/blog/sustainable-ai-solutions"
    }
  ];

  return (
    <section className="text-left">
      <div className="text-left">
        <div className="text-left">
          <div className="text-left">
            <span className="text-left">
              📚 January 2025: Content Showcase
            <
          </div>
          
          <h2 className="text-left">
            Latest AI Insights & Solutions
          </h2>
          
          <p className="text-left">
            Explore our comprehensive collection of AI resources, case studies, and implementation guides. 
            Stay ahead with cutting-edge insights from industry leaders and successful enterprise deployments.
          </p>
        </div>

        <div className="text-left">
          {contentItems.map((item, index) => (
            <div 
              key={index}
              className="text-left"
            >
              <div className="text-left">
                <span className="text-left">
                  {item.category}
                <
                <div className="text-left">
                  {index % 6 === 0 ? '🎯' : index % 6 === 1 ? '⚡' : index % 6 === 2 ? '📊' : index % 6 === 3 ? '🛡️' : index % 6 === 4 ? '🚀' : '🌱'}
                </div>
              </div>
              
              <h3 className="text-left">
                {item.title}
              </h3>
              
              <p className="text-left">
                {item.description}
              </p>
              
              <div className="text-left">
                {Object.entries(item.metrics).map(([key, value]) => (
                  <div key={key} className="text-left">
                    <div className="text-left">{value}</div>
                    <div className="text-left">{key}</div>
                  </div>
                ))}
              </div>
              
              <a 
                href={item.link}
                className="text-left"
              >
                Read Article →
              </a>
            </div>
          ))}
        </div>

        <div className="text-left">
          <div className="text-left">
            <h3 className="text-left">Stay Updated with Latest AI Insights</h3>
            <p className="text-left">
              Join our community of AI professionals and get access to exclusive content, early insights, 
              and implementation guides that drive real business results.
            </p>
            
            <div className="text-left">
              <div className="text-left">
                <div className="text-left">📈</div>
                <h4 className="text-left">Weekly Insights</h4>
                <p className="text-left">Fresh AI trends and breakthroughs delivered to your inbox</p>
              </div>
              <div className="text-left">
                <div className="text-left">🎓</div>
                <h4 className="text-left">Expert Guides</h4>
                <p className="text-left">In-depth tutorials and best practices from industry leaders</p>
              </div>
              <div className="text-left">
                <div className="text-left">💼</div>
                <h4 className="text-left">Case Studies</h4>
                <p className="text-left">Real-world success stories and implementation strategies</p>
              </div>
            </div>
            
            <div className="text-left">
              <a 
                href="/newsletter"
                className="text-left"
              >
                Subscribe to Newsletter
              </a>
              <a 
                href="/blog"
                className="text-left"
              >
                Browse All Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025ContentShowcase;