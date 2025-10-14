import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const FiveGConsultingPage = () => {
  const services = [
    {
      title: '5G Strategy Development',
      description: 'Comprehensive 5G implementation strategies tailored to your business needs.'
    },
      title: 'Security Assessment',
      description: 'Complete security evaluation for 5G network implementation.'
      title: 'Team Training',
      description: 'Expert training for your team on 5G technologies and best practices.'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Consulting Services - Zion Tech Group"
        description="Expert 5G consulting services to help your business leverage next-generation wireless technology."
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-9-0-0 mb-6">
            5G Consulting Services
          <p className="text-xl text-gray-6-0-0 max-w-3xl mx-auto">
            Expert guidance for your 5G transformation journey

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-9-0-0 mb-4">
                {service.title}
              <p className="text-gray-6-0-0 mb-4">
                {service.description}
              <Link 
                to="/contact" 
                className="inline-flex items-center text-blue-6-0-0 hover:text-blue-8-0-0 font-medium">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
          ))}

        <div className="text-center">
            className="inline-flex items-center bg-blue-6-0-0 hover:bg-blue-7-0-0 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
  </div></div></div></div></div></div></p></p></h1></h3></Link>);
};

export default FiveGConsultingPage;