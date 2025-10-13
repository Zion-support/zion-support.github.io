import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';

  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  TrendingUp, 
  Database, 
  Cpu, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe,
  Mail,
  Smartphone,
  Monitor  } from 'lucide-react';
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [    {
      title: 'Zion Analytics Pro',
      description: 'Advanced analytics dashboard with real-time insights and customizable reports.',
      icon: <BarChart3 className="w-8 h-8" />,
      path: '/zion-analytics-pro',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'API integration'],
      price: '$299/month',
      featured: true;
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive security monitoring and threat detection for your applications.',
      icon: <Shield className="w-8 h-8" />,
      path: '/zion-security-shield',
      features: ['Threat detection', 'Security monitoring', 'Incident response', 'Compliance reporting'],
      price: '$199/month',
      featured: true;
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with advanced encryption and backup features.',
      icon: <Cloud className="w-8 h-8" />,
      path: '/zion-cloud-vault',
      features: ['End-to-end encryption', 'Automated backups', 'File sharing', 'Version control'],
      price: '$99/month',
      featured: false;
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for marketing teams.',
      icon: <Sparkles className="w-8 h-8" />,
      path: '/zion-content-studio',
      features: ['AI content generation', 'Content calendar', 'Team collaboration', 'Multi-platform publishing'],
      price: '$149/month',
      featured: false;
    },
    {
      title: 'Zion AI CRM Pro',
      description: 'Intelligent customer relationship management with AI-powered automation.',
      icon: <Users className="w-8 h-8" />,
      path: '/zion-ai-crm-pro',
      features: ['AI lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Customer segmentation'],
      price: '$229/month',
      featured: true;
    },
    {
      title: 'Zion AI Marketing Automation Pro',
      description: 'Complete marketing automation platform with AI-driven campaign optimization.',
      icon: <TrendingUp className="w-8 h-8" />,
      path: '/zion-ai-marketing-automation-pro',
      features: ['Email automation', 'Social media scheduling', 'Lead nurturing', 'A/B testing'],
      price: '$199/month',
      featured: false;
    },
    {
      title: 'Zion AI Project Manager Pro',
      description: 'Smart project management tool with AI-powered resource allocation and timeline optimization.',
      icon: <Award className="w-8 h-8" />,
      path: '/zion-ai-project-manager-pro',
      features: ['AI task prioritization', 'Resource optimization', 'Timeline forecasting', 'Team collaboration'],
      price: '$159/month',
      featured: false;
    },
    {
      title: 'Zion AI Data Analytics Pro',
      description: 'Advanced data analytics platform with machine learning insights and predictive modeling.',
      icon: <Database className="w-8 h-8" />,
      path: '/zion-ai-data-analytics-pro',
      features: ['ML insights', 'Predictive modeling', 'Data visualization', 'Custom dashboards'],
      price: '$279/month',
      featured: true;
    },
    {
      title: 'Zion AI Code Assistant Pro',
      description: 'Intelligent code generation and review tool with support for multiple programming languages.',
      icon: <Cpu className="w-8 h-8" />,
      path: '/zion-ai-code-assistant-pro',
      features: ['Code generation', 'Bug detection', 'Performance optimization', 'Documentation'],
      price: '$129/month',
      featured: false;
    }
  ];

  const stats = [
    { label: "Active Users", value: "10,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Uptime", value: "99.9%", icon: <Shield className="w-6 h-6" /> },
    { label: "Customer Satisfaction", value: "98%", icon: <Star className="w-6 h-6" /> },
    { label: "Data Security", value: "100%", icon: <Cloud className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data insights. We've seen a 300% improvement in decision-making speed.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Security Shield gives us peace of mind. Our security incidents dropped by 95% since implementation.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio",
      role: "Project Manager",
      content: "Zion AI Project Manager Pro has streamlined our workflow. We're completing projects 40% faster now.",
      rating: 5,
      avatar: "ER"
    }
  ];

export default function MicroSaasPage() {
  return (
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Mic } from 'lucide-react';

export default function MicroSaasZionTechGroup() {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Professional micro SaaS services for modern business solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Micro SaaS Services
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional micro SaaS services for modern business solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Micro Saas - Zion Tech Group</title>
        <meta name="description" content="Micro Saas solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Micro Saas</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive micro saas solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

}}
