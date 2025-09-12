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
  const caseStudies = [
    {
      id: 'fortune-500-ai-transformation',
      title: 'Fortune 500 Manufacturing: AI-Powered Supply Chain Transformation',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge:
        'Manual supply chain processes across 15 countries causing delays, errors, and $500K annual losses',
      solution:
        'Comprehensive AI automation platform with demand forecasting, inventory optimization, and supplier communication',
      results: [
        '40% reduction in supply chain costs',
        '60% faster order processing',
        '$2.3M annual savings',
        '95% accuracy in demand forecasting',
      ],
      technologies: ['Python', 'TensorFlow', 'AWS SageMaker', 'React', 'Kubernetes'],
      duration: '8 months',
      team: '12 developers',
      image: '/api/placeholder/600/400',
      featured: true,
    },
    {
      id: 'fintech-ai-platform',
      title: 'AI-Powered Financial Analytics Platform',
      client: 'Fortune 500 Fintech Company',
      industry: 'Financial Services',
      challenge:
        'Manual data analysis processes were taking 40+ hours per week and prone to human error',
      solution:
        'Developed custom AI platform with machine learning models for real-time financial data analysis',
      results: [
        '85% reduction in analysis time',
        '99.7% accuracy in fraud detection',
        '$2.3M annual cost savings',
        '40% improvement in decision speed',
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'React', 'PostgreSQL'],
      duration: '6 months',
      team: '8 developers',
      image: '/api/placeholder/600/400',
      featured: true,
    },
    {
      id: 'healthcare-automation',
      title: 'Healthcare Process Automation Suite',
      client: 'Regional Healthcare Network',
      industry: 'Healthcare',
      challenge:
        'Manual patient scheduling and billing processes causing delays and errors',
      solution:
        'Comprehensive automation platform with AI-powered scheduling and billing optimization',
      results: [
        '60% reduction in scheduling errors',
        '45% faster patient check-in process',
        '30% improvement in billing accuracy',
        '50% reduction in administrative workload',
      ],
      technologies: ['Node.js', 'MongoDB', 'Vue.js', 'Docker', 'Kubernetes'],
      duration: '4 months',
      team: '6 developers',
      image: '/api/placeholder/600/400',
      featured: true,
    },
    {
      id: 'ecommerce-micro-saas',
      title: 'E-commerce Analytics Micro SaaS',
      client: 'E-commerce Startup',
      industry: 'Retail Technology',
      challenge:
        'Need for affordable, scalable analytics solution for small to medium e-commerce businesses',
      solution:
        'Built comprehensive micro SaaS platform with real-time analytics, inventory management, and customer insights',
      results: [
        '500+ active customers in first year',
        '$150K ARR within 12 months',
        '95% customer satisfaction rate',
        '40% month-over-month growth',
      ],
      technologies: ['Next.js', 'Supabase', 'Stripe', 'Tailwind CSS', 'Vercel'],
      duration: '3 months',
      team: '4 developers',
      image: '/api/placeholder/600/400',
      featured: false,
    },
    {
      id: 'manufacturing-iot',
      title: 'Smart Manufacturing IoT Platform',
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      challenge:
        'Lack of real-time visibility into production processes and equipment performance',
      solution:
        'IoT platform with sensors, real-time monitoring, and predictive maintenance capabilities',
      results: [
        '35% reduction in equipment downtime',
        '25% improvement in production efficiency',
        '20% decrease in maintenance costs',
        '90% reduction in unplanned outages',
      ],
      technologies: [
        'Python',
        'IoT Sensors',
        'AWS IoT',
        'React',
        'Time Series DB',
      ],
      duration: '8 months',
      team: '10 developers',
      image: '/api/placeholder/600/400',
      featured: false,
    },
    {
      id: 'blockchain-supply-chain',
      title: 'Blockchain Supply Chain Transparency',
      client: 'Global Logistics Company',
      industry: 'Logistics & Supply Chain',
      challenge:
        'Need for transparent, tamper-proof supply chain tracking across multiple countries',
      solution:
        'Blockchain-based supply chain platform with smart contracts and real-time tracking',
      results: [
        '100% supply chain transparency',
        '60% reduction in disputes',
        '30% faster customs clearance',
        '25% improvement in customer trust',
      ],
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'React', 'IPFS'],
      duration: '7 months',
      team: '7 developers',
      image: '/api/placeholder/600/400',
      featured: false,
    },
    {
      id: 'cybersecurity-platform',
      title: 'Advanced Cybersecurity Monitoring Platform',
      client: 'Enterprise Software Company',
      industry: 'Cybersecurity',
      challenge:
        'Increasing cyber threats requiring 24/7 monitoring and rapid response capabilities',
      solution:
        'AI-powered cybersecurity platform with threat detection, automated response, and compliance reporting',
      results: [
        '99.9% threat detection accuracy',
        '80% reduction in response time',
        'Zero successful breaches in 18 months',
        '50% reduction in security team workload',
      ],
      technologies: [
        'Python',
        'Machine Learning',
        'Elasticsearch',
        'Kibana',
        'Docker',
      ],
      duration: '5 months',
      team: '9 developers',
      image: '/api/placeholder/600/400',
      featured: false,
    },
    {
      id: 'quantum-financial-optimization',
      title: 'Quantum-Powered Financial Portfolio Optimization',
      client: 'Global Investment Bank',
      industry: 'Financial Services',
      challenge:
        'Complex portfolio optimization requiring processing of millions of variables in real-time for maximum returns',
      solution:
        'Quantum computing platform with hybrid classical-quantum algorithms for portfolio optimization and risk management',
      results: [
        '35% improvement in portfolio performance',
        '60% faster optimization calculations',
        '$2.8B additional returns generated',
        '99.7% accuracy in risk prediction',
      ],
      technologies: [
        'Quantum Computing',
        'Python',
        'Qiskit',
        'TensorFlow',
        'AWS Quantum',
      ],
      duration: '8 months',
      team: '12 developers',
      image: '/api/placeholder/600/400',
      featured: true,
    },
    {
      id: 'smart-city-iot-platform',
      title: 'Smart City IoT Infrastructure Platform',
      client: 'Metropolitan City Government',
      industry: 'Smart Cities',
      challenge:
        'Need for comprehensive city-wide IoT monitoring and management system for traffic, utilities, and public safety',
      solution:
        'Integrated IoT platform with edge computing, real-time analytics, and citizen engagement features',
      results: [
        '40% reduction in traffic congestion',
        '25% improvement in emergency response times',
        '30% decrease in energy consumption',
        '85% citizen satisfaction with city services',
      ],
      technologies: [
        'IoT Sensors',
        'Edge Computing',
        'React',
        'Node.js',
        'Kubernetes',
      ],
      duration: '12 months',
      team: '15 developers',
      image: '/api/placeholder/600/400',
      featured: true,
    },
    {
      id: 'ai-drug-discovery-platform',
      title: 'AI-Powered Drug Discovery Platform',
      client: 'Pharmaceutical Research Company',
      industry: 'Healthcare & Pharmaceuticals',
      challenge:
        'Accelerating drug discovery process while reducing costs and improving success rates for new treatments',
      solution:
        'Machine learning platform with molecular simulation, predictive modeling, and automated compound screening',
      results: [
        '70% reduction in drug discovery time',
        '45% improvement in success rates',
        '$1.2B saved in R&D costs',
        '12 new drug candidates identified',
      ],
      technologies: [
        'Machine Learning',
        'Python',
        'TensorFlow',
        'Molecular Simulation',
        'AWS',
      ],
      duration: '10 months',
      team: '11 developers',
      image: '/api/placeholder/600/400',
      featured: false,
    },
    {
      id: 'ai-healthcare-diagnosis-2025',
      title: 'AI-Powered Medical Diagnosis Platform',
      client: 'MedCenter Plus',
      industry: 'Healthcare',
      challenge:
        'Diagnostic accuracy varied significantly between physicians (60-85%) with average diagnosis time of 45 minutes per patient',
      solution:
        'Comprehensive AI diagnostic platform combining computer vision, NLP, and machine learning to analyze medical images, lab results, and symptoms',
      results: [
        '95% diagnostic accuracy achieved',
        '70% reduction in diagnosis time',
        '85% reduction in misdiagnosis rate',
        '$2.3M annual cost savings',
      ],
      technologies: [
        'TensorFlow',
        'PyTorch',
        'OpenCV',
        'BERT',
        'AWS SageMaker',
        'Kubernetes',
      ],
      duration: '12 months',
      team: '15 developers',
      image: '/api/placeholder/600/400',
      featured: true,
    },
    {
      id: 'ai-ecommerce-transformation-2025',
      title: 'AI E-commerce Transformation: 300% Revenue Growth in 18 Months',
      client: 'E-commerce Leader',
      industry: 'E-commerce & Retail',
      challenge:
        'Manual processes, high customer acquisition costs ($150 per customer), inefficient customer service with 24-hour response times, and poor personalization leading to low conversion rates',
      solution:
        'Comprehensive AI transformation including personalized recommendations, dynamic pricing, predictive inventory management, and AI-powered customer service automation',
      results: [
        '300% revenue growth in 18 months',
        '60% reduction in operational costs',
        '95% customer satisfaction rate',
        '$15.8M annual benefits achieved',
      ],
      technologies: [
        'Machine Learning',
        'Python',
        'TensorFlow',
        'React',
        'AWS',
        'Kubernetes',
        'Real-time Analytics',
      ],
      duration: '18 months',
      team: '20 developers',
      image: '/api/placeholder/600/400',
      featured: true,
    },
    // New case study added January 2025
    {
      id: 'ai-financial-services-transformation-2025',
      title: 'AI Financial Services Transformation: $50M Cost Savings & 300% Efficiency Gains',
      client: 'Fortune 500 Financial Services Firm',
      industry: 'Financial Services',
      challenge:
        'Manual loan processing taking 5-7 days, high error rates in data entry (12%), inconsistent customer service quality, and regulatory compliance bottlenecks causing operational inefficiencies',
      solution:
        'Strategic AI implementation including automated loan processing, predictive risk assessment, intelligent customer service chatbots, and comprehensive compliance automation',
      results: [
        '$50M annual cost savings achieved',
        '300% efficiency improvement',
        '340% ROI in 18 months',
        '95% customer satisfaction rate',
      ],
      technologies: [
        'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Python',
        'TensorFlow',
        'AWS',
        'Kubernetes',
        'Blockchain',
      ],
      duration: '18 months',
      team: '25 developers',
      image: '/api/placeholder/600/400',
      featured: true,
    },
  ];

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