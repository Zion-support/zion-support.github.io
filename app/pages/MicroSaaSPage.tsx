import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Rocket, Zap, Target, Users, BarChart, Shield } from 'lucide-react';

const MicroSaaSPage: React.FC = () => {
  const solutions = [
    {
      icon: Rocket,
      title: 'Rapid Development',
      description: 'Quickly build and deploy micro SaaS applications with our development framework.',
      features: ['Fast Prototyping', 'MVP Development', 'Rapid Deployment', 'Iterative Improvement'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Zap,
      title: 'Scalable Architecture',
      description: 'Build applications that scale seamlessly with your business growth.',
      features: ['Auto-scaling', 'Load Balancing', 'Performance Optimization', 'Resource Management'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Niche Solutions',
      description: 'Focus on specific business problems with targeted micro SaaS solutions.',
      features: ['Market Research', 'Solution Design', 'User Experience', 'Feature Development'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Comprehensive user management and authentication systems.',
      features: ['Authentication', 'Authorization', 'User Profiles', 'Subscription Management'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Built-in analytics to track performance and user behavior.',
      features: ['Usage Analytics', 'Performance Metrics', 'User Insights', 'Business Intelligence'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance features.',
      features: ['Data Encryption', 'Security Audits', 'Compliance', 'Privacy Protection'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Build and deploy micro SaaS applications with our comprehensive development and deployment solutions." />
        <meta name="keywords" content="micro SaaS, SaaS development, application development, scalable solutions, niche applications" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SaaS</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Build, deploy, and scale micro SaaS applications that solve specific business problems.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">Our Micro SaaS Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-slate-900 p-8 rounded-lg hover:bg-slate-800 transition-colors group">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-300 mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build Your Micro SaaS?
              </h2>
              <p className="text-xl text-white mb-8">
                Let's discuss how we can help you build and launch your micro SaaS application.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSPage;
