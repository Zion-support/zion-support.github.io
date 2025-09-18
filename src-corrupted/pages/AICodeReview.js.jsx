import React from 'react';
import {motion} from 'framer-motion';
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

}} animate = {
  { opacity: 1,
  y: 0 

}} transition={{ duration: 0.6 }} className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              AI Code Review
            </div>
          </motion.div>
          
          <motion.h1 initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition = {
  { duration: 0.6,
  delay: 0.1 

}} className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"> Code Review</span>
          </motion.h1>
          
          <motion.p initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition = {
  { duration: 0.6,
  delay: 0.2 

}} className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your code review process with AI-powered analysis. Detect bugs, security issues, 
            and performance problems automatically while maintaining high code quality standards.
          </motion.p>
          
          <motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition = {
  { duration: 0.6,
  delay: 0.3 

}} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/30 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
              Schedule Demo
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AICodeReview.js;
