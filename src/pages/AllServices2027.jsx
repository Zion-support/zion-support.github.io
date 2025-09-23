import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
    Brain, Cloud, Shield, BarChart3, Code, DollarSign, Heart, 
    ShoppingCart, GraduationCap, Phone, Mail, MapPin, Globe, 
    CheckCircle, Star, TrendingUp, Zap, Users, Search, Filter,
    ArrowRight, Award, Clock, Target, Rocket, Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";

// Import all service data
import { MICRO_SAAS_SERVICES } from "@/data/microSaasServices";
import { CUTTING_EDGE_2025_SERVICES } from "@/data/2025-cutting-edge-innovations.jsx";
import { SPECIALIZED_INDUSTRY_SOLUTIONS_2025 } from "@/data/2025-specialized-industry-solutions.jsx";
import { INNOVATIVE_MICRO_SAAS_2025 } from "@/data/2025-innovative-micro-saas-expansion.jsx";

// Combine all services
const ALL_SERVICES = [
    ...MICRO_SAAS_SERVICES,
    ...CUTTING_EDGE_2025_SERVICES,
    ...SPECIALIZED_INDUSTRY_SOLUTIONS_2025,
    ...INNOVATIVE_MICRO_SAAS_2025
];

// Service categories
const SERVICE_CATEGORIES = [
    { id: 'all', name: 'All Services', icon: Globe, count: ALL_SERVICES.length },
    { id: 'ai-services', name: 'AI Services', icon: Brain, count: ALL_SERVICES.filter(s => s.category.includes('AI') || s.tags.includes('AI')).length },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Rocket, count: ALL_SERVICES.filter(s => s.category.includes('Quantum') || s.tags.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: ALL_SERVICES.filter(s => s.category.includes('Security') || s.tags.includes('Security')).length },
    { id: 'business-intelligence', name: 'Business Intelligence', icon: BarChart3, count: ALL_SERVICES.filter(s => s.category.includes('Business') || s.tags.includes('Business')).length },
    { id: 'industry-solutions', name: 'Industry Solutions', icon: Target, count: ALL_SERVICES.filter(s => ['Healthcare', 'Financial Services', 'Manufacturing', 'Energy', 'Transportation', 'Education', 'Real Estate', 'Agriculture', 'Legal Services', 'Media & Entertainment'].includes(s.category)).length },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Lightbulb, count: ALL_SERVICES.filter(s => ['Edge Computing', 'Digital Twin', 'Autonomous Systems', 'Neuromorphic Computing', 'Federated Learning'].includes(s.category)).length }
];

// Contact information
const CONTACT_INFO = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com",
    supportHours: "24/7",
    responseTime: "< 2 hours"
};

// Benefits section
const BENEFITS = [
    {
        icon: <Zap className="h-6 w-6"/>,
        title: "Immediate Deployment",
        description: "All services are ready for immediate deployment with no setup delays"
    },
    {
        icon: <Shield className="h-6 w-6"/>,
        title: "Enterprise Security",
        description: "Bank-level security with SOC 2 compliance and 24/7 monitoring"
    },
    {
        icon: <Users className="h-6 w-6"/>,
        title: "Dedicated Support",
        description: "24/7 technical support with dedicated account managers"
    },
    {
        icon: <TrendingUp className="h-6 w-6"/>,
        title: "Proven ROI",
        description: "Average 300% ROI within 6 months of implementation"
    }
];

export default function AllServices2027() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('featured');

    // Filter services based on category and search
    const filteredServices = ALL_SERVICES.filter(service => {
        const matchesCategory = selectedCategory === 'all' || 
            service.category.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
            service.tags.some(tag => tag.toLowerCase().includes(selectedCategory.replace('-', ' ')));
        
        const matchesSearch = searchQuery === '' || 
            service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        
        return matchesCategory && matchesSearch;
    });

    // Sort services
    const sortedServices = [...filteredServices].sort((a, b) => {
        switch (sortBy) {
            case 'featured':
                return b.featured - a.featured;
            case 'rating':
                return b.rating - a.rating;
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'ai-score':
                return b.aiScore - a.aiScore;
            default:
                return 0;
        }
    });

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Complete Micro SAAS Solutions Portfolio
                    </h1>
                    <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
                        Discover our comprehensive suite of 100+ AI-powered micro SAAS services. 
                        From cutting-edge quantum computing to industry-specific solutions, 
                        we provide enterprise-grade technology at startup prices.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
                            <Globe className="h-5 w-5 mr-2"/>
                            Explore All Services
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                            <Phone className="h-5 w-5 mr-2"/>
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <section className="py-16 bg-zion-blue-dark">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <div className="text-4xl font-bold mb-2">{ALL_SERVICES.length}+</div>
                            <div className="text-zion-slate-light">Micro SAAS Services</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div className="text-zion-slate-light">Industries Served</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">99%</div>
                            <div className="text-zion-slate-light">Customer Satisfaction</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-zion-slate-light">Global Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-zion-blue">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Why Choose Zion Tech Group?
                        </h2>
                        <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
                            We deliver enterprise-grade solutions with startup agility and proven results
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {BENEFITS.map((benefit, index) => (
                            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white">
                                <CardHeader className="text-center">
                                    <div className="mx-auto w-12 h-12 bg-zion-purple rounded-full flex items-center justify-center mb-4">
                                        {benefit.icon}
                                    </div>
                                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-zion-slate-light">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    {/* Search and Filter */}
                    <div className="mb-8">
                        <div className="flex flex-col md:flex-row gap-4 mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <Input
                                    placeholder="Search services..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-blue"
                            >
                                <option value="featured">Featured First</option>
                                <option value="rating">Highest Rated</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="ai-score">AI Score</option>
                            </select>
                        </div>

                        {/* Category Tabs */}
                        <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-7">
                                {SERVICE_CATEGORIES.map((category) => (
                                    <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                                        <category.icon className="h-4 w-4" />
                                        <span className="hidden md:inline">{category.name}</span>
                                        <Badge variant="secondary" className="ml-1">{category.count}</Badge>
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sortedServices.map((service) => (
                            <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-2">
                                        <Badge variant="outline" className="text-xs">
                                            {service.category}
                                        </Badge>
                                        {service.featured && (
                                            <Star className="h-5 w-5 text-yellow-500 fill-current" />
                                        )}
                                    </div>
                                    <CardTitle className="text-lg">{service.title}</CardTitle>
                                    <CardDescription className="line-clamp-2">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {/* Price */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl font-bold text-zion-blue">
                                                ${service.price}
                                            </span>
                                            <span className="text-sm text-gray-500">/month</span>
                                        </div>

                                        {/* Features */}
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-sm">Key Features:</h4>
                                            <ul className="space-y-1">
                                                {service.features.slice(0, 3).map((feature, index) => (
                                                    <li key={index} className="flex items-center text-sm text-gray-600">
                                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Benefits */}
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-sm">Benefits:</h4>
                                            <ul className="space-y-1">
                                                {service.benefits.slice(0, 2).map((benefit, index) => (
                                                    <li key={index} className="flex items-center text-sm text-gray-600">
                                                        <TrendingUp className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Rating and AI Score */}
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center">
                                                <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                                                <span>{service.rating}</span>
                                                <span className="text-gray-500 ml-1">({service.reviewCount})</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Brain className="h-4 w-4 text-purple-500 mr-1" />
                                                <span>AI: {service.aiScore}</span>
                                            </div>
                                        </div>

                                        {/* Market Price */}
                                        <div className="text-sm text-gray-500">
                                            Market Price: {service.marketPrice}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2">
                                            <Button className="flex-1" size="sm">
                                                <Link to={service.website} target="_blank" className="flex items-center">
                                                    Learn More
                                                    <ArrowRight className="h-4 w-4 ml-1" />
                                                </Link>
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                <Mail className="h-4 w-4 mr-1" />
                                                Contact
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* No Results */}
                    {sortedServices.length === 0 && (
                        <div className="text-center py-20">
                            <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">No services found</h3>
                            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Get in touch with our team to discuss your specific needs and discover 
                            how our micro SAAS solutions can drive your success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Phone className="h-5 w-5 text-zion-blue mr-3" />
                                        <div>
                                            <div className="font-semibold">Phone</div>
                                            <div className="text-gray-600">{CONTACT_INFO.phone}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="h-5 w-5 text-zion-blue mr-3" />
                                        <div>
                                            <div className="font-semibold">Email</div>
                                            <div className="text-gray-600">{CONTACT_INFO.email}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-5 w-5 text-zion-blue mr-3" />
                                        <div>
                                            <div className="font-semibold">Address</div>
                                            <div className="text-gray-600">{CONTACT_INFO.address}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Globe className="h-5 w-5 text-zion-blue mr-3" />
                                        <div>
                                            <div className="font-semibold">Website</div>
                                            <div className="text-gray-600">{CONTACT_INFO.website}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-4">Support & Availability</h3>
                                <div className="space-y-2 text-gray-600">
                                    <div>• Support Hours: {CONTACT_INFO.supportHours}</div>
                                    <div>• Response Time: {CONTACT_INFO.responseTime}</div>
                                    <div>• Global Coverage</div>
                                    <div>• Dedicated Account Managers</div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input placeholder="First Name" />
                                    <Input placeholder="Last Name" />
                                </div>
                                <Input placeholder="Company" />
                                <Input placeholder="Email" type="email" />
                                <Input placeholder="Phone" />
                                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-blue">
                                    <option>Select Service Category</option>
                                    <option>AI Services</option>
                                    <option>Quantum Computing</option>
                                    <option>Cybersecurity</option>
                                    <option>Business Intelligence</option>
                                    <option>Industry Solutions</option>
                                    <option>Emerging Tech</option>
                                </select>
                                <textarea 
                                    placeholder="Tell us about your project or requirements..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-blue"
                                    rows={4}
                                />
                                <Button className="w-full" size="lg">
                                    <Mail className="h-5 w-5 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Start Your Digital Transformation Journey
                    </h2>
                    <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                        Join thousands of businesses already leveraging our micro SAAS solutions 
                        to accelerate growth, reduce costs, and gain competitive advantages.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
                            <Rocket className="h-5 w-5 mr-2" />
                            Explore Services
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                            <Phone className="h-5 w-5 mr-2" />
                            Schedule Demo
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}