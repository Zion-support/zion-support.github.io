import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, FlaskConical, Target, BarChart3, CheckCircle, Star, Zap, Globe, Shield, Users, Clock, Activity, Microscope, Atom, Dna, Pill, TestTube, Beaker, FileText, Database, Cpu, Network, Lock } from 'lucide-react'

const AIDrugDiscoveryProPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI Molecular Design',
      description: 'Advanced machine learning algorithms design novel drug compounds with optimal properties and minimal side effects.'
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-400" />,
      title: 'Target Identification',
      description: 'AI-powered analysis identifies disease targets and validates drug targets with high precision and accuracy.'
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-purple-400" />,
      title: 'Virtual Screening',
      description: 'High-throughput virtual screening of millions of compounds to identify promising drug candidates.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
      title: 'Predictive Analytics',
      description: 'Predict drug efficacy, toxicity, and pharmacokinetics using advanced AI models and big data analysis.'
    },
    {
      icon: <Dna className="w-6 h-6 text-pink-400" />,
      title: 'Genomic Analysis',
      description: 'Comprehensive genomic analysis to identify biomarkers and personalize drug treatments for patients.'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: 'Safety Assessment',
      description: 'AI-driven safety profiling and toxicity prediction to ensure drug safety before clinical trials.'
    }
  ]

  const discoveryModules = [
    {
      icon: <Microscope className="w-8 h-8 text-cyan-400" />,
      title: 'Target Discovery',
      description: 'AI-powered identification and validation of disease targets using multi-omics data analysis.',
      price: '$2,999/month',
      features: ['Target identification', 'Pathway analysis', 'Biomarker discovery', 'Validation studies']
    },
    {
      icon: <Atom className="w-8 h-8 text-emerald-400" />,
      title: 'Lead Optimization',
      description: 'Optimize lead compounds for improved efficacy, selectivity, and drug-like properties.',
      price: '$3,999/month',
      features: ['Structure optimization', 'ADMET prediction', 'Synthesis planning', 'Property prediction']
    },
    {
      icon: <TestTube className="w-8 h-8 text-purple-400" />,
      title: 'Virtual Screening',
      description: 'High-throughput screening of compound libraries to identify promising drug candidates.',
      price: '$1,999/month',
      features: ['Library screening', 'Docking analysis', 'Scoring functions', 'Hit identification']
    },
    {
      icon: <Pill className="w-8 h-8 text-orange-400" />,
      title: 'Clinical Trial Design',
      description: 'AI-optimized clinical trial design with patient stratification and endpoint prediction.',
      price: '$4,999/month',
      features: ['Trial design', 'Patient stratification', 'Endpoint prediction', 'Risk assessment']
    },
    {
      icon: <Database className="w-8 h-8 text-pink-400" />,
      title: 'Data Integration',
      description: 'Integrate multi-omics data, literature, and clinical data for comprehensive drug discovery.',
      price: '$2,499/month',
      features: ['Data integration', 'Literature mining', 'Clinical data', 'Real-time updates']
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      title: 'AI Modeling',
      description: 'Advanced AI models for drug-target interaction prediction and compound optimization.',
      price: '$3,499/month',
      features: ['Deep learning models', 'Interaction prediction', 'Property optimization', 'Custom algorithms']
    }
  ]

  const pricingPlans = [
    {
      name: 'Research',
      price: '$9,999',
      period: '/month',
      description: 'Perfect for academic research institutions',
      features: [
        'Basic AI models',
        'Target discovery',
        'Virtual screening',
        'Data integration',
        'Email support',
        'Standard reports'
      ],
      popular: false
    },
    {
      name: 'Biotech',
      price: '$19,999',
      period: '/month',
      description: 'Ideal for biotech companies',
      features: [
        'Advanced AI models',
        'All discovery modules',
        'Lead optimization',
        'Clinical trial design',
        'Priority support',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Pharma',
      price: '$49,999',
      period: '/month',
      description: 'For large pharmaceutical companies',
      features: [
        'Enterprise AI suite',
        'Custom model training',
        'Dedicated support team',
        'White-label options',
        'On-premise deployment',
        'Custom algorithms',
        'Regulatory compliance'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '10x', label: 'Faster Discovery', icon: <Zap className="w-6 h-6 text-cyan-400" /> },
    { number: '95%', label: 'Accuracy Rate', icon: <Target className="w-6 h-6 text-emerald-400" /> },
    { number: '50%', label: 'Cost Reduction', icon: <BarChart3 className="w-6 h-6 text-purple-400" /> },
    { number: '1000+', label: 'Compounds Analyzed', icon: <FlaskConical className="w-6 h-6 text-orange-400" /> }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      company: 'BioPharma Research',
      content: 'Zion Tech Group\'s AI Drug Discovery platform has revolutionized our research. We\'ve identified 3 promising drug candidates in just 6 months, something that would have taken years with traditional methods.',
      rating: 5
    },
    {
      name: 'Prof. Michael Rodriguez',
      company: 'University Medical Center',
      content: 'The AI models are incredibly accurate. We\'ve reduced our false positive rate by 80% and significantly accelerated our drug development pipeline.',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      company: 'Genomics Therapeutics',
      content: 'The genomic analysis capabilities are outstanding. We can now identify patient-specific drug targets and design personalized treatments with unprecedented precision.',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Drug Discovery Pro - Advanced AI Drug Development Platform | Zion Tech Group</title>
        <meta name="description" content="Accelerate drug discovery with our AI-powered platform. Target identification, molecular design, virtual screening, and clinical trial optimization with 95% accuracy." />
        <meta name="keywords" content="AI drug discovery, pharmaceutical AI, drug development, molecular design, virtual screening, clinical trials, drug targets" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-drug-discovery-pro" />
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Drug Discovery</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Advanced <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Drug Discovery Pro</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Accelerate drug discovery with our cutting-edge AI platform. From target identification to clinical trials, 
              transform pharmaceutical research with artificial intelligence and machine learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Drug Discovery?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven drug discovery with our proven results.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Discovery Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive AI-powered tools for every stage of drug discovery and development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Discovery Modules Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Discovery <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Modules</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive modules covering every aspect of AI-powered drug discovery and development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {discoveryModules.map((module, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {module.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      {module.price}
                    </div>
                    <div className="space-y-1">
                      {module.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      to="/contact"
                      className="block w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Discovery <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your research needs. All plans include access to our AI models.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Researchers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Join leading researchers and pharmaceutical companies using our AI platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Accelerate Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Drug Discovery?</span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Join leading pharmaceutical companies and research institutions using our AI platform 
                to discover breakthrough treatments faster and more efficiently than ever before.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/contact" 
                  className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                >
                  <span>View All Plans</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIDrugDiscoveryProPage
