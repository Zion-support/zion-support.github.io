import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

import {Settings, Brain, Target, BarChart3, Zap, Shield, ArrowRight, CheckCircle, Factory, Cog} from 'lucide-react';
export default function ManufacturingSolutions
export {ManufacturingSolutions}() {
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
        {icon: Settings,
            title: "Process Optimization",
            description: "AI-powered process improvement and efficiency optimization"}
    ];
    const benefits = [
        "Reduce downtime by 40-60%",
        "Improve product quality by 25-35%",
        "Lower production costs by 20-30%",
        "Increase production efficiency",
        "Better resource utilization",
        "Enhanced safety and compliance"
    ];
    const solutions = [
        {title: "Smart Manufacturing",
            description: "IoT-enabled connected manufacturing with real-time monitoring"},
        {title: "Predictive Analytics",
            description: "AI-powered forecasting and predictive maintenance solutions"},
        {title: "Quality Management",
            description: "Automated quality control and defect prevention systems"},
        {title: "Supply Chain Optimization",
            description: "Intelligent inventory and supply chain management"}
    ];
    const industries = [
        "Automotive",
        "Electronics",
        "Pharmaceuticals",
        "Food & Beverage",
        "Aerospace",
        "Textiles",
        "Chemicals",
        "Heavy Machinery"
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial = {
  { opacity: 0,
  y: 20 
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const ManufacturingSolutions.js: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>ManufacturingSolutions.js | Zion Tech Group</title>
        <meta name="description" content="ManufacturingSolutions.js - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">ManufacturingSolutions.js</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingSolutions.js;