import React from 'react';'
import { Link } from 'react-router-dom';'
import { Helmet } from 'react-helmet-async';'
import { motion } from 'framer-motion';'
import { CheckCircle, Shield, Zap, TrendingUp, GitFork, BarChart3, Clock, Star, ArrowRight } from 'lucide-react';
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
const AICodeReviewAssistant = () => {
    const features = [
        {

=======
const AICodeReviewAssistant = () => {}
    const features = []
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
            title: "Automated Security Vulnerability Detection",""
            description: "AI-powered scanning identifies security flaws, SQL injections, and common vulnerabilities before they reach production",""
            icon: <Shield className="w-6 h-6"/>
        },
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
        {
"
=======
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
""
            title: "Code Quality Scoring & Metrics",""
            description: "Comprehensive code quality assessment with detailed metrics and improvement recommendations",""
            icon: <BarChart3 className="w-6 h-6"/>
        },
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
        {
"
=======
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
""
            title: "Best Practice Recommendations",""
            description: "Intelligent suggestions for code improvements, design patterns, and industry best practices",""
            icon: <CheckCircle className="w-6 h-6"/>
        },
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
        {
"
=======
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
""
            title: "Git Integration & Automation",""
            description: "Seamless integration with GitHub, GitLab, and Bitbucket with automated PR comments and reviews",""
            icon: <GitFork className="w-6 h-6"/>
        }
    ];
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
    const benefits = [
        {
"
=======
    const benefits = []
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
""
            metric: "40-60%",""
            description: "Reduction in code review time",""
            icon: <Clock className="w-5 h-5"/>
        },
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
        {
"
=======
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
""
            metric: "25%",""
            description: "Improvement in code quality",""
            icon: <TrendingUp className="w-5 h-5"/>
        },
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
        {
"
=======
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
""
            metric: "90%",""
            description: "Security issues caught early",""
            icon: <Shield className="w-5 h-5"/>
        },
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
        {
"
=======
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
""
            metric: "24/7",""
            description: "Automated review coverage",""
            icon: <Zap className="w-5 h-5"/>

    ];
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
    const pricingPlans = [
        {
"
=======
    const pricingPlans = []
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
""
            name: "Starter",""
            price: "$199",""
            period: "/month",""
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
            description: "Perfect for small development teams","
=======
            description: "Perfect for small development teams",
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
            features[;""
                "Up to 10 developers",""
                "Basic security scanning",""
                "GitHub integration",""
                "Standard reporting",""
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
                "Email support"
=======
                "Email support""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
            ],;
            popular: false;
        },
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
        {
"
=======
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
""
            name: "Professional",""
            price: "$399",""
            period: "/month",""
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
            description: "Ideal for growing development teams","
=======
            description: "Ideal for growing development teams",
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
            features[;""
                "Up to 25 developers",""
                "Advanced security scanning",""
                "Multi-repo support",""
                "Custom rule sets",""
                "Priority support",""
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
                "Team analytics"
=======
                "Team analytics""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
            ],;
            popular: true;
        },
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
        {
"
=======
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
""
            name: "Enterprise",""
            price: "Custom",""
            period: "",""
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
            description: "For large organizations with complex needs","
=======
            description: "For large organizations with complex needs",
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
            features[;""
                "Unlimited developers",""
                "Custom integrations",""
                "Advanced compliance",""
                "Dedicated support",""
                "Custom training",""
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
                "SLA guarantees"
            ],;
            popular: false

    ];"
    const integrations = [""
        "GitHub", "GitLab", "Bitbucket", "Jira", "Slack", "Microsoft Teams", "Discord", "Email"
    ];"
=======
                "SLA guarantees""
            ],;
            popular: false;
    ];
    const integrations = [""
        "GitHub", "GitLab", "Bitbucket", "Jira", "Slack", "Microsoft Teams", "Discord", "Email""
    ];
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
    const useCases = [""
        "Code quality improvement",""
        "Security compliance",""
        "Team productivity enhancement",""
        "DevOps automation",""
        "Code standardization",""
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
        "Technical debt reduction"
    ];
    return (<>
      <Helmet>"
=======
        "Technical debt reduction""
    ];
    return (<>
      <Helmet>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
        <title>AI Code Review Assistant — Zion Tech Group | Automated Code Quality & Security</title>""
        <meta name="description" content="Transform your development workflow with our AI-powered code review assistant. Automated security scanning, quality metrics, and best practice recommendations."/>""
        <meta property="og:title" content="AI Code Review Assistant — Zion Tech Group"/>""
        <meta property="og:description" content="AI-powered code review system with security scanning, quality metrics, and automated recommendations."/>""
        <meta property="og:url" content="https://ziontechgroup.com/services/ai-code-review-assistant"/>""
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-code-review-assistant"/>
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
      </Helmet>"
""
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">"
=======
      </Helmet>
""
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
        {/* Hero Section */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial = {}
  { opacity: 0,
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
  y: 20

}} whileInView = {

  { opacity: 1,
<<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
  y: 0

========
  y: 0 




"
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
>>>>>>>> main:backup-pages/src-pages/services/AICodeReviewAssistant.jsx
=======
""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/AICodeReviewAssistant.jsx
}} transition={{ duration: 0.6 }} className="text-6xl mb-6">
              🔍"
            </motion.div>""
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} transition = {

  { duration: 0.6,
  delay: 0.2

}}>"
              AI-Powered""
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">""
                {" "}Code Review Assistant
              </span>"
            </motion.h1>""
            <motion.p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} transition = {

  { duration: 0.6,
  delay: 0.4

=======
  y: 20;
}} whileInView = {}
  { opacity: 1,
  y: 0;
""
}} transition={{ duration: 0.6 }} className="text-6xl mb-6">
              🔍
            </motion.div>""
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" initial = {}
  { opacity: 0,
  y: 20;
}} whileInView = {}
  { opacity: 1,
  y: 0;
}} transition = {}
  { duration: 0.6,
  delay: 0.2;
}}>
              AI-Powered""
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">""
                {" "}Code Review Assistant;
              </span>
            </motion.h1>""
            <motion.p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" initial = {}
  { opacity: 0,
  y: 20;
}} whileInView = {}
  { opacity: 1,
  y: 0;
}} transition = {}
  { duration: 0.6,
  delay: 0.4;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
}}>
              Intelligent code review system that analyzes pull requests, identifies security vulnerabilities,
              suggests improvements, and maintains code quality standards across your development team.
            </motion.p>
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
"
            {/* Key Metrics */}""
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} transition = {

  { duration: 0.6,
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
  delay: 0.6

}}>"
              {benefits.map((benefit, index) => (<div key={index} className="text-center">"
                  <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.metric}</div>"
=======
  delay: 0.6 





"
}}>""
              {benefits.map((benefit, index) => (<div key={index} className="text-center">""
                  <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.metric}</div>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/AICodeReviewAssistant.jsx
                  <div className="text-sm text-gray-300">{benefit.description}</div>
                </div>))}
            </motion.div>"
""
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} transition = {

  { duration: 0.6,
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
  delay: 0.8

}}>"
=======
  delay: 0.8 





"
}}>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/AICodeReviewAssistant.jsx
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Start Free Trial"
=======

            {/* Key Metrics */}""
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto" initial = {}
  { opacity: 0,
  y: 20;
}} whileInView = {}
  { opacity: 1,
  y: 0;
}} transition = {}
  { duration: 0.6,
  delay: 0.6;
}}>""
              {benefits.map((benefit, index) => (<div key={index} className="text-center">""
                  <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.metric}</div>""
                  <div className="text-sm text-gray-300">{benefit.description}</div>
                </div>))}
            </motion.div>
""
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial = {}
  { opacity: 0,
  y: 20;
}} whileInView = {}
  { opacity: 1,
  y: 0;
}} transition = {}
  { duration: 0.6,
  delay: 0.8;
}}>""
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Start Free Trial;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
              </Link>""
              <Link to="/enhanced-services" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                View All Services;
              </Link>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
"
        {/* Features Section */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">""
          <div className="max-w-7xl mx-auto">""
            <motion.div className="text-center mb-16" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
  y: 0

}} transition={{ duration: 0.6 }}>"
=======
  y: 0 





"
}} transition={{ duration: 0.6 }}>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/AICodeReviewAssistant.jsx
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Development"
=======

        {/* Features Section */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">""
          <div className="max-w-7xl mx-auto">""
            <motion.div className="text-center mb-16" initial = {}
  { opacity: 0,
  y: 20;
}} whileInView = {}
  { opacity: 1,
  y: 0;
}} transition={{ duration: 0.6 }}>""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Development;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
              </h2>""
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive code review capabilities that integrate seamlessly with your existing workflow;
              </p>
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
            </motion.div>"
""
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">""
              {features.map((feature, index) => (<motion.div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} transition = {

  { duration: 0.6,
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
  delay: index * 0.1

}}>"
                  <div className="text-blue-400 mb-4">{feature.icon}</div>"
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>"
=======
  delay: index * 0.1 





"
}}>""
                  <div className="text-blue-400 mb-4">{feature.icon}</div>""
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/AICodeReviewAssistant.jsx
=======
            </motion.div>
""
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">""
              {features.map((feature, index) => (<motion.div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300" initial = {}
  { opacity: 0,
  y: 20;
}} whileInView = {}
  { opacity: 1,
  y: 0;
}} transition = {}
  { duration: 0.6,
  delay: index * 0.1;
}}>""
                  <div className="text-blue-400 mb-4">{feature.icon}</div>""
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>))}
            </div>
          </div>
        </section>
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
"
        {/* Pricing Section */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <motion.div className="text-center mb-16" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
  y: 0

}} transition={{ duration: 0.6 }}>"
=======
  y: 0 





"
}} transition={{ duration: 0.6 }}>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/AICodeReviewAssistant.jsx
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans"
=======

        {/* Pricing Section */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <motion.div className="text-center mb-16" initial = {}
  { opacity: 0,
  y: 20;
}} whileInView = {}
  { opacity: 1,
  y: 0;
}} transition={{ duration: 0.6 }}>""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
              </h2>""
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that best fits your team size and requirements;
              </p>
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
            </motion.div>"
""
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">'
              {pricingPlans.map((plan, index) => (<motion.div key={index} className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${plan.popular''`
                ? 'border-blue-400 bg-blue-900/20''`'`
                : 'border-white/20 hover:border-white/40'}`} initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} transition = {

  { duration: 0.6,
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
  delay: index * 0.1

}}>"
                  {plan.popular && (<div className="text-center mb-4">"
=======
  delay: index * 0.1 





"
}}>""
                  {plan.popular && (<div className="text-center mb-4">""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/AICodeReviewAssistant.jsx
=======
            </motion.div>
""
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (<motion.div key={index} className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${plan.popular'
                ? 'border-blue-400 bg-blue-900/20''`
                : 'border-white/20 hover:border-white/40'}`} initial = {}
  { opacity: 0,
  y: 20;
}} whileInView = {}
  { opacity: 1,
  y: 0;
}} transition = {}
  { duration: 0.6,
  delay: index * 0.1;
}}>""
                  {plan.popular && (<div className="text-center mb-4">""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular;
                      </span>
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
                    </div>)}"
""
                  <div className="text-center mb-6">""
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>""
                    <div className="text-4xl font-bold text-blue-400 mb-2">"
                      {plan.price}""
                      <span className="text-lg text-gray-400">{plan.period}</span>"
                    </div>""
                    <p className="text-gray-300">{plan.description}</p>
                  </div>"
=======
                    </div>)}
""
                  <div className="text-center mb-6">""
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>""
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {plan.price}""
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>""
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
""
                  <ul className="space-y-3 mb-8">""
                    {plan.features.map((feature, idx) => (<li key={idx} className="flex items-center text-gray-300">""
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                        {feature}
                      </li>))}
                  </ul>"`
"`'"`
                  <Link to="/contact" className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.popular''`
                ? 'bg-blue-600 hover:bg-blue-700 text-white''`'`
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'}`}>
                    Get Started;
                  </Link>
                </motion.div>))}
            </div>
          </div>
        </section>
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
"
=======

>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
        {/* Integrations & Use Cases */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">""
          <div className="max-w-7xl mx-auto">""
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Integrations */}
              <motion.div initial = {}
  { opacity: 0,
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
  x: -20

}} whileInView = {

  { opacity: 1,
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
  x: 0

}} transition={{ duration: 0.6 }}>"
                <h3 className="text-2xl font-bold text-white mb-6">Seamless Integrations</h3>"
                <div className="grid grid-cols-2 gap-4">"
                  {integrations.map((integration, index) => (<div key={index} className="flex items-center bg-white/10 rounded-lg p-3">"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3"/>"
=======
  x: 0 





"
=======
  x: -20;
}} whileInView = {}
  { opacity: 1,
  x: 0;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
}} transition={{ duration: 0.6 }}>""
                <h3 className="text-2xl font-bold text-white mb-6">Seamless Integrations</h3>""
                <div className="grid grid-cols-2 gap-4">""
                  {integrations.map((integration, index) => (<div key={index} className="flex items-center bg-white/10 rounded-lg p-3">""
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3"/>""
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/AICodeReviewAssistant.jsx
=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
                      <span className="text-gray-300">{integration}</span>
                    </div>))}
                </div>
              </motion.div>

              {/* Use Cases */}
              <motion.div initial = {}
  { opacity: 0,
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
  x: 20

}} whileInView = {

  { opacity: 1,
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
  x: 0

}} transition={{ duration: 0.6 }}>"
                <h3 className="text-2xl font-bold text-white mb-6">Perfect For</h3>"
                <div className="space-y-3">"
                  {useCases.map((useCase, index) => (<div key={index} className="flex items-center bg-white/10 rounded-lg p-3">"
                      <Star className="w-5 h-5 text-yellow-400 mr-3"/>"
=======
  x: 0 





"
=======
  x: 20;
}} whileInView = {}
  { opacity: 1,
  x: 0;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
}} transition={{ duration: 0.6 }}>""
                <h3 className="text-2xl font-bold text-white mb-6">Perfect For</h3>""
                <div className="space-y-3">""
                  {useCases.map((useCase, index) => (<div key={index} className="flex items-center bg-white/10 rounded-lg p-3">""
                      <Star className="w-5 h-5 text-yellow-400 mr-3"/>""
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/AICodeReviewAssistant.jsx
=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
                      <span className="text-gray-300">{useCase}</span>
                    </div>))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
"
        {/* CTA Section */}""
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">""
          <div className="max-w-4xl mx-auto text-center">""
            <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-6" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} transition={{ duration: 0.6 }}>
              Ready to Transform Your Code Review Process?"
            </motion.h2>""
            <motion.p className="text-xl text-gray-300 mb-8" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} transition = {

  { duration: 0.6,
  delay: 0.2

}}>
              Join hundreds of development teams already using our AI-powered code review assistant
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
            </motion.p>
<<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx

========
            "
>>>>>>>> main:backup-pages/src-pages/services/AICodeReviewAssistant.jsx
=======
            </motion.p>"
            ""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/AICodeReviewAssistant.jsx
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} transition = {

  { duration: 0.6,
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
  delay: 0.4

}}>"
=======

        {/* CTA Section */}""
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">""
          <div className="max-w-4xl mx-auto text-center">""
            <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-6" initial = {}
  { opacity: 0,
  y: 20;
}} whileInView = {}
  { opacity: 1,
  y: 0;
}} transition={{ duration: 0.6 }}>
              Ready to Transform Your Code Review Process?
            </motion.h2>""
            <motion.p className="text-xl text-gray-300 mb-8" initial = {}
  { opacity: 0,
  y: 20;
}} whileInView = {}
  { opacity: 1,
  y: 0;
}} transition = {}
  { duration: 0.6,
  delay: 0.2;
}}>
              Join hundreds of development teams already using our AI-powered code review assistant;
            </motion.p>
            ""
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" initial = {}
  { opacity: 0,
  y: 20;
}} whileInView = {}
  { opacity: 1,
  y: 0;
}} transition = {}
  { duration: 0.6,
  delay: 0.4;
}}>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Start Free Trial""
                <ArrowRight className="ml-2 w-5 h-5"/>
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
              </Link>"
=======
  delay: 0.4 





"
}}>""
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">"
                Start Free Trial""
                <ArrowRight className="ml-2 w-5 h-5"/>"
              </Link>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/AICodeReviewAssistant.jsx
=======
              </Link>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
              <a href="tel:+13024640950" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Call: +1 302 464 0950;
              </a>
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
            </motion.div>"
""
            <motion.div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-2xl mx-auto" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} transition = {

  { duration: 0.6,
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
  delay: 0.6

}}>"
              <h3 className="text-lg font-semibold text-white mb-4">Why Choose Our AI Code Review Assistant?</h3>"
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">"
                <div className="flex items-center">"
=======
  delay: 0.6 





"
=======
            </motion.div>
""
            <motion.div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-2xl mx-auto" initial = {}
  { opacity: 0,
  y: 20;
}} whileInView = {}
  { opacity: 1,
  y: 0;
}} transition = {}
  { duration: 0.6,
  delay: 0.6;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
}}>""
              <h3 className="text-lg font-semibold text-white mb-4">Why Choose Our AI Code Review Assistant?</h3>""
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">""
                <div className="flex items-center">""
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/AICodeReviewAssistant.jsx
                  <span className="text-green-400 mr-2">✓</span>
                  AI-Powered Security Scanning"
                </div>""
                <div className="flex items-center">""
                  <span className="text-green-400 mr-2">✓</span>
                  Seamless Git Integration"
                </div>""
                <div className="flex items-center">""
                  <span className="text-green-400 mr-2">✓</span>
                  Custom Rule Configuration"
=======
                  <span className="text-green-400 mr-2">✓</span>
                  AI-Powered Security Scanning;
                </div>""
                <div className="flex items-center">""
                  <span className="text-green-400 mr-2">✓</span>
                  Seamless Git Integration;
                </div>""
                <div className="flex items-center">""
                  <span className="text-green-400 mr-2">✓</span>
                  Custom Rule Configuration;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
                </div>""
                <div className="flex items-center">""
                  <span className="text-green-400 mr-2">✓</span>
                  24/7 Automated Coverage;
                </div>
              </div>
<<<<<<< HEAD:pages.disabled/pages/services/AICodeReviewAssistant.jsx
            </motion.div>"
""
            <motion.div className="mt-8 text-sm text-gray-400" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition = {

  { duration: 0.6,
  delay: 0.8

}}>
              <p>Email: kleber@ziontechgroup.com</p>"
=======
            </motion.div>
""
            <motion.div className="mt-8 text-sm text-gray-400" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition = {}
  { duration: 0.6,
  delay: 0.8;
}}>
              <p>Email: kleber@ziontechgroup.com</p>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/AICodeReviewAssistant.jsx
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>""
              <p>Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a></p>
            </motion.div>
          </div>
        </section>
      </div>
    </>)};
export { AICodeReviewAssistant };
export default AICodeReviewAssistant;'"`
}}}}'"`'"`