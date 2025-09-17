import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

import {Code, Shield, Zap, Users, BarChart3, Target, CheckCircle} from 'lucide-react';
export default function AICodeReview
export {AICodeReview}() {
    const features = [
        {
            icon: Code,
            title: "Automated Code Analysis",
            description: "AI-powered code review that identifies bugs, security vulnerabilities, and performance issues"
        },
        {icon: Shield,
            title: "Security Scanning",
            description: "Comprehensive security analysis to detect vulnerabilities and compliance issues"},
        {icon: Zap,
            title: "Performance Optimization",
            description: "Identify and fix performance bottlenecks and inefficient code patterns"},
        {icon: Users,
            title: "Team Collaboration",
            description: "Streamlined code review process with team feedback and approval workflows"},
        {icon: BarChart3,
            title: "Quality Metrics",
            description: "Track code quality improvements and maintain high standards across projects"},
        {icon: Target,
            title: "Best Practices",
            description: "Ensure code follows industry best practices and coding standards"}
    ];
    const benefits = [
        "Reduce code review time by 80%",
        "Improve code quality and maintainability",
        "Detect security vulnerabilities early",
        "Ensure consistent coding standards",
        "Accelerate development cycles",
        "Reduce production bugs by 60%"
    ];
    const supportedLanguages = [
        "JavaScript/TypeScript",
        "Python",
        "Java",
        "C#",
        "Go",
        "Rust",
        "PHP",
        "Ruby",
        "Swift",
        "Kotlin"
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate-darker">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial = {
  { opacity: 0,
  y: 20 
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const AICodeReview.js: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>AICodeReview.js | Zion Tech Group</title>
        <meta name="description" content="AICodeReview.js - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">AICodeReview.js</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default AICodeReview.js;