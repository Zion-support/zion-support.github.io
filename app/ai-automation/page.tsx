import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Settings, Globe, Users, Star, Award, CheckCircle } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5ml-2" />,
      title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.'
    },
    {
      icon: <Brain className="w-5 h-5ml-2" />,
      title: 'Intelligent Decision Making',
      description: 'AI-powered decision making based on data analysis and business rules.'
    },
    {
      icon: <Settings className="w-5 h-5ml-2" />,
      title: 'Custom Integrations',
      description: 'Seamlessly integrate with your existing systems and third-party applications.'
    },
    {
      icon: <Globe className="w-5 h-5ml-2" />,
      title: 'Scalable Solutions',
      description: 'Automation solutions that grow with your business and adapt to changing needs.'
    }
  ];
  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automate ticket routing, response generation, and issue resolution.',
      icon: <Users className="w-5 h-5ml-2" />
    },
    {
      title: 'Data Processing',
      description: 'Automate data collection, validation, and analysis workflows.',
      icon: <Star className="w-5 h-5ml-2" />
    },
    {
      title: 'Marketing Automation',
      description: 'Automate email campaigns, lead scoring, and customer segmentation.',
      icon: <Award className="w-5 h-5ml-2" />
    },
    {
      title: 'Financial Operations',
      description: 'Automate invoice processing, expense management, and financial reporting.',
      icon: <CheckCircle className="w-5 h-5ml-2" />
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
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title />AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Reduce costs, increase efficiency, and eliminate manual processes." />
        <meta name="keywords" content="AI automation, business process automation, workflow automation, intelligent automation, RPA" />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <h1 className="w-5 h-5ml-2" />
            AI <span className="w-5 h-5ml-2" />Automation</span> Services
          </h1>
          <p className="w-5 h-5ml-2">Transform your business operations with intelligent automation solutions that reduce costs, increase efficiency, and eliminate repetitive tasks.
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-600to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flexitems-centergap-2"
        >
          Get Started 
          <ArrowRight className="w-5 h-5ml-2" />
        </Link>
            <Link to="/ai-services" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
              View All AI Services
            </Link>
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />Automation Capabilities
            </h2>
            <p className="w-5 h-5ml-2">Our AI automation solutions cover every aspect of your business operations
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (
              <div key="{index}" className="text-center" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <feature.icon className="h-8w-8text-blue-600"  />
                </div>
                <h3 className="w-5 h-5ml-2" />{feature.title}</h3>
                <p className="w-5 h-5ml-2">{feature.description}</p>
              </div>
            ))}
          </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />Common Use Cases
            </h2>
            <p className="w-5 h-5ml-2">See how AI automation can transform different areas of your business
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10transition-allduration-300" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  {useCase.icon}
                  <h3 className="w-5 h-5ml-2" />{useCase.title}</h3>
                </div>
                <p className="w-5 h-5ml-2">{useCase.description}</p>
              </div>
            ))}
          </div>
      </section>

      {/* Benefits Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div />
              <h2 className="w-5 h-5ml-2" />Why Choose Our AI Automation?</h2>
              <p className="w-5 h-5ml-2">Our AI automation solutions deliver measurable results that transform your business operations and drive growth.
              </p>
              <ul className="w-5 h-5ml-2" />
                {benefits.map((benefit, index) => (
                  <li key="{index}" className="flex items-centerspace-x-3" />
                    <CheckCircle className="w-5 h-5ml-2" />
                    <span className="w-5 h-5ml-2" />{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h3 className="w-5 h-5ml-2" />Ready to Automate?</h3>
              <p className="w-5 h-5ml-2">Let our AI experts help you identify automation opportunities and implement solutions that deliver immediate value.
              </p>
              <Link
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-600to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 inline-flexitems-centergap-2"
        >
          Start Your Automation Journey 
          <ArrowRight className="w-5 h-5ml-2" />
        </Link>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">70%</div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Average Cost Reduction</div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">3-6</div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Months to ROI</div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">24/7</div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Automated Operations</div>
              </div>
              <h3 className="w-5 h-5ml-2" />Optimization</h3>
              <p className="w-5 h-5ml-2">Continuously monitor and optimize automation performance
              </p>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <h2 className="w-5 h-5ml-2" />
            Transform Your Business with AI Automation
          </h2>
          <p className="w-5 h-5ml-2">Join hundreds of companies that have already revolutionized their operations with our AI automation solutions.
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-600to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-centergap-2"
        >
          Get Started Today 
          <ArrowRight className="w-5 h-5ml-2" />
        </Link>
            <Link to="/about" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
              Learn More About Us
            </Link>
          </div>
      </section>
    </div>
  );
};

export default AIAutomationPage;