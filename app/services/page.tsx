import React from 'react';
import {
  LightBulbIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions',
  description: 'Comprehensive technology services including AI solutions, micro SaaS development, FinTech platforms, HealthTech innovations, and EdTech solutions. Transform your business with cutting-edge technology.',
  keywords: 'AI services, micro SaaS, FinTech, HealthTech, EdTech, technology solutions, software development, digital transformation'
};

const services = [
  {
    name: 'AI Solutions',
    description: 'Custom AI models, automation, and intelligent systems that transform your business operations. From machine learning to natural language processing, we build AI that delivers real value.',
    icon: LightBulbIcon,
    color: 'blue',
    href: '/services/ai-services',
    features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  },
  {
    name: 'Micro SaaS',
    description: 'Scalable, focused software solutions that solve specific business problems. Our micro SaaS products are designed for rapid deployment and maximum impact.',
    icon: CpuChipIcon,
    color: 'green',
    href: '/services/micro-saas',
    features: ['Rapid Development', 'Scalable Architecture', 'User-Centric Design', 'Cost-Effective Solutions']
  },
  {
    name: 'FinTech Solutions',
    description: 'Secure, compliant financial technology solutions that power modern banking, payments, and investment platforms. Built with enterprise-grade security and regulatory compliance.',
    icon: ChartBarIcon,
    color: 'purple',
    href: '/services/fintech',
    features: ['Payment Processing', 'Risk Management', 'Regulatory Compliance', 'Real-time Analytics']
  },
  {
    name: 'HealthTech Innovation',
    description: 'Healthcare technology solutions that improve patient outcomes and streamline medical operations. From telemedicine to health data analytics.',
    icon: ShieldCheckIcon,
    color: 'red',
    href: '/services/healthtech',
    features: ['Telemedicine Platforms', 'Health Data Analytics', 'Patient Management', 'HIPAA Compliance']
  },
  {
    name: 'EdTech Platforms',
    description: 'Educational technology solutions that enhance learning experiences and streamline educational administration. From LMS to interactive learning tools.',
    icon: UserGroupIcon,
    color: 'indigo',
    href: '/services/edtech',
    features: ['Learning Management Systems', 'Interactive Content', 'Student Analytics', 'Assessment Tools']
  },
  {
    name: 'IT Services',
    description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, and infrastructure management. We keep your technology running smoothly.',
    icon: GlobeAltIcon,
    color: 'teal',
    href: '/services/it-services',
    features: ['Cloud Migration', 'DevOps & SRE', 'Cybersecurity', 'Infrastructure Management']
  }
];

const stats = [
  { label: 'Projects Completed', value: '500+' },
  { label: 'Happy Clients', value: '200+' },
  { label: 'Years Experience', value: '10+' },
  { label: 'Team Members', value: '50+' }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'Zion Tech Group transformed our entire technology stack. Their AI solutions increased our efficiency by 300%.',
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, StartupXYZ',
    content: 'The micro SaaS platform they built for us was exactly what we needed. Fast, reliable, and perfectly tailored to our business.',
    avatar: 'MC'
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Medical Director, HealthPlus',
    content: 'Their HealthTech solutions revolutionized our patient care. The telemedicine platform is intuitive and secure.',
    avatar: 'ER'
  }
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    red: 'from-red-500 to-red-600',
    indigo: 'from-indigo-500 to-indigo-600',
    teal: 'from-teal-500 to-teal-600'
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-8">
        <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[service.color]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
          {service.name}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        <div className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>
        
        <Link 
          href={service.href}
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-300"
        >
          Learn More
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-blue-600 font-semibold">{testimonial.avatar}</span>
        </div>
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.role}</div>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial.content}"</p>
    </div>
  );
}

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge technology solutions. From AI-powered micro SaaS to enterprise FinTech platforms, we deliver innovation that drives results.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in delivering end-to-end technology solutions across multiple industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project's success from concept to deployment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We understand your business needs and technical requirements' },
              { step: '02', title: 'Strategy', description: 'We develop a comprehensive plan tailored to your goals' },
              { step: '03', title: 'Development', description: 'We build your solution using cutting-edge technologies' },
              { step: '04', title: 'Deployment', description: 'We launch and maintain your solution for optimal performance' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our technology solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}