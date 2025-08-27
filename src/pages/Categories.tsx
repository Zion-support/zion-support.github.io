import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Shield, Cloud, Database, Code, Zap, Users, TrendingUp, Globe, Rocket } from 'lucide-react';

export default function Categories() {
    const serviceCategories = [
        {
            id: 'ai-ml',
            name: 'AI & Machine Learning',
            description: 'Advanced artificial intelligence and machine learning solutions',
            icon: Brain,
            services: ['AI Content Generation', 'Machine Learning Models', 'Natural Language Processing', 'Computer Vision'],
            color: 'from-purple-500 to-pink-500',
            count: 24
        },
        {
            id: 'cybersecurity',
            name: 'Cybersecurity',
            description: 'Comprehensive security and compliance solutions',
            icon: Shield,
            services: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Management', 'Security Audits'],
            color: 'from-red-500 to-orange-500',
            count: 18
        },
        {
            id: 'cloud-devops',
            name: 'Cloud & DevOps',
            description: 'Cloud infrastructure and development operations',
            icon: Cloud,
            services: ['Cloud Migration', 'DevOps Automation', 'Infrastructure as Code', 'Container Orchestration'],
            color: 'from-blue-500 to-cyan-500',
            count: 22
        },
        {
            id: 'data-analytics',
            name: 'Data & Analytics',
            description: 'Data processing and business intelligence',
            icon: Database,
            services: ['Data Engineering', 'Business Intelligence', 'Predictive Analytics', 'Data Visualization'],
            color: 'from-green-500 to-emerald-500',
            count: 16
        },
        {
            id: 'software-development',
            name: 'Software Development',
            description: 'Custom software and application development',
            icon: Code,
            services: ['Web Development', 'Mobile Apps', 'API Development', 'Custom Software'],
            color: 'from-indigo-500 to-purple-500',
            count: 28
        },
        {
            id: 'automation',
            name: 'Process Automation',
            description: 'Workflow and business process automation',
            icon: Zap,
            services: ['RPA Solutions', 'Workflow Automation', 'Business Process Optimization', 'Integration Services'],
            color: 'from-yellow-500 to-orange-500',
            count: 14
        },
        {
            id: 'consulting',
            name: 'IT Consulting',
            description: 'Strategic technology consulting and advisory',
            icon: Users,
            services: ['Technology Strategy', 'Digital Transformation', 'IT Assessment', 'Project Management'],
            color: 'from-gray-500 to-slate-500',
            count: 12
        },
        {
            id: 'emerging-tech',
            name: 'Emerging Technologies',
            description: 'Cutting-edge and innovative technology solutions',
            icon: Rocket,
            services: ['Blockchain', 'IoT Solutions', 'Quantum Computing', 'Edge Computing'],
            color: 'from-pink-500 to-rose-500',
            count: 8
        }
    ];

    return (
        <>
            <SEO 
                title="Service Categories - Zion Tech Group" 
                description="Browse tech services by category and find what you need." 
                canonical="https://ziontechgroup.com/categories" 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="mb-8">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
                                <Globe className="w-4 h-4 mr-2" />
                                Service Categories
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Browse Our
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Service Categories</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                                Explore our comprehensive range of tech services organized by category. Find exactly what you need to transform your business.
                            </p>
                        </div>

                        {/* Category Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-zion-cyan mb-2">8</div>
                                <div className="text-zion-slate-light">Main Categories</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-zion-cyan mb-2">150+</div>
                                <div className="text-zion-slate-light">Total Services</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-zion-cyan mb-2">24/7</div>
                                <div className="text-zion-slate-light">Support Available</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-zion-cyan mb-2">99.9%</div>
                                <div className="text-zion-slate-light">Uptime SLA</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Grid */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {serviceCategories.map((category) => (
                                <Card key={category.id} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/10 group">
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                <category.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <Badge variant="outline" className="border-zion-blue-light text-zion-slate-light">
                                                {category.count} services
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-xl text-white mb-2">{category.name}</CardTitle>
                                        <CardDescription className="text-zion-slate-light">
                                            {category.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="mb-6">
                                            <h4 className="text-white font-semibold mb-3">Popular Services:</h4>
                                            <div className="space-y-2">
                                                {category.services.map((service, index) => (
                                                    <div key={index} className="flex items-center text-sm text-zion-slate-light">
                                                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                                                        {service}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                            Explore {category.name}
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-zion-blue-dark">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Can't Find What You're Looking For?</h2>
                        <p className="text-zion-slate-light mb-8">
                            Our team of experts can help you find the right solution or create a custom service tailored to your specific needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                Contact Our Experts
                            </Button>
                            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                                Request Custom Quote
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
