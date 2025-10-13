import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Stethoscope, 
  FileText, 
  Zap, 
  Eye, 
  CheckCircle, 
  Clock, 
  Brain,
  ArrowRight,
  Star,
  Shield,
  Award,
  Activity,
  Users,
  BarChart3,
  Target
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import FuturisticText from '../components/FuturisticText';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIHealthcareAssistantPage = () => {
  const features = [
    {
      title: "Patient Monitoring",
      description: "AI-powered real-time patient monitoring with predictive health analytics and early warning systems",
      icon: <Activity className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Diagnostic Support",
      description: "Advanced diagnostic assistance with symptom analysis and treatment recommendations",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Medical Records",
      description: "Intelligent medical record management with automated data extraction and analysis",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Treatment Planning",
      description: "AI-driven treatment plan optimization with personalized care recommendations",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Clinic",
      price: "$399",
      period: "month",
      description: "Perfect for small clinics",
      features: [
        "Up to 50 patients",
        "Basic monitoring",
        "Standard analytics",
        "Email support",
        "Core integrations"
      ],
      popular: false
    },
    {
      name: "Hospital",
      price: "$1,299",
      period: "month",
      description: "Most popular for hospitals",
      features: [
        "Up to 500 patients",
        "Advanced AI features",
        "Real-time monitoring",
        "Priority support",
        "Custom workflows",
        "API access",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "Healthcare System",
      price: "$3,999",
      period: "month",
      description: "For large healthcare systems",
      features: [
        "Unlimited patients",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "Custom development",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "Metropolitan Medical Center",
      role: "Chief Medical Officer",
      content: "Zion AI Healthcare Assistant has revolutionized our patient care. Early detection capabilities have saved countless lives.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      company: "Regional Healthcare Group",
      role: "Director of Operations",
      content: "The diagnostic support is incredibly accurate. It has significantly improved our diagnostic accuracy and patient outcomes.",
      rating: 5
    },
    {
      name: "Dr. Lisa Rodriguez",
      company: "Community Health Clinic",
      role: "Medical Director",
      content: "The treatment planning AI has transformed how we approach patient care. Personalized recommendations are game-changing.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Healthcare Assistant - Intelligent Medical Technology | Zion Tech Group"
        description="Transform healthcare delivery with AI-powered patient monitoring, diagnostic support, and treatment planning. Improve patient outcomes and operational efficiency."
        keywords="AI healthcare assistant, medical AI, patient monitoring, diagnostic support, healthcare technology, medical automation"
        canonical="https://ziontechgroup.com/zion-ai-healthcare-assistant"
      />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <ResponsiveContainer className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 mb-6">
              <Heart className="w-4 h-4 text-red-400 mr-2" />
              <span className="text-red-400 text-sm font-medium">AI-Powered Healthcare Technology</span>
            </div>
            
            <FuturisticText
              variant="display"
              size="6xl"
              gradient={true}
              animated={true}
              glow={true}
              neon={true}
              className="mb-6 leading-tight"
            >
              Zion AI Healthcare Assistant
            </FuturisticText>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
              Revolutionize healthcare delivery with intelligent AI automation. Enhance patient monitoring, 
              improve diagnostic accuracy, and optimize treatment outcomes with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={Zap}
                iconPosition="left"
                glowColor="red"
                neon={true}
                animated={true}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={Eye}
                iconPosition="left"
                glowColor="pink"
                neon={true}
                animated={true}
              >
                Watch Demo
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Healthcare AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive healthcare technology solutions powered by artificial intelligence
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  glowColor={index % 2 === 0 ? 'red' : 'blue'}
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className="cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Healthcare-Focused Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your healthcare organization size and needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard
                  key={index}
                  glowColor={plan.popular ? 'red' : 'blue'}
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className={`relative ${plan.popular ? 'ring-2 ring-red-500' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">/{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <FuturisticButton
                    href="/contact"
                    variant={plan.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                    glowColor={plan.popular ? "red" : "blue"}
                    neon={true}
                    animated={true}
                  >
                    Get Started
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Healthcare Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what healthcare leaders say about Zion AI Healthcare Assistant
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-pink-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of healthcare professionals already using Zion AI Healthcare Assistant to improve patient care.
              Start your free trial today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                glowColor="red"
                neon={true}
                animated={true}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={Eye}
                iconPosition="right"
                glowColor="pink"
                neon={true}
                animated={true}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ZionAIHealthcareAssistantPage;