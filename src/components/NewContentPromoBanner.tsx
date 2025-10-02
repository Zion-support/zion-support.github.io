import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
=======
import React, { useState } from 'react';';
import { CheckCircle } from 'lucide-react';';

const NewContentPromoBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const features = [
    {
      icon: <TrendingUp className="w-5 h-5/>,",
      text: "AI-Powered Analytics"
    },
    {
      icon: <Users className="w-5 h-5/>,",
      text: "Team Collaboration"
    },
    {
      icon: <Zap className="w-5 h-5/>,",
      text: "Lightning Fast"
    },
    {
      icon: <Star className="w-5 h-5/>,",
=======
      icon: <TrendingUp className="w-5 h-5" />,";
      text: "AI-Powered Analytics"
    },
    {
      icon: <Users className="w-5 h-5" />,";
      text: "Team Collaboration"
    },
    {
      icon: <Zap className="w-5 h-5" />,";
      text: "Lightning Fast"
    },
    {
      icon: <Star className="w-5 h-5" />,";
      text: "Premium Quality"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-8 px-4 relative overflow-hidden">";
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">";
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>";
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse/>
              <span className="bg-yellow-300 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
=======
      <div className="max-w-7xl mx-auto relative z-10">";
        <div className="flex items-center justify-between">";
          <div className="flex-1">";
            <div className="flex items-center gap-3 mb-4">";
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />";
              <span className="bg-yellow-300 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">";
                NEW CONTENT AVAILABLE
              </span>
            </div>
            
            <h2 className="text-3xl md: text-4xl font-bold mb-4">"
=======
            <h2 className="text-3xl md: text-4xl font-bold mb-4">";
              Revolutionary AI Breakthroughs 2026
            </h2>
            
            <p className="text-lg text-blue-100 mb-6 max-w-2xl">";
              Discover the latest AI innovations that are transforming industries worldwide. 
              Get exclusive access to cutting-edge research and implementation guides.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">";
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-blue-100">
                  <CheckCircle className="w-4 h-4 text-green-300/>
                  <span className="text-sm">{feature.text}</span>
=======
                <div key={index} className="flex items-center gap-2 text-blue-100">";
                  <CheckCircle className="w-4 h-4 text-green-300" />";
                  <span className="text-sm">{feature.text}</span>";
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm: flex-row gap-4">"
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover: bg-blue-50 transition-colors flex items-center gap-2">"
                Explore Content
                <ArrowRight className="w-4 h-4/>
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover: bg-white hover:text-blue-600 transition-colors">"
=======
            <div className="flex flex-col sm: flex-row gap-4">";
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover: bg-blue-50 transition-colors flex items-center gap-2">";
                Explore Content
                <ArrowRight className="w-4 h-4" />";
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover: bg-white hover:text-blue-600 transition-colors">";
                Learn More
              </button>
            </div>
          </div>
          
          <div className="hidden lg: block ml-8">"
            <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2026</div>
                <div className="text-lg text-blue-100">AI Revolution</div>
=======
          <div className="hidden lg: block ml-8">";
            <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">";
              <div className="text-center">";
                <div className="text-4xl font-bold mb-2">2026</div>";
                <div className="text-lg text-blue-100">AI Revolution</div>";
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/70 hover: text-white transition-colors"
        aria-label="Close banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12/>
=======
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">";
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />";
        </svg>
      </button>
    </div>
  );
};

export default React.memo(NewContentPromoBanner);