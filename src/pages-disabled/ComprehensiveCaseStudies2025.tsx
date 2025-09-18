import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const ComprehensiveCaseStudies2025: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Revolution',
      company: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Reducing diagnostic time while maintaining accuracy',
      solution: 'Implemented advanced AI diagnostic systems with neural networks',
      results: [
        '95% reduction in diagnostic time',
        '99.2% accuracy rate in disease detection',
        '40% cost savings in medical imaging',
        '50,000+ patients treated successfully'
      ],
      technologies: ['AI/ML', 'Neural Networks', 'Computer Vision', 'Big Data'],
      image: '🏥',
      color: 'from-blue-600 to-cyan-600'
    },
      id: 2,
      title: 'Quantum Computing in Financial Services',
      company: 'Quantum Finance Corp',
      industry: 'Financial Services',
      challenge: 'Optimizing complex portfolio management and risk assessment',
      solution: 'Deployed quantum algorithms for real-time portfolio optimization',
        '300% faster risk calculations',
        '25% improvement in portfolio returns',
        '99.9% accuracy in fraud detection',
        '$2B+ in assets under management'
      technologies: ['Quantum Computing', 'Machine Learning', 'Blockchain', 'Advanced Analytics'],
      image: '💰',
      color: 'from-purple-600 to-pink-600'
      id: 3,
      title: 'Autonomous Manufacturing Transformation',
      company: 'SmartManufacturing Inc',
      industry: 'Manufacturing',
      challenge: 'Achieving fully autonomous production lines with zero downtime',
      solution: 'Integrated AI-powered robotics and predictive maintenance systems',
        '99.8% uptime achieved',
        '60% reduction in production costs',
        '200% increase in production efficiency',
        'Zero workplace accidents in 2 years'
      technologies: ['Robotics', 'IoT', 'Predictive Analytics', 'Computer Vision'],
      image: '🏭',
      color: 'from-green-600 to-teal-600'
      id: 4,
      title: 'Space Technology for Earth Monitoring',
      company: 'SpaceTech Global',
      industry: 'Space Technology',
      challenge: 'Real-time monitoring of climate change and natural disasters',
      solution: 'Deployed advanced satellite constellation with AI-powered analysis',
        'Real-time global monitoring',
        '90% accuracy in disaster prediction',
        'Early warning system saved 10,000+ lives',
        'Coverage of 99.9% of Earth\'s surface'
      technologies: ['Satellite Technology', 'AI/ML', 'Remote Sensing', 'Big Data Analytics'],
      image: '🛰️',
      color: 'from-orange-600 to-red-600'
      id: 5,
      title: 'Neural Interface for Medical Rehabilitation',
      company: 'NeuroRehab Technologies',
      industry: 'Medical Technology',
      challenge: 'Restoring motor function in paralyzed patients',
      solution: 'Developed brain-computer interfaces with machine learning algorithms',
        '80% of patients regained partial movement',
        '60% achieved independent daily activities',
        'Revolutionary breakthrough in medical science',
        '500+ patients treated worldwide'
      technologies: ['Neural Interfaces', 'Machine Learning', 'Biomedical Engineering', 'AI'],
      image: '🧠',
      color: 'from-indigo-600 to-purple-600'
      id: 6,
      title: 'Sustainable Energy Grid Optimization',
      company: 'EcoGrid Solutions',
      industry: 'Energy',
      challenge: 'Managing renewable energy distribution across smart grids',
      solution: 'AI-powered grid management with predictive energy storage',
        '50% increase in renewable energy efficiency',
        '30% reduction in energy waste',
        '100% renewable energy coverage',
        'Carbon footprint reduced by 80%'
      technologies: ['Smart Grids', 'AI/ML', 'Energy Storage', 'IoT'],
      image: '⚡',
      color: 'from-yellow-600 to-orange-600'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-pulse">
            📊 COMPREHENSIVE CASE STUDIES 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Real-World Success Stories
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              & Transformations
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover how cutting-edge technologies are transforming industries and solving real-world challenges. 
            These case studies showcase the power of innovation and the measurable impact of advanced solutions.
          </p>
        </div>
        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-5xl">{study.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-blue-400 font-semibold">{study.company}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-300">{study.industry}</span>
                    </div>
                  </div>
                </div>
                <div className={`bg-gradient-to-r ${study.color} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                  Case Study #{study.id}
              </div>
              {/* Challenge & Solution */}
              <div className="mb-6">
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-white mb-2">🎯 Challenge</h4>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">💡 Solution</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
              {/* Results */}
                <h4 className="text-lg font-bold text-white mb-4">📈 Results</h4>
                <div className="grid grid-cols-2 gap-3">
                  {study.results.map((result, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-green-400 font-bold text-sm">{result}</div>
                  ))}
              {/* Technologies */}
                <h4 className="text-lg font-bold text-white mb-3">🛠️ Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, index) => (
                    <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {tech}
                    </span>
              {/* Action Button */}
              <button className={`w-full bg-gradient-to-r ${study.color} text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>
                View Detailed Case Study →
              </button>
            </div>
          ))}
        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Impact Across Industries</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Successful Projects</div>
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Industries Transformed</div>
              <div className="text-5xl font-bold text-green-400 mb-2">$2B+</div>
              <div className="text-gray-300">Value Created</div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">1M+</div>
              <div className="text-gray-300">Lives Impacted</div>
        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the companies that are already transforming their industries with cutting-edge technology. 
            Let us help you achieve similar results with our proven solutions.
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Download Case Studies
      </main>
      <Footer />
    </div>
  );
};
export default ComprehensiveCaseStudies2025;
