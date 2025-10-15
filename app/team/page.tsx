import React from 'react';
import { Helmet } from 'react-helmet-async';

const TeamPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group's innovative AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts who make our innovative solutions possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">KS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kleber Santos</h3>
              <p className="text-gray-600 mb-3">CEO & Founder</p>
              <p className="text-sm text-gray-500">
                Visionary leader with 15+ years in AI and technology. Passionate about transforming businesses through innovative solutions.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">AI</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Engineering Team</h3>
              <p className="text-gray-600 mb-3">Lead AI Engineers</p>
              <p className="text-sm text-gray-500">
                Expert team of AI researchers and engineers specializing in machine learning, NLP, and computer vision.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">IT</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">IT Solutions Team</h3>
              <p className="text-gray-600 mb-3">Infrastructure Specialists</p>
              <p className="text-sm text-gray-500">
                Skilled professionals in cloud infrastructure, DevOps, and enterprise IT solutions.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Team Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🤖</div>
                <h3 className="font-semibold text-gray-900 mb-2">AI & ML</h3>
                <p className="text-sm text-gray-600">Machine Learning, Deep Learning, NLP</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">☁️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Cloud</h3>
                <p className="text-sm text-gray-600">AWS, Azure, GCP, Kubernetes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💻</div>
                <h3 className="font-semibold text-gray-900 mb-2">Development</h3>
                <p className="text-sm text-gray-600">Full-Stack, Mobile, API Development</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="font-semibold text-gray-900 mb-2">Data</h3>
                <p className="text-sm text-gray-600">Analytics, Business Intelligence, ETL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;