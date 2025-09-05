import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Rocket, 
  BarChart3, 
  Settings, 
  ArrowRight,
  CheckCircle,
  Users,
  Building,
  Globe,
  Target
} from 'lucide-react';
import Layout from '../../components/Layout';
=======
import MainLayout from '../../src/components/layout/MainLayout';
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
