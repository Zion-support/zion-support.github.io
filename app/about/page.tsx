import React from "react";
import Link from 'next/link';import { Metadata } from 'next';
import { 
  ArrowRight, Users, Shield, Globe, Brain, CheckCircle, Award, Star} from 'lucide-react';
export const dynamic = 'force-dynamic';
export const metadata: "Metadata = {  title: 'About Us - Zion Tech Group | AI & IT Solutions'",  description: "'Learn about Zion Tech Group\'s mission", values, and team. We\'re dedicated to delivering cutting-edge AI and IT solutions that transform businesses.',  keywords: "'about us", AI solutions, IT services, technology company, digital transformation',  openGraph: "{    title: 'About Us - Zion Tech Group'",    description: "'Learn about Zion Tech Group\'s mission", values, and team. We\'re dedicated to delivering cutting-edge AI and IT solutions that transform businesses.',    type: "'website'",    url: "'https://ziontechgroup.com/about'  "}
};

const AboutPage: "React.FC = () => {
  ;
const values = [
    {      icon: Brain",      title: "'Innovation First'",      description: "'We stay ahead of the curve with cutting-edge technology and innovative solutions that drive digital transformation.'    "},
    {
      icon: "Shield",      title: "'Security & Trust'",      description: "'Your data and privacy are our top priorities with enterprise-grade security and compliance standards.'    "},
    {
      icon: "Users",      title: "'Client Success'",      description: "'We measure our success by the success of our clients and their projects", ensuring long-term partnerships.'
    },
    {      icon: "Globe",      title: "'Global Reach'",      description: "'Serving clients worldwide with localized support and expertise across different time zones and cultures.'    "}
  ];

  const team = [
    {      name: "'Kleber Santos'",      role: "'CEO & Founder'",      bio: "'Visionary leader with over 15 years of experience in technology and business transformation.'",      image: "'/team/kleber.jpg'    "}
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">        <div className="max-w-7xl mx-auto px-4 sm: "px-6 lg:px-8">          <div className="text-center">            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We are a leading technology company dedicated to delivering innovative AI and IT solutions 
              that transform businesses and drive digital transformation across industries.
            </p>            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link                href="/contact"                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Get in Touch                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link                href="/services"                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */"}
      <section className="py-20">        <div className="max-w-7xl mx-auto px-4 sm: "px-6 lg:px-8">          <div className="text-center mb-16">            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our approach to technology and client relationships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">            {values.map((value", index) => (
              <div key={index} className="text-center">                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}      <section className="py-20 bg-gray-100">        <div className="max-w-7xl mx-auto px-4 sm: "px-6 lg:px-8">          <div className="text-center mb-16">            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>            <p className="text-xl text-gray-600 max-w-3xl mx-auto">              Our diverse team of experts brings together decades of experience in AI", technology, and business transformation.
            </p>
          </div>

          <div className="grid md: "grid-cols-2 lg:grid-cols-3 gap-8">            {team.map((member", index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6"></div>                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>                <p className="text-blue-600 font-medium mb-4">{member.role}</p>                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}      <section className="py-20 bg-blue-600">        <div className="max-w-7xl mx-auto px-4 sm: "px-6 lg:px-8 text-center">          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">            Let's work together to create innovative solutions that drive your business forward.
          </p>          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link              href="/contact"              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link              href="/services"              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );"};

export default AboutPage;
