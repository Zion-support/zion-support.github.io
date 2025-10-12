import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { Zap, Workflow, CheckCircle, ArrowRight, Brain, Settings, Clock, TrendingUp, Shield } from 'lucide-react';

export default function AIAutomationPage() {
  const features = [
    {
      icon: <Zap className="w-5 h-5 ml-2" />,
      title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.'
    },
    {
      icon: <Brain className="w-5 h-5 ml-2" />,
      title: 'Intelligent Decision Making',
      description: 'AI-powered decision making based on data analysis and business rules.'
    },
    {
      icon: <Settings className="w-5 h-5 ml-2" />,
      title: 'Custom Integrations',
      description: 'Seamlessly integrate with your existing systems and third-party applications.'
    },
    {
      icon: <TrendingUp className="w-5 h-5 ml-2" />,
      title: 'Scalable Solutions',
      description: 'Automation solutions that grow with your business and adapt to changing needs.'
    }
  ];
  
  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automate ticket routing, response generation, and issue resolution.',
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: 'Data Processing',
      description: 'Automate data collection, validation, and analysis workflows.',
      icon: <Workflow className="w-5 h-5" />
    },
    {
      title: 'Marketing Automation',
      description: 'Automate email campaigns, lead scoring, and customer segmentation.',
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: 'Financial Operations',
      description: 'Automate invoice processing, expense management, and financial reporting.',
      icon: <Shield className="w-5 h-5" />
    }
  ];
  const benefits = [
    'Reduce operational costs by up to 70%',
    'Increase productivity and efficiency',
    'Eliminate human errors in repetitive tasks',
    '24/7 automated operations',
    'Scalable and adaptable solutions',
    'ROI within 3-6 months'
  ];

export default AIAutomationPage;

import { ArrowRight } from 'lucide-react';

export default function AiAutomation() {
  return (
    
        <>
      <title>AiAutomation - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">AiAutomation</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aiautomation services coming soon.</p>
            
              Contact Us

      </>
  );
}

=======
export default AIAutomationPage;
const AIAutomationPage: React.FC = () => {  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <Helmet></Helmet>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Reduce costs, increase efficiency, and eliminate manual processes." /></meta>
        <meta name="keywords" content="AI automation, business process automation, workflow automation, intelligent automation, RPA" /></meta>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
        <h1 className="text-4xl font-bold text-white mb-6">AI Automation Services</h1>
        <p className="text-lg text-gray-300 mb-8">Transform your business with AI-powered automation solutions. Reduce costs, increase efficiency, and eliminate manual processes.</p>
        <Link;</Link></Link>
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        ></Link>
          Contact Us;
          <ArrowRight className="w-5 h-5 ml-2" /></ArrowRight>
        </Link>
      </div>
    </div>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
