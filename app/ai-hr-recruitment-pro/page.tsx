import React from 'react';
import { ArrowRight, CheckCircle, UserCheck, FileText  } from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIHRRecruitmentPro = () => {
  const features = [
    {
      title: "AI Resume Screening",
      description: "Automatically screen and rank resumes using advanced AI algorithms",
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Candidate Matching",
      description: "Match candidates to job requirements with 95% accuracy",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Interview Scheduling",
      description: "Automated interview scheduling and calendar management",
      icon: <Clock className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Talent Analytics",
      description: "Comprehensive analytics on recruitment performance and trends",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    }
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO title="AI HR & Recruitment Pro - Intelligent Talent Management | Zion Tech Group"
        description="Revolutionize your hiring process with AI-powered recruitment tools. Automated screening, candidate matching, and talent analytics for modern HR teams."
        keywords="AI recruitment, HR automation, talent management, candidate screening, hiring software, recruitment analytics"
        canonical="https://ziontechgroup.com/ai-hr-recruitment-pro"
      />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div></>
          <div></>
        </>
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Users className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered HR</>
          </>
          <h1 className="text-4 xl md:text-6 xl lg:text-7 xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI HR & Recruitment Pro
            </>
          </>
          <p >
            Revolutionize your hiring process with AI-powered recruitment tools. 
            Find the best talent faster with automated screening, intelligent matching, and comprehensive analytics.
          </>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
            </>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Users className="w-5 h-5" />}
            >
              View Demo
            </>
          </>
        </>
      </>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer >
          <div className="text-center mb-16">
            <h2 className="text-3 xl md:text-4 xl lg:text-5 xl font-bold text-white mb-6">
              Intelligent Recruitment Features
            </>
            <p >
              Everything you need to streamline your hiring process and find the best talent.
            </>
          </>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2 xl hover:shadow-cyan-500/10"
              >
                <div >
                  {feature.icon}
                </>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </>
                <p >
                  {feature.description}
                </>
              </>
            ))}
          </>
        </>
      </>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer >
          <div className="text-center mb-16">
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4">
              Why Choose AI HR & Recruitment Pro?
            </>
            <p >
              Experience the future of talent acquisition with AI-powered recruitment tools.
            </>
          </>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</>
              </>
            ))}
          </>
        </>
      </>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer >
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2 xl p-12">
            <h2 className="text-3 xl md:text-4 xl lg:text-5 xl font-bold text-white mb-6">
              Ready to Transform Your Hiring?
            </>
            <p >
              Join leading companies using AI HR & Recruitment Pro to find and hire the best talent faster.
            </>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Free Trial
              </>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<UserCheck className="w-5 h-5" />}
              >
                View Pricing
              </>
            </>
          </>
        </>
      </>
ursor/fix-errors-and-merge-to-main-94 a7
    </>
  );
};

export default AIHRRecruitmentPro;
ursor/fix-errors-and-merge-to-main-94 a7
