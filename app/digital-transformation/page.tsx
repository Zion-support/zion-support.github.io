import React from 'react';
import Link from 'next/link';
import { Zap, Target, CheckCircle, ArrowRight, Users, Globe, Server, Settings, BarChart, Shield } from 'lucide-react';

const DigitalTransformationPage = () => {
  const phases = [
    {
      step: '01',
      title: 'Assessment & Strategy',
      description: 'Analyze your current state and develop a comprehensive digital transformation strategy.',
      features: ['Current State Analysis', 'Gap Assessment', 'Strategy Development', 'Roadmap Creation'],
    },
    {
      step: '02',
      title: 'Planning & Design',
      description: 'Design the architecture and plan the implementation of your digital solutions.',
      features: ['Solution Design', 'Architecture Planning', 'Resource Planning', 'Timeline Development'],
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the digital transformation with careful project management and quality assurance.',
      features: ['Solution Implementation', 'Data Migration', 'Integration', 'Testing & Validation'],
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Optimize performance and provide ongoing support for your digital solutions.',
      features: ['Performance Optimization', 'User Training', 'Ongoing Support', 'Continuous Improvement'],
    },
  ];

  const technologies = [
    {
      icon: Server,
      title: 'Cloud Computing',
      description: 'Migrate to the cloud for scalability, flexibility, and cost efficiency.',
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Leverage data to make informed decisions and gain competitive insights.',
    },
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline business processes.',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Implement robust security measures to protect your digital assets.',
    },
  ];

  const benefits = [
    'Increased Efficiency',
    'Better Customer Experience',
    'Cost Reduction',
    'Competitive Advantage',
    'Data-Driven Decisions',
    'Improved Agility',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital <span className="text-blue-600">Transformation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with digital technologies that drive growth, efficiency, and innovation. 
              We guide you through every step of your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Transformation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful digital transformation outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {phase.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {phase.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {phase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to drive your digital transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  <tech.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits of Digital Transformation
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transform your business and unlock new opportunities for growth and success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-lg text-blue-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how digital transformation can help you achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Transformation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformationPage;