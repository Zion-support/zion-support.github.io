import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Award, BarChart3, Bot, Brain, CheckCircle, Eye, MessageSquare, Shield, Zap } from "lucide-react";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";
export default function AIServices() {
  return (;
    <>;
      <Head>;
        <title>AI Services - Zion Tech Group</title>;
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and autonomous systems." />;
      </Head>;
      <Navigation  />;
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">;
        {/* comment */}

        <section className="py-20 px-4">;
          <div className="max-w-6xl mx-auto text-center">;
            <h1 className="text-5xl font-bold text-gray-900 mb-6">;
              AI-Powered Solutions;
            </h1>;
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">;
              Transform your business with cutting-edge artificial intelligence services. ;
              From machine learning to autonomous systems, we deliver intelligent solutions that drive growth.;
            </p>;
            <div className="flex justify-center space-x-4">;
              <Link href="/contact";
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">;
                Get Started;
                <ArrowRight className="w-5 h-5 ml-2"  />;
              </Link>;
              <Link href="/services";
                className="inline-flex items-center px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors">;
                View All Services;
              </Link>;
            </div>;
        </section>;