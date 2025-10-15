import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import {Zap, Users, FileText, Shield, Bug} from 'lucide-react';

const features = [
    {
      title: "Intelligent Code Review",
      description: "Automated code review with security analysis, performance optimization suggestions, and best practice recommendations.",
      icon: <Shield className="w-6 h-6" />,
      stats: "99.5% accuracy"
    },
    {
      title: "Bug Detection & Fixing",
      description: "Automatically detect bugs, vulnerabilities, and code issues with intelligent suggestions for fixes and improvements.",
      icon: <Bug className="w-6 h-6" />,
      stats: "90% bug detection"
    },
    {
      title: "Code Documentation",
      description: "Generate comprehensive documentation, comments, and API docs automatically from your codebase.",
      icon: <FileText className="w-6 h-6" />,
      stats: "Auto-generated docs"
    }
  ];

const AICodeAssistantPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="AI Code Assistant - Zion Tech Group"
        description="Revolutionary AI-powered code assistant that helps developers write better code, detect bugs, and generate documentation automatically."
        keywords="AI code assistant, code review, bug detection, code documentation, AI programming"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Code Assistant
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your intelligent coding companion that helps you write better code, detect bugs, and generate documentation automatically.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FuturisticCard key={index} className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="text-purple-400 font-semibold">{feature.stats}</div>
            </FuturisticCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AICodeAssistantPage;
