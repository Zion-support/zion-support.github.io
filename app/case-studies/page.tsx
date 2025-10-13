import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Star, Globe, Shield, CheckCircle, TrendingUp, Zap, BarChart3, Clock } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform AI Transformation",
      company: "TechStart Inc.",
      industry: "E-commerce",
      challenge: "Manual inventory management and customer service bottlenecks",
      solution: "AI-powered inventory optimization and automated customer support",
      results: [
        "60% reduction in inventory costs",
        "40% increase in customer satisfaction",
        "80% faster response times",
        "35% increase in sales"
      ],
      image: "/images/case-studies/ecommerce-ai.jpg",
      duration: "6 months",
      services: ["AI Analytics", "AI Customer Support", "Data Analytics"],
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Implementation",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Complex patient data analysis and treatment optimization",
      solution: "Advanced AI analytics platform for predictive healthcare insights",
      results: [
        "45% improvement in diagnosis accuracy",
        "30% reduction in treatment costs",
        "50% faster data processing",
        "25% increase in patient outcomes"
      ],
      duration: "8 months",
      services: ["AI Analytics", "Data Engineering", "Machine Learning"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 3,
      title: "Manufacturing Process Automation",
      company: "Industrial Corp",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and quality control issues",
      solution: "AI-driven process optimization and automated quality monitoring",
      results: [
        "55% increase in production efficiency",
        "70% reduction in defects",
        "40% decrease in downtime",
        "25% cost savings"
      ],
      duration: "10 months",
      services: ["AI Automation", "IoT Solutions", "Process Optimization"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "Financial Services Risk Management",
      company: "FinanceFirst",
      industry: "Financial Services",
      challenge: "Manual fraud detection and risk assessment processes",
      solution: "AI-powered fraud detection and real-time risk analysis",
      results: [
        "85% improvement in fraud detection",
        "60% reduction in false positives",
        "90% faster risk assessment",
        "50% decrease in financial losses"
      ],
      duration: "7 months",
      services: ["AI Fraud Detection", "Risk Analytics", "Cybersecurity"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 5,
      title: "Retail Customer Experience Enhancement",
      company: "RetailMax",
      industry: "Retail",
      challenge: "Personalized customer experience and inventory management",
      solution: "AI-driven personalization and demand forecasting",
      results: [
        "65% increase in customer engagement",
        "40% improvement in inventory turnover",
        "50% boost in average order value",
        "30% increase in customer retention"
      ],
      duration: "5 months",
      services: ["AI Marketing", "Recommendation Engine", "Data Analytics"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 6,
      title: "Logistics Optimization with 5G",
      company: "LogiTech",
      industry: "Logistics",
      challenge: "Real-time tracking and route optimization challenges",
      solution: "5G-enabled IoT network with AI-powered route optimization",
      results: [
        "45% reduction in delivery times",
        "35% decrease in fuel costs",
        "80% improvement in tracking accuracy",
        "25% increase in customer satisfaction"
      ],
      duration: "9 months",
      services: ["5G Solutions", "IoT Integration", "AI Analytics"],
      image: "/api/placeholder/600/400",
      featured: false
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Reduction", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "60%", label: "Average Efficiency Gain", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies. See how we've helped businesses transform with cutting-edge technology." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-cyan-400">Success Stories</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform with AI and IT solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-slate-300 mb-4">{study.company} - {study.industry}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-cyan-400">Challenge:</h4>
                    <p className="text-sm text-slate-300">{study.challenge}</p>
                    <h4 className="font-semibold text-cyan-400">Solution:</h4>
                    <p className="text-sm text-slate-300">{study.solution}</p>
                    <h4 className="font-semibold text-cyan-400">Results:</h4>
                    <ul className="text-sm text-slate-300 space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300 group hover:scale-105 inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}