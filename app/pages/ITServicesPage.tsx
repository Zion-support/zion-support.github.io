import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ITServicesPage() {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud solutions, and technical support." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-8">IT Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete IT solutions to keep your business running smoothly and securely. 
              From infrastructure management to cybersecurity, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Infrastructure Management</h3>
              <p className="text-gray-300 mb-6">
                Complete management of your IT infrastructure including servers, networks, and hardware.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Server Administration</li>
                <li>• Network Management</li>
                <li>• Hardware Maintenance</li>
                <li>• Performance Monitoring</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cybersecurity</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive security solutions to protect your business from cyber threats and data breaches.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Security Audits</li>
                <li>• Threat Detection</li>
                <li>• Incident Response</li>
                <li>• Security Training</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cloud Solutions</h3>
              <p className="text-gray-300 mb-6">
                Cloud migration, management, and optimization services for modern businesses.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Cloud Migration</li>
                <li>• Multi-Cloud Management</li>
                <li>• Cost Optimization</li>
                <li>• Disaster Recovery</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Technical Support</h3>
              <p className="text-gray-300 mb-6">
                24/7 technical support to ensure your systems are always running at peak performance.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• 24/7 Help Desk</li>
                <li>• Remote Support</li>
                <li>• System Maintenance</li>
                <li>• User Training</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Data Management</h3>
              <p className="text-gray-300 mb-6">
                Secure and efficient data storage, backup, and recovery solutions for your business.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Data Backup & Recovery</li>
                <li>• Database Management</li>
                <li>• Data Migration</li>
                <li>• Compliance Management</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">IT Consulting</h3>
              <p className="text-gray-300 mb-6">
                Strategic IT consulting to help you make informed technology decisions and plan for the future.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Technology Assessment</li>
                <li>• IT Strategy Planning</li>
                <li>• Vendor Management</li>
                <li>• Digital Transformation</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our IT Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">24/7</span>
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock technical support for your peace of mind.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">99.9%</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Uptime Guarantee</h3>
                <p className="text-gray-300">Reliable systems with guaranteed uptime and performance.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">10+</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Years Experience</h3>
                <p className="text-gray-300">Decade of experience in IT services and solutions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Happy Clients</h3>
                <p className="text-gray-300">Satisfied clients across various industries.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our IT experts help you build a robust, secure, and scalable technology foundation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started Today
              </a>
              <a href="/demo" className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}