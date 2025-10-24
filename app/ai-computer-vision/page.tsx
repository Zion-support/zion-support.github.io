import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Eye, Camera, Brain, Shield, Zap, BarChart, Users, Globe, Clock } from 'lucide-react';

const AiComputerVisionPage: React.FC = () => {
  return()
        <>
    <>
    <title>
</>AiComputerVision - Zion Tech Group<>
    </title>
    </>
</>
  const features = [;
    {
      title: 'Object Detection',
      description: 'Advanced object detection and recognition with high accuracy across various environments',
      icon: <Eye className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Image Classification',
      description: 'Intelligent image classification and categorization for automated content organization',
      icon: <Camera className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Facial Recognition',
      description: 'Secure and accurate facial recognition for authentication and identification systems',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Real-time Processing',
      description: 'High-speed image processing and analysis for real-time applications and edge computing',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Custom Models',
      description: 'Tailored computer vision models trained specifically for your industry and use case',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and insights from visual data to drive business decisions',
      icon: <BarChart className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const useCases = [;
    {
      title: 'Manufacturing Quality Control',
      description: 'Automated defect detection and quality assurance in production lines',
      benefits: ['Reduce defects by 90%', '24/7 monitoring', 'Consistent quality standards']
    },
    {
      title: 'Retail Analytics',
      description: 'Customer behavior analysis and inventory management through visual data',
      benefits: ['Optimize store layouts', 'Track customer flow', 'Manage inventory efficiently']
    },
    {
      title: 'Security & Surveillance',
      description: 'Intelligent surveillance systems with threat detection and alert capabilities',
      benefits: ['Enhanced security', 'Real-time alerts', 'Automated monitoring']
    }
  ];

  const industries = [;
    'Manufacturing',
    'Healthcare',
    'Retail',
    'Automotive',
    'Agriculture',
    'Security',
    'Transportation',
    'Entertainment'
  ];

  return()
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    <Helmet>
</>
        <title>AI Computer Vision - Zion Tech Group<>
    </title>
    <meta name="description", content="Advanced AI computer vision solutions for object detection, image classification, and real-time visual analysis." />
</>
        <>
    <meta name="keywords", content="AI computer vision, object detection, image recognition, facial recognition, visual analytics" />
    </Helmet>
</>

      {/* Hero Section */}
      <>
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto text-center">
</>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Computer
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {' '}Vision
            <>
    </span>
    </h1>
</>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform visual data into actionable insights with our advanced AI computer vision solutions. 
            From object detection to real-time analysis, we help you see what matters most.
          <>
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
</>
            <>
    <>
    <Link
              <Link
            </>
</>
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            <>
    </Link>
    </div>
</>
        <>
    </div>
    </section>
</>

      {/* Features Section */}
      <>
    <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
</>
          <>
    <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
</>
              Advanced Computer Vision Capabilities
            <>
    </h2>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
</>
              Cutting-edge AI technology for comprehensive visual analysis and intelligent automation.
            <>
    </p>
    </div>
</>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">)
            {features.map((feature, index) => (
              <>
    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
</>
                  {feature.icon}
                <>
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">
</>{feature.title}<>
    </h3>
    <p className="text-gray-300">
</>{feature.description}<>
    </p>
    </div>
</>)
            ))}
          <>
    </div>
    </div>
</>
      </section>

      {/* Use Cases Section */}
      <>
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
    <div className="max-w-7xl mx-auto">
</>
          <>
    <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
</>
              Industry Applications
            <>
    </h2>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
</>
              Our computer vision solutions are transforming industries across the globe.
            <>
    </p>
    </div>
</>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <>
    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
    <h3 className="text-xl font-semibold text-white mb-3">
</>{useCase.title}<>
    </h3>
    <p className="text-gray-300 mb-4">
</>{useCase.description}<>
    </p>
    <ul className="space-y-2">
</>)
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <>
    <li key={benefitIndex} className="flex items-center text-gray-300">
    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
</>
                      {benefit}
                    </li>)
                  ))}
                <>
    </ul>
    </div>
</>
            ))}
          <>
    </div>
    </div>
</>
      </section>

      {/* Industries Section */}
      <>
    <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
</>
          <>
    <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
</>
              Serving Multiple Industries
            <>
    </h2>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
</>
              Our computer vision solutions are trusted by leading companies across various sectors.
            <>
    </p>
    </div>
</>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <>
    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
    <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
</>
                <p className="text-white font-medium">{industry}<>
    </p>
    </div>
</>)
            ))}
          <>
    </div>
    </div>
</>
      </section>

      {/* CTA Section */}
      <>
    <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
</>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Visual Data?
          <>
    </h2>
    <p className="text-xl text-gray-300 mb-8">
</>
            Let's discuss how our AI computer vision solutions can revolutionize your business operations.
          <>
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
</>
            <>
    <>
    <Link
              <Link
            </>
</>
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule a Demo
            <>
    </Link>
    </div>
</>
        <>
    </div>
    </section>
</>
    </div>
  );
}

export default AiComputerVisionPage;
'use client';

const AiComputerVisionPage: React.FC = () => {
  return()
    <>
    <>
    </>
</>
      <>
    <Helmet>
    </Helmet>
</>
        <title>Ai Computer Vision - Zion Tech Group<>
    </title>
    <meta name="description", content="Ai Computer Vision services by Zion Tech Group. Professional AI and IT solutions." />
</><>
    </meta>
    <meta name="keywords", content="ai-computer-vision, AI solutions, IT services" />
</><>
    </meta>
    </Helmet>
</>
      <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
        <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
          <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <h1 className="w-5h-5ml-2" />
    </h1>
</>
              <span className="w-5h-5ml-2" />Ai Computer Vision;
              <>
    </span>
    </h1>
</>
            <p className="w-5h-5ml-2">Professional ai computer vision services by Zion Tech Group.
            <>
    </p>
    </div>
</>
          <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon<>
    </h2>
    <p className="w-5h-5ml-2">
</>We're working on bringing you comprehensive ai computer vision solutions. 
              Contact us to learn more about our services.
            <>
    </p>
    <button className="w-5h-5ml-2">
</>Contact Us;
            <>
    </button>
    </div>
</>
      <>
    </div>
    </>
</>)
  );
};
