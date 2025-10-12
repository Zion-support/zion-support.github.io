<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
<<<<<<< HEAD
export default function AiServices() {
=======
import React, { useState } from 'react';
export default AiServicesPage;}
const AiServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const aiServices = [
    {
      icon: <Brain className="w-5h-5ml-2" />,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      price: 'Starting at $2,999/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom ML models', 'Data visualization'],
      benefits: ['40% increase in decision speed', '25% cost reduction', '99.9% accuracy'],
      link: '/ai-analytics',
      category: 'analytics'
    },
    {
      icon: <MessageCircle className="w-5h-5ml-2" />,
      title: 'AI Chatbot & Conversational AI',
      description: 'Intelligent chatbots that understand context and provide human-like interactions.',
      price: 'Starting at $1,499/month',
      features: ['Natural language processing', 'Multi-language support', 'Voice integration', '24/7 availability'],
      benefits: ['80% reduction in support tickets', '60% faster response time', '95% customer satisfaction'],
      link: '/ai-chatbot-builder',
      category: 'conversational'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'AI Cybersecurity Solutions',
      description: 'Advanced threat detection and prevention using machine learning algorithms.',
      price: 'Starting at $3,999/month',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring'],
      benefits: ['99.8% threat detection rate', '50% faster incident response', 'Zero false positives'],
      link: '/ai-cybersecurity',
      category: 'security'
    },
    {
      icon: <Eye className="w-5h-5ml-2" />,
      title: 'Computer Vision & Image Recognition',
      description: 'Advanced image analysis and recognition capabilities for various industries.',
      price: 'Starting at $2,499/month',
      features: ['Object detection', 'Facial recognition', 'Quality inspection', 'Medical imaging'],
      benefits: ['90% accuracy improvement', '70% faster processing', '24/7 monitoring'],
      link: '/computer-vision',
      category: 'vision'
    },
    {
      icon: <Mic className="w-5h-5ml-2" />,
      title: 'AI Voice & Speech Processing',
      description: 'Convert speech to text, analyze sentiment, and create voice assistants.',
      price: 'Starting at $1,999/month',
      features: ['Speech-to-text', 'Voice synthesis', 'Sentiment analysis', 'Multi-language support'],
      benefits: ['95% accuracy rate', 'Real-time processing', 'Custom voice models'],
      link: '/ai-voice-assistant',
      category: 'voice'
    },
    {
      icon: <FileText className="w-5h-5ml-2" />,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      price: 'Starting at $999/month',
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'Product descriptions'],
      benefits: ['80% time savings', 'Consistent quality', 'SEO optimized'],
      link: '/ai-content-generator',
      category: 'content'
    },
    {
      icon: <Users className="w-5h-5ml-2" />,
      title: 'AI Customer Service',
      description: 'Intelligent customer support with automated ticket routing and resolution.',
      price: 'Starting at $1,799/month',
      features: ['Ticket automation', 'Sentiment analysis', 'Escalation management', 'Performance analytics'],
      benefits: ['75% faster resolution', '90% customer satisfaction', '24/7 availability'],
      link: '/ai-customer-service',
      category: 'customer'
    },
    {
      icon: <Heart className="w-5h-5ml-2" />,
      title: 'AI Healthcare Solutions',
      description: 'Medical diagnosis assistance, drug discovery, and patient monitoring systems.',
      price: 'Starting at $4,999/month',
      features: ['Medical imaging analysis', 'Drug discovery', 'Patient monitoring', 'Diagnostic assistance'],
      benefits: ['95% diagnostic accuracy', '30% faster diagnosis', 'FDA compliant'],
      link: '/ai-healthcare',
      category: 'healthcare'
    },
    {
      icon: <DollarSign className="w-5h-5ml-2" />,
      title: 'AI Financial Services',
      description: 'Fraud detection, algorithmic trading, and risk assessment solutions.',
      price: 'Starting at $3,499/month',
      features: ['Fraud detection', 'Algorithmic trading', 'Risk assessment', 'Credit scoring'],
      benefits: ['99.5% fraud detection', '25% risk reduction', 'Real-time monitoring'],
      link: '/ai-financial',
      category: 'finance'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: 'AI Marketing Automation',
      description: 'Personalized marketing campaigns and customer segmentation using AI.',
      price: 'Starting at $2,199/month',
      features: ['Customer segmentation', 'Personalized campaigns', 'A/B testing', 'ROI optimization'],
      benefits: ['40% higher conversion', '60% cost reduction', 'Real-time optimization'],
      link: '/ai-marketing',
      category: 'marketing'
    },
    {
      icon: <Settings className="w-5h-5ml-2" />,
      title: 'AI Process Automation',
      description: 'Automate repetitive tasks and optimize business processes with AI.',
      price: 'Starting at $1,299/month',
      features: ['Workflow automation', 'Document processing', 'Data entry automation', 'Process optimization'],
      benefits: ['70% time savings', '90% accuracy improvement', 'Cost reduction'],
      link: '/ai-automation',
      category: 'automation'
    },
    {
      icon: <Cpu className="w-5h-5ml-2" />,
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your specific business requirements.',
      price: 'Custom pricing',
      features: ['Custom ML models', 'API development', 'Integration services', 'Ongoing support'],
      benefits: ['100% tailored solution', 'Competitive advantage', 'Scalable architecture'],
      link: '/custom-ai-development',
      category: 'custom'
    }
  ];
  const categories = [
    { id: 'overview', name: 'Overview', icon: <BarChart className="w-5h-5ml-2" /&gt; },</BarChart></BarChart>
    { id: 'analytics', name: 'Analytics', icon: <TrendingUp className="w-5h-5ml-2" /&gt; },</TrendingUp></TrendingUp>
    { id: 'conversational', name: 'Conversational', icon: <MessageCircle className="w-5h-5ml-2" /&gt; },</MessageCircle></MessageCircle>
    { id: 'security', name: 'Security', icon: <Shield className="w-5h-5ml-2" /&gt; },</Shield></Shield>
    { id: 'vision', name: 'Computer Vision', icon: <Eye className="w-5h-5ml-2" /&gt; },</Eye></Eye>
    { id: 'voice', name: 'Voice AI', icon: <Mic className="w-5h-5ml-2" /&gt; },</Mic></Mic>
    { id: 'content', name: 'Content', icon: <FileText className="w-5h-5ml-2" /&gt; },</FileText></FileText>
    { id: 'customer', name: 'Customer Service', icon: <Users className="w-5h-5ml-2" /&gt; },</Users></Users>
    { id: 'automation', name: 'Automation', icon: <Workflow className="w-5h-5ml-2" /&gt; }</Workflow></Workflow>
  ];
  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: <Brain className="w-5h-5ml-2" /&gt; },</Brain></Brain>
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-5h-5ml-2" /&gt; },</Shield></Shield>
    { number: '24/7', label: 'AI Monitoring', icon: <Clock className="w-5h-5ml-2" /&gt; },</Clock></Clock>
    { number: '150+', label: 'AI Experts', icon: <Users className="w-5h-5ml-2" /&gt; }</Users></Users>
  ];
  const filteredServices = activeTab === 'overview' 
    ? aiServices;
    : aiServices.filter(service => service.category === activeTab);
>>>>>>> origin/main
  return (
<<<<<<< HEAD

        <>
      <title>AiServices - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">AiServices</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aiservices services coming soon.</p>

      </>
  );
<<<<<<< HEAD

=======
export default function AiServicesPage() {
  return (
    <>
      <Helmet>
        <title>Ai Services - Zion Tech Group</title>
        <meta name="description" content="Professional ai services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Services</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
=======
    <></>
      <Helmet></Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta const name = "description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation. Transform your business with cutting-edge AI technology." /  /></meta>
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, AI consulting" /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/ai-services"  /></link>
        <script type="application/ld+json"  />{JSON.stringify({
            "@context": "https: //schema.org",
            "@type": "Service",
            "name": "AI Services",
            "description": "Advanced artificial intelligence solutions for businesses",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https: //ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "999",
              "priceCurrency": "USD",
              "availability": "https: //schema.org/InStock"
            }
          })}
        </script>
=======
export default function AiServicesPage() {
  return (
    <>
      <Helmet>
        <title>AiServices - Zion Tech Group</title>
        <meta name="description" content="Professional ai services solutions and services." />
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiServices</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai services solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
>>>>>>> origin/main
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
