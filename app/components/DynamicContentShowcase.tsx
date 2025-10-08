import React from 'react';

const DynamicContentShowcase: React.FC = () => {
  const contentItems = [
    {
      title: "AI Data Analytics",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform",
      icon: "📊",
      stats: "95% accuracy",
      link: "/ai-data-analytics"
    },
    {
      title: "AI Cybersecurity",
      description: "Protect your digital assets with AI-powered threat detection and prevention",
      icon: "🔒",
      stats: "99.9% uptime",
      link: "/ai-cybersecurity"
    },
    {
      title: "AI Workflow Automation",
      description: "Streamline business processes with intelligent automation solutions",
      icon: "⚙️",
      stats: "70% efficiency gain",
      link: "/ai-workflow-automation"
    },
    {
      title: "AI Cloud Infrastructure",
      description: "Scalable, secure cloud solutions powered by artificial intelligence",
      icon: "☁️",
      stats: "50% cost reduction",
      link: "/ai-cloud-infrastructure"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Dynamic AI Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI-powered solutions designed to transform your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentItems.map((item, index) => (
            <div key={index} className="cyber-card hologram-card group">
              <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="text-center mb-4">
                <span className="inline-block bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.stats}
                </span>
              </div>
              <div className="text-center">
                <a
                  href={item.link}
                  className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;