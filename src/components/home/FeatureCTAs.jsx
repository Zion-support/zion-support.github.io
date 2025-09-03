<<<<<<< HEAD
export function FeatureCTAs() { const features = [{ title: "AI-Powered Talent Matching", description:"Connect with the perfect tech talent using our advanced AI algorithms", icon: ( <Users className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" /> ), link: "/talent", badge: "Popular", details:"Our AI-driven platform matches you with verified tech professionals based on skills, experience, and project requirements."}, { title: "Micro SAAS Solutions", description:"Access cutting-edge software solutions for every business need", icon: (" <Cpu className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" /> ), link: "/services", badge: "New", details:"Discover innovative micro SAAS applications that can transform your business operations and boost productivity."}, { title: "Enterprise IT Services", description:"Comprehensive IT solutions for large-scale business transformation", icon: (" <Briefcase className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" /> ), link: "/enterprise", badge: "Enterprise", details:"End-to-end IT services including infrastructure, security, cloud migration, and digital transformation."}, { title: "Cybersecurity & Compliance", description:"Protect your business with enterprise-grade security solutions", icon: (" <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" /> ), link: "/cybersecurity", badge: "Critical", details:"Comprehensive security services including threat detection, compliance management, and incident response."}, { title: "Quantum Computing Solutions", description:"Leverage the power of quantum computing for complex problem-solving", icon: (" <Zap className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700" /> ), link: "/quantum", badge: "Cutting-Edge", details:"Explore quantum computing applications for optimization, cryptography, and scientific research."}, { title: "AI Recruiting Platform", description: "Streamline your hiring process with intelligent automation", icon: (" <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" /> ), link: "/zion-hire-ai", badge: "Premium", details:"Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."}, ]; const ctaItems = [{ title: "Find Talent", description: "Connect with verified tech professionals", href: "/talent", icon: Users, color: "from-blue-500 to-blue-600", hoverColor: "from-blue-600 to-blue-700"}, { title: "Explore Services", description: "Discover innovative solutions", href: "/services", icon: Rocket, color: "from-purple-500 to-purple-600", hoverColor: "from-purple-600 to-purple-700"}, { title: "Get Quote", description: "Request custom pricing", href: "/contact", icon: Target, color: "from-green-500 to-green-600", hoverColor: "from-green-600 to-green-700"}, { title: "Learn More", description: "Explore our resources", href: "/resources", icon: TrendingUp, color: "from-orange-500 to-orange-600", hoverColor: "from-orange-600 to-orange-700"}, ]; return(" <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">" <div className="text-center mb-16">" <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> Explore Our{"}" <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Solutions </span> </h2>" <p className="text-xl text-gray-300 max-w-3xl mx-auto"> Discover comprehensive solutions designed to accelerate your business growth and digital transformation.</p> </div> " <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> {features.map((feature, index) => ( <div key={index}" className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300" >" <div className="flex items-start justify-between mb-4">" <div className="text-slate-300">{feature.icon}</div> {feature.badge && (" <span className="px-3 py-1 text-xs font-medium bg-zion-purple/20 text-zion-purple border border-zion-purple/30 rounded-full"> {feature.badge} </span> )} </div>" <h3 className="text-xl font-semibold text-white mb-2"> {feature.title} </h3>" <p className="text-gray-300 text-sm mb-4"> {feature.description} </p>" <p className="text-gray-400 text-sm mb-4">{feature.details}</p> <Link to={feature.link}" className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200" > Learn More" <ArrowRight className="w-4 h-4 ml-2" /> </Link> </div> ))} </div> " <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> {ctaItems.map((item, index) => (" <Link key={index} to={item.href} className="group block">" <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-xl p-6 text-center hover:border-slate-500/50 transition-all duration-300 group-hover:scale-105"> <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:${item.hoverColor} transition-all duration-300`} >" <item.icon className="w-8 h-8 text-white" /> </div>" <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-200"> {item.title} </h3>" <p className="text-gray-300 text-sm">{item.description}</p> </div> </Link> ))} </div> </div> </section> ); } "` ";"
=======
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Building, Clock, Brain, Server, TrendingUp, CheckCircle } from "lucide-react";
export function FeatureCTAs() {
    const features = [
        {
            title: "AI Services & Solutions",
            description: "Comprehensive AI services from strategy to implementation, including custom model development and AI consulting.",
            icon: <Brain className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700"/>,
            link: "/ai-services",
            badge: "New",
            details: "Transform your business with cutting-edge AI solutions including machine learning, computer vision, NLP, and strategic AI consulting."
        },
        {
            title: "IT Services & Infrastructure",
            description: "Complete IT solutions including cloud management, cybersecurity, DevOps, and infrastructure modernization.",
            icon: <Server className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700"/>,
            link: "/it-services",
            badge: "Popular",
            details: "From cloud migration to cybersecurity, our IT experts help you build robust, scalable, and secure technology infrastructure."
        },
        {
            title: "Digital Marketing Services",
            description: "Full-service digital marketing including SEO, PPC, social media, content marketing, and analytics.",
            icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700"/>,
            link: "/digital-marketing",
            badge: "Featured",
            details: "Drive growth with data-driven marketing strategies, conversion optimization, and comprehensive digital marketing solutions."
        },
        {
            title: "Business Solutions & Consulting",
            description: "Strategic business consulting, process optimization, and digital transformation services.",
            icon: <CheckCircle className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700"/>,
            link: "/business-solutions",
            details: "Our business consultants help you optimize operations, implement automation, and achieve sustainable growth through strategic planning."
        },
        {
            title: "AI Talent Matching",
            description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
            icon: <Search className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700"/>,
            link: "/marketplace",
            badge: "Popular",
            details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities."
        },
        {
            title: "Talent Directory",
            description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
            icon: <Users className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700"/>,
            link: "/talent",
            details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
        },
        {
            title: "Equipment Catalog",
            description: "Find specialized hardware and tech equipment for AI development and research.",
            icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700"/>,
            link: "/equipment",
            details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects."
        },
        {
            title: "Community Hub",
            description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",
            icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700"/>,
            link: "/community",
            details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events."
        },
        {
            title: "Enterprise Solutions",
            description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
            icon: <Building className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700"/>,
            link: "/enterprise",
            details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers."
        },
        {
            title: "Zion Hire AI",
            description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
            icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700"/>,
            link: "/zion-hire-ai",
            badge: "Premium",
            details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."
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
        </section>
    );
}
>>>>>>> cf2ffffd833531dbba8aa60328cfcb5452a016af
>>>>>>> main
