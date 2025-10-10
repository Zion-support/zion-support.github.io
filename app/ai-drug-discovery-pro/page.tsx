'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  FlaskConical, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  Award,
  Target,
  TrendingUp,
  Database,
  Globe,
  Settings,
  Eye,
  Lock,
  RefreshCw,
  BarChart,
  Cpu,
  HardDrive,
  Wifi,
  Smartphone,
  Cloud,
  Sparkles,
  Monitor,
  Bell,
  FileText,
  Download,
  Upload,
  Play,
  Pause,
  RotateCcw,
  Stethoscope,
  Microscope,
  TestTube,
  Atom,
  Dna,
  Pill,
  Heart,
  Activity,
  AlertTriangle,
  TrendingUp as Growth,
  PieChart as Analytics,
  Shield as Security,
  Calculator,
  Search,
  Filter,
  Layers,
  Beaker,
  Syringe,
  Thermometer,
  Droplets
} from 'lucide-react';

const AIDrugDiscoveryProPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Molecular Design',
      description: 'Advanced AI algorithms design novel drug molecules with optimal properties and efficacy',
      details: ['Molecular optimization', 'Drug-likeness prediction', 'ADMET properties', 'Synthetic accessibility']
    },
    {
      icon: Target,
      title: 'Target Identification',
      description: 'Identify and validate drug targets using AI-powered analysis of biological pathways',
      details: ['Pathway analysis', 'Target validation', 'Disease association', 'Biomarker discovery']
    },
    {
      icon: FlaskConical,
      title: 'Virtual Screening',
      description: 'High-throughput virtual screening of compound libraries to identify promising candidates',
      details: ['Library screening', 'Docking simulations', 'Binding affinity prediction', 'Lead optimization']
    },
    {
      icon: TestTube,
      title: 'ADMET Prediction',
      description: 'Predict absorption, distribution, metabolism, excretion, and toxicity properties',
      details: ['Pharmacokinetics', 'Toxicity prediction', 'Drug interactions', 'Safety profiling']
    },
    {
      icon: Dna,
      title: 'Genomic Analysis',
      description: 'Analyze genomic data to identify genetic factors influencing drug response',
      details: ['Pharmacogenomics', 'Biomarker identification', 'Personalized medicine', 'Genetic variants']
    },
    {
      icon: Shield,
      title: 'Clinical Trial Optimization',
      description: 'Optimize clinical trial design and patient selection using AI insights',
      details: ['Trial design', 'Patient stratification', 'Endpoint prediction', 'Risk assessment']
    }
  ];

  const pricingPlans = [
    {
      name: 'Research',
      price: 2500,
      originalPrice: 3500,
      period: 'month',
      description: 'Perfect for academic research and small biotech companies',
      features: [
        'Up to 100 compounds',
        'Basic molecular design',
        'Standard screening',
        'Email support',
        'Basic reporting',
        '30-day data retention',
        'Academic licensing'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: 7500,
      originalPrice: 10000,
      period: 'month',
      description: 'Ideal for pharmaceutical companies and research institutions',
      features: [
        'Up to 1000 compounds',
        'Advanced AI algorithms',
        'High-throughput screening',
        'Priority support',
        'API access',
        'Custom models',
        '1-year data retention',
        'Advanced analytics',
        'Clinical trial support'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 25000,
      originalPrice: 35000,
      period: 'month',
      description: 'For large pharmaceutical companies and global research organizations',
      features: [
        'Unlimited compounds',
        'Premium AI algorithms',
        'Custom drug discovery',
        '24/7 dedicated support',
        'Full API access',
        'White-label solution',
        'Unlimited data retention',
        'Custom integrations',
        'Regulatory compliance',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const useCases = [
    {
      title: 'Oncology Drug Discovery',
      description: 'Develop targeted cancer therapies with AI-powered molecular design and optimization',
      icon: Heart,
      examples: ['Kinase inhibitors', 'Immunotherapies', 'Targeted therapies', 'Combination treatments']
    },
    {
      title: 'Neurological Disorders',
      description: 'Discover treatments for Alzheimer\'s, Parkinson\'s, and other neurological conditions',
      icon: Brain,
      examples: ['Neuroprotective agents', 'Cognitive enhancers', 'Disease modifiers', 'Symptom treatments']
    },
    {
      title: 'Infectious Diseases',
      description: 'Develop novel antibiotics and antiviral drugs to combat emerging pathogens',
      icon: Shield,
      examples: ['Antibiotics', 'Antivirals', 'Antifungals', 'Antiparasitics']
    },
    {
      title: 'Rare Diseases',
      description: 'Accelerate drug discovery for rare and orphan diseases with limited patient populations',
      icon: Target,
      examples: ['Orphan drugs', 'Gene therapies', 'Enzyme replacements', 'Small molecule drugs']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Scientific Officer',
      company: 'BioPharma Innovations',
      content: 'AI Drug Discovery Pro has accelerated our drug development timeline by 60%. The AI predictions are remarkably accurate and have led to several promising candidates.',
      rating: 5,
      avatar: '/images/testimonials/sarah-johnson.jpg'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Head of Research',
      company: 'Global Therapeutics',
      content: 'The molecular design capabilities are outstanding. We\'ve identified novel compounds that would have taken years to discover using traditional methods.',
      rating: 5,
      avatar: '/images/testimonials/michael-chen.jpg'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Director of Drug Discovery',
      company: 'MedTech Solutions',
      content: 'The ADMET prediction accuracy is impressive. It has significantly reduced our experimental costs and improved our success rate.',
      rating: 5,
      avatar: '/images/testimonials/emily-rodriguez.jpg'
    }
  ];

  const stats = [
    { number: '60%', label: 'Faster Discovery', icon: Clock },
    { number: '85%', label: 'Prediction Accuracy', icon: Target },
    { number: '200+', label: 'Drug Candidates', icon: Pill },
    { number: '50+', label: 'Research Partners', icon: Users }
  ];

  const drugDiscoveryPipeline = [
    {
      step: 1,
      title: 'Target Identification',
      description: 'AI identifies and validates drug targets using genomic and proteomic data',
      icon: Target,
      duration: '2-4 weeks'
    },
    {
      step: 2,
      title: 'Molecular Design',
      description: 'AI designs novel drug molecules with optimal properties and efficacy',
      icon: Brain,
      duration: '4-8 weeks'
    },
    {
      step: 3,
      title: 'Virtual Screening',
      description: 'High-throughput screening identifies promising drug candidates',
      icon: Search,
      duration: '2-6 weeks'
    },
    {
      step: 4,
      title: 'ADMET Prediction',
      description: 'Predict drug properties and safety profiles before experimental testing',
      icon: TestTube,
      duration: '1-2 weeks'
    },
    {
      step: 5,
      title: 'Lead Optimization',
      description: 'Optimize lead compounds for improved efficacy and safety',
      icon: Settings,
      duration: '8-12 weeks'
    },
    {
      step: 6,
      title: 'Clinical Translation',
      description: 'Prepare optimized candidates for clinical trials and regulatory approval',
      icon: Award,
      duration: '12-24 weeks'
    }
  ];

  const therapeuticAreas = [
    { name: 'Oncology', icon: Heart, description: 'Cancer drug discovery and development' },
    { name: 'Neurology', icon: Brain, description: 'Neurological disorder treatments' },
    { name: 'Cardiology', icon: Activity, description: 'Cardiovascular disease therapies' },
    { name: 'Immunology', icon: Shield, description: 'Immune system modulation' },
    { name: 'Infectious Disease', icon: Microscope, description: 'Antimicrobial drug development' },
    { name: 'Rare Diseases', icon: Target, description: 'Orphan drug discovery' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-full mb-6">
              <FlaskConical className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">AI Drug Discovery Technology</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Drug Discovery Pro
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Accelerate drug discovery with AI-powered molecular design, virtual screening, 
              and predictive analytics. Discover breakthrough treatments 60% faster than traditional methods.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">60% Faster Discovery</span>
              </div>
              <div className="flex items-center space-x-2 bg-pink-500/20 px-4 py-2 rounded-lg">
                <Target className="w-5 h-5 text-pink-400" />
                <span className="text-white font-medium">85% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">AI-Powered</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center">
                <FlaskConical className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-bold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Advanced Drug Discovery Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technology that revolutionizes every stage of drug discovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card-advanced p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drug Discovery Pipeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              AI-Powered Drug Discovery Pipeline
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our comprehensive pipeline accelerates drug discovery from target identification to clinical translation
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {drugDiscoveryPipeline.map((step, index) => (
                <div key={index} className="cyber-card-advanced p-6 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-purple-400 font-bold text-lg">Step {step.step}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-purple-400 font-medium">
                    <Clock className="w-4 h-4 mr-2" />
                    {step.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic Areas Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Therapeutic Areas
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Specialized AI models for drug discovery across multiple therapeutic areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {therapeuticAreas.map((area, index) => (
              <div key={index} className="cyber-card-advanced p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Use Cases & Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover how AI Drug Discovery Pro is transforming pharmaceutical research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card-advanced p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {useCase.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Examples:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed for research organizations of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card-advanced p-8 relative ${plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">${plan.price.toLocaleString()}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                    <div className="text-lg text-gray-500 line-through">${plan.originalPrice.toLocaleString()}</div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700' 
                    : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Trusted by Research Leaders
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what leading researchers say about AI Drug Discovery Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card-advanced p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-purple-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Drug Discovery?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-driven drug discovery. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center">
              <FlaskConical className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📧 Email: kleber@ziontechgroup.com</p>
            <p>📞 Phone: +1 (302) 464-0950</p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDrugDiscoveryProPage;