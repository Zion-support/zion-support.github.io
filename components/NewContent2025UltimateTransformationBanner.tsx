import React from 'react';
import Link from 'next/link';
ArrowRightStarZapTrendingUpUsersShield

export default function NewContent2025UltimateTransformationBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium mb-6">
            <Star className="h-4 w-4 mr-2" />
            NEW: Ultimate AI Transformation Content
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Discover the Future of
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}AI Business Transformation
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our latest content showcasing cutting-edge AI solutionsenterprise automation mastery
            and revolutionary business transformation strategies that are reshaping industries worldwide.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "AI 2025: Ultimate Business Transformation",
              description: "Revolutionize your business with cutting-edge AI solutions that deliver unprecedented results and proven ROI.",
              link: "/ai-2025-ultimate-business-transformation",
              icon: <TrendingUp className="h-8 w-8 text-blue-400" />,
              features: ["300% Average ROI"99.7% Accuracy"Lightning Fast Processing"]
            },
            {
              title: "AI 2025: Enterprise Automation Mastery",
              description: "Transform enterprise operations with comprehensive AI automation platform built for scale and security.",
              link: "/ai-2025-enterprise-automation-mastery",
              icon: <Zap className="h-8 w-8 text-cyan-400" />,
              features: ["500+ Enterprise Clients"99.9% Uptime"24/7 Support"]
            },
            {
              title: "AI 2025: Ultimate Breakthrough Solutions",
              description: "Explore revolutionary AI technologies and breakthrough innovations that are changing the world.",
              link: "/ai-2025-ultimate-breakthrough",
              icon: <Star className="h-8 w-8 text-purple-400" />,
              features: ["Revolutionary Tech"Future Predictions"Industry Insights"]
            }
          ].map((contentindex) => (
            <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white/10 rounded-lg mr-4 group-hover:bg-white/20 transition-colors">
                  {content.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {content.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-4">{content.description}</p>
              <div className="space-y-2 mb-6">
                {content.features.map((featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              <Link 
                href={content.link}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
              >
                Explore Content
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <Users className="h-6 w-6 text-green-400" />text: "Expert Team" },
            { icon: <Shield className="h-6 w-6 text-yellow-400" />text: "Enterprise Security" },
            { icon: <TrendingUp className="h-6 w-6 text-red-400" />text: "Proven Results" },
            { icon: <Star className="h-6 w-6 text-purple-400" />text: "Industry Leading" }
          ].map((featureindex) => (
            <div key={index} className="flex items-center justify-center space-x-2 text-gray-300">
              {feature.icon}
              <span className="font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already using our AI solutions to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/ai-2025-ultimate-breakthrough" 
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
