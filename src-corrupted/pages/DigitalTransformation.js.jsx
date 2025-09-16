import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

import {Link} from 'react-router-dom';
import {Rocket, Zap, Shield, Users, TrendingUp, CheckCircle, Star, ArrowRight, Cpu, Database} from 'lucide-react';
import {SEO} from "../components/SEO";
const testimonials = [
    {content: "Zion's digital transformation approach was game-changing. They didn't just implement technology - they transformed our entire business model.",
        name: "Carlos Rodriguez",
        role: "CEO, InnovateCorp",
        rating: 5},
    {content: "The process automation they implemented saved us 40 hours per week and improved our customer satisfaction scores significantly.",
        name: "Lisa Chang",
        role: "COO, TechFlow Solutions",
        rating: 5},
    {content: "Working with Zion transformed our comp culture. We're now more agile, data-driven, and customer-focused than ever before.",
        name: "Marcus Johnson",
        role: "CTO, DigitalFirst Inc",
        rating: 5}
];
const stats = [
    {label: "Transformations Completed", value: "75+", icon: Rocket},
    {label: "Average ROI", value: "300%", icon: TrendingUp},
    {label: "Process Efficiency Gain", value: "60%", icon: Zap},
    {label: "Customer Satisfaction", value: "95%", icon: Users}
];
export default function DigitalTransformation
export {DigitalTransformation}() {
    return (<div className="min-h-screen bg-background relative overflow-hidden">
      <SEO title="Digital Transformation Services - Zion Tech Group" description="End-to-end business modernization strategies and implementation services that drive innovation and competitive advantage." keywords="digital transformation, business modernization, process automation, technology modernization, change management" canonical="https://ziontechgroup.com/digital-transformation" />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial = {
  { opacity: 0,
  y: 20 
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const DigitalTransformation.js: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>DigitalTransformation.js | Zion Tech Group</title>
        <meta name="description" content="DigitalTransformation.js - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">DigitalTransformation.js</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformation.js;