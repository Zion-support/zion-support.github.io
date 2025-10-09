import React from 'react';
import {Share2, TrendingUp, Users, Calendar, BarChart, CheckCircle, ArrowRight, Star, MessageSquare} from 'lucide-react';
const AISocialMediaManagerPage: React.FC = () => {
  const features = [
    {
  // TODO: Add content
}
      icon: Share2,
      title: 'AI Content Creation',
      description: 'Automatically generate engaging posts, captions, and hashtags for all platforms'
    },
icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Real-time trend monitoring and content suggestions based on viral topics'
      icon: Users,
      title: 'Audience Insights',
      description: 'Deep analytics on your audience behavior and engagement patterns'
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-optimized posting times for maximum engagement across all platforms'
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive reporting with actionable insights and ROI tracking'
      icon: MessageSquare,
      title: 'Auto-Responses',
      description: 'Intelligent chatbot responses and comment management'
    }
  ];
  const benefits = [
'Increase engagement by 300%',
    'Save 20+ hours per week',
    'Grow followers by 150%',
    'Boost brand awareness by 200%',
    'Improve content performance by 250%'
  const platforms = [
    { name: 'Facebook', icon: '📘', color: 'text-blue-500' },
    { name: 'Instagram', icon: '📷', color: 'text-pink-500' },
    { name: 'Twitter', icon: '🐦', color: 'text-blue-400' },
    { name: 'LinkedIn', icon: '💼', color: 'text-blue-600' },
    { name: 'TikTok', icon: '🎵', color: 'text-black' },
    { name: 'YouTube', icon: '📺', color: 'text-red-500' }
  const pricing = [
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
  // TODO: Add items,
]
//         '3 social media accounts',
//         '50 posts per month',
//         'Basic AI content generation',
//         'Standard analytics',
//         'Email support'
//       ],
      popular: false
      name: 'Professional',
      price: '$79',
      description: 'Ideal for growing brands',
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                    : 'border-2 border-slate-600 text-white hover:border-pink-400 hover:text-pink-400'
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
Ready to Get Started?
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of brands already using AI Social Media Manager to grow their presence
              Contact Sales
  );
};
export default AISocialMediaManagerPage;