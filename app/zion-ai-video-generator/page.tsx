import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import { Users, FileText } from 'lucide-react';
import { Clock } from 'lucide-react';
const ZionAIVideoGeneratorPage = () => {
  return;
},
    {
      title: "Multiple Video Formats",
      description: "Support for all major video formats including MP4, MOV, AVI, and WebM. Optimized for social media platforms.",
      icon: <FileText className="w-6 h-6" />,
      stats: "15+ formats"
    },
    {
      title: "Voice Synthesis",
      description: "Natural-sounding voice generation in 50+ languages with customizable tone, speed, and emotion.",
      icon: <Music className="w-6 h-6" />,
      stats: "50+ languages"
    },
    {
      title: "Smart Templates",
      description: "Pre-designed templates for different industries and use cases. Customize colors, fonts, and layouts easily.",
      icon: <Image className="w-6 h-6" />,
      stats: "200+ templates"
    }
  ];

const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small businesses",
      features: [
        "10 video generations/month",
        "HD quality (1080p)",
        "Basic templates",
        "5-minute max duration",
        "Standard voice synthesis",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for content creators and agencies",
      features: [
        "50 video generations/month",
        "4K quality (2160p)",
        "Premium templates",
        "15-minute max duration",
        "Advanced voice synthesis",
        "Custom branding",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations and teams",
      features: [
        "Unlimited video generations",
        "8K quality (4320p)",
        "Custom templates",
        "60-minute max duration",
        "Premium voice synthesis",
        "White-label solution",
        "24/7 support",
        "Advanced API",
        "Team collaboration",
        "Analytics dashboard"
      ],
      popular: false
    }
  ];

const testimonials = [
    {
      name: "Sarah Chen",
      company: "Digital Marketing Pro",
      role: "Content Director",
      content: "Zion AI Video Generator has revolutionized our content creation process. We can now produce high-quality videos 10x faster than before.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "EduTech Solutions",
      role: "CEO",
      content: "The voice synthesis is incredibly natural. Our educational videos sound professional and engaging. Highly recommended!",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      company: "Social Media Agency",
      role: "Creative Director",
      content: "The templates are amazing and the customization options are endless. Our clients love the quality and speed of delivery.",
      rating: 5,
      avatar: "EJ"
    }
  ];

const useCases = [
    {
      title: "Social Media Content",
      description: "Create engaging videos for Instagram, TikTok, YouTube, and other platforms",
      icon: <Share2 className="w-8 h-8" />,
      examples: ["Instagram Reels", "TikTok Videos", "YouTube Shorts", "Facebook Stories"]
    },
    {
      title: "Marketing Campaigns",
      description: "Generate promotional videos, product demos, and brand awareness content",
      icon: <TrendingUp className="w-8 h-8" />,
      examples: ["Product Demos", "Brand Videos", "Ad Campaigns", "Testimonials"]
    },
    {
      title: "Educational Content",
      description: "Create training videos, tutorials, and educational materials",
      icon: <Award className="w-8 h-8" />,
      examples: ["Online Courses", "Training Videos", "Tutorials", "How-to Guides"]
    },
    {
      title: "Corporate Communications",
      description: "Generate internal communications, announcements, and presentations",
      icon: <Users className="w-8 h-8" />,
      examples: ["Company Updates", "Internal Training", "Presentations", "Announcements"]
    }
  ];
  return (
    
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Video Generator - Create Professional Videos with AI | Zion Tech Group"
        description="Generate stunning videos from text prompts using advanced AI. Professional quality, multiple formats, voice synthesis, and smart templates. Start creating today!"
        keywords="AI video generator, video creation, artificial intelligence, content creation, video marketing, social media videos, automated video production"
        canonical="https://ziontechgroup.com/zion-ai-video-generator"
      />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-grid-enhanced quantum-dots">
        
        <div className="absolute inset-0 overflow-hidden">
          
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8 neon-border">
            <Sparkles className="w-5 h-5 text-purple-400 mr-2 animate-pulse" />
            <span className="text-purple-400 text-sm font-medium">#1 AI Video Generator 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight holographic-text">
            Zion AI Video Generator
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create professional videos from text prompts using cutting-edge AI technology. 
            <span className="text-purple-400 font-semibold"> Generate engaging content 10x faster than traditional methods.</span>
          </p>
          
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <FuturisticButton
              href="/contact"
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
          
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            
        <div className="text-center group data-stream">
              
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Video className="w-6 h-6 text-purple-400" />
              </div>
              
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">10,000+</div>
              
        <div className="text-gray-300 text-xs md:text-sm">Videos Generated</div>
            </div>
            
        <div className="text-center group data-stream">
              
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Clock className="w-6 h-6 text-cyan-400" />
              </div>
              
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">2 min</div>
              
        <div className="text-gray-300 text-xs md:text-sm">Average Creation Time</div>
            </div>
            
        <div className="text-center group data-stream">
              
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">5,000+</div>
              
        <div className="text-gray-300 text-xs md:text-sm">Happy Customers</div>
            </div>
            
        <div className="text-center group data-stream">
              
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Award className="w-6 h-6 text-orange-400" />
              </div>
              
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">99.9%</div>
              
        <div className="text-gray-300 text-xs md:text-sm">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto">
          
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful AI Video Creation Features
            </h2>
            
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to create professional videos with AI. From text prompts to finished videos in minutes.
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                
        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                
          <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {feature.description}
                </p>
                
        <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 cyber-grid-enhanced">
        
        <div className="max-w-7xl mx-auto">
          
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 holographic-text">
              Perfect for Every Use Case
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From social media content to corporate communications, our AI video generator adapts to your needs.
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                
        <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                
          <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
        <div className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {example}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto">
          
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core AI video generation features.
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard key={index} className={`relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
                  
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}
                
        <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  
        <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  
          <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
        <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "secondary"}
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        
        <div className="max-w-7xl mx-auto">
          
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Content Creators Worldwide
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Video Generator
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                
        <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
          <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                
        <div className="flex items-center">
                  
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
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
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Create Amazing Videos?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of creators using Zion AI Video Generator to produce professional content at scale. 
            Start your free trial today and experience the future of video creation.
          </p>
          
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Start Free Trial
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
        </div>
      </section>
    </div>
  );
};
export default ZionAIVideoGeneratorPage;