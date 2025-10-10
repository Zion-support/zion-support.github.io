'use client';
import React from 'react';
import { Users, Search, FileText, BarChart, Clock, CheckCircle, Star, ArrowRight, Brain, Target, Zap, Shield } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AIRecruitmentAssistantPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Recruitment Assistant - Zion Tech Group"
        description="Revolutionary AI-powered recruitment platform that automates candidate screening, reduces hiring time by 60%, and improves candidate quality. Advanced AI for talent acquisition and HR optimization."
        keywords={['AI recruitment', 'talent acquisition', 'candidate screening', 'HR automation', 'recruitment AI', 'hiring platform', 'talent management']}
        canonicalUrl="https://ziontechgroup.com/ai-recruitment-assistant"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Recruitment Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your hiring process with AI-powered recruitment that screens candidates, conducts interviews, and finds the perfect match 10x faster than traditional methods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="cyber-button">
                  📞 Call: (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Get Demo
                </a>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="cyber-card hologram-card p-6 text-center">
                <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">60% Faster Hiring</h3>
                <p className="text-gray-300 text-sm">Reduce time-to-hire from weeks to days with AI automation</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">95% Match Accuracy</h3>
                <p className="text-gray-300 text-sm">AI finds candidates that perfectly match your requirements</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <BarChart className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">$50K+ Cost Savings</h3>
                <p className="text-gray-300 text-sm">Reduce recruitment costs and improve ROI significantly</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <Shield className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Bias-Free Screening</h3>
                <p className="text-gray-300 text-sm">Eliminate unconscious bias with objective AI evaluation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">
              AI-Powered Recruitment Features
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <Search className="w-8 h-8 text-cyan-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Smart Candidate Sourcing</h3>
                      <p className="text-gray-300">AI searches 50+ job boards, LinkedIn, and professional networks to find the best candidates for your roles.</p>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <FileText className="w-8 h-8 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Automated Resume Screening</h3>
                      <p className="text-gray-300">AI analyzes resumes, cover letters, and portfolios to identify top candidates in seconds.</p>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <Brain className="w-8 h-8 text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">AI Video Interviews</h3>
                      <p className="text-gray-300">Conduct automated video interviews with AI that asks relevant questions and evaluates responses.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <BarChart className="w-8 h-8 text-yellow-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Predictive Analytics</h3>
                      <p className="text-gray-300">Predict candidate success, cultural fit, and retention likelihood using advanced ML algorithms.</p>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <Zap className="w-8 h-8 text-red-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Automated Scheduling</h3>
                      <p className="text-gray-300">AI coordinates interview schedules, sends reminders, and manages the entire interview process.</p>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <Users className="w-8 h-8 text-blue-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Talent Pipeline Management</h3>
                      <p className="text-gray-300">Build and maintain a database of qualified candidates for future opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">
              How AI Recruitment Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-cyan-400">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Job Analysis</h3>
                <p className="text-gray-300">AI analyzes job descriptions and requirements to understand ideal candidate profiles.</p>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-400">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Candidate Search</h3>
                <p className="text-gray-300">AI searches multiple platforms to find and rank potential candidates.</p>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-400">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI Screening</h3>
                <p className="text-gray-300">Automated screening evaluates resumes, skills, and cultural fit.</p>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-orange-400">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Final Selection</h3>
                <p className="text-gray-300">Present top candidates with detailed analysis and recommendations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">
              Perfect for Every Industry
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Technology</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Software developers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Data scientists</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>DevOps engineers</span>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Healthcare</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Medical professionals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Nurses & technicians</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Administrative staff</span>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Finance</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Financial analysts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Accountants</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Risk managers</span>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Sales & Marketing</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Sales representatives</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Marketing specialists</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Account managers</span>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Manufacturing</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Production managers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Quality engineers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Technicians</span>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Education</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Teachers & professors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Administrators</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Support staff</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">
              Pricing Plans
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Startup</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Up to 10 job postings/month</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Basic AI screening</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Standard analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Email support</span>
                  </li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-8 border-2 border-cyan-400">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Professional</h3>
                  <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">Most Popular</span>
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$599/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Up to 50 job postings/month</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Advanced AI screening</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">AI video interviews</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Predictive analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Priority support</span>
                  </li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Unlimited job postings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Custom AI models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Advanced integrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Dedicated support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">White-label options</span>
                  </li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Revolutionize Your Hiring?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 300+ companies already using our AI Recruitment Assistant to find better candidates faster and reduce hiring costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button">
                📞 Call: (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                📧 Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIRecruitmentAssistantPage;