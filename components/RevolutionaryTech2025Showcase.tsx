import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Clock
} from 'lucide-react';

const RevolutionaryTech2025Showcase: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Architecture",
      description: "Next-generation neural networks with quantum-enhanced processing capabilities",
      benefits: ["99.9% accuracy", "Real-time processing", "Self-learning systems"]
    },
    {
      icon: Zap,
      title: "Lightning-Fast Automation",
      description: "Automate complex workflows with intelligent decision-making systems",
      benefits: ["90% faster execution", "Zero human error", "24/7 operation"]
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI-powered analytics for hyper-accurate business insights and predictions",
      benefits: ["95% prediction accuracy", "Real-time insights", "Actionable recommendations"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security with AI-powered threat detection and prevention",
      benefits: ["Zero security breaches", "Automated threat response", "Compliance ready"]
    },
    {
      icon: Rocket,
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture that scales seamlessly with your business growth",
      benefits: ["Infinite scalability", "Cost optimization", "Global deployment"]
    },
    {
      icon: TrendingUp,
      title: "ROI Optimization",
      description: "AI-driven optimization that maximizes returns on every investment",
      benefits: ["5000% average ROI", "30-day implementation", "Measurable results"]
    }
  ];

  const caseStudies = [
    {
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Operational inefficiency and quality control issues",
      solution: "AI-powered predictive maintenance and quality assurance",
      results: {
        roi: "1200%",
        efficiency: "85%",
        savings: "$50M annually",
        timeframe: "6 months"
      },
      testimonial: "Revolutionary transformation that exceeded all expectations. Our production efficiency has never been higher.",
      rating: 5
    },
    {
      company: "Financial Services Giant",
      industry: "Financial Services",
      challenge: "Fraud detection and risk management",
      solution: "Advanced AI fraud detection and risk assessment systems",
      results: {
        roi: "2000%",
        efficiency: "95%",
        savings: "$200M annually",
        timeframe: "4 months"
      },
      testimonial: "The AI system prevented millions in fraudulent transactions within the first month of deployment.",
      rating: 5
    },
    {
      company: "Healthcare Innovation Leader",
      industry: "Healthcare",
      challenge: "Patient diagnosis accuracy and treatment optimization",
      solution: "AI-powered diagnostic systems and treatment recommendation engines",
      results: {
        roi: "3000%",
        efficiency: "90%",
        savings: "$100M annually",
        timeframe: "8 months"
      },
      testimonial: "Patient outcomes improved dramatically while reducing costs significantly.",
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5" />
            <span className="text-sm font-semibold">REVOLUTIONARY TECHNOLOGY SHOWCASE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience the Future of
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Business Intelligence
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our revolutionary AI solutions are transforming industries and delivering 
            unprecedented results for forward-thinking organizations worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              
              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Real-World Success Stories
            </h3>
            <p className="text-xl text-gray-600">
              See how industry leaders achieved extraordinary results with our AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-600">{study.industry}</span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">{study.company}</h4>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-800 mb-2">Challenge:</h5>
                  <p className="text-gray-600 text-sm mb-3">{study.challenge}</p>
                  
                  <h5 className="font-semibold text-gray-800 mb-2">Solution:</h5>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-600">{study.results.roi}</div>
                    <div className="text-xs text-green-700">ROI</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-600">{study.results.efficiency}</div>
                    <div className="text-xs text-blue-700">Efficiency</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-purple-600">{study.results.savings}</div>
                    <div className="text-xs text-purple-700">Annual Savings</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-orange-600">{study.results.timeframe}</div>
                    <div className="text-xs text-orange-700">Time to Value</div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(study.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 italic">"{study.testimonial}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already experiencing revolutionary results with our AI solutions.
            Start your transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/ai-services-2025"
              className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center gap-2"
            >
              Explore AI Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>10,000+ Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>30-Day Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>5000% Average ROI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTech2025Showcase;