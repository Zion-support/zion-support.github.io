import React, { useState } from 'react';
import { INNOVATIVE_SERVICES_2025 } from "../data/innovativeServices2025";
import { ULTIMATE_INNOVATIVE_SERVICES_2027 } from "../data/ultimateInnovativeServices2027";

const EnhancedComprehensiveServicesShowcase = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedService, setSelectedService] = useState(null);
    
    const allServices = [
        ...INNOVATIVE_SERVICES_2025.map(service => ({
            ...service,
            type: 'AI & Innovation Services',
            displayPrice: service.price,
            name: service.title,
            icon: '🚀'
        })),
        ...ULTIMATE_INNOVATIVE_SERVICES_2027.map(service => ({
            ...service,
            type: 'Ultimate Innovation Services',
            displayPrice: service.price,
            name: service.title,
            icon: '⚡'
        }))
    ];

    const filteredServices = allServices.filter(service => {
        const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch});

    const categories = [
        { id: 'all', name: 'All Services', count: allServices.length },
        { id: 'AI & Innovation Services', name: 'AI & Innovation Services', count: INNOVATIVE_SERVICES_2025.length },
        { id: 'Ultimate Innovation Services', name: 'Ultimate Innovation Services', count: ULTIMATE_INNOVATIVE_SERVICES_2027.length }
    ];

    const handleServiceClick = (service) => {
        setSelectedService(service)};

    const closeModal = () => {
        setSelectedService(null)};

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
            {/* Header Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Zion Tech Group
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            {" "}Innovative Services 2025
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                        Discover our cutting-edge portfolio of micro SAAS solutions, IT services, and AI-powered innovations designed to transform your business and drive competitive advantage in the digital age
                    </p>
                    
                    {/* Key Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                            <div className="text-3xl font-bold text-blue-400 mb-2">{allServices.length}+</div>
                            <div className="text-sm text-gray-300">Innovative Services</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                            <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                            <div className="text-sm text-gray-300">Technology Categories</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                            <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
                            <div className="text-sm text-gray-300">Client Satisfaction</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                            <div className="text-sm text-gray-300">Support Available</div>
                        </div>
                    </div>

                    {/* Search and Filter */}
                    <div className="max-w-2xl mx-auto mb-8">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Search services, features, or technologies..." 
                                value={searchTerm} 
                                onChange={(e) => setSearchTerm(e.target.value)} 
                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                            />
                            <svg className="absolute right-3 top-3 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button 
                                key={category.id} 
                                onClick={() => setActiveCategory(category.id)} 
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                    activeCategory === category.id
                                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                                        : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/20'
                                }`}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map((service, index) => (
                            <div 
                                key={service.id} 
                                onClick={() => handleServiceClick(service)} 
                                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                                
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                                        {service.category}
                                    </span>
                                    <span className="text-lg font-bold text-blue-400">
                                        ${service.displayPrice?.toLocaleString() || 'Contact Us'}
                                    </span>
                                </div>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {service.tags?.slice(0, 3).map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="text-sm text-gray-400">
                                    <div className="flex items-center justify-between">
                                        <span>ROI: {service.roi}</span>
                                        <span>Delivery: {service.estimatedDelivery}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Zion Tech Group */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Why Choose Zion Tech Group?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
                            <p className="text-gray-300">
                                We stay ahead of technology trends, offering the latest AI, quantum computing, and emerging tech solutions
                            </p>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                            <div className="text-4xl mb-4">💼</div>
                            <h3 className="text-xl font-semibold text-white mb-3">Business Focused</h3>
                            <p className="text-gray-300">
                                Every solution is designed with ROI in mind, ensuring measurable business impact and value creation
                            </p>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="text-xl font-semibold text-white mb-3">Enterprise Grade</h3>
                            <p className="text-gray-300">
                                Built with security, scalability, and compliance in mind for enterprise-level reliability
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Let's discuss how our innovative services can help drive your digital transformation and competitive advantage
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                            Get Custom Quote
                        </a>
                        <a href="tel:+13024640950" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                            Call Us: +1 302 464 0950
                        </a>
                    </div>
                </div>
            </section>

            {/* Service Detail Modal */}
            {selectedService && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-slate-900 border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-4xl">{selectedService.icon}</div>
                                <button
                                    onClick={closeModal}
                                    className="text-white/60 hover:text-white transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-4">{selectedService.name}</h2>
                            <p className="text-gray-300 text-lg mb-6">{selectedService.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Service Details</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Category:</span>
                                            <span className="text-white">{selectedService.category}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Subcategory:</span>
                                            <span className="text-white">{selectedService.subcategory}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Price:</span>
                                            <span className="text-white font-semibold">${selectedService.displayPrice?.toLocaleString() || 'Contact Us'}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Pricing Model:</span>
                                            <span className="text-white">{selectedService.pricingModel}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Delivery Time:</span>
                                            <span className="text-white">{selectedService.estimatedDelivery}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">ROI:</span>
                                            <span className="text-green-400 font-semibold">{selectedService.roi}</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                                    <div className="space-y-3">
                                        {selectedService.features?.slice(0, 5).map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                                                </svg>
                                                <span className="text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-4 mt-6">Benefits</h3>
                                    <div className="space-y-3">
                                        {selectedService.benefits?.slice(0, 3).map((benefit, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                                </svg>
                                                <span className="text-gray-300">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${selectedService.name}`}
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                                >
                                    Get Quote
                                </a>
                                <a
                                    href="tel:+13024640950"
                                    className="flex-1 border-2 border-white/30 text-white py-4 px-6 rounded-lg font-semibold text-center hover:bg-white/10 transition-all duration-300"
                                >
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )};

export default EnhancedComprehensiveServicesShowcase;
