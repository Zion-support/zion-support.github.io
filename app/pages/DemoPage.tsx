import React from 'react';
import SEOHead from '../components/SEOHead';

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Chat Assistant',
      description: 'Experience our advanced AI chat assistant with natural language processing capabilities.',
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support'],
      status: 'Live Demo',
      link: '#'
    },
    {
      title: 'Cloud Dashboard',
      description: 'Explore our comprehensive cloud management dashboard with real-time monitoring.',
      features: ['Real-time Monitoring', 'Resource Management', 'Performance Analytics'],
      status: 'Live Demo',
      link: '#'
    },
    {
      title: 'Security Scanner',
      description: 'Test our cybersecurity scanner to identify vulnerabilities in your applications.',
      features: ['Vulnerability Detection', 'Security Reports', 'Compliance Checking'],
      status: 'Live Demo',
      link: '#'
    },
    {
      title: '5G Network Simulator',
      description: 'Simulate 5G network performance and test your applications under various conditions.',
      features: ['Network Simulation', 'Performance Testing', 'Load Testing'],
      status: 'Coming Soon',
      link: '#'
    },
    {
      title: 'Micro SaaS Builder',
      description: 'Build and deploy micro SaaS applications with our drag-and-drop interface.',
      features: ['Drag & Drop Interface', 'Template Library', 'One-click Deployment'],
      status: 'Beta',
      link: '#'
    },
    {
      title: 'Data Analytics Platform',
      description: 'Visualize and analyze your data with our powerful analytics platform.',
      features: ['Interactive Dashboards', 'Custom Reports', 'Data Visualization'],
      status: 'Live Demo',
      link: '#'
    }
  ];

  return (
    <>
      <SEOHead
        title="Demos - Zion Tech Group"
        description="Experience our AI solutions, cloud services, cybersecurity tools, and other technology solutions through interactive demos."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Interactive Demos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our solutions firsthand through interactive demos and see how our technology can transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    demo.status === 'Live Demo' ? 'bg-green-600' : 
                    demo.status === 'Beta' ? 'bg-yellow-600' : 'bg-gray-600'
                  } text-white`}>
                    {demo.status}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3">{demo.title}</h2>
                <p className="text-gray-300 mb-4">{demo.description}</p>
                <ul className="space-y-2 mb-6">
                  {demo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-blue-400 mr-3">✓</span>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={demo.link} 
                  className={`w-full text-center py-3 px-6 rounded-lg transition-all duration-300 ${
                    demo.status === 'Coming Soon' 
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                  }`}
                >
                  {demo.status === 'Coming Soon' ? 'Coming Soon' : 'Try Demo'}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">Want to See More?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us to schedule a personalized demo of our solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Schedule a Demo
              </a>
              <a 
                href="/services" 
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;