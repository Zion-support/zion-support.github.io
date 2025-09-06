import React from 'react';
import { Link } from 'react-router-dom';
import SEO from "../components/SEO";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company dedicated to delivering innovative solutions that drive digital transformation and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              To empower businesses with cutting-edge technology solutions that enhance efficiency, drive innovation, and create sustainable competitive advantages.
    <>
      <SEO
        title="About Zion Tech Group"
        description="Learn about Zion Tech Group's mission to deliver cutting-edge AI and technology solutions that empower businesses to achieve their goals."
        keywords="about, company, mission, vision, AI solutions, technology"
        url="/about"
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-600 mb-6">
              Zion Tech Group is a leading provider of AI and technology solutions
              that help businesses scale and succeed in the digital age.
            </p>
            <p className="text-lg text-gray-600">
              We believe in the power of technology to transform industries and create meaningful impact in the digital world.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg">
              To be the global leader in technology solutions, recognized for our innovation, reliability, and commitment to client success.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Cutting-edge solutions using the latest technologies and methodologies.</p>
            </div>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            About Zion Tech Group
          </h1>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              Zion Tech Group is a leading technology solutions provider specializing in 
              AI, cybersecurity, cloud infrastructure, and digital transformation services.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To empower businesses with cutting-edge technology solutions that drive 
              innovation, enhance security, and accelerate digital transformation.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              To be the premier technology partner for organizations seeking to leverage 
              advanced technologies for competitive advantage and sustainable growth.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Innovation and Excellence</li>
              <li>Client-Centric Approach</li>
              <li>Security and Reliability</li>
              <li>Continuous Learning and Improvement</li>
              <li>Ethical Business Practices</li>
            </ul>
          </div>
        </div>
      </div>
};

export default About;

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This page is under construction.</p>
    </div>
  );
};

export default About;
