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
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Zion Tech Group
          </h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto animate-fade-in-up">
            Leading the future of technology with innovative solutions, 
            cutting-edge AI, and transformative digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
            <Link 
              href="/services" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Our Services
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">AI Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="AI & Machine Learning"
              description="Advanced AI solutions and machine learning platforms for modern businesses"
              href="/services/ai-analytics-platform"
              icon="🤖"
              features={["Predictive Analytics", "Natural Language Processing", "Computer Vision"]}
            />
            <Card
              title="Cloud Infrastructure"
              description="Scalable cloud solutions and infrastructure management"
              href="/services/cloud-services"
              icon="☁️"
              features={["AWS/Azure/GCP", "DevOps Automation", "Security & Compliance"]}
            />
            <Card
              title="Data Analytics"
              description="Comprehensive data analysis and business intelligence"
              href="/services/ai-analytics-dashboard"
              icon="📊"
              features={["Real-time Dashboards", "Data Visualization", "Business Intelligence"]}
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-12">Why Choose Zion Tech?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<CpuChipIcon className="w-8 h-8 text-purple-400" />}
              title="Innovation First"
              description="We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage."
            />
            <FeatureCard
              icon={<ShieldCheckIcon className="w-8 h-8 text-purple-400" />}
              title="Expert Team"
              description="Our team of certified experts brings years of experience in technology and industry best practices."
            />
            <FeatureCard
              icon={<RocketLaunchIcon className="w-8 h-8 text-purple-400" />}
              title="24/7 Support"
              description="Round-the-clock support and monitoring to ensure your systems run smoothly and efficiently."
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative technology solutions can help your business grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link 
              href="/research" 
              className="border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, description, href, icon, features }: { 
  title: string; 
  description: string; 
  href: string; 
  icon: string;
  features?: string[];
}) {
  return (
    <Link href={href} className="group">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
        <div className="text-5xl mb-6">{icon}</div>
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        {features && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-purple-300 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}
