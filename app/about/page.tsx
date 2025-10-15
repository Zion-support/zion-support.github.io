import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Users, Award, Globe, Target } from 'lucide-react';

const SEOHead = ({ title, description }: { title: string; description: string }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex problems."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Your data and systems are protected with enterprise-grade security measures and best practices."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring transparency and alignment throughout every project."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We are committed to delivering exceptional quality and exceeding expectations in everything we do."
    }
  ];

  return (
    <>
      <SEOHead 
        title="About Us - Zion Tech Group" 
        description="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge AI and IT solutions." 
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI solutions, IT services, and digital transformation. 
                Our mission is to empower businesses with cutting-edge technology.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-300">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-colors">
                  <div className="text-blue-400 mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-24 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              To revolutionize the way businesses operate by providing innovative AI and IT solutions that drive growth, 
              efficiency, and success. We believe technology should be accessible, powerful, and transformative.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}