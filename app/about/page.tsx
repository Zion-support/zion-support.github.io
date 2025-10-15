import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Lightbulb, Shield, Users, Target, Award, Globe } from 'lucide-react';

const SEOHead = ({ title, description }: { title: string, description: string }) => (
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
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Security",
      description: "Your data and systems are protected with enterprise-grade security measures."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Collaboration",
      description: "We work closely with your team to understand and meet your unique needs."
    },
    {
      icon: <Target className="w-8 h-8 text-red-600" />,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality standards."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="About Us - Zion Tech Group" 
        description="Learn about Zion Tech Group, a leading provider of AI and IT solutions with 5+ years of experience serving businesses worldwide." 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Zion Tech Group</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are a leading technology company specializing in AI and IT solutions, 
            helping businesses transform and thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              To empower businesses with cutting-edge AI and IT solutions that drive growth, 
              efficiency, and innovation. We believe technology should be accessible, 
              reliable, and transformative.
            </p>
            <div className="flex items-center justify-center">
              <Globe className="w-12 h-12 text-blue-600 mr-4" />
              <span className="text-xl font-semibold">Making Technology Work for You</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, 
              software development, and business consulting.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Engineers</h3>
              <p className="text-gray-600">Certified professionals with deep expertise in AI and modern technologies.</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Consultants</h3>
              <p className="text-gray-600">Strategic thinkers who understand both technology and business needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Project Managers</h3>
              <p className="text-gray-600">Dedicated professionals ensuring timely delivery and quality results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our AI and IT solutions.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}