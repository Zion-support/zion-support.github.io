import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Lightbulb, Shield, Users, Target, Award, Globe } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "AI Solutions" },
    { number: "24/7", label: "Support" }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Your data and systems are protected with enterprise-grade security measures."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs and challenges."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality standards."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expertise",
      description: "Our team consists of industry experts with years of experience in AI and IT solutions."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "We serve clients worldwide with localized support and understanding."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI solutions, IT services, 
              and digital transformation. Our mission is to empower businesses with cutting-edge 
              technology that drives growth and innovation.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-blue-600 mb-4">
                    {value.icon}
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

          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                To revolutionize the way businesses operate by providing innovative AI and IT solutions 
                that are not just cutting-edge, but also practical, scalable, and designed to deliver 
                real-world value. We believe technology should empower, not complicate, and our solutions 
                reflect this philosophy in every line of code and every strategic recommendation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}