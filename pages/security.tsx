import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

const securityFeatures = [
  {
    title: 'Data Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols',
    icon: Lock
  },
  {
    title: 'Access Control',
    description: 'Multi-factor authentication and role-based access control for enhanced security',
    icon: Shield
  }
];

export default function SecurityPage() {
  return (
    <Layout title="Security - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Security</h1>
            <p className="text-xl text-blue-100">Protecting your data and systems</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
