import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FlaskConical, 
  Microscope, 
  Brain, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Award,
  BarChart,
  Target,
  Shield,
  Activity,
  TrendingUp
} from 'lucide-react';

const AIDrugDiscoveryProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Molecular Design',
      description: 'Advanced algorithms for designing novel drug compounds with optimal properties.',
      benefits: ['Molecular optimization', 'Drug-likeness prediction', 'ADMET profiling']
    },
    {
      icon: Microscope,
      title: 'Virtual Screening',
      description: 'High-throughput screening of compound libraries using AI models.',
      benefits: ['Millions of compounds', 'Real-time analysis', 'Hit identification']
    },
    {
      icon: Target,
      title: 'Target Identification',
      description: 'AI-driven discovery of new drug targets and pathways.',
      benefits: ['Genomic analysis', 'Pathway mapping', 'Disease modeling']
    },
    {
      icon: Shield,
      title: 'Safety Prediction',
      description: 'Predict potential side effects and toxicity before clinical trials.',
      benefits: ['Toxicity screening', 'Safety profiling', 'Risk assessment']
    }
  ];

  const services = [
    {
      title: 'Drug Discovery Platform',
      description: 'Complete AI-powered drug discovery platform with molecular design tools',
      price: '$4,500/month',
      features: ['Molecular design suite', 'Virtual screening', 'ADMET prediction', 'API access']
    },
    {
      title: 'Custom Drug Development',
      description: 'Tailored drug discovery solutions for specific therapeutic areas',
      price: 'Custom pricing',
      features: ['Target identification', 'Lead optimization', 'Preclinical studies', 'Regulatory support']
    },
    {
      title: 'AI Model Training',
      description: 'Custom AI models trained on your specific datasets',
      price: '$2,500/month',
      features: ['Data preparation', 'Model training', 'Validation', 'Deployment support']
    },
    {
      title: 'Consulting Services',
      description: 'Expert consultation on AI-driven drug discovery strategies',
      price: '$500/hour',
      features: ['Strategy development', 'Technology assessment', 'Implementation guidance', 'Training']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Drug Discovery Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered drug discovery platform accelerating pharmaceutical research and development with advanced machine learning algorithms." />
        <meta name="keywords" content="AI drug discovery, pharmaceutical AI, molecular design, drug development, virtual screening" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center">
                  <FlaskConical className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Drug Discovery
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  {' '}Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Accelerate pharmaceutical research with our cutting-edge AI platform. 
                Discover new drugs 10x faster with advanced machine learning algorithms.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Drug Discovery Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage the power of AI to transform pharmaceutical research and 
                accelerate the development of life-saving medications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Drug Discovery Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered drug discovery solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                    <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full cyber-button py-3">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">10x</div>
                <div className="text-gray-300">Faster Discovery</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Pharma Partners</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">$2B+</div>
                <div className="text-gray-300">Cost Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Drug Discovery?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Join leading pharmaceutical companies using AI to accelerate 
              drug development and save lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIDrugDiscoveryProPage;