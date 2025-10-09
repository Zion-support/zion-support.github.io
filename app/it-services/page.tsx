import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure, cloud solutions, cybersecurity, and digital transformation." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive IT solutions for modern businesses
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;