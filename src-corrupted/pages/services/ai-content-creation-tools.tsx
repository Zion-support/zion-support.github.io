import React from 'react',;',';';
    ';';';';
import { Helmet } from 'react-helmet-async';
import {
  PenTool,
  Brain,
  Zap,
  Shield,
  BarChart3,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  MessageSquare,
  Filter,
  Target,
  Clock,
  Download,
  Share2,;
  Eye,;';
  FileText,;';';
  Image,;';';';
  Video,;',';';
    ';';';
  Mic} from 'lucide-react';
const AIContentCreationTools: Reac t.FC = () => {
  const features = [
    {
      icon: PenToo l,
      title: "AI Writing Assistant",
      description: "Generate high-quality content for blogs, social media, emails, and marketing materials with advanced AI writing capabilities.";
},
    {
      icon: Imag e,
      title: "AI Image Generation",
      description: "Create stunning visuals, graphics, and illustrations using AI-powered image generation with custom styles and branding.";
},
    {
      icon: Vide o,
      title: "AI Video Creation",
      description: "Produce engaging video content with AI-generated scripts, voiceovers, and automated video editing capabilities.";
},
    {
      icon: BarChart 3,
      title: "Content Optimization",
      description: "Optimize content for SEO, readability, and engagement with AI-powered analysis and recommendations.";
},
    {
      icon: Glob e,
      title: "Multi-Language Support",
      description: "Create content in 50+ languages with perfect grammar, cultural context, and localized messaging.";
},
    {
      icon: Shiel d,
      title: "Brand Consistency",
      description: "Maintain consistent brand voice and style across all content with AI-powered brand guidelines enforcement."}
  ]
  const contentTypes = [
    {
      title: "Blog Posts & Articles",
      description: "Generate comprehensive blog posts, articles, and long-form content with proper structure and SEO optimization.",
      icon: FileTex t},
    {
      title: "Social Media Content",
      description: "Create engaging posts, captions, and stories for all major social media platforms with trending hashtags.",
      icon: Share 2},
    {
      title: "Marketing Materials",
      description: "Produce sales copy, email campaigns, landing pages, and promotional content that converts.",
      icon: Targe t},
    {
      title: "Video Scripts",
      description: "Write compelling video scripts for YouTube, TikTok, Instagram, and other video platforms.",
      icon: Vide o}
  ]
  const benefits = [
    "Reduce content creation time by 75%",
    "Increase content output by 300%",
    "Improve SEO rankings with optimized content",
    "Maintain consistent brand voice across all channels",
    "Scale content production without hiring more writers",
    "Generate content in multiple languages automatically"
  ]
  const pricing = [
    {
      name: "Creator",
      price: "$25",
      period: "/month",
      description: "Perfect for individual creators",
      features: [
        "Up to 10,000 words/month",
        "Basic AI writing tools",
        "5 image generations/day",
        "Standard templates",
        "Email support"
      ]
},
    {
      name: "Professional",
      price: "$55",
      period: "/month",
      description: "Ideal for small teams",
      features: [
        "Up to 50,000 words/month",
        "Advanced AI tools",
        "Unlimited image generation",
        "Video creation tools",
        "Priority support",
        "Brand voice training"
      ],
      popular: tru e},
    {
      name: "Enterprise",
      price: "$125",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited content generation",
        "Custom AI models",
        "Advanced analytics",
        "API integration",
        "Dedicated support",
        "White-label solution",
        "Team collaboration tools"
      ]
}
  ]
  return (
    <>
      <Helmet>
        <title>AI Content Creation Tools | Zion Tech Group</title>
        <meta name="description" content="Accelerate content production with AI-powered writing, image generation, and video creation tools. Reduce creation time by 75% and scale your content strategy."   />
        <meta name="keywords" content="AI content creation, content writing, AI writing assistant, content marketing, AI tools"   />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        {/* Hero Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2"  />
                AI-Powered Content Creation
              </div>
              <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6">
                AI Content Creation Tools
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Accelerate your content production with AI-powered writing, image generation, and video creation tools.
                Reduce creation time by 75% and scale your content strategy across all channels.
              </p>
              <div className="flex flex-col sm: fle x-row gap-4 justify-center">
                <a
                  href="https://ziontechgroup.com/contact"
                  className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover: b g-purple-700 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5"  />
                </a>
                <a
                  href="https://ziontechgroup.com/demo"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover: b g-gray-50 transition-colors"
                >
                  Watch Demo
                </a>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-1 md: gri d-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">75%</div>
                <div className="text-gray-600">Faster Creation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">300%</div>
                <div className="text-gray-600">More Content</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Content Generation</div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6">
                Comprehensive Content Creation Suite
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered tools cover every aspect of content creation, from writing to visuals and video production.
              </p>
            </div>
            <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-xl border border-gray-200 hover: shado w-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-purple-100">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))
      )}
    </div>
  );
}
            </div>
          </div>
        </section>
        {/* Content Types Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6">
                Create Any Type of Content
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From blog posts to social media content, our AI tools help you create engaging content for every platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md: gri d-cols-2 gap-8">
              {contentTypes.map((contentType, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover: shado w-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-purple-100">
                      <contentType.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">{contentType.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg">{contentType.description}</p>
                </div>
              ))
      )}
    </div>
  );
}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6">
                Why Choose Our AI Content Tools?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of AI-powered content creation that scales with your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md: gri d-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0"  />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))
      )}
    </div>
  );
}
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Real Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Creation Time</span>
                    <span className="font-semibold text-green-600">-75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Content Output</span>
                    <span className="font-semibold text-green-600">+300%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">SEO Rankings</span>
                    <span className="font-semibold text-green-600">+45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Engagement Rate</span>
                    <span className="font-semibold text-green-600">+60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your content creation needs. All plans include AI-powered tools.
              </p>';
            </div>';';
            <div className={`grid grid-cols-1 md: gri d-cols-3 gap-8`>';';' {pricing.map((plan, index) => (',';';
    ';';';
                <div key={index} className={`relative p-8 rounded-xl border-2 ${plan.popular ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white'} hover: shado w-lg transition-shadow`}>
                  {plan.popular && (
                    <div className=`absolute -top-4 left-1/2 transform -translate-x-1/2`}>
                      <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )
      )}
    </div>
  );
}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"  />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))
      )}
    </div>
  );
}
                  </ul>';
                  <a href={`https: //ziontechgroup.com/contact`';';
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${';';';
                      plan.popular',';';
    ';';';
                        ? 'bg-purple-600 text-white hover: b g-purple-700'',';';
    ';';';
                        : 'bg-gray-900 text-white hover: b g-gray-800'}`}
                  >
                    Get Started
                  </a>
                </div>
              ))
      )}
    </div>
  );
}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=`py-20 px-4 sm: p x-6 lg: p x-8 bg-purple-600`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of content creators and marketers using our AI tools to produce better content faster.
            </p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover: b g-gray-100 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5"  />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover: b g-white hover: tex t-purple-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-purple-100">
              <p>Email: klebe r@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>';
    </>';';
  )};';';';
export default AIContentCreationTools;"';';';';