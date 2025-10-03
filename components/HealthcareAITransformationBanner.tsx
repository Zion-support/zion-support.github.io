"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { Heart, Award, TrendingUp, Shield, ArrowRight } from 'lucide-react';

export default function HealthcareAITransformationBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`relative bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 text-white py-8 px-4 transition-all duration-300 ${
      isClosing ? 'opacity-0 transform -translate-y-full' : 'opacity-100 transform translate-y-0'
    }`}>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Content */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-semibold">FORTUNE 50 SUCCESS STORY</span>
              </div>
              <div className="bg-yellow-400/30 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs font-bold">10:1 ROI</span>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold">
              Healthcare Enterprise: $8.4B AI Transformation Success 🏥
            </h3>
            
            <p className="text-white/90 text-base md:text-lg max-w-2xl">
              <strong>Fortune 50 Healthcare Leader</strong> | 60M Patients | 400,000+ Staff
              <br/>
              Revolutionary AI transformation delivering 92% reduction in diagnostic errors and 89% patient satisfaction
            </p>
            
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                <Award className="w-4 h-4 text-yellow-300" />
                <span>92% Fewer Diagnostic Errors</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                <TrendingUp className="w-4 h-4 text-green-300" />
                <span>$4.2B Annual Savings</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                <Shield className="w-4 h-4 text-blue-300" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col gap-3 min-w-[200px]">
            <Link
              to="/case-studies/ai-2025-oct-01-fortune-50-healthcare-ai-transformation-8-4-billion-success"
              className="group bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-bold text-center transition-all duration-200 flex items-center justify-center gap-2"
            >
              Read Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/services/healthcare-ai"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 border border-white/30"
            >
              Schedule Consultation
            </Link>
            
            <button
              onClick={handleClose}
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
