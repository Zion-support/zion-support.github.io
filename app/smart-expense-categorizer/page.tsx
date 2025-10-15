<<<<<<< HEAD
import React from 'react";";";";
import { Helmet } from 'react-helmet-async";";";";
import { motion } from 'framer-motion";";";";
import { Receipt, TrendingUp, Shield, Zap, BarChart3, Users, CheckCircle, ArrowRight, Brain, Target, Globe, DollarSign, FileText, CreditCard } from 'lucide-react";const SmartExpenseCategorizerPage = () => {";";";
  ";
  const features  =  [;";
    {";";
};";";";
      icon: <>"
      title: "AI-Powered Categorization";"
      description: "Advanced machine learning automatically categorizes expenses with 98% accuracy, learning from your patterns and preferences."
    },";";";
    {"
      icon: <Target className="w-8 h-8 text-purple-400" />,"
      title: "Smart Receipt Processing","
      description: "Automatically extract data from receipts, invoices, and bills using OCR technology and AI-powered data extraction."
    };";";";
    {},"
      icon: <className="w-8 h-8 text-green-400" />,"
      title: "Real-time Analytics","
      description: "Comprehensive expense analytics with spending trends, budget tracking, and financial insights to optimize your finances."
    };";";";
    {},"
      icon: <className="w-8 h-8 text-red-400" />,"
      title: "Bank Integration","
      description: "Securely connect with your bank accounts and credit cards for automatic transaction import and categorization.;";";
    };";";";
    {},"
      icon: <className="w-8 h-8 text-yellow-400" />,"
      title: "Automated Workflows","
      description: "Set up automated rules for expense approval, reimbursement, and reporting to streamline your financial processes."
    {"
      icon: <Brain className ="w-8 h-8 text-cyan-400" />,";"
      title: "AI-Powered Categorization",";"
      description: "Advanced machine learning automatically categorizes expenses with 98% accuracy, learning from your patterns and preferences."";";";
    },";";";
    {"
      icon: <Target className ="w-8 h-8 text-purple-400" />,";"
      title: "Smart Receipt Processing",";"
      description: "Automatically extract data from receipts, invoices, and bills using OCR technology and AI-powered data extraction."";";";
    },";";";
    {"
      icon: <BarChart3 className ="w-8 h-8 text-green-400" />,";"
      title: "Real-time Analytics",";"
      description: "Comprehensive expense analytics with spending trends, budget tracking, and financial insights to optimize your finances."";";";
    },";";";
    {"
      icon: <Shield className ="w-8 h-8 text-red-400" />,";"
      title: "Bank Integration",";"
      description: "Securely connect with your bank accounts and credit cards for automatic transaction import and categorization."",";";
    },";";";
    {;"
      icon: <Zap className ="w-8 h-8 text-yellow-400" />,";"
      title: "Automated Workflows",";"
      description: "Set up automated rules for expense approval, reimbursement, and reporting to streamline your financial processes."";";";
    },";";";
    {"
      icon: <Users className ="w-8 h-8 text-blue-400" />,";"
      title: "Team Management",";"
      description: "Manage team expenses with role-based permissions, approval workflows, and centralized expense reporting."";
    };";
  ];";";
  const pricingPlans  =  [";";";
    {";";";";
      name: "Personal",";"
      price: "$19",";"
      period: "/month",";"
      description: "Perfect for individuals",";";";";
      features: ["
        "Up to 500 transactions/month",";"
        "Basic AI categorization",";"
        "Receipt scanning",";"
        "Basic analytics",";"
        "Email support",";"
        "1 user account"";
      ],";
      popular: false";";
    },";";";
    {"
      name: "Business",";"
      price: "$59",";"
      period: "/month",";"
      description: "Ideal for small businesses",";";";";
      features: ["
        "Up to 5,000 transactions/month",";"
        "Advanced AI categorization",";"
        "Bank integration",";"
        "Advanced analytics",";"
        "Priority support",";"
        "5 user accounts",";"
        "API access"";
      ],";
      popular: true";";
    },";";";
    {"
      name: "Enterprise",";"
      price: "$149",";"
      period: "/month",";"
      description: "For large organizations",";";";";
      features: ["
        "Unlimited transactions",";"
        "Custom AI models",";"
        "White-label solution",";"
        "Advanced security",";"
        "Dedicated support",";"
        "Unlimited users",";"
        "Custom integrations"";
      ],
      popular: false
    };";
  ];";";
  const benefits  =  [";";";
    {";";";";
      icon: <DollarSign className ="w-12 h-12 text-green-400" />,";"
      title: "Save Time & Money",";"
      description: "Reduce expense processing time by 80% and eliminate manual data entry errors that cost businesses thousands."",";";
    },";";";
    {"
      icon: <FileText className ="w-12 h-12 text-blue-400" />,";"
      title: "Automated Compliance",";"
      description: "Ensure tax compliance with automated categorization and detailed expense reports for easy filing and auditing."",";";
    },";";";
    {"
      icon: <CreditCard className ="w-12 h-12 text-purple-400" />,";"
      title: "Better Financial Control",";"
      description: "Gain better control over spending with real-time insights and automated budget tracking and alerts."",";";
    },";";";
    {"
      icon: <TrendingUp className="w-12 h-12 text-red-400" />,"
      title: "Improved Cash Flow","
      description: "Optimize cash flow with better expense visibility and automated reimbursement processes."
    };";";
  ],";";";
      const stats  =  [";";";";
    { number: "80%", label: "Time Saved" };"
    { number: "98%", label: "Accuracy Rate" };"
    { number: "50%", label: "Error Reduction" };"
    { number: "3x", label: "Faster Processing" };";";";
  ],"
      return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)";";";
      <Helmet></Helmet>"
      icon: <TrendingUp className ="w-12 h-12 text-red-400" />,";"
      title: "Improved Cash Flow",";"
      description: "Optimize cash flow with better expense visibility and automated reimbursement processes."",";
    };";";
  ];";";";
  const stats  =  [";";";";
    { number: "80%", label: "Time Saved" },";"
    { number: "98%", label: "Accuracy Rate" },";"
    { number: "50%", label: "Error Reduction" },";"
    { number: "3x", label: "Faster Processing" }";
  ];";
const ComponentName = () => {";";
  ";";";
  return (";";";";
    <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">";";";
      <Helmet>";";";
        <title>Smart Expense Categorizer | Zion Tech Group</title>"
        <meta name ="description" content="Automate expense categorization with AI-powered receipt processing, bank integration, and real-time analytics." />";"
        <meta name ="keywords" content="expense management, _receipt scanning, _expense categorization, _financial automation, AI expenses" />";";
      </Helmet>";";
      {/* Hero Section */";";";
};"
      <section className="relative py-20 px-4"></section>"
        <div className="max-w-7xl mx-auto"></div>
          <motion.div>";
            initial={{ opacity: 0, y: 20 }},";";
      animate={{ opacity: 1, y: 0 }},";";";
      transition={{ duration: 0.8 }},"
      className="text-center"></motion.div";";";
>"
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6"></div>"
              <Receipt className="w-5 h-5 text-cyan-400 mr-2" />"
              <span className="text-cyan-300 font-medium">AI-Powered Expense Intelligence</span>";";";
      {/* Hero Section */}"
      <section className ="relative py-20 px-4">";"
        <div className ="max-w-7xl mx-auto">";";
          <motion.div: initial ={{ opacity: 0, y: 20 }};";";
            animate={{ opacity: 1, y: 0 }}";";";
            transition={{ duration: 0.8 }}"
            className="text-center"";";";";
          >"
            <div className ="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">";"
              <Receipt className ="w-5 h-5 text-cyan-400 mr-2" />";"
              <span className ="text-cyan-300 font-medium">AI-Powered Expense Intelligence</$1>";";";
            </div>"
            <h1 className ="text-5xl md: text-7xl font-bold text-white mb-6">";";";";
              Automate Your"
              <span className ="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Expense Management</$1>";";";
            </h1>"
            <p className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">",";";
              Transform your expense management with AI-powered categorization, _automated receipt processing, and real-time financial insights that save time and money.";";";
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>";
              <motion.button>";";
                whileHover={{ scale: 1.05 }},";";";
      whileTap={{ scale: 0.95 }},"
      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"></motion.button";";";
>"
            <div className ="flex flex-col sm: flex-row gap-4 justify-center">",";";
              <motion.button: whileHover ={{ scale: 1.05 }}";";";
                whileTap={{ scale: 0.95 }}"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"";";";
              >";";";
                Start Free Trial"
                <ArrowRight className ="w-5 h-5 ml-2 inline" />",
              </motion.button>";
              <motion.button>";";
                whileHover={{ scale: 1.05 }};";";";
                whileTap={{ scale: 0.95 }};"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              <motion.button: whileHover ={{ scale: 1.05 }}";";";
                whileTap={{ scale: 0.95 }}"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: bg-white/10 transition-all duration-300"";
=======
<<<<<<< HEAD
import React from 'react;'";
import { ArrowRight } from 'lucide-react;'";
import { CheckCircle } from 'lucide-react;'";
import { Star } from 'lucide-react;'";
import { Users } from 'lucide-react;'";
import { Clock } from 'lucide-react;'";
import { DollarSign } from 'lucide-react;'";
import { Shield } from 'lucide-react;'";
import { Code } from 'lucide-react;'";
import { Database } from 'lucide-react;'";
import { Mail } from 'lucide-react;'";
import { Settings } from 'lucide-react;'";
import { Target } from 'lucide-react;'";
import { TrendingUp } from 'lucide-react;'";
import { PieChart } from 'lucide-react;'";
import { MessageSquare } from 'lucide-react;'";
import { Heart } from 'lucide-react;'";
import { Globe } from 'lucide-react;'";
import { Smartphone } from 'lucide-react;'";
import { Network } from 'lucide-react;'";
import { Lock } from 'lucide-react;'";
import { Cpu } from 'lucide-react;'";
import { Wifi } from 'lucide-react;'";
import { Building2 } from 'lucide-react;'";
import { Briefcase } from 'lucide-react;'";
import { Lightbulb } from 'lucide-react;'";
import { Link } from 'react-router-dom;'";
import EnhancedSEO from '../components/EnhancedSEO;'";
const: Page = () => {
  const: features = [
    {;
      icon: <CheckCircle: className ="w-8 h-8" />,""";
      title: 'Advanced Features',''";
      description: 'Cutting-edge technology for maximum efficiency''";
    },
    {
      icon: <Shield: className ="w-8 h-8" />,""";
      title: 'Secure & Reliable',''";
      description: 'Enterprise-grade security and 99.9% uptime''";
    },
    {
      icon: <Users: className ="w-8 h-8" />,""";
      title: 'Expert Support',''";
      description: '24/7 support from our team of specialists''";
    }
  ];
  return (
    <>
      <EnhancedSEO: title ="Page - Zion Tech Group""";
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""";
        keywords="page, business solutions, technology services, professional services""";
      />
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""";
        {/* Hero Section */}
        <section: className ="relative py-20 px-4 sm:px-6 lg:px-8">""";
          <div: className ="max-w-7xl mx-auto text-center">""";
            <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6">""";
              Page
              <span: className ="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">""";
                Solutions
              </span>
            </h1>
            <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""";
              Professional page services designed to help your business succeed and grow.
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">""";
              <Link: to ="/contact""";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""";
              >
                Get Started
                <ArrowRight: className ="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""";
              </Link>
              <Link: to ="/demo""";
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""";
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section: className ="py-20 px-4 sm:px-6 lg:px-8">""";
          <div: className ="max-w-7xl mx-auto">""";
            <div: className ="text-center mb-16">""";
              <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">""";
                Why Choose Our Page Services?
              </h2>
              <p: className ="text-xl text-gray-300 max-w-2xl mx-auto">""";
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div: className ="grid grid-cols-1 md:grid-cols-3 gap-8">""";
              {features.map((feature, index) => (
                <div: key ={index} className="text-center">""";
                  <div: className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""";
                    {feature.icon}
                  </div>
                  <h3: className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>""";
                  <p: className ="text-gray-300">{feature.description}</p>""";
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">""";
          <div: className ="max-w-4xl mx-auto text-center">""";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">""";
              Ready to Get Started?
            </h2>
            <p: className ="text-xl text-gray-300 mb-8">""";
              Let's discuss how our page services can help your business succeed.''";
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">""";
              <Link: to ="/contact""";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""";
              >
                Contact Us
                <ArrowRight: className ="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""";
              </Link>
              <Link: to ="/services""";
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""";
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
const: page = React.lazy(() => import('./page'));''";
export default page;
=======

import React from 'react';;";

import { Helmet } from 'react-helmet-async';";
import { motion } from 'framer-motion';";
import { Receipt, TrendingUp, Shield, Zap, BarChart3, Users, CheckCircle, ArrowRight, Brain, Target, Globe, DollarSign, FileText, CreditCard } from 'lucide-react';const: SmartExpenseCategorizerPage = () => {";";";
  const: features = [;
    {};
      icon: <>
      title: "AI-Powered Categorization";";

      description: "Advanced machine learning automatically categorizes expenses with 98% accuracy, learning from your patterns and preferences."";
    },
    {
      icon: <Target: className ="w-8 h-8 text-purple-400" />,";
      title: "Smart Receipt Processing",";
      description: "Automatically extract data from receipts, invoices, and bills using OCR technology and AI-powered data extraction."";
    };
    {},
      icon: <className="w-8 h-8 text-green-400" />,";
      title: "Real-time Analytics",";
      description: "Comprehensive expense analytics with spending trends, budget tracking, and financial insights to optimize your finances."";
    };
    {},
      icon: <className="w-8 h-8 text-red-400" />,";
      title: "Bank Integration",";
      description: "Securely connect with your bank accounts and credit cards for automatic transaction import and categorization."";
    };
    {},
      icon: <className="w-8 h-8 text-yellow-400" />,";

      title: "Automated Workflows",";
      description: "Set up automated rules for expense approval, reimbursement, and reporting to streamline your financial processes."";

    {
      icon: <Brain: className ="w-8 h-8 text-cyan-400" />,";";
      title: "AI-Powered Categorization",";";
      description: "Advanced machine learning automatically categorizes expenses with 98% accuracy, learning from your patterns and preferences."";";
    },
    {
      icon: <Target: className ="w-8 h-8 text-purple-400" />,";";
      title: "Smart Receipt Processing",";";
      description: "Automatically extract data from receipts, invoices, and bills using OCR technology and AI-powered data extraction."";";
    },
    {
      icon: <BarChart3: className ="w-8 h-8 text-green-400" />,";";
      title: "Real-time Analytics",";";
      description: "Comprehensive expense analytics with spending trends, budget tracking, and financial insights to optimize your finances."";";
    },
    {
      icon: <Shield: className ="w-8 h-8 text-red-400" />,";";
      title: "Bank Integration",";";
      description: "Securely connect with your bank accounts and credit cards for automatic transaction import and categorization."",";
    },
    {
      icon: <Zap: className ="w-8 h-8 text-yellow-400" />,";";
      title: "Automated Workflows",";";
      description: "Set up automated rules for expense approval, reimbursement, and reporting to streamline your financial processes."";";

    },
    {
      icon: <Users: className ="w-8 h-8 text-blue-400" />,";";
      title: "Team Management",";";
      description: "Manage team expenses with role-based permissions, approval workflows, and centralized expense reporting."";";
    };
  ];

  const: pricingPlans = [
    {;
      name: "Personal",";";
      price: "$19",";";
      period: "/month",";";
      description: "Perfect for individuals",";";
      features: [
        "Up to 500 transactions/month",";";
        "Basic AI categorization",";";
        "Receipt scanning",";";
        "Basic analytics",";";
        "Email support",";";
        "1 user account"";";
      ],
      popular: false
    },
    {
      name: "Business",";";
      price: "$59",";";
      period: "/month",";";
      description: "Ideal for small businesses",";";
      features: [
        "Up to 5,000 transactions/month",";";
        "Advanced AI categorization",";";
        "Bank integration",";";
        "Advanced analytics",";";
        "Priority support",";";
        "5 user accounts",";";
        "API access"";";
      ],
      popular: true
    },
    {
      name: "Enterprise",";";
      price: "$149",";";
      period: "/month",";";
      description: "For large organizations",";";
      features: [
        "Unlimited transactions",";";
        "Custom AI models",";";
        "White-label solution",";";
        "Advanced security",";";
        "Dedicated support",";";
        "Unlimited users",";";
        "Custom integrations"";";
      ],
      popular: false
    }
  ];

  const: benefits = [
    {;
      icon: <DollarSign: className ="w-12 h-12 text-green-400" />,";";
      title: "Save Time & Money",";";
      description: "Reduce expense processing time by 80% and eliminate manual data entry errors that cost businesses thousands."",";
    },
    {
      icon: <FileText: className ="w-12 h-12 text-blue-400" />,";";
      title: "Automated Compliance",";";
      description: "Ensure tax compliance with automated categorization and detailed expense reports for easy filing and auditing."",";
    },
    {
      icon: <CreditCard: className ="w-12 h-12 text-purple-400" />,";";
      title: "Better Financial Control",";";
      description: "Gain better control over spending with real-time insights and automated budget tracking and alerts."",";
    },
    {

      icon: <TrendingUp: className ="w-12 h-12 text-red-400" />,";
      title: "Improved Cash Flow",";
      description: "Optimize cash flow with better expense visibility and automated reimbursement processes."";
    };
  ],
      const: stats = [;
    { number: "80%", label: "Time Saved" };";
    { number: "98%", label: "Accuracy Rate" };";
    { number: "50%", label: "Error Reduction" };";
    { number: "3x", label: "Faster Processing" };";
  ],
      return (<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)";
      <Helmet></Helmet>

      icon: <TrendingUp: className ="w-12 h-12 text-red-400" />,";";
      title: "Improved Cash Flow",";";
      description: "Optimize cash flow with better expense visibility and automated reimbursement processes."",";
    }
  ];

  const: stats = [;
    { number: "80%", label: "Time Saved" },";";
    { number: "98%", label: "Accuracy Rate" },";";
    { number: "50%", label: "Error Reduction" },";";
    { number: "3x", label: "Faster Processing" }";";
  ];

const: ComponentName = () => {
  return (;
    <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">";";
      <Helmet>

        <title>Smart Expense Categorizer | Zion Tech Group</title>
        <meta: name ="description" content="Automate expense categorization with AI-powered receipt processing, bank integration, and real-time analytics." />";";
        <meta: name ="keywords" content="expense management, _receipt scanning, _expense categorization, _financial automation, AI expenses" />";";
      </Helmet>

      {/* Hero Section */};
      <section: className ="relative py-20 px-4"></section>";
        <div: className ="max-w-7xl mx-auto"></div>";
          <motion.div>
            initial={{ opacity: 0, y: 20 }},
      animate={{ opacity: 1, y: 0 }},
      transition={{ duration: 0.8 }},
      className="text-center"";
          ></motion.div
>
            <div: className ="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6"></div>";

              <Receipt: className ="w-5 h-5 text-cyan-400 mr-2" />";
              <span: className ="text-cyan-300 font-medium">AI-Powered Expense Intelligence</span>";

      {/* Hero Section */}
      <section: className ="relative py-20 px-4">";";
        <div: className ="max-w-7xl mx-auto">";";
          <motion.div: initial ={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"";";
          >
            <div: className ="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">";";
              <Receipt: className ="w-5 h-5 text-cyan-400 mr-2" />";";
              <span: className ="text-cyan-300 font-medium">AI-Powered Expense Intelligence</span>";";

            </div>
            
            <h1: className ="text-5xl md: text-7xl font-bold text-white mb-6">";";
              Automate Your
              <span: className ="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Expense Management</span>";";
            </h1>
            
            <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">",";
              Transform your expense management with AI-powered categorization, _automated receipt processing, and real-time financial insights that save time and money.
            </p>

            <div: className ="flex flex-col sm:flex-row gap-4 justify-center"></div>";
              <motion.button>
                whileHover={{ scale: 1.05 }},
      whileTap={{ scale: 0.95 }},
      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"";
              ></motion.button
>

            <div: className ="flex flex-col sm: flex-row gap-4 justify-center">",";
              <motion.button: whileHover ={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"";";
              >

                Start Free Trial
                <ArrowRight: className ="w-5 h-5 ml-2 inline" />",";
              </motion.button>

              <motion.button>
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"";

              <motion.button: whileHover ={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: bg-white/10 transition-all duration-300"";";
>>>>>>> main
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  ),
};";
export default SmartExpenseCategorizerPage;";";
}";";";
"