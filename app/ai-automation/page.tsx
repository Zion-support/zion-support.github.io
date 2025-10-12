import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.'
    },
    {
      icon: Brain,
      title: 'Intelligent Decision Making',
      description: 'AI-powered decision making based on data analysis and business rules.'
    },
    {
      icon: Settings,
      title: 'Custom Integrations',
      description: 'Seamlessly integrate with your existing systems and third-party applications.'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Automation solutions that grow with your business and adapt to changing needs.'
    }
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automate ticket routing, response generation, and issue resolution.',
      icon: Users
    },
    {
      title: 'Data Processing',
      description: 'Automate data collection, validation, and analysis workflows.',
      icon: Star
    },
    {
      title: 'Marketing Automation',
      description: 'Automate email campaigns, lead scoring, and customer segmentation.',
      icon: Award
    },
    {
      title: 'Financial Operations',
      description: 'Automate invoice processing, expense management, and financial reporting.',
      icon: CheckCircle
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 70%',
    'Increase productivity and efficiency',
    'Eliminate human errors in repetitive tasks',
    '24/7 automated operations',
    'Scalable and adaptable solutions',
    'ROI within 3-6 months'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Reduce costs, increase efficiency, and eliminate manual processes." />
        <meta name="keywords" content="AI automation, business process automation, workflow automation, intelligent automation, RPA" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation</span> Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business operations with intelligent automation solutions that reduce costs, increase efficiency, and eliminate repetitive tasks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View Demo
            </Link>
=======
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered <span className="text-blue-600">Automation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business operations with intelligent automation solutions that reduce costs, 
              increase efficiency, and eliminate manual processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                View All Services
              </Link>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-1443
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Automation Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI automation solutions cover every aspect of your business operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AI automation can transform different areas of your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <useCase.icon className="h-12 w-12 text-blue-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">{useCase.title}</h3>
                </div>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Automation?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our AI automation solutions deliver measurable results that transform your business operations and drive growth.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">70%</div>
                  <div className="text-gray-300 mb-6">Average Cost Reduction</div>
                  <div className="text-4xl font-bold text-white mb-2">3-6</div>
                  <div className="text-gray-300 mb-6">Months to ROI</div>
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-300">Automated Operations</div>
                </div>
=======
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Automation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the transformative benefits of intelligent automation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Automation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to implementing AI automation in your organization
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis</h3>
              <p className="text-gray-600">
                Analyze your current processes and identify automation opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600">
                Design custom automation workflows tailored to your business needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Deploy and configure automation solutions with minimal disruption
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
>>>>>>> cursor/fix-errors-and-merge-to-main-1443
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimization</h3>
              <p className="text-gray-600">
                Continuously monitor and optimize automation performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how AI automation can transform your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Automation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationPage;
