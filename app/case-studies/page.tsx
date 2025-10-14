import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from "lucide-react";

import { ArrowRight, TrendingUp, Zap, BarChart3, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'AI-Powered E-commerce Platform',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and chatbot',
      results: [
        '40% increase in conversion rates',
        '60% reduction in customer service tickets',
        '25% increase in average order value'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data analysis and reporting',
      solution: 'Developed AI-driven analytics dashboard with predictive insights',
      results: [
        '50% faster diagnosis times',
        '30% reduction in readmission rates',
        '95% accuracy in risk prediction'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Financial Services Automation',
      client: 'FinTech Global',
      industry: 'Financial Services',
      challenge: 'Manual processes causing delays and errors',
      solution: 'Automated loan processing with AI and machine learning',
      results: [
        '70% reduction in processing time',
        '90% accuracy in risk assessment',
        '80% cost savings in operations'
      ],
      image: '/api/placeholder/400/300'
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Reduction", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "60%", label: "Average Efficiency Gain", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Professional case studies services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Case Studies</h1>
          <p className="text-lg text-gray-300 mb-8">Professional case studies services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
>>>>>>> origin/main
=======
>>>>>>> origin/main
