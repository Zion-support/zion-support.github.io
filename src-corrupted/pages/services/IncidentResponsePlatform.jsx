import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {motion} from 'framer-motion';
import { CheckCircle, Shield, Zap, TrendingUp, AlertTriangle, Clock, Eye, Target, ArrowRight, Activity const IncidentResponsePlatform = (props: any) => {
    const features = [
        {
            title: "AI-Powered Threat Detection",
            description: "Advanced machine learning algorithms detect threats in real-time with high accuracy and low false positives",
            icon: <Eye className="w-6 h-6" />
        },
        {title: "Automated Response Workflows",
            description: "Intelligent automation handles routine incidents while escalating critical threats to human analysts",
            icon: <Zap className="w-6 h-6" />},
        {title: "Real-time Alerting & Notifications",
            description: "Instant notifications across multiple channels with customizable escalation paths and response teams",
            icon: <AlertTriangle className="w-6 h-6" />},
        {
            title: "Incident Timeline Tracking",
            description: "Comprehensive tracking of all incident activities, communications, and resolution steps for audit compliance",
            icon: <Clock className="w-6 h-6" />

    ];
    const benefits = [
        {
            metric: "70%",
            description: "Reduction in response time",
            icon: <Clock className="w-5 h-5" />
        },
        {metric: "45%",
            description: "Improvement in resolution quality",
            icon: <TrendingUp className="w-5 h-5" />},
        {metric: "24/7",
            description: "Automated monitoring",
            icon: <Activity className="w-5 h-5" />},
        {
            metric: "90%",
            description: "Compliance assurance",
            icon: <Shield className="w-5 h-5" />

    ];
    const pricingPlans = [
        {
            name: "Professional",
            price: "$299",
            period: "/month",
            description: "Perfect for growing security teams",
            features: [
                "Up to 50 users",
                "Basic threat detection",
                "Standard response workflows",
                "Email & Slack notifications",
                "Basic reporting",
                "Email support"
            ],
            popular: false
        },
        {name: "Enterprise",
            price: "$599",
            period: "/month",
            description: "Ideal for large organizations",
            features: [
                "Unlimited users",
                "Advanced AI detection",
                "Custom response workflows",
                "Multi-channel notifications",
                "Advanced analytics",
                "Priority support",
                "Compliance reporting"
            ],
            popular: true},
        {
            name: "Custom",
            price: "Custom",
            period: "",
            description: "For complex enterprise needs",
            features: [
                "Custom integrations",
                "Dedicated support team",
                "Custom training",
                "SLA guarantees",
                "On-premise options",
                "Custom development"
            ],
            popular: false

    ];
    const integrations = [
        "SIEM Systems", "EDR Solutions", "Firewall", "IDS/IPS", "Slack", "Teams", "Jira", "ServiceNow"
    ];
    const useCases = [
        "Security incident management",
        "IT operations",
        "Compliance management",
        "Team collaboration",
        "Audit preparation",
        "Risk mitigation"
    ];
    return (<>
      <Helmet>
        <title>IncidentResponsePlatform | Zion Tech Group</title>
        <meta name="description" content="IncidentResponsePlatform - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">IncidentResponsePlatform</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};
export default IncidentResponsePlatform;