import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Zap, Shield, Globe, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const FeatureCTAs = () => {
    const features = [
        {
            title: "AI Talent Matching",
            description: "Find the perfect talent for your projects with our advanced AI matching algorithm",
            icon: <Users className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700"/>,
            link: "/zion-hire-ai",
            badge: "Popular",
            details: "Connect with pre-vetted tech professionals who match your project requirements and company culture."
        },
        {
            title: "AI-Powered Services",
            description: "Transform your business with cutting-edge AI solutions and automation",
            icon: <Zap className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700"/>,
            link: "/services",
            badge: "New",
            details: "Leverage artificial intelligence to streamline operations, enhance decision-making, and drive innovation."
        },
        {
            title: "Cybersecurity Solutions",
            description: "Protect your digital assets with enterprise-grade security solutions",
            icon: <Shield className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700"/>,
            link: "/services/cybersecurity",
            badge: "Featured",
            details: "Comprehensive security services including threat detection, vulnerability assessment, and compliance management."
        },
        {
            title: "Global IT Infrastructure",
            description: "Build and manage scalable IT infrastructure across multiple locations",
            icon: <Globe className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700"/>,
            link: "/services/it-infrastructure",
            badge: "Enterprise",
            details: "Design, implement, and maintain robust IT infrastructure solutions for global organizations."
        },
        {
            title: "Premium Talent Network",
            description: "Access our exclusive network of top-tier tech professionals",
            icon: <Star className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700"/>,
            link: "/talent",
            badge: "Premium",
            details: "Connect with elite tech talent through our curated network of industry experts and specialists."
        },
        {
            title: "24/7 Support",
            description: "Get round-the-clock technical support and maintenance services",
            icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700"/>,
            link: "/contact",
            badge: "Support",
            details: "Continuous technical support and maintenance services to ensure your systems run smoothly."
        }
    ];

    const ctaItems = [
        {
            title: "Start Hiring",
            description: "Find the perfect talent for your next project",
            href: "/talent",
            icon: Users,
            color: "from-blue-600 to-blue-700",
            hoverColor: "from-blue-700 to-blue-800"
        },
        {
            title: "Explore Services",
            description: "Discover our comprehensive AI and IT solutions",
            href: "/services",
            icon: Zap,
            color: "from-purple-600 to-purple-700",
            hoverColor: "from-purple-700 to-purple-800"
        },
        {
            title: "Get Support",
            description: "24/7 technical support and maintenance",
            href: "/contact",
            icon: Shield,
            color: "from-green-600 to-green-700",
            hoverColor: "from-green-700 to-green-800"
        },
        {
            title: "Learn More",
            description: "Access our knowledge base and resources",
            href: "/help",
            icon: Star,
            color: "from-orange-600 to-orange-700",
            hoverColor: "from-orange-700 to-orange-800"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-background to-background/90">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-3">Discover Zion's Powerful Features</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                    {feature.icon}
                                    {feature.badge && (
                                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                                            {feature.badge}
                                        </Badge>
                                    )}
                                </div>
                                <CardTitle className="mt-4">{feature.title}</CardTitle>
                                <CardDescription className="line-clamp-2">{feature.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{feature.details}</p>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full gap-1">
                                    <Link to={feature.link}>
                                        <span>Explore {feature.title}</span>
                                        <ArrowRight className="h-4 w-4"/>
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 bg-slate-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Choose your next step and begin your journey with Zion Tech Group
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ctaItems.map((item, index) => (
                            <a 
                                key={index} 
                                href={item.href} 
                                className="group bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}>
                                    <item.icon className="w-8 h-8 text-white"/>
                                </div>
                                
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
                                    {item.description}
                                </p>
                                
                                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} text-white font-medium rounded-lg hover:bg-gradient-to-r ${item.hoverColor} transition-all duration-300`}>
                                    Get Started
                                    <ArrowRight className="w-4 h-4 ml-2"/>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-400 mb-4">
                            Need help choosing? Our experts are here to guide you.
                        </p>
                        <a 
                            href="/contact" 
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Talk to an Expert
                            <ArrowRight className="w-5 h-5 ml-2"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureCTAs;
