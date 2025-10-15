import { Helmet } from "react-helmet-async";
import { ArrowRight, Brain, Camera, CheckCircle, Mail, MessageCircle, Phone, Play, Star } from 'lucide-react';

const AISocialMediaManagerProPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Social Media Manager Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered social media management with intelligent content creation and automated posting." />
        <meta name="keywords" content="AI social media manager, social media automation, content creation, social media marketing" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Social Media Manager Pro
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary AI-powered social media management with intelligent content creation and automated posting.
          </p>
        </div>
      </div>
    </div>
  );
};
