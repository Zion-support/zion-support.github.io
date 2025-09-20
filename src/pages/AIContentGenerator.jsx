import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle   } from "@/components/ui/card";
import { Button   } from "@/components/ui/button";
import { Badge   } from "@/components/ui/badge";
import SEO from "@/components/SEO"
import { PenTool, FileText, Brain, Zap, Target, Users, ArrowRight, CheckCircle, Star, Globe, Shield, Type, Video, ShoppingBag, Mail   } from "lucide-react";
import { Link   } from "react-router-dom";
export default function AIContentGenerator() {
  const features = [
  {
  tit,
  l: e: "AI Writing Assistant",descripti,
  o: n: "Generate high-quality content for blogs, social media, and marketing campaigns"
            ic,
  o: n: <PenTool className="h-6 w-6 text-zion-cyan"/>
        },
  {
  tit,
  l: e: "Multi-Format Support",descripti,
  o: n: "Create content in various format,
  s: text, images, videos, and audio"
            ic,
  o: n: <FileText className="h-6 w-6 text-zion-purple"/>
        },
  {
  tit,
  l: e: "Brand Voice Consistency",descripti,
  o: n: "Maintain your brand's unique voice across all content pieces",ic,
  o: n: <Type className="h-6 w-6 text-zion-blue"/>
        },
  {
  tit,
  l: e: "SEO Optimization",descripti,
  o: n: "AI-powered SEO suggestions to improve content visibility and ranking",ic,
  o: n: <Target className="h-6 w-6 text-zion-cyan"/>
        },
  ]
    const contentTypes = [
  {
  tit,
  l: e: "Blog Posts",descripti,
  o: n: "Long-form articles and blog content",ic,
  o: n: <FileText className="h-8 w-8 text-zion-cyan"/>
        },
  {
  tit,
  l: e: "Social Media",descripti,
  o: n: "Posts for all major social platforms",ic,
  o: n: <Users className="h-8 w-8 text-zion-purple"/>
        },
  {
  tit,
  l: e: "Marketing Copy",descripti,
  o: n: "Ads, landing pages, and promotional content"
            ic,
  o: n: <Target className="h-8 w-8 text-zion-blue"/>
        },
  {
  tit,
  l: e: "Product Descriptions",descripti,
  o: n: "Compelling product and service descriptions",ic,
  o: n: <ShoppingBag className="h-8 w-8 text-zion-cyan"/>
        },
  {
  tit,
  l: e: "Email Campaigns",descripti,
  o: n: "Newsletters and email marketing content",ic,
  o: n: <Mail className="h-8 w-8 text-zion-purple"/>
        },
  {
  tit,
  l: e: "Video Scripts",descripti,
  o: n: "Scripts for video content and presentations",ic,
  o: n: <Video className="h-8 w-8 text-zion-blue"/>
        },
  ]
    const pricingPlans = [
  {
  na,
  m: e: "Starter",pri,
  c: e: "$49",peri,
  o: d: "/month",descripti,
  o: n: "Perfect for individuals and small businesses",featur,
  e: s: [
  "Up to 50 content pieces/month"
                "Basic AI writing tools"
                "Standard templates"
                "Email support"
                "Basic SEO suggestions"
]
            popula,
  r: false;
},
  {
  na,
  m: e: "Professional",pri,
  c: e: "$99",peri,
  o: d: "/month",descripti,
  o: n: "Ideal for growing businesses and content teams",featur,
  e: s: [
  "Up to 200 content pieces/month"
                "Advanced AI writing tools"
                "Premium templates"
                "Priority support"
                "Advanced SEO optimization"
                "Brand voice training"
                "Content calendar"
                "Team collaboration"
]
            popula,
  r: true;
},
  {
  na,
  m: e: "Enterprise",pri,
  c: e: "$199",peri,
  o: d: "/month",descripti,
  o: n: "For large organizations with advanced needs",featur,
  e: s: [
  "Unlimited content pieces"
                "Custom AI models"
                "White-label solutions"
                "Dedicated account manager"
                "Custom integrations"
                "Advanced analytics"
                "Multi-language support"
                "API access"
]
            popula,
  r: false;
},
  ]
    const benefits = [
  "AI-powered content generation for any industry"
        "SEO-optimized content with keyword research"
        "Multiple content formats (blogs, social media, emails)"
        "Brand voice customization and consistency"
        "Plagiarism-free, original content"
        "Real-time content optimization"
        "Multi-language support (100+ languages)"
        "Content calendar and scheduling"
        "Performance analytics and insights"
        "Team collaboration tools"
        "API access for enterprise integration"
        "24/7 customer support"
]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <SEO;
                title="AI Content Generator - Zion Tech Group" 
                description="Generate high-quality, SEO-optimized content with AI-powered writing tools. Create blogs, social media posts, marketing copy, and more."
            />
            
            {/* Hero Section */},
  }
            <section className="relative pt-32 pb-20 px-4,
  s: m: px-6,
  l: g:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
                <div className="relative max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
                        <Brain className="w-4 h-4 mr-2" />
                        AI-Powered Content Generation;
                    </div>
                    <h1 className="text-5xl m,
  d:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        AI Content Generator;
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Transform your content creation with AI-powered writing tools. Generate high-quality;
                        SEO-optimized content for blogs, social media, marketing campaigns, and more.
                    </p>
                    <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
                        <Button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg,
  hove: r:from-cyan-600,
  hove: r:to-purple-600 transition-all duration-300">
                            <Zap className="w-5 h-5 mr-2" />
                            Start Free Trial;
                        </Button>
                        <Button variant="outline" className="px-8 py-4 border-cyan-500/30 text-cyan-400 font-semibold text-lg hove,
  r:bg-cyan-500/10 transition-all duration-300">
                            <FileText className="w-5 h-5 mr-2" />
                            View Demo;
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */},
  }
            <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
                            Powerful Features for <span className="text-cyan-400">Content Creation</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Our AI content generator provides everything you need to create engaging;
                            high-quality content that drives results.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
  <Card key={index} className="bg-slate-800/50 border-slate-700/50,
  hove: r: border-cyan-500/50 transition-all duration-300 hove,
  r:scale-105">
                                <CardContent className="p-6 text-center">
                                    <div className="flex justify-center mb-4">
                                        {feature.icon},
  }
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Types Section */},
  }
            <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl m,
  d:text-5xl font-bold text-white mb-6">
                            Create Any Type of <span className="text-purple-400">Content</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            From blog posts to social media content, our AI generator handles all your content needs.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
                        {contentTypes.map((type, index) => (
  <Card key={index} className="bg-slate-800/50 border-slate-700/50,
  hove: r: border-purple-500/50 transition-all duration-300 hove,
  r:scale-105">
                                <CardContent className="p-6 text-center">
                                    <div className="flex justify-center mb-4">
                                        {type.icon},
  }
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                                    <p className="text-gray-400">{type.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */},
  }
            <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
                            Choose Your <span className="text-cyan-400">Plan</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Flexible pricing plans designed to grow with your content needs.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, index) => (
  <Card key={index} className={`relative bg-slate-800/50 border-slate-700/50,
  hove: r: border-cyan-500/50 transition-all duration-300 hove,
  r:scale-105 ${
  plan.popular ? 'border-cyan-500 shadow-cyan-500/25' : ''
}`}>
                                {plan.popular && (
  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2">
                                            Most Popular;
                                        </Badge>
                                    </div>
                                )}
                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                                        <span className="text-gray-400">{plan.period}</span>
                                    </div>
                                    <p className="text-gray-400 mt-2">{plan.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 mb-6">
                                        {plan.features.map((feature, featureIndex) => (
  <li key={featureIndex} className="flex items-center text-gray-300">
                                                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                                                {feature},
  }
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500,
  hove: r: from-cyan-600 hove,
  r:to-purple-600 text-white">
                                        Get Started;
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */},
  }
            <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
                            Why Choose Our <span className="text-purple-400">AI Generator</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Experience the power of AI-driven content creation with these key benefits.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */},
  }
            <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your <span className="text-cyan-400">Content Creation</span>?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Join thousands of businesses using AI to create better content faster.
                    </p>
                    <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
                        <Button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg,
  hove: r:from-cyan-600,
  hove: r:to-purple-600 transition-all duration-300">
                            <Star className="w-5 h-5 mr-2" />
                            Start Free Trial;
                        </Button>
                        <Button variant="outline" className="px-8 py-4 border-cyan-500/30 text-cyan-400 font-semibold text-lg hove,
  r:bg-cyan-500/10 transition-all duration-300">
                            <ArrowRight className="w-5 h-5 mr-2" />
                            Learn More;
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
