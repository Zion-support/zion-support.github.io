import React from 'react';
import Link from 'next/link';
import { 
  ChartBarIcon, 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon,
  RocketLaunchIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading the future of technology with innovative solutions, 
            cutting-edge AI, and transformative digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card
            title="AI & Machine Learning"
            description="Advanced AI solutions and machine learning platforms"
            href="/services/ai-analytics-platform"
            icon="🤖"
          />
          <Card
            title="Cloud Infrastructure"
            description="Scalable cloud solutions and infrastructure management"
            href="/services/cloud-infrastructure"
            icon="☁️"
          />
          <Card
            title="Data Analytics"
            description="Comprehensive data analysis and business intelligence"
            href="/services/ai-analytics-dashboard"
            icon="📊"
          />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Zion Tech?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Innovation First"
              description="We stay ahead of technology trends to deliver cutting-edge solutions"
            />
            <FeatureCard
              title="Expert Team"
              description="Our team of experts brings years of experience in technology"
            />
            <FeatureCard
              title="24/7 Support"
              description="Round-the-clock support to ensure your success"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, description, href, icon }: { title: string; description: string; href: string; icon: string }) {
  return (
    <Link href={href} className="group">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </Link>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
