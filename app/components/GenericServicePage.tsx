import { ArrowRight, CheckCircle, Star, ImageIcon, Upload, Zap, Download, Clock, X, Circle } from 'lucide-react';
import Link from 'next/link';
&apos;use client&apos;;
import React from &apos;react&apos;;

import Link from &apos;next/link&apos;;
import { ArrowRight } from &apos;lucide-react&apos;;
import { CheckCircle } from &apos;lucide-react&apos;;
import { Star } from &apos;lucide-react&apos;;

interface GenericServicePageProps {
  title: string;
  description: string;
  features?: string[];
  benefits?: string[];
  pricing?: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  className?: string;
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({
  title,
  description,
  features = [],
  benefits = [],
  pricing,
  className = &apos;&apos;
}) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 ${className}`}></div>
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
        {/* Hero Section */}
        <div className=&quot;text-center mb-16&quot;></div>
          <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 leading-tight&quot;>
            {title}
          </h1>
          <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
            {description}
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <Link
              href=&quot;/contact&quot;
              className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit&quot;
            >
              Contact Us
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Link>
            <button className=&quot;border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300&quot;>
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        {features.length > 0 && (
          <div className=&quot;mb-16&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Key Features</h2>
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-6&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300&quot;></div>
                  <CheckCircle className=&quot;w-8 h-8 text-cyan-400 mb-4&quot; />
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Benefits Section */}
        {benefits.length > 0 && (
          <div className=&quot;mb-16&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Benefits</h2>
            <div className=&quot;grid md:grid-cols-2 gap-6&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-3&quot;></div>
                  <Star className=&quot;w-6 h-6 text-cyan-400 mt-1 flex-shrink-0&quot; />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Section */}
        {pricing && (
          <div className=&quot;mb-16&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Pricing</h2>
            <div className=&quot;grid md:grid-cols-3 gap-8&quot;></div>
              <div className=&quot;bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center&quot;></div>
                <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Basic</h3>
                <div className=&quot;text-4xl font-bold text-cyan-400 mb-6&quot;>${pricing.basic}</div>
                <p className=&quot;text-gray-300 mb-6&quot;>Perfect for small businesses</p>
                <button className=&quot;w-full bg-slate-700 text-white py-3 rounded-lg hover:bg-slate-600 transition-colors&quot;>
                  Get Started
                </button>
              </div>
              <div className=&quot;bg-slate-800/50 backdrop-blur-sm border border-cyan-400 rounded-xl p-8 text-center relative&quot;></div>
                <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold&quot;></div>
                  Most Popular
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Pro</h3>
                <div className=&quot;text-4xl font-bold text-cyan-400 mb-6&quot;>${pricing.pro}</div>
                <p className=&quot;text-gray-300 mb-6&quot;>Ideal for growing companies</p>
                <button className=&quot;w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition-colors&quot;>
                  Get Started
                </button>
              </div>
              <div className=&quot;bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center&quot;></div>
                <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Enterprise</h3>
                <div className=&quot;text-4xl font-bold text-cyan-400 mb-6&quot;>${pricing.enterprise}</div>
                <p className=&quot;text-gray-300 mb-6&quot;>For large organizations</p>
                <button className=&quot;w-full bg-slate-700 text-white py-3 rounded-lg hover:bg-slate-600 transition-colors&quot;>
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenericServicePage;