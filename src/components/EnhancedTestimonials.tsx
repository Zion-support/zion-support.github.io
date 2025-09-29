import React from 'react';

const EnhancedTestimonials: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600">See how we've helped businesses transform with AI</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 mb-6">"Zion Tech Group's AI solutions increased our efficiency by 300%. Their expertise is unmatched."</p>
            <div>
              <div className="font-bold text-gray-900">Alex Chen</div>
              <div className="text-gray-500">CTO, TechCorp</div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 mb-6">"The AI automation they built for us saved us 40 hours per week. Incredible results!"</p>
            <div>
              <div className="font-bold text-gray-900">Maria Rodriguez</div>
              <div className="text-gray-500">Operations Director, InnovateLabs</div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 mb-6">"Professional, reliable, and innovative. Zion Tech Group delivered exactly what they promised."</p>
            <div>
              <div className="font-bold text-gray-900">David Kim</div>
              <div className="text-gray-500">Founder, StartupXYZ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTestimonials;