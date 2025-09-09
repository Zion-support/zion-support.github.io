import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { PenTool, FileText, Brain, Zap, Target, Users, ArrowRight, CheckCircle, Star, Globe, Shield, Type, Video, ShoppingBag, Mail } from "lucide-react";
import { Link } from "react-router-dom";
export default function AIContentGenerator() {
    const features = [
        {
            title: "AI Writing Assistant",
            description: "Generate high - quality content for blogs, social media, and marketing campaigns",
            icon: <PenTool className="h - 6 w - 6 text - zion - cyan"      />
        },
        {
            title: "Multi-Format Support",
            description: "Create content in various formats: text, images, videos, and audio",
            icon: <FileText className="h - 6 w - 6 text - zion - purple"      />
        },
        {
            title: "Brand Voice Consistency",
            description: "Maintain your brand's unique voice across all content pieces",
            icon: <Type className="h - 6 w - 6 text - zion - blue"      />
        },
        {
            title: "SEO Optimization",
            description: "AI - powered SEO suggestions to improve content visibility and ranking",
            icon: <Target className="h - 6 w - 6 text - zion - cyan"      />

    ];
    const contentTypes = [
        {
            title: "Blog Posts",
            description: "Long - form articles and blog content",
            icon: <FileText className="h - 8 w - 8 text - zion - cyan"      />
        },
        {
            title: "Social Media",
            description: "Posts for all major social platforms",
            icon: <Users className="h - 8 w - 8 text - zion - purple"      />
        },
        {
            title: "Marketing Copy",
            description: "Ads, landing pages, and promotional content",
            icon: <Target className="h - 8 w - 8 text - zion - blue"      />
        },
        {
            title: "Product Descriptions",
            description: "Compelling product and service descriptions",
            icon: <ShoppingBag className="h - 8 w - 8 text - zion - cyan"      />
        },
        {
            title: "Email Campaigns",
            description: "Newsletters and email marketing content",
            icon: <Mail className="h - 8 w - 8 text - zion - purple"      />
        },
        {
            title: "Video Scripts",
            description: "Scripts for video content and presentations",
            icon: <Video className="h - 8 w - 8 text - zion - blue"      />

    ];
    const pricingPlans = [
        {
            name: "Starter",
            price: "$49",
            period: "/month",
            description: "Perfect for individuals and small businesses",
            features: [
                "Up to 50 content pieces/month",
                "Basic AI writing tools",
                "Standard templates",
                "Email support",
                "Basic SEO suggestions"
            ],
            popular: false
        },
        {
            name: "Professional",
            price: "$149",
            period: "/month",
            description: "Advanced content creation for growing businesses",
            features: [
                "Up to 200 content pieces/month",
                "Advanced AI writing tools",
                "Custom templates",
                "Priority support",
                "Advanced SEO optimization",
                "Brand voice training",
                "Multi-language support"
            ],
            popular: true
        },
        {
            name: "Enterprise",
            title: "Blog Content Creation",
            description: "Generate engaging blog posts, articles, and long-form content optimized for SEO and reader engagement.",
            icon: <FileText className="h-8 w-8 text-zion-cyan"/>
        },
        {
            title: "Social Media Marketing",
            description: "Create compelling social media posts, captions, and campaigns across all platforms.",
            icon: <Globe className="h-8 w-8 text-zion-purple"/>
        },
        {
            title: "Email Marketing",
            description: "Generate personalized email campaigns, newsletters, and automated sequences.",
            icon: <Users className="h-8 w-8 text-zion-cyan"/>
        },
        {
            title: "Product Descriptions",
            description: "Create compelling product descriptions, features, and marketing copy.",
            icon: <Zap className="h-8 w-8 text-zion-purple"/>,
            price: "$399",
            period: "/month",
            description: "Full-scale content creation for large organizations",
            features: [
                "Unlimited content pieces",
                "Custom AI models",
                "White-label solutions",
                "Dedicated support",
                "Advanced analytics",
                "API access",
                "Custom integrations"
            ],
            popular: false
        }
    ];
    const testimonials = [
        {
            name: "Jennifer Martinez",
            role: "Marketing Director, GrowthBrand",
            content: "Zion's AI Content Generator increased our content output by 300% while maintaining quality. Game-changer!",
            rating: 5
        },
        {
            name: "David Kim",
            role: "Content Creator, TechBlog",
            content: "The AI writing assistant is incredibly intuitive. It understands context and generates engaging content.",
            rating: 5
        },
        {
            name: "Lisa Thompson",
            role: "CEO, StartupXYZ",
            content: "We've saved countless hours on content creation. The ROI is immediate and substantial.",
            rating: 5
        }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-purple-dark to-zion-slate-dark">
      <SEO title="AI Content Generator - Zion Tech Group" description="Create engaging, high-quality content with AI-powered writing tools. Generate blogs, social media posts, and marketing copy instantly." keywords="AI content generator, content creation, AI writing, marketing copy, Zion Tech Group" canonical="https://ziontechgroup.com/ai-content-generator"/>

    return (<div className="min - h-screen bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900">
            <SEO
                title="AI Content Generator - Zion Tech Group"
                description="Generate high - quality, SEO - optimized content with AI - powered writing tools. Create blogs, social media posts, marketing copy, and more."
                  />

            {/* Hero Section */}
            <section className="relative pt - 32 pb - 20 px - 4 sm:px - 6 lg:px - 8 overflow - hidden">
                <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 500 / 10 to - purple - 500 / 10"></div>
                <div className="relative max - w-7xl mx - auto text - center">
                    <div className="inline - flex items - center px - 4 py - 2 rounded - full bg - cyan - 500 / 20 border border - cyan - 500 / 30 text - cyan - 400 text - sm font - medium mb - 6">
                        <Brain className="w - 4 h - 4 mr - 2"       />
                        AI - Powered Content Generation
                    </div>
                    <h1 className="text - 5xl md:text - 6xl font - bold text - white mb - 6 bg - gradient - to - r from - cyan - 400 to - purple - 400 bg - clip - text text - transparent">
                        AI Content Generator
                    </h1>
                    <p className="text - xl text - gray - 300 max - w-3xl mx - auto mb - 8">
                        Transform your content creation with AI - powered writing tools. Generate high - quality,
                        SEO - optimized content for blogs, social media, marketing campaigns, and more.
                    </p>
                    <div className="flex flex - col sm:flex - row gap - 4 justify - center">
                        <Button className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 600 transition - all duration - 300">
                            <Zap className="w - 5 h - 5 mr - 2"       />
                            Start Free Trial
                        </Button>
                        <Button variant="outline" className="px - 8 py - 4 border - cyan - 500 / 30 text - cyan - 400 font - semibold text - lg hover:bg - cyan - 500 / 10 transition - all duration - 300">
                            <FileText className="w - 5 h - 5 mr - 2"       />
                            View Demo
                        </Button>
                    </div>
                </div>
            </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Perfect for Every Content Need
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Whether you're a marketer, business owner, or content creator, our AI content generator has you covered.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (<Card key={index} className="bg-zion-slate/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{useCase.title}</h3>
                  <p className="text-zion-slate-light text-sm">{useCase.description}</p>
      {/* Content Types Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Create Any Type of Content
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From blog posts to social media content, our AI handles all your content creation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (<Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-zion-purple/10 rounded-full w-20 h-20 flex items-center justify-center">
                    {type.icon}
                  </div>
                  <CardTitle className="text-white">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your content creation needs. All plans include our core AI writing features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (<Card key={index} className={`relative ${plan.popular ? 'border-zion-purple scale-105' : 'border-zion-slate-light'} bg-zion-slate-dark/50 transition-all duration-300 hover:shadow-2xl`}>
                {plan.popular && (<Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0">
                    Most Popular
                  </Badge>)}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <CardDescription className="text-zion-slate-light">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="h-5 w-5 text-zion-cyan mr-3 flex-shrink-0"/>
                        {feature}
                      </li>))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                    <Link to="/contact">
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-zion-slate/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI content generator to create engaging, high-quality content at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan text-white px-8 py-4 text-lg">
              Start Your Free Trial
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 px-8 py-4 text-lg">
                Contact Sales
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Questions? Call us at <a href="tel:+13024640950" className="text-zion-cyan hover:underline">+1 302 464 0950</a></p>
            <p>Or email us at <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">kleber@ziontechgroup.com</a></p>
          </div>
      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Content Creators
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See what our customers say about the transformative power of AI content generation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (<Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="h-5 w-5 text-yellow-400 fill-current"/>))}
                  </div>
                  <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-zion-slate-light">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

                    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">
                        {contentTypes.map ( (type, index) => (<Card key={index} className="bg - slate - 800 / 50 border - slate - 700 / 50 hover:border - purple - 500 / 50 transition - all duration - 300 hover:scale - 105">
                                <CardContent className="p - 6 text - center">
                                    <div className="flex justify - center mb - 4">
                                        {type.icon}
                                    </div>
                                    <h3 className="text - xl font - semibold text - white mb - 2">{type.title}</h3>
                                    <p className="text - gray - 400">{type.description}</p>
                                </CardContent>
                            </Card>) ) }
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">
                <div className="max - w-7xl mx - auto">
                    <div className="text - center mb - 16">
                        <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">
                            Choose Your < span className="text - cyan - 400">Plan</span>
                        </h2>
                        <p className="text - xl text - gray - 300 max - w-3xl mx - auto">
                            Flexible pricing plans designed to grow with your content needs.
                        </p>
                    </div>

                    <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">
                        {pricingPlans.map ( (plan, index) => (<Card key={index} className={`relative bg - slate - 800 / 50 border - slate - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300 hover:scale - 105 ${
                                plan.popular ? 'border - cyan - 500 shadow - cyan - 500 / 25' : ''
                            }`}>
                                {plan.popular && (<div className="absolute - top - 4 left - 1/2 transform - translate - x-1 / 2">
                                        <Badge className="bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white px - 4 py - 2">
                                            Most Popular
                                        </Badge>
                                    </div>) }
                                <CardHeader className="text - center pb - 4">
                                    <CardTitle className="text - 2xl font - bold text - white">{plan.name}</CardTitle>
                                    <div className="mt - 4">
                                        <span className="text - 4xl font - bold text - cyan - 400">{plan.price}</span>
                                        <span className="text - gray - 400">{plan.period}</span>
                                    </div>
                                    <p className="text - gray - 400 mt - 2">{plan.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space - y-3 mb - 6">
                                        {plan.features.map ( (feature, featureIndex) => (<li key={featureIndex} className="flex items - center text - gray - 300">
                                                <CheckCircle className="w - 5 h - 5 text - cyan - 400 mr - 3 flex - shrink - 0"       />
                                                {feature}
                                            </li>) ) }
                                    </ul>
                                    <Button className="w - full bg - gradient - to - r from - cyan - 500 to - purple - 500 hover:from - cyan - 600 hover:to - purple - 600 text - white">
                                        Get Started
                                    </Button>
                                </CardContent>
                            </Card>) ) }
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 bg - slate - 800 / 30">
                <div className="max - w-7xl mx - auto">
                    <div className="text - center mb - 16">
                        <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">
                            Why Choose Our < span className="text - purple - 400">AI Generator</span>
                        </h2>
                        <p className="text - xl text - gray - 300 max - w-3xl mx - auto">
                            Experience the power of AI - driven content creation with these key benefits.
                        </p>
                    </div>

                    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">
                        {benefits.map ( (benefit, index) => (<div key={index} className="flex items - start space - x-3 p - 4 rounded - lg bg - slate - 800 / 50 border border - slate - 700 / 50">
                                <CheckCircle className="w - 6 h - 6 text - cyan - 400 mt - 1 flex - shrink - 0"       />
                                <span className="text - gray - 300">{benefit}</span>
                            </div>) ) }
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">
                <div className="max - w-4xl mx - auto text - center">
                    <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">
                        Ready to Transform Your < span className="text - cyan - 400">Content Creation</span>?
                    </h2>
                    <p className="text - xl text - gray - 300 mb - 8">
                        Join thousands of businesses using AI to create better content faster.
                    </p>
                    <div className="flex flex - col sm:flex - row gap - 4 justify - center">
                        <Button className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 600 transition - all duration - 300">
                            <Star className="w - 5 h - 5 mr - 2"       />
                            Start Free Trial
                        </Button>
                        <Button variant="outline" className="px - 8 py - 4 border - cyan - 500 / 30 text - cyan - 400 font - semibold text - lg hover:bg - cyan - 500 / 10 transition - all duration - 300">
                            <ArrowRight className="w - 5 h - 5 mr - 2"       />
                            Learn More
                        </Button>
                    </div>
                </div>
            </section>
        </div>) ;
</Card></Card></Card></Card></Card>}}}}}