import React from 'react';
import Link from 'next/link';
import { TrendingUp, Users, Clock, DollarSign, ArrowRight, CheckCircle, Star } from 'lucide-react';

export const metadata = {
  title: 'Case Studies - Zion Tech Group | Real Success Stories & Results',
  description: 'Explore real-world success stories and measurable results from our AI, quantum computing, and technology transformation projects for Fortune 500 companies.',
  keywords: 'case studies, success stories, AI transformation, ROI, business results, technology implementation',
};

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    roi: string;
    costReduction: string;
    efficiencyGain: string;
    timeline: string;
  };
  featured: boolean;
  url: string;
  image: string;
  tags: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 'ai-transformation-success',
    title: 'Fortune 500 AI Transformation',
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    challenge: 'High operational costs, manual quality control, and inefficient supply chain management',
    solution: 'AI-powered predictive analytics, computer vision quality control, and smart supply chain optimization',
    results: {
      roi: '300%',
      costReduction: '45%',
      efficiencyGain: '250%',
      timeline: '18 months'
    },
    featured: true,
    url: '/case-studies/ai-transformation-success',
    image: '🏭',
    tags: ['AI', 'Manufacturing', 'Predictive Analytics', 'Computer Vision'],
    testimonial: {
      quote: "Zion Tech Group's AI transformation exceeded our expectations. The 300% ROI speaks for itself, but the real value is in how they've positioned us as an industry leader in innovation.",
      author: 'Sarah Johnson',
      position: 'Chief Technology Officer'
    }
  },
  {
    id: 'quantum-optimization-logistics',
    title: 'Quantum Optimization in Logistics',
    company: 'LogiFlow Solutions',
    industry: 'Logistics & Supply Chain',
    challenge: 'Complex routing optimization and inventory management across 50+ distribution centers',
    solution: 'Quantum algorithms for route optimization and AI-driven demand forecasting',
    results: {
      roi: '180%',
      costReduction: '40%',
      efficiencyGain: '150%',
      timeline: '12 months'
    },
    featured: true,
    url: '/case-studies/quantum-optimization-logistics',
    image: '🚛',
    tags: ['Quantum Computing', 'Logistics', 'Optimization', 'AI'],
    testimonial: {
      quote: "The quantum optimization solution revolutionized our logistics operations. We've never seen such dramatic improvements in efficiency and cost reduction.",
      author: 'Michael Chen',
      position: 'VP of Operations'
    }
  },
  {
    id: 'cybersecurity-transformation',
    title: 'Zero-Trust Security Implementation',
    company: 'FinanceSecure Inc',
    industry: 'Financial Services',
    challenge: 'Increasing cyber threats and regulatory compliance requirements',
    solution: 'AI-powered zero-trust security architecture with real-time threat detection',
    results: {
      roi: '220%',
      costReduction: '35%',
      efficiencyGain: '200%',
      timeline: '15 months'
    },
    featured: false,
    url: '/case-studies/cybersecurity-transformation',
    image: '🔒',
    tags: ['Cybersecurity', 'Zero Trust', 'AI Security', 'Compliance'],
    testimonial: {
      quote: "Zero security incidents in 2 years after implementing Zion's security platform. Our customers trust us more than ever.",
      author: 'David Rodriguez',
      position: 'Chief Security Officer'
    }
  },
  {
    id: 'healthcare-ai-diagnosis',
    title: 'AI-Powered Medical Diagnosis',
    company: 'MedTech Innovations',
    industry: 'Healthcare',
    challenge: 'Manual diagnostic processes and limited specialist availability',
    solution: 'Multimodal AI diagnostic system with 95%+ accuracy for early disease detection',
    results: {
      roi: '250%',
      costReduction: '50%',
      efficiencyGain: '300%',
      timeline: '20 months'
    },
    featured: false,
    url: '/case-studies/healthcare-ai-diagnosis',
    image: '🏥',
    tags: ['Healthcare AI', 'Medical Diagnosis', 'Computer Vision', 'Machine Learning'],
    testimonial: {
      quote: "This AI system has transformed patient care. We're detecting diseases earlier and saving more lives than ever before.",
      author: 'Dr. Emily Watson',
      position: 'Chief Medical Officer'
    }
  },
  {
    id: 'retail-personalization',
    title: 'AI-Driven Retail Personalization',
    company: 'ShopSmart Retail',
    industry: 'Retail & E-commerce',
    challenge: 'Low customer engagement and declining sales in competitive market',
    solution: 'AI-powered personalization engine with real-time recommendation system',
    results: {
      roi: '190%',
      costReduction: '25%',
      efficiencyGain: '180%',
      timeline: '10 months'
    },
    featured: false,
    url: '/case-studies/retail-personalization',
    image: '🛍️',
    tags: ['Retail AI', 'Personalization', 'Recommendation Engine', 'Customer Experience'],
    testimonial: {
      quote: "Our sales increased by 60% and customer satisfaction reached all-time highs. The AI personalization is incredible.",
      author: 'Lisa Park',
      position: 'Chief Marketing Officer'
    }
  },
  {
    id: 'energy-optimization',
    title: 'Smart Grid Energy Optimization',
    company: 'PowerGrid Solutions',
    industry: 'Energy & Utilities',
    challenge: 'Energy waste and inefficient grid management',
    solution: 'AI-powered smart grid optimization with predictive energy management',
    results: {
      roi: '160%',
      costReduction: '30%',
      efficiencyGain: '120%',
      timeline: '14 months'
    },
    featured: false,
    url: '/case-studies/energy-optimization',
    image: '⚡',
    tags: ['Energy AI', 'Smart Grid', 'Optimization', 'Sustainability'],
    testimonial: {
      quote: "We've reduced energy waste by 40% and improved grid reliability. This is the future of energy management.",
      author: 'Robert Kim',
      position: 'Chief Technology Officer'
    }
  }
];

export default function CaseStudiesPage() {
  const featuredStudies = caseStudies.filter(study => study.featured);
  const regularStudies = caseStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Real Success Stories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped Fortune 500 companies and innovative startups achieve 
            remarkable results through cutting-edge technology implementations.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">200%+</div>
              <div className="text-green-100">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-green-100">Successful Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">$100M+</div>
              <div className="text-green-100">Cost Savings Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15</div>
              <div className="text-green-100">Industries Transformed</div>
            </div>
          </div>
        </div>

        {/* Featured Case Studies */}
        {featuredStudies.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-6 h-6 text-green-400" />
              <h2 className="text-3xl font-bold text-white">Featured Success Stories</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredStudies.map((study) => (
                <Link key={study.id} href={study.url} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20">
                    <div className="flex items-start gap-6">
                      <div className="text-6xl group-hover:scale-110 transition-transform">
                        {study.image}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                            {study.industry}
                          </span>
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                          {study.title}
                        </h3>
                        
                        <p className="text-gray-300 text-sm mb-4">
                          <span className="font-semibold">{study.company}</span>
                        </p>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {study.challenge}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-white/10 rounded-lg p-3 text-center">
                            <div className="text-2xl font-bold text-green-400 mb-1">{study.results.roi}</div>
                            <div className="text-xs text-gray-300">ROI</div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3 text-center">
                            <div className="text-2xl font-bold text-blue-400 mb-1">{study.results.costReduction}</div>
                            <div className="text-xs text-gray-300">Cost Reduction</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-green-400 group-hover:text-green-300">
                          <span className="font-medium">Read Full Case Study</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Case Studies */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">All Case Studies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStudies.map((study) => (
              <Link key={study.id} href={study.url} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20 h-full">
                  <div className="text-center mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform mb-4">
                      {study.image}
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-3">
                    <span className="font-semibold">{study.company}</span>
                  </p>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {study.challenge.substring(0, 120)}...
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-white/10 rounded p-2 text-center">
                      <div className="text-lg font-bold text-green-400">{study.results.roi}</div>
                      <div className="text-xs text-gray-300">ROI</div>
                    </div>
                    <div className="bg-white/10 rounded p-2 text-center">
                      <div className="text-lg font-bold text-blue-400">{study.results.costReduction}</div>
                      <div className="text-xs text-gray-300">Savings</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-green-400 group-hover:text-green-300 text-sm font-medium">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join the ranks of successful companies that have transformed their operations 
              with our cutting-edge technology solutions. Let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}