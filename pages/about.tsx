import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Award, Users, Shield, Clock, CheckCircle, Star, Phone, Mail, MapPin } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '200+', label: 'Expert Team Members', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '50+', label: 'Happy Clients', icon: Award },
    { number: '20+', label: 'Years Experience', icon: Award }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group | Leading Technology Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and expertise. 20+ years of experience, 500+ projects completed, and 200+ expert team members." />
        <meta name="keywords" content="about us, company history, team expertise, technology solutions, AI services, IT solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We are a leading technology solutions provider with 20+ years of experience, 
                delivering cutting-edge AI, IT, and micro SaaS solutions to businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Work With Us
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 mr-2" />
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To empower businesses with cutting-edge technology solutions that drive growth, 
                  innovation, and competitive advantage. We believe technology should be accessible, 
                  reliable, and transformative for organizations of all sizes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">Deliver innovative technology solutions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">Ensure client success and satisfaction</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">Maintain the highest quality standards</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To be the world's leading technology solutions provider, recognized for our innovation, 
                  expertise, and commitment to client success. We envision a future where every business 
                  has access to the technology they need to thrive in the digital age.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Commitment</h3>
                  <p className="text-gray-600">
                    We are committed to continuous innovation, exceptional service delivery, 
                    and building long-term partnerships with our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group for their technology needs. 
              Let's discuss how we can help accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Started Today
              </Link>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}