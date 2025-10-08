import React from 'react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      number: "500+",
      label: "Enterprise Clients",
      description: "Trusted by leading organizations worldwide"
    },
    {
      number: "$2.5B+",
      label: "Cost Savings Delivered",
      description: "Measurable ROI for our clients"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable, always-on service"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance"
    },
    {
      number: "300%",
      label: "Average ROI",
      description: "Proven return on investment"
    },
    {
      number: "95%",
      label: "Process Automation",
      description: "Efficiency gains achieved"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-slate-800 to-purple-900 py-16 rounded-2xl cyber-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Proven Results
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our AI solutions have delivered measurable results for hundreds of enterprise clients
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-6">
            Ready to achieve similar results for your organization?
          </p>
          <a
            href="/contact"
            className="cyber-button"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;