import React from 'react';'
import { Link } from 'react-router-dom';'
import { Helmet } from 'react-helmet-async';'
import { motion } from 'framer-motion';
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
import { CheckCircle, Shield, Zap, TrendingUp, AlertTriangle, Clock, Eye, Target, ArrowRight, Activity const IncidentResponsePlatform = () => {
    const features = [
        {

=======
import { CheckCircle, Shield, Zap, TrendingUp, AlertTriangle, Clock, Eye, Target, ArrowRight, Activity const IncidentResponsePlatform = () => {}
    const features = []
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
            title: "AI-Powered Threat Detection",""
            description: "Advanced machine learning algorithms detect threats in real-time with high accuracy and low false positives",""
            icon: <Eye className="w-6 h-6"/>
        },
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
        {
"
=======
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
""
            title: "Automated Response Workflows",""
            description: "Intelligent automation handles routine incidents while escalating critical threats to human analysts",""
            icon: <Zap className="w-6 h-6"/>
        },
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
        {
"
=======
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
""
            title: "Real-time Alerting & Notifications",""
            description: "Instant notifications across multiple channels with customizable escalation paths and response teams",""
            icon: <AlertTriangle className="w-6 h-6"/>
        },
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
        {
"
=======
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
""
            title: "Incident Timeline Tracking",""
            description: "Comprehensive tracking of all incident activities, communications, and resolution steps for audit compliance",""
            icon: <Clock className="w-6 h-6"/>

    ];
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
    const benefits = [
        {
"
=======
    const benefits = []
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
""
            metric: "70%",""
            description: "Reduction in response time",""
            icon: <Clock className="w-5 h-5"/>
        },
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
        {
"
=======
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
""
            metric: "45%",""
            description: "Improvement in resolution quality",""
            icon: <TrendingUp className="w-5 h-5"/>
        },
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
        {
"
=======
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
""
            metric: "24/7",""
            description: "Automated monitoring",""
            icon: <Activity className="w-5 h-5"/>
        },
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
        {
"
=======
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
""
            metric: "90%",""
            description: "Compliance assurance",""
            icon: <Shield className="w-5 h-5"/>

    ];
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
    const pricingPlans = [
        {
"
=======
    const pricingPlans = []
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
""
            name: "Professional",""
            price: "$299",""
            period: "/month",""
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
            description: "Perfect for growing security teams","
=======
            description: "Perfect for growing security teams",
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
            features: [""
                "Up to 50 users",""
                "Basic threat detection",""
                "Standard response workflows",""
                "Email & Slack notifications",""
                "Basic reporting",""
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
                "Email support"
=======
                "Email support""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
            ],
            popular: false;
        },
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
        {
"
=======
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
""
            name: "Enterprise",""
            price: "$599",""
            period: "/month",""
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
            description: "Ideal for large organizations","
=======
            description: "Ideal for large organizations",
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
            features: [""
                "Unlimited users",""
                "Advanced AI detection",""
                "Custom response workflows",""
                "Multi-channel notifications",""
                "Advanced analytics",""
                "Priority support",""
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
                "Compliance reporting"
=======
                "Compliance reporting""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
            ],
            popular: true;
        },
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
        {
"
=======
        {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
""
            name: "Custom",""
            price: "Custom",""
            period: "",""
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
            description: "For complex enterprise needs","
=======
            description: "For complex enterprise needs",
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
            features: [""
                "Custom integrations",""
                "Dedicated support team",""
                "Custom training",""
                "SLA guarantees",""
                "On-premise options",""
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
                "Custom development"
            ],
            popular: false

    ];"
    const integrations = [""
        "SIEM Systems", "EDR Solutions", "Firewall", "IDS/IPS", "Slack", "Teams", "Jira", "ServiceNow"
    ];"
=======
                "Custom development""
            ],
            popular: false;
    ];
    const integrations = [""
        "SIEM Systems", "EDR Solutions", "Firewall", "IDS/IPS", "Slack", "Teams", "Jira", "ServiceNow""
    ];
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
    const useCases = [""
        "Security incident management",""
        "IT operations",""
        "Compliance management",""
        "Team collaboration",""
        "Audit preparation",""
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
        "Risk mitigation"
    ];
    return (<>
      <Helmet>"
=======
        "Risk mitigation""
    ];
    return (<>
      <Helmet>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
        <title>Intelligent Incident Response Platform — Zion Tech Group | AI-Driven Security</title>""
        <meta name="description" content="Transform your security operations with our AI-driven incident response platform. Automated threat detection, response workflows, and compliance reporting."/>""
        <meta property="og:title" content="Intelligent Incident Response Platform — Zion Tech Group"/>""
        <meta property="og:description" content="AI-powered incident response platform with automated workflows and real-time threat detection."/>""
        <meta property="og:url" content="https://ziontechgroup.com/services/incident-response-platform"/>""
        <link rel="canonical" href="https://ziontechgroup.com/services/incident-response-platform"/>
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
      </Helmet>"
""
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white pt-20">"
=======
      </Helmet>
""
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white pt-20">
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
        {/* Hero Section */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial = {}
  { opacity: 0,
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
  y: 20

}} whileInView = {

  { opacity: 1,
<<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
  y: 0

========
  y: 0 




"
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
>>>>>>>> main:backup-pages/src-pages/services/IncidentResponsePlatform.jsx
=======
""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/IncidentResponsePlatform.jsx
}} transition={{ duration: 0.6 }} className="text-6xl mb-6">
              🚨"
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
              Intelligent""
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">""
                {" "}Incident Response Platform
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

}}>
              Comprehensive incident management platform that uses AI to detect, respond to, and analyze
              security incidents in real-time, reducing response time and improving resolution quality.
            </motion.p>
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
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
  delay: 0.6

}}>"
              {benefits.map((benefit, index) => (<div key={index} className="text-center">"
                  <div className="text-3xl font-bold text-red-400 mb-2">{benefit.metric}</div>"
=======
  delay: 0.6 





"
}}>""
              {benefits.map((benefit, index) => (<div key={index} className="text-center">""
                  <div className="text-3xl font-bold text-red-400 mb-2">{benefit.metric}</div>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/IncidentResponsePlatform.jsx
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
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
  delay: 0.8

}}>"
=======
  delay: 0.8 





"
}}>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/IncidentResponsePlatform.jsx
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300">
                Start Free Trial"
=======
  y: 20;
}} whileInView = {}
  { opacity: 1,
  y: 0;
""
}} transition={{ duration: 0.6 }} className="text-6xl mb-6">
              🚨
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
              Intelligent""
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">""
                {" "}Incident Response Platform;
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
}}>
              Comprehensive incident management platform that uses AI to detect, respond to, and analyze;
              security incidents in real-time, reducing response time and improving resolution quality.
            </motion.p>

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
                  <div className="text-3xl font-bold text-red-400 mb-2">{benefit.metric}</div>""
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
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300">
                Start Free Trial;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
              </Link>""
              <Link to="/enhanced-services" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                View All Services;
              </Link>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
"
        {/* Features Section */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">""
          <div className="max-w-7xl mx-auto">""
            <motion.div className="text-center mb-16" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
  y: 0

}} transition={{ duration: 0.6 }}>"
=======
  y: 0 





"
}} transition={{ duration: 0.6 }}>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/IncidentResponsePlatform.jsx
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Security Features"
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
                Advanced Security Features;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
              </h2>""
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive incident response capabilities that protect your organization 24/7;
              </p>
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
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
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
  delay: index * 0.1

}}>"
                  <div className="text-red-400 mb-4">{feature.icon}</div>"
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>"
=======
  delay: index * 0.1 





"
}}>""
                  <div className="text-red-400 mb-4">{feature.icon}</div>""
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/IncidentResponsePlatform.jsx
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
                  <div className="text-red-400 mb-4">{feature.icon}</div>""
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>))}
            </div>
          </div>
        </section>
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
"
        {/* Pricing Section */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <motion.div className="text-center mb-16" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
  y: 0

}} transition={{ duration: 0.6 }}>"
=======
  y: 0 





"
}} transition={{ duration: 0.6 }}>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/IncidentResponsePlatform.jsx
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Security Solutions"
              </h2>""
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">'
                Choose the security level that matches your organization's needs
              </p>
            </motion.div>"
""
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">'
              {pricingPlans.map((plan, index) => (<motion.div key={index} className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${plan.popular''`
                ? 'border-red-400 bg-red-900/20''`'`
                : 'border-white/20 hover:border-white/40'}`} initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} transition = {

  { duration: 0.6,
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
  delay: index * 0.1

}}>"
                  {plan.popular && (<div className="text-center mb-4">"
=======
  delay: index * 0.1 





"
}}>""
                  {plan.popular && (<div className="text-center mb-4">""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/IncidentResponsePlatform.jsx
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
                Flexible Security Solutions;
              </h2>""
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the security level that matches your organization's needs;
              </p>
            </motion.div>
""
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (<motion.div key={index} className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${plan.popular'
                ? 'border-red-400 bg-red-900/20''`
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
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular;
                      </span>
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
                    </div>)}"
""
                  <div className="text-center mb-6">""
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>""
                    <div className="text-4xl font-bold text-red-400 mb-2">"
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
                    <div className="text-4xl font-bold text-red-400 mb-2">
                      {plan.price}""
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>""
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
""
                  <ul className="space-y-3 mb-8">""
                    {plan.features.map((feature, idx) => (<li key={idx} className="flex items-center text-gray-300">""
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                        {feature}
                      </li>))}
                  </ul>"`
"`'"`
                  <Link to="/contact" className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.popular''`
                ? 'bg-red-600 hover:bg-red-700 text-white''`'`
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'}`}>
                    Get Started;
                  </Link>
                </motion.div>))}
            </div>
          </div>
        </section>
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
"
=======

>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
        {/* Integrations & Use Cases */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">""
          <div className="max-w-7xl mx-auto">""
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Integrations */}
              <motion.div initial = {}
  { opacity: 0,
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
  x: -20

}} whileInView = {

  { opacity: 1,
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
  x: 0

}} transition={{ duration: 0.6 }}>"
                <h3 className="text-2xl font-bold text-white mb-6">Security Integrations</h3>"
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
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
}} transition={{ duration: 0.6 }}>""
                <h3 className="text-2xl font-bold text-white mb-6">Security Integrations</h3>""
                <div className="grid grid-cols-2 gap-4">""
                  {integrations.map((integration, index) => (<div key={index} className="flex items-center bg-white/10 rounded-lg p-3">""
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3"/>""
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/IncidentResponsePlatform.jsx
=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
                      <span className="text-gray-300">{integration}</span>
                    </div>))}
                </div>
              </motion.div>

              {/* Use Cases */}
              <motion.div initial = {}
  { opacity: 0,
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
  x: 20

}} whileInView = {

  { opacity: 1,
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
  x: 0

}} transition={{ duration: 0.6 }}>"
                <h3 className="text-2xl font-bold text-white mb-6">Perfect For</h3>"
                <div className="space-y-3">"
                  {useCases.map((useCase, index) => (<div key={index} className="flex items-center bg-white/10 rounded-lg p-3">"
                      <Target className="w-5 h-5 text-yellow-400 mr-3"/>"
=======
  x: 0 





"
=======
  x: 20;
}} whileInView = {}
  { opacity: 1,
  x: 0;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
}} transition={{ duration: 0.6 }}>""
                <h3 className="text-2xl font-bold text-white mb-6">Perfect For</h3>""
                <div className="space-y-3">""
                  {useCases.map((useCase, index) => (<div key={index} className="flex items-center bg-white/10 rounded-lg p-3">""
                      <Target className="w-5 h-5 text-yellow-400 mr-3"/>""
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/IncidentResponsePlatform.jsx
=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
                      <span className="text-gray-300">{useCase}</span>
                    </div>))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
"
        {/* CTA Section */}""
        <section className="py-20 bg-gradient-to-r from-red-900/50 to-pink-900/50">""
          <div className="max-w-4xl mx-auto text-center">""
            <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-6" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} transition={{ duration: 0.6 }}>
              Ready to Enhance Your Security Posture?"
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
              Join organizations already using our intelligent incident response platform
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
            </motion.p>
<<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx

========
            "
>>>>>>>> main:backup-pages/src-pages/services/IncidentResponsePlatform.jsx
=======
            </motion.p>"
            ""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/IncidentResponsePlatform.jsx
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} transition = {

  { duration: 0.6,
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
  delay: 0.4

}}>"
=======

        {/* CTA Section */}""
        <section className="py-20 bg-gradient-to-r from-red-900/50 to-pink-900/50">""
          <div className="max-w-4xl mx-auto text-center">""
            <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-6" initial = {}
  { opacity: 0,
  y: 20;
}} whileInView = {}
  { opacity: 1,
  y: 0;
}} transition={{ duration: 0.6 }}>
              Ready to Enhance Your Security Posture?
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
              Join organizations already using our intelligent incident response platform;
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
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300">
                Start Free Trial""
                <ArrowRight className="ml-2 w-5 h-5"/>
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
              </Link>"
=======
  delay: 0.4 





"
}}>""
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300">"
                Start Free Trial""
                <ArrowRight className="ml-2 w-5 h-5"/>"
              </Link>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/IncidentResponsePlatform.jsx
=======
              </Link>""
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
              <a href="tel:+13024640950" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Call: +1 302 464 0950;
              </a>
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
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
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
  delay: 0.6

}}>"
              <h3 className="text-lg font-semibold text-white mb-4">Why Choose Our Incident Response Platform?</h3>"
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
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
}}>""
              <h3 className="text-lg font-semibold text-white mb-4">Why Choose Our Incident Response Platform?</h3>""
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">""
                <div className="flex items-center">""
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/services/IncidentResponsePlatform.jsx
                  <span className="text-green-400 mr-2">✓</span>
                  AI-Powered Threat Detection"
                </div>""
                <div className="flex items-center">""
                  <span className="text-green-400 mr-2">✓</span>
                  Automated Response Workflows"
                </div>""
                <div className="flex items-center">""
                  <span className="text-green-400 mr-2">✓</span>
                  24/7 Security Monitoring"
=======
                  <span className="text-green-400 mr-2">✓</span>
                  AI-Powered Threat Detection;
                </div>""
                <div className="flex items-center">""
                  <span className="text-green-400 mr-2">✓</span>
                  Automated Response Workflows;
                </div>""
                <div className="flex items-center">""
                  <span className="text-green-400 mr-2">✓</span>
                  24/7 Security Monitoring;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
                </div>""
                <div className="flex items-center">""
                  <span className="text-green-400 mr-2">✓</span>
                  Compliance Assurance;
                </div>
              </div>
<<<<<<< HEAD:pages.disabled/pages/services/IncidentResponsePlatform.jsx
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
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/services/IncidentResponsePlatform.jsx
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>""
              <p>Website: <a href="https://ziontechgroup.com" className="text-red-400 hover:text-red-300">https://ziontechgroup.com</a></p>
            </motion.div>
          </div>
        </section>
      </div>
    </>);
};
export { IncidentResponsePlatform };
export default IncidentResponsePlatform;'"`
}}}}'"`'"`