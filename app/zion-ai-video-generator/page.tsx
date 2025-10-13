import React from 'react';
import { Helmet , Link  } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
const ZionAIVideoGeneratorPage = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      features: ["5 videos/month", "HD quality", "Basic templates", "Email support"],
      popular: false;
=======
import { 
  Play, 
  Download, 
  Upload, 
  Settings, 
  Sparkles, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Video,
  Image,
  Music,
  Palette,
  Clock,
  Users,
  Award,
  Shield,
  Globe,
  BarChart3;
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
const ZionAiVideoGenerator = () => {
  const features = [
    {
      title: "AI-Powered Script Generation",
      description: "Generate compelling video scripts using advanced AI that understands your brand voice and target audience",
      icon: <Sparkles className="w-6 h-6" />,
      stats: "95% accuracy rate"
    },
    {
      title: "Auto Voice Synthesis",
      description: "Convert text to natural-sounding voiceovers in 50+ languages with emotion and tone control",
      icon: <Music className="w-6 h-6" />,
      stats: "50+ languages"
    },
    {
      title: "Smart Video Editing",
      description: "AI automatically cuts, transitions, and optimizes your videos for maximum engagement",
      icon: <Settings className="w-6 h-6" />,
      stats: "10x faster editing"
    },
    {
      title: "Brand Consistency",
      description: "Maintain consistent branding across all videos with automatic logo placement and color schemes",
      icon: <Palette className="w-6 h-6" />,
      stats: "100% brand compliance"
      period: "/month",
      description: "Perfect for small businesses and content creators",
      features: [
        "10 videos per month",
        "HD quality (1080p)",
        "5 voice options",
        "Basic templates",
        "Email support",
        "Watermark included"
      ],
      popular: false,
      cta: "Start Free Trial" origin/cursor/analyze-improve-and-deploy-application-1091;
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      features: ["50 videos/month", "4K quality", "Premium templates", "Priority support"],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$299",
period: "/month",
      description: "For large organizations with high-volume needs",
      features: [
        "Unlimited videos",
        "4K & 8K quality",
        "50+ voice options",
        "Custom templates",
        "24/7 phone support",
        "White-label solution",
        "API access",
        "Advanced analytics",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];
  const useCases = [
    {
      title: "Marketing Videos",
      description: "Create engaging promotional content for social media, websites, and advertising campaigns",
      icon: <BarChart3 className="w-8 h-8" />,
      examples: ["Product demos", "Social media ads", "Website banners", "Email campaigns"]
    },
    {
      title: "Educational Content",
      description: "Produce training videos, tutorials, and educational content for your audience",
      icon: <Users className="w-8 h-8" />,
      examples: ["How-to guides", "Training modules", "Course content", "Documentation"]
    },
    {
      title: "Corporate Communications",
      description: "Generate professional videos for internal communications and external presentations",
      icon: <Award className="w-8 h-8" />,
      examples: ["Company updates", "Investor presentations", "Team announcements", "Recruitment videos"]
      name: "Sarah Chen",
      company: "Digital Marketing Pro",
      role: "Marketing Director",
      content: "Zion AI Video Generator has revolutionized our content creation process. We've increased our video output by 300% while reducing production time by 80%.",
      name: "Emily Johnson",
      company: "StartupXYZ",
      role: "Founder",
      content: "As a startup, we needed professional videos without the budget. This tool gave us enterprise-quality content at a fraction of the cost.",
        <title>Zion AI Video Generator - AI-Powered Video Creation Platform | Zion Tech Group</title>
        <meta name="description" content="Create professional videos in minutes with Zion AI Video Generator. AI-powered script generation, voice synthesis, and smart editing. Start your free trial today!" />
        <meta name="keywords" content="AI video generator, video creation, automated video, voice synthesis, video editing, content creation, marketing videos" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-video-generator" /> origin/cursor/analyze-improve-and-deploy-application-1091;
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        </div><div className="text-center mb-16" /><div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6" /><Video className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Video Generation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Video Generator</span>
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your ideas into professional videos with our AI-powered video generator. 
            Create stunning content in minutes, not hours.</p>
          </p>
        </div>
        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            </div><div key={index} className="text-center group" /><div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
<div className="text-center" /><div className="text-2xl md:text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300 text-sm">Languages</div>
            </div>
            <div className="text-center" /><div className="text-2xl md:text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center" /><div className="text-2xl md:text-3xl font-bold text-white mb-2">10x</div>
              <div className="text-gray-300 text-sm">Faster Creation</div>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" /><ResponsiveContainer /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful AI Features</h2>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our advanced AI technology handles every aspect of video creation, from script writing to final editing</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              </div><FuturisticCard;
                key={index}
                className="group hover:scale-105 transition-all duration-300"
               /><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}</h3>
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}</p>
                </p>
                <div className="text-center" /><span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400">
                    {feature.stats}</span>
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50" /><ResponsiveContainer /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Use Case</h2>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're creating marketing content, educational videos, or corporate communications</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              </div><FuturisticCard;
                key={index}
                className="group hover:scale-105 transition-all duration-300"
               /><div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-purple-400 transition-colors">
                  {useCase.title}</h3>
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {useCase.description}</p>
                </p>
                <div className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    </div><div key={idx} className="flex items-center text-sm text-gray-400" /><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8" /><ResponsiveContainer /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing</h2>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"> origin/cursor/analyze-improve-and-deploy-application-1091;
            {pricingPlans.map((plan, index) => (
              </div><div;
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ;
                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-white/20'
                } relative`}
              >
                {plan.popular && (
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2" /><span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center" /><Star className="w-4 h-4 mr-1" />
                      Most Popular;
                    </span>
                  </div>
                )}
                <div className="text-center mb-8" /><h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    </div><span className="text-lg text-gray-300 font-normal">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    </ul><li key={featureIndex} className="flex items-center text-gray-300" /><CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link;
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
{plan.cta}</Link>
                </FuturisticButton>
              </FuturisticCard>
            ))}
      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50" /><ResponsiveContainer /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Content Creators Worldwide</h2>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Video Generator</p>
            </p>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30" /><ResponsiveContainer /><div className="text-center" /><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Create Amazing Videos?</h2>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of content creators who are already using Zion AI Video Generator to produce professional videos in minutes.
                href="#signup"
                variant="primary"
                size="lg"
                icon={</p><Play className="w-5 h-5" />}
                href="/contact"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Contact Sales;
              </FuturisticButton>
            </div>
            <div className="mt-8 text-sm text-gray-400" /><p>14-day free trial • No credit card required • Cancel anytime</p>
export default ZionAiVideoGenerator; origin/cursor/analyze-improve-and-deploy-application-1091
;