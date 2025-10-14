import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Users, Award, Zap, Globe, Target, CheckCircle } from 'lucide-react';

// Company values
const values = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security & Trust",
    description: "We prioritize the security and privacy of our clients' data with enterprise-grade protection measures."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Client Success",
    description: "Our success is measured by our clients' success. We're committed to delivering exceptional results."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Excellence",
    description: "We maintain the highest standards of quality in everything we do, from code to customer service."
  }
];

// Company stats
const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "150+", label: "Happy Clients" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" }
];

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses with cutting-edge AI, 5G technology, and comprehensive IT solutions." />
        <meta name="keywords" content="about, AI solutions, IT services, 5G technology, company" />
        <meta property="og:title" content="About Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of AI solutions, 5G technology, and comprehensive IT services." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We are pioneers in artificial intelligence and next-generation technology, 
                dedicated to transforming businesses through innovative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-blue-500/20">
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To democratize advanced AI and IT technologies, making them accessible 
                  to businesses of all sizes while maintaining the highest standards of 
                  security, performance, and innovation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 p-8 rounded-xl border border-green-500/20">
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the global leader in AI-powered business transformation, 
                  creating a future where technology seamlessly integrates with 
                  human potential to solve complex challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">
                  Constantly pushing boundaries with cutting-edge technology and creative solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Security</h3>
                <p className="text-gray-300">
                  Prioritizing data protection and privacy with enterprise-grade security measures.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Partnership</h3>
                <p className="text-gray-300">
                  Building lasting relationships based on trust, transparency, and mutual success.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">
                  Maintaining the highest standards in everything we deliver, from code to service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Impact</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">150+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;