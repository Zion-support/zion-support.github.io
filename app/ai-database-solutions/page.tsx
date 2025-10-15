import { Helmet } from 'react-helmet-async';
import { CheckCircle, Database, Shield, Users, Zap } from 'lucide-react';

const AiDatabaseSolutionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Database Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered database solutions with advanced security, real-time analytics, and scalable architecture." />
        <meta name="keywords" content="AI database solutions, database security, real-time analytics, scalable architecture" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Database Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary AI-powered database solutions with advanced security, real-time analytics, and scalable architecture.
          </p>
        </div>
      </div>
    </div>
  );
};
