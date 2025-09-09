import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Target, Zap, TrendingUp, Users, Cloud, CheckCircle, ArrowRight } from 'lucide-react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

const AIMatcher = () => {
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
            category: 'Process Optimization',
            bestFor: ['Operational efficiency', 'Cost reduction', 'Error prevention'],
            features: ['Process Mapping', 'Automated Workflows', 'Performance Monitoring'],
            href: '/services/ai-workflow-automation',
            icon: Zap
        }
    ];

    const handleAnswer = (questionId, answer) => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }));
        if (currentStep < questions.length) {
            setCurrentStep(currentStep + 1);
        } else {
            // Generate recommendations based on answers
            generateRecommendations();
        }
    };

    const generateRecommendations = () => {
        // Simple recommendation logic based on answers
        const recs = aiSolutions.filter(solution => {
            if (answers.industry === 'Technology & Software') {
                return solution.category === 'Analytics & Insights' || solution.category === 'Process Optimization';
            }
            if (answers.budget === 'Over $1,000,000') {
                return solution.category === 'Analytics & Insights';
            }
            return true;
        });
        setRecommendations(recs);
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
            <main className="min-h-screen bg-zion-blue pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <GradientHeading>AI Talent Matcher</GradientHeading>
                        <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
                            Our advanced AI system analyzes your requirements and matches you with the perfect tech talent from our curated network.
                        </p>
                    </div>

                    {recommendations.length === 0 ? (
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-4">
                                        Step {currentStep} of {questions.length}
                                    </h2>
                                    <div className="w-full bg-zion-blue-dark rounded-full h-2">
                                        <div 
                                            className="bg-zion-cyan h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${(currentStep / questions.length) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {currentStep <= questions.length && (
                                    <motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-xl font-semibold text-white mb-6 text-center">
                                            {questions[currentStep - 1].question}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {questions[currentStep - 1].options.map((option, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleAnswer(questions[currentStep - 1].id, option)}
                                                    className="p-4 text-left bg-zion-blue-dark border border-zion-blue-lighter rounded-lg hover:border-zion-cyan transition-colors text-white hover:bg-zion-blue-dark/80"
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-white mb-4">
                                    Your AI Solutions Recommendations
                                </h2>
                                <p className="text-zion-slate-light text-lg mb-8">
                                    Based on your answers, here are the AI solutions that best fit your needs:
                                </p>
                                <button
                                    onClick={resetQuiz}
                                    className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    Take Quiz Again
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {recommendations.map((solution, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-zion-blue-light border border-zion-blue-lighter rounded-lg p-6 hover:border-zion-cyan transition-colors"
                                    >
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-4">
                                                <solution.icon className="h-6 w-6 text-zion-cyan" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white">{solution.name}</h3>
                                                <p className="text-zion-slate-light text-sm">{solution.category}</p>
                                            </div>
                                        </div>
                                        
                                        <p className="text-zion-slate-light mb-4">{solution.description}</p>
                                        
                                        <div className="mb-4">
                                            <h4 className="text-white font-medium mb-2">Best for:</h4>
                                            <ul className="space-y-1">
                                                {solution.bestFor.map((item, idx) => (
                                                    <li key={idx} className="text-zion-slate-light text-sm flex items-center">
                                                        <CheckCircle className="h-4 w-4 text-zion-cyan mr-2" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Link
                                            to={solution.href}
                                            className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                                        >
                                            Learn More <ArrowRight className="h-4 w-4 ml-1" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default AIMatcher;
