import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  UserGroupIcon,
  CheckCircleIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '4+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: CpuChipIcon,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and approaches.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security',
      description: 'Security is paramount in everything we do, ensuring your data and systems are protected.'
    },
    {
      icon: CloudIcon,
      title: 'Scalability',
      description: 'Our solutions are designed to grow with your business and adapt to changing needs.'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their digital transformation journey.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission and team" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We are a leading technology company specializing in AI solutions, cybersecurity, 
                and digital transformation services.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                enhance security, and accelerate digital transformation. We believe in the power of 
                technology to solve complex challenges and create meaningful impact.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}