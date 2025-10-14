import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const services = [
    {
      title: 'Expert About Solutions',
      description: 'Professional about services tailored to your needs.'
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored about implementations for your specific requirements.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your about needs.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI solutions, 5G technology, and comprehensive IT services. Discover our mission, values, and expertise." />
        <meta name="keywords" content="about us, AI company, 5G technology, IT solutions, artificial intelligence, machine learning, cybersecurity" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Leading provider of AI solutions, 5G technology, and comprehensive IT services." />
        <meta property="og:type" content="website" />
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
const AboutPage: React.FC = () => {
=======
import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'



const About Page: React.FC = () => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d8c1
  return (
    <>
      <div>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about our company and mission" />
        <meta name="keywords" content="about, company, mission" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        
        <div className="container mx-auto px-4 py-16">
        
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
            <p className="text-xl text-gray-300 mb-8">Learn about our company and mission</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Our Mission</h3>
                <p className="text-blue-700">Delivering innovative technology solutions that drive business success.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Our Vision</h3>
                <p className="text-green-700">To be the leading technology partner for businesses worldwide.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Our Values</h3>
                <p className="text-purple-700">Innovation, integrity, and excellence in everything we do.</p>
              </div>
            </div>
          </div>
import React from 'react'; import { Helmet } from 'react-helmet-async'; const About Page: React.FC = ( )=> {return (
    <> 
      <Helmet> <title>About - Zion Tech Group</title> <meta name="description"content="Learn about our mission and expertise" /> <meta name="keywords"content="about, company, mission" /> 
      </Helmet> 
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> 
        <div className="container mx-auto px 4 py-16"> 
          <div className="text-center">"> <h1 className="text 4 xl font bold text-white mb-8">About Us</h1> <p className="text xl text gray-300 mb-8">Learn about our mission and expertise</p> 
            <div className="grid md:grid cols 2 lg:grid-cols-3 gap-8 mt-12"> <div className="bg blue 50 border border-blue-200 rounded-lg p-6"> <h3 className="text lg font semibold text-blue-900 mb-2">Expert Solutions</h3> <p className="text-blue-700">Our team of experts delivers cutting-edge solutions.</p> 
          </div> <div className="bg green 50 border border-green-200 rounded-lg p-6"> <h3 className="text lg font semibold text-green-900 mb-2">Custom Implementation</h3> <p className="text-green-700">Tailored implementations for your specific requirements.</p> 
          </div> <div className="bg purple 50 border border-purple-200 rounded-lg p-6"> <h3 className="text lg font semibold text-purple-900 mb-2">24/7 Support</h3> <p className="text-purple-700">Round-the-clock support for all your needs.</p> 
          
        </div>
=======
      </div>
</>
  );
}

export default AboutPage;
