import React from 'react';
import { Metadata } from 'next';
import { ArrowLeft, Calendar, User, Clock, Share2, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'Quantum AI Healthcare Transformation: 85% Faster Drug Discovery',
  description: 'Case study: How Zion Tech Group\'s quantum AI solutions revolutionized healthcare with 85% faster drug discovery and breakthrough treatments.',
  keywords: 'quantum AI, healthcare, drug discovery, case study, AI transformation, medical technology',
  openGraph: {
    title: 'Quantum AI Healthcare Transformation: 85% Faster Drug Discovery',
    description: 'Case study: How Zion Tech Group\'s quantum AI solutions revolutionized healthcare with 85% faster drug discovery and breakthrough treatments.',
    type: 'article',
  },
};

const CaseStudy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900">
      {/* Header */}
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Zion Tech Group</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Quantum AI Healthcare Transformation: 85% Faster Drug Discovery
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              How a leading pharmaceutical company leveraged our quantum AI platform to revolutionize drug discovery, 
              reducing development time from years to months while achieving unprecedented accuracy in molecular analysis.
            </p>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

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
                </div>
              </div>
            </div>
          </div>

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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;