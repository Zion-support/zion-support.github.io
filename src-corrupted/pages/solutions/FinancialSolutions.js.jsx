import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

import {DollarSign, TrendingUp, Shield, Brain, BarChart3, Zap, Lock, ArrowRight, CheckCircle, CreditCard} from 'lucide-react';
export default function FinancialSolutions
export {FinancialSolutions}() {
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
        {icon: TrendingUp,
            title: "Portfolio Optimization",
            description: "AI-driven investment strategies and portfolio management"}
    ];
    const benefits = [
        "Reduce fraud losses by 60-80%",
        "Improve risk assessment accuracy by 40%",
        "Lower operational costs by 30-50%",
        "Enhance customer experience",
        "Faster transaction processing",
        "Better regulatory compliance"
    ];
    const solutions = [
        {title: "Digital Banking",
            description: "Modern digital banking platforms with AI-powered features"},
        {title: "Payment Processing",
            description: "Secure and efficient payment processing solutions"},
        {title: "Risk Management",
            description: "Comprehensive risk assessment and mitigation tools"},
        {title: "Compliance Automation",
            description: "Automated regulatory compliance and reporting"}
    ];
    const industries = [
        "Retail Banking",
        "Investment Banking",
        "Insurance",
        "Fintech",
        "Credit Unions",
        "Wealth Management",
        "Payment Processors",
        "Regulatory Bodies"
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial = {
  { opacity: 0,
  y: 20 
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const FinancialSolutions.js: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>FinancialSolutions.js | Zion Tech Group</title>
        <meta name="description" content="FinancialSolutions.js - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">FinancialSolutions.js</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialSolutions.js;