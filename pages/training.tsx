<<<<<<< HEAD
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
=======
import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Play, 
  Clock, 
  Star, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle,
  Target,
  Zap
} from 'lucide-react';
import Layout from '../components/Layout';
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5

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
