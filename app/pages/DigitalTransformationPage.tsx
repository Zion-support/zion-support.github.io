import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: RefreshCw,
      title: 'Process Automation',
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: ['Workflow Analysis', 'Process Mapping', 'Automation Implementation', 'Performance Monitoring']
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Guide your organization through digital transformation with effective change management strategies.',
      features: ['Stakeholder Engagement', 'Training Programs', 'Communication Plans', 'Resistance Management']
    },
    {
      icon: Target,
      title: 'Digital Strategy',
      description: 'Develop comprehensive digital strategies aligned with your business objectives and market needs.',
      features: ['Digital Assessment', 'Technology Roadmap', 'Investment Planning', 'ROI Analysis']
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      features: ['Data Integration', 'Dashboard Development', 'Predictive Analytics', 'Reporting Solutions']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Foster innovation and digital culture within your organization to drive continuous improvement.',
      features: ['Innovation Workshops', 'Technology Scouting', 'Pilot Programs', 'Innovation Metrics']
    },
    {
      icon: CheckCircle,
      title: 'Implementation Support',
      description: 'End-to-end support for implementing digital solutions and ensuring successful adoption.',
      features: ['Project Management', 'Technical Implementation', 'User Training', 'Ongoing Support']
    }
  ];

  const industries = [
    { name: 'Manufacturing', description: 'Smart factories and IoT integration' },
    { name: 'Healthcare', description: 'Digital health records and telemedicine' },
    { name: 'Finance', description: 'Digital banking and fintech solutions' },
    { name: 'Retail', description: 'E-commerce and omnichannel experiences' }
  ];

  const benefits = [
    { title: 'Increased Efficiency', description: 'Streamline operations and reduce costs' },
    { title: 'Better Customer Experience', description: 'Deliver personalized and seamless experiences' },
    { title: 'Data-Driven Decisions', description: 'Make informed decisions with real-time insights' },
    { title: 'Competitive Advantage', description: 'Stay ahead of the competition with innovative solutions' }
  ];

  const transformationSteps = [
    {
      step: '1',
      title: 'Assessment',
      description: 'Evaluate current state and identify opportunities for digital transformation'
    },
    {
      step: '2',
      title: 'Strategy',
      description: 'Develop a comprehensive digital strategy aligned with business goals'
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'Execute the transformation plan with careful project management'
    },
    {
      step: '4',
      title: 'Optimization',
      description: 'Continuously monitor and optimize digital solutions for maximum impact'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services including process automation, change management, and innovation consulting." />
        <meta name="keywords" content="digital transformation, process automation, change management, digital strategy, innovation consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Transform your business for the digital age with innovative solutions and strategies
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Digital Transformation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to help your business thrive in the digital economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Transformation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized digital transformation solutions for various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Digital Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock the full potential of your business with digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Let our experts guide you through your digital transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Transformation
            </a>
            <a
              href="/case-studies"
              className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformationPage;