import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Zap, Shield, Code, Rocket } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <SEO 
                title="About Us - Zion Tech Group"
                description="Learn about Zion Tech Group's mission to transform businesses through AI, cloud, and technology solutions."
                keywords="about, company, team, mission, AI, technology, cloud solutions"
            />
            
            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                    >
                        About Zion Tech Group
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
                    >
                        We are a global technology company dedicated to empowering businesses with cutting-edge AI, cloud, and digital transformation solutions.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex items-center mb-6">
                                <Target className="h-8 w-8 text-blue-400 mr-3" />
                                <h2 className="text-3xl font-bold">Our Mission</h2>
                            </div>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                To democratize access to advanced technology by providing innovative, scalable, and secure AI and cloud solutions that empower businesses to thrive in the digital age.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="flex items-center mb-6">
                                <Rocket className="h-8 w-8 text-purple-400 mr-3" />
                                <h2 className="text-3xl font-bold">Our Vision</h2>
                            </div>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                To be the world's leading provider of AI-powered technology solutions, recognized for our innovation, reliability, and commitment to client success.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
