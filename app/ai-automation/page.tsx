import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Settings, Globe, Users, Star, Award, CheckCircle } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'Intelligent Decision Making',
      description: 'AI-powered decision making based on data analysis and business rules.'
    },
    {
      icon: <Settings className="w-8 h-8 text-green-400" />,
      title: 'Custom Integrations',
      description: 'Seamlessly integrate with your existing systems and third-party applications.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Scalable Solutions',
      description: 'Automation solutions that grow with your business and adapt to changing needs.'
    }
  ];
  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automate ticket routing, response generation, and issue resolution.',
      icon: <Users className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Data Processing',
      description: 'Automate data collection, validation, and analysis workflows.',
      icon: <Star className="w-6 h-6 text-yellow-400" />
    },
    {
      title: 'Marketing Automation',
      description: 'Automate email campaigns, lead scoring, and customer segmentation.',
      icon: <Award className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Financial Operations',
      description: 'Automate invoice processing, expense management, and financial reporting.',
      icon: <CheckCircle className="w-6 h-6 text-red-400" />
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
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Reduce costs, increase efficiency, and eliminate manual processes." />
        <meta name="keywords" content="AI automation, business process automation, workflow automation, intelligent automation, RPA" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation</span> Services
=======
    <div const className = "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" />
      <Helmet />
        <title  >AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Reduce costs, increase efficiency, and eliminate manual processes." / / />
        <meta name="keywords" content="AI automation, business process automation, workflow automation, intelligent automation, RPA" / / />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" />
        <div className="max-w-7 xl mx-auto text-center" />
          <h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6" />
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"  >Automation</span> Services
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
            Transform your business operations with intelligent automation solutions that reduce costs, increase efficiency, and eliminate repetitive tasks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" />
            <Link
              to="/contact"
<<<<<<< HEAD
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/ai-services"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View All AI Services
=======
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
             />
              Get Started <ArrowRight className="ml-2 w-5 h-5" / />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              />View Demo
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our AI Automation?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our AI automation solutions are designed to streamline your operations and drive measurable results.
=======
      <section className="py-20 bg-white" />
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8" />
          <div className="text-center mb-16" />
            <h2 className="text-3 xl md:text-4 xl font-bold text-gray-900 mb-4"  />Automation Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3 xl mx-auto">
              Our AI automation solutions cover every aspect of your business operations
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" />
            {features.map((feature, index) => (
<<<<<<< HEAD
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
=======
              <div key="{index}" className="text-center" />
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" />
                  <feature.icon className="h-8 w-8 text-blue-600" / />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3"  >{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Automation Use Cases</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover how AI automation can transform different aspects of your business.
=======
      <section className="py-20 bg-gray-50" />
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8" />
          <div className="text-center mb-16" />
            <h2 className="text-3 xl md:text-4 xl font-bold text-gray-900 mb-4"  />Common Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3 xl mx-auto">
              See how AI automation can transform different areas of your business
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" />
            {useCases.map((useCase, index) => (
<<<<<<< HEAD
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  {useCase.icon}
                  <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
=======
              <div key="{index}" className="bg-white rounded-xl p-8 shadow-lg" />
                <div className="flex items-center mb-4" />
                  <useCase.icon className="h-12 w-12 text-blue-600 mr-4" / />
                  <h3 className="text-xl font-semibold text-gray-900"  >{useCase.title}</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8" />
        <div className="max-w-7 xl mx-auto" />
          <div className="grid lg:grid-cols-2 gap-12 items-center" />
            <div />
              <h2 className="text-4 xl font-bold text-white mb-6"  >Why Choose Our AI Automation?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our AI automation solutions deliver measurable results that transform your business operations and drive growth.
              </p>
              <ul className="space-y-4" />
                {benefits.map((benefit, index) => (
                  <li key="{index}" className="flex items-center space-x-3" />
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" / />
                    <span className="text-gray-300"  >{benefit}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
                  </li>
                ))}
              </ul>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Automate?</h3>
              <p className="text-gray-300 mb-6">
                Let our AI experts help you identify automation opportunities and implement solutions that deliver immediate value.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center gap-2"
              >
                Start Your Automation Journey <ArrowRight className="w-5 h-5" />
              </Link>
=======
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
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
=======
            <div className="relative" />
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2 xl p-8 backdrop-blur-sm border border-white/10" />
                <div className="text-center" />
                  <div className="text-4 xl font-bold text-white mb-2"  >70%</div>
                  <div className="text-gray-300 mb-6"  >Average Cost Reduction</div>
                  <div className="text-4 xl font-bold text-white mb-2"  >3-6</div>
                  <div className="text-gray-300 mb-6"  >Months to ROI</div>
                  <div className="text-4 xl font-bold text-white mb-2"  >24/7</div>
                  <div className="text-gray-300"  >Automated Operations</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3"  >Optimization</h3>
              <p className="text-gray-600">
                Continuously monitor and optimize automation performance
              </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Transform Your Business with AI Automation
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join hundreds of companies that have already revolutionized their operations with our AI automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Started Today <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More About Us
=======
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600" />
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 text-center" />
          <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6"  />Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3 xl mx-auto">
            Let's discuss how AI automation can transform your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" />
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
             />
              Start Automation
              <ArrowRight className="ml-2 h-5 w-5" / />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              />Explore Services
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationPage;