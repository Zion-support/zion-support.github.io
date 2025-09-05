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
  );
};

export default ProductsIndex;