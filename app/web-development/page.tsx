import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, IconComponent, Star, CheckCircle, Clock } from 'lucide-react';

const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    // ... features
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
  ];

const benefits = [
  const features = [
    {
      title: 'Modern Technologies',
        description: 'We use the latest technologies and best practices for optimal performance.',
        icon: Code,
      },
  ];

  return (
    <>
      <Helmet>
        <title>Web Development - Zion Tech Group | Custom Website Solutions</title>
        <meta name="description" content="Professional web development services including responsive design, e-commerce, web applications, and CMS development." />
        <meta name="keywords" content="web development, website design, e-commerce, web applications, responsive design, CMS development" />
        <link rel="canonical" href="https://ziontechgroup.com/web-development" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          
        <div className="max-w-7xl mx-auto text-center">
            
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Web <span className="text-cyan-400">Development</span>
            </h1>
            
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning, high-performance websites and web applications that drive business growth and engage your audience.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Technologies We Use
            </h2>
            
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center">
                  
        <div className="w-16 h-16 bg-slate-800/50 rounded-lg flex items-center justify-center mx-auto mb-3 text-2xl">
                  </div>
                  <span className="text-gray-300 text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our Web Development Services?
            </h2>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
  
  );
};
export default WebDevelopmentPage;
}}
    </>
  );
}