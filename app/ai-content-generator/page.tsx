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
export default function AIContentGenerator() {
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
export default function AIContentGeneratorPage() {

  const features = [
    {
      icon: <Brain className="w-5h-5ml-2" />,
      title: 'AI-Powered Writing',
      description: 'Advanced GPT-4 and Claude-3 powered content generation with 99.9% accuracy and human-like quality.',
      benefits: ['Natural language processing', 'Context-aware generation', 'Multi-language support', 'Brand voice adaptation']
    },
    {
      icon: <FileText className="w-5h-5ml-2" />,
      title: 'Content Templates',
      description: '500+ professionally designed templates for blogs, social media, emails, ads, and more.',
      benefits: ['Industry-specific templates', 'Customizable layouts', 'SEO-optimized structure', 'Mobile-responsive design']
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools with keyword research, density analysis, and readability scoring.',
      benefits: ['Keyword optimization', 'Meta tag generation', 'Readability analysis', 'Competitor analysis']
    },
    {
      icon: <Palette className="w-5h-5ml-2" />,
      title: 'Brand Voice Training',
      description: 'Train AI to match your unique brand voice and tone across all content types.',
      benefits: ['Voice consistency', 'Tone adaptation', 'Style guidelines', 'Brand personality']
    },
    {
      icon: <Globe className="w-5h-5ml-2" />,
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with native-level quality and cultural adaptation.',
      benefits: ['50+ languages', 'Cultural adaptation', 'Local SEO optimization', 'Regional preferences']
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Plagiarism Detection',
      description: 'Built-in plagiarism checker with 99.8% accuracy and originality scoring.',
      benefits: ['Real-time checking', 'Originality reports', 'Citation suggestions', 'Copyright compliance']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        '10,000 words/month',
        '50+ content templates',
        'Basic SEO tools',
        '5 brand voices',
        '3 languages',
        'Email support',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '100,000 words/month',
        '500+ content templates',
        'Advanced SEO suite',
        'Unlimited brand voices',
        '20 languages',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'API access',
        'Custom templates'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited words',
        'All templates + custom',
        'Full SEO suite + AI insights',
        'Unlimited everything',
        'All 50+ languages',
        '24/7 dedicated support',
        'Enterprise analytics',
        'Advanced team features',
        'Full API access',
        'White-label options',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Marketing Manager',
      company: 'TechFlow Inc.',
      content: 'Zion's AI Content Generator has revolutionized our content strategy. We've increased our content output by 300% while maintaining quality.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'StartupHub',
      content: 'The brand voice training feature is incredible. Our content now sounds exactly like our brand, saving us hours of editing.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'SEO Specialist',
      company: 'Digital Marketing Pro',
      content: 'The SEO optimization tools are game-changing. Our content ranks 40% higher since using this platform.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  const useCases = [
    {
      title: 'Blog Content',
      description: 'Generate engaging blog posts with SEO optimization and brand voice consistency.',
      icon: <FileText className="w-5h-5ml-2" />,
      examples: ['How-to guides', 'Industry insights', 'Product reviews', 'Thought leadership']
    },
    {
      title: 'Social Media',
      description: 'Create compelling social media posts for all platforms with optimal engagement.',
      icon: <Share className="w-5h-5ml-2" />,
      examples: ['Facebook posts', 'Twitter threads', 'LinkedIn articles', 'Instagram captions']
    },
    {
      title: 'Email Marketing',
      description: 'Generate personalized email campaigns that convert and engage your audience.',
      icon: <Mail className="w-5h-5ml-2" />,
      examples: ['Newsletters', 'Promotional emails', 'Welcome sequences', 'Follow-up campaigns']
    },
    {
      title: 'Ad Copy',
      description: 'Create high-converting ad copy for Google, Facebook, and other advertising platforms.',
      icon: <Target className="w-5h-5ml-2" />,
      examples: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Display banners']
    }
  ]

>>>>>>> origin/main
  return (
<<<<<<< HEAD

        <>
      <title>AI Content Generator - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">AI Content Generator</h1>
            <p className="text-lg text-gray-300 mb-8">Professional AI content generator services coming soon.</p>
            
              Contact Us

<<<<<<< HEAD
  );
=======
export default function AIContentGeneratorPage() {
  return (
    <>
      <Helmet>
        <title>A I Content Generator - Zion Tech Group</title>
        <meta name="description" content="Professional a i content generator by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">A I Content Generator</h1>
          <p className="text-lg text-gray-300 mb-8">Professional a i content generator coming soon.</p>
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
      </>
=======
    <></>
      <Helmet></Helmet>
        <title />AI Content Generator - Advanced AI Writing Assistant | Zion Tech Group</title>
        <meta name="description" content="Transform your content creation with our AI Content Generator. Generate high-quality, SEO-optimized content in 50+ languages. Starting at $29/month. Free trial available." /></meta>
        <meta name="keywords" content="AI content generator, content writing, SEO content, blog writing, social media content, email marketing, content automation, AI writing assistant" /></meta>
        <meta name="robots" content="index, follow" /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/ai-content-generator"  /></link>
=======

export default function AiContentGeneratorPage() {
  return (
    <>
      <Helmet>
        <title>AiContentGenerator - Zion Tech Group</title>
        <meta name="description" content="Professional ai content generator solutions and services." />
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiContentGenerator</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai content generator solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
<<<<<<< HEAD
    </>  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
>>>>>>> origin/main
=======
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
