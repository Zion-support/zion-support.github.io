import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Users, Award, ArrowRight, CheckCircle, Star, Globe, Zap } from 'lucide-react';

// Team members data
const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    expertise: "AI Strategy & Business Development",
    image: "/images/team/sarah-chen.jpg",
    bio: "15+ years in AI and machine learning, former Google AI researcher."
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder",
    expertise: "Cloud Architecture & Security",
    image: "/images/team/michael-rodriguez.jpg",
    bio: "Expert in cloud infrastructure and cybersecurity with 12+ years experience."
  },
  {
    name: "Emily Johnson",
    role: "Head of AI Research",
    expertise: "Machine Learning & Data Science",
    image: "/images/team/emily-johnson.jpg",
    bio: "PhD in Computer Science, specializing in deep learning and NLP."
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    expertise: "5G Technology & IoT",
    image: "/images/team/david-kim.jpg",
    bio: "Telecommunications expert with extensive experience in 5G implementation."
  }
];

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
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, team, and commitment to innovation." />
        <meta name="keywords" content="about us, AI solutions, IT services, team, company" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                We are pioneers in artificial intelligence and cutting-edge technology, 
                dedicated to transforming businesses through innovative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                To democratize advanced AI and technology solutions, making them accessible 
                to businesses of all sizes while maintaining the highest standards of security, 
                reliability, and innovation.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-blue-600 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The brilliant minds behind our innovative solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.expertise}</p>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver exceptional results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Track Record</h3>
                <p className="text-gray-300">500+ successful projects across various industries</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Award-Winning Solutions</h3>
                <p className="text-gray-300">Recognized for innovation and excellence in AI technology</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Global Reach</h3>
                <p className="text-gray-300">Serving clients worldwide with local expertise</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;