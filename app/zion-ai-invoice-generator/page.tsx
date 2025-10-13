import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Download, Settings, Sparkles, CheckCircle, Star, Users, Brain, Mail, Smartphone, Globe, Database, BarChart3, Target, Headphones, Layout, CreditCard, Calculator, Play } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ZionAIInvoiceGeneratorPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              ZionAIInvoiceGenerator
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            This page is under construction. Please check back soon for updates.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ZionAIInvoiceGeneratorPage;