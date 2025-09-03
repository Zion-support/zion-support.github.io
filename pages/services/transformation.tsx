import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { Rocket, Target, Users, Zap, CheckCircle, ArrowRight, Globe, Shield, Brain, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const DigitalTransformationPage: NextPage = () => {
  const transformationServices = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation roadmap aligned with your business goals',
      features: ['Digital Assessment', 'Strategy Development', 'Technology Roadmap', 'Change Management']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation and workflow optimization',
      features: ['Workflow Analysis', 'RPA Implementation', 'Process Optimization', 'Performance Monitoring']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Cloud Migration',
      description: 'Modernize your infrastructure with secure and scalable cloud solutions',
      features: ['Infrastructure Assessment', 'Migration Planning', 'Cloud Deployment', 'Optimization']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Change Management',
      description: 'Guide your team through digital transformation with expert change management',
      features: ['Training Programs', 'Communication Strategy', 'Adoption Support', 'Performance Tracking']
    }
  ];

  const transformationAreas = [
    {
      title: 'Customer Experience',
      description: 'Enhance customer interactions with digital-first solutions',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Operations',
      description: 'Optimize business processes with automation and analytics',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Technology',
      description: 'Modernize your technology stack for better performance',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Data & Analytics',
      description: 'Leverage data for better decision-making and insights',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual processes by up to 60%'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Revenue Growth',
      description: 'Drive new revenue streams and improve customer acquisition'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Better Customer Experience',
      description: 'Deliver seamless, personalized experiences across all touchpoints'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge digital capabilities'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Evaluate current state and identify transformation opportunities'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop comprehensive digital transformation strategy'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute transformation initiatives with minimal disruption'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously optimize and scale digital capabilities'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Transformation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Transform your business for the digital age with comprehensive solutions that drive innovation and growth
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors">
              Start Transformation
            </Link>
            <Link href="/case-studies" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Transformation Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Transformation Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital transformation solutions designed to modernize your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {transformationServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-purple-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transformation Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help transform every aspect of your business for the digital age
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-purple-500 mb-4 flex justify-center">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Transformation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Digital Transformation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business and stay competitive in the digital economy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-zion-cyan mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our digital transformation experts help you modernize your business and achieve sustainable growth
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/pricing" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DigitalTransformationPage;