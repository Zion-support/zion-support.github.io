<<<<<<< HEAD
import React from 'react',;
import SEO from '../components/SEO',;
import { motion } from 'framer-motion',;
import { ;
  Brain, Shield, Code, CheckCircle, Zap, ;
  ArrowRight, Star, TrendingUp, Users, ;
  Lock, Eye, BarChart3, Globe, Award;
} from 'lucide-react',;
;
const AICodeReviewSecurityScanner = () => {;
  return (;
    <>;
      <SEO ;
        title="AI-Powered Code Review & Security Scanner | Zion Tech Group";
        description="Advanced AI-powered platform that automatically reviews code, detects security vulnerabilities, suggests improvements, and ensures code quality across multiple programming languages.";
        keywords={["AI code review", "security scanner", "vulnerability detection", "code quality", "automated code analysis", "security testing", "DevOps security"]}
        ogImage="https://ziontechgroup.com/og-ai-code-review.jpg";
        canonical="https://ziontechgroup.com/ai-code-review-security-scanner";
      />;
      ;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
        {/* Hero Section */}
        <section className="relative overflow-hidden">;
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />;
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              className="text-center";
            >;
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">;
                <Brain className="w-4 h-4 mr-2" />;
                AI-Powered Development Security;
              </div>;
              ;
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
                AI-Powered Code Review & ;
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Security Scanner</span>;
              </h1>;
              ;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
                Advanced AI-powered platform that automatically reviews code, detects security vulnerabilities, ;
                suggests improvements, and ensures code quality across multiple programming languages.;
              </p>;
              ;
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">;
                <motion.button;
                  whileHover={{ scale:1.05 }}
                  whileTap={{ scale:0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center";
                >;
                  Start Free Trial;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </motion.button>;
                ;
                <motion.button;
                  whileHover={{ scale:1.05 }}
                  whileTap={{ scale:0.95 }}
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300";
                >;
                  Schedule Demo;
                </motion.button>;
              </div>;
              ;
              <div className="flex flex-wrap justify-center gap-8 text-gray-400">;
                <div className="flex items-center">;
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />;
                  Multi-language support;
                </div>;
                <div className="flex items-center">;
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />;
                  Real-time scanning;
                </div>;
                <div className="flex items-center">;
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />;
                  SOC2 & ISO27001 compliant;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
;
        {/* Features Section */}
        <section className="py-20 bg-white/5">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              className="text-center mb-16";
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Comprehensive Code Security & Quality;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Our AI-powered platform provides end-to-end code analysis, security scanning, and quality assurance ;
                to protect your applications and improve development efficiency.;
              </p>;
            </motion.div>;
            ;
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {[;
                {;
                  icon:<Code className="w-8 h-8" />,;
                  title:"Multi-Language Support",;
                  description:"Support for Python, JavaScript, Java, Go, Rust, and more with language-specific security rules and best practices.";
                },;
                {;
                  icon:<Shield className="w-8 h-8" />,;
                  title:"AI-Powered Vulnerability Detection",;
                  description:"Advanced machine learning algorithms that detect security vulnerabilities, code smells, and potential security risks.";
                },;
                {;
                  icon:<Eye className="w-8 h-8" />,;
                  title:"Automated Code Review",;
                  description:"Intelligent code analysis with detailed feedback, improvement suggestions, and automated quality checks.";
                },;
                {;
                  icon:<Lock className="w-8 h-8" />,;
                  title:"Security Best Practices",;
                  description:"Enforce security standards, compliance requirements, and industry best practices automatically.";
                },;
                {;
                  icon:<BarChart3 className="w-8 h-8" />,;
                  title:"Performance Analytics",;
                  description:"Comprehensive metrics and insights to track code quality improvements and security posture over time.";
                },;
                {;
                  icon:<Globe className="w-8 h-8" />,;
                  title:"Integration & APIs",;
                  description:"Seamless integration with GitHub, GitLab, Bitbucket, and CI/CD pipelines with custom API access.";
=======
import React from 'react',
import SEO from '../components/SEO',
import { motion } from 'framer-motion',
import { 
  Brain, Shield, Code, CheckCircle, Zap,
  ArrowRight, Star, TrendingUp, Users,
  Lock, Eye, BarChart3, Globe, Award
} from 'lucide-react',
const _AICodeReviewSecurityScanner = () => {_return (_<>
      <SEO 
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
              className=&quot;text-center&quot;            >
              <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8&quot;>
                <Brain className=&quot;w-4 h-4 mr-2&quot; />
                AI-Powered Development Security
              </div>
              
              <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6&quot;>
                AI-Powered Code Review & 
                <span className=&quot;bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent&quot;> Security Scanner</span>
              </h1>
              
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
                Advanced AI-powered platform that automatically reviews code, detects security vulnerabilities, 
                suggests improvements, and ensures code quality across multiple programming languages.              </p>
              
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center mb-12&quot;>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=&quot;px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center&quot;                >
                  Start Free Trial
                  <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=&quot;px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300&quot;                >
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

        {/* Features Section */}
        <section className=&quot;py-20 bg-white/5&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Comprehensive Code Security & Quality
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Our AI-powered platform provides end-to-end code analysis, security scanning, and quality assurance                 to protect your applications and improve development efficiency.
              </p>
            </motion.div>
            
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                }
              ].map((feature, index) => (;
                <motion.div;
                  key={index}
<<<<<<< HEAD
                  initial={{ opacity:0, y:20 }}
                  whileInView={{ opacity:1, y:0 }}
                  transition={{ duration:0.8, delay:index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300";
                >;
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">;
                    {feature.icon}
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>;
                  <p className="text-gray-300">{feature.description}</p>;
                </motion.div>;
=======
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300&quot;
                >
                  <div className=&quot;w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6&quot;>
                    {feature.icon}
                  </div>
                  <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300&quot;>{feature.description}</p>                </motion.div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              ))}
            </div>;
          </div>;
        </section>;
;
        {/* Pricing Section */}
<<<<<<< HEAD
        <section className="py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              className="text-center mb-16";
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Transparent Pricing Plans;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Choose the plan that fits your development team size and security requirements. ;
                All plans include our core AI-powered security scanning capabilities.;
              </p>;
            </motion.div>;
            ;
            <div className="grid md:grid-cols-3 gap-8">;
              {[;
                {;
                  name:"Starter",;
                  price:"$299",;
                  period:"/month",;
                  description:"Perfect for small development teams and startups",;
                  features:[;
                    "Up to 10 developers",;
                    "Basic security scanning",;
                    "GitHub/GitLab integration",;
                    "Email support",;
                    "Standard security rules",;
                    "Basic reporting";
                  ],;
                  popular:false;
                },;
                {;
                  name:"Professional",;
                  price:"$799",;
                  period:"/month",;
                  description:"Ideal for growing development teams",;
                  features:[;
                    "Up to 50 developers",;
                    "Advanced security scanning",;
                    "Multi-repository support",;
                    "Priority support",;
                    "Custom security rules",;
                    "Advanced analytics",;
                    "CI/CD integration",;
                    "Team collaboration tools";
                  ],;
                  popular:true;
                },;
                {;
                  name:"Enterprise",;
                  price:"$1,999",;
                  period:"/month",;
                  description:"For large organizations with complex security needs",;
                  features:[;
                    "Unlimited developers",;
                    "Enterprise security scanning",;
                    "On-premise deployment",;
                    "24/7 dedicated support",;
                    "Custom rule creation",;
                    "Advanced compliance",;
                    "API access",;
                    "Custom integrations",;
                    "SLA guarantees";
                  ],;
                  popular:false;
                }
              ].map((plan, index) => (;
                <motion.div;
                  key={index}
                  initial={{ opacity:0, y:20 }}
                  whileInView={{ opacity:1, y:0 }}
                  transition={{ duration:0.8, delay:index * 0.1 }}
                  className={`relative bg-white/5 backdrop-blur-xl border rounded-2xl p-8 ${;
                    plan.popular ;
                      ? 'border-purple-500 bg-gradient-to-br from-purple-500/10 to-blue-500/10' ;
                      :'border-white/10';
                  }`}
                >;
                  {plan.popular && (;
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                        Most Popular;
                      </span>;
                    </div>;
                  )}
                  ;
                  <div className="text-center mb-8">;
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                    <div className="flex items-baseline justify-center mb-4">;
                      <span className="text-5xl font-bold text-white">{plan.price}</span>;
                      <span className="text-gray-400 ml-1">{plan.period}</span>;
                    </div>;
                    <p className="text-gray-300">{plan.description}</p>;
                  </div>;
                  ;
                  <ul className="space-y-4 mb-8">;
                    {plan.features.map((feature, featureIndex) => (;
                      <li key={featureIndex} className="flex items-center text-gray-300">;
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                  ;
                  <motion.button;
                    whileHover={{ scale:1.05 }}
                    whileTap={{ scale:0.95 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${;
                      plan.popular;
                        ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700';
                        :'bg-white/10 text-white border border-white/20 hover:bg-white/20';
                    }`}
                  >;
                    Get Started;
                  </motion.button>;
                </motion.div>;
=======
        <section className=&quot;py-20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Transparent Pricing Plans
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Choose the plan that fits your development team size and security requirements. 
                All plans include our core AI-powered security scanning capabilities.
              </p>
            </motion.div>
            
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
              ].map((plan, index) => (                <motion.div
                  key={_index}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  className={_`relative bg-white/5 backdrop-blur-xl border rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-purple-500 bg-gradient-to-br from-purple-500/10 to-blue-500/10' 
                      : 'border-white/10'}`}
                >
                  {plan.popular && (
                    <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                      <span className=&quot;bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold&quot;>                        Most Popular
                      </span>
                    </div>
                  )}
                  
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
                        {feature}                      </li>
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              ))}
            </div>;
          </div>;
        </section>;
;
        {/* Benefits Section */}
<<<<<<< HEAD
        <section className="py-20 bg-white/5">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              className="text-center mb-16";
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Why Choose Our AI Code Security Platform?;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Our platform delivers measurable results that improve your security posture, ;
                development efficiency, and code quality while reducing costs and risks.;
              </p>;
            </motion.div>;
            ;
            <div className="grid md:grid-cols-2 gap-12">;
              <div className="space-y-8">;
                {[;
                  {;
                    icon:<Shield className="w-8 h-8" />,;
                    title:"Reduce Security Vulnerabilities by 85%",;
                    description:"Our AI algorithms detect security issues that traditional scanners miss, significantly reducing your attack surface.";
                  },;
                  {;
                    icon:<Zap className="w-8 h-8" />,;
                    title:"Speed Up Code Review Process by 70%",;
                    description:"Automated analysis and intelligent suggestions help developers identify and fix issues faster than manual review.";
                  },;
                  {;
                    icon:<TrendingUp className="w-8 h-8" />,;
                    title:"Improve Code Quality & Maintainability",;
                    description:"AI-powered insights help maintain consistent code standards and improve overall codebase health.";
=======
        <section className=&quot;py-20 bg-white/5&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Why Choose Our AI Code Security Platform?
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Our platform delivers measurable results that improve your security posture, 
                development efficiency, and code quality while reducing costs and risks.
              </p>
            </motion.div>
            
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                  }
                ].map((benefit, index) => (;
                  <motion.div;
                    key={index}
<<<<<<< HEAD
                    initial={{ opacity:0, x:-20 }}
                    whileInView={{ opacity:1, x:0 }}
                    transition={{ duration:0.8, delay:index * 0.1 }}
                    className="flex items-start";
                  >;
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-6 flex-shrink-0">;
                      {benefit.icon}
                    </div>;
                    <div>;
                      <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>;
                      <p className="text-gray-300">{benefit.description}</p>;
                    </div>;
                  </motion.div>;
                ))}
              </div>;
              ;
              <div className="space-y-8">;
                {[;
                  {;
                    icon:<CheckCircle className="w-8 h-8" />,;
                    title:"Ensure Compliance with Security Standards",;
                    description:"Meet SOC2, ISO27001, and other compliance requirements with automated security testing and reporting.";
                  },;
                  {;
                    icon:<Users className="w-8 h-8" />,;
                    title:"Reduce Technical Debt & Bugs",;
                    description:"Proactive identification of code quality issues prevents technical debt accumulation and reduces production bugs.";
                  },;
                  {;
                    icon:<Star className="w-8 h-8" />,;
                    title:"Enable Faster Development Cycles",;
                    description:"Confident code deployment with automated security validation accelerates your development and release processes.";
=======
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
                      <p className=&quot;text-gray-300&quot;>{benefit.description}</p>                    </div>
                  </motion.div>
                ))}
              </div>
              
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                  }
                ].map((benefit, index) => (;
                  <motion.div;
                    key={index}
<<<<<<< HEAD
                    initial={{ opacity:0, x:20 }}
                    whileInView={{ opacity:1, x:0 }}
                    transition={{ duration:0.8, delay:index * 0.1 }}
                    className="flex items-start";
                  >;
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mr-6 flex-shrink-0">;
                      {benefit.icon}
                    </div>;
                    <div>;
                      <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>;
                      <p className="text-gray-300">{benefit.description}</p>;
                    </div>;
                  </motion.div>;
=======
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
                      <p className=&quot;text-gray-300&quot;>{benefit.description}</p>                    </div>
                  </motion.div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                ))}
              </div>;
            </div>;
          </div>;
        </section>;
;
        {/* Use Cases Section */}
<<<<<<< HEAD
        <section className="py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              className="text-center mb-16";
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Trusted by Development Teams Worldwide;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Our AI-powered code security platform is used by development teams across various industries ;
                to protect their applications and improve code quality.;
              </p>;
            </motion.div>;
            ;
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {[;
                "Software Development Teams",;
                "DevOps & Security Teams",;
                "Financial Technology Companies",;
                "Healthcare Software Providers",;
                "E-commerce Platforms",;
                "Government Software Projects",;
                "Educational Institutions",;
                "Startups & Enterprises";
              ].map((useCase, index) => (;
                <motion.div;
                  key={index}
                  initial={{ opacity:0, y:20 }}
                  whileInView={{ opacity:1, y:0 }}
                  transition={{ duration:0.8, delay:index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300";
                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">;
                    <Users className="w-6 h-6" />;
                  </div>;
                  <h3 className="text-white font-semibold">{useCase}</h3>;
                </motion.div>;
=======
        <section className=&quot;py-20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Trusted by Development Teams Worldwide
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Our AI-powered code security platform is used by development teams across various industries 
                to protect their applications and improve code quality.
              </p>
            </motion.div>
            
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
                  className=&quot;bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300&quot;                >
                  <div className=&quot;w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4&quot;>
                    <Users className=&quot;w-6 h-6&quot; />
                  </div>
                  <h3 className=&quot;text-white font-semibold&quot;>{useCase}</h3>                </motion.div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              ))}
            </div>;
          </div>;
        </section>;
;
        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">;
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Ready to Secure Your Code?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Join thousands of development teams who trust our AI-powered platform to protect their applications ;
                and improve code quality. Start your free trial today.;
              </p>;
              ;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <motion.button;
                  whileHover={{ scale:1.05 }}
                  whileTap={{ scale:0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center";
                >;
                  Start Free Trial;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </motion.button>;
                ;
                <motion.button;
                  whileHover={{ scale:1.05 }}
                  whileTap={{ scale:0.95 }}
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300";
                >;
                  Contact Sales;
                </motion.button>;
              </div>;
              ;
              <div className="mt-8 text-gray-400">;
                <p>14-day free trial • No credit card required • Cancel anytime</p>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
;
        {/* Contact Information */}
        <section className="py-16 bg-white/5">;
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
            >;
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>;
              <div className="grid md:grid-cols-3 gap-8 text-gray-300">;
                <div>;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">;
                    <Users className="w-6 h-6" />;
                  </div>;
                  <h4 className="text-white font-semibold mb-2">Contact Us</h4>;
                  <p>Mobile:+1 302 464 0950</p>;
                  <p>Email:kleber@ziontechgroup.com</p>;
                </div>;
                ;
                <div>;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">;
                    <Globe className="w-6 h-6" />;
                  </div>;
                  <h4 className="text-white font-semibold mb-2">Visit Our Website</h4>;
                  <p>https://ziontechgroup.com</p>;
                </div>;
                ;
                <div>;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">;
                    <Award className="w-6 h-6" />;
                  </div>;
                  <h4 className="text-white font-semibold mb-2">Address</h4>;
                  <p>364 E Main St STE 1008</p>;
                  <p>Middletown DE 19709</p>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
},;
;
=======
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>            <motion.div
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=&quot;px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center&quot;                >
                  Start Free Trial
                  <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=&quot;px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300&quot;                >
                  Contact Sales
                </motion.button>
              </div>
              
              <div className=&quot;mt-8 text-gray-400&quot;>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className=&quot;py-16 bg-white/5&quot;>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="grid md: grid-cols-3 gap-8 text-gray-300">                <div>
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

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export default AICodeReviewSecurityScanner,