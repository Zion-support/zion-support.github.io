import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Target, Zap, TrendingUp, Users, Cloud, CheckCircle, ArrowRight } from 'lucide-react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';

export default function AIMatcher() {
    const [currentStep, setCurrentStep] = useState(1);
    const [answers, setAnswers] = useState({});
    const [recommendations, setRecommendations] = useState([]);

    const questions = [
        {
            id: 'industry',
            question: 'What industry are you in?',
            options: [
                'Technology & Software',
                'Healthcare & Life Sciences',
                'Financial Services',
                'Manufacturing & Industrial',
                'Retail & E-commerce',
                'Education & Training',
                'Government & Public Sector',
                'Other'
            ]
        },
        {
            id: 'company_size',
            question: 'What is your company size?',
            options: [
                'Startup (1-50 employees)',
                'Small Business (51-200 employees)',
                'Medium Business (201-1000 employees)',
                'Enterprise (1000+ employees)'
            ]
        },
        {
            id: 'ai_goals',
            question: 'What are your primary AI goals?',
            options: [
                'Automate repetitive tasks',
                'Improve customer experience',
                'Enhance decision making',
                'Optimize operations',
                'Increase revenue',
                'Reduce costs',
                'Innovate products/services'
            ]
        },
        {
            id: 'budget',
            question: 'What is your budget range for AI implementation?',
            options: [
                'Under $10,000',
                '$10,000 - $50,000',
                '$50,000 - $200,000',
                '$200,000 - $1,000,000',
                'Over $1,000,000'
            ]
        },
        {
            id: 'timeline',
            question: 'What is your implementation timeline?',
            options: [
                'Immediate (0-3 months)',
                'Short-term (3-6 months)',
                'Medium-term (6-12 months)',
                'Long-term (1+ years)'
            ]
        }
    ];

    const aiSolutions = [
        {
            name: 'AI Business Intelligence',
            description: 'Advanced analytics and business intelligence powered by artificial intelligence',
            category: 'Analytics & Insights',
            bestFor: ['Data-driven decision making', 'Performance tracking', 'Market analysis'],
            features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports'],
            href: '/services/ai-business-intelligence',
            icon: TrendingUp
        },
        {
            name: 'AI Marketing Automation',
            description: 'Intelligent marketing automation with AI-driven optimization',
            category: 'Marketing & Sales',
            bestFor: ['Customer acquisition', 'Campaign optimization', 'Lead generation'],
            features: ['Campaign Automation', 'Customer Segmentation', 'ROI Optimization'],
            href: '/services/ai-marketing-automation',
            icon: Target
        },
        {
            name: 'AI Workflow Automation',
            description: 'Streamline business processes with intelligent automation',
            category: 'Process Automation',
            bestFor: ['Operational efficiency', 'Error reduction', 'Cost savings'],
            features: ['Process Mapping', 'Intelligent Routing', 'Performance Analytics'],
            href: '/services/ai-workflow-automation',
            icon: Zap
        },
        {
            name: 'AI Customer Service',
            description: 'Enhance customer support with intelligent chatbots and automation',
            category: 'Customer Experience',
            bestFor: ['24/7 support', 'Customer satisfaction', 'Response time improvement'],
            features: ['Chatbot Integration', 'Sentiment Analysis', 'Automated Responses'],
            href: '/services/ai-customer-service',
            icon: Users
        },
        {
            name: 'AI Cloud Solutions',
            description: 'Scalable cloud infrastructure optimized with artificial intelligence',
            category: 'Infrastructure',
            bestFor: ['Scalability', 'Cost optimization', 'Performance improvement'],
            features: ['Auto-scaling', 'Resource Optimization', 'Cost Management'],
            href: '/services/ai-cloud-solutions',
            icon: Cloud
        },
        {
            name: 'AI Consulting & Strategy',
            description: 'Strategic guidance for AI implementation and digital transformation',
            category: 'Strategy & Consulting',
            bestFor: ['Digital transformation', 'AI strategy', 'Implementation planning'],
            features: ['Strategy Development', 'Technology Assessment', 'Implementation Roadmap'],
            href: '/services/ai-consulting',
            icon: Brain
        }
    ];

    const handleAnswer = (questionId, answer) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    };

    const handleNext = () => {
        if (currentStep < questions.length) {
            setCurrentStep(prev => prev + 1);
        } else {
            generateRecommendations();
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const generateRecommendations = () => {
        // Simple scoring algorithm based on answers
        const scores = {};
        
        aiSolutions.forEach(solution => {
            let score = 0;
            
            // Industry relevance scoring
            if (answers.industry === 'Technology & Software') {
                score += 10;
            } else if (answers.industry === 'Financial Services' || answers.industry === 'Healthcare & Life Sciences') {
                score += 8;
            } else {
                score += 5;
            }
            
            // Company size scoring
            if (answers.company_size === 'Enterprise (1000+ employees)') {
                score += 10;
            } else if (answers.company_size === 'Medium Business (201-1000 employees)') {
                score += 8;
            } else {
                score += 6;
            }
            
            // Budget scoring
            if (answers.budget === 'Over $1,000,000') {
                score += 10;
            } else if (answers.budget === '$200,000 - $1,000,000') {
                score += 8;
            } else if (answers.budget === '$50,000 - $200,000') {
                score += 6;
            } else {
                score += 4;
            }
            
            scores[solution.name] = score;
        });
        
        // Sort solutions by score and take top 3
        const sortedSolutions = aiSolutions
            .sort((a, b) => scores[b.name] - scores[a.name])
            .slice(0, 3);
        
        setRecommendations(sortedSolutions);
    };

    const resetQuiz = () => {
        setCurrentStep(1);
        setAnswers({});
        setRecommendations([]);
    };

    return (
        <>
            <SEO 
                title="AI Talent Matcher - Zion Tech Group" 
                description="Find the perfect tech talent using our AI-powered matching system." 
                canonical="https://ziontechgroup.com/match" 
            />
            <Header />
            
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    {/* Header Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6">
                            <Brain className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            AI Talent Matcher
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Our advanced AI system analyzes your requirements and matches you with the perfect tech talent from our curated network.
                        </p>
                    </motion.div>

                    {/* Quiz Section */}
                    <div className="max-w-4xl mx-auto">
                        {!recommendations.length ? (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.8 }}
                                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8"
                            >
                                {/* Progress Bar */}
                                <div className="mb-8">
                                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                                        <span>Question {currentStep} of {questions.length}</span>
                                        <span>{Math.round((currentStep / questions.length) * 100)}%</span>
                                    </div>
                                    <div className="w-full bg-slate-700 rounded-full h-2">
                                        <div 
                                            className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${(currentStep / questions.length) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Current Question */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-6">
                                        {questions[currentStep - 1].question}
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {questions[currentStep - 1].options.map((option, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleAnswer(questions[currentStep - 1].id, option)}
                                                className={`p-4 text-left rounded-lg border transition-all duration-200 ${
                                                    answers[questions[currentStep - 1].id] === option
                                                        ? 'border-blue-500 bg-blue-500/20 text-white'
                                                        : 'border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white'
                                                }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Navigation */}
                                <div className="flex justify-between">
                                    <button 
                                        onClick={handlePrevious} 
                                        disabled={currentStep === 1} 
                                        className={`px-6 py-2 rounded-lg border transition-all duration-200 ${
                                            currentStep === 1
                                                ? 'border-slate-600 text-slate-500 cursor-not-allowed'
                                                : 'border-slate-500 text-slate-300 hover:border-slate-400 hover:text-white'
                                        }`}
                                    >
                                        Previous
                                    </button>
                                    
                                    <button 
                                        onClick={handleNext} 
                                        disabled={!answers[questions[currentStep - 1].id]} 
                                        className={`px-6 py-2 rounded-lg transition-all duration-200 ${
                                            !answers[questions[currentStep - 1].id]
                                                ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                                                : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                                        }`}
                                    >
                                        {currentStep === questions.length ? 'Get Recommendations' : 'Next'}
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            /* Results Section */
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.8 }} 
                                className="space-y-8"
                            >
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mb-4">
                                        <CheckCircle className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-4">Your AI Recommendations</h2>
                                    <p className="text-gray-300 max-w-2xl mx-auto">
                                        Based on your answers, here are the AI solutions that best match your business needs and goals.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {recommendations.map((solution, index) => (
                                        <motion.div 
                                            key={solution.name} 
                                            initial={{ opacity: 0, y: 20 }} 
                                            animate={{ opacity: 1, y: 0 }} 
                                            transition={{ duration: 0.5, delay: index * 0.1 }} 
                                            className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-blue-500/50 transition-all duration-300"
                                        >
                                            <div className="flex items-center mb-4">
                                                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                                                    <solution.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white">{solution.name}</h3>
                                                    <p className="text-sm text-blue-400">{solution.category}</p>
                                                </div>
                                            </div>
                                            
                                            <p className="text-gray-400 text-sm mb-4">{solution.description}</p>
                                            
                                            <div className="mb-4">
                                                <h4 className="text-sm font-medium text-gray-300 mb-2">Best For:</h4>
                                                <ul className="space-y-1">
                                                    {solution.bestFor.map((item, idx) => (
                                                        <li key={idx} className="flex items-center text-xs text-gray-400">
                                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            
                                            <Link 
                                                to={solution.href} 
                                                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group"
                                            >
                                                Learn More
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="text-center mt-12">
                                    <button 
                                        onClick={resetQuiz} 
                                        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 mr-4"
                                    >
                                        Take Quiz Again
                                    </button>
                                    <Link 
                                        to="/contact" 
                                        className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                                    >
                                        Get Expert Consultation
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-t border-blue-500/20 mt-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }} 
                                transition={{ duration: 0.8 }} 
                                className="text-center"
                            >
                                <h2 className="text-4xl font-bold text-white mb-6">
                                    Need More Personalized Guidance?
                                </h2>
                                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                    Our AI experts are ready to provide customized recommendations and implementation strategies 
                                    tailored specifically to your business requirements.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link 
                                        to="/contact" 
                                        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                                    >
                                        Schedule Free Consultation
                                    </Link>
                                    <Link 
                                        to="/services-showcase" 
                                        className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                                    >
                                        Explore All Services
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </>
    );
}
