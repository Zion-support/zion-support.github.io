<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======

import { DollarSign, TrendingUp, Shield, Brain, BarChart3, Zap, Lock, ArrowRight, CheckCircle, CreditCard export default function FinancialSolutions
export { FinancialSolutions }() {
    const features = [
        {
            icon: Brain,
            title: "AI-Powered Risk Assessment",
            description: "Advanced machine learning models for credit risk and fraud detection"
        },
        {icon: BarChart3,
            title: "Predictive Analytics",
            description: "Forecast market trends and customer behavior with high accuracy"},
        {icon: Shield,
            title: "Regulatory Compliance",
            description: "Automated compliance monitoring for financial regulations"},
        {icon: Zap,
            title: "Real-time Processing",
            description: "High-speed transaction processing and settlement systems"},
        {icon: Lock,
            title: "Enterprise Security",
            description: "Bank-grade security with multi-layer encryption and authentication"},
        {
            icon: TrendingUp,
            title: "Portfolio Optimization",
            description: "AI-driven investment strategies and portfolio management"
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const FinancialSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>FinancialSolutions | Zion Tech Group</title>
        <meta name="description" content="FinancialSolutions - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">FinancialSolutions</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialSolutions;