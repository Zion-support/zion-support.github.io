
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart3, Users, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Star, Shield, Play, Heart, Calendar, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
export default AICustomerInsightsPage
const AICustomerInsightsPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-5h-5ml-2" />,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze customer behavior patterns and predict future trends with 95% accuracy.',
      price: '$299/month',
      benefits: ['Real-time insights', 'Predictive analytics', 'Behavioral analysis', 'Trend forecasting']
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior, preferences, and value with dynamic clustering algorithms.',
      price: '$199/month',
      benefits: ['Dynamic segmentation', 'Behavioral clustering', 'Value-based grouping', 'Custom criteria']
    },
    {
      icon: <Users className="w-5h-5ml-2" />,
      title: 'Customer Journey Mapping',
      description: 'Visualize complete customer journeys across all touchpoints with interactive journey maps and conversion funnels.',
      price: '$249/month',
      benefits: ['Journey visualization', 'Touchpoint analysis', 'Conversion tracking', 'Optimization insights']
    },
    {
      icon: <TrendingUp className="w-5h-5ml-2" />,
      title: 'Churn Prediction',
      description: 'Predict customer churn with 92% accuracy using advanced ML models and proactive retention strategies.',
      price: '$179/month',
      benefits: ['Churn prediction', 'Risk scoring', 'Retention strategies', 'Early warning alerts']
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: 'Personalization Engine',
      description: 'Create hyper-personalized experiences with AI-driven content recommendations and dynamic pricing.',
      price: '$399/month',
      benefits: ['Content personalization', 'Dynamic pricing', 'Recommendation engine', 'A/B testing']
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Real-time Insights',
      description: 'Get instant customer insights with real-time data processing and live dashboard updates.',
      price: '$149/month',
      benefits: ['Live dashboards', 'Real-time alerts', 'Instant notifications', 'Live data streams']
    }
  ]

  const useCases = [
    {
      title: 'E-commerce Personalization',
      description: 'Increase conversion rates by 35% with personalized product recommendations and dynamic pricing.',
      metrics: ['35% conversion increase', '28% higher AOV', '42% repeat purchases'],
      icon: <ShoppingCart className="w-5h-5ml-2" /&gt;</ShoppingCart&gt
    },
    {
      title: 'SaaS Customer Success',
      description: 'Reduce churn by 50% with predictive analytics and proactive customer success management.',
      metrics: ['50% churn reduction', '60% faster onboarding', '45% feature adoption'],
      icon: <Monitor className="w-5h-5ml-2" /></Monitor&gt
    },
    {
      title: 'Financial Services',
      description: 'Improve risk assessment and fraud detection with advanced customer behavior analysis.',
      metrics: ['85% fraud detection', '30% risk reduction', '25% faster approvals'],
      icon: <Shield className="w-5h-5ml-2"></Shield&gt
    },
    {
      title: 'Healthcare Analytics',
      description: 'Enhance patient engagement and treatment outcomes with personalized healthcare insights.',
      metrics: ['40% engagement increase', '25% better outcomes', '35% cost reduction'],
      icon: <Heart className="w-5h-5ml-2" /></Heart&gt
    }
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with customer insights',
      features: [
        'Up to 10,000 customers',
        'Basic analytics dashboard',
        'Email support',
        'Standard integrations',
        'Monthly reports',
        'Basic segmentation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Advanced features for growing businesses with complex customer data',
      features: [
        'Up to 100,000 customers',
        'Advanced AI analytics',
        'Priority support',
        'Custom integrations',
        'Real-time dashboards',
        'Advanced segmentation',
        'Churn prediction',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'Complete solution for large enterprises with unlimited customers',
      features: [
        'Unlimited customers',
        'Full AI suite',
        '24/7 dedicated support',
        'White-label solution',
        'Custom development',
        'Advanced security',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechFlow Inc.',
      role: 'VP of Marketing',
      content: 'AI Customer Insights transformed our understanding of customer behavior. We increased retention by 40% in just 3 months.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      company: 'DataDriven Solutions',
      role: 'Head of Analytics',
      content: 'The predictive analytics are incredibly accurate. We can now prevent churn before it happens and optimize our customer journey.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Johnson',
      company: 'GrowthCorp',
      role: 'Customer Success Director',
      content: 'The personalization engine has revolutionized our customer experience. Our NPS score increased by 25 points.',
      rating: 5,
      avatar: 'EJ'
    }
  ]

  return (

        <>
      <title>AiCustomerInsights - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">AiCustomerInsights</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aicustomerinsights services coming soon.</p>
            
              Contact Us

      </>
  )
}

