import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Users, 
  Award,
  Sparkles,
  Video,
  Camera,
  Mic,
  Edit,
  Download,
  Share2,
  BarChart3,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Laptop
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIVideoGeneratorPage = () => {
  const features = [
    {
      title: "AI-Powered Script Generation",
      description: "Generate engaging video scripts from text prompts using advanced AI language models",
      icon: <Edit className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Multi-Language Voice Synthesis",
      description: "Convert text to natural-sounding speech in 50+ languages with emotion control",
      icon: <Mic className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Smart Video Editing",
      description: "Automatically edit videos with AI-powered scene detection and transitions",
      icon: <Video className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Brand Customization",
      description: "Apply your brand colors, logos, and style templates automatically",
      icon: <Sparkles className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Social Media Optimization",
      description: "Auto-generate videos optimized for different social media platforms",
      icon: <Share2 className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Analytics Dashboard",
      description: "Track video performance with detailed analytics and insights",
      icon: <BarChart3 className="w-6 h-6" />,
      price: "Included"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses and content creators",
      features: [
        "10 video generations per month",
        "HD quality (1080p)",
        "5 minutes max per video",
        "Basic templates",
        "Email support",
        "Watermark included"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for marketing agencies and growing businesses",
      features: [
        "50 video generations per month",
        "4K quality available",
        "15 minutes max per video",
        "Premium templates",
        "Priority support",
        "No watermark",
        "Brand customization",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with high-volume needs",
      features: [
        "Unlimited video generations",
        "4K quality included",
        "60 minutes max per video",
        "Custom templates",
        "24/7 phone support",
        "White-label options",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Digital Marketing Pro",
      role: "Marketing Director",
      content: "Zion AI Video Generator has revolutionized our content creation. We've increased our video output by 300% while reducing production time by 80%.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "EduTech Solutions",
      role: "Content Manager",
      content: "The AI script generation is incredibly accurate and the voice synthesis sounds natural. Our educational videos have never been better.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      company: "StartupHub",
      role: "Founder",
      content: "As a startup, we needed professional videos without the budget. Zion AI Video Generator gave us enterprise-quality content at a fraction of the cost.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  const useCases = [
    {
      title: "Marketing Videos",
      description: "Create compelling product demos, explainer videos, and promotional content",
      icon: <Target className="w-6 h-6" />,
      examples: ["Product launches", "Social media ads", "Email campaigns"]
    },
    {
      title: "Educational Content",
      description: "Generate training videos, tutorials, and educational materials",
      icon: <BookOpen className="w-6 h-6" />,
      examples: ["Online courses", "How-to guides", "Training materials"]
    },
    {
      title: "Corporate Communications",
      description: "Create internal announcements, presentations, and company updates",
      icon: <Building className="w-6 h-6" />,
      examples: ["CEO messages", "HR announcements", "Company updates"]
    },
    {
      title: "Social Media Content",
      description: "Generate engaging content for all major social media platforms",
      icon: <Share2 className="w-6 h-6" />,
      examples: ["Instagram stories", "TikTok videos", "LinkedIn posts"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Video Generator - Create Professional Videos with AI | Zion Tech Group"
        description="Transform your ideas into professional videos with our AI-powered video generator. Create marketing videos, educational content, and social media posts in minutes. Starting at $29/month."
        keywords="AI video generator, video creation, automated video, marketing videos, content creation, video editing, AI voice synthesis, video templates"
        canonical="https://ziontechgroup.com/zion-ai-video-generator"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Video Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Video Generator
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your ideas into professional videos in minutes. Our AI-powered platform creates engaging, 
            high-quality videos for marketing, education, and social media with just a text prompt.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Start Creating Videos
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Video className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10,000+</div>
              <div className="text-gray-300">Videos Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4K</div>
              <div className="text-gray-300">Quality</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create professional videos with artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-cyan-400 text-sm">{feature.price}</p>
                  </div>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Perfect For Every Use Case
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From marketing to education, our AI video generator adapts to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx}>• {example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your video creation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Loved by Content Creators
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Video Generator
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Amazing Videos?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of creators who are already using AI to produce professional videos in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Start Your Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Video className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIVideoGeneratorPage;