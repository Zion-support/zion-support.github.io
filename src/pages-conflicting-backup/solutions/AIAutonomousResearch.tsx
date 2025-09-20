import React from 'react';
import { Brain, Zap, Target, TrendingUp, Shield, Users, Globe, Cpu, Database, ArrowRight, Lightbulb, BarChart3 } from 'lucide-react';

const AIAutonomousResearch: React.FC = () => {
  const researchFeatures = [
    {
      icon: Brain,
      title: "Autonomous Research Systems",
      description: "AI systems that independently conduct research and generate insights",
      benefits: ["24/7 research operation", "Data-driven insights", "Pattern recognition", "Hypothesis generation"]
    },
    {
      icon: Zap,
      title: "Automated Experimentation",
      description: "Self-running experiments with continuous optimization and learning",
      benefits: ["Parameter optimization", "Result analysis", "Iterative improvement", "Efficiency gains"]
    },
    {
      icon: Target,
      title: "Predictive Modeling",
      description: "Advanced AI models that predict research outcomes and trends",
      benefits: ["Outcome prediction", "Risk assessment", "Resource optimization", "Strategic planning"]
    },
    {
      icon: Shield,
      title: "Data Security & Privacy",
      description: "Secure handling of sensitive research data with privacy protection",
      benefits: ["Data encryption", "Access control", "Compliance management", "Audit trails"]
    },
    {
      icon: Users,
      title: "Collaborative Research",
      description: "AI-facilitated collaboration across research teams and institutions",
      benefits: ["Team coordination", "Knowledge sharing", "Resource pooling", "Cross-disciplinary insights"]
    },
    {
      icon: Globe,
      title: "Global Research Network",
      description: "Connect with research institutions worldwide through AI-powered platforms",
      benefits: ["Global collaboration", "Resource sharing", "Cultural diversity", "Innovation acceleration"]
    }
  ];

  const applications = [
    {
      title: "Scientific Research",
      description: "Automated hypothesis testing and experimental design",
      icon: Lightbulb
    },
    {
      title: "Medical Research",
      description: "Drug discovery and clinical trial optimization",
      icon: Shield
    },
    {
      title: "Academic Research",
      description: "Literature review and knowledge synthesis automation",
      icon: BookOpen
    },
    {
      title: "Market Research",
      description: "Consumer behavior analysis and trend prediction",
      icon: BarChart3
    },
    {
      title: "Technology Research",
      description: "Innovation tracking and technology forecasting",
      icon: Cpu
    },
    {
      title: "Environmental Research",
      description: "Climate modeling and sustainability analysis",
      icon: Globe
    }
  ];

  const benefits = [
    "Accelerated research timelines and faster discoveries",
    "Reduced research costs and resource requirements",
    "Enhanced accuracy and reproducibility of results",
    "24/7 autonomous operation and monitoring",
    "Cross-disciplinary insights and innovation",
    "Global collaboration and knowledge sharing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI Autonomous Research
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Research That Never
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Sleeps</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your research capabilities with AI-powered autonomous systems 
              that work around the clock to accelerate discoveries and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Features
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Features */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Autonomous Research Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI capabilities that enable truly autonomous research 
              across all domains and disciplines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Research Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how autonomous AI research systems are transforming 
              various fields and accelerating discoveries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Autonomous Research?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                AI-powered autonomous research systems provide unprecedented opportunities 
                to accelerate discoveries and gain competitive advantages.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="text-center">
                <Lightbulb className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Research Innovation</h3>
                <p className="text-gray-300 mb-6">
                  We're at the forefront of AI autonomous research technology, 
                  enabling organizations to discover with unprecedented speed.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Advanced AI algorithms</p>
                  <p>• Autonomous discovery</p>
                  <p>• Continuous learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how AI autonomous research solutions can transform your 
            research capabilities and accelerate discoveries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </a>
            <a
              href="/solutions"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Icon components
const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

export default AIAutonomousResearch;