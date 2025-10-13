import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const values = [
    {
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new AI and IT solutions to give our clients a competitive edge."
    },
    {
      title: "Client Success",
      description: "Your success is our success. We measure our achievements by the growth and satisfaction of our clients."
    },
    {
      title: "Quality & Reliability",
      description: "We deliver enterprise-grade solutions with 99.9% uptime and comprehensive support to ensure your business continuity."
    },
    {
      title: "Transparency",
      description: "Clear communication, honest pricing, and regular updates keep you informed throughout every project."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "99%", label: "Success Rate" },
    { number: "4+", label: "Years Experience" }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge AI and IT solutions for modern businesses." />
        <meta name="keywords" content="about us, AI solutions, IT services, company values, team expertise" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Pioneering the future of business technology with innovative AI and IT solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Since 2020, we've been helping businesses transform their operations through 
              cutting-edge artificial intelligence, cybersecurity, and digital transformation services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              To democratize advanced technology by making AI and IT solutions accessible, 
              affordable, and effective for businesses of all sizes. We believe every company 
              deserves access to cutting-edge technology that can transform their operations 
              and drive unprecedented growth.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how we can help transform your business with our technology solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get In Touch
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
