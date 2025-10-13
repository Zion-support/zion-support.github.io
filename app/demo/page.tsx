import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, CheckCircle } from 'lucide-react';

const DemoPage: React.FC = () => {
  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Customer Service Bot',
      description: 'See how our AI chatbot handles customer inquiries with natural language processing.',
      duration: '2 min',
      category: 'AI Solutions'
    },
    {
      id: 'data-analytics',
      title: 'Real-time Analytics Dashboard',
      description: 'Explore our advanced analytics platform with live data visualization and insights.',
      duration: '3 min',
      category: 'Analytics'
    },
    {
      id: 'workflow-automation',
      title: 'Business Process Automation',
      description: 'Watch how we automate complex business workflows to save time and reduce errors.',
      duration: '4 min',
      category: 'Automation'
    },
    {
      id: 'security-monitoring',
      title: 'Cybersecurity Monitoring',
      description: 'See our AI-powered security monitoring system in action, detecting threats in real-time.',
      duration: '2 min',
      category: 'Security'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Live Demos - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience Our Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Watch live demos of our AI and IT solutions in action. See how our technology 
              can transform your business processes and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {demos.map((demo) => (
              <div key={demo.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <div className="text-sm opacity-90">{demo.category}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {demo.category}
                    </span>
                    <span className="text-sm text-gray-500">{demo.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {demo.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {demo.description}
                  </p>
                  
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to See More?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a personalized demo with our experts to see how our solutions 
            can address your specific business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Proven results and cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
              <p className="text-gray-600">
                Our clients see an average 300% return on investment within the first year
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrate with your existing systems and workflows
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock support from our expert team of AI and IT specialists
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;
