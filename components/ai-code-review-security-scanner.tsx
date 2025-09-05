<<<<<<< HEAD
import React from 'react',
import SEO from '../components/SEO',
import { motion } from 'framer-motion',
import { 
  Brain, Shield, Code, CheckCircle, Zap, 
  ArrowRight, Star, TrendingUp, Users, 
  Lock, Eye, BarChart3, Globe, Award
} from 'lucide-react',
=======
import React from 'react';
import SEO from '../components/SEO';
import {_Brain, _Shield, _Code, _CheckCircle, _Zap, _ArrowRight, _Star, _TrendingUp, _Users, _Lock, _Eye, _BarChart3, _Globe, _Award} from 'lucide-react';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _AICodeReviewSecurityScanner = () => {_return (_<>
      <SEO 
<<<<<<< HEAD
        title=&quot;AI-Powered Code Review & Security Scanner | Zion Tech Group&quot;
        description=&quot;Advanced AI-powered platform that automatically reviews code, detects security vulnerabilities, suggests improvements, and ensures code quality across multiple programming languages.&quot;
        keywords={[&quot;AI code review&quot;, &quot;security scanner&quot;, &quot;vulnerability detection&quot;, &quot;code quality&quot;, &quot;automated code analysis&quot;, &quot;security testing&quot;, &quot;DevOps security&quot;]}
        ogImage=&quot;https://ziontechgroup.com/og-ai-code-review.jpg&quot;
        canonical=&quot;https://ziontechgroup.com/ai-code-review-security-scanner&quot;
      />
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;>
        {/* Hero Section */}
        <section className=&quot;relative overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot; />
          <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center&quot;
=======
        title="AI-Powered Code Review & Security Scanner | Zion Tech Group"
        description="Advanced AI-powered platform that automatically reviews code, _detects security vulnerabilities, _suggests improvements, _and ensures code quality across multiple programming languages."
        keywords={["AI code review", _"security scanner", _"vulnerability detection", _"code quality", _"automated code analysis", _"security testing", _"DevOps security"]}
        ogImage="https://ziontechgroup.com/og-ai-code-review.jpg"
        canonical="https://ziontechgroup.com/ai-code-review-security-scanner"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {_/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8&quot;>
                <Brain className=&quot;w-4 h-4 mr-2&quot; />
                AI-Powered Development Security
              </div>
              
              <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6&quot;>
                AI-Powered Code Review & 
                <span className=&quot;bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent&quot;> Security Scanner</span>
              </h1>
              
<<<<<<< HEAD
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
                Advanced AI-powered platform that automatically reviews code, detects security vulnerabilities, 
                suggests improvements, and ensures code quality across multiple programming languages.
=======
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Advanced AI-powered platform that automatically reviews code, _detects security vulnerabilities, _suggests improvements, _and ensures code quality across multiple programming languages.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </p>
              
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center mb-12&quot;>
                <motion.button
<<<<<<< HEAD
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=&quot;px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center&quot;
=======
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Start Free Trial
                  <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
                </motion.button>
                
                <motion.button
<<<<<<< HEAD
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=&quot;px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300&quot;
=======
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Schedule Demo
                </motion.button>
              </div>
              
              <div className=&quot;flex flex-wrap justify-center gap-8 text-gray-400&quot;>
                <div className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-2&quot; />
                  Multi-language support
                </div>
                <div className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-2&quot; />
                  Real-time scanning
                </div>
                <div className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-2&quot; />
                  SOC2 & ISO27001 compliant
                </div>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className=&quot;py-20 bg-white/5&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Features Section */}
        <section className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Comprehensive Code Security & Quality
              </h2>
<<<<<<< HEAD
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Our AI-powered platform provides end-to-end code analysis, security scanning, and quality assurance 
=======
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform provides end-to-end code analysis, _security scanning, _and quality assurance 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                to protect your applications and improve development efficiency.
              </p>
            </motion.div>
            
<<<<<<< HEAD
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {[
                {
                  icon: <Code className=&quot;w-8 h-8&quot; />,
                  title: &quot;Multi-Language Support&quot;,
                  description: &quot;Support for Python, JavaScript, Java, Go, Rust, and more with language-specific security rules and best practices.&quot;
                },
                {
                  icon: <Shield className=&quot;w-8 h-8&quot; />,
                  title: &quot;AI-Powered Vulnerability Detection&quot;,
                  description: &quot;Advanced machine learning algorithms that detect security vulnerabilities, code smells, and potential security risks.&quot;
                },
                {
                  icon: <Eye className=&quot;w-8 h-8&quot; />,
                  title: &quot;Automated Code Review&quot;,
                  description: &quot;Intelligent code analysis with detailed feedback, improvement suggestions, and automated quality checks.&quot;
                },
                {
                  icon: <Lock className=&quot;w-8 h-8&quot; />,
                  title: &quot;Security Best Practices&quot;,
                  description: &quot;Enforce security standards, compliance requirements, and industry best practices automatically.&quot;
                },
                {
                  icon: <BarChart3 className=&quot;w-8 h-8&quot; />,
                  title: &quot;Performance Analytics&quot;,
                  description: &quot;Comprehensive metrics and insights to track code quality improvements and security posture over time.&quot;
                },
                {
                  icon: <Globe className=&quot;w-8 h-8&quot; />,
                  title: &quot;Integration & APIs&quot;,
                  description: &quot;Seamless integration with GitHub, GitLab, Bitbucket, and CI/CD pipelines with custom API access.&quot;
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300&quot;
                >
                  <div className=&quot;w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6&quot;>
                    {feature.icon}
                  </div>
                  <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300&quot;>{feature.description}</p>
=======
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_[
                {
                  icon: <Code className="w-8 h-8" />, _title: "Multi-Language Support", _description: "Support for Python, _JavaScript, _Java, _Go, _Rust, _and more with language-specific security rules and best practices."}, _{_icon: <Shield className="w-8 h-8" />, _title: "AI-Powered Vulnerability Detection", _description: "Advanced machine learning algorithms that detect security vulnerabilities, _code smells, _and potential security risks."}, _{_icon: <Eye className="w-8 h-8" />, _title: "Automated Code Review", _description: "Intelligent code analysis with detailed feedback, _improvement suggestions, _and automated quality checks."}, _{_icon: <Lock className="w-8 h-8" />, _title: "Security Best Practices", _description: "Enforce security standards, _compliance requirements, _and industry best practices automatically."}, _{_icon: <BarChart3 className="w-8 h-8" />, _title: "Performance Analytics", _description: "Comprehensive metrics and insights to track code quality improvements and security posture over time."}, _{_icon: <Globe className="w-8 h-8" />, _title: "Integration & APIs", _description: "Seamless integration with GitHub, _GitLab, _Bitbucket, _and CI/CD pipelines with custom API access."}
              ].map((feature, _index) => (
                <motion.div
                  key={_index}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                    {_feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{_feature.title}</h3>
                  <p className="text-gray-300">{_feature.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Pricing Section */}
        <section className=&quot;py-20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Transparent Pricing Plans
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Choose the plan that fits your development team size and security requirements. 
                All plans include our core AI-powered security scanning capabilities.
              </p>
            </motion.div>
            
<<<<<<< HEAD
            <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
              {[
                {
                  name: &quot;Starter&quot;,
                  price: &quot;$299&quot;,
                  period: &quot;/month&quot;,
                  description: &quot;Perfect for small development teams and startups&quot;,
                  features: [
                    &quot;Up to 10 developers&quot;,
                    &quot;Basic security scanning&quot;,
                    &quot;GitHub/GitLab integration&quot;,
                    &quot;Email support&quot;,
                    &quot;Standard security rules&quot;,
                    &quot;Basic reporting&quot;
                  ],
                  popular: false
                },
                {
                  name: &quot;Professional&quot;,
                  price: &quot;$799&quot;,
                  period: &quot;/month&quot;,
                  description: &quot;Ideal for growing development teams&quot;,
                  features: [
                    &quot;Up to 50 developers&quot;,
                    &quot;Advanced security scanning&quot;,
                    &quot;Multi-repository support&quot;,
                    &quot;Priority support&quot;,
                    &quot;Custom security rules&quot;,
                    &quot;Advanced analytics&quot;,
                    &quot;CI/CD integration&quot;,
                    &quot;Team collaboration tools&quot;
                  ],
                  popular: true
                },
                {
                  name: &quot;Enterprise&quot;,
                  price: &quot;$1,999&quot;,
                  period: &quot;/month&quot;,
                  description: &quot;For large organizations with complex security needs&quot;,
                  features: [
                    &quot;Unlimited developers&quot;,
                    &quot;Enterprise security scanning&quot;,
                    &quot;On-premise deployment&quot;,
                    &quot;24/7 dedicated support&quot;,
                    &quot;Custom rule creation&quot;,
                    &quot;Advanced compliance&quot;,
                    &quot;API access&quot;,
                    &quot;Custom integrations&quot;,
                    &quot;SLA guarantees&quot;
                  ],
                  popular: false
                }
              ].map((plan, index) => (
=======
            <div className="grid md:grid-cols-3 gap-8">
              {_[
                {
                  name: "Starter", _price: "$299", _period: "/month", _description: "Perfect for small development teams and startups", _features: [
                    "Up to 10 developers", _"Basic security scanning", _"GitHub/GitLab integration", _"Email support", _"Standard security rules", _"Basic reporting"
                  ], _popular: false},
                {_name: "Professional", _price: "$799", _period: "/month", _description: "Ideal for growing development teams", _features: [
                    "Up to 50 developers", _"Advanced security scanning", _"Multi-repository support", _"Priority support", _"Custom security rules", _"Advanced analytics", _"CI/CD integration", _"Team collaboration tools"
                  ], _popular: true},
                {_name: "Enterprise", _price: "$1, _999", _period: "/month", _description: "For large organizations with complex security needs", _features: [
                    "Unlimited developers", _"Enterprise security scanning", _"On-premise deployment", _"24/7 dedicated support", _"Custom rule creation", _"Advanced compliance", _"API access", _"Custom integrations", _"SLA guarantees"
                  ], _popular: false}
              ].map(_(plan, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <motion.div
                  key={_index}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  className={_`relative bg-white/5 backdrop-blur-xl border rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-purple-500 bg-gradient-to-br from-purple-500/10 to-blue-500/10' 
                      : 'border-white/10'}`}
                >
<<<<<<< HEAD
                  {plan.popular && (
                    <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                      <span className=&quot;bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold&quot;>
=======
                  {_plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        Most Popular
                      </span>
                    </div>
                  )}
                  
<<<<<<< HEAD
                  <div className=&quot;text-center mb-8&quot;>
                    <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                    <div className=&quot;flex items-baseline justify-center mb-4&quot;>
                      <span className=&quot;text-5xl font-bold text-white&quot;>{plan.price}</span>
                      <span className=&quot;text-gray-400 ml-1&quot;>{plan.period}</span>
                    </div>
                    <p className=&quot;text-gray-300&quot;>{plan.description}</p>
                  </div>
                  
                  <ul className=&quot;space-y-4 mb-8&quot;>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
                        {feature}
=======
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{_plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-5xl font-bold text-white">{_plan.price}</span>
                      <span className="text-gray-400 ml-1">{_plan.period}</span>
                    </div>
                    <p className="text-gray-300">{_plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {_plan.features.map(_(feature, _featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={_{ scale: 1.05}}
                    whileTap={_{ scale: 0.95}}
                    className={_`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'}`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className=&quot;py-20 bg-white/5&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Why Choose Our AI Code Security Platform?
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Our platform delivers measurable results that improve your security posture, 
                development efficiency, and code quality while reducing costs and risks.
              </p>
            </motion.div>
            
<<<<<<< HEAD
            <div className=&quot;grid md:grid-cols-2 gap-12&quot;>
              <div className=&quot;space-y-8&quot;>
                {[
                  {
                    icon: <Shield className=&quot;w-8 h-8&quot; />,
                    title: &quot;Reduce Security Vulnerabilities by 85%&quot;,
                    description: &quot;Our AI algorithms detect security issues that traditional scanners miss, significantly reducing your attack surface.&quot;
                  },
                  {
                    icon: <Zap className=&quot;w-8 h-8&quot; />,
                    title: &quot;Speed Up Code Review Process by 70%&quot;,
                    description: &quot;Automated analysis and intelligent suggestions help developers identify and fix issues faster than manual review.&quot;
                  },
                  {
                    icon: <TrendingUp className=&quot;w-8 h-8&quot; />,
                    title: &quot;Improve Code Quality & Maintainability&quot;,
                    description: &quot;AI-powered insights help maintain consistent code standards and improve overall codebase health.&quot;
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className=&quot;flex items-start&quot;
                  >
                    <div className=&quot;w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-6 flex-shrink-0&quot;>
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>{benefit.title}</h3>
                      <p className=&quot;text-gray-300&quot;>{benefit.description}</p>
=======
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                {_[
                  {
                    icon: <Shield className="w-8 h-8" />, _title: "Reduce Security Vulnerabilities by 85%", _description: "Our AI algorithms detect security issues that traditional scanners miss, _significantly reducing your attack surface."},
                  {_icon: <Zap className="w-8 h-8" />, _title: "Speed Up Code Review Process by 70%", _description: "Automated analysis and intelligent suggestions help developers identify and fix issues faster than manual review."},
                  {_icon: <TrendingUp className="w-8 h-8" />, _title: "Improve Code Quality & Maintainability", _description: "AI-powered insights help maintain consistent code standards and improve overall codebase health."}
                ].map(_(benefit, _index) => (
                  <motion.div
                    key={_index}
                    initial={_{ opacity: 0, _x: -20}}
                    whileInView={_{ opacity: 1, _x: 0}}
                    transition={_{ duration: 0.8, _delay: index * 0.1}}
                    className="flex items-start"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-6 flex-shrink-0">
                      {_benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{_benefit.title}</h3>
                      <p className="text-gray-300">{_benefit.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </motion.div>
                ))}
              </div>
              
<<<<<<< HEAD
              <div className=&quot;space-y-8&quot;>
                {[
                  {
                    icon: <CheckCircle className=&quot;w-8 h-8&quot; />,
                    title: &quot;Ensure Compliance with Security Standards&quot;,
                    description: &quot;Meet SOC2, ISO27001, and other compliance requirements with automated security testing and reporting.&quot;
                  },
                  {
                    icon: <Users className=&quot;w-8 h-8&quot; />,
                    title: &quot;Reduce Technical Debt & Bugs&quot;,
                    description: &quot;Proactive identification of code quality issues prevents technical debt accumulation and reduces production bugs.&quot;
                  },
                  {
                    icon: <Star className=&quot;w-8 h-8&quot; />,
                    title: &quot;Enable Faster Development Cycles&quot;,
                    description: &quot;Confident code deployment with automated security validation accelerates your development and release processes.&quot;
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className=&quot;flex items-start&quot;
                  >
                    <div className=&quot;w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mr-6 flex-shrink-0&quot;>
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>{benefit.title}</h3>
                      <p className=&quot;text-gray-300&quot;>{benefit.description}</p>
=======
              <div className="space-y-8">
                {_[
                  {
                    icon: <CheckCircle className="w-8 h-8" />, _title: "Ensure Compliance with Security Standards", _description: "Meet SOC2, _ISO27001, _and other compliance requirements with automated security testing and reporting."},
                  {_icon: <Users className="w-8 h-8" />, _title: "Reduce Technical Debt & Bugs", _description: "Proactive identification of code quality issues prevents technical debt accumulation and reduces production bugs."},
                  {_icon: <Star className="w-8 h-8" />, _title: "Enable Faster Development Cycles", _description: "Confident code deployment with automated security validation accelerates your development and release processes."}
                ].map(_(benefit, _index) => (
                  <motion.div
                    key={_index}
                    initial={_{ opacity: 0, _x: 20}}
                    whileInView={_{ opacity: 1, _x: 0}}
                    transition={_{ duration: 0.8, _delay: index * 0.1}}
                    className="flex items-start"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mr-6 flex-shrink-0">
                      {_benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{_benefit.title}</h3>
                      <p className="text-gray-300">{_benefit.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Use Cases Section */}
        <section className=&quot;py-20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Trusted by Development Teams Worldwide
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Our AI-powered code security platform is used by development teams across various industries 
                to protect their applications and improve code quality.
              </p>
            </motion.div>
            
<<<<<<< HEAD
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
              {[
                &quot;Software Development Teams&quot;,
                &quot;DevOps & Security Teams&quot;,
                &quot;Financial Technology Companies&quot;,
                &quot;Healthcare Software Providers&quot;,
                &quot;E-commerce Platforms&quot;,
                &quot;Government Software Projects&quot;,
                &quot;Educational Institutions&quot;,
                &quot;Startups & Enterprises&quot;
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300&quot;
=======
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {_[
                "Software Development Teams", _"DevOps & Security Teams", _"Financial Technology Companies", _"Healthcare Software Providers", _"E-commerce Platforms", _"Government Software Projects", _"Educational Institutions", _"Startups & Enterprises"
              ].map(_(useCase, _index) => (
                <motion.div
                  key={index}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <div className=&quot;w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4&quot;>
                    <Users className=&quot;w-6 h-6&quot; />
                  </div>
<<<<<<< HEAD
                  <h3 className=&quot;text-white font-semibold&quot;>{useCase}</h3>
=======
                  <h3 className="text-white font-semibold">{_useCase}</h3>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
=======
        {_/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Ready to Secure Your Code?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join thousands of development teams who trust our AI-powered platform to protect their applications 
                and improve code quality. Start your free trial today.
              </p>
              
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <motion.button
<<<<<<< HEAD
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=&quot;px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center&quot;
=======
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Start Free Trial
                  <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
                </motion.button>
                
                <motion.button
<<<<<<< HEAD
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=&quot;px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300&quot;
=======
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Contact Sales
                </motion.button>
              </div>
              
              <div className=&quot;mt-8 text-gray-400&quot;>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Information */}
        <section className=&quot;py-16 bg-white/5&quot;>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
=======
        {_/* Contact Information */}
        <section className="py-16 bg-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="grid md: grid-cols-3 gap-8 text-gray-300">
=======
              <h3 className=&quot;text-2xl font-bold text-white mb-6&quot;>Get in Touch</h3>
              <div className=&quot;grid md:grid-cols-3 gap-8 text-gray-300&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                <div>
                  <div className=&quot;w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4&quot;>
                    <Users className=&quot;w-6 h-6&quot; />
                  </div>
                  <h4 className=&quot;text-white font-semibold mb-2&quot;>Contact Us</h4>
                  <p>Mobile: +1 302 464 0950</p>
                  <p>Email: kleber@ziontechgroup.com</p>
                </div>
                
                <div>
                  <div className=&quot;w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4&quot;>
                    <Globe className=&quot;w-6 h-6&quot; />
                  </div>
                  <h4 className=&quot;text-white font-semibold mb-2&quot;>Visit Our Website</h4>
                  <p>https://ziontechgroup.com</p>
                </div>
                
                <div>
                  <div className=&quot;w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4&quot;>
                    <Award className=&quot;w-6 h-6&quot; />
                  </div>
                  <h4 className=&quot;text-white font-semibold mb-2&quot;>Address</h4>
                  <p>364 E Main St STE 1008</p>
                  <p>Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
},

export default AICodeReviewSecurityScanner,