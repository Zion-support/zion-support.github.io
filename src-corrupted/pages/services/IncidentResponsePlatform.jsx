import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const IncidentResponsePlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
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