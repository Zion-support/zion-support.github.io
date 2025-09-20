import, React, from "react";
import { Card, CardContent, CardDescriptionCardHeaderCardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import, SEO, from "@/components/SEO";
import { PenTool, FileText, Brain, Zap, Target, Users, ArrowRight, CheckCircle, Star, Globe, Shield, Type, VideoShoppingBagMail } from "lucide-react";
import { Link } from "react-router-dom";
export, default, function AIContentGenerator() {
    const features = [;
        {
            title: "AI, Writing, Assistant",description: "Generate high-quality, content, for blogs, social, mediaand, marketing campaigns"icon: <PenTool className="h-6 w-6 text-zion-cyan"/>;
        };
        {
            title: "Multi-Format Support",description: "Create, content, in various format,;
  s: text, images, videosand audio"icon: <FileText className="h-6 w-6 text-zion-purple"/>;
        };
        {
            title: "Brand, Voice, Consistency"description: "Maintain, your, brand's, unique, voice across, all, content pieces"ico,;
  n: <Type className="h-6 w-6 text-zion-blue"/>;
        }{
            title: "SEO Optimization"descriptio,;
    n: "AI-powered, SEO, suggestions to, improve, content visibility, and, ranking"ico,;
  n: <Target className="h-6 w-6 text-zion-cyan"/>;
        };
  ,  ];
    const contentTypes = [;
        {
            title: "Blog Posts"descriptio,;
    n: "Long-form, articles, and blog content"ico,;
  n: <FileText className="h-8 w-8 text-zion-cyan"/>;
        };
        {
            title: "Social Media"descriptio,;
    n: "Posts, for, all major, social, platforms"ico,;
  n: <Users className="h-8 w-8 text-zion-purple"/>;
        };
        {
            title: "Marketing Copy",description: "Ads, landing, pagesand, promotional content"icon: <Target className="h-8 w-8 text-zion-blue"/>;
        };
        {
            title: "Product Descriptions"descriptio,;
    n: "Compelling, product, and service descriptions"ico,;
  n: <ShoppingBag className="h-8 w-8 text-zion-cyan"/>;
        };
        {
            title: "Email Campaigns"descriptio,;
    n: "Newsletters, and, email marketing content"ico,;
  n: <Mail className="h-8 w-8 text-zion-purple"/>;
        }{
            title: "Video Scripts"descriptio,;
    n: "Scripts, for, video content, and, presentations"ico,;
  n: <Video className="h-8 w-8 text-zion-blue"/>;
        };
  ,  ];
    const pricingPlans = [;
        {
            name: "Starter",price: "$49",period: "/month",description: "Perfect, for, individuals and, small, businesses",features: [;
                "Up, to, 50 content pieces/month",;
                "Basic, AI, writing tools",;
                "Standard templates""Email support""Basic, SEO, suggestions";
          ,  ]popular: false;
        };
        {
            name: "Professional",price: "$99",period: "/month",description: "Ideal, for, growing businesses, and, content teams",features: [;
                "Up, to, 20o0 content pieces/month",;
                "Advanced, AI, writing tools",;
                "Premium templates",;
                "Priority support",;
                "Advanced, SEO, optimization",;
                "Brand, voice, training""Content calendar""Team collaboration";
          ,  ]popular: true;
        };
        {
            name: "Enterprise",price: "$199",period: "/month",description: "For, large, organizations with, advanced, needs",features: [;
                "Unlimited, content, pieces",;
                "Custom, AI, models",;
                "White-label solutions",;
                "Dedicated, account, manager",;
                "Custom integrations",;
                "Advanced analytics""Multi-language support""API access";
          ,  ]popular: false;
        }
    ];
    const benefits = [;
        "AI-powered, content, generation for, any, industry",;
        "SEO-optimized, content, with keyword research",;
        "Multiple, content, formats(blogs, social mediaemails)",;
        "Brand, voice, customization and consistency",;
        "Plagiarism-free, original content",;
        "Real-time, content, optimization",;
        "Multi-language support (10o0+ languages)",;
        "Content, calendar, and scheduling",;
        "Performance, analytics, and insights",;
        "Team, collaboration, tools",;
        "API, access, for enterprise integration""24/7, customer, support";
  ,  ],;
    return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
            <SEO;
                title="AI, Content, Generator - Zion, Tech, Group";
                description="Generate high-quality, SEO-optimized, content, with AI-powered, writing, tools. Create blogs, social, media, posts, marketing, copyand, more.";
            />;
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm: px-6 l,;
    g:px-8 overflow-hidden">;
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/10 to-purple-50o0/10"></div>;
                <div className="relative max-w-7xl mx-auto text-center">;
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50o0/20, border, border-cyan-50o0/30 text-cyan-40o0 text-sm font-medium mb-6">;
                        <Brain className="w-4 h-4 mr-2" />;
                        AI-Powered, Content, Generation;
                    </div>;
                    <h1 className="text-5xl m,;
  d: text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-40o0 to-purple-40o0 bg-clip-text text-transparent">;
                        AI, Content, Generator;
                    </h1>;
                    <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
                        Transform, your, content creation, with, AI-powered, writing, tools. Generate high-quality;
                        SEO-optimized, content, for blogs, social media, marketing, campaignsand, more.;
                    </p>;
                    <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                        <Button className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-purple-50o0 text-white font-semibold text-lg hover:from-cyan-60o0 hove,;
    r:to-purple-60o0 transition-all duration-30o0">;
                            <Zap className="w-5 h-5 mr-2" />;
                            Start, Free, Trial;
                        </Button>;
                        <Button variant="outline" className="px-8 py-4 border-cyan-50o0/30 text-cyan-40o0 font-semibold text-lg hove,;
  r: bg-cyan-50o0/10 transition-all duration-30o0">;
                            <FileText className="w-5 h-5 mr-2" />;
                            View Demo;
                        </Button>;
                    </div>;
                </div>;
            </section>;
            {/* Features Section */}
            <section className="py-20 px-4 sm: px-6 lg:px-8">;
                <div className="max-w-7xl mx-auto">;
                    <div className="text-center mb-16">;
                        <h2 className="text-4xl m,;
    d:text-5xl font-bold text-white mb-6">;
                            Powerful, Features, for <span className="text-cyan-40o0">Content Creation</span>;
                        </h2>;
                        <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
                            Our, AI, content generator, provides, everything you, need, to create engaging;
                            high-quality, content, that drives results.;
                        </p>;
                    </div>;
                    <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
                        {features.map((featureindex) => (;
                            <Card key={index} className="bg-slate-80o0/50 border-slate-70o0/50 hover: border-cyan-50o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5">;
                                <CardContent className="p-6 text-center">;
                                    <div className="flex justify-center mb-4">;
                                        {feature.icon}
                                    </div>;
                                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>;
                                    <p className="text-gray-40o0">{feature.description}</p>;
                                </CardContent>;
                            </Card>;
                        ))}
                    </div>;
                </div>;
            </section>;
            {/* Content, Types, Section */}
            <section className="py-20 px-4 sm: px-6 l,;
    g:px-8 bg-slate-80o0/30">;
                <div className="max-w-7xl mx-auto">;
                    <div className="text-center mb-16">;
                        <h2 className="text-4xl m,;
  d:text-5xl font-bold text-white mb-6">;
                            Create, Any, Type of <span className="text-purple-40o0">Content</span>;
                        </h2>;
                        <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
                            From, blog, posts to, social, media content, our, AI, generator handles, all, your content needs.;
                        </p>;
                    </div>;
                    <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
                        {contentTypes.map((typeindex) => (;
                            <Card key={index} className="bg-slate-80o0/50 border-slate-70o0/50 hover: border-purple-50o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5">;
                                <CardContent className="p-6 text-center">;
                                    <div className="flex justify-center mb-4">;
                                        {type.icon}
                                    </div>;
                                    <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>;
                                    <p className="text-gray-40o0">{type.description}</p>;
                                </CardContent>;
                            </Card>;
                        ))}
                    </div>;
                </div>;
            </section>;
            {/* Pricing Section */}
            <section className="py-20 px-4 sm: px-6 lg:px-8">;
                <div className="max-w-7xl mx-auto">;
                    <div className="text-center mb-16">;
                        <h2 className="text-4xl m,;
    d:text-5xl font-bold text-white mb-6">;
                            Choose Your <span className="text-cyan-40o0">Plan</span>;
                        </h2>;
                        <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
                            Flexible, pricing, plans designed, to, grow with, your, content needs.;
                        </p>;
                    </div>;
                    <div className="grid grid-cols-1 m,;
  d:grid-cols-3 gap-8">;
                        {pricingPlans.map((planindex) => (;
                            <Card key={index} className={`relative bg-slate-80o0/50 border-slate-70o0/50 hover: border-cyan-50o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5 ${
                                plan.popular ? 'border-cyan-50o0 shadow-cyan-50o0/25' : '';
                            }`}>;
                                {plan.popular && (;
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                                        <Badge className="bg-gradient-to-r from-cyan-50o0 to-purple-50o0 text-white px-4 py-2">;
                                            Most Popular;
                                        </Badge>;
                                    </div>;
                                )}
                                <CardHeader className="text-center pb-4">;
                                    <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>;
                                    <div className="mt-4">;
                                        <span className="text-4xl font-bold text-cyan-40o0">{plan.price}</span>;
                                        <span className="text-gray-40o0">{plan.period}</span>;
                                    </div>;
                                    <p className="text-gray-40o0 mt-2">{plan.description}</p>;
                                </CardHeader>;
                                <CardContent>;
                                    <ul className="space-y-3 mb-6">;
                                        {plan.features.map((featurefeatureIndex) => (;
                                            <li key={featureIndex} className="flex items-center text-gray-30o0">;
                                                <CheckCircle className="w-5 h-5 text-cyan-40o0 mr-3 flex-shrink-0" />;
                                                {feature}
                                            </li>;
                                        ))}
                                    </ul>;
                                    <Button className="w-full bg-gradient-to-r from-cyan-50o0 to-purple-50o0 hover: from-cyan-60o0 hove,;
  r:to-purple-60o0 text-white">;
                                        Get Started;
                                    </Button>;
                                </CardContent>;
                            </Card>;
                        ))}
                    </div>;
                </div>;
            </section>;
            {/* Benefits Section */}
            <section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-80o0/30">;
                <div className="max-w-7xl mx-auto">;
                    <div className="text-center mb-16">;
                        <h2 className="text-4xl m,;
    d:text-5xl font-bold text-white mb-6">;
                            Why, Choose, Our <span className="text-purple-40o0">AI Generator</span>;
                        </h2>;
                        <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
                            Experience, the, power of AI-driven, content, creation with, these, key benefits.;
                        </p>;
                    </div>;
                    <div className="grid grid-cols-1 md:grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
                        {benefits.map((benefitindex) => (;
                            <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-slate-80o0/50, border, border-slate-70o0/50">;
                                <CheckCircle className="w-6 h-6 text-cyan-40o0 mt-1 flex-shrink-0" />;
                                <span className="text-gray-30o0">{benefit}</span>;
                            </div>;
                        ))}
                    </div>;
                </div>;
            </section>;
            {/* CTA Section */}
            <section className="py-20 px-4 sm: px-6 lg:px-8">;
                <div className="max-w-4xl mx-auto text-center">;
                    <h2 className="text-4xl m,;
    d:text-5xl font-bold text-white mb-6">;
                        Ready, to, Transform Your <span className="text-cyan-40o0">Content Creation</span>?;
                    </h2>;
                    <p className="text-xl text-gray-30o0 mb-8">;
                        Join, thousands, of businesses, using, AI to, create, better content faster.;
                    </p>;
                    <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                        <Button className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-purple-50o0 text-white font-semibold text-lg hover:from-cyan-60o0 hove,;
    r:to-purple-60o0 transition-all duration-30o0">;
                            <Star className="w-5 h-5 mr-2" />;
                            Start, Free, Trial;
                        </Button>;
                        <Button variant="outline" className="px-8 py-4 border-cyan-50o0/30 text-cyan-40o0 font-semibold text-lg hove,;
  r: bg-cyan-50o0/10 transition-all duration-30o0">;
                            <ArrowRight className="w-5 h-5 mr-2" />;
                            Learn More;
                        </Button>;
                    </div>;
                </div>;
            </section>;
        </div>;
    );
};
;