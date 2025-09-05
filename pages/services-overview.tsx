<<<<<<< HEAD
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';

export default function ServicesOverviewPage() {
  return (
    <MainLayout title="Services Overview - Zion Tech Group">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Services Overview</h1>
        <p className="text-lg text-gray-700">
          This is a placeholder for the services overview page.
        </p>
      </div>
    </MainLayout>
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Brain, Server, Cloud } from 'lucide-react';

const serviceCategories = [
  {
    title: 'AI Services',
    description: 'Cutting-edge artificial intelligence solutions',
    icon: Brain
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT infrastructure and support',
    icon: Server
  },
  {
    title: 'Cloud Services',
    description: 'Scalable cloud solutions for modern businesses',
    icon: Cloud
  }
];

export default function ServicesOverviewPage() {
  return (
    <Layout title="Services Overview - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">Comprehensive technology solutions</p>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
  );
}