
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const categories = [\'AI Services\', \'IT Services\', \'Development\', \'Security\'];
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3, Cpu, Headphones, Calendar, Send, Layers } from 'lucide-react';
const categories = ['AI Services', 'IT Services', 'Development', 'Security'];



<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function ServicesIndex() {
  const services = [
    {
      name: \'AI & Machine Learning\',
      description: \'Advanced AI solutions for business automation and intelligence\',
      icon: Brain,
      href: \'/services/ai-machine-learning\',
      features: [\'Machine Learning Models\', \'Natural Language Processing\', \'Computer Vision\', \'Predictive Analytics\']
    },
    {
      name: \'Micro SaaS Solutions\',
      description: \'Specialized software solutions for specific business needs\',
      icon: Cpu,
      href: \'/services/micro-saas\',
      features: [\'Custom Applications\', \'API Integration\', \'Scalable Infrastructure\', \'Multi-tenant Support\']
    },
    {
      name: \'AI Content Creation\',
      description: \'Generate high-quality content at scale with AI-powered tools\',
      icon: FileText,
      href: \'/services/ai-content-creation\',
      features: [\'Blog Posts\', \'Social Media\', \'Email Campaigns\', \'SEO Optimization\']
    },
    {
      name: \'Email Automation\',
      description: \'Automate email marketing campaigns with intelligent sequences\',
      icon: Send,
      href: \'/services/email-automation\',
      features: [\'Lead Nurturing\', \'Behavioral Triggers\', \'A/B Testing\', \'Analytics\']
    },
    {
      name: \'Customer Support Platform\',
      description: \'AI-powered customer support with chatbots and ticketing\',
      icon: Headphones,
      href: \'/services/customer-support\',
      features: [\'Live Chat\', \'Ticket Management\', \'Knowledge Base\', \'Analytics\']
    },
    {
      name: \'Event Management\',
      description: \'Complete event planning and management solution\',
      icon: Calendar,
      href: \'/services/event-management\',
      features: [\'Event Planning\', \'Registration\', \'Payment Processing\', \'Analytics\']
    },
    {
      name: \'Workflow Automation\',
      description: \'Streamline business processes with intelligent automation\',
      icon: Zap,
      href: \'/services/workflow-automation\',
      features: [\'Process Optimization\', \'Integration\', \'Monitoring\', \'Reporting\']
    },
    {
      name: \'Project Management\',
      description: \'Comprehensive project management and collaboration tools\',
      icon: Target,
      href: \'/services/project-management\',
      features: [\'Task Management\', \'Team Collaboration\', \'Progress Tracking\', \'Resource Planning\']
    }
  ];
  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name=\"description\" content=\"Comprehensive technology services including AI, development, automation, and more.\" />
      </Head>
<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
      <div className=\"min-h-screen bg-gray-50\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12\">
          <div className=\"text-center mb-16\">
            <h1 className=\"text-4xl font-bold text-gray-900 mb-4\">Our Services</h1>
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
              Comprehensive technology solutions designed to transform your business and drive growth
            </p>
          </div>
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {services.map((service, index) => (
              <div key={index} className=\"bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6\">
                <div className=\"flex items-center mb-4\">
                  <div className=\"p-3 bg-blue-100 rounded-lg mr-4\">
                    <service.icon className=\"w-6 h-6 text-blue-600\" />
                  </div>
                  <h3 className=\"text-xl font-semibold text-gray-900\">{service.name}</h3>
                </div>
<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
                <p className=\"text-gray-600 mb-4\">{service.description}</p>
                <ul className=\"space-y-2 mb-6\">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=\"flex items-center text-sm text-gray-600\">
                      <Check className=\"w-4 h-4 text-green-500 mr-2\" />
export default function ServicesIndex() {;
  const services = [;
    {;
      name: \'AI & Machine Learning\',;
      description: \'Advanced AI solutions for business automation and intelligence\',;
      icon: Brain,;
      href: \'/services/ai-machine-learning\',;
      features: [\'Machine Learning Models\', \'Natural Language Processing\', \'Computer Vision\', \'Predictive Analytics\'];
    },;
    {;
      name: \'Micro SaaS Solutions\',;
      description: \'Specialized software solutions for specific business needs\',;
      icon: Cpu,;
      href: \'/services/micro-saas\',;
      features: [\'Custom Applications\', \'API Integration\', \'Scalable Infrastructure\', \'Multi-tenant Support\'];
    },;
    {;
      name: \'AI Content Creation\',;
      description: \'Generate high-quality content at scale with AI-powered tools\',;
      icon: FileText,;
      href: \'/services/ai-content-creation\',;
      features: [\'Blog Posts\', \'Social Media\', \'Email Campaigns\', \'SEO Optimization\'];
    },;
    {;
      name: \'Email Automation\',;
      description: \'Automate email marketing campaigns with intelligent sequences\',;
      icon: Send,;
      href: \'/services/email-automation\',;
      features: [\'Lead Nurturing\', \'Behavioral Triggers\', \'A/B Testing\', \'Analytics\'];
    },;
    {;
      name: \'Customer Support Platform\',;
      description: \'AI-powered customer support with chatbots and ticketing\',;
      icon: Headphones,;
      href: \'/services/customer-support\',;
      features: [\'Live Chat\', \'Ticket Management\', \'Knowledge Base\', \'Analytics\'];
    },;
    {;
      name: \'Event Management\',;
      description: \'Complete event planning and management solution\',;
      icon: Calendar,;
      href: \'/services/event-management\',;
      features: [\'Event Planning\', \'Registration\', \'Payment Processing\', \'Analytics\'];
    },;
    {;
      name: \'Workflow Automation\',;
      description: \'Streamline business processes with intelligent automation\',;
      icon: Zap,;
      href: \'/services/workflow-automation\',;
      features: [\'Process Optimization\', \'Integration\', \'Monitoring\', \'Reporting\'];
    },;
    {;
      name: \'Project Management\',;
      description: \'Comprehensive project management and collaboration tools\',;
      icon: Target,;
      href: \'/services/project-management\',;
      features: [\'Task Management\', \'Team Collaboration\', \'Progress Tracking\', \'Resource Planning\'];
    }
  ];
  return (
    <>;
      <Head>;
        <title>Services - Zion Tech Group</title>;
        <meta name=\"description\" content=\"Comprehensive technology services including AI, development, automation, and more.\" />;
      </Head>;
      <div className=\"min-h-screen bg-gray-50\">;
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12\">;
          <div className=\"text-center mb-16\">;
            <h1 className=\"text-4xl font-bold text-gray-900 mb-4\">Our Services</h1>;
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;
              Comprehensive technology solutions designed to transform your business and drive growth;
            </p>;
          </div>;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">;
      <div className="min-h-screen bg-gray-50">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
          <div className="text-center mb-16">;
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Comprehensive technology solutions designed to transform your business and drive growth;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {services && services.map((service, index) => (;
              <div key={index} className=\"bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6\">;
                <div className=\"flex items-center mb-4\">;
                  <div className=\"p-3 bg-blue-100 rounded-lg mr-4\">;
                    <service && service.icon className=\"w-6 h-6 text-blue-600\" />;
                  </div>;
                  <h3 className=\"text-xl font-semibold text-gray-900\">{service && service.name}</h3>;
                </div>;
                <p className=\"text-gray-600 mb-4\">{service && service.description}</p>;
                <ul className=\"space-y-2 mb-6\">;
                <p className="text-gray-600 mb-4">{service && service.description}</p>;
                <ul className="space-y-2 mb-6">;
                  {service && service.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className=\"flex items-center text-sm text-gray-600\">;
                      <Check className=\"w-4 h-4 text-green-500 mr-2\" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
                <Link
                  href={service && service.href}
                  className=\"inline-flex items-center text-blue-600 hover:text-blue-700 font-medium\">;
                  Learn More;
                  <ArrowRight className=\"w-4 h-4 ml-1\" />;
                </Link>;
              </div>;
            ))}
<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
          <div className=\"text-center mt-16\">
            <h2 className=\"text-3xl font-bold text-gray-900 mb-4\">Ready to Get Started?</h2>
            <p className=\"text-lg text-gray-600 mb-8\">
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
              Contact us today to discuss your project and get a custom solution
            </p>
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
              <Link 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          </div>;
          <div className=\"text-center mt-16\">;
            <h2 className=\"text-3xl font-bold text-gray-900 mb-4\">Ready to Get Started?</h2>;
            <p className=\"text-lg text-gray-600 mb-8\">;
          <div className="text-center mt-16">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>;
            <p className="text-lg text-gray-600 mb-8">;
              Contact us today to discuss your project and get a custom solution;
            </p>;
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">;
              <Link
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                href=\"/contact\"
                className=\"bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors\"
              >
                Get Free Consultation
              </Link>
              <Link 
                href=\"/pricing\"
                className=\"border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors\"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );

<<<<<<< HEAD
  import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { Database,Brain,Check,ExternalLink,Phone,Mail,ArrowRight,Target,Zap,Shield,FileText,BarChart3,Cpu,Headphones,Calendar,Send,Layers } from 'lucide-react'; const categories = ['AI Services','IT Services','Development','Security']; export default function ServicesIndex() { const services = [ { name: 'AI & Machine Learning',description: 'Advanced AI solutions for business automation and intelligence',icon: Brai n,href: '/services/ai-machine-learning',features: ['Machine Learning Models','Natural Language Processing','Computer Vision','Predictive Analytics'] },{ name: 'Micro SaaS Solutions',description: 'Specialized software solutions for specific business needs',icon: Cp u,href: '/services/micro-saas',features: ['Custom Applications','API Integration','Scalable Infrastructure','Multi-tenant Support'] },{ name: 'AI Content Creation',description: 'Generate high-quality content at scale with AI-powered tools',icon: FileTex t,href: '/services/ai-content-creation',features: ['Blog Posts','Social Media','Email Campaigns','SEO Optimization'] },{ name: 'Email Automation',description: 'Automate email marketing campaigns with intelligent sequences',icon: Sen d,href: '/services/email-automation',features: ['Lead Nurturing','Behavioral Triggers','A/B Testing','Analytics'] },{ name: 'Customer Support Platform',description: 'AI-powered customer support with chatbots and ticketing',icon: Headphone s,href: '/services/customer-support',features: ['Live Chat','Ticket Management','Knowledge Base','Analytics'] },{ name: 'Event Management',description: 'Complete event planning and management solution',icon: Calenda r,href: '/services/event-management',features: ['Registration','Ticketing','Analytics','Mobile App'] },{ name: 'Cloud & DevOps',description: 'Scalable cloud infrastructure and deployment automation',icon: Databas e,href: '/services/cloud-devops',features: ['Cloud Migration','CI/CD Pipelines','Infrastructure as Code','Monitoring'] },{ name: 'Cybersecurity',description: 'Comprehensive security solutions for digital protection',icon: Shiel d,href: '/services/cybersecurity',features: ['Threat Detection','Vulnerability Assessment','Compliance','Incident Response'] } ]; const benefits = [ 'Reduce operational costs by 50%','Increase productivity by 70%','Improve business efficiency by 60%','Scale operations without proportional cost increase','Enhance customer experience and satisfaction','Accelerate time-to-market for new features' ]; const useCases = [ 'E-commerce & Retail','SaaS & Technology','Financial Services','Healthcare & Medical','Real Estate','Professional Services','Education & Training','Non-profit Organizations' ]; return ( <> <Head> <title>Our Services - Zion Tech Group</title> <meta name="description" content="Comprehensive technology solutions including AI,micro SaaS,cloud services,and cybersecurity. Transform your business with our innovative services." /> </Head>  import type { NextPage } from 'next'; import Link from 'next/link'; import EnhancedLayout from '../../components/layout/EnhancedLayout'; return ( <EnhancedLayout> <h1 className="text-3xl font-bold mb-4">Our Services</h1> <p className="text-gray-700 mb-6">Comprehensive solutions across software,cloud,and AI.</p> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <Link href="/services/web-application-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Web Application Development </Link> <Link href="/services/mobile-app-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Mobile App Development </Link> <Link href="/services/cloud-migration-services-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Cloud Migration </Link> <Link href="/services/ai-model-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> AI Model Development </Link> <Link href="/services/performance-optimization-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Performance Optimization </Link> <Link href="/services/security-auditing-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Security Auditing </Link> </div> </EnhancedLayout> )};
}
  import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { Database,Brain,Check,ExternalLink,Phone,Mail,ArrowRight,Target,Zap,Shield,FileText,BarChart3,Cpu,Headphones,Calendar,Send,Layers } from 'lucide-react'; const categories = ['AI Services','IT Services','Development','Security']; export default function ServicesIndex() { const services = [ { name: 'AI & Machine Learning',description: 'Advanced AI solutions for business automation and intelligence',icon: Brai n,href: '/services/ai-machine-learning',features: ['Machine Learning Models','Natural Language Processing','Computer Vision','Predictive Analytics'] },{ name: 'Micro SaaS Solutions',description: 'Specialized software solutions for specific business needs',icon: Cp u,href: '/services/micro-saas',features: ['Custom Applications','API Integration','Scalable Infrastructure','Multi-tenant Support'] },{ name: 'AI Content Creation',description: 'Generate high-quality content at scale with AI-powered tools',icon: FileTex t,href: '/services/ai-content-creation',features: ['Blog Posts','Social Media','Email Campaigns','SEO Optimization'] },{ name: 'Email Automation',description: 'Automate email marketing campaigns with intelligent sequences',icon: Sen d,href: '/services/email-automation',features: ['Lead Nurturing','Behavioral Triggers','A/B Testing','Analytics'] },{ name: 'Customer Support Platform',description: 'AI-powered customer support with chatbots and ticketing',icon: Headphone s,href: '/services/customer-support',features: ['Live Chat','Ticket Management','Knowledge Base','Analytics'] },{ name: 'Event Management',description: 'Complete event planning and management solution',icon: Calenda r,href: '/services/event-management',features: ['Registration','Ticketing','Analytics','Mobile App'] },{ name: 'Cloud & DevOps',description: 'Scalable cloud infrastructure and deployment automation',icon: Databas e,href: '/services/cloud-devops',features: ['Cloud Migration','CI/CD Pipelines','Infrastructure as Code','Monitoring'] },{ name: 'Cybersecurity',description: 'Comprehensive security solutions for digital protection',icon: Shiel d,href: '/services/cybersecurity',features: ['Threat Detection','Vulnerability Assessment','Compliance','Incident Response'] } ]; const benefits = [ 'Reduce operational costs by 50%','Increase productivity by 70%','Improve business efficiency by 60%','Scale operations without proportional cost increase','Enhance customer experience and satisfaction','Accelerate time-to-market for new features' ]; const useCases = [ 'E-commerce & Retail','SaaS & Technology','Financial Services','Healthcare & Medical','Real Estate','Professional Services','Education & Training','Non-profit Organizations' ]; return ( <> <Head> <title>Our Services - Zion Tech Group</title> <meta name="description" content="Comprehensive technology solutions including AI,micro SaaS,cloud services,and cybersecurity. Transform your business with our innovative services." /> </Head>  import type { NextPage } from 'next'; import Link from 'next/link'; import EnhancedLayout from '../../components/layout/EnhancedLayout'; return ( <EnhancedLayout> <h1 className="text-3xl font-bold mb-4">Our Services</h1> <p className="text-gray-700 mb-6">Comprehensive solutions across software,cloud,and AI.</p> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <Link href="/services/web-application-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Web Application Development </Link> <Link href="/services/mobile-app-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Mobile App Development </Link> <Link href="/services/cloud-migration-services-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Cloud Migration </Link> <Link href="/services/ai-model-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> AI Model Development </Link> <Link href="/services/performance-optimization-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Performance Optimization </Link> <Link href="/services/security-auditing-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Security Auditing </Link> </div> </EnhancedLayout> )};
  import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { Database,Brain,Check,ExternalLink,Phone,Mail,ArrowRight,Target,Zap,Shield,FileText,BarChart3,Cpu,Headphones,Calendar,Send,Layers } from 'lucide-react'; const categories = ['AI Services','IT Services','Development','Security']; export default function ServicesIndex() { const services = [ { name: 'AI & Machine Learning',description: 'Advanced AI solutions for business automation and intelligence',icon: Brai n,href: '/services/ai-machine-learning',features: ['Machine Learning Models','Natural Language Processing','Computer Vision','Predictive Analytics'] },{ name: 'Micro SaaS Solutions',description: 'Specialized software solutions for specific business needs',icon: Cp u,href: '/services/micro-saas',features: ['Custom Applications','API Integration','Scalable Infrastructure','Multi-tenant Support'] },{ name: 'AI Content Creation',description: 'Generate high-quality content at scale with AI-powered tools',icon: FileTex t,href: '/services/ai-content-creation',features: ['Blog Posts','Social Media','Email Campaigns','SEO Optimization'] },{ name: 'Email Automation',description: 'Automate email marketing campaigns with intelligent sequences',icon: Sen d,href: '/services/email-automation',features: ['Lead Nurturing','Behavioral Triggers','A/B Testing','Analytics'] },{ name: 'Customer Support Platform',description: 'AI-powered customer support with chatbots and ticketing',icon: Headphone s,href: '/services/customer-support',features: ['Live Chat','Ticket Management','Knowledge Base','Analytics'] },{ name: 'Event Management',description: 'Complete event planning and management solution',icon: Calenda r,href: '/services/event-management',features: ['Registration','Ticketing','Analytics','Mobile App'] },{ name: 'Cloud & DevOps',description: 'Scalable cloud infrastructure and deployment automation',icon: Databas e,href: '/services/cloud-devops',features: ['Cloud Migration','CI/CD Pipelines','Infrastructure as Code','Monitoring'] },{ name: 'Cybersecurity',description: 'Comprehensive security solutions for digital protection',icon: Shiel d,href: '/services/cybersecurity',features: ['Threat Detection','Vulnerability Assessment','Compliance','Incident Response'] } ]; const benefits = [ 'Reduce operational costs by 50%','Increase productivity by 70%','Improve business efficiency by 60%','Scale operations without proportional cost increase','Enhance customer experience and satisfaction','Accelerate time-to-market for new features' ]; const useCases = [ 'E-commerce & Retail','SaaS & Technology','Financial Services','Healthcare & Medical','Real Estate','Professional Services','Education & Training','Non-profit Organizations' ]; return ( <> <Head> <title>Our Services - Zion Tech Group</title> <meta name="description" content="Comprehensive technology solutions including AI,micro SaaS,cloud services,and cybersecurity. Transform your business with our innovative services." /> </Head>  import type { NextPage } from 'next'; import Link from 'next/link'; import EnhancedLayout from '../../components/layout/EnhancedLayout'; return ( <EnhancedLayout> <h1 className="text-3xl font-bold mb-4">Our Services</h1> <p className="text-gray-700 mb-6">Comprehensive solutions across software,cloud,and AI.</p> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <Link href="/services/web-application-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Web Application Development </Link> <Link href="/services/mobile-app-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Mobile App Development </Link> <Link href="/services/cloud-migration-services-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Cloud Migration </Link> <Link href="/services/ai-model-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> AI Model Development </Link> <Link href="/services/performance-optimization-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Performance Optimization </Link> <Link href="/services/security-auditing-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Security Auditing </Link> </div> </EnhancedLayout> )};
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
