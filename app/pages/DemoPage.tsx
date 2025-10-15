import React from 'react';
import SEOHead from '../components/SEOHead';

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Analytics Dashboard',
      description: 'Experience our AI-powered analytics dashboard with real-time insights and predictive analytics.',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom dashboards', 'Automated reporting'],
      link: '/contact',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Cloud Infrastructure Management',
      description: 'See how our cloud management platform simplifies infrastructure operations.',
      features: ['Multi-cloud management', 'Cost optimization', 'Performance monitoring', 'Automated scaling'],
      link: '/contact',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Cybersecurity Monitoring',
      description: 'Explore our advanced cybersecurity monitoring and threat detection capabilities.',
      features: ['Threat detection', 'Real-time alerts', 'Incident response', 'Compliance reporting'],
      link: '/contact',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Micro SaaS Platform',
      description: 'Try our micro SaaS development platform with drag-and-drop functionality.',
      features: ['Drag-and-drop builder', 'API integration', 'User management', 'Analytics'],
      link: '/contact',
      image: '/api/placeholder/400/300'
    },
    {
      title: '5G Network Simulator',
      description: 'Test 5G network performance and optimization with our simulation tools.',
      features: ['Network simulation', 'Performance testing', 'Coverage analysis', 'Optimization tools'],
      link: '/contact',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'IT Service Management',
      description: 'Experience our comprehensive IT service management and support platform.',
      features: ['Ticket management', 'Asset tracking', 'Service catalog', 'Reporting'],
      link: '/contact',
      image: '/api/placeholder/400/300'
    }
  ];

  return (
    <>
      <SEOHead
        title="Demos - Zion Tech Group"
        description="Experience our AI solutions, cloud services, cybersecurity, and IT solutions through interactive demos and live examples."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Interactive Demos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our solutions firsthand through interactive demos and live examples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="bg-slate-700 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Demo Preview</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{demo.title}</h3>
                <p className="text-gray-300 mb-4">{demo.description}</p>
                <ul className="space-y-2 mb-6">
                  {demo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <span className="text-blue-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={demo.link} 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center block"
                >
                  Try Demo
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">Ready to See More?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your business.
            </p>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;