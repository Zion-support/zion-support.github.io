'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AITransformationROICalculator2025Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          AI Transformation ROI Calculator 2025
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Calculate the potential ROI of your AI transformation project.
        </p>
        <div className="bg-gray-100 p-8 rounded-lg">
          <p className="text-gray-600">
            This calculator is coming soon. Contact us for a personalized ROI analysis.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Get Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
