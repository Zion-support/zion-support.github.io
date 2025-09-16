
import React from "react";
import { SEO } from "@/components/SEO";
import { useWhitelabel } from "@/context/WhitelabelContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

  return (
    <>
      <SEO 
        title="Zion Hire AI - White-labeled AI Recruiting Assistant" 
        description="Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience."
        keywords="AI hiring, AI recruiting, talent acquisition, AI assistant, Zion Hire AI"
        canonical="https://ziontechgroup.com/zion-hire-ai"
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Hire AI
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Revolutionary AI-powered hiring platform that transforms recruitment, screening, onboarding, and retention
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://ziontechgroup.com"
                className="px-8 py-4 bg-zion-cyan hover:bg-zion-cyan-light text-white font-semibold rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
              </a>
              <a 
                href="#demo"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold rounded-lg transition-colors"
              >
                Watch Demo
              </a>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                  {item.metric}
                </div>
                <div className="text-zion-slate-light">
                  {item.label}
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute -top-8 -left-8 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl"></div>
                <img loading="lazy"
                  src="https://placehold.co/600x400/192134/9b87f5?text=Zion+Hire+AI"
                  alt="Zion Hire AI Dashboard"
                  className="relative z-10 rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-zion-slate-light text-center mb-6">
              Join hundreds of companies already using Zion Hire AI to revolutionize their recruitment
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan hover:bg-zion-cyan-light text-white font-semibold rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Free Trial Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionHireAI;
import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function ZionHireAI() {
  return (
    <>
      <SEO
        title="Zion Hire AI - Zion Tech Group"
        description="AI-powered hiring platform for finding the perfect tech talent."
        canonical="https://ziontechgroup.com/zion-hire-ai"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>Zion Hire AI</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Revolutionize your hiring process with our AI-powered talent matching platform.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Zion Hire AI is currently under development and will revolutionize how you find and hire tech talent.
              </p>
            </div>
          </div>
        </div>
      </main>
      
    </>
  );
}
