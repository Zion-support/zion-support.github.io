import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new ways to solve complex problems."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships based on trust and results."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "We believe technology should make the world better, one solution at a time."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "15+ years in tech leadership, former Google AI researcher"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in scalable architecture and cloud technologies"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of AI",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "PhD in Machine Learning, published researcher"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack expert with passion for clean code"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
            We're a team of passionate technologists dedicated to transforming businesses through innovative AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-blue-200 mb-6">
                To democratize advanced technology and make it accessible to businesses of all sizes. We believe that every company, regardless of size, should have access to cutting-edge AI and IT solutions that can transform their operations and drive growth.
              </p>
              <p className="text-lg text-blue-300 mb-8">
                Founded in 2020, we've helped over 500 companies leverage technology to achieve their goals. From startups to Fortune 500 companies, we've delivered solutions that matter.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 text-lg font-semibold">
                <span>Our Story</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">500+</div>
                  <div className="text-sm text-blue-200">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-300 mb-2">50+</div>
                  <div className="text-sm text-blue-200">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-300 mb-2">99%</div>
                  <div className="text-sm text-blue-200">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">24/7</div>
                  <div className="text-sm text-blue-200">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="text-blue-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-blue-200 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <div className="text-blue-300 mb-3">{member.role}</div>
                <p className="text-blue-200 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 text-lg font-semibold">
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href="/contact" className="border-2 border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-lg font-semibold">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;