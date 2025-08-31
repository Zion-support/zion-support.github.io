import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Clock, CheckCircle, AlertCircle, Send, Phone, Mail, MapPin, Star, Users, Zap, Shield, Brain, Cloud, Smartphone, Globe, Database, BarChart3, Palette, Code, Server, Wifi, Briefcase } from 'lucide-react';

export default function RequestQuote() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comp: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        urgency: 'medium'
    });
    
    const [submissionStatus, setSubmissionStatus] = useState('idle');
    
    const projectTypes = [
        { value: 'web-development', label: 'Web Development', icon: Globe, description: 'Custom websites and web applications' },
        { value: 'mobile-app', label: 'Mobile App Development', icon: Smartphone, description: 'iOS and Android applications' },
        { value: 'ai-ml', label: 'AI & Machine Learning', icon: Brain, description: 'Intelligent automation and analytics' },
        { value: 'cloud-infrastructure', label: 'Cloud Infrastructure', icon: Cloud, description: 'AWS, Azure, GCP solutions' },
        { value: 'cybersecurity', label: 'Cybersecurity', icon: Shield, description: 'Security audits and implementation' },
        { value: 'data-analytics', label: 'Data Analytics', icon: BarChart3, description: 'Business intelligence and reporting' },
        { value: 'ui-ux-design', label: 'UI/UX Design', icon: Palette, description: 'User interface and experience design' },
        { value: 'software-development', label: 'Custom Software', icon: Code, description: 'Enterprise software solutions' },
        { value: 'devops', label: 'DevOps & CI/CD', icon: Server, description: 'Automation and deployment pipelines' },
        { value: 'network-infrastructure', label: 'Network Infrastructure', icon: Wifi, description: 'Network design and setup' },
        { value: 'database-design', label: 'Database Design', icon: Database, description: 'Database architecture and optimization' },
        { value: 'consulting', label: 'IT Consulting', icon: Briefcase, description: 'Strategic technology guidance' }
    ];
    
    const budgetRanges = [
        { value: 'under-10k', label: 'Under $10,000', description: 'Small projects and MVPs' },
        { value: '10k-25k', label: '$10,000 - $25,000', description: 'Medium-sized applications' },
        { value: '25k-50k', label: '$25,000 - $50,000', description: 'Complex applications' },
        { value: '50k-100k', label: '$50,000 - $100,000', description: 'Enterprise solutions' },
        { value: '100k-plus', label: '$100,000+', description: 'Large-scale projects' },
        { value: 'custom', label: 'Custom Pricing', description: 'Let\'s discuss your needs' }
    ];
    
    const timelineOptions = [
        { value: 'asap', label: 'ASAP', description: 'Immediate start required' },
        { value: '1-2-weeks', label: '1-2 Weeks', description: 'Quick turnaround needed' },
        { value: '1-month', label: '1 Month', description: 'Standard project timeline' },
        { value: '2-3-months', label: '2-3 Months', description: 'Complex project timeline' },
        { value: '3-plus-months', label: '3+ Months', description: 'Long-term project' },
        { value: 'flexible', label: 'Flexible', description: 'Timeline can be discussed' }
    ];
    
    const urgencyLevels = [
        { value: 'low', label: 'Low', description: 'No immediate deadline', color: 'text-green-400' },
        { value: 'medium', label: 'Medium', description: 'Standard project timeline', color: 'text-yellow-400' },
        { value: 'high', label: 'High', description: 'Urgent delivery needed', color: 'text-orange-400' },
        { value: 'critical', label: 'Critical', description: 'Emergency situation', color: 'text-red-400' }
    ];
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus('submitting');
        
        // Simulate API call
        setTimeout(() => {
            setSubmissionStatus('success');
            // Reset form after success
            setTimeout(() => {
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    comp: '',
                    projectType: '',
                    budget: '',
                    timeline: '',
                    description: '',
                    urgency: 'medium'
                });
                setSubmissionStatus('idle');
            }, 3000);
        }, 2000);
    };
    
    const isFormValid = formData.firstName && formData.lastName && formData.email && formData.projectType;
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Get Your Free Quote
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Ready to transform your business with cutting-edge technology? Let's discuss your project and provide you with a detailed quote.
                        </p>
                    </motion.div>
                    
                    {/* Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                    >
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                            <Calculator className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Transparent Pricing</h3>
                            <p className="text-gray-300">Get detailed breakdowns with no hidden costs</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                            <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Quick Response</h3>
                            <p className="text-gray-300">Receive your quote within 24 hours</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                            <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Expert Consultation</h3>
                            <p className="text-gray-300">Free consultation with our technology experts</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quote Form */}
            <section className="pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                    >
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">
                            Project Details
                        </h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Personal Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-white font-medium mb-2">First Name *</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white font-medium mb-2">Last Name *</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-white font-medium mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white font-medium mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-white font-medium mb-2">Company</label>
                                <input
                                    type="text"
                                    name="comp"
                                    value={formData.comp}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your company name"
                                />
                            </div>
                            
                            {/* Project Type */}
                            <div>
                                <label className="block text-white font-medium mb-4">Project Type *</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {projectTypes.map((type) => (
                                        <label key={type.value} className="relative cursor-pointer">
                                            <input
                                                type="radio"
                                                name="projectType"
                                                value={type.value}
                                                checked={formData.projectType === type.value}
                                                onChange={handleInputChange}
                                                className="sr-only"
                                                required
                                            />
                                            <div className={`p-4 rounded-lg border-2 transition-all ${
                                                formData.projectType === type.value
                                                    ? 'border-blue-500 bg-blue-500/20'
                                                    : 'border-white/30 bg-white/10 hover:border-white/50'
                                            }`}>
                                                <type.icon className="w-8 h-8 text-blue-400 mb-3" />
                                                <h4 className="font-semibold text-white mb-2">{type.label}</h4>
                                                <p className="text-sm text-gray-300">{type.description}</p>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Budget and Timeline */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-white font-medium mb-4">Budget Range</label>
                                    <div className="space-y-3">
                                        {budgetRanges.map((budget) => (
                                            <label key={budget.value} className="flex items-center cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="budget"
                                                    value={budget.value}
                                                    checked={formData.budget === budget.value}
                                                    onChange={handleInputChange}
                                                    className="mr-3"
                                                />
                                                <div>
                                                    <div className="text-white font-medium">{budget.label}</div>
                                                    <div className="text-sm text-gray-300">{budget.description}</div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-white font-medium mb-4">Timeline</label>
                                    <div className="space-y-3">
                                        {timelineOptions.map((timeline) => (
                                            <label key={timeline.value} className="flex items-center cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="timeline"
                                                    value={timeline.value}
                                                    checked={formData.timeline === timeline.value}
                                                    onChange={handleInputChange}
                                                    className="mr-3"
                                                />
                                                <div>
                                                    <div className="text-white font-medium">{timeline.label}</div>
                                                    <div className="text-sm text-gray-300">{timeline.description}</div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Urgency */}
                            <div>
                                <label className="block text-white font-medium mb-4">Project Urgency</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {urgencyLevels.map((level) => (
                                        <label key={level.value} className="cursor-pointer">
                                            <input
                                                type="radio"
                                                name="urgency"
                                                value={level.value}
                                                checked={formData.urgency === level.value}
                                                onChange={handleInputChange}
                                                className="sr-only"
                                            />
                                            <div className={`p-4 rounded-lg border-2 text-center transition-all ${
                                                formData.urgency === level.value
                                                    ? 'border-blue-500 bg-blue-500/20'
                                                    : 'border-white/30 bg-white/10 hover:border-white/50'
                                            }`}>
                                                <div className={`text-2xl mb-2 ${level.color}`}>
                                                    {level.value === 'low' && '🟢'}
                                                    {level.value === 'medium' && '🟡'}
                                                    {level.value === 'high' && '🟠'}
                                                    {level.value === 'critical' && '🔴'}
                                                </div>
                                                <div className="font-semibold text-white mb-1">{level.label}</div>
                                                <div className="text-xs text-gray-300">{level.description}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Project Description */}
                            <div>
                                <label className="block text-white font-medium mb-2">Project Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Describe your project requirements, goals, and any specific features you need..."
                                />
                            </div>
                            
                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={!isFormValid || submissionStatus === 'submitting'}
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                                >
                                    {submissionStatus === 'submitting' ? (
                                        <span className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Processing...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center">
                                            <Send className="w-5 h-5 mr-2" />
                                            Get Free Quote
                                        </span>
                                    )}
                                </button>
                            </div>
                            
                            {/* Submission Status */}
                            {submissionStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center"
                                >
                                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                                    <h3 className="text-lg font-semibold text-green-400 mb-1">Quote Request Submitted!</h3>
                                    <p className="text-green-300">We'll review your project and get back to you within 24 hours with a detailed quote.</p>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
