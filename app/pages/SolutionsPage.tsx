import React from 'react';
import SEOHead from '../components/SEOHead';
import { ArrowRight, CheckCircle, Zap, Shield, Cloud, Code } from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const solutionCategories = [
    {
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to transform your business',
      icon: <Zap className="w-8 h-8" />,
      solutions: [
        'Machine Learning & Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision & Image Recognition',
        'AI Automation & Workflow Optimization',
        'Custom AI Model Development',
        'AI Integration & API Services'
      ],
      link: '/ai-solutions'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure and support services',
      icon: <Code className="w-8 h-8" />,
      solutions: [
        'Infrastructure Management & Monitoring',
        'Technical Support & Help Desk',
        'System Integration & Migration',
        'IT Consulting & Strategy',
        'Network Design & Implementation',
        'Database Management & Optimization'
      ],
      link: '/it-solutions'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business',
      icon: <Shield className="w-8 h-8" />,
      solutions: [
        'Security Audits & Risk Assessment',
        'Threat Detection & Monitoring',
        'Data Protection & Encryption',
        'Incident Response & Recovery',
        'Compliance Management',
        'Security Training & Awareness'
      ],
      link: '/cybersecurity'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
      icon: <Cloud className="w-8 h-8" />,
      solutions: [
        'Cloud Migration & Strategy',
        'Infrastructure as Code',
        'Cloud Security & Compliance',
        'Performance Optimization',
        'Backup & Disaster Recovery',
        'Multi-Cloud Management'
      ],
      link: '/cloud-solutions'
    }
  ];

  const industries = [
    'Healthcare & Life Sciences',
    'Financial Services',
    'Manufacturing & Industrial',
    'Retail & E-commerce',
    'Education & Training',
    'Government & Public Sector',
    'Real Estate',
    'Transportation & Logistics'
  ];

  return (
    <>
      <SEOHead
        title="Solutions - Zion Tech Group"
        description="Comprehensive technology solutions for modern businesses. AI, IT services, cybersecurity, and cloud solutions tailored to your industry needs."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Our Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive innovation, efficiency, and growth across all industries.
            </p>
          </div>

          {/* Solution Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {solutionCategories.map((category, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="flex items-start mb-6">
                  <div className="text-blue-400 mr-4">{category.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                    <p className="text-gray-300 mb-6">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {category.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{solution}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={category.link}
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>

          {/* Industries Section */}
          <div className="bg-slate-800 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-700 p-4 rounded-lg text-center hover:bg-slate-600 transition-colors">
                  <span className="text-gray-300">{industry}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                <p className="text-gray-300">We analyze your business needs and challenges to understand your requirements.</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategy</h3>
                <p className="text-gray-300">We develop a comprehensive strategy tailored to your business goals.</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                <p className="text-gray-300">We implement the solution with minimal disruption to your operations.</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Support</h3>
                <p className="text-gray-300">We provide ongoing support and optimization to ensure continued success.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can help you achieve your business goals.
            </p>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsPage;