export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description:
    'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords: [
    'AI',
    'Technology',
    'Cloud',
    'Cybersecurity',
    'Micro SaaS',
    'Consulting',
  ],
};

import PerformanceMetrics from './components/PerformanceMetrics';
import ROICalculator from './components/ROICalculator';
import ServiceCard from './components/ServiceCard';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import {
  SparklesIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  ServerIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Advanced AI and <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technology Solutions</span>
          </h1>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Transform your business with cutting-edge AI, cloud infrastructure,
            cybersecurity solutions, and autonomous systems that drive
            unprecedented growth and efficiency.
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-8 mb-16'>
          <div className='bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl'>
            <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
              Performance Metrics
            </h2>
            <PerformanceMetrics />
          </div>
          <div className='bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl'>
            <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
              ROI Calculator
            </h2>
            <ROICalculator />
          </div>
        </div>
        <div className='text-center'>
          <h2 className='text-3xl font-bold mb-8 text-gray-900 dark:text-white'>
            Our Services
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <ServiceCard
              icon={<SparklesIcon className="h-8 w-8 text-white" />}
              title="AI Solutions"
              description="Custom AI implementations, machine learning models, and intelligent automation systems that transform your business operations."
              color="bg-gradient-to-r from-blue-500 to-blue-600"
              features={[
                "Machine Learning Models",
                "Natural Language Processing",
                "Computer Vision",
                "Predictive Analytics"
              ]}
            />
            <ServiceCard
              icon={<CloudIcon className="h-8 w-8 text-white" />}
              title="Cloud Infrastructure"
              description="Scalable cloud solutions, DevOps automation, and infrastructure optimization for maximum performance and reliability."
              color="bg-gradient-to-r from-green-500 to-green-600"
              features={[
                "AWS/Azure/GCP Migration",
                "Container Orchestration",
                "Auto-scaling Solutions",
                "24/7 Monitoring"
              ]}
            />
            <ServiceCard
              icon={<ShieldCheckIcon className="h-8 w-8 text-white" />}
              title="Cybersecurity"
              description="Advanced security frameworks, threat detection, and compliance solutions to protect your digital assets."
              color="bg-gradient-to-r from-purple-500 to-purple-600"
              features={[
                "Zero Trust Architecture",
                "Threat Detection & Response",
                "Compliance Auditing",
                "Security Training"
              ]}
            />
            <ServiceCard
              icon={<CpuChipIcon className="h-8 w-8 text-white" />}
              title="Quantum Computing"
              description="Next-generation quantum computing solutions for complex optimization and cryptographic applications."
              color="bg-gradient-to-r from-indigo-500 to-indigo-600"
              features={[
                "Quantum Algorithms",
                "Quantum Cryptography",
                "Optimization Problems",
                "Research & Development"
              ]}
            />
            <ServiceCard
              icon={<ServerIcon className="h-8 w-8 text-white" />}
              title="Micro SaaS Solutions"
              description="Custom micro SaaS applications and platforms designed to solve specific business challenges efficiently."
              color="bg-gradient-to-r from-orange-500 to-orange-600"
              features={[
                "Rapid Development",
                "Scalable Architecture",
                "API Integration",
                "User Management"
              ]}
            />
            <ServiceCard
              icon={<ChartBarIcon className="h-8 w-8 text-white" />}
              title="Data Analytics"
              description="Advanced data analytics and business intelligence solutions to drive informed decision-making."
              color="bg-gradient-to-r from-teal-500 to-teal-600"
              features={[
                "Real-time Dashboards",
                "Predictive Modeling",
                "Data Visualization",
                "Business Intelligence"
              ]}
            />
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
    </main>
  );
}
