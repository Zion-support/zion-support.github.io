import React from 'react';

const AIProjectManagerPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with predictive analytics and resource optimization',
      benefits: ['40% faster planning', '85% accuracy in timelines', 'Smart resource allocation']
    },
    {
      icon: Target,
      title: 'Smart Task Management',
      description: 'Automated task assignment and priority management based on AI insights',
      benefits: ['60% productivity increase', 'Real-time prioritization', 'Automated workflows']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Advanced analytics to predict project outcomes and identify potential risks',
      benefits: ['90% risk reduction', 'Data-driven decisions', 'Proactive problem solving']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced team collaboration with AI-powered communication and coordination',
      benefits: ['Seamless communication', 'Real-time updates', 'Collaborative planning']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 projects',
        'Basic AI planning',
        'Team collaboration',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 projects',
        'Advanced AI planning',
        'Full team collaboration',
        'Priority support',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited projects',
        'Premium AI features',
        'Enterprise collaboration',
        '24/7 support',
        'Custom analytics',
        'White-label options',
        'API access'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Active Teams' },
    { icon: TrendingUp, value: '40%', label: 'Productivity Increase' },
    { icon: Clock, value: '70%', label: 'Time Saved' },
    { icon: Star, value: '4.9/5', label: 'User Rating' }
  ];

const AiProjectManagerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Ai Project Manager</h1>
        <p className="text-gray-300 mb-8">Coming Soon - Advanced ai project manager solutions</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AiProjectManagerPage;
}