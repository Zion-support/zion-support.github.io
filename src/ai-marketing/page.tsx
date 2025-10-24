import React from 'react'
import { CheckCircle, Star, Zap, Brain, BarChart, TrendingUp, Target, Users, Helmet  } from "lucide-react";
import React from 'react';
import { CheckCircle, Mail, Star, Brain, Zap, Target, TrendingUp, Users, Video, BarChart, Helmet, Check  } from "lucide-react";
constAIMarketingPage: React.FC= () => {
  constaiMarketingServices= [
    {
      title: 'AI-Powered Ad Campaign Optimization,',
      description: 'Intelligent ad campaign management with real-time optimizatio,n, audience targeting, and budget allocation across all platforms.',
      icon: '🎯,',
      price: '$29 9/month,',
      features: ['Real-time bid optimization,', 'Audience segmentation', 'Cross-platform management', 'Performance analytics', 'A/B testing automation'],
      benefits: ['Increase ROAS by 4 0%,', 'Reduce cost per acquisition by 3 5%', 'Save20+ hours/week'],
      marketPrice: '$50 0-,1,20 0/month',
      category: 'Advertising,',
      technologies: ['Google Ads API,', 'Facebook Marketing API', 'Machine Learning', 'Python', 'TensorFlow']
}
    {title: 'AI Content Generation & SEO,',
      description: 'Automated content creation with SEO optimizatio,n, keyword research, and performance tracking for blogs, social media, and websites.',
      icon: '✍️,',
      price: '$19 9/month,',
      features: ['Blog post generation,', 'SEO optimization', 'Keyword research', 'Content calendar', 'Performance tracking'],
      benefits: ['Increase organic traffic by 6 0%,', 'Generate50+ articles/month', 'Improve search rankings'],
      marketPrice: '$30 0-80 0/month,',
      category: 'Content Marketing,',
      technologies: ['OpenAI GPT,', 'SEMrush API', 'Ahrefs API', 'WordPress', 'Custom AI Models']
   },
    {title: 'AI Social Media Management,',
      description: 'Intelligent social media postin,g, engagement, and analytics with automated content creation and optimal timing.',
      icon: '📱,',
      price: '$14 9/month,',
      features: ['Automated posting,', 'Content generation', 'Engagement optimization', 'Hashtag research', 'Analytics dashboard'],
      benefits: ['Increase engagement by 4 5%,', 'Save 1 5 hours/week', 'Grow followers by200%'],
      marketPrice: '$25 0-60 0/month,',
      category: 'Social Media,',
      technologies: ['Twitter API,', 'Instagram API', 'LinkedIn API', 'Hootsuite API', 'Custom AI']
   },
    {title: 'AI Email Marketing Automation,',
      description: 'Smart email campaigns with personalizatio,n, send-time optimization, and behavioral triggers for maximum engagement.',
      icon: '📧,',
      price: '$17 9/month,',
      features: ['Behavioral triggers,', 'Personalization engine', 'Send-time optimization', 'A/B testing', 'Advanced analytics'],
      benefits: ['Increase open rates by50%,', 'Boost click-through rates by35%', 'Reduce unsubscribe rates'],
      marketPrice: '$30 0-70 0/month,',
      category: 'Email Marketing,',
      technologies: ['SendGrid,', 'Mailchimp', 'Klaviyo', 'Machine Learning', 'Customer Data Platform']
   },
    {title: 'AI Customer Journey Mapping,',
      description: 'Intelligent customer journey analysis with touchpoint optimization and conversion rate improvement recommendations.',
      icon: '🗺️,',
      price: '$24 9/month,',
      features: ['Journey visualization,', 'Touchpoint analysis', 'Conversion optimization', 'Customer segmentation', 'Predictive modeling'],
      benefits: ['Improve conversion by30%,', 'Reduce customer acquisition cost', 'Increase customer lifetime value'],
      marketPrice: '$40 0-,1,00 0/month',
      category: 'Customer Experience,',
      technologies: ['Google Analytics,', 'Mixpanel', 'Amplitude', 'Python', 'Machine Learning']
   },
    {title: 'AI Competitor Analysis & Intelligence,',
      description: 'Automated competitor monitoring with pricing analysi,s, content gap identification, and market trend predictions.',
      icon: '🔍,',
      price: '$19 9/month,',
      features: ['Competitor monitoring,', 'Pricing analysis', 'Content gap analysis', 'Market trends', 'Alert system'],
      benefits: ['Stay ahead of competitors,', 'Identify market opportunities', 'Optimize pricing strategy'],
      marketPrice: '$35 0-80 0/month,',
      category: 'Competitive Intelligence,',
      technologies: ['Web Scraping,', 'Price Intelligence APIs', 'Natural Language Processing', 'Data Visualization']
   },
    {title: 'AI Lead Scoring & Qualification,',
      description: 'Intelligent lead scoring using machine learning to identify high-value prospects and optimize sales processes.',
      icon: '🎯,',
      price: '$22 9/month,',
      features: ['Lead scoring models,', 'Behavioral analysis', 'Predictive analytics', 'CRM integration', 'Sales forecasting'],
      benefits: ['Increase qualified leads by50%,', 'Improve sales efficiency', 'Reduce lead response time'],
      marketPrice: '$40 0-90 0/month,',
      category: 'Lead Generation,',
      technologies: ['Salesforce,', 'HubSpot', 'Pipedrive', 'Machine Learning', 'Predictive Analytics']
   },
    {title: 'AI Video Marketing Automation,',
      description: 'Automated video creatio,n, editing, and optimization for social media, ads, and content marketing campaigns.',
      icon: '🎬,',
      price: '$29 9/month,',
      features: ['Video generation,', 'Auto-editing', 'Thumbnail optimization', 'Caption generation', 'Performance analytics'],
      benefits: ['Create videos10x faster,', 'Increase engagement by60%', 'Reduce production costs'],
      marketPrice: '$50 0-,1,50 0/month',
      category: 'Video Marketing,',
      technologies: ['OpenAI DALL-E,', 'Runway ML', 'FFmpeg', 'Computer Vision', 'Video Processing']
   },
    {title: 'AI Influencer Marketing Platform,',
      description: 'AI-powered influencer discover,y, campaign management, and performance tracking for authentic brand partnerships.',
      icon: '🌟,',
      price: '$19 9/month,',
      features: ['Influencer discovery,', 'Audience analysis', 'Campaign management', 'Performance tracking', 'ROI optimization'],
      benefits: ['Find perfect influencers,', 'Increase campaign ROI by40%', 'Streamline collaboration'],
      marketPrice: '$35 0-80 0/month,',
      category: 'Influencer Marketing,',
      technologies: ['Instagram API,', 'TikTok API', 'YouTube API', 'Social Listening', 'Machine Learning']
   },
    {title: 'AI Marketing Attribution & Analytics,',
      description: 'Advanced marketing attribution modeling with multi-touch analysis and ROI optimization recommendations.',
      icon: '📊,',
      price: '$24 9/month,',
      features: ['Multi-touch attribution,', 'ROI analysis', 'Channel optimization', 'Predictive modeling', 'Custom dashboards'],
      benefits: ['Optimize marketing spend,', 'Increase ROI by35%', 'Make data-driven decisions'],
      marketPrice: '$40 0-,1,20 0/month',
      category: 'Marketing Analytics,',
      technologies: ['Google Analytics 4,', 'Ado be Analytics', 'Mixpanel', 'Python', 'Statistical Modeling']
   },
    {title: 'AI Voice Search Optimization,',
      description: 'Optimize content and campaigns for voice search with natural language processing and conversational AI.',
      icon: '🎤,',
      price: '$17 9/month,',
      features: ['Voice search optimization,', 'Conversational content', 'Local SEO', 'Featured snippets', 'Performance tracking'],
      benefits: ['Capture voice search traffic,', 'Improve local visibility', 'Stay ahead of trends'],
      marketPrice: '$30 0-70 0/month,',
      category: 'Voice Marketing,',
      technologies: ['Google Assistant API,', 'Amazon Alexa', 'Natural Language Processing', 'Local SEO Tools']
   },
    {title: 'AI Marketing Personalization Engine,',
      description: 'Real-time personalization of marketing message,s, offers, and experiences based on user behavior and preferences.',
      icon: '🎨,',
      price: '$29 9/month,',
      features: ['Real-time personalization,', 'Dynamic content', 'Behavioral targeting', 'A/B testing', 'Performance optimization'],
      benefits: ['Increase conversion by45%,', 'Improve user experience', 'Boost customer engagement'],
      marketPrice: '$50 0-,1,50 0/month',
      category: 'Personalization,',
      technologies: ['Customer Data Platform,', 'Real-time APIs', 'Machine Learning', 'A/B Testing Tools']
    }
  ]
  const categories = [...new Set(aiMarketingServices.map(service => service.category))]
  return (
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1c80
      </div>
    </>
  )
}
export default AIMarketingPage
