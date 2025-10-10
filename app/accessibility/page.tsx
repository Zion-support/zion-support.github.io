'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Eye, MousePointer, Volume2, Shield, Users, Globe, Zap, ArrowRight, Star } from 'lucide-react';

const AccessibilityPage: React.FC = () => {
    const features = [
        {
            icon: Eye,
            title: 'Visual Accessibility',
            description: 'Comprehensive visual accessibility features including high contrast modes, text scaling, and screen reader compatibility.',
            benefits: ['High contrast mode', 'Text scaling', 'Screen reader support', 'Color blind friendly']
        },
        {
            icon: MousePointer,
            title: 'Motor Accessibility',
            description: 'Keyboard navigation and alternative input methods for users with motor impairments.',
            benefits: ['Keyboard navigation', 'Voice commands', 'Switch control', 'Customizable controls']
        },
        {
            icon: Volume2,
            title: 'Audio Accessibility',
            description: 'Audio alternatives and visual indicators for users with hearing impairments.',
            benefits: ['Audio descriptions', 'Visual alerts', 'Captions', 'Sign language support']
        },
        {
            icon: Shield,
            title: 'Security & Privacy',
            description: 'Secure accessibility features that protect user data while providing inclusive experiences.',
            benefits: ['Data protection', 'Secure forms', 'Privacy controls', 'Encrypted communications']
        },
        {
            icon: Users,
            title: 'Inclusive Design',
            description: 'Design principles that ensure our solutions work for users of all abilities and backgrounds.',
            benefits: ['Universal design', 'Cultural sensitivity', 'Language support', 'Age-friendly interfaces']
        },
        {
            icon: Globe,
            title: 'Global Standards',
            description: 'Compliance with international accessibility standards including WCAG 2.1 AA and Section 508.',
            benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards']
        }
    ];
    const standards = [
        {
            name: 'WCAG 2.1 AA',
            description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
            status: 'Fully Compliant'
        },
        {
            name: 'Section 508',
            description: 'US federal accessibility standards for electronic and information technology',
            status: 'Fully Compliant'
        },
        {
            name: 'ADA',
            description: 'Americans with Disabilities Act compliance for digital accessibility',
            status: 'Fully Compliant'
        },
        {
            name: 'EN 301 549',
            description: 'European accessibility standard for ICT products and services',
            status: 'Fully Compliant'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Accessibility Solutions - Zion Tech Group | Inclusive Digital Experiences</title>
                <meta name="description" content="Comprehensive accessibility solutions ensuring inclusive digital experiences for all users with WCAG 2.1 AA compliance and advanced assistive technologies." />
                <meta name="keywords" content="accessibility, WCAG, inclusive design, assistive technology, digital accessibility, ADA compliance" />
            </Helmet>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                {/* Hero Section */}
                <section className="relative py-20 px-4 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="relative max-w-7xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Accessibility
                            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Solutions
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure
                            your applications are usable by people of all abilities and comply with international standards.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
                                Get Accessibility Audit
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Comprehensive Accessibility Features
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Advanced accessibility solutions that make your digital products inclusive for all users
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-300 mb-4">{feature.description}</p>
                                    {feature.benefits && (
                                        <ul className="space-y-2">
                                            {feature.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-center text-gray-300">
                                                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                                                    {benefit}
                                                </li>
              ))}
                                        </ul>
                                    )}
                                </div>
              ))}
                        </div>
                    </div>
                </section>

                {/* Standards Section */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Compliance Standards
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                We ensure full compliance with international accessibility standards
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {standards.map((standard, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{standard.name}</h3>
                                    <p className="text-gray-300 text-sm mb-3">{standard.description}</p>
                                    <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                                        {standard.status}
                                    </span>
                                </div>
              ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Ready to Make Your Digital Products Accessible?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Contact our accessibility experts to audit your current solutions and implement inclusive design practices.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                                    Start Accessibility Audit
                                </button>
                                <button className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                                    View Our Standards
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AccessibilityPage;