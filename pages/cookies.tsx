import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';

export default function CookiesPage() {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Cookie policy for Zion Tech Group website"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
          <p className="text-xl text-gray-600">This is a placeholder for the cookie policy.</p>
        </div>
      </div>
    </MainLayout>
  );
}