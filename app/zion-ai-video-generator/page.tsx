import { Link } from 'react-router-dom';
import { ArrowRight, Video, Play, Edit, Settings, Sparkles, CheckCircle, Star, Users, Brain, Mic, Palette, Share, Mail, Smartphone, Globe, Cloud, BarChart3, Target, Headphones, Layout } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ZionAIVideoGeneratorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Video Generator - Zion Tech Group</title>
        <meta name="description" content="Advanced AI video generation platform with cutting-edge technology." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Zion AI Video Generator
        </h1>
        <p className="text-xl text-gray-300 text-center">
          Coming Soon - Advanced AI video generation platform
        </p>
      </div>
    </div>
  );
};

export default ZionAIVideoGeneratorPage;
