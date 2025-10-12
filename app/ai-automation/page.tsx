import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Settings, Globe, Users, Star, Award, CheckCircle } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8h-8text-cyan-400" />,
      title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.'
    },
    {
      icon: <Brain className="w-8h-8text-purple-400" />,
      title: 'Intelligent Decision Making',
      description: 'AI-powered decision making based on data analysis and business rules.'
    },
    {
      icon: <Settings className="w-8h-8text-green-400" />,
      title: 'Custom Integrations',
      description: 'Seamlessly integrate with your existing systems and third-party applications.'
    },
    {
      icon: <Globe className="w-8h-8text-blue-400" />,
      title: 'Scalable Solutions',
      description: 'Automation solutions that grow with your business and adapt to changing needs.'
    }
  ];
  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automate ticket routing, response generation, and issue resolution.',
      icon: <Users className="w-6h-6text-blue-400" />
    },
    {
      title: 'Data Processing',
      description: 'Automate data collection, validation, and analysis workflows.',
      icon: <Star className="w-6h-6text-yellow-400" />
    },
    {
      title: 'Marketing Automation',
      description: 'Automate email campaigns, lead scoring, and customer segmentation.',
      icon: <Award className="w-6h-6text-green-400" />
    },
    {
      title: 'Financial Operations',
      description: 'Automate invoice processing, expense management, and financial reporting.',
      icon: <CheckCircle className="w-6h-6text-red-400" />
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900via-blue-900to-purple-900">
      <Helmet />
        <title />AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Reduce costs, increase efficiency, and eliminate manual processes." />
        <meta name="keywords" content="AI automation, business process automation, workflow automation, intelligent automation, RPA" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-boldtext-white mb-6" />
            AI <span className="text-transparent bg-clip-text bg-gradient-to-rfrom-cyan-400to-purple-400" />Automation</span> Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto" />
            Transform your business operations with intelligent automation solutions that reduce costs, increase efficiency, and eliminate repetitive tasks.
          </p>
          <div className="flex flex-col sm:flex-rowgap-4justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flexitems-centergap-2" />
              Get Started <ArrowRight className="w-5h-5" />
            </Link>
            <Link to="/ai-services" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
              View All AI Services
                    </Link>
      </div>
    </div>
      </section>

      {/* Features Section */}
      <section className="py-20bg-white" />
        <div className="max-w-7 xl mx-auto px-4sm:px-6lg:px-8">
          <div className="text-centermb-16">
            <h2 className="text-3 xl md:text-4 xl font-boldtext-gray-900mb-4"  />Automation Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xlmx-auto" />
              Our AI automation solutions cover every aspect of your business operations
            </p>
          </div>
          <div className="grid md:grid-cols-2lg:grid-cols-4gap-8">
            {features.map((feature, index) => (
              <div key="{index}" className="text-center" />
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-centermx-automb-4">
                  <feature.icon className="h-8w-8text-blue-600" / />
                </div>
                <h3 className="text-xl font-semiboldtext-gray-900mb-3"   />{feature.title}</h3>
                <p className="text-gray-600" />{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20bg-gray-50" />
        <div className="max-w-7 xl mx-auto px-4sm:px-6lg:px-8">
          <div className="text-centermb-16">
            <h2 className="text-3 xl md:text-4 xl font-boldtext-gray-900mb-4"  />Common Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xlmx-auto" />
              See how AI automation can transform different areas of your business
            </p>
          </div>
          <div className="grid md:grid-cols-2lg:grid-cols-4gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10transition-allduration-300" />
                <div className="flex items-centergap-3mb-4">
                  {useCase.icon}
                  <h3 className="text-lgfont-semiboldtext-white" />{useCase.title}</h3>
                </div>
                <p className="text-gray-300" />{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto">
          <div className="grid lg:grid-cols-2gap-12items-center">
            <div />
              <h2 className="text-4 xl font-boldtext-white mb-6"   />Why Choose Our AI Automation?</h2>
              <p className="text-lgtext-gray-300 mb-8" />
                Our AI automation solutions deliver measurable results that transform your business operations and drive growth.
              </p>
              <ul className="space-y-4" />
                {benefits.map((benefit, index) => (
                  <li key="{index}" className="flexitems-centerspace-x-3" />
                    <CheckCircle className="w-6 h-6text-cyan-400flex-shrink-0" / />
                    <span className="text-gray-300"   />{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8borderborder-cyan-500/30">
              <h3 className="text-2xl font-boldtext-whitemb-4" />Ready to Automate?</h3>
              <p className="text-gray-300 mb-6" />
                Let our AI experts help you identify automation opportunities and implement solutions that deliver immediate value.
              </p>
              <Link to="/contact" className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 inline-flexitems-centergap-2" />
                Start Your Automation Journey <ArrowRight className="w-5h-5" />
              </Link>
            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2 xl p-8 backdrop-blur-smborderborder-white/10">
                <div className="text-center">
                  <div className="text-4 xl font-boldtext-whitemb-2"   />70%</div>
                  <div className="text-gray-300 mb-6"   />Average Cost Reduction</div>
                  <div className="text-4 xl font-boldtext-whitemb-2"   />3-6</div>
                  <div className="text-gray-300 mb-6"   />Months to ROI</div>
                  <div className="text-4 xl font-boldtext-whitemb-2"   />24/7</div>
                  <div className="text-gray-300"   />Automated Operations</div>
                </div>
              </div>
              <h3 className="text-xl font-semiboldtext-gray-900mb-3"   />Optimization</h3>
              <p className="text-gray-600" />
                Continuously monitor and optimize automation performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-4xlmx-auto text-center">
          <h2 className="text-3xl font-boldtext-white mb-6" />
            Transform Your Business with AI Automation
          </h2>
          <p className="text-gray-300text-lg mb-8" />
            Join hundreds of companies that have already revolutionized their operations with our AI automation solutions.
          </p>
          <div className="flex flex-col sm:flex-rowgap-4justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-centergap-2" />
              Get Started Today <ArrowRight className="w-5h-5" />
            </Link>
            <Link to="/about" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
              Learn More About Us
                    </Link>
      </div>
    </div>
      </section>
    </div>
  );
};

export default AIAutomationPage;