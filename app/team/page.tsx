import React from 'react';
import { Helmet } from 'react-helmet-async';

const TeamPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Expert AI & IT Professionals</title>
        <meta name="description" content="Meet our expert team of AI and IT professionals. Experienced developers, engineers, and consultants ready to help your business succeed." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Expert Team</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Meet the talented professionals behind Zion Tech Group. Our team combines deep technical expertise 
                with business acumen to deliver exceptional results for our clients.
              </p>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced leaders driving innovation and excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Kleber Santos</h3>
                <p className="text-blue-600 font-medium mb-4">CEO & Founder</p>
                <p className="text-gray-600">Visionary leader with 15+ years in AI and technology innovation</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Dr. Sarah Chen</h3>
                <p className="text-blue-600 font-medium mb-4">Chief AI Officer</p>
                <p className="text-gray-600">PhD in Machine Learning with expertise in deep learning and NLP</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Michael Rodriguez</h3>
                <p className="text-blue-600 font-medium mb-4">CTO</p>
                <p className="text-gray-600">Technology architect with expertise in cloud infrastructure and security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;