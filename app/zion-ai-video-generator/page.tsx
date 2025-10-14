import React from 'react';
import { ArrowRight, CheckCircle, Star, Video, Play, Download, Share, Zap, Clock, Users, Award, Mail, Phone, Globe } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';
import FuturisticCard from '../../components/FuturisticCard';
import FuturisticButton from '../../components/FuturisticButton';
import ResponsiveContainer from '../../components/ResponsiveContainer';
import ResponsiveGrid from '../../components/ResponsiveGrid';

const ZionAIVideoGeneratorPage = () => {
  const features = [
    {
      title: "AI-Powered Video Creation",
      description: "Generate professional videos from text prompts using advanced AI models",
      icon: <Video className="w-8 h-8" />,
      details: [
        "Text-to-video generation",
        "Multiple video styles and templates",
        "Custom branding integration",
        "HD and 4K output quality"
      ]
    },
    {
      title: "Smart Content Optimization",
      description: "AI automatically optimizes video content for maximum engagement",
      icon: <Zap className="w-8 h-8" />,
      details: [
        "Automatic scene transitions",
        "Music and sound effect matching",
        "Color grading optimization",
        "Engagement prediction"
      ]
    },
    {
      title: "Multi-Platform Export",
      description: "Export videos optimized for different social media platforms",
      icon: <Share className="w-8 h-8" />,
      details: [
        "YouTube, TikTok, Instagram formats",
        "Automatic aspect ratio adjustment",
        "Platform-specific optimization",
        "Batch export capabilities"
      ]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small businesses",
      features: [
        "10 video generations per month",
        "HD quality output",
        "Basic templates",
        "Email support",
        "5GB storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for content creators and agencies",
      features: [
        "50 video generations per month",
        "4K quality output",
        "Premium templates",
        "Priority support",
        "50GB storage",
        "Custom branding",
        "Advanced editing tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with high volume needs",
      features: [
        "Unlimited video generations",
        "4K and 8K quality output",
        "All templates and styles",
        "24/7 phone support",
        "500GB storage",
        "White-label solution",
        "API access",
        "Team collaboration"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Digital Marketing Agency",
      role: "Creative Director",
      content: "Zion AI Video Generator has revolutionized our content creation process. We're producing 10x more video content with better quality than before.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Mike Rodriguez",
      company: "E-commerce Store",
      role: "Marketing Manager",
      content: "The AI understands our brand perfectly and creates videos that match our style. Our social media engagement has increased by 300%.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      company: "Tech Startup",
      role: "CEO",
      content: "This tool has saved us thousands of dollars in video production costs. The quality is professional and the turnaround time is incredible.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const stats = [
    { label: "Videos Generated", value: "1M+", icon: <Video className="w-6 h-6" /> },
    { label: "Active Users", value: "50K+", icon: <Users className="w-6 h-6" /> },
    { label: "Time Saved", value: "95%", icon: <Clock className="w-6 h-6" /> },
    { label: "User Satisfaction", value: "98%", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Video Generator - Create Professional Videos with AI | Zion Tech Group"
        description="Transform text into stunning videos with our AI-powered video generator. Create professional content for social media, marketing, and business in minutes."
        keywords="AI video generator, video creation, artificial intelligence, content creation, social media videos, marketing videos, video automation"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
              <Video className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">AI-Powered Video Creation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI Video Generator
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your ideas into professional videos in minutes using advanced AI technology. 
              Create engaging content for social media, marketing, and business without any video editing skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <FuturisticButton
                href="#pricing"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="#demo"
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </FuturisticButton>
            </div>

            {/* Stats */}
            <ResponsiveGrid className="grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-blue-400">{stat.icon}</div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </ResponsiveGrid>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Video Creation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to create professional videos with artificial intelligence
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2 text-left">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your video creation needs
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <FuturisticCard key={index} className={`p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <FuturisticButton
                  href="/contact"
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'}`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied users creating amazing videos with AI
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <FuturisticCard className="text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Amazing Videos with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the power of AI video generation. 
              No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </FuturisticButton>
            </div>
            
            {/* Contact Information */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
                <div className="flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  kleber@ziontechgroup.com
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 302 464 0950
                </div>
                <div className="flex items-center justify-center">
                  <Globe className="w-4 h-4 mr-2" />
                  ziontechgroup.com
                </div>
              </div>
            </div>
          </FuturisticCard>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIVideoGeneratorPage;