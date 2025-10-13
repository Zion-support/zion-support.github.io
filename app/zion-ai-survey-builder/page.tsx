import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, BarChart3, Users, Share2 } from 'lucide-react';

export default function ZionAiSurveyBuilderPage() {
  const features = [
    {
      title: "Easy Survey Creation",
      description: "Create professional surveys with our intuitive drag-and-drop builder",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Advanced Analytics",
      description: "Get detailed insights and analytics from your survey responses",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Audience Targeting",
      description: "Target specific audiences and demographics for better response rates",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Multi-Channel Distribution",
      description: "Share surveys across multiple channels and platforms",
      icon: <Share2 className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Survey Builder - Zion Tech Group</title>
        <meta name="description" content="Create powerful surveys with AI-powered insights and analytics." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Zion AI Survey Builder
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create powerful surveys with AI-powered insights and advanced analytics for better decision making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}