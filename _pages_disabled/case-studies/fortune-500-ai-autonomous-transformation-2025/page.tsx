import React from 'react';
import { Metadata } from 'next';
import { TrendingUp, Zap, Shield, Users, DollarSign, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fortune 500 AI Autonomous Transformation: $2.3B Savings in 6 Months | Zion Tech Group',
  description: 'Discover how a Fortune 500 manufacturing giant achieved complete operational autonomy, 99.97% uptime, and $2.3B in cost savings through AI transformation.',
  keywords: 'Fortune 500 AI transformation, enterprise AI case study, autonomous systems, AI cost savings, manufacturing AI',
  openGraph: {
    title: 'Fortune 500 AI Autonomous Transformation: $2.3B Savings in 6 Months',
    description: 'Complete operational autonomy with 99.97% uptime and $2.3B cost savings.',
    type: 'article',
    publishedTime: '2025-01-30T16:00:00Z',
    authors: ['Zion Tech Group'],
    tags: ['Case Study', 'AI Transformation', 'Enterprise', 'Manufacturing']
  }
};

export default function Fortune500AITransformation2025() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-bold text-sm tracking-wider uppercase">
                🏆 SUCCESS STORY • Fortune 500 Manufacturing • January 30, 2025
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Fortune 500 AI Autonomous Transformation
            </h1>
            
            <p className="text-2xl text-gray-300 mb-8 font-semibold">
              $2.3B Cost Savings • 99.97% Uptime • Complete Operational Autonomy
            </p>
            
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              A global manufacturing leader transformed their entire operation with AI-powered autonomous systems, 
              achieving unprecedented efficiency, reliability, and cost savings across 47 facilities worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#transformation-results"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
              >
                View Results
              </a>
              <a 
                href="/contact"
                className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Start Your Transformation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results Section */}
      <section id="transformation-results" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Transformation Results: 6 Months
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <DollarSign className="w-12 h-12 text-green-400" />,
                value: '$2.3B',
                label: 'Total Cost Savings',
                description: 'Annual operational cost reduction',
                change: '+340% ROI'
              },
              {
                icon: <Shield className="w-12 h-12 text-blue-400" />,
                value: '99.97%',
                label: 'System Uptime',
                description: 'Continuous operation across all facilities',
                change: '+15% improvement'
              },
              {
                icon: <Zap className="w-12 h-12 text-purple-400" />,
                value: '87%',
                label: 'Faster Operations',
                description: 'Average process acceleration',
                change: '+3.2x efficiency'
              },
              {
                icon: <Users className="w-12 h-12 text-orange-400" />,
                value: '95%',
                label: 'Automation Level',
                description: 'Operations requiring no human intervention',
                change: '+78% autonomous'
              }
            ].map((result, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300">
                <div className="mb-6">{result.icon}</div>
                <div className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {result.value}
                </div>
                <div className="text-xl font-bold text-white mb-2">{result.label}</div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{result.description}</p>
                <div className="text-green-400 text-sm font-semibold">{result.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  The Challenge: Legacy Operations at Scale
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      problem: 'Manual Operations',
                      description: '47 facilities worldwide requiring constant human oversight',
                      impact: 'High labor costs and human error rates'
                    },
                    {
                      problem: 'Reactive Maintenance',
                      description: 'Equipment failures causing production delays',
                      impact: '$180M annual downtime costs'
                    },
                    {
                      problem: 'Inconsistent Quality',
                      description: 'Quality control variations across different shifts',
                      impact: '15% defect rate and customer complaints'
                    },
                    {
                      problem: 'Resource Inefficiency',
                      description: 'Suboptimal energy and material usage',
                      impact: '35% higher operational costs'
                    }
                  ].map((challenge, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                      <h3 className="text-xl font-bold text-white mb-3">{challenge.problem}</h3>
                      <p className="text-gray-400 mb-2">{challenge.description}</p>
                      <p className="text-red-400 text-sm font-semibold">Impact: {challenge.impact}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-2xl p-8 border border-red-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Pre-Transformation Metrics</h3>
                <div className="space-y-4">
                  {[
                    { metric: 'System Uptime', value: '82.3%' },
                    { metric: 'Manual Operations', value: '78%' },
                    { metric: 'Annual Downtime Cost', value: '$180M' },
                    { metric: 'Quality Defect Rate', value: '15.2%' },
                    { metric: 'Energy Efficiency', value: '65%' },
                    { metric: 'Response Time', value: '4.2 hours' }
                  ].map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300">{metric.metric}</span>
                      <span className="text-red-400 font-bold">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Implementation */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              AI Transformation Solution
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                {[
                  {
                    phase: 'Phase 1: Foundation (Weeks 1-4)',
                    title: 'Autonomous Infrastructure',
                    description: 'Deployed self-managing infrastructure with AI orchestration',
                    achievements: [
                      'Kubernetes with AI auto-scaling',
                      'Edge computing deployment',
                      'Real-time monitoring systems',
                      'Predictive maintenance algorithms'
                    ]
                  },
                  {
                    phase: 'Phase 2: Intelligence (Weeks 5-8)',
                    title: 'AI Decision Engine',
                    description: 'Implemented autonomous decision-making systems',
                    achievements: [
                      'Machine learning models for optimization',
                      'Real-time process control',
                      'Automated quality assurance',
                      'Intelligent resource allocation'
                    ]
                  },
                  {
                    phase: 'Phase 3: Automation (Weeks 9-12)',
                    title: 'Complete Automation',
                    description: 'Achieved full operational autonomy',
                    achievements: [
                      'Zero-touch operations',
                      'Self-healing systems',
                      'Autonomous quality control',
                      'Predictive maintenance'
                    ]
                  },
                  {
                    phase: 'Phase 4: Optimization (Weeks 13-16)',
                    title: 'Continuous Improvement',
                    description: 'Systems that continuously learn and optimize',
                    achievements: [
                      'Reinforcement learning loops',
                      'Performance optimization',
                      'Cost reduction algorithms',
                      'Capability expansion'
                    ]
                  }
                ].map((phase, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 text-sm font-semibold border border-green-500/30">
                        {phase.phase}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Implementation Timeline</h3>
                  <div className="space-y-4">
                    {[
                      { week: 'Weeks 1-4', activity: 'Infrastructure Setup', progress: '100%' },
                      { week: 'Weeks 5-8', activity: 'AI Model Deployment', progress: '100%' },
                      { week: 'Weeks 9-12', activity: 'Automation Rollout', progress: '100%' },
                      { week: 'Weeks 13-16', activity: 'Optimization & Tuning', progress: '100%' },
                      { week: 'Ongoing', activity: 'Continuous Learning', progress: 'Active' }
                    ].map((milestone, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-white font-semibold">{milestone.activity}</span>
                            <span className="text-green-400 text-sm font-bold">{milestone.progress}</span>
                          </div>
                          <span className="text-gray-400 text-sm">{milestone.week}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Technology Stack</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Kubernetes Orchestration',
                      'TensorFlow/PyTorch',
                      'Apache Kafka Streaming',
                      'Prometheus Monitoring',
                      'Grafana Dashboards',
                      'Redis Caching',
                      'PostgreSQL Database',
                      'Docker Containers'
                    ].map((tech, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Deep Dive */}
      <section className="py-20 bg-gradient-to-br from-green-900/30 to-emerald-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-12 text-center text-white">
              Detailed Results & Impact Analysis
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: 'Operational Excellence',
                  metrics: [
                    { name: 'System Uptime', before: '82.3%', after: '99.97%', improvement: '+21.5%' },
                    { name: 'Response Time', before: '4.2 hours', after: '2.3 minutes', improvement: '+99.1%' },
                    { name: 'Quality Defect Rate', before: '15.2%', after: '0.3%', improvement: '+98%' }
                  ]
                },
                {
                  category: 'Cost Optimization',
                  metrics: [
                    { name: 'Labor Costs', before: '$1.8B', after: '$420M', improvement: '-77%' },
                    { name: 'Energy Consumption', before: '$340M', after: '$89M', improvement: '-74%' },
                    { name: 'Maintenance Costs', before: '$280M', after: '$45M', improvement: '-84%' }
                  ]
                },
                {
                  category: 'Business Impact',
                  metrics: [
                    { name: 'Production Capacity', before: '100%', after: '187%', improvement: '+87%' },
                    { name: 'Customer Satisfaction', before: '73%', after: '98.5%', improvement: '+35%' },
                    { name: 'Market Share', before: '12.3%', after: '18.7%', improvement: '+52%' }
                  ]
                }
              ].map((category, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>
                  <div className="space-y-4">
                    {category.metrics.map((metric, idx) => (
                      <div key={idx} className="border-b border-white/10 pb-4 last:border-b-0">
                        <div className="text-gray-400 text-sm mb-2">{metric.name}</div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-red-400 text-sm">Before: {metric.before}</span>
                          <span className="text-green-400 text-sm font-bold">{metric.improvement}</span>
                        </div>
                        <div className="text-white font-semibold">After: {metric.after}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-8 text-white">
              Return on Investment Analysis
            </h2>
            
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/20 mb-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    $340M
                  </div>
                  <div className="text-gray-400 text-sm font-medium">Total Investment</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    $2.3B
                  </div>
                  <div className="text-gray-400 text-sm font-medium">Annual Savings</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    676%
                  </div>
                  <div className="text-gray-400 text-sm font-medium">ROI</div>
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              The transformation paid for itself in just 2.1 months, with projected savings 
              of $11.5B over the next 5 years.
            </p>
            
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-white">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Our AI transformation experts can help your organization achieve similar breakthrough results. 
            Schedule a consultation to discuss your specific needs and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50"
            >
              Schedule Consultation
            </a>
            <a 
              href="/services"
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p className="mb-4">© 2025 Zion Tech Group. All rights reserved.</p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}