import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Target } from 'lucide-react';
import { FileText } from 'lucide-react';

const AIHRRecruitmentProPage = () => {
  const benefits = [
    "Reduce hiring time by 70%",
    "Increase candidate quality by 50%",
    "Eliminate bias in screening",
    "Automate 80% of recruitment tasks",
    "Improve retention rates by 30%",
    "Scale recruitment processes efficiently"
  ];

  const features = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Smart Candidate Matching",
      description: "AI-powered matching algorithm that finds the perfect candidates for your roles."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Automated Screening",
      description: "Intelligent resume screening and initial candidate assessment."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Interview Scheduling",
      description: "Automated interview scheduling and calendar management."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Track recruitment metrics and optimize your hiring process."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance Management",
      description: "Ensure compliance with employment laws and regulations."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Updates",
      description: "Get instant notifications and updates on candidate progress."
    }
  ];

  const benefits = [
    "50% faster time-to-hire",
    "90% reduction in manual screening",
    "Improved candidate quality",
    "Automated compliance tracking",
    "Real-time analytics dashboard",
    "Seamless integration with existing systems"
  ];
=======
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

export default function AiHrRecruitmentProPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Hr Recruitment Pro - Zion Tech Group</title>
        <meta name="description" content="Ai Hr Recruitment Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Hr Recruitment Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai hr recruitment pro solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
