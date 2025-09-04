import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Users, Target, Award, Globe, Shield, Zap } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and approaches.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with your team to understand your unique needs and challenges.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'We optimize every solution for maximum speed, efficiency, and scalability.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and local expertise.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality solutions and exceptional service.'
    }
  ];

  return (
    <>
      <Head>
        <title>About Us — Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We're a leading technology company dedicated to transforming businesses through innovative AI solutions, 
                cloud infrastructure, and digital transformation services.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-600">
                  To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Transforming the Future of Business
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Founded in 2020, Zion Tech Group has been at the forefront of technological innovation, 
                    helping businesses across various industries leverage the power of AI, cloud computing, 
                    and digital transformation to achieve their goals.
                  </p>
                  <p className="text-gray-600">
                    Our team of expert developers, data scientists, and technology consultants work tirelessly 
                    to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
                  </p>
                </div>
                <div className="bg-blue-600 p-8 rounded-xl text-white">
                  <h4 className="text-xl font-semibold mb-4">Our Vision</h4>
                  <p className="text-blue-100">
                    To be the world's most trusted technology partner, enabling every business to thrive 
                    in the digital age through innovative, secure, and scalable solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}