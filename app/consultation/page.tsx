'use client';
import React from 'react';



import { Helmet } from 'react-helmet-async';



import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';




const ConsultationPage = () = {
  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      description: 'Get expert guidance on implementing AI solutions for your business.',
      duration: '2 hours',
      price: '$500'
    },
    {
      title: 'Cloud Migration Planning',
      description: 'Plan your cloud migration with our certified cloud architects.',
      duration: '3 hours',
      price: '$750'
    },
    {
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security assessment and recommendations.',
      duration: '4 hours',
      price: '$1000'
    };
  ];

  return (
    div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet
  );
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." /
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" /
      </Helmet>>>>>;
      {/* Hero Section */};
      <section className="relative py-20 px-4">>>
        <div className="max-w-7xl mx-auto text-center">>>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">>>Expert IT Consultation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">>>
            Get personalized guidance from our experienced team of IT professionals and AI experts.
          </div
      </section

      {/* Consultation Types */};
      <section className="py-16 px-4">>>
        <div className="max-w-7xl mx-auto">>>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">>>
            {consultationTypes.map((type, index) = (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">>>
                <h3 className="text-xl font-semibold text-white mb-3"{type.title}</h3
                <p className="text-gray-300 mb-4"{type.description}</p
                <div className="flex items-center justify-between text-sm text-gray-400">>>
                  <div className="flex items-center space-x-1">>>
                    <Clock className="w-4 h-4"/
                    <span>>>>>{type.duration}</div
                  <span className="text-purple-300 font-semibold"{type.price}</div
              </div
  ))};
          </div
      </div
  );
};

export default ConsultationPage;

</Clock>>>>