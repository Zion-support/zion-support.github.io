// import React from 'react';
import { Link } from 'react-router-dom';

const AIMegaTransformationSuccessBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full px-6 py-3 mb-8">
            <span className="text-2xl">🏆</span>
            <span className="text-lg font-bold">MEGA TRANSFORMATION SUCCESS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            $2.5 Billion in 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              {' '}AI Transformations
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join 500+ enterprises that have achieved unprecedented success with our AI transformation solutions. 
            See the results that are reshaping industries worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-8">Success Metrics</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-emerald-600">500+</div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">Enterprises Transformed</div>
                  <div className="text-gray-600">Across 25+ industries</div>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-teal-600">$2.5B</div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">Total Value Created</div>
                  <div className="text-gray-600">In cost savings and revenue</div>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-blue-600">95%</div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">Success Rate</div>
                  <div className="text-gray-600">Project completion rate</div>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-purple-600">300%</div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">Average ROI</div>
                  <div className="text-gray-600">Within 12 months</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Featured Success Story</h3>
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Global Manufacturing Corp</h4>
                    <p className="text-emerald-100">Fortune 500 Company</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">85%</div>
                    <div className="text-sm text-emerald-100">Process Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">$180M</div>
                    <div className="text-sm text-emerald-100">Annual Savings</div>
                  </div>
                </div>
                <p className="text-emerald-100 text-sm">
                  "Zion Tech Group transformed our entire manufacturing operation. 
                  We achieved 85% automation and saved $180M annually while improving quality by 40%."
                </p>
                <div className="text-right text-sm text-emerald-200 mt-2">
                  — CEO, Global Manufacturing Corp
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rapid Implementation</h3>
            <p className="text-gray-600 mb-6">
              Deploy AI solutions in 30-90 days with our proven implementation methodology 
              and expert team support.
            </p>
            <div className="text-3xl font-bold text-blue-600 mb-2">30-90 Days</div>
            <div className="text-sm text-gray-500">Implementation Time</div>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">🛡️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
            <p className="text-gray-600 mb-6">
              Bank-grade security with zero-trust architecture and compliance 
              with all major industry standards.
            </p>
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-sm text-gray-500">Security Compliance</div>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
            <p className="text-gray-600 mb-6">
              Round-the-clock expert support with guaranteed response times 
              and dedicated success managers.
            </p>
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-500">Expert Support</div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">Ready to Join the Success Stories?</h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Start your AI transformation journey today and become part of our growing 
              community of successful enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="bg-white text-emerald-600 px-10 py-5 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Your Transformation
              </Link>
              <Link to="/case-studies"
                className="border-2 border-white text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-white hover:text-emerald-600 transition-colors"
              >
                View All Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMegaTransformationSuccessBanner;