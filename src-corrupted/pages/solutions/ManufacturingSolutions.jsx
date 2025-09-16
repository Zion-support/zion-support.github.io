<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======

import { Settings, Brain, Target, BarChart3, Zap, Shield, ArrowRight, CheckCircle, Factory, Cog export default function ManufacturingSolutions
export { ManufacturingSolutions }() {
    const features = [
        {
            icon: Brain,
            title: "AI-Powered Predictive Maintenance",
            description: "Machine learning models to predict equipment failures and optimize maintenance schedules"
        },
        {icon: BarChart3,
            title: "Real-time Production Analytics",
            description: "Live monitoring and analysis of production metrics and KPIs"},
        {icon: Target,
            title: "Quality Control Automation",
            description: "AI-driven quality inspection and defect detection systems"},
        {icon: Zap,
            title: "Smart Supply Chain Management",
            description: "Intelligent inventory optimization and supply chain automation"},
        {icon: Shield,
            title: "Industrial Cybersecurity",
            description: "Advanced security for connected manufacturing systems and IoT devices"},
        {
            icon: Settings,
            title: "Process Optimization",
            description: "AI-powered process improvement and efficiency optimization"
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const ManufacturingSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>ManufacturingSolutions | Zion Tech Group</title>
        <meta name="description" content="ManufacturingSolutions - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">ManufacturingSolutions</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingSolutions;