import { ArrowRight, Users, Target, Award, Globe } from 'lucide-react';
import Link from 'next/link';
import React from 'react';


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We are a leading technology company specializing in AI solutions, cloud infrastructure, and innovative micro SAAS platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-lg p-6 border border-zion-slate">
              <Users className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
              <p className="text-zion-slate-light">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation and growth.
              </p>
            </div>
            <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-lg p-6 border border-zion-slate">
              <Target className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
              <p className="text-zion-slate-light">
                To be the global leader in AI-powered business solutions and digital transformation.
              </p>
            </div>
            <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-lg p-6 border border-zion-slate">
              <Award className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Our Values</h3>
              <p className="text-zion-slate-light">
                Innovation, excellence, integrity, and customer success are at the core of everything we do.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold"
            >
              Get in Touch <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}