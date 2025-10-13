import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Users, Download, ExternalLink, ChevronRight, Phone, Mail, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  // Team members data (for future use)
  // const teamMembers = [
  //   {
  //     name: "Sarah Chen",
  //     role: "CEO & Co-Founder",
  //     expertise: "AI Strategy & Business Development",
  //     image: "/images/team/sarah-chen.jpg",
  //     bio: "15+ years in AI and machine learning, former Google AI researcher."
  //   },
  //   {
  //     name: "Michael Rodriguez",
  //     role: "CTO & Co-Founder",
  //     expertise: "Cloud Architecture & Security",
  //     image: "/images/team/michael-rodriguez.jpg",
  //     bio: "Expert in cloud infrastructure and cybersecurity with 12+ years experience."
  //   },
  //   {
  //     name: "Emily Johnson",
  //     role: "Head of AI Research",
  //     expertise: "Machine Learning & Data Science",
  //     image: "/images/team/emily-johnson.jpg",
  //     bio: "PhD in Computer Science, specializing in deep learning and NLP."
  //   },
  //   {
  //     name: "David Kim",
  //     role: "Head of Engineering",
  //     expertise: "5G Technology & IoT",
  //     image: "/images/team/david-kim.jpg",
  //     bio: "Telecommunications expert with extensive experience in 5G implementation."
  //   }
  // ];

  // Company values (for future use)
  // const values = [
  //   {
  //     icon: <Brain className="w-8 h-8" />,
  //     title: "Innovation First",
  //     description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions."
  //   },
  //   {
  //     icon: <Shield className="w-8 h-8" />,
  //     title: "Security & Trust",
  //     description: "We prioritize the security and privacy of our clients' data with enterprise-grade protection measures."
  //   },
  //   {
  //     icon: <Users className="w-8 h-8" />,
  //     title: "Client Success",
  //     description: "Our success is measured by our clients' success. We're committed to delivering exceptional results."
  //   },
  //   {
  //     icon: <Award className="w-8 h-8" />,
  //     title: "Excellence",
  //     description: "We maintain the highest standards of quality in everything we do, from code to customer service."
  //   }
  // ];

  // Company stats (for future use)
  // const stats = [
  //   { number: "500+", label: "Projects Completed" },
  //   { number: "150+", label: "Happy Clients" },
  //   { number: "99.9%", label: "Uptime Guarantee" },
  //   { number: "24/7", label: "Support Available" }
  // ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and expertise in AI and IT solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a cutting-edge technology company specializing in AI solutions, 
            cloud infrastructure, and innovative IT services that transform businesses.
          </p>
        </div>
      </div>

      <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and cutting-edge artificial intelligence.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize advanced AI and technology solutions, making them accessible 
                  to businesses of all sizes while delivering unprecedented value and innovation.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  We believe that every organization deserves access to cutting-edge technology 
                  that can transform their operations, enhance their capabilities, and drive 
                  sustainable growth.
                </p>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="text-green-400 w-6 h-6" />
                  <span className="text-white font-semibold">Innovation First</span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8">
                  <Brain className="w-16 h-16 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Solutions</h3>
                  <p className="text-gray-200">
                    Our advanced AI technologies are designed to solve complex business challenges 
                    and unlock new opportunities for growth and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
