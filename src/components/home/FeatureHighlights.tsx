<<<<<<< HEAD

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureHighlightsProps extends React.HTMLAttributes<HTMLElement> {}

export function FeatureHighlights({ className, style, ...props }: FeatureHighlightsProps) {
  const highlightsData = [
=======
import React from 'react';
import { Brain, Shield, Zap, Globe, Users, Target, CheckCircle, ArrowRight } from 'lucide-react';

export const FeatureHighlights: React.FC = () => {
  const features = [
>>>>>>> origin/main
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence and machine learning solutions that transform business operations and drive innovation.",
      benefits: ["Predictive analytics", "Automated processes", "Intelligent decision making", "Scalable AI infrastructure"]
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Comprehensive cybersecurity solutions with AI-powered threat detection and proactive defense mechanisms.",
      benefits: ["Real-time monitoring", "Threat prevention", "Compliance management", "Incident response"]
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized systems and infrastructure designed for maximum performance, scalability, and reliability.",
      benefits: ["Fast response times", "Scalable architecture", "99.9% uptime", "Performance optimization"]
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide presence with local expertise and 24/7 support across multiple time zones and regions.",
      benefits: ["Global support", "Local expertise", "Multi-language", "Cultural understanding"]
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with deep expertise in cutting-edge technologies and industry best practices.",
      benefits: ["Certified experts", "Industry veterans", "Continuous training", "Innovation focus"]
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focus on delivering measurable business outcomes and ROI through technology solutions and strategic consulting.",
      benefits: ["ROI measurement", "Business impact", "Performance tracking", "Success metrics"]
    }
  ];

  return (
<<<<<<< HEAD
    <section
      className={cn("py-16 bg-zion-blue", className)}
      style={style}
      {...props}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Tailored Solutions for Everyone</h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed
=======
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the key features and capabilities that make us the preferred 
            technology partner for businesses worldwide.
>>>>>>> origin/main
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-center">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience These Features?
            </h3>
            <p className="text-gray-300 mb-6">
              Join hundreds of businesses that have already transformed their operations 
              with Zion Tech Group's innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              <a
                href="/case-studies"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
