import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI-powered solutions,
            micro SaaS platforms, and comprehensive IT services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To empower businesses with cutting-edge technology solutions that drive
              innovation, efficiency, and growth. We believe in the transformative
              power of AI and modern software architecture.
            </p>
            <p className="text-gray-300">
              Our team of expert engineers, data scientists, and business strategists
              work together to deliver solutions that not only meet today's needs but
              anticipate tomorrow's challenges.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• 10+ years of industry experience</li>
              <li>• 500+ successful projects</li>
              <li>• 99.9% uptime guarantee</li>
              <li>• 24/7 customer support</li>
              <li>• Enterprise-grade security</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;