import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Zap, Globe } from 'lucide-react';

const NewContentPromotionBanner2025 = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              New Content Available
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionary Content
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Just Released
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover our latest breakthrough insights, AI solutions, and cutting-edge technologies that are transforming businesses worldwide. Get exclusive access to expert analysis, case studies, and implementation guides.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">50+</div>
                <div className="text-sm text-blue-200">New Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">100K+</div>
                <div className="text-sm text-blue-200">Readers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">95%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">24/7</div>
                <div className="text-sm text-blue-200">Updates</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/content-hub"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors group"
              >
                Explore Content
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/newsletter"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Subscribe Now
              </Link>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-yellow-300 mr-3" />
                <h3 className="text-lg font-semibold text-white">AI Solutions</h3>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                Cutting-edge AI automation and machine learning solutions for modern businesses.
              </p>
              <div className="text-yellow-300 text-sm font-medium">15+ New Articles</div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-green-300 mr-3" />
                <h3 className="text-lg font-semibold text-white">Global Impact</h3>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                Real-world case studies and success stories from around the world.
              </p>
              <div className="text-green-300 text-sm font-medium">25+ Case Studies</div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-purple-300 mr-3" />
                <h3 className="text-lg font-semibold text-white">Future Tech</h3>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                Insights into emerging technologies and future predictions.
              </p>
              <div className="text-purple-300 text-sm font-medium">10+ Predictions</div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-orange-300 mr-3" />
                <h3 className="text-lg font-semibold text-white">Community</h3>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                Join our community of innovators and thought leaders.
              </p>
              <div className="text-orange-300 text-sm font-medium">50K+ Members</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default NewContentPromotionBanner2025;