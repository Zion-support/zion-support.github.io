import React from 'react';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star,
  ArrowRight,
  Lock,
  Clock,
  Award
} from 'lucide-react';

export function FeatureHighlights() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence that learns and adapts to your business needs",
      benefits: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      color: "from-zion-cyan to-zion-blue"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security protocols ensuring your data and systems are always protected",
      benefits: ["Zero-Trust Architecture", "24/7 Monitoring", "Compliance Ready"],
      color: "from-zion-purple to-zion-cyan"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second response times and 99.9% uptime guarantee",
      benefits: ["Global CDN", "Edge Computing", "Auto-scaling"],
      color: "from-zion-blue to-zion-purple"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Deploy anywhere with our worldwide infrastructure and local compliance support",
      benefits: ["Multi-Region", "Local Partners", "24/7 Support"],
      color: "from-zion-cyan to-zion-purple"
    }
  ];

  const highlights = [
    {
      icon: Users,
      title: "500+ Global Clients",
      description: "Trusted by leading companies worldwide",
      color: "text-zion-cyan"
    },
    {
      icon: TrendingUp,
      title: "99.9% Success Rate",
      description: "Proven track record of project success",
      color: "text-zion-purple"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock expert assistance",
      color: "text-zion-blue"
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "Recognized for innovation and excellence",
      color: "text-zion-cyan"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 cyber-grid"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="block text-gradient"> Zion Tech Group</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with proven expertise to deliver 
            solutions that transform businesses and drive innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-zion-blue-dark/20 to-zion-slate-dark/20 border border-zion-blue-light/20 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              {/* Icon */}
              <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                {feature.title}
              </h3>
              <p className="text-zion-slate-light mb-6 text-lg leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <div className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span className="text-zion-slate-light">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="bg-gradient-to-r from-zion-blue-dark/30 to-zion-purple-dark/30 border border-zion-blue-light/20 rounded-2xl p-8 backdrop-blur-sm mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className={`w-8 h-8 ${highlight.color}`} />
                </div>
                <div className="text-2xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {highlight.title}
                </div>
                <div className="text-zion-slate-light text-sm">
                  {highlight.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-zion-cyan font-bold text-2xl">TechCorp</div>
            <div className="text-zion-purple font-bold text-2xl">InnovateAI</div>
            <div className="text-zion-blue font-bold text-2xl">DataFlow</div>
            <div className="text-zion-cyan font-bold text-2xl">CloudTech</div>
            <div className="text-zion-purple font-bold text-2xl">SecureNet</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-zion-blue-dark/30 to-zion-purple-dark/30 border border-zion-blue-light/20 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-zion-slate-light mb-8 text-lg max-w-2xl mx-auto">
              Join thousands of businesses already transforming their operations with our cutting-edge 
              technology solutions. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-glow">
                <Star className="w-5 h-5 mr-2" />
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                <Lock className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}