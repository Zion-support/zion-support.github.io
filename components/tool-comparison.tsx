<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

import {
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  Search
  Filter
  TrendingUp
  DollarSign
  Users
  Star
  Check
  X
  ArrowRight
  ExternalLink
  Zap
  Brain
  Globe
  Rocket;} from 'lucide-react';import {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
  Globe,
  Rocket,;} from 'lucide-react';import { 
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Globe,;
  Rocket,;} from 'lucide-react';import { ;
  Search;
  Filter
  TrendingUp
  DollarSign
  Users
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  Search;
  Filter
  TrendingUp
  DollarSign
  Users

=======

  Search;
  Filter,
  TrendingUp,
  DollarSign,
  Users,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Star;
  Check;
  X;
  ArrowRight;
  ExternalLink;
  Zap;
  Brain;
  Globe;
  Rocket

<<<<<<< HEAD
=======
export default function ToolComparisonPage() {;

export default function ToolComparisonPage() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('rating');

  const allTools = [
    // AI Tools
    {
<<<<<<< HEAD
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

        'Specialized for marketing',
        'Brand voice training',
        'SEO optimization',
        'Team features',
      ],
      cons: ['Expensive', 'Limited free trial', 'Can be repetitive'],
      website: 'https://jasper.ai',
=======
      icon: <Brain className='w-6 h-6' />,
      color: 'text-blue-400',
    },    // SaaS Tools

    // SaaS Tools
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

    {
      name: 'Zapier',
      category: 'Automation',
      pricing: 'Free - $19.99/month',
      rating: 4.8,
      users: '2M+',
      bestFor: 'Businesses looking to automate workflows',

      name: 'Notion',
      category: 'Productivity',
      pricing: 'Free - $8/month',
      rating: 4.7,
      users: '20M+',
      bestFor: 'Teams that need flexible workspace',

    {

      name: 'Stripe',
      category: 'Payments',
      pricing: '2.9% + 30¢ per transaction',
      rating: 4.9,
      users: '1M+',

        'Global reach',
        'Excellent docs',
        'Reliable',
      ],

        'Higher fees than some alternatives',
        'Complex for beginners',
        'Strict requirements',
      ],
      website: 'https://stripe.com',

        'Can get expensive',
        'Complex for small teams',
        'Limited customization',
      ],
      website: 'https://hubspot.com',

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
      website: 'https://chat.openai.com',
      icon: <Brain className="w-6 h-6" />,
      color: 'text - green - 400';
    }
    {
      name: 'Midjourney',
      category: 'AI Art',
      pricing: '$10 - $30 / month',
      rating: 4.7,
      users: '1M+',
      website: 'https://midjourney.com',
      icon: <Zap className="w-6 h-6" />,
      color: 'text - purple - 400';
    }
    {
      name: 'Jasper',
      category: 'AI Writing',
      pricing: '$39 - $125 / month',
      rating: 4.6,
      users: '100K+',
      website: 'https://jasper.ai',
      icon: <Brain className="w-6 h-6" />,
      color: 'text - blue - 400';
    }
    // SaaS Tools;
    {
      name: 'Zapier',
      category: 'Automation',
      pricing: 'Free - $19.99 / month',
      rating: 4.8,
      users: '2M+',
      name: 'Notion',
      category: 'Productivity',
      pricing: 'Free - $8 / month',
      rating: 4.7,
      users: '20M+',
      website: 'https://stripe.com',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'text - blue - 400';
    }
    // Startup Tools;
    {
      name: 'HubSpot',
      category: 'Marketing & Sales',
      pricing: 'Free - $45 / month',
      rating: 4.7,
      users: '135K+',
      website: 'https://hubspot.com',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'text - orange - 400';
    }
    {
      name: 'Mailchimp',
      category: 'Email Marketing',
      pricing: 'Free - $59 / month',
      rating: 4.5,
      users: '12M+',
      website: 'https://mailchimp.com',
      icon: <Users className="w-6 h-6" />,
      color: 'text - yellow - 400';
    }
    {
      name: 'Calendly',
      category: 'Productivity',
      pricing: 'Free - $12 / month',
      rating: 4.8,
      users: '10M+',
  const sortedTools = [...filteredTools].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'users':

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
      color: 'text-green-400'
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
      color: 'text-purple-400'
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
      color: 'text-blue-400'
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
      color: 'text-orange-400'
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
      color: 'text-gray-400'
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
      color: 'text-blue-400'
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
      color: 'text-orange-400'
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
      color: 'text-yellow-400'
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

              <Button
                href='#comparison'
                size='lg'
                className='animate-scale-in shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40'
              <Button
                href='/contact'
                variant='outline'
                size='lg'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              >
                Get Expert Advice
              </Button>
            </div>
          </div>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

=======
          {/* Stats */}
                {allTools.length}+
              </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <input
                type="text"
                placeholder="Search tools, categories, or use cases..."
                value={searchTerm}
            {/* Category Filter */}
            <div className='flex flex-wrap gap-2'>;
              {categories && categories.map(category => (            <div className="flex flex-wrap gap-2">;
              {categories && categories.map((category) => (;
                <button

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
              />
            </div>

            {/* Category Filter */}

                <button

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
            {/* Sort */}
            <div className='flex items-center space-x-2'>;
              <Filter className='w-5 h-5 text-gray-400' />;
            </div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

            {/* Sort */}
            <div className='flex items-center space-x-2'>
              <Filter className='w-5 h-5 text-gray-400' />

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Tool</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Category</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Pricing</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Rating</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Users</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Best For</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Actions</th>
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

                ))}
=======

            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No tools found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or category filter.</p>
=======
=======
                ))}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          )}
        </div>
      </section>

<<<<<<< HEAD


            </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          )}
        </div>
      </section>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Detailed Comparison Cards */}
      <section className='py-24 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>

              Detailed Analysis
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Deep dive into each tool's pros, cons, and use cases to make the
              best decision for your business.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {sortedTools.slice(0, 6).map((tool, index) => (
<<<<<<< HEAD
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

                          {pro}
                        </li>;
                      ))}

                    <ul className="space-y-1">
                      {tool.cons.slice(0, 3).map((con, conIndex) => (
                        <li key={conIndex} className="text-xs text-gray-400 flex items-start">
                          <span className="w-1 h-1 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0" />

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                          {con}
                        </li>;
                      ))}

                <div className='flex items-center justify-between'>

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
      {/* Detailed Comparison Cards */}
      <section className='py-24 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Deep dive into each tool's pros, cons, and use cases to make the
              best decision for your business.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {sortedTools.slice(0, 6).map((tool, index) => (
          )}
        </div>
      </section>
      {/* Detailed Comparison Cards */}
              <Card
                key={index}
                className='group border border-gray-800 hover:border-purple-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1'
                style={{ animationDelay: `${index * 0 && 0.1}s` }}>;
                <div className='flex items-start space-x-4 mb-4'>;
                  <div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <span
                    className={`text-sm font-medium ${getPricingColor(tool && tool.pricing)}`}>                    {tool && tool.pricing}
                  </span>;
                  <Button
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <div className="flex items-center justify-between">
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                  <span className={`text-sm font-medium ${getPricingColor(tool.pricing)}`}>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <div className='flex items-center justify-between'>
                  <span
                    className={`text-sm font-medium ${getPricingColor(tool.pricing)}`}
                  >                    {tool.pricing}
                  </span>
                  <Button
<<<<<<< HEAD
                    href={tool.website}                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${getPricingColor(tool.pricing)}`}>
                    href={tool.website}

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    {tool.pricing}
                  </span>
                  <Button
                    href={tool.website}

<<<<<<< HEAD
<<<<<<< HEAD
                    size="sm"
                    className="group-hover:border-purple-500 group-hover:text-purple-400"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2" />

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                </div>
              </Card>
            ))}

<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {/* CTA Section */}
      <section className='py-24 bg-gradient-to-r from-purple-600 to-purple-700 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </h2>
          <p className='text-xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed'>
            Our experts can analyze your business needs and recommend the
            perfect combination of tools to accelerate your growth.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            ))}
      {/* CTA Section */}
      <section className='py-24 bg-gradient-to-r from-purple-600 to-purple-700 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0 && 0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>;
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'>;
          </h2>;
          <p className='text-xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed'>;
            Our experts can analyze your business needs and recommend the;
            perfect combination of tools to accelerate your growth.;
          </p>;
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>;
            <Button
              href='/contact'
              variant='secondary'
              size='lg'
            <Button
              href='/saas-marketplace'
              variant='outline'
              size='lg'
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              Explore All Tools;
            </Button>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  );
}
    </>);
}
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
