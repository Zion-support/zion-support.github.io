import React from 'react';
import Navigation from '../components/Navigation';
import {CheckCircle, Star} from 'lucide-react;

const BusinessAppsPage: any,
    e: any,
      description: any, automated follow-ups, and predictive analytics.',
      icon: any,
      price: any,
      features: any, 'Automated follow-ups', 'Predictive analytics', 'Sales forecasting', 'Customer segmentation', 'Integration APIs'],
      benefits: any, 'Improve customer retention', 'Automate routine tasks', 'Better decision making'],
      marketPrice: any,200/month',
      category: any,
      technologies: any, 'Node.js', 'PostgreSQL', 'AI/ML', 'REST APIs']
    },
    {
      title: any,
      description: any, automated reordering, and real-time tracking.',
      icon: any,
      price: any,
      features: any, 'Automated reordering', 'Real-time tracking', 'Barcode scanning', 'Multi-location support', 'Analytics dashboard'],
      benefits: any, 'Lower inventory costs', 'Improve accuracy', 'Save time on management'],
      marketPrice: any,
      category: any,
      technologies: any, 'Python', 'MongoDB', 'AI/ML', 'IoT Integration']
    },
    {
      title: any,
      description: any, timeline optimization, and risk prediction.',
      icon: any,
      price: any,
      features: any, 'Timeline optimization', 'Risk prediction', 'Team collaboration', 'Progress tracking', 'Reporting automation'],
      benefits: any, 'Reduce project risks', 'Improve team efficiency', 'Better resource utilization'],
      marketPrice: any,000/month',
      category: any,
      technologies: any, 'Express.js', 'MySQL', 'AI/ML', 'WebSocket']
    },
    {
      title: any,
      description: any, employee analytics, and automated payroll processing.',
      icon: any,
      price: any,
      features: any, 'Employee analytics', 'Automated payroll', 'Performance tracking', 'Time management', 'Benefits administration'],
      benefits: any, 'Improve employee satisfaction', 'Automate HR processes', 'Better workforce insights'],
      marketPrice: any,
      category: any,
      technologies: any, 'Laravel', 'PostgreSQL', 'AI/ML', 'Payment APIs']
    },
    {
      title: any,
      description: any, automated reporting, and predictive financial modeling.',
      icon: any,
      price: any,
      features: any, 'Automated reporting', 'Predictive modeling', 'Budget optimization', 'Risk analysis', 'Compliance monitoring'],
      benefits: any, 'Reduce reporting time', 'Better financial planning', 'Identify cost savings'],
      marketPrice: any,500/month',
      category: any,
      technologies: any, 'Python', 'PostgreSQL', 'AI/ML', 'Financial APIs']
    },
    {
      title: any,
      description: any, customer segmentation, and performance optimization.',
      icon: any,
      price: any,
      features: any, 'Customer segmentation', 'Email automation', 'Social media management', 'Analytics dashboard', 'A/B testing'],
      benefits: any, 'Reduce marketing costs', 'Improve customer engagement', 'Automate marketing tasks'],
      marketPrice: any,
      category: any,
      technologies: any, 'Node.js', 'MongoDB', 'AI/ML', 'Social Media APIs']
    },
    {
      title: any,
      description: any, ticket routing, sentiment analysis, and automated responses.',
      icon: any,
      price: any,
      features: any, 'Ticket routing', 'Sentiment analysis', 'Knowledge base', 'Live chat', 'Performance analytics'],
      benefits: any, 'Improve response time', 'Increase customer satisfaction', '24/7 support availability'],
      marketPrice: any,
      category: any,
      technologies: any, 'Python', 'PostgreSQL', 'AI/ML', 'WebSocket']
    },
    {
      title: any,
      description: any, automated categorization, and intelligent search capabilities.',
      icon: any,
      price: any,
      features: any, 'Auto categorization', 'Intelligent search', 'Version control', 'Collaboration tools', 'Security features'],
      benefits: any, 'Improve search accuracy', 'Better organization', 'Enhanced security'],
      marketPrice: any,
      category: any,
      technologies: any, 'Python', 'MongoDB', 'AI/ML', 'OCR APIs']
    },
    {
      title: any,
      description: any, real-time dashboards, and predictive analytics.',
      icon: any,
      price: any,
      features: any, 'Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization', 'Alert system'],
      benefits: any, 'Identify trends early', 'Improve business performance', 'Save time on analysis'],
      marketPrice: any,200/month',
      category: any,
      technologies: any, 'Python', 'PostgreSQL', 'AI/ML', 'Chart.js']
    },
    {
      title: any,
      description: any, inventory management, and automated marketing.',
      icon: any,
      price: any,
      features: any, 'Inventory management', 'Payment processing', 'Order tracking', 'Customer analytics', 'Marketing automation'],
      benefits: any, 'Improve customer experience', 'Reduce cart abandonment', 'Automate operations'],
      marketPrice: any,800/month',
      category: any,
      technologies: any, 'Node.js', 'PostgreSQL', 'AI/ML', 'Payment APIs']
    }
  ];

  const categories = [...new Set(businessApps.map(app => app.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md: any,">
    r: any{/* Key Benefits */}">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our Business Apps?
          </h2>
          <div className="grid grid-cols-1 md: any,>
    g: any,>
    e="text-gray-300 text-sm">Live insights and analytics to drive better decisions</p>
            </div>
          </div>
        </section>

        {/* Apps by Category */}
        {categories.map(category => (
          <section key={category} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center neon-text">
              {category} Applications
            </h3>;
            <div className="grid grid-cols-1 md: any,;>
    g: any,>;
    y=== category);>
                .map((app, index) => (
                  <div key={index} className="cyber-card hologram-card p-6 hover: any,>
    e="text-4xl mb-4 text-center">{app.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-3 text-center">{app.title}</h4>
                    <p className="text-gray-300 mb-4 text-sm text-center">{app.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-cyan-400">{app.price}</span>
                        <span className="text-sm text-gray-400">Market: any{app.marketPrice}</span>
                      </div>
                      <div className="text-sm text-green-400 font-semibold text-center">
                        Save up to 50% vs market rates
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-white mb-2 text-sm">Key Features: any,
    e="space-y-1">
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
                      <h5 className="font-semibold text-white mb-2 text-sm">Benefits: any,
    e="space-y-1">
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
                        href="/contact">
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover: any,>
    r: any}>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Need a Custom Business App?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We can build custom business applications tailored to your specific needs and requirements;
          </p>;
          <div className="flex flex-col sm: any,;
    r: any;
  );
};

export default BusinessAppsPage;'"'>
import Footer from '../components/Footer';"'>";
"'>"'";