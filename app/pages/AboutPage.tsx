import React from 'react';
import React from 'react';
import React from 'react';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Zion Tech Group",
    "description": "Learn about Zion Tech Group's mission, values, and team of experts in AI and IT solutions.",
    "url": "https://ziontechgroup.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo192.png",
      "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "streetAddress": "364 E Main St STE 1008"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      }
    }
  };

  return (
    <>
      <SEOHead 
        title="About Zion Tech Group - Advanced AI and IT Solutions"
        description="Learn about Zion Tech Group's mission, values, and team of experts in AI and IT solutions. We help businesses transform through cutting-edge technology."
        keywords="about zion tech group, AI solutions company, IT services team, technology experts, digital transformation"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Pioneering the Future of Technology
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              We are a team of passionate technologists, innovators, and problem-solvers 
              dedicated to transforming businesses through cutting-edge AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage in the digital age.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  We believe technology should be accessible, powerful, and transformative. 
                  Our mission is to bridge the gap between complex technology and practical 
                  business solutions.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Work With Us <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <LightBulbIcon className="w-8 h-8 text-yellow-400" />
                    Innovation
                  </h3>
                  <p className="text-gray-300">
                    We stay at the forefront of technology, constantly exploring new ways 
                    to solve complex business challenges.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <ShieldCheckIcon className="w-8 h-8 text-green-400" />
                    Reliability
                  </h3>
                  <p className="text-gray-300">
                    Our solutions are built with security and reliability as core principles, 
                    ensuring your business operations run smoothly.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <HeartIcon className="w-8 h-8 text-red-400" />
                    Partnership
                  </h3>
                  <p className="text-gray-300">
                    We work closely with our clients as partners, understanding their unique 
                    needs and delivering tailored solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience 
                in AI, cybersecurity, cloud computing, and digital transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <UserGroupIcon className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">
                  Our team consists of certified professionals with expertise in 
                  cutting-edge technologies and industry best practices.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <RocketLaunchIcon className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovation Focus</h3>
                <p className="text-gray-300">
                  We continuously invest in research and development to bring 
                  the latest technological advances to our clients.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <CheckCircleIcon className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300">
                  Our track record speaks for itself with successful projects 
                  and satisfied clients across various industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our culture
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <LightBulbIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We embrace new ideas and technologies to create breakthrough solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <ShieldCheckIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Integrity</h3>
                <p className="text-gray-300">
                  We conduct business with honesty, transparency, and ethical practices.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <UserGroupIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
                <p className="text-gray-300">
                  We work together with our clients and partners to achieve shared success.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <RocketLaunchIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We strive for the highest quality in everything we deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how we can help transform your business with our 
              cutting-edge technology solutions.
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
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
