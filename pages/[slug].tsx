import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  category: string;
}

interface ServicePageProps {
  service: Service;
}

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Service Not Found</h1>
          <p className="text-gray-600 mt-2">The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{service.title} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{service.description}</p>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing</h3>
                <p className="text-xl text-blue-600 font-bold">{service.pricing}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Return empty paths for now - this would normally fetch from a data source
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  
  // Mock service data - this would normally be fetched from a data source
  const mockService: Service = {
    id: slug,
    title: 'Sample Service',
    description: 'This is a sample service description.',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3'
    ],
    pricing: '$99/month',
    category: 'Technology'
  };

  return {
    props: {
      service: mockService
    }
  };
};

export default ServicePage;