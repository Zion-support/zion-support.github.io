import React from 'react';
<<<<<<< HEAD
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {motion} from 'framer-motion';
import {CheckCircle, Shield, Zap, TrendingUp, GitFork, BarChart3, Clock, Star, ArrowRight} from 'lucide-react';
const AICodeReviewAssistant = (props: any) => {
    const features = [
        {
            title: "Automated Security Vulnerability Detection",
            description: "AI-powered scanning identifies security flaws, SQL injections, and common vulnerabilities before they reach production",
            icon: <Shield className="w-6 h-6" />
        },
        {title: "Code Quality Scoring & Metrics",
            description: "Comprehensive code quality assessment with detailed metrics and improvement recommendations",
            icon: <BarChart3 className="w-6 h-6" />},
        {title: "Best Practice Recommendations",
            description: "Intelligent suggestions for code improvements, design patterns, and industry best practices",
            icon: <CheckCircle className="w-6 h-6" />},
        {title: "Git Integration & Automation",
            description: "Seamless integration with GitHub, GitLab, and Bitbucket with automated PR comments and reviews",
            icon: <GitFork className="w-6 h-6" />}
    ];
    const benefits = [
        {metric: "40-60%",
            description: "Reduction in code review time",
            icon: <Clock className="w-5 h-5" />},
        {metric: "25%",
            description: "Improvement in code quality",
            icon: <TrendingUp className="w-5 h-5" />},
        {metric: "90%",
            description: "Security issues caught early",
            icon: <Shield className="w-5 h-5" />},
        {metric: "24/7",
            description: "Automated review coverage",
            icon: <Zap className="w-5 h-5" />}
    ];
    const pricingPlans = [
        {name: "Starter",
            price: "$199",
            period: "/month",
            description: "Perfect for small development teams",
            features: [
                "Up to 10 developers",
                "Basic security scanning",
                "GitHub integration",
                "Standard reporting",
                "Email support"
            ],
            popular: false},
        {name: "Professional",
            price: "$399",
            period: "/month",
            description: "Ideal for growing development teams",
            features: [
                "Up to 25 developers",
                "Advanced security scanning",
                "Multi-repo support",
                "Custom rule sets",
                "Priority support",
                "Team analytics"
            ],
            popular: true},
        {name: "Enterprise",
            price: "Custom",
            period: "",
            description: "For large organizations with complex needs",
            features: [
                "Unlimited developers",
                "Custom integrations",
                "Advanced compliance",
                "Dedicated support",
                "Custom training",
                "SLA guarantees"
            ],
            popular: false}
    ];
    const integrations = [
        "GitHub", "GitLab", "Bitbucket", "Jira", "Slack", "Microsoft Teams", "Discord", "Email"
    ];
    const useCases = [
        "Code quality improvement",
        "Security compliance",
        "Team productivity enhancement",
        "DevOps automation",
        "Code standardization",
        "Technical debt reduction"
    ];
    return (<>
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
      <Helmet>
        <title>AICodeReviewAssistant | Zion Tech Group</title>
        <meta name="description" content="AICodeReviewAssistant - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">AICodeReviewAssistant</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default AICodeReviewAssistant;
