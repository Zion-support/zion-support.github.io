import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

const AIServices2025: React.FC = () => {
  const services = [
    {
      title: "AI-Powered Business Process Automation Suite",
      price: "$299/month",
      marketPrice: "$500-800/month",
      description: "Reduce operational costs by 40-60% and increase productivity by 300% with our comprehensive AI automation platform.",
      features: [
        "Workflow automation and orchestration",
        "Intelligent document processing",
        "Automated decision making",
        "ROI within 3 months guarantee"
      ],
      icon: "🤖"
    },
    {
      title: "Enterprise AI Content Generation Platform",
      price: "$199/month",
      marketPrice: "$300-600/month",
      description: "Save 80% on content creation time and improve SEO rankings by 200% with our AI-powered content platform.",
      features: [
        "Multi-language content generation",
        "SEO optimization built-in",
        "Brand voice customization",
        "Plagiarism-free content guarantee"
      ],
      icon: "✍️"
    },
    {
      title: "AI Customer Behavior Analytics & Insights Platform",
      price: "$449/month",
      marketPrice: "$800-1500/month",
      description: "Increase customer retention by 35% and boost customer lifetime value by 200% with advanced AI analytics.",
      features: [
        "Real-time customer behavior analysis",
        "Predictive customer insights",
        "Automated segmentation",
        "Churn reduction by 50%"
      ],
      icon: "📊"
    },
    {
      title: "AI-Powered Cybersecurity Threat Detection System",
      price: "$899/month",
      marketPrice: "$1200-2500/month",
      description: "Detect threats 10x faster and reduce false positives by 80% with our advanced AI security platform.",
      features: [
        "Real-time threat monitoring",
        "AI-powered threat hunting",
        "Automated incident response",
        "24/7 security oversight"
      ],
      icon: "🔒"
    },
    {
      title: "AI-Powered Legal Contract Analysis & Risk Assessment",
      price: "$1,100/month",
      marketPrice: "$1500-3800/month",
      description: "Reduce contract review time by 80% and identify risks with 95% accuracy using advanced AI analysis.",
      features: [
        "Automated contract analysis",
        "Risk identification and scoring",
        "Compliance checking",
        "Clause comparison and insights"
      ],
      icon: "⚖️"
    },
    {
      title: "AI-Powered Marketing Automation & Customer Journey Orchestration",
      price: "$850/month",
      marketPrice: "$1200-3200/month",
      description: "Increase conversion rates by 50% and reduce marketing costs by 40% with intelligent automation.",
      features: [
        "Multi-channel campaign automation",
        "Customer journey mapping",
        "Personalization engine",
        "Performance optimization"
      ],
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO
        title="AI Services 2025 - Zion Tech Group"
        description="Comprehensive AI services for 2025: Business automation, content generation, analytics, cybersecurity, and more. Transform your business with cutting-edge AI solutions."
        keywords="AI services 2025, business automation, AI content generation, customer analytics, cybersecurity AI, marketing automation"
        url="/ai-services-2025"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW FOR 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            AI Services 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Transform your business with our comprehensive suite of AI-powered solutions. 
            Each service is designed to deliver measurable ROI and competitive advantage in today's digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-green-600">{service.price}</span>
                <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg opacity-90 mb-6">
            Join thousands of businesses already using our AI solutions to drive growth and innovation.
          </p>
          <Link
            href="/contact"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AIServices2025;