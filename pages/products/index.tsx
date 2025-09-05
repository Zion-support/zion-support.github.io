<<<<<<< HEAD
import React from 'react';
import MainLayout from '../../src/components/layout/MainLayout';

export default function ProductsPage() {
  return (
    <MainLayout title="Products - Zion Tech Group">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>
        <p className="text-lg text-gray-700">
          This is a placeholder for the products page.
        </p>
      </div>
    </MainLayout>
=======
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const ProductsIndex: NextPage = () => {
  return (
    <Layout title="Products - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100">Innovative solutions for modern businesses</p>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
  );
}