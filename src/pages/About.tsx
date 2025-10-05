import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            About Zion Tech Group
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              We are a leading technology company specializing in advanced AI and IT solutions 
              that transform businesses and drive innovation across industries.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              Our mission is to empower organizations with cutting-edge technology that 
              enhances efficiency, improves decision-making, and creates competitive advantages 
              in today's digital landscape.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
            <p className="text-lg text-gray-300 mb-6">
              To be the global leader in AI-driven solutions that revolutionize how businesses 
              operate and compete in the modern economy.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
              <li>Innovation and continuous improvement</li>
              <li>Client success and satisfaction</li>
              <li>Integrity and transparency</li>
              <li>Collaboration and teamwork</li>
              <li>Excellence in everything we do</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;