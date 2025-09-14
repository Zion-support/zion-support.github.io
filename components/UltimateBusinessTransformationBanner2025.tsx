"use client";
import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessTransformationBanner2025: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [animatedStatsetAnimatedStats] = useState({
    revenue: 0,
    efficiency: 0,
    costReduction: 0
  });

  const targetStats = {
    revenue: 300,
    efficiency: 95,
    costReduction: 75
  };

  useEffect(() => {
    setIsVisible(true);
    
    // Animate statistics
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setAnimatedStats({
          revenue: Math.round(targetStats.revenue * progress),
          efficiency: Math.round(targetStats.efficiency * progress),
          costReduction: Math.round(targetStats.costReduction * progress)
        });
        
        if (step >= steps) {
          clearInterval(timer);
        }
      }stepDuration);
    };
    
    setTimeout(animateStats500);
  }[]);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-lg font-medium mb-8">
            <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            Transform Your Business Today
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ultimate Business
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Transformation 2025
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join thousands of forward-thinking companies leveraging our cutting-edge solutions 
            to achieve unprecedented growthefficiencyand competitive advantage.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-5xl font-bold text-emerald-400 mb-2">
              +{animatedStats.revenue}%
            </div>
            <div className="text-white text-xl font-semibold mb-2">Revenue Growth</div>
            <div className="text-gray-300">Average increase in first year</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-5xl font-bold text-teal-400 mb-2">
              {animatedStats.efficiency}%
            </div>
            <div className="text-white text-xl font-semibold mb-2">Efficiency Gain</div>
            <div className="text-gray-300">Operational productivity boost</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-5xl font-bold text-cyan-400 mb-2">
              -{animatedStats.costReduction}%
            </div>
            <div className="text-white text-xl font-semibold mb-2">Cost Reduction</div>
            <div className="text-gray-300">Operational expenses savings</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Choose Our Transformation Solutions?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Rapid Implementation</h3>
                  <p className="text-gray-300">Get up and running in weeksnot monthswith our proven deployment methodology.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🔒</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                  <p className="text-gray-300">Bank-grade security with compliance certifications and advanced threat protection.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📈</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Scalable Growth</h3>
                  <p className="text-gray-300">Built to scale with your businessfrom startup to enterprise level.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-6">💼</div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Success Stories
                </h3>
                <p className="text-emerald-100 mb-6">
                  See how companies like yours achieved remarkable results
                </p>
                
                {/* Mini testimonials */}
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-white font-semibold">"Revenue increased 340% in 6 months"</div>
                    <div className="text-emerald-200 text-sm">- TechCorp CEO</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-white font-semibold">"Reduced costs by $2M annually"</div>
                    <div className="text-emerald-200 text-sm">- Global Manufacturing</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-white font-semibold">"99.8% operational efficiency"</div>
                    <div className="text-emerald-200 text-sm">- Fortune 500 Company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the ranks of industry leaders who have revolutionized their operations 
              with our cutting-edge solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/business-transformation"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Transformation
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-emerald-900 transition-all duration-300"
              >
                Free Consultation
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
            
            <div className="mt-8 text-gray-400">
              <p>✓ No setup fees • ✓ 30-day money-back guarantee • ✓ 24/7 expert support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessTransformationBanner2025;