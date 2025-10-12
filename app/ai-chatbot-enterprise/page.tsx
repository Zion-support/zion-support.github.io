import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Brain, Users, Zap, BarChart, MessageCircle, Globe, Clock } from 'lucide-react';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AiChatbotEnterprisePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Chatbot Enterprise - Zion Tech Group</title>
        <meta name="description" content="Enterprise AI chatbot solutions by Zion Tech Group. Professional AI and IT solutions for large organizations." />
        <meta name="keywords" content="ai-chatbot-enterprise, AI solutions, IT services, enterprise chatbot" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Chatbot Enterprise
