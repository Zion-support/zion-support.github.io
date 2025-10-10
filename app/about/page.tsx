'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Target, Award, CheckCircle, ArrowRight, Globe, Lightbulb, Shield } from 'lucide-react';
const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We continuously push the boundaries of technology to deliver cutting-edge solutions that drive business growth.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring every solution is tailored to their unique needs and goals.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from initial consultation to final delivery.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'We prioritize security and compliance in all our solutions, protecting your data and maintaining your trust.'
    }
  ];
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and commitment to delivering innovative technology solutions." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, technology company, innovation, expertise" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and commitment to delivering innovative technology solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Zion Tech Group" />
        <meta name="twitter:description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and commitment to delivering innovative technology solutions." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl mb-8">
                Leading the future of AI and IT solutions with innovation, expertise, and unwavering commitment to excellence
              </p>
            </div>
          </div>
        </div>
        {/* Mission Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                At Zion Tech Group, we are dedicated to transforming businesses through innovative AI and IT solutions. 
                Our mission is to empower organizations with cutting-edge technology that drives growth, efficiency, and success.
              </p>
              <p className="text-lg text-gray-600">
                We believe in the power of technology to solve complex challenges and create opportunities for our clients 
                to thrive in an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
        {/* Values Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-blue-600" />
                    </div>
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
          </div>
        </div>
        {/* Stats Section */}
        <div className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss how we can help transform your business with innovative AI and IT solutions
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutPage;