import React, { Suspense } from 'react';
import EnhancedSEO from '../components/EnhancedSEO'
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FiveGMigrationPage = () => {
  const services = [
    {
      title: '5G Migration Planning',
      description: 'Strategic planning for migrating from legacy networks to 5G.'
    },
      title: 'Security Migration',
      description: 'Secure migration of security protocols to 5G infrastructure.'
      title: 'Team Training',
      description: 'Comprehensive training for 5G migration and new technology adoption.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
title="5G Migration Services - Zion Tech Group"
        description="Expert 5G migration services to transition your business to next-generation wireless technology."
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-9-0-0 mb-6">
            5G Migration Services
          </h1>
          <p className="text-xl text-gray-6-0-0 max-w-3xl mx-auto">
            Migrate to 5G technology with minimal disruption using our proven migration strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flexitems-center mb-4">
                <CheckCircle className="h-8w-8 text-blue-6-0-0 mr-3" />
                <h3 className="text-xl font-semibold text-gray-9-0-0">
                  {service.title}
                </h3>
              <p className="text-gray-6-0-0 mb-6">
                {service.description}
              <Link 
                to="/contact" 
                className="inline-flex items-center text-blue-6-0-0 hover:text-blue-8 0 0 font-medium">
                Learn More
                <ArrowRight className="ml-2h-4 w-4" />
              </Link>
          ))}

        <div className="text-center">
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-6-0-0 hover:bg-blue-7 0 0"
            Get Started Today
            <ArrowRight className="ml-2h-5 w-5" />
  )

export default FiveGMigrationPage
