import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, TrendingUp } from 'lucide-react';

const NewContentPromotionBanner2027: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            NEW CONTENT ALERT
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Revolutionary New Content Just Dropped! 🚀
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover cutting-edge AI innovations, advanced tech solutions, and breakthrough insights 
            that will transform your understanding of tomorrow's technology landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* AI Innovation Hub 2027 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">AI Innovation Hub 2027</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Explore the future of artificial intelligence with breakthrough technologies and revolutionary solutions.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-400 text-sm font-semibold">NEW RELEASE</span>
              <Link 
                to="/ai-innovation-hub-2027" 
                className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-semibold"
              >
                Explore Now <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Advanced Tech Solutions 2027 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Advanced Tech Solutions 2027</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Cutting-edge technology solutions designed to accelerate your digital transformation journey.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-400 text-sm font-semibold">HOT TOPIC</span>
              <Link 
                to="/advanced-tech-solutions-2027" 
                className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-semibold"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Star className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">More Content Coming Soon</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Stay tuned for more revolutionary content, case studies, and industry insights.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-yellow-400 text-sm font-semibold">COMING SOON</span>
              <Link 
                to="/newsletter" 
                className="text-green-400 hover:text-green-300 flex items-center text-sm font-semibold"
              >
                Get Notified <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't Miss Out on the Latest Innovations!
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who are already leveraging our cutting-edge content 
              to stay ahead of the technology curve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/ai-innovation-hub-2027" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                Explore All Content <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/newsletter" 
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2027;