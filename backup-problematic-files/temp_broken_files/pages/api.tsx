import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/pages/api.tsx
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
import Head from 'next/head';
import Layout from '../components/Layout';

export default function APIPage() {
  return (
    <Layout 
      title="API Services - Zion Tech Group"
      description="Comprehensive API solutions for modern applications"
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Powerful, scalable API solutions for your applications
              </p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
=======
=======
import MainLayout from '../components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="API Documentation - Zion Tech Group"
      description="API documentation for Zion Tech Group services"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">API Documentation</h1>
          <p className="text-xl text-gray-600">This is a placeholder for the API documentation.</p>
        </div>
>>>>>>> main:pages/docs/api.tsx
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
      </div>
    </Layout>
  );
}