import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BusinessAppsPage: React.FC = () => {
  const businessApps = [
    {
      title: 'AI-Powered CRM System',
      description: 'Intelligent customer relationship management with AI-driven insights, automated follow-ups, and predictive analytics.',
      icon: '👥',
      price: '$299/month',
      features: ['AI lead scoring', 'Automated follow-ups', 'Predictive analytics', 'Sales forecasting', 'Customer segmentation', 'Integration APIs'],
      benefits: ['Increase sales by 40%', 'Improve customer retention', 'Automate routine tasks', 'Better decision making'],
      marketPrice: '$500-1,200/month',
      category: 'CRM & Sales',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'REST APIs']
    },
    {
      title: 'Smart Inventory Management',
      description: 'AI-powered inventory optimization with demand forecasting, automated reordering, and real-time tracking.',
      icon: '📦',
      price: '$199/month',
      features: ['Demand forecasting', 'Automated reordering', 'Real-time tracking', 'Barcode scanning', 'Multi-location support', 'Analytics dashboard'],
      benefits: ['Reduce stockouts by 60%', 'Lower inventory costs', 'Improve accuracy', 'Save time on management'],
      marketPrice: '$350-800/month',
      category: 'Inventory Management',
      technologies: ['React Native', 'Python', 'MongoDB', 'AI/ML', 'IoT Integration']
    },
    {
      title: 'AI Project Management Suite',
      description: 'Intelligent project management with AI-powered resource allocation, timeline optimization, and risk prediction.',
      icon: '📊',
      price: '$249/month',
      features: ['AI resource allocation', 'Timeline optimization', 'Risk prediction', 'Team collaboration', 'Progress tracking', 'Reporting automation'],
      benefits: ['Complete projects 25% faster', 'Reduce project risks', 'Improve team efficiency', 'Better resource utilization'],
      marketPrice: '$400-1,000/month',
      category: 'Project Management',
      technologies: ['Vue.js', 'Express.js', 'MySQL', 'AI/ML', 'WebSocket']
    },
    {
      title: 'Smart HR Management System',
      description: 'Comprehensive HR solution with AI-powered recruitment, employee analytics, and automated payroll processing.',
      icon: '🏢',
      price: '$179/month',
      features: ['AI recruitment', 'Employee analytics', 'Automated payroll', 'Performance tracking', 'Time management', 'Benefits administration'],
      benefits: ['Reduce hiring time by 50%', 'Improve employee satisfaction', 'Automate HR processes', 'Better workforce insights'],
      marketPrice: '$300-700/month',
      category: 'HR Management',
      technologies: ['Angular', 'Laravel', 'PostgreSQL', 'AI/ML', 'Payment APIs']
    },
    {
      title: 'AI Financial Analytics Platform',
      description: 'Advanced financial analysis with AI-powered insights, automated reporting, and predictive financial modeling.',
      icon: '💰',
      price: '$399/month',
      features: ['AI financial insights', 'Automated reporting', 'Predictive modeling', 'Budget optimization', 'Risk analysis', 'Compliance monitoring'],
      benefits: ['Improve financial accuracy', 'Reduce reporting time', 'Better financial planning', 'Identify cost savings'],
      marketPrice: '$600-1,500/month',
      category: 'Financial Management',
      technologies: ['React', 'Python', 'PostgreSQL', 'AI/ML', 'Financial APIs']
    },
    {
      title: 'Smart Marketing Automation',
      description: 'AI-powered marketing platform with automated campaigns, customer segmentation, and performance optimization.',
      icon: '📢',
      price: '$229/month',
      features: ['AI campaign optimization', 'Customer segmentation', 'Email automation', 'Social media management', 'Analytics dashboard', 'A/B testing'],
      benefits: ['Increase conversions by 35%', 'Reduce marketing costs', 'Improve customer engagement', 'Automate marketing tasks'],
      marketPrice: '$400-900/month',
      category: 'Marketing Automation',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML', 'Social Media APIs']
    },
    {
      title: 'AI Customer Support System',
      description: 'Intelligent customer support with AI chatbots, ticket routing, sentiment analysis, and automated responses.',
      icon: '🎧',
      price: '$159/month',
      features: ['AI chatbots', 'Ticket routing', 'Sentiment analysis', 'Knowledge base', 'Live chat', 'Performance analytics'],
      benefits: ['Reduce support costs by 60%', 'Improve response time', 'Increase customer satisfaction', '24/7 support availability'],
      marketPrice: '$250-600/month',
      category: 'Customer Support',
      technologies: ['React', 'Python', 'PostgreSQL', 'AI/ML', 'WebSocket']
    },
    {
      title: 'Smart Document Management',
      description: 'AI-powered document processing with OCR, automated categorization, and intelligent search capabilities.',
      icon: '📄',
      price: '$129/month',
      features: ['OCR processing', 'Auto categorization', 'Intelligent search', 'Version control', 'Collaboration tools', 'Security features'],
      benefits: ['Reduce document processing time', 'Improve search accuracy', 'Better organization', 'Enhanced security'],
      marketPrice: '$200-500/month',
      category: 'Document Management',
      technologies: ['React', 'Python', 'MongoDB', 'AI/ML', 'OCR APIs']
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights, real-time dashboards, and predictive analytics.',
      icon: '📈',
      price: '$279/month',
      features: ['AI insights', 'Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization', 'Alert system'],
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Improve business performance', 'Save time on analysis'],
      marketPrice: '$450-1,200/month',
      category: 'Business Intelligence',
      technologies: ['React', 'Python', 'PostgreSQL', 'AI/ML', 'Chart.js']
    },
    {
      title: 'Smart E-commerce Platform',
      description: 'AI-powered e-commerce solution with personalized recommendations, inventory management, and automated marketing.',
      icon: '🛒',
      price: '$349/month',
      features: ['AI recommendations', 'Inventory management', 'Payment processing', 'Order tracking', 'Customer analytics', 'Marketing automation'],
      benefits: ['Increase sales by 45%', 'Improve customer experience', 'Reduce cart abandonment', 'Automate operations'],
      marketPrice: '$600-1,800/month',
      category: 'E-commerce',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'Payment APIs']
    }
  ];

  const categories = [...new Set(businessApps.map(app => app.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Business Applications
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive business applications powered by AI to streamline your operations and drive growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Get Custom App
            </a>
            <a
              href="/micro-saas"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all"
            >
              View Micro SAAS
            </a>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our Business Apps?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
              <p className="text-gray-300 text-sm">Intelligent automation and insights powered by advanced AI</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Implementation</h3>
              <p className="text-gray-300 text-sm">Quick deployment with minimal disruption to your workflow</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">Bank-level security and compliance for your sensitive data</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Real-time Analytics</h3>
              <p className="text-gray-300 text-sm">Live insights and analytics to drive better decisions</p>
            </div>
          </div>
        </section>

        {/* Apps by Category */}
        {categories.map(category => (
          <section key={category} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center neon-text">
              {category} Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessApps
                .filter(app => app.category === category)
                .map((app, index) => (
                  <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-4 text-center">{app.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-3 text-center">{app.title}</h4>
                    <p className="text-gray-300 mb-4 text-sm text-center">{app.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-cyan-400">{app.price}</span>
                        <span className="text-sm text-gray-400">Market: {app.marketPrice}</span>
                      </div>
                      <div className="text-sm text-green-400 font-semibold text-center">
                        Save up to 50% vs market rates
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-white mb-2 text-sm">Key Features:</h5>
                      <ul className="space-y-1">
                        {app.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {app.features.length > 3 && (
                          <li className="text-xs text-gray-400">
                            +{app.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-white mb-2 text-sm">Benefits:</h5>
                      <ul className="space-y-1">
                        {app.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                            <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center">
                      <a
                        href="/contact"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all text-sm inline-block"
                      >
                        Get This App
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Need a Custom Business App?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We can build custom business applications tailored to your specific needs and requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Get Custom Quote
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all"
            >
              Call (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessAppsPage;
