import React, { useState } from 'react';
export default ComprehensiveNewServicesShowcase2025;
import { comprehensiveNewServices2025 } from '../data/comprehensiveNewServices2025';
export default function Page() {
;
  return ()
    <div className="min-h-screen py-8 bg-gray-900">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}"
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >"
            <h1 className="text-5xl font-bold text-white mb-6">
              Revolutionary New Services 2025
            </h1>"
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover our cutting-edge micro SAAS services, IT solutions, and AI-powered platforms.Each service is designed to transform your business with innovative technology and proven ROI.</p>
          </motion.div>
        </div>

        {/* Search and Filter Section */}"
        <div className="mb-12">"
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}"
            <div className="relative flex-1 max-w-md">"
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />
              <input"
                type="text"
                placeholder="Search services..."
