<<<<<<< HEAD
=======
import { Shield, Heart, MessageSquare, FileText, Star, Globe, Settings, Headphones, Share, Target, Users, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ZionAIEmailAnalyzerPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      title: 'Sentiment Analysis',
      description: 'Analyze email sentiment and emotional tone to understand customer mood and satisfaction',
      icon: <Heart className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Spam Detection',
      description: 'Advanced AI-powered spam detection with 99.9% accuracy to protect your inbox',
      icon: <Shield className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Auto Response',
      description: 'Generate intelligent email responses based on content analysis and context',
      icon: <MessageSquare className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Email Classification',
      description: 'Automatically categorize emails by type, priority, and department',
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Priority Scoring',
      description: 'AI-powered priority scoring to help you focus on the most important emails',
      icon: <Star className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Team Collaboration',
      description: 'Share insights and collaborate with team members on email analysis',
      icon: <Users className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Language Detection',
      description: 'Automatically detect email language and provide translation suggestions',
      icon: <Globe className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Attachment Analysis',
      description: 'Analyze email attachments for security threats and content relevance',
      icon: <FileText className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Email Threading',
      description: 'Intelligently group related emails into conversation threads',
      icon: <MessageSquare className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics on email patterns, response times, and engagement',
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: 'API Integration',
      description: 'Integrate with Gmail, Outlook, and other email providers',
      icon: <Settings className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Priority Support',
      description: '24/7 priority support with dedicated account manager',
      icon: <Headphones className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      originalPrice: '$299',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        '1,000 emails per month',
        'Basic sentiment analysis',
        'Email support',
        'Standard reports',
        '5GB storage'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Pro',
      price: '$299',
      originalPrice: '$599',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        '10,000 emails per month',
        'Advanced sentiment analysis',
        'Priority support',
        'Custom reports',
        '25GB storage',
        'Team collaboration',
        'API integration'
      ],
      popular: true,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Enterprise',
      price: '$599',
      originalPrice: '$1,199',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited emails',
        'Full analytics suite',
        '24/7 support',
        'Advanced reporting',
        'Unlimited storage',
        'Custom models',
        'API access',
        'Team collaboration',
        'Dedicated manager'
      ],
      popular: false,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Improve response times and customer satisfaction with intelligent email analysis',
      icon: <Headphones className="w-8 h-8" />,
      examples: ['Sentiment tracking', 'Priority routing', 'Auto responses', 'Quality monitoring']
    },
    {
      title: 'Sales Teams',
      description: 'Optimize email outreach and follow-up strategies with AI insights',
      icon: <Target className="w-8 h-8" />,
      examples: ['Lead scoring', 'Response optimization', 'Follow-up timing', 'Engagement tracking']
    },
    {
      title: 'Marketing',
      description: 'Analyze campaign performance and optimize email marketing strategies',
      icon: <BarChart3 className="w-8 h-8" />,
      examples: ['Campaign analysis', 'A/B testing', 'Engagement metrics', 'Content optimization']
    },
    {
      title: 'Legal & Compliance',
      description: 'Ensure email compliance and detect potential legal issues',
      icon: <Shield className="w-8 h-8" />,
      examples: ['Compliance monitoring', 'Risk detection', 'Audit trails', 'Legal review']
    }
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Zion AI Email Analyzer - Coming Soon | Zion Tech Group</title>
        <meta name="description" content="AI-powered email analysis and insights coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Zion AI Email Analyzer</h1>
        <p className="text-xl text-gray-300">Coming Soon</p>
      </div>
    </div>
  );
}
