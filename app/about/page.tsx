import React from 'react'
import { Helmet } from 'react-helmet-async'

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to provide cutting-edge AI and IT solutions for modern businesses" />
        <meta name="keywords" content="about us, company, AI solutions, IT services, team" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to provide cutting-edge AI and IT solutions for modern businesses" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://zion.app/about" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Zion Tech Group is a leading provider of advanced AI and IT solutions, 
                dedicated to helping businesses transform their operations through 
                cutting-edge technology and innovative approaches.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-8">
                To empower businesses with state-of-the-art AI and IT solutions that drive 
                growth, efficiency, and innovation in the digital age.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-8">
                To be the global leader in AI and IT solutions, creating a future where 
                technology seamlessly integrates with business operations to achieve 
                unprecedented success.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 text-white">Why Choose Us</h2>
              <ul className="list-disc list-inside text-lg text-gray-300 space-y-4">
                <li>Over 4 years of experience in cutting-edge technology solutions</li>
                <li>Expert team of AI and IT professionals</li>
                <li>Proven track record of successful project delivery</li>
                <li>Commitment to innovation and continuous improvement</li>
                <li>Customer-centric approach with 24/7 support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;