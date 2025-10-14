import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { Link  } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Users, Download, ExternalLink, ChevronRight, Phone, Mail  } from 'lucide-react';

// Team members data (for future use)
// const teamMembers =[
//   {
//     name:"Sarah Chen",
//     role:"CEO & Co-Founder",
//     expertise:"AI Strategy & Business Development",
//     image:"/images/team/sarah-chen.jpg",
//     bio:"15+ years in AI and machine learning, former Google AI researcher."
//   },
//   {
//     name:"Michael Rodriguez",
//     role:"CTO & Co-Founder",
//     expertise:"Cloud Architecture & Security",
//     image:"/images/team/michael-rodriguez.jpg",
//     bio:"Expert in cloud infrastructure and cybersecurity with 12+ years experience."
//   },
//   {
//     name:"Emily Johnson",
//     role:"Head of AI Research",
//     expertise:"Machine Learning & Data Science",
//     image:"/images/team/emily-johnson.jpg",
//     bio:"PhD in Computer Science, specializing in deep learning and NLP."
//   },
//   {
//     name:"David Kim",
//     role:"Head of Engineering",
//     expertise:"5G Technology & IoT",
//     image:"/images/team/david-kim.jpg",
//     bio:"Telecommunications expert with extensive experience in 5G implementation."
//   }
// ];

// Company values (for future use)
// const values =[
//   {
//     icon: <Brain className="w-8 h-8" />,
//     title:"Innovation First",
//     description:"We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions."
//   },
//   {
//     icon: <Shield className="w-8 h-8" />,
//     title:"Security & Trust",
//     description:"We prioritize the security and privacy of our clients' data with enterprise-grade protection measures."
//   },
//   {
//     icon: <Users className="w-8 h-8" />,
//     title:"Client Success",
//     description:"Our success is measured by our clients' success. We're committed to delivering exceptional results."
//   },
//   {
//     icon: <Award className="w-8 h-8" />,
//     title:"Excellence",
//     description:"We maintain the highest standards of quality in everything we do, from code to customer service."
//   }
// ];

// Company stats (for future use)
// const stats =[
//   { number:"500+", label:"Projects Completed" },
//   { number:"150+", label:"Happy Clients" },
//   { number:"99.9%", label:"Uptime Guarantee" },
//   { number:"24/7", label:"Support Available" }
// ];

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Professional about solutions and services" />
        <meta name="keywords" content="about" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">About</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional about solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;