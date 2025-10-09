import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Brain, Shield } from 'lucide-react';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Zion Tech Group</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI and IT solutions.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;