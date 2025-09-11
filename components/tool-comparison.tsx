<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';
import Head from 'next/head';


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react',
import Head from 'next/head',
import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

import {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Search
  Filter
  TrendingUp
  DollarSign
  Users
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
import React from 'react';

  Search;
  Filter, ;
  TrendingUp, ;
  DollarSign, ;
  Users, ;
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Star
  Check
  X
  ArrowRight
  ExternalLink
  Zap
  Brain
  Globe
  Rocket;} from 'lucide-react';import {
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Search,
  Filter,
  TrendingUp,
  DollarSign,
  Users,
  Star,
  Check,
  X,
  ArrowRight,
  ExternalLink,
  Zap,
  Brain,
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



  Search;
  Filter,
  TrendingUp,
  DollarSign,
  Users,
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Globe,
  Rocket,;} from 'lucide-react';import { 
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Globe,;
  Rocket,;} from 'lucide-react';import { ;
  Search;
  Filter
  TrendingUp
  DollarSign
  Users

  Star;
  Check;
  X;
  ArrowRight;
  ExternalLink;
  Zap;
  Brain;
  Globe;


<<<<<<< HEAD
<<<<<<< HEAD
  Rocket
=======

export default function ToolComparisonPage() {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export default function ToolComparisonPage() {;

=======

export default function ToolComparisonPage() {
=======

export default function ToolComparisonPage() {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('rating');
  const allTools = [
    // AI Tools
  Rocket;
export default /**
 * ToolComparisonPage - Function description
 */
function ToolComparisonPage() {
  const [search_term, setSearchTerm] = React.useState ('');
  const [selected_category, setSelectedCategory] = React.useState ('All');
  const [sort_by, setSortBy] = React.useState ('rating');
;
  const all_tools = [;
    // AI Tools;
    {
<<<<<<< HEAD
<<<<<<< HEAD
      name: 'ChatGPT',
      category: 'AI Assistant',
      pricing: 'Free - $20 / month',
      rating: 4.8,
      users: '100M+',
      best_for: 'Content creators, developers, researchers',
      pros: [;
        'Powerful capabilities',
        'Easy to use',
        'Regular updates',
        'Good free tier',
      ],
      cons: ['Sometimes inaccurate', 'Limited context', 'Privacy concerns'],
      website: 'https://chat.openai.com',
      icon: <Brain className='w - 6 h - 6' />,
      color: 'text - green - 400',
    },    {      best_for: 'Content creators, developers, researchers';
      pros: ['Powerful capabilities_easy to use_regular updates_good free tier'],
      cons: ['Sometimes inaccurate_limited context_privacy concerns'],
      website: 'https://chat.openai.com',
      icon: <Brain className="w - 6 h - 6" />,
      color: 'text - green - 400';
    }
    {
      name: 'Midjourney',
      category: 'AI Art',
      pricing: '$10 - $30 / month',
      rating: 4.7,
      users: '1M+',
      best_for: 'Designers, marketers, content creators',
      pros: [;
        'High - quality output',
        'Creative control',
        'Commercial rights',
        'Active community',
      ],
      cons: [;
        'Discord - only interface',
        'Limited customization',
        'Monthly subscription',
      ],
      website: 'https://midjourney.com',
      icon: <Zap className='w - 6 h - 6' />,
      color: 'text - purple - 400',
    },    {      best_for: 'Designers, marketers, content creators';
      pros: ['High - quality output_creative control_commercial rights_active community'],
      cons: ['Discord - only interface_limited customization_monthly subscription'],
      website: 'https://midjourney.com',
      icon: <Zap className="w - 6 h - 6" />,
      color: 'text - purple - 400';
    }
    {
      name: 'Jasper',
      category: 'AI Writing',
      pricing: '$39 - $125 / month',
      rating: 4.6,
      users: '100K+',
      best_for: 'Marketing teams, content creators, businesses',
      pros: [;


export default function ToolComparisonPage() {
export default function ToolComparisonPage() {;
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('rating');

  const allTools = [
    // AI Tools
    {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      name: 'ChatGPT'
      category: 'AI Assistant'
      pricing: 'Free - $20/month'
      rating: 4.8
      users: '100M+'
      bestFor: 'Content creators, developers, researchers'
      pros: [
        'Powerful capabilities'
        'Easy to use'
        'Regular updates'
        'Good free tier'
      ]
      cons: ['Sometimes inaccurate', 'Limited context', 'Privacy concerns']
      website: 'https://chat.openai.com'
      icon: <Brain className='w-6 h-6' />
      color: 'text-green-400'
    },    {      bestFor: 'Content creators, developers, researchers';
      pros: ['Powerful capabilitiesEasy to useRegular updatesGood free tier']
      cons: ['Sometimes inaccurateLimited contextPrivacy concerns']
      website: 'https://chat.openai.com'
      icon: <Brain className="w-6 h-6" />
      color: 'text-green-400'
    }
    {
      name: 'Midjourney'
      category: 'AI Art'
      pricing: '$10 - $30/month'
      rating: 4.7
      users: '1M+'
      bestFor: 'Designers, marketers, content creators'
      pros: [
        'High-quality output'
        'Creative control'
        'Commercial rights'
        'Active community'
      ]
      cons: [
        'Discord-only interface'
        'Limited customization'
        'Monthly subscription'
      ]
      website: 'https://midjourney.com'
      icon: <Zap className='w-6 h-6' />
      color: 'text-purple-400'
    },    {      bestFor: 'Designers, marketers, content creators';
      pros: ['High-quality outputCreative controlCommercial rightsActive community']
      cons: ['Discord-only interfaceLimited customizationMonthly subscription']
      website: 'https://midjourney.com'
      icon: <Zap className="w-6 h-6" />
      color: 'text-purple-400'
    }
    {
      name: 'Jasper'
      category: 'AI Writing'
      pricing: '$39 - $125/month'
      rating: 4.6
      users: '100K+'
      bestFor: 'Marketing teams, content creators, businesses'
      pros: [
<<<<<<< HEAD
  Rocket;
export default /**
 * ToolComparisonPage - Function description
 */
function ToolComparisonPage() {
  const [search_term, setSearchTerm] = React.useState ('');
  const [selected_category, setSelectedCategory] = React.useState ('All');
  const [sort_by, setSortBy] = React.useState ('rating');
;
  const all_tools = [;
    // AI Tools;
    {


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        'Specialized for marketing'
        'Brand voice training'
        'SEO optimization'
        'Team features'
      ]
      cons: ['Expensive', 'Limited free trial', 'Can be repetitive']
      website: 'https://jasper.ai'
      icon: <Brain className='w-6 h-6' />
      color: 'text-blue-400'
    },    // SaaS Tools      bestFor: 'Marketing teams, content creators, businesses';
      pros: ['Specialized for marketingBrand voice trainingSEO optimizationTeam features']
      cons: ['ExpensiveLimited free trialCan be repetitive']
      website: 'https://jasper.ai'
      icon: <Brain className="w-6 h-6" />
      color: 'text-blue-400'
    }
<<<<<<< HEAD
=======


        'Specialized for marketing',
        'Brand voice training',
        'SEO optimization',
        'Team features',
      ],
      cons: ['Expensive', 'Limited free trial', 'Can be repetitive'],
      website: 'https://jasper.ai',
      icon: <Brain className='w-6 h-6' />,
      color: 'text-blue-400',
    },    // SaaS Tools

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // SaaS Tools
    {
<<<<<<< HEAD
=======
    // SaaS Tools
    {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      name: 'Zapier'
      category: 'Automation'
      pricing: 'Free - $19.99/month'
      rating: 4.8
      users: '2M+'
      bestFor: 'Businesses looking to automate workflows'
        'Specialized for marketing',
        'Brand voice training',
        'SEO optimization',
        'Team features',
      ],
      cons: ['Expensive', 'Limited free trial', 'Can be repetitive'],
      website: 'https://jasper.ai',
      icon: <Brain className='w-6 h-6' />,
      color: 'text-blue-400',
    },    // SaaS Tools

    // SaaS Tools

    {
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      name: 'Zapier',
      category: 'Automation',
      pricing: 'Free - $19.99/month',
      rating: 4.8,
      users: '2M+',
      bestFor: 'Businesses looking to automate workflows',
      pros: [
        'Easy to use',
        'Extensive integrations',
        'Reliable',
        'Great support',
      ],
      cons: ['Can get expensive', 'Limited customization'],
      website: 'https://zapier.com',
      icon: <Zap className='w-6 h-6' />,
      color: 'text-orange-400',
    },    {

    {

      name: 'Notion',
      category: 'Productivity',
      pricing: 'Free - $8/month',
      rating: 4.7,
      users: '20M+',
      bestFor: 'Teams that need flexible workspace',
      pros: [
        'Highly flexible',
        'Beautiful interface',
        'Great templates',
        'Free tier',
      ],
      cons: ['Learning curve', 'Limited offline access', 'Can be overwhelming'],
      website: 'https://notion.so',
      icon: <Globe className='w-6 h-6' />,
      color: 'text-gray-400',
    },    {

    {

      name: 'Stripe',
      category: 'Payments',
      pricing: '2.9% + 30¢ per transaction',
      rating: 4.9,
      users: '1M+',
      bestFor: 'Online businesses, SaaS companies, e-commerce',
      pros: [
        'Developer-friendly',
        'Global reach',
        'Excellent docs',
        'Reliable',
      ],
      cons: [
        'Higher fees than some alternatives',
        'Complex for beginners',
        'Strict requirements',
      ],
      website: 'https://stripe.com',
      icon: <DollarSign className='w-6 h-6' />,
      color: 'text-blue-400',
    },    // Startup Tools

    // Startup Tools

    {
      name: 'HubSpot',
      category: 'Marketing & Sales',
      pricing: 'Free - $45/month',
      rating: 4.7,
      users: '135K+',
      bestFor: 'B2B startups, SaaS companies, marketing teams',
      pros: [
        'Free tier',
        'All-in-one solution',
        'Great for beginners',
        'Excellent support',
      ],
      cons: [
        'Can get expensive',
        'Complex for small teams',
        'Limited customization',
      ],
      website: 'https://hubspot.com',
      icon: <TrendingUp className='w-6 h-6' />,
      color: 'text-orange-400',
    },    {

    {

      name: 'Mailchimp',
      category: 'Email Marketing',
      pricing: 'Free - $59/month',
      rating: 4.5,
      users: '12M+',
      bestFor: 'E-commerce, content creators, small businesses',
      pros: ['Free tier', 'Easy to use', 'Good templates', 'Affordable'],
      cons: ['Limited free features', 'Basic automation', 'Can be expensive'],
      website: 'https://mailchimp.com',
      icon: <Users className='w-6 h-6' />,
      color: 'text-yellow-400',
    },    {

    {

      name: 'Calendly',
      category: 'Productivity',
      pricing: 'Free - $12/month',
      rating: 4.8,
      users: '10M+',
      bestFor: 'Sales teams, consultants, remote teams',
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      pros: [
        'Easy to use'
        'Extensive integrations'
        'Reliable'
        'Great support'
      ]
      cons: ['Can get expensive', 'Limited customization']
      website: 'https://zapier.com'
      icon: <Zap className='w-6 h-6' />
      color: 'text-orange-400'
    },    {      pros: ['Easy to useExtensive integrationsReliableGreat support']
      cons: ['Can get expensiveLimited customization']
      website: 'https://zapier.com'
      icon: <Zap className="w-6 h-6" />
      color: 'text-orange-400'
    }
      name: 'Notion'
      category: 'Productivity'
      pricing: 'Free - $8/month'
      rating: 4.7
      users: '20M+'
      bestFor: 'Teams that need flexible workspace'
      pros: [
        'Highly flexible'
        'Beautiful interface'
        'Great templates'
        'Free tier'
      ]
      cons: ['Learning curve', 'Limited offline access', 'Can be overwhelming']
      website: 'https://notion.so'
      icon: <Globe className='w-6 h-6' />
      color: 'text-gray-400'
    },    {      pros: ['Highly flexibleBeautiful interfaceGreat templatesFree tier']
      cons: ['Learning curveLimited offline accessCan be overwhelming']
      website: 'https://notion.so'
      icon: <Globe className="w-6 h-6" />
      color: 'text-gray-400'
    }
      name: 'Stripe'
      category: 'Payments'
      pricing: '2.9% + 30¢ per transaction'
      rating: 4.9
      users: '1M+'
      bestFor: 'Online businesses, SaaS companies, e-commerce'
      pros: [
        'Developer-friendly'
        'Global reach'
        'Excellent docs'
        'Reliable'
      ]
      cons: [
        'Higher fees than some alternatives'
        'Complex for beginners'
        'Strict requirements'
      ]
      website: 'https://stripe.com'
      icon: <DollarSign className='w-6 h-6' />
      color: 'text-blue-400'
    },    // Startup Tools      bestFor: 'Online businesses, SaaS companies, e-commerce';
      pros: ['Developer-friendlyGlobal reachExcellent docsReliable']
      cons: ['Higher fees than some alternativesComplex for beginnersStrict requirements']
      website: 'https://stripe.com'
      icon: <DollarSign className="w-6 h-6" />
      color: 'text-blue-400'
    }
    // Startup Tools
    {
      name: 'HubSpot'
      category: 'Marketing & Sales'
      pricing: 'Free - $45/month'
      rating: 4.7
      users: '135K+'
      bestFor: 'B2B startups, SaaS companies, marketing teams'
      pros: [
        'Free tier'
        'All-in-one solution'
        'Great for beginners'
        'Excellent support'
      ]
      cons: [
        'Can get expensive'
        'Complex for small teams'
        'Limited customization'
      ]
      website: 'https://hubspot.com'
      icon: <TrendingUp className='w-6 h-6' />
      color: 'text-orange-400'
    },    {      bestFor: 'B2B startups, SaaS companies, marketing teams';
      pros: ['Free tierAll-in-one solutionGreat for beginnersExcellent support']
      cons: ['Can get expensiveComplex for small teamsLimited customization']
      website: 'https://hubspot.com'
      icon: <TrendingUp className="w-6 h-6" />
      color: 'text-orange-400'
    }
    {
      name: 'Mailchimp'
      category: 'Email Marketing'
      pricing: 'Free - $59/month'
      rating: 4.5
      users: '12M+'
      bestFor: 'E-commerce, content creators, small businesses'
      pros: ['Free tier', 'Easy to use', 'Good templates', 'Affordable']
      cons: ['Limited free features', 'Basic automation', 'Can be expensive']
      website: 'https://mailchimp.com'
      icon: <Users className='w-6 h-6' />
      color: 'text-yellow-400'
    },    {      bestFor: 'E-commerce, content creators, small businesses';
      pros: ['Free tierEasy to useGood templatesAffordable']
      cons: ['Limited free featuresBasic automationCan be expensive']
      website: 'https://mailchimp.com'
      icon: <Users className="w-6 h-6" />
      color: 'text-yellow-400'
    }
    {
      name: 'Calendly'
      category: 'Productivity'
      pricing: 'Free - $12/month'
      rating: 4.8
      users: '10M+'
      bestFor: 'Sales teams, consultants, remote teams'
      pros: [
        'Free tier'
        'Easy integration'
        'Professional appearance'
        'Time-saving'
      ]
      cons: [
        'Limited free features'
        'Basic customization'
        'Can be expensive'
      ]
      icon: <Globe className='w-6 h-6' />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      name: 'ChatGPT',
      category: 'AI Assistant',
      pricing: 'Free - $20 / month',
      rating: 4.8,
      users: '100M+',

      best_for: 'Content creators, developers, researchers',
      pros: [;
        'Powerful capabilities',
        'Easy to use',
        'Regular updates',
        'Good free tier',
      ],
      cons: ['Sometimes inaccurate', 'Limited context', 'Privacy concerns'],
      website: 'https://chat.openai.com',
      icon: <Brain className='w - 6 h - 6' />,
      color: 'text - green - 400',
    },    {      best_for: 'Content creators, developers, researchers';
      pros: ['Powerful capabilities_easy to use_regular updates_good free tier'],
      cons: ['Sometimes inaccurate_limited context_privacy concerns'],

      website: 'https://chat.openai.com',
      icon: <Brain className="w - 6 h - 6" />,
      color: 'text - green - 400';
    }
    {
      name: 'Midjourney',
      category: 'AI Art',
      pricing: '$10 - $30 / month',
      rating: 4.7,
      users: '1M+',

      best_for: 'Designers, marketers, content creators',
      pros: [;
        'High - quality output',
        'Creative control',
        'Commercial rights',
        'Active community',
      ],
      cons: [;
        'Discord - only interface',
        'Limited customization',
        'Monthly subscription',
      ],
      website: 'https://midjourney.com',
      icon: <Zap className='w - 6 h - 6' />,
      color: 'text - purple - 400',
    },    {      best_for: 'Designers, marketers, content creators';
      pros: ['High - quality output_creative control_commercial rights_active community'],
      cons: ['Discord - only interface_limited customization_monthly subscription'],

      website: 'https://midjourney.com',
      icon: <Zap className="w - 6 h - 6" />,
      color: 'text - purple - 400';
    }
    {
      name: 'Jasper',
      category: 'AI Writing',
      pricing: '$39 - $125 / month',
      rating: 4.6,
      users: '100K+',

      best_for: 'Marketing teams, content creators, businesses',
      pros: [;
        'Specialized for marketing',
        'Brand voice training',
        'SEO optimization',
        'Team features',
      ],
      cons: ['Expensive', 'Limited free trial', 'Can be repetitive'],
      website: 'https://jasper.ai',
      icon: <Brain className='w - 6 h - 6' />,
      color: 'text - blue - 400',
    },    // SaaS Tools      best_for: 'Marketing teams, content creators, businesses';
      pros: ['Specialized for marketing_brand voice trainingSEO optimization_team features'],
      cons: ['ExpensiveLimited free trial_can be repetitive'],

      website: 'https://jasper.ai',
      icon: <Brain className="w - 6 h - 6" />,
      color: 'text - blue - 400';
    }
    // SaaS Tools;
    {
      name: 'Zapier',
      category: 'Automation',
      pricing: 'Free - $19.99 / month',
      rating: 4.8,
      users: '2M+',

      best_for: 'Businesses looking to automate workflows',
      pros: [;
        'Easy to use',
        'Extensive integrations',
        'Reliable',
        'Great support',
      ],
      cons: ['Can get expensive', 'Limited customization'],
      website: 'https://zapier.com',
      icon: <Zap className='w - 6 h - 6' />,
      color: 'text - orange - 400',
    },    {      pros: ['Easy to use_extensive integrationsReliableGreat support'],
      cons: ['Can get expensive_limited customization'],
      website: 'https://zapier.com',
      icon: <Zap className="w - 6 h - 6" />,
      color: 'text - orange - 400';
    }

      name: 'Notion',
      category: 'Productivity',
      pricing: 'Free - $8 / month',
      rating: 4.7,
      users: '20M+',

      best_for: 'Teams that need flexible workspace',
      pros: [;
        'Highly flexible',
        'Beautiful interface',
        'Great templates',
        'Free tier',
      ],
      cons: ['Learning curve', 'Limited offline access', 'Can be overwhelming'],
      website: 'https://notion.so',
      icon: <Globe className='w - 6 h - 6' />,
      color: 'text - gray - 400',
    },    {      pros: ['Highly flexible_beautiful interface_great templates_free tier'],
      cons: ['Learning curve_limited offline access_can be overwhelming'],
      website: 'https://notion.so',
      icon: <Globe className="w - 6 h - 6" />,
      color: 'text - gray - 400';
    }

      name: 'Stripe',
      category: 'Payments',
      pricing: '2.9% + 30¢ per transaction',
      rating: 4.9,
      users: '1M+',

      best_for: 'Online businesses, SaaS companies, e - commerce',
      pros: [;
        'Developer - friendly',
        'Global reach',
        'Excellent docs',
        'Reliable',
      ],
      cons: [;
        'Higher fees than some alternatives',
        'Complex for beginners',
        'Strict requirements',
      ],
      website: 'https://stripe.com',
      icon: <DollarSign className='w - 6 h - 6' />,
      color: 'text - blue - 400',
    },    // Startup Tools      best_for: 'Online businesses, SaaS companies, e - commerce';
      pros: ['Developer - friendly_global reach_excellent docs_reliable'],
      cons: ['Higher fees than some alternatives_complex for beginners_strict requirements'],

      website: 'https://stripe.com',
      icon: <DollarSign className="w - 6 h - 6" />,
      color: 'text - blue - 400';
    }
    // Startup Tools;
    {
      name: 'HubSpot',
      category: 'Marketing & Sales',
      pricing: 'Free - $45 / month',
      rating: 4.7,
      users: '135K+',

      best_for: 'B2B startups, SaaS companies, marketing teams',
      pros: [;
        'Free tier',
        'All - in - one solution',
        'Great for beginners',
        'Excellent support',
      ],
      cons: [;
        'Can get expensive',
        'Complex for small teams',
        'Limited customization',
      ],
      website: 'https://hubspot.com',
      icon: <TrendingUp className='w - 6 h - 6' />,
      color: 'text - orange - 400',
    },    {      best_for: 'B2B startups, SaaS companies, marketing teams';
      pros: ['Free tier_all - in - one solution_great for beginners_excellent support'],
      cons: ['Can get expensive_complex for small teams_limited customization'],

      website: 'https://hubspot.com',
      icon: <TrendingUp className="w - 6 h - 6" />,
      color: 'text - orange - 400';
    }
    {
      name: 'Mailchimp',
      category: 'Email Marketing',
      pricing: 'Free - $59 / month',
      rating: 4.5,
      users: '12M+',

      best_for: 'E - commerce, content creators, small businesses',
      pros: ['Free tier', 'Easy to use', 'Good templates', 'Affordable'],
      cons: ['Limited free features', 'Basic automation', 'Can be expensive'],
      website: 'https://mailchimp.com',
      icon: <Users className='w - 6 h - 6' />,
      color: 'text - yellow - 400',
    },    {      best_for: 'E - commerce, content creators, small businesses';
      pros: ['Free tier_easy to use_good templates_affordable'],
      cons: ['Limited free features_basic automation_can be expensive'],

      website: 'https://mailchimp.com',
      icon: <Users className="w - 6 h - 6" />,
      color: 'text - yellow - 400';
    }
    {
      name: 'Calendly',
      category: 'Productivity',
      pricing: 'Free - $12 / month',
      rating: 4.8,
      users: '10M+',

  });


<<<<<<< HEAD
<<<<<<< HEAD
      color: 'text-blue-400'
    }
  ];
  const categories = [
    'All'
    'AI Assistant'
    'AI Art'
    'AI Writing'
    'Automation'
    'Productivity'
    'Payments'
    'Marketing & Sales'
    'Email Marketing'
  ];
  const filteredTools = allTools.filter(tool => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      tool.category.toLowerCase().includes(searchTerm.toLowerCase()) |
      tool.bestFor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' |tool.category === selectedCategory;
    return matchesSearch && matchesCategory;  });    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) |
                         tool.category.toLowerCase().includes(searchTerm.toLowerCase()) |
                         tool.bestFor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' |tool.category === selectedCategory;
    return matchesSearch && matchesCategory
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const sortedTools = [...filteredTools].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'users':

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function ToolComparisonPage() {;
  const [searchTerm, setSearchTerm] = React && React.useState('');
  const [selectedCategory, setSelectedCategory] = React && React.useState('All');
  const [sortBy, setSortBy] = React && React.useState('rating');
        return parseInt(b.users.replace(/[^0-9]/g, '')) - parseInt(a.users.replace(/[^0-9]/g, ''));
      case 'name':
        return a.name.localeCompare(b.name);
      default: return 0
    }
  });


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const allTools = [;
    // AI Tools;
    {;
      name: 'ChatGPT',;
      category: 'AI Assistant',;
      pricing: 'Free - $20/month',;
      rating: 4 && 4.8,;
      users: '100M+',;
      bestFor: 'Content creators, developers, researchers',;
      pros: [;
        'Powerful capabilities',;
        'Easy to use',;
        'Regular updates',;
        'Good free tier',;
      ],;
      cons: ['Sometimes inaccurate', 'Limited context', 'Privacy concerns'],;
      website: 'https://chat && chat.openai.com',;
      icon: <Brain className='w-6 h-6' />,;
      color: 'text-green-400',;
    },    {      bestFor: 'Content creators, developers, researchers';
      pros: ['Powerful capabilitiesEasy to useRegular updatesGood free tier'],;
      cons: ['Sometimes inaccurateLimited contextPrivacy concerns'],;
      website: 'https://chat && chat.openai.com',;
      icon: <Brain className="w-6 h-6" />,;
      color: 'text-green-400';
    };
    {;
      name: 'Midjourney',;
      category: 'AI Art',;
      pricing: '$10 - $30/month',;
      rating: 4 && 4.7,;
      users: '1M+',;
      bestFor: 'Designers, marketers, content creators',;
      pros: [;
        'High-quality output',;
        'Creative control',;
        'Commercial rights',;
        'Active community',;
      ],;
      cons: [;
        'Discord-only interface',;
        'Limited customization',;
        'Monthly subscription',;
      ],;
      website: 'https://midjourney && midjourney.com',;
      icon: <Zap className='w-6 h-6' />,;
      color: 'text-purple-400',;
    },    {      bestFor: 'Designers, marketers, content creators';
      pros: ['High-quality outputCreative controlCommercial rightsActive community'],;
      cons: ['Discord-only interfaceLimited customizationMonthly subscription'],;
      website: 'https://midjourney && midjourney.com',;
      icon: <Zap className="w-6 h-6" />,;
      color: 'text-purple-400';
    };
    {;
      name: 'Jasper',;
      category: 'AI Writing',;
      pricing: '$39 - $125/month',;
      rating: 4 && 4.6,;
      users: '100K+',;
      bestFor: 'Marketing teams, content creators, businesses',;
      pros: [;
        'Specialized for marketing',;
        'Brand voice training',;
        'SEO optimization',;
        'Team features',;
      ],;
      cons: ['Expensive', 'Limited free trial', 'Can be repetitive'],;
      website: 'https://jasper && jasper.ai',;
      icon: <Brain className='w-6 h-6' />,;
      color: 'text-blue-400',;
    },    // SaaS Tools      bestFor: 'Marketing teams, content creators, businesses';
      pros: ['Specialized for marketingBrand voice trainingSEO optimizationTeam features'],;
      cons: ['ExpensiveLimited free trialCan be repetitive'],;
      website: 'https://jasper && jasper.ai',;
      icon: <Brain className="w-6 h-6" />,;
      color: 'text-blue-400';
    };
    // SaaS Tools;
    {;
      name: 'Zapier',;
      category: 'Automation',;
      pricing: 'Free - $19 && 19.99/month',;
      rating: 4 && 4.8,;
      users: '2M+',;
      bestFor: 'Businesses looking to automate workflows',;
      pros: [;
        'Easy to use',;
        'Extensive integrations',;
        'Reliable',;
        'Great support',;
      ],;
      cons: ['Can get expensive', 'Limited customization'],;
      website: 'https://zapier && zapier.com',;
      icon: <Zap className='w-6 h-6' />,;
      color: 'text-orange-400',;
    },    {      pros: ['Easy to useExtensive integrationsReliableGreat support'],;
      cons: ['Can get expensiveLimited customization'],;
      website: 'https://zapier && zapier.com',;
      icon: <Zap className="w-6 h-6" />,;
      color: 'text-orange-400';
    };
      name: 'Notion',;
      category: 'Productivity',;
      pricing: 'Free - $8/month',;
      rating: 4 && 4.7,;
      users: '20M+',;
      bestFor: 'Teams that need flexible workspace',;
      pros: [;
        'Highly flexible',;
        'Beautiful interface',;
        'Great templates',;
        'Free tier',;
      ],;
      cons: ['Learning curve', 'Limited offline access', 'Can be overwhelming'],;
      website: 'https://notion && notion.so',;
      icon: <Globe className='w-6 h-6' />,;
      color: 'text-gray-400',;
    },    {      pros: ['Highly flexibleBeautiful interfaceGreat templatesFree tier'],;
      cons: ['Learning curveLimited offline accessCan be overwhelming'],;
      website: 'https://notion && notion.so',;
      icon: <Globe className="w-6 h-6" />,;
      color: 'text-gray-400';
    };
      name: 'Stripe',;
      category: 'Payments',;
      pricing: '2 && 2.9% + 30¢ per transaction',;
      rating: 4 && 4.9,;
      users: '1M+',;
      bestFor: 'Online businesses, SaaS companies, e-commerce',;
      pros: [;
        'Developer-friendly',;
        'Global reach',;
        'Excellent docs',;
        'Reliable',;
      ],;
      cons: [;
        'Higher fees than some alternatives',;
        'Complex for beginners',;
        'Strict requirements',;
      ],;
      website: 'https://stripe && stripe.com',;
      icon: <DollarSign className='w-6 h-6' />,;
      color: 'text-blue-400',;
    },    // Startup Tools      bestFor: 'Online businesses, SaaS companies, e-commerce';
      pros: ['Developer-friendlyGlobal reachExcellent docsReliable'],;
      cons: ['Higher fees than some alternativesComplex for beginnersStrict requirements'],;
      website: 'https://stripe && stripe.com',;
      icon: <DollarSign className="w-6 h-6" />,;
      color: 'text-blue-400';
    };
    // Startup Tools;
    {;
      name: 'HubSpot',;
      category: 'Marketing & Sales',;
      pricing: 'Free - $45/month',;
      rating: 4 && 4.7,;
      users: '135K+',;
      bestFor: 'B2B startups, SaaS companies, marketing teams',;
      pros: [;
        'Free tier',;
        'All-in-one solution',;
        'Great for beginners',;
        'Excellent support',;
      ],;
      cons: [;
        'Can get expensive',;
        'Complex for small teams',;
        'Limited customization',;
      ],;
      website: 'https://hubspot && hubspot.com',;
      icon: <TrendingUp className='w-6 h-6' />,;
      color: 'text-orange-400',;
    },    {      bestFor: 'B2B startups, SaaS companies, marketing teams';
      pros: ['Free tierAll-in-one solutionGreat for beginnersExcellent support'],;
      cons: ['Can get expensiveComplex for small teamsLimited customization'],;
      website: 'https://hubspot && hubspot.com',;
      icon: <TrendingUp className="w-6 h-6" />,;
      color: 'text-orange-400';
    };
    {;
      name: 'Mailchimp',;
      category: 'Email Marketing',;
      pricing: 'Free - $59/month',;
      rating: 4 && 4.5,;
      users: '12M+',;
      bestFor: 'E-commerce, content creators, small businesses',;
      pros: ['Free tier', 'Easy to use', 'Good templates', 'Affordable'],;
      cons: ['Limited free features', 'Basic automation', 'Can be expensive'],;
      website: 'https://mailchimp && mailchimp.com',;
      icon: <Users className='w-6 h-6' />,;
      color: 'text-yellow-400',;
    },    {      bestFor: 'E-commerce, content creators, small businesses';
      pros: ['Free tierEasy to useGood templatesAffordable'],;
      cons: ['Limited free featuresBasic automationCan be expensive'],;
      website: 'https://mailchimp && mailchimp.com',;
      icon: <Users className="w-6 h-6" />,;
      color: 'text-yellow-400';
    };
    {;
      name: 'Calendly',;
      category: 'Productivity',;
      pricing: 'Free - $12/month',;
      rating: 4 && 4.8,;
      users: '10M+',;
      bestFor: 'Sales teams, consultants, remote teams',;
      pros: [;
        'Free tier',;
        'Easy integration',;
        'Professional appearance',;
        'Time-saving',;
      ],;
      cons: [;
        'Limited free features',;
        'Basic customization',;
        'Can be expensive',;
      ],;
      icon: <Globe className='w-6 h-6' />,;
      color: 'text-blue-400',;
    },;
  ];
  const categories = [;
    'All',;
    'AI Assistant',;
    'AI Art',;
    'AI Writing',;
    'Automation',;
    'Productivity',;
    'Payments',;
    'Marketing & Sales',;
    'Email Marketing',;
  ];
  const filteredTools = allTools && allTools.filter(tool => {;
    const matchesSearch =;
      tool && tool.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      tool && tool.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      tool && tool.bestFor.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
    const matchesCategory =;
      selectedCategory === 'All' || tool && tool.category === selectedCategory;
    return matchesSearch && matchesCategory;  });    const matchesSearch = tool && tool.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         tool && tool.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         tool && tool.bestFor.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool && tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  const sortedTools = [...filteredTools].sort((a, b) => {;
    switch (sortBy) {;
      case 'rating':;
        return b && b.rating - a && a.rating;
      case 'users':;
        return (
          parseInt(b && b.users.replace(/[^0-9]/g, '')) -;
          parseInt(a && a.users.replace(/[^0-9]/g, ''));
        );
      case 'name':;
        return a && a.name.localeCompare(b && b.name);
      default:;
        return 0;    }        return parseInt(b && b.users.replace(/[^0-9]/g, '')) - parseInt(a && a.users.replace(/[^0-9]/g, ''));
      case 'name':;
        return a && a.name.localeCompare(b && b.name);
      default: return 0;
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





  const getPricingColor = (pricing: string) => {
    if (pricing.includes('Free')) return 'text-green-400';
    if (pricing.includes('$')) return 'text-blue-400';


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const getPricingColor = (pricing: string) => {;
    if (pricing && pricing.includes('Free')) return 'text-green-400';
    if (pricing && pricing.includes('$')) return 'text-blue-400';
    return 'text-gray-400';  };    return 'text-gray-400';
    return 'text-gray-400'
<<<<<<< HEAD
<<<<<<< HEAD
  };
  return (
        />;
        <meta name='twitter:card' content='summary_large_image' />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (

        />;
        <meta name='twitter:card' content='summary_large_image' />;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black'>;
        <div className='absolute inset-0'>;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0 && 0.08),transparent_50%)]' />;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0 && 0.06),transparent_50%)]' />;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0 && 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0 && 0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20' />;
=======

        <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0 && 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0 && 0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20' />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0 && 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0 && 0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20' />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
          <div className='mb-20 animate-fade-in'>;
            <div className='mb-8'>;
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6 animate-scale-in'>;
                <Search className='w-4 h-4 mr-2' />;
                Smart Tool Selection;
              </div>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight'>;
              Tool Comparison;
            </h1>;
            <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>;
              Compare SaaS tools, AI services, and business solutions. Make;
              informed decisions with our comprehensive analysis and expert;
              insights.;
            </p>;
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>;
              <Button
                href='#comparison'
                size='lg'
                className='animate-scale-in shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40'
                style={{ animationDelay: '0 && 0.2s' }}>;
                Start Comparing;
                <ArrowRight className='w-5 h-5 ml-2' />;
              </Button>;
              <Button
                href='/contact'
                variant='outline'
                size='lg'
                className='animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5'                style={{ animationDelay: '0 && 0.4s' }}                href="/contact"
    <>
      <Head>
        <title>Tool Comparison - Zion Tech Group</title>
        <meta name="description" content="Compare SaaS tools, AI services, and business solutions. Find the perfect tools for your business needs with our comprehensive comparison." />
        <meta property="og:title" content="Tool Comparison - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive comparison of SaaS tools and AI services to help you make informed decisions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.06),transparent_50%)]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-20 animate-fade-in">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6 animate-scale-in">
                <Search className="w-4 h-4 mr-2" />
                Smart Tool Selection
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight">
              Tool Comparison
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
              Compare SaaS tools, AI services, and business solutions. 
              Make informed decisions with our comprehensive analysis and expert insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button
                href="#comparison"
                size="lg"
                className="animate-scale-in shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40"
                style={{ animationDelay: '0.2s' }}
              >
                Start Comparing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"

  const _sortedTools = [...filteredTools].sort(_(a, _b) => {_switch (sortBy) {
      case 'rating':
        return b.rating - a.rating,
      case 'users':
        return parseInt(b.users.replace(/[^0-9]/g, '')) - parseInt(a.users.replace(/[^0-9]/g, '')),
      case 'name':
        return a.name.localeCompare(b.name),
      default: return 0
    }
  }),

  const getPricingColor = (pricing: string) => {
    if (pricing.includes('Free')) return 'text-green-400',
    if (pricing.includes('$')) return 'text-blue-400',
    return 'text-gray-400'
  },
        return (
          parseInt(b.users.replace(/[^0-9]/g, '')) -
          parseInt(a.users.replace(/[^0-9]/g, ''))
        );
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;    }        return parseInt(b.users.replace(/[^0-9]/g, '')) - parseInt(a.users.replace(/[^0-9]/g, ''));
      case 'name':
        return a.name.localeCompare(b.name);
      default: return 0
  });

  const getPricingColor = (pricing: string) => {
    if (pricing.includes('Free')) return 'text-green-400';
    if (pricing.includes('$')) return 'text-blue-400';
    return 'text-gray-400';  };    return 'text-gray-400'
  }

  return (
    <>
      <Head>
        <title>Tool Comparison - Zion Tech Group</title>
        <meta
          name='description'
          content='Compare SaaS tools, AI services, and business solutions. Find the perfect tools for your business needs with our comprehensive comparison.'
        />
        <meta property='og:title' content='Tool Comparison - Zion Tech Group' />
        <meta
          property='og:description'
          content='Comprehensive comparison of SaaS tools and AI services to help you make informed decisions.'
        />
        <meta name='twitter:card' content='summary_large_image' />
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_50%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.06),transparent_50%)]' />
        </div>
        <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20' />
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='mb-20 animate-fade-in'>
            <div className='mb-8'>
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6 animate-scale-in'>
                <Search className='w-4 h-4 mr-2' />
                Smart Tool Selection
              </div>
            </div>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight'>
              Tool Comparison
            </h1>
            <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>
              Compare SaaS tools, AI services, and business solutions. Make
              informed decisions with our comprehensive analysis and expert
              insights.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>
=======

            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Button
                href='#comparison'
                size='lg'
                className='animate-scale-in shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40'
                style={{ animationDelay: '0.2s' }}
              >
                Start Comparing
                <ArrowRight className='w-5 h-5 ml-2' />
              </Button>
              <Button
                href='/contact'
                variant='outline'
                size='lg'
                className='animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5'                style={{ animationDelay: '0.4s' }}                href="/contact"
                variant="outline"
                size="lg"
<<<<<<< HEAD
<<<<<<< HEAD
                className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5"
=======

                style={{ animationDelay: '0.4s' }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                style={{ animationDelay: '0.4s' }}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                Get Expert Advice
              </Button>
            </div>
          </div>
          {/* Stats */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in'
            style={{ animationDelay: '0.6s' }}
          >
            <div className='text-center group'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300'>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {allTools.length}+
              </div>
              <div className='text-gray-400 text-sm'>Tools Analyzed</div>
            </div>
            <div className='text-center group'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300'>
                9
              </div>
              <div className='text-gray-400 text-sm'>Categories</div>
            </div>
            <div className='text-center group'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300'>
                4.7+
              </div>
              <div className='text-gray-400 text-sm'>Avg Rating</div>
            </div>
            <div className='text-center group'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300'>
                250M+
              </div>
              <div className='text-gray-400 text-sm'>Total Users</div>            </div>                {allTools.length}+
              </div>
              <div className="text-gray-400 text-sm">Tools Analyzed</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                9
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">
                4.7+
              </div>
              <div className="text-gray-400 text-sm">Avg Rating</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                250M+
              </div>
              <div className="text-gray-400 text-sm">Total Users</div>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5">;
                Get Expert Advice;
              </Button>;
            </div>;
          </div>;
          {/* Stats */}
          <div
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in'
            style={{ animationDelay: '0 && 0.6s' }}>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300'>;
                {allTools && allTools.length}+;
              </div>;
              <div className='text-gray-400 text-sm'>Tools Analyzed</div>;
            </div>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300'>;
                9;
              </div>;
              <div className='text-gray-400 text-sm'>Categories</div>;
            </div>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300'>;
                4 && 4.7+;
              </div>;
              <div className='text-gray-400 text-sm'>Avg Rating</div>;
            </div>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300'>;
                250M+;
              </div>;
              <div className='text-gray-400 text-sm'>Total Users</div>            </div>                {allTools && allTools.length}+;
              </div>;
              <div className="text-gray-400 text-sm">Tools Analyzed</div>;
            </div>;
            <div className="text-center group">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300">;
                9;
              </div>;
              <div className="text-gray-400 text-sm">Categories</div>;
            </div>;
            <div className="text-center group">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">;
                4 && 4.7+;
              </div>;
              <div className="text-gray-400 text-sm">Avg Rating</div>;
            </div>;
            <div className="text-center group">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">;
                250M+;
              </div>;
              <div className="text-gray-400 text-sm">Total Users</div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Filters and Search */}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'              />;
            </div>;
<<<<<<< HEAD
            {/* Category Filter */}
            <div className='flex flex-wrap gap-2'>;
              {categories && categories.map(category => (                <button            {/* Search */}
            <div className="relative flex-1 max-w-md">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
=======


            {/* Category Filter */}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Filters and Search */}
      <section className='py-16 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
            {/* Search */}
            <div className='relative flex-1 max-w-md'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='text'
                placeholder='Search tools, categories, or use cases...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'              />
            </div>
            {/* Category Filter */}
            <div className='flex flex-wrap gap-2'>
<<<<<<< HEAD
              {categories.map(category => (                <button            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <input
                type="text"
                placeholder="Search tools, categories, or use cases..."
                value={searchTerm}
<<<<<<< HEAD
                onChange={(e) => setSearchTerm(e && e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent";
              />;
            </div>;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Category Filter */}
            <div className='flex flex-wrap gap-2'>;
              {categories && categories.map(category => (            <div className="flex flex-wrap gap-2">;
              {categories && categories.map((category) => (;
<<<<<<< HEAD
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {categories.map(category => (                <button

              />
            </div>

            {/* Category Filter */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                <button
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className='flex flex-wrap gap-2'>

=======
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (

                <button
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {categories.map(category => (                <button

              />
            </div>

            {/* Category Filter */}

                <button


<<<<<<< HEAD
<<<<<<< HEAD

                <button

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${;
                    selectedCategory === category;
                      ? 'bg-purple-600 text-white shadow-lg';
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white';
                  }`}
                >;
                  {category}
                </button>;
              ))}
<<<<<<< HEAD
<<<<<<< HEAD
            </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Sort */}
            <div className='flex items-center space-x-2'>;
              <Filter className='w-5 h-5 text-gray-400' />;
            </div>
<<<<<<< HEAD
            {/* Sort */}
<<<<<<< HEAD
            <div className='flex items-center space-x-2'>
              <Filter className='w-5 h-5 text-gray-400' />

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
=======
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            {/* Sort */}
            <div className='flex items-center space-x-2'>
              <Filter className='w-5 h-5 text-gray-400' />

<<<<<<< HEAD
            {/* Sort */}
            <div className='flex items-center space-x-2'>
              <Filter className='w-5 h-5 text-gray-400' />

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <select
                value={sortBy}
                onChange={e => setSortBy(e && e.target.value)}
                className='bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500';
              >;
                <option value='rating'>Sort by Rating</option>;
                <option value='users'>Sort by Users</option>;
                <option value='name'>Sort by Name</option>              </select>              <select
                value={sortBy}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <section id="comparison" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Tool Comparison
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Compare features, pricing, and user ratings to find the perfect tools for your business needs.
            </p>
          </div>

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
<<<<<<< HEAD
<<<<<<< HEAD
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="rating">Sort by Rating</option>
                <option value="users">Sort by Users</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      {/* Comparison Table */}
      <section id='comparison' className='py-24 bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Compare features, pricing, and user ratings to find the perfect
              tools for your business needs.
            </p>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='border-b border-gray-800'>
                  <th className='text-left py-4 px-6 text-gray-300 font-medium'>
                    Tool
                  </th>
                  <th className='text-left py-4 px-6 text-gray-300 font-medium'>
                    Category
                  </th>
                  <th className='text-left py-4 px-6 text-gray-300 font-medium'>
                    Pricing
                  </th>
                  <th className='text-left py-4 px-6 text-gray-300 font-medium'>
                    Rating
                  </th>
                  <th className='text-left py-4 px-6 text-gray-300 font-medium'>
                    Users
                  </th>
                  <th className='text-left py-4 px-6 text-gray-300 font-medium'>
                    Best For
                  </th>
                  <th className='text-left py-4 px-6 text-gray-300 font-medium'>
                    Actions
                  </th>                </tr>
              </thead>
              <tbody>
                {sortedTools.map((tool, index) => (                <tr className="border-b border-gray-800">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Tool</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Category</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Pricing</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Rating</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Users</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Best For</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Actions</th>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onChange={(e) => setSortBy(e && e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500";
              >;
                <option value="rating">Sort by Rating</option>;
                <option value="users">Sort by Users</option>;
                <option value="name">Sort by Name</option>;
              </select>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Comparison Table */}
      <section id='comparison' className='py-24 bg-black'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
              Compare features, pricing, and user ratings to find the perfect;
              tools for your business needs.;
            </p>;
          </div>;
          <div className='overflow-x-auto'>;
            <table className='w-full'>;
              <thead>;
                <tr className='border-b border-gray-800'>;
                  <th className='text-left py-4 px-6 text-gray-300 font-medium'>;
                    Tool;
                  </th>;
                  <th className='text-left py-4 px-6 text-gray-300 font-medium'>;
                    Category;
                  </th>;
                  <th className='text-left py-4 px-6 text-gray-300 font-medium'>;
                    Pricing;
                  </th>;
                  <th className='text-left py-4 px-6 text-gray-300 font-medium'>;
                    Rating;
                  </th>;
                  <th className='text-left py-4 px-6 text-gray-300 font-medium'>;
                    Users;
                  </th>;
                  <th className='text-left py-4 px-6 text-gray-300 font-medium'>;
                    Best For;
                  </th>;
                  <th className='text-left py-4 px-6 text-gray-300 font-medium'>;
                    Actions;
                  </th>                </tr>;
              </thead>;
              <tbody>;
                {sortedTools && sortedTools.map((tool, index) => (                <tr className="border-b border-gray-800">;
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Tool</th>;
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Category</th>;
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Pricing</th>;
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Rating</th>;
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Users</th>;
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Best For</th>;
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Actions</th>;
              </thead>;
              <tbody>;
                {sortedTools && sortedTools.map((tool, index) => (;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <tr
                    key={index}
                    className='border-b border-gray-800/50 hover:bg-gray-900/50 transition-colors duration-200'>;
                    <td className='py-4 px-6'>;
                      <div className='flex items-center space-x-3'>;
                        <div
                          className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center ${tool && tool.color}`}>;
                          {tool && tool.icon}
                        </div>;
                        <div>;
                          <div className='font-semibold text-white'>;
                            {tool && tool.name}
                          </div>;
                        </div>;
                      </div>;
                    </td>;
                    <td className='py-4 px-6'>;
                      <span className='px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300'>;
                        {tool && tool.category}
                      </span>;
                    </td>;
                    <td className='py-4 px-6'>;
                      <span
                        className={`font-medium ${getPricingColor(tool && tool.pricing)}`}>;
                        {tool && tool.pricing}
                      </span>;
                    </td>;
                    <td className='py-4 px-6'>;
                      <div className='flex items-center space-x-1'>;
                        <Star className='w-4 h-4 text-yellow-400 fill-current' />;
                        <span className='text-white'>{tool && tool.rating}</span>;
                      </div>;
                    </td>;
                    <td className='py-4 px-6 text-gray-300'>{tool && tool.users}</td>;
                    <td className='py-4 px-6'>;
                      <div className='max-w-xs text-sm text-gray-400'>;
                        {tool && tool.bestFor}
                      </div>;
                    </td>;
                    <td className='py-4 px-6'>;
                      <div className='flex space-x-2'>;
                        <Button
                          href={tool && tool.website}
                          variant='outline'
                          size='sm'
                          className='text-xs'>;
                          Visit;
                          <ExternalLink className='w-3 h-3 ml-1' />;
                        </Button>;
                        <Button
                          href={`/tool-details/${tool && tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                          variant='ghost'
                          size='sm'
                          className='text-xs'>                          variant="ghost";
                          size="sm";
                          className="text-xs";
                        >;
                          Details;
                        </Button>;
                      </div>;
                    </td>;
                  </tr>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </tr>
              </thead>
              <tbody>
                {sortedTools.map((tool, index) => (
<tr key={index} className="border-b border-gray-800/50 hover:bg-gray-900/50 transition-colors duration-200">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center ${tool.color}`}>
                          {tool.icon}
                        </div>
                        <div>
<div className="font-semibold text-white">{tool.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                        {tool.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`font-medium ${getPricingColor(tool.pricing)}`}>
                        {tool.pricing}
                      </span>
                    </td>
<td className="py-4 px-6">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white">{tool.rating}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-300">{tool.users}</td>
                    <td className="py-4 px-6">
                      <div className="max-w-xs text-sm text-gray-400">{tool.bestFor}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <Button
                          href={tool.website}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                        >
                          Visit
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </Button>
                        <Button
                          href={`/tool-details/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                          variant="ghost"
                          size="sm"
                          className="text-xs"
                        >
                          Details
                        </Button>
                      </div>
                    </td>
                  </tr>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ))}

            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No tools found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or category filter.</p>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          )}
        </div>
      </section>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          )}
        </div>
      </section>




<<<<<<< HEAD
      {/* Detailed Comparison Cards */}


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Detailed Comparison Cards */}
      <section className='py-24 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              Detailed Analysis


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Deep dive into each tool's pros, cons, and use cases to make the
              best decision for your business.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {sortedTools.slice(0, 6).map((tool, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
                ))}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
              </tbody>;
            </table>;
          </div>;
          {sortedTools && sortedTools.length === 0 && (;
            <div className='text-center py-20'>;
              <Search className='w-16 h-16 text-gray-600 mx-auto mb-4' />;
              <h3 className='text-xl font-semibold text-gray-400 mb-2'>;
                No tools found;
              </h3>;
              <p className='text-gray-500'>;
                Try adjusting your search criteria or category filter.;
              </p>            </div>            <div className="text-center py-20">;
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />;
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No tools found</h3>;
              <p className="text-gray-500">Try adjusting your search criteria or category filter.</p>;
          )}
        </div>;
      </section>;
      {/* Detailed Comparison Cards */}
      <section className='py-24 bg-gray-900'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
              Deep dive into each tool's pros, cons, and use cases to make the;
              best decision for your business.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;
            {sortedTools && sortedTools.slice(0, 6).map((tool, index) => (;
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </tbody>
            </table>
          </div>
          {sortedTools.length === 0 && (
            <div className='text-center py-20'>
              <Search className='w-16 h-16 text-gray-600 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-gray-400 mb-2'>
                No tools found
              </h3>
              <p className='text-gray-500'>
                Try adjusting your search criteria or category filter.
              </p>            </div>            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No tools found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or category filter.</p>
<<<<<<< HEAD
          )}
        </div>
      </section>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            </div>

          )}
        </div>
      </section>

      {/* Detailed Comparison Cards */}
      <section className='py-24 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>

              Detailed Analysis
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Deep dive into each tool's pros, cons, and use cases to make the
              best decision for your business.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {sortedTools.slice(0, 6).map((tool, index) => (
              <Card
                key={index}
                className='group border border-gray-800 hover:border-purple-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1'
                style={{ animationDelay: `${index * 0 && 0.1}s` }}>;
                <div className='flex items-start space-x-4 mb-4'>;
                  <div
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Detailed Analysis
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Deep dive into each tool's pros, cons, and use cases to make the best decision for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sortedTools.slice(0, 6).map((tool, index) => (
              <Card
                key={index}
                className="group border border-gray-800 hover:border-purple-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center ${tool.color}`}>
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {tool.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="px-2 py-1 bg-gray-800 rounded-full">{tool.category}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                        <span>{tool.rating}</span>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      </div>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
                <div className='mb-4'>
                  <h4 className='text-sm font-semibold text-gray-300 mb-2'>
                    Best For:
                  </h4>
                  <p className='text-sm text-gray-400'>{tool.bestFor}</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                  <div>
                    <h4 className='text-sm font-semibold text-green-400 mb-2 flex items-center'>
                      <Check className='w-4 h-4 mr-1' />
                      Pros
                    </h4>
                    <ul className='space-y-1'>
                      {tool.pros.slice(0, 3).map((pro, proIndex) => (
                        <li
                          key={proIndex}
                          className='text-xs text-gray-400 flex items-start'
                        >
                          <span className='w-1 h-1 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0' />                          {pro}                </div>
=======


                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Best For:</h4>
                  <p className="text-sm text-gray-400">{tool.bestFor}</p>
                </div>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center">
                      <Check className="w-4 h-4 mr-1" />
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {tool.pros.slice(0, 3).map((pro, proIndex) => (
                        <li key={proIndex} className="text-xs text-gray-400 flex items-start">
                          <span className="w-1 h-1 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0" />
<<<<<<< HEAD
=======

                    className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center ${tool && tool.color}`}>;
                    {tool && tool.icon}
                  </div>;
                  <div className='flex-1'>;
                    <h3 className='text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300'>;
                      {tool && tool.name}
                    </h3>;
                    <div className='flex items-center space-x-4 text-sm text-gray-400'>;
                      <span className='px-2 py-1 bg-gray-800 rounded-full'>;
                        {tool && tool.category}
                      </span>;
                      <div className='flex items-center space-x-1'>;
                        <Star className='w-4 h-4 text-yellow-400 fill-current' />                        <span>{tool && tool.rating}</span>                    <div className="flex items-center space-x-4 text-sm text-gray-400">;
                      <span className="px-2 py-1 bg-gray-800 rounded-full">{tool && tool.category}</span>;
                      <div className="flex items-center space-x-1">;
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />;
                      </div>;
                    </div>;
                  </div>;
                </div>;
                <div className='mb-4'>;
                  <h4 className='text-sm font-semibold text-gray-300 mb-2'>;
                    Best For:;
                  </h4>;
                  <p className='text-sm text-gray-400'>{tool && tool.bestFor}</p>;
                </div>;
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>;
                  <div>;
                    <h4 className='text-sm font-semibold text-green-400 mb-2 flex items-center'>;
                      <Check className='w-4 h-4 mr-1' />;
                      Pros;
                    </h4>;
                    <ul className='space-y-1'>;
                      {tool && tool.pros.slice(0, 3).map((pro, proIndex) => (;
                        <li
                          key={proIndex}
                          className='text-xs text-gray-400 flex items-start'>;
                          <span className='w-1 h-1 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0' />                          {pro}                </div>;
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">;
                  <div>;
                    <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center">;
                      <Check className="w-4 h-4 mr-1" />;
                      Pros;
                    </h4>;
                    <ul className="space-y-1">;
                      {tool && tool.pros.slice(0, 3).map((pro, proIndex) => (;
                        <li key={proIndex} className="text-xs text-gray-400 flex items-start">;
                          <span className="w-1 h-1 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0" />;

                          {pro}
                        </li>;
                      ))}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center">
                      <X className="w-4 h-4 mr-1" />
<<<<<<< HEAD
<<<<<<< HEAD
                          {pro}
                        </li>;
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className='text-sm font-semibold text-red-400 mb-2 flex items-center'>
                      <X className='w-4 h-4 mr-1' />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      Cons
                    </h4>
                    <ul className='space-y-1'>
                      {tool.cons.slice(0, 3).map((con, conIndex) => (
                        <li
                          key={conIndex}
                          className='text-xs text-gray-400 flex items-start'
                        >
                          <span className='w-1 h-1 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0' />                          {con}                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {tool.cons.slice(0, 3).map((con, conIndex) => (
                        <li key={conIndex} className="text-xs text-gray-400 flex items-start">
                          <span className="w-1 h-1 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0" />
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          {con}
                        </li>;
                      ))}

                    </ul>;
                  </div>;
                </div>;
                <div className='flex items-center justify-between'>;
<<<<<<< HEAD
<<<<<<< HEAD
                    </ul>
                  </div>
                </div>

                <div className='flex items-center justify-between'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <span
                    className={`text-sm font-medium ${getPricingColor(tool && tool.pricing)}`}>                    {tool && tool.pricing}
                  </span>;
                  <Button
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    href={tool && tool.website}                <div className="flex items-center justify-between">;
                  <span className={`text-sm font-medium ${getPricingColor(tool && tool.pricing)}`}>;
                    {tool && tool.pricing}
                  </span>;
                  <Button
                    href={tool && tool.website}
                    variant='outline'
                    size='sm'
                    className='group-hover:border-purple-500 group-hover:text-purple-400'>;
                    Visit Website;
                    <ExternalLink className='w-4 h-4 ml-2' />                  </Button>                    variant="outline";
                    size="sm";
                    className="group-hover:border-purple-500 group-hover:text-purple-400";
                  >;
                    Visit Website;
                    <ExternalLink className="w-4 h-4 ml-2" />;
                </div>;
              </Card>;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${getPricingColor(tool.pricing)}`}>
=======

                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${getPricingColor(tool.pricing)}`}>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className='flex items-center justify-between'>
                  <span
                    className={`text-sm font-medium ${getPricingColor(tool.pricing)}`}
                  >                    {tool.pricing}
                  </span>
                  <Button
<<<<<<< HEAD

                    href={tool.website}


<<<<<<< HEAD
                <div className="flex items-center justify-between">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    href={tool.website}                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${getPricingColor(tool.pricing)}`}>
                    href={tool.website}

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {tool.pricing}
                  </span>
                  <Button
                    href={tool.website}
<<<<<<< HEAD



                  </Button>



<<<<<<< HEAD
                </div>
              </Card>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                </div>
              </Card>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            ))}

          </div>;
        </div>;
      </section>;

<<<<<<< HEAD

      {/* CTA Section */}


      {/* CTA Section */}
variant="outline"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    variant='outline'
                    size='sm'
                    className='group-hover:border-purple-500 group-hover:text-purple-400'
                  >
                    Visit Website
                    <ExternalLink className='w-4 h-4 ml-2' />                  </Button>                    variant="outline"
                    size="sm"
                    className="group-hover:border-purple-500 group-hover:text-purple-400"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2" />

                  </Button>

<<<<<<< HEAD
                </div>
              </Card>
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                </div>
              </Card>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
          </div>;
        </div>;
      </section>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      {/* CTA Section */}


      {/* CTA Section */}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className='py-24 bg-gradient-to-r from-purple-600 to-purple-700 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'>

<<<<<<< HEAD

            Need Help Choosing?

<<<<<<< HEAD

            Need Help Choosing?

            Need Help Choosing?
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            Need Help Choosing?

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </h2>
          <p className='text-xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed'>
            Our experts can analyze your business needs and recommend the
            perfect combination of tools to accelerate your growth.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              href='/contact'
              variant='secondary'
              size='lg'
<<<<<<< HEAD
<<<<<<< HEAD
              className='bg-white text-purple-600 hover:bg-gray-100 shadow-2xl'
            >
              Get Expert Consultation
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className='bg-white text-purple-600 hover:bg-gray-100 shadow-2xl'>;
              Get Expert Consultation;
              <ArrowRight className='w-5 h-5 ml-2' />;
            </Button>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              href='/saas-marketplace'
              variant='outline'
              size='lg'
<<<<<<< HEAD
<<<<<<< HEAD
              className='border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl'            >              href="/saas-marketplace"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl"
              Explore All Tools
            </Button>
          </div>
        </div>
      </section>
    </>


}
  );
}
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Explore All Tools;
            </Button>;
          </div>;
        </div>;
      </section>;


=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </>);
);
  );
}
<<<<<<< HEAD

  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </>);
  );
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
              className='border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl'            >              href="/saas-marketplace"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl"
              Explore All Tools
            </Button>
          </div>
        </div>
      </section>
    </>
  );
=======
}

=======
  );
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
