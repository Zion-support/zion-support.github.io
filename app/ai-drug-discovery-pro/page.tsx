'use client';
import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  Pill, 
  Microscope, 
  Dna, 
  FlaskConical, 
  TestTube, 
  Zap, 
  BarChart, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Target,
  Activity,
  PieChart,
  LineChart,
  AlertTriangle,
  Globe,
  Cpu,
  Database,
  FileText,
  Smartphone,
  Mail,
  MapPin,
  Phone,
  Heart,
  Brain,
  Eye,
  Syringe,
  Beaker,
  Atom,
  Search,
  Clock
} from 'lucide-react';

const AIDrugDiscoveryProPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const solutions = [
    {
      icon: Dna,
      title: 'AI Molecular Design Platform',
      description: 'Revolutionary AI platform for designing novel drug molecules with optimal properties',
      features: [
        'Molecular structure optimization',
        'Drug-target interaction prediction',
        'ADMET property prediction',
        'Synthetic route planning',
        'Patent landscape analysis',
        'Clinical trial optimization'
      ],
      impact: '10x faster drug discovery',
      pricing: 'Starting at $50,000/month',
      category: 'Molecular Design'
    },
    {
      icon: Microscope,
      title: 'Virtual Screening AI Suite',
      description: 'High-throughput virtual screening using advanced machine learning algorithms',
      features: [
        'Compound library screening',
        'Hit identification',
        'Lead optimization',
        'Off-target prediction',
        'Toxicity assessment',
        'Bioavailability prediction'
      ],
      impact: '95% accuracy in hit prediction',
      pricing: 'Starting at $25,000/month',
      category: 'Virtual Screening'
    },
    {
      icon: FlaskConical,
      title: 'AI-Enhanced Clinical Trials',
      description: 'Optimize clinical trial design and patient selection using AI analytics',
      features: [
        'Patient stratification',
        'Trial design optimization',
        'Endpoint prediction',
        'Adverse event monitoring',
        'Dosing optimization',
        'Regulatory compliance'
      ],
      impact: '40% reduction in trial duration',
      pricing: 'Starting at $75,000/month',
      category: 'Clinical Trials'
    },
    {
      icon: TestTube,
      title: 'Biomarker Discovery AI',
      description: 'Identify and validate biomarkers for disease diagnosis and treatment response',
      features: [
        'Biomarker identification',
        'Validation studies',
        'Diagnostic accuracy assessment',
        'Prognostic modeling',
        'Companion diagnostics',
        'Regulatory submission support'
      ],
      impact: '85% accuracy in biomarker prediction',
      pricing: 'Starting at $40,000/month',
      category: 'Biomarkers'
    },
    {
      icon: Heart,
      title: 'Personalized Medicine AI',
      description: 'Develop personalized treatment strategies based on patient genetics and biomarkers',
      features: [
        'Genomic analysis',
        'Treatment response prediction',
        'Dose optimization',
        'Adverse reaction prediction',
        'Drug interaction analysis',
        'Patient stratification'
      ],
      impact: '60% improvement in treatment efficacy',
      pricing: 'Starting at $60,000/month',
      category: 'Personalized Medicine'
    },
    {
      icon: Syringe,
      title: 'Drug Repurposing AI',
      description: 'Identify new therapeutic uses for existing drugs using AI analysis',
      features: [
        'Drug-disease mapping',
        'Mechanism of action analysis',
        'Safety profile assessment',
        'Efficacy prediction',
        'Market analysis',
        'Regulatory pathway optimization'
      ],
      impact: '5x faster repurposing process',
      pricing: 'Starting at $30,000/month',
      category: 'Drug Repurposing'
    }
  ];

  const pricingPlans = [
    {
      name: 'Research Starter',
      price: '$15,000',
      period: '/month',
      description: 'Perfect for academic institutions and small biotech companies',
      features: [
        'Basic molecular design tools',
        'Virtual screening capabilities',
        'Standard support',
        'Up to 10 users',
        'Monthly reports',
        'Basic training'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Pharma Professional',
      price: '$75,000',
      period: '/month',
      description: 'Comprehensive solution for pharmaceutical companies',
      features: [
        'Full AI drug discovery suite',
        'Advanced analytics',
        'Priority support',
        'Up to 100 users',
        'Custom integrations',
        'API access',
        'Advanced training',
        'Regulatory support'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise Discovery',
      price: '$200,000',
      period: '/month',
      description: 'Complete drug discovery platform for large pharma',
      features: [
        'Full platform access',
        'Custom AI models',
        '24/7 dedicated support',
        'Unlimited users',
        'White-label options',
        'On-premise deployment',
        'SLA guarantee',
        'Dedicated team',
        'Custom development'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const capabilities = [
    {
      title: 'Accelerated Discovery',
      description: 'Reduce drug discovery time from years to months with AI-powered insights',
      impact: '10x faster discovery',
      icon: Clock
    },
    {
      title: 'Higher Success Rates',
      description: 'Improve clinical trial success rates with better target identification',
      impact: '3x higher success rate',
      icon: Target
    },
    {
      title: 'Cost Reduction',
      description: 'Significantly reduce R&D costs through virtual screening and optimization',
      impact: '50% cost reduction',
      icon: BarChart
    },
    {
      title: 'Safety First',
      description: 'Predict and prevent adverse effects before clinical trials',
      impact: '90% safety prediction accuracy',
      icon: Shield
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Scientific Officer',
      company: 'BioPharma Innovations',
      content: 'The AI Drug Discovery Pro platform has revolutionized our research. We\'ve identified 3 new drug candidates in just 6 months, compared to our previous 2-year timeline.',
      rating: 5
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Director of Research',
      company: 'University Medical Center',
      content: 'The molecular design capabilities are extraordinary. We\'ve been able to optimize compounds that were previously impossible to improve.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Head of Drug Development',
      company: 'Global Therapeutics',
      content: 'The clinical trial optimization features have saved us millions in costs and years in development time. This is the future of drug discovery.',
      rating: 5
    }
  ];

  const caseStudies = [
    {
      company: 'OncoPharma Inc.',
      industry: 'Oncology',
      challenge: 'Developing targeted cancer therapies with limited success',
      solution: 'Implemented AI molecular design and virtual screening platform',
      results: ['Identified 5 new drug candidates', '60% reduction in development time', 'ROI of 400% in 18 months'],
      image: '/images/case-studies/oncopharma.jpg'
    },
    {
      company: 'NeuroMed Solutions',
      industry: 'Neurology',
      challenge: 'Finding effective treatments for rare neurological disorders',
      solution: 'Deployed AI drug repurposing and biomarker discovery platform',
      results: ['3 repurposed drugs in clinical trials', '85% accuracy in patient stratification', '50% faster trial completion'],
      image: '/images/case-studies/neuromed.jpg'
    },
    {
      company: 'CardioTech Labs',
      industry: 'Cardiology',
      challenge: 'Developing personalized cardiovascular treatments',
      solution: 'Implemented personalized medicine AI and biomarker discovery',
      results: ['40% improvement in treatment efficacy', '70% reduction in adverse events', '90% patient satisfaction'],
      image: '/images/case-studies/cardiotech.jpg'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-full mb-6">
              <Stethoscope className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">AI Drug Discovery Pro</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Revolutionize Drug Discovery with
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AI-Powered Innovation</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Accelerate drug discovery, reduce costs, and improve success rates with our comprehensive AI platform. 
              From molecular design to clinical trials, transform every step of the drug development process.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                <Dna className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">Molecular Design</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Microscope className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Virtual Screening</span>
              </div>
              <div className="flex items-center space-x-2 bg-indigo-500/20 px-4 py-2 rounded-lg">
                <FlaskConical className="w-5 h-5 text-indigo-400" />
                <span className="text-white font-medium">Clinical Trials</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-bold hover:bg-blue-400 hover:text-white transition-all inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Drug Discovery Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform covers every aspect of modern drug discovery and development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4">
                  <span className="text-sm text-blue-400 font-medium">{solution.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-blue-400">{solution.impact}</div>
                  <div className="text-sm text-gray-400">{solution.pricing}</div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Proven Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from our AI-powered drug discovery platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{capability.impact}</div>
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Discovery Platform
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to accelerate your drug discovery efforts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                    : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Leading Researchers
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what industry experts say about our AI drug discovery platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-blue-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from companies using our AI drug discovery platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">
                    {study.company.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <p className="text-blue-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-blue-400">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Drug Discovery?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the revolution in drug discovery. Start your free trial today and experience the future of pharmaceutical research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center">
              <Stethoscope className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
          <div className="mt-8 text-blue-100">
            <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
            <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
            <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDrugDiscoveryProPage;