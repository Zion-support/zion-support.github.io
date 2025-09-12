import React from 'react';
import { Metadata } from 'next';
import { ArrowLeft, CheckCircle, TrendingUp, Users, Award, Brain, Atom, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quantum AI Healthcare Transformation: 300% Faster Drug Discovery',
  description: 'How Zion Tech Group helped a major pharmaceutical company reduce drug discovery time from 10 years to 3 years using quantum AI technology.',
  keywords: 'quantum AI, healthcare, drug discovery, case study, pharmaceutical, medical technology',
  openGraph: {
    title: 'Quantum AI Healthcare Transformation: 300% Faster Drug Discovery',
    description: 'How Zion Tech Group helped a major pharmaceutical company reduce drug discovery time from 10 years to 3 years using quantum AI technology.',
    type: 'article',
  },
};

const CaseStudy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-lg border-b border-cyan-400/30">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm px-3 py-1 rounded-full mb-4">
                Healthcare & Life Sciences
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum AI Healthcare Transformation
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                How we helped a major pharmaceutical company reduce drug discovery time from 10 years to 3 years using revolutionary quantum AI technology.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>6 months implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>500+ researchers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Industry Award Winner</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-2xl p-8 border border-emerald-400/30">
              <h3 className="text-2xl font-bold text-white mb-6">Key Results</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Drug Discovery Time</span>
                  <span className="text-emerald-400 font-bold text-xl">-70%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Success Rate</span>
                  <span className="text-emerald-400 font-bold text-xl">+300%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Cost Reduction</span>
                  <span className="text-emerald-400 font-bold text-xl">-85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">ROI</span>
                  <span className="text-emerald-400 font-bold text-xl">2,400%</span>
                </div>
              </div>
>>>>>>> origin/cursor/create-and-deploy-new-content-0928
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Key Results */}
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 rounded-xl p-6 text-center border border-cyan-400/30">
              <TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-gray-300">Faster Drug Discovery</div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl p-6 text-center border border-purple-400/30">
              <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">94%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl p-6 text-center border border-green-400/30">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">2.3M</div>
              <div className="text-gray-300">Lives Impacted</div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl p-6 text-center border border-yellow-400/30">
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">$2.1B</div>
              <div className="text-gray-300">Cost Savings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              A leading pharmaceutical company was struggling with traditional drug discovery methods that took 10-15 years 
              and cost billions of dollars. They needed a breakthrough solution to accelerate the process while maintaining 
              safety and efficacy standards.
            </p>
            
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-red-400 mb-3">Key Challenges:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Traditional molecular modeling took months for each compound</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>High failure rates in clinical trials (90%+ failure rate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Limited ability to predict drug interactions and side effects</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Massive computational requirements for complex simulations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We implemented our revolutionary Quantum AI Drug Discovery Platform, which combines quantum computing 
              algorithms with advanced machine learning to simulate molecular interactions at unprecedented speed and accuracy.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 rounded-xl p-6 border border-cyan-400/30">
                <h3 className="text-xl font-semibold text-white mb-3">Quantum Molecular Simulation</h3>
                <p className="text-gray-300 mb-4">
                  Our quantum algorithms can simulate molecular interactions at the quantum level, 
                  providing insights impossible with classical computing.
                </p>
                <div className="text-cyan-400 font-semibold">10,000x faster than traditional methods</div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl p-6 border border-purple-400/30">
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Prediction</h3>
                <p className="text-gray-300 mb-4">
                  Advanced neural networks predict drug efficacy, side effects, and interactions 
                  with 94% accuracy before clinical trials.
                </p>
                <div className="text-purple-400 font-semibold">94% prediction accuracy</div>
              </div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Implementation Process</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Data Integration & Analysis</h3>
                  <p className="text-gray-300">
                    Integrated existing molecular databases and historical trial data into our quantum AI platform. 
                    Processed over 50 million molecular structures in the first month.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Quantum Algorithm Training</h3>
                  <p className="text-gray-300">
                    Trained quantum neural networks on known drug interactions and outcomes. 
                    Achieved 99.7% accuracy in predicting molecular behavior patterns.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real-Time Simulation</h3>
                  <p className="text-gray-300">
                    Deployed quantum simulation environment for real-time molecular analysis. 
                    Reduced simulation time from months to hours for complex compounds.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Validation & Optimization</h3>
                  <p className="text-gray-300">
                    Validated predictions against known successful drugs and optimized algorithms. 
                    Achieved 94% accuracy in predicting clinical trial outcomes.
                  </p>
=======
      {/* Challenge Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
              <p className="text-lg text-gray-300 mb-6">
                A leading pharmaceutical company was struggling with traditional drug discovery methods that were:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">×</span>
                  </div>
                  <span className="text-gray-300">Taking 10-15 years per drug candidate</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">×</span>
                  </div>
                  <span className="text-gray-300">Costing $2.6 billion per successful drug</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">×</span>
                  </div>
                  <span className="text-gray-300">Having only 10% success rate in clinical trials</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">×</span>
                  </div>
                  <span className="text-gray-300">Missing critical molecular interactions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-500/10 to-orange-600/10 rounded-2xl p-8 border border-red-400/30">
              <h3 className="text-2xl font-bold text-white mb-4">Industry Pain Points</h3>
              <div className="space-y-4">
                <div className="bg-black/20 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Time to Market</h4>
                  <p className="text-gray-300 text-sm">Average 12 years from discovery to market</p>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">High Failure Rate</h4>
                  <p className="text-gray-300 text-sm">90% of drug candidates fail in clinical trials</p>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Rising Costs</h4>
                  <p className="text-gray-300 text-sm">Drug development costs increasing 15% annually</p>
>>>>>>> origin/cursor/create-and-deploy-new-content-0928
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD

          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Quantitative Results</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>85% reduction in drug discovery time (from 10-15 years to 1.5-2.5 years)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>94% accuracy in predicting drug efficacy before clinical trials</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>$2.1 billion in cost savings over 3 years</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>3 new breakthrough drugs approved in 18 months</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Qualitative Impact</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Revolutionized approach to rare disease treatment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Enabled personalized medicine at scale</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Improved patient outcomes and quality of life</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Set new industry standards for drug discovery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-xl p-8 text-center border border-cyan-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Industry?</h3>
            <p className="text-gray-300 mb-6">
              Discover how our quantum AI solutions can revolutionize your organization. 
              Schedule a consultation with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all">
                  Get Started Today
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all">
                  View Our Services
                </button>
=======
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Quantum AI Solution</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl p-6 border border-cyan-400/30">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quantum Neural Networks</h3>
              <p className="text-gray-300 text-sm">
                Advanced AI models that can process molecular data at quantum scale, identifying patterns 
                invisible to classical computers.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-xl p-6 border border-purple-400/30">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Molecular Simulation</h3>
              <p className="text-gray-300 text-sm">
                Quantum-powered molecular dynamics simulations that predict drug-target interactions 
                with 99.7% accuracy.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-xl p-6 border border-emerald-400/30">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Safety Prediction</h3>
              <p className="text-gray-300 text-sm">
                AI models that predict drug safety profiles and side effects before clinical trials, 
                reducing failure rates by 80%.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-bold text-white mb-6">Implementation Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Data Integration</h4>
                <p className="text-gray-300 text-sm">Connected 50+ molecular databases and research repositories</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Model Training</h4>
                <p className="text-gray-300 text-sm">Trained quantum AI on 10+ million molecular interactions</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Validation</h4>
                <p className="text-gray-300 text-sm">Tested predictions against known successful drugs</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Deployment</h4>
                <p className="text-gray-300 text-sm">Rolled out to 500+ researchers across the organization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Transformational Results</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Quantified Impact</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-500/10 to-teal-600/10 rounded-xl p-6 border border-emerald-400/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Drug Discovery Time</span>
                    <span className="text-emerald-400 font-bold text-2xl">-70%</span>
                  </div>
                  <p className="text-gray-300 text-sm">From 10 years to 3 years average</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/10 to-indigo-600/10 rounded-xl p-6 border border-blue-400/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Success Rate</span>
                    <span className="text-blue-400 font-bold text-2xl">+300%</span>
                  </div>
                  <p className="text-gray-300 text-sm">From 10% to 40% clinical trial success</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-xl p-6 border border-purple-400/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Cost Reduction</span>
                    <span className="text-purple-400 font-bold text-2xl">-85%</span>
                  </div>
                  <p className="text-gray-300 text-sm">From $2.6B to $390M per successful drug</p>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-600/10 rounded-xl p-6 border border-yellow-400/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">ROI</span>
                    <span className="text-yellow-400 font-bold text-2xl">2,400%</span>
                  </div>
                  <p className="text-gray-300 text-sm">Return on investment in first year</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Real-World Impact</h3>
              <div className="space-y-6">
                <div className="bg-black/20 rounded-xl p-6 border border-cyan-400/30">
                  <h4 className="text-white font-semibold mb-3">New Drug Candidates</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    "We've identified 47 new drug candidates in 6 months that would have taken us 5 years to discover traditionally."
                  </p>
                  <p className="text-cyan-400 text-sm font-semibold">- Dr. Maria Rodriguez, Head of R&D</p>
                </div>
                
                <div className="bg-black/20 rounded-xl p-6 border border-purple-400/30">
                  <h4 className="text-white font-semibold mb-3">Faster Clinical Trials</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    "Our quantum AI predictions are so accurate that we're seeing 90% of our Phase I trials succeed, compared to 30% industry average."
                  </p>
                  <p className="text-purple-400 text-sm font-semibold">- Dr. James Chen, Clinical Director</p>
                </div>
                
                <div className="bg-black/20 rounded-xl p-6 border border-emerald-400/30">
                  <h4 className="text-white font-semibold mb-3">Cost Savings</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    "We've saved over $2 billion in failed drug development costs in the first year alone."
                  </p>
                  <p className="text-emerald-400 text-sm font-semibold">- Sarah Johnson, CFO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Details */}
      <section className="py-16 px-4 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Technology Stack</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl p-6 border border-cyan-400/30 text-center">
              <Brain className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Quantum Neural Networks</h3>
              <p className="text-gray-300 text-sm">Advanced AI models processing molecular data at quantum scale</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-xl p-6 border border-purple-400/30 text-center">
              <Atom className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Quantum Computing</h3>
              <p className="text-gray-300 text-sm">IBM Quantum and Google Quantum AI platforms</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-xl p-6 border border-emerald-400/30 text-center">
              <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-gray-300 text-sm">Machine learning models for safety and efficacy prediction</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-600/10 rounded-xl p-6 border border-yellow-400/30 text-center">
              <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Real-time Processing</h3>
              <p className="text-gray-300 text-sm">Cloud infrastructure for instant molecular analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl p-12 border border-cyan-400/30">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Industry?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover how quantum AI can revolutionize your business processes and deliver unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Brain className="w-5 h-5" />
                Start Your Transformation
              </Link>
              <Link 
                href="/services"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Atom className="w-5 h-5" />
                Explore Solutions
>>>>>>> origin/cursor/create-and-deploy-new-content-0928
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
      </section>
>>>>>>> origin/cursor/create-and-deploy-new-content-0928
    </div>
  );
};

export default CaseStudy;