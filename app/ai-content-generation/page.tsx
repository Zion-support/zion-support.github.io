import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight } from 'lucide-react';

const AIContentGenerationPage: React.FC = () => {
  const contentServices = [
    {
      title: 'AI Blog Content Generator Pro',
      description: 'Advanced AI-powered blog content creation with SEO optimization, research integration, and brand voice consistency.',
      icon: '✍️',
      price: '$199/month',
      features: [
        'SEO-optimized content generation',
        'Research integration',
        'Brand voice consistency',
        'Multi-language support',
        'Content calendar automation',
        'Performance analytics'
      ],
      benefits: [
        'Create 10x more content',
        'Improve SEO rankings by 150%',
        'Save 40+ hours per week',
        'Increase organic traffic by 200%'
      ],
      marketPrice: '$500-1000/month',
      technologies: ['OpenAI GPT-4', 'Claude', 'Custom Fine-tuned Models', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Social Media Content Suite',
      description: 'Comprehensive social media content creation with platform-specific optimization, hashtag research, and engagement prediction.',
      icon: '📱',
      price: '$149/month',
      features: [
        'Platform-specific optimization',
        'Hashtag research automation',
        'Engagement prediction',
        'Visual content generation',
        'Posting schedule optimization',
        'Viral content analysis'
      ],
      benefits: [
        'Increase engagement by 300%',
        'Grow followers organically',
        'Save 25+ hours per week',
        'Improve brand awareness'
      ],
      marketPrice: '$300-600/month',
      technologies: ['OpenAI GPT-4', 'DALL-E', 'Instagram API', 'Twitter API', 'LinkedIn API'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
=======
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Users, Clock, Shield } from 'lucide-react';

const AIContentGenerationPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality blog posts, articles, social media content, and marketing copy in seconds using advanced AI models.',
      benefits: ['10x faster content creation', 'SEO-optimized content', 'Multiple content formats', 'Brand voice consistency']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-Language Support',
      description: 'Create content in 50+ languages with native-level quality and cultural adaptation.',
      benefits: ['Global reach', 'Cultural sensitivity', 'Local market adaptation', 'Translation accuracy']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Real-Time Collaboration',
      description: 'Work with your team in real-time, with version control and collaborative editing features.',
      benefits: ['Team collaboration', 'Version control', 'Comment system', 'Approval workflows']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with GDPR, CCPA, and SOC 2.',
      benefits: ['Data encryption', 'Compliance ready', 'Access controls', 'Audit trails']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and content creators',
      features: [
        '10,000 words/month',
        '5 content templates',
        'Basic AI models',
        'Email support',
        'Standard quality'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        '50,000 words/month',
        '20 content templates',
        'Advanced AI models',
        'Priority support',
        'High quality output',
        'Team collaboration (5 users)',
        'Brand voice training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited words',
        'All content templates',
        'Premium AI models',
        '24/7 phone support',
        'Highest quality',
        'Unlimited team members',
        'Custom integrations',
        'API access',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Marketing Manager',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group\'s AI content generation has revolutionized our content strategy. We\'ve increased our content output by 500% while maintaining quality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'The ROI is incredible. We\'re saving $15,000/month on content creation while producing better quality content than our previous agency.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GlobalBrand',
      content: 'The multi-language support is game-changing. We can now create localized content for all our markets without hiring translators.',
      rating: 5
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d197
    }
  ];

  return (
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
