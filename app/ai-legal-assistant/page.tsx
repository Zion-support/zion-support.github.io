"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Scale, FileText, Search, Shield, Users, Zap } from "lucide-react";

const AiLegalAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Scale,
      title: "Legal Research",
      description: "AI-powered legal research with case law analysis and precedent identification."
    },
    {
      icon: FileText,
      title: "Document Analysis",
      description: "Intelligent document analysis for contract review, legal briefs, and case preparation."
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Advanced search capabilities across legal databases and case files."
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Automated compliance monitoring and regulatory change tracking."
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Comprehensive client management with case tracking and communication tools."
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Automated legal workflows for document generation and case management."
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Legal Assistant - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="AI-powered legal assistant with research capabilities, document analysis, and compliance monitoring for legal professionals." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Legal Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intelligent legal assistance powered by AI. 
              Legal research, document analysis, and compliance monitoring for legal professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Legal Assistant Features
              </h2>
              <p className="text-lg text-gray-300">
                Advanced AI legal assistance capabilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Enhance Your Legal Practice?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Implement our AI legal assistant to streamline your legal workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/about"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AiLegalAssistantPage;