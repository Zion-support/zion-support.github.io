<<<<<<< HEAD
import React from 'react';
import { Metadata } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Users, Shield, Globe, Brain } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-d028
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10
=======
import { Users, Shield, Globe, Brain } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-2b81

export const metadata: Metadata = {
  title: 'About Us - Zion Tech Group | AI & IT Solutions',
  description: 'Learn about Zion Tech Group\'s mission, values, and team. We\'re dedicated to delivering cutting-edge AI and IT solutions that transform businesses.',
  keywords: 'about us, AI solutions, IT services, technology company, digital transformation',
  openGraph: {
    title: 'About Us - Zion Tech Group',
    description: 'Learn about Zion Tech Group\'s mission, values, and team. We\'re dedicated to delivering cutting-edge AI and IT solutions that transform businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/about'
  }
};

<<<<<<< HEAD
<<<<<<< HEAD

export default function AboutPage() {
<<<<<<< HEAD
=======
export default function AboutPage() {
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2b81
  const _values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized support and expertise.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs.'
    }
  ];

  const _stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-d028
=======

<<<<<<< HEAD
export default function AboutPage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
        <p className="text-lg text-gray-600 mb-6">
          We are a leading provider of AI and IT solutions, helping businesses transform 
          their operations through cutting-edge technology.
        </p>
        <p className="text-lg text-gray-600">
          Our team of experts is dedicated to delivering innovative solutions that drive 
          growth and efficiency for our clients.
        </p>
      </div>
    </div>
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through advanced AI and IT solutions. Discover our team, values, and commitment to innovation." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, team, mission, values, innovation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section>
          <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  About Zion Tech Group
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  We are a leading provider of AI and IT solutions, dedicated to transforming businesses through innovative technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section>
          <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  To revolutionize business operations through cutting-edge AI and IT solutions, delivering measurable results and exceptional value to our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                    <p className="text-gray-300">We constantly push the boundaries of what's possible with technology.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                    <p className="text-gray-300">We deliver the highest quality solutions and services.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
                    <p className="text-gray-300">We maintain the highest ethical standards in all our interactions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
>>>>>>> cursor/delete-records-30ea
  );
};

export default AboutPage;