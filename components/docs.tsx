<<<<<<< HEAD


  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',

        { name: 'Overview', href: '/enhanced-services-showcase' },
        { name: 'Pricing & Market Benchmarks', href: '/market-pricing' },
        { name: 'Contact Sales', href: '/contact' }]
    };

    {
      title: 'AI Services Docs'
      links: [

=======
import Head from 'next / head';
import UltraAdvancedFuturisticBackground from '../components / ui / UltraAdvancedFuturisticBackground';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
import { Star } from 'lucide-react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';


import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function DocsPage() {
export default function DocsPage() {
export default /**
 * DocsPage - Function description
 */
function DocsPage() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
{ name: 'Overview', href: '/enhanced-services-showcase' },
        { name: 'Pricing & Market Benchmarks', href: '/market-pricing' },
        { name: 'Contact Sales', href: '/contact' }]
    };
    {
      title: 'AI Services Docs'
      links: [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        { name: 'AI Guardrails', href: '/ai-guardrails' },
        { name: 'AI Evals', href: '/ai-evals' },
        { name: 'Agentic RAG', href: '/agentic-rag' }]
    };
<<<<<<< HEAD

    {
      title: 'IT & Platform Docs'
      links: [

        { name: 'API Observability', href: '/api-observability' },
        { name: 'Cloud Cost Optimizer', href: '/cloud-cost-optimizer' },
        { name: 'Status Pages & SLO', href: '/status-pages-slo' }]
    }];

=======
    {
      title: 'IT & Platform Docs'

  const _sections = [
    {_title: 'Getting Started', _links: [
        { name: 'Overview', _href: '/enhanced-services-showcase'},
        {_name: 'Pricing & Market Benchmarks', _href: '/market-pricing'},
        {_name: 'Contact Sales', _href: '/contact'}]
    },
    {_title: 'AI Services Docs', _links: [
        { name: 'AI Guardrails', _href: '/ai-guardrails'},
        {_name: 'AI Evals', _href: '/ai-evals'},
        {_name: 'Agentic RAG', _href: '/agentic-rag'}]
    },
    {
      title: 'IT & Platform Docs',

      links: [
        { name: 'API Observability', href: '/api-observability' },
        { name: 'Cloud Cost Optimizer', href: '/cloud-cost-optimizer' },
        { name: 'Status Pages & SLO', href: '/status-pages-slo' }]
}];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const external = [
    { name: 'OpenAI API pricing', url: 'https://openai.com/api/pricing' },
    { name: 'Anthropic pricing', url: 'https://www.anthropic.com/pricing' },
    { name: 'Pinecone pricing', url: 'https://www.pinecone.io/pricing/' },
    { name: 'Snowflake pricing', url: 'https://www.snowflake.com/pricing/' }],
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const quickLinks = [
    {
      title: 'API Status',
      description: 'Check service availability and performance',
<<<<<<< HEAD
      icon: <CheckCircle className="w-6 h-6" />,
      href: '/status',

=======
icon: <CheckCircle className="w-6 h-6" />,
      href: '/status',
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup.com',  };    website: 'https://ziontechgroup.com'
  };

  const contact = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com',  };    website: 'https://ziontechgroup.com'
  }
  const sections = [
    {
      title: 'Getting Started'
      links: [
        { name: 'Overview', href: '/enhanced-services-showcase' }
        { name: 'Pricing & Market Benchmarks', href: '/market-pricing' }
        { name: 'Contact Sales', href: '/contact' }
      ]
    },    {        { name: 'Contact Sales', href: '/contact' }]
    }
    {
      title: 'AI Services Docs'
      links: [
        { name: 'AI Guardrails', href: '/ai-guardrails' }
        { name: 'AI Evals', href: '/ai-evals' }
        { name: 'Agentic RAG', href: '/agentic-rag' }
      ]
    },    {        { name: 'Agentic RAG', href: '/agentic-rag' }]
    }
    {
      title: 'IT & Platform Docs'
      links: [
        { name: 'API Observability', href: '/api-observability' }
        { name: 'Cloud Cost Optimizer', href: '/cloud-cost-optimizer' }
        { name: 'Status Pages & SLO', href: '/status-pages-slo' }
      ]
    }
  ];        { name: 'Status Pages & SLO', href: '/status-pages-slo' }]
    }];
  const external = [
    { name: 'OpenAI API pricing', url: 'https://openai.com/api/pricing' }
    { name: 'Anthropic pricing', url: 'https://www.anthropic.com/pricing' }
    { name: 'Pinecone pricing', url: 'https://www.pinecone.io/pricing/' }
    { name: 'Snowflake pricing', url: 'https://www.snowflake.com/pricing/' }
  ];    { name: 'Snowflake pricing', url: 'https://www.snowflake.com/pricing/' }]
  const quickLinks = [
    {
      title: 'API Status'
      description: 'Check service availability and performance'
      icon: <CheckCircle className='w-6 h-6' />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      color: 'text-green-400'
    }
    {
      title: 'SDK Downloads'
      description: 'Get the latest SDKs and client libraries'
      icon: <Download className='w-6 h-6' />
      href: '/downloads'
      color: 'text-blue-400'
    }
    {
      title: 'Support Portal'
      description: 'Get help from our technical support team'
      icon: <ExternalLink className='w-6 h-6' />
      href: '/support'
      color: 'text-purple-400'
    }
    {

<<<<<<< HEAD

=======
      title: 'Community Forum'
      description: 'Connect with other developers and users'
      icon: <ExternalLink className='w-6 h-6' />
      href: '/community'
      color: 'text-yellow-400'
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      title: 'Community Forum',
      description: 'Connect with other developers and users',
      icon: <ExternalLink className='w-6 h-6' />,
      href: '/community',
      color: 'text-yellow-400',
    },
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  ];
  const filteredDocs = documentationItems.filter(doc => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) |
      doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' |doc.category === selectedCategory;
    return matchesSearch && matchesCategory;  });
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) |
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' |doc.category === selectedCategory;
    return matchesSearch && matchesCategory
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default function DocsPage() {;
  const contact = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com',  };    website: 'https://ziontechgroup && ziontechgroup.com';
=======
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400'
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  };

  const sections = [;
    {;
      title: 'Getting Started',;
      links: [;
        { name: 'Overview', href: '/enhanced-services-showcase' },;
        { name: 'Pricing & Market Benchmarks', href: '/market-pricing' },;
        { name: 'Contact Sales', href: '/contact' },;
      ],;
    },    {        { name: 'Contact Sales', href: '/contact' }];
    };
    {;
      title: 'AI Services Docs',;
      links: [;
        { name: 'AI Guardrails', href: '/ai-guardrails' },;
        { name: 'AI Evals', href: '/ai-evals' },;
        { name: 'Agentic RAG', href: '/agentic-rag' },;
      ],;
    },    {        { name: 'Agentic RAG', href: '/agentic-rag' }];
    };
    {;
      title: 'IT & Platform Docs',;
      links: [;
        { name: 'API Observability', href: '/api-observability' },;
        { name: 'Cloud Cost Optimizer', href: '/cloud-cost-optimizer' },;
        { name: 'Status Pages & SLO', href: '/status-pages-slo' },;
      ],;
    },;
  ];        { name: 'Status Pages & SLO', href: '/status-pages-slo' }];
    }];

  const external = [;
    { name: 'OpenAI API pricing', url: 'https://openai && openai.com/api/pricing' },;
    { name: 'Anthropic pricing', url: 'https://www && www.anthropic.com/pricing' },;
    { name: 'Pinecone pricing', url: 'https://www && www.pinecone.io/pricing/' },;
    { name: 'Snowflake pricing', url: 'https://www && www.snowflake.com/pricing/' },;
  ];    { name: 'Snowflake pricing', url: 'https://www && www.snowflake.com/pricing/' }],;
  const quickLinks = [;
    {;
      title: 'API Status',;
      description: 'Check service availability and performance',;
      icon: <CheckCircle className='w-6 h-6' />,;
      color: 'text-green-400',;
    },;
    {;
      title: 'SDK Downloads',;
      description: 'Get the latest SDKs and client libraries',;
      icon: <Download className='w-6 h-6' />,;
      href: '/downloads',;
      color: 'text-blue-400',;
    },;
    {;
      title: 'Support Portal',;
      description: 'Get help from our technical support team',;
      icon: <ExternalLink className='w-6 h-6' />,;
      href: '/support',;
      color: 'text-purple-400',;
    },;
    {;
      title: 'Community Forum',;
      description: 'Connect with other developers and users',;
      icon: <ExternalLink className='w-6 h-6' />,;
      href: '/community',;
      color: 'text-yellow-400',;
    },;
  ];

  const filteredDocs = documentationItems && documentationItems.filter(doc => {;
    const matchesSearch =;
      doc && doc.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      doc && doc.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
    const matchesCategory =;
      selectedCategory === 'all' || doc && doc.category === selectedCategory;
    return matchesSearch && matchesCategory;  });

  const getDifficultyColor = (difficulty: string) => {;
    switch (difficulty) {    const matchesSearch = doc && doc.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         doc && doc.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc && doc.category === selectedCategory;
    return matchesSearch && matchesCategory;

  const getDifficultyColor = (difficulty: string) => {;
    switch (difficulty) {;
      case 'Beginner':;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      case 'Beginner':
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        return 'bg-green-500/20 text-green-400';
      case 'Intermediate':;
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced':;
        return 'bg-red-500/20 text-red-400';
      default:;
        return 'bg-gray-500/20 text-gray-400';    }      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
<<<<<<< HEAD


  };
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {

      year: 'numeric',
      month: 'short',

      day: 'numeric'
    });  };      day: 'numeric'
    })

      case 'Advanced': return 'bg-red-500/20 text-red-400',;
      default: return 'bg-gray-500/20 text-gray-400';

<<<<<<< HEAD
  };

  const formatDate = (dateString: string) => {;
    return new Date(dateString).toLocaleDateString('en-US', {;
      year: 'numeric',;
      month: 'short',;
      day: 'numeric',;
    });  };      day: 'numeric';
    });
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (

=======
      case 'Advanced': return 'bg-red-500/20 text-red-400'
      default: return 'bg-gray-500/20 text-gray-400'
  }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric'
      month: 'short'
      day: 'numeric'
    });  };      day: 'numeric'
    })
  }

  };

  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        />;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/docs' />;
      </Head>;

      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>;
        <div className='max-w-6xl mx-auto space-y-10'>;
          <div className='text-center'>;
            <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
              Documentation;
            </h1>;
            <p className='text-slate-300 mt-4'>;
              Quick links, references, and integration guides for our services.;
            </p>;
          </div>;

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
            {sections && sections.map(s => (;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <Card
                key={s && s.title}
                className='p-6 bg-black/40 border border-gray-700/50'>;
                <h2 className='text-xl font-semibold mb-4 text-white'>;
                  {s && s.title}
                </h2>;
                <ul className='space-y-2'>;
                  {s && s.links.map(l => (;
                    <li key={l && l.name}>;
                      <a
<<<<<<< HEAD


=======

=======
    website: 'https://ziontechgroup.com',  }    website: 'https://ziontechgroup.com';
  }
;
  const sections = [;
    {
      title: 'Getting Started',
      links: [;
        { name: 'Overview', href: '/enhanced - services - showcase' },
        { name: 'Pricing & Market Benchmarks', href: '/market - pricing' },
        { name: 'Contact Sales', href: '/contact' },
      ],
    },    {        { name: 'Contact Sales', href: '/contact' }];
    }
    {
      title: 'AI Services Docs',
      links: [;
        { name: 'AI Guardrails', href: '/ai - guardrails' },
        { name: 'AI Evals', href: '/ai - evals' },
        { name: 'Agentic RAG', href: '/agentic - rag' },
      ],
    },    {        { name: 'Agentic RAG', href: '/agentic - rag' }];
    }
    {
      title: 'IT & Platform Docs',
      links: [;
        { name: 'API Observability', href: '/api - observability' },
        { name: 'Cloud Cost Optimizer', href: '/cloud - cost - optimizer' },
        { name: 'Status Pages & SLO', href: '/status - pages - slo' },
      ],
    },
  ];        { name: 'Status Pages & SLO', href: '/status - pages - slo' }];
    }];
;
  const external = [;
    { name: 'OpenAI API pricing', url: 'https://openai.com / api / pricing' },
    { name: 'Anthropic pricing', url: 'https://www.anthropic.com / pricing' },
    { name: 'Pinecone pricing', url: 'https://www.pinecone.io / pricing/' },
    { name: 'Snowflake pricing', url: 'https://www.snowflake.com / pricing/' },
  ];    { name: 'Snowflake pricing', url: 'https://www.snowflake.com / pricing/' }],
  const quick_links = [;
    {
      title: 'API Status',
      description: 'Check service availability and performance',
      icon: <CheckCircle className='w - 6 h - 6' />,
      color: 'text - green - 400',
    },
    {
      title: 'SDK Downloads',
      description: 'Get the latest SDKs and client libraries',
icon: <Download className='w - 6 h - 6' />,
      href: '/downloads',
      color: 'text - blue - 400',
    },
    {
      title: 'Support Portal',
      description: 'Get help from our technical support team',
icon: <ExternalLink className='w - 6 h - 6' />,
      href: '/support',
      color: 'text - purple - 400',
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers and users',
icon: <ExternalLink className='w - 6 h - 6' />,
      href: '/community',
      color: 'text - yellow - 400',
    },
  ];
;
  const filtered_docs = documentation_items.filter (doc => {
    const matches_search =;
      doc.title.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      doc.description.toLowerCase ().includes (search_term.toLowerCase ());
    const matches_category =;
      selected_category === 'all' || doc.category === selected_category;
    return matches_search && matches_category;  });
;
  const getDifficultyColor = (difficulty: string) =>: any {
    switch (difficulty) {    const matches_search = doc.title.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        doc.description.toLowerCase ().includes (search_term.toLowerCase ());
    const matches_category = selected_category === 'all' || doc.category === selected_category;
    return matches_search && matches_category;
  const getDifficultyColor = (difficulty: string) =>: any {
    switch (difficulty) {
      case 'Beginner':;
        return 'bg - green - 500 / 20 text - green - 400';
      case 'Intermediate':;
        return 'bg - yellow - 500 / 20 text - yellow - 400';
      case 'Advanced':;
        return 'bg - red - 500 / 20 text - red - 400';
      default:;
        return 'bg - gray - 500 / 20 text - gray - 400';    }      case 'Beginner': return 'bg - green - 500 / 20 text - green - 400';
      case 'Intermediate': return 'bg - yellow - 500 / 20 text - yellow - 400';
      case 'Advanced': return 'bg - red - 500 / 20 text - red - 400',
      default: return 'bg - gray - 500 / 20 text - gray - 400';
  }
;
  const format_date = (date_string: string) =>: any {
    return new Date (date_string).toLocaleDateString ('en - US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });  }      day: 'numeric';
    });
  }
;
  return (
    <UltraAdvancedFuturisticBackground>;
      <Head>;
        <title > Documentation | Zion Tech Group</title>;
        <meta;
          name='description';
          content='Guides and references for Zion Tech Group AI, platform, and IT services.';
        />;
        <link rel='canonical' href='https://ziontechgroup.com / docs' />;
      </Head>;
      <div className='min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8'>;
        <div className='max - w-6xl mx - auto space - y-10'>;
          <div className='text - center'>;
            <h1 className='text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
              Documentation;
            </h1>;
            <p className='text - slate - 300 mt - 4'>;
              Quick links, references, and integration guides for our services.;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
            {sections.map (string => (
              <Card;
                key={s.title}
                className='p - 6 bg - black / 40 border border - gray - 700 / 50';
              >;
                <h2 className='text - xl font - semibold mb - 4 text - white'>;
                  {s.title}
                </h2>;
                <ul className='space - y-2'>;
                  {s.links.map (l => (
                    <li key={l.name}>;
                      <a;
                        href={l.href}
                        className='text-cyan-400 hover:underline'
                      >
                        {l.name}



                      </a>                    </li>

                    </li>


                  ))}
                </ul>;
              </Card>;
            ))}

          </div>;

    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Documentation | Zion Tech Group</title>
        <meta name="description" content="Guides and references for Zion Tech Group AI, platform, and IT services." />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
      </Head>
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto space-y-10'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Documentation
            </h1>
            <p className='text-slate-300 mt-4'>
              Quick links, references, and integration guides for our services.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {sections.map(s => (
              <Card
                key={s.title}
                className='p-6 bg-black/40 border border-gray-700/50'
              >
                <h2 className='text-xl font-semibold mb-4 text-white'>
                  {s.title}
                </h2>
                <ul className='space-y-2'>
                  {s.links.map(l => (
                    <li key={l.name}>
                      <a
                        href={l.href}
                        className='text-cyan-400 hover:underline'
                      >
                        {l.name}
                      </a>                    </li>      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Documentation</h1>
            <p className="text-slate-300 mt-4">Quick links, references, and integration guides for our services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((s) => (
              <Card key={s.title} className="p-6 bg-black/40 border border-gray-700/50">
                <h2 className="text-xl font-semibold mb-4 text-white">{s.title}</h2>
                <ul className="space-y-2">
                  {s.links.map((l) => (
                    <li key={l.name}>
                      <a href={l.href} className="text-cyan-400 hover:underline">{l.name}</a>
                    </li>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      </a>                    </li>

                    </li>

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  ))}
                </ul>;
              </Card>;
            ))}

          </div>;

          <Card className='p-6 bg-black/40 border border-gray-700/50'>;
            <h2 className='text-xl font-semibold mb-4 text-white'>;
              External References;
            </h2>;
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300'>;
              {external && external.map(e => (;
                <li key={e && e.name}>;

=======
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <Card className='p-6 bg-black/40 border border-gray-700/50'>
            <h2 className='text-xl font-semibold mb-4 text-white'>
              External References
            </h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300'>
              {external.map(e => (
                <li key={e.name}>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  <a
                    href={e && e.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-cyan-400 hover:underline'>;
                    {e && e.name}
                  </a>;
                </li>              ))}
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <Card className="p-6 bg-black/40 border border-gray-700/50">
            <h2 className="text-xl font-semibold mb-4 text-white">External References</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
              {external.map((e) => (
                <li key={e.name}><a href={e.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{e.name}</a></li>

            </ul>;
          </Card>;
          <Card className="p-6 bg-black/40 border border-gray-700/50">;
            <h2 className="text-xl font-semibold mb-4 text-white">External References</h2>;
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">;
              {external && external.map((e) => (;
                <li key={e && e.name}><a href={e && e.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{e && e.name}</a></li>;
            </ul>;
          </Card>;

          <Card className='p-6 bg-black/40 border border-gray-700/50'>;
            <h2 className='text-xl font-semibold mb-4 text-white'>;
              Need help?;
            </h2>;
            <div className='flex flex-col sm:flex-row gap-3'>;
<<<<<<< HEAD

=======
            </ul>
          </Card>
          <Card className='p-6 bg-black/40 border border-gray-700/50'>
            <h2 className='text-xl font-semibold mb-4 text-white'>
              Need help?
            </h2>
            <div className='flex flex-col sm:flex-row gap-3'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <Button
                href='/contact'
                className='bg-gradient-to-r from-cyan-600 to-blue-600 text-white'>;
                Contact Support;
              </Button>;
              <Button
                href={contact && contact.website}
                variant='outline'
                className='border-gray-600 text-gray-200'>;
                Visit Website;
              </Button>;
              <a
                className='text-cyan-400'
                href={`tel:${contact && contact.mobile.replace(/[^+\\d]/g, '')}`}>;
                {contact && contact.mobile}
              </a>;
              <a className='text-purple-400' href={`mailto:${contact && contact.email}`}>;
                {contact && contact.email}
              </a>            </div>          <Card className="p-6 bg-black/40 border border-gray-700/50">;
            <h2 className="text-xl font-semibold mb-4 text-white">Need help?</h2>;
            <div className="flex flex-col sm:flex-row gap-3">;
              <Button href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">Contact Support</Button>;
              <Button href={contact && contact.website} variant="outline" className="border-gray-600 text-gray-200">Visit Website</Button>;
              <a className="text-cyan-400" href={`tel:${contact && contact.mobile.replace(/[^+\\d]/g, '')}`}>{contact && contact.mobile}</a>;
              <a className="text-purple-400" href={`mailto:${contact && contact.email}`}>{contact && contact.email}</a>;
          </Card>;
        </div>;
      </div>;
    </UltraAdvancedFuturisticBackground>;

  );
}
=======
              ))}
            </ul>
          </Card>

          <Card className="p-6 bg-black/40 border border-gray-700/50">
            <h2 className="text-xl font-semibold mb-4 text-white">Need help?</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">Contact Support</Button>
              <Button href={contact.website} variant="outline" className="border-gray-600 text-gray-200">Visit Website</Button>
              <a className="text-cyan-400" href={`tel:${contact.mobile.replace(/[^+\\d]/g, '')}`}>{contact.mobile}</a>
              <a className="text-purple-400" href={`mailto:${contact.email}`}>{contact.email}</a>
<<<<<<< HEAD
            </div>
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </Card>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
<<<<<<< HEAD

  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
                      </a>                    </li>      </Head>;
      <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
        <div className="max - w-6xl mx - auto space - y-10">;
          <div className="text - center">;
            <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">Documentation</h1>;
            <p className="text - slate - 300 mt - 4">Quick links, references, and integration guides for our services.</p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
            {sections.map ((s) => (
              <Card key={s.title} className="p - 6 bg - black / 40 border border - gray - 700 / 50">;
                <h2 className="text - xl font - semibold mb - 4 text - white">{s.title}</h2>;
                <ul className="space - y-2">;
                  {s.links.map ((l) => (
                    <li key={l.name}>;
                      <a href={l.href} className="text - cyan - 400 hover:underline">{l.name}</a>;
                    </li>))}
                </ul>;
              </Card>))}
          </div>;
          <Card className='p - 6 bg - black / 40 border border - gray - 700 / 50'>;
            <h2 className='text - xl font - semibold mb - 4 text - white'>;
              External References;
            </h2>;
            <ul className='grid grid - cols - 1 md:grid - cols - 2 gap - 3 text - slate - 300'>;
              {external.map (e => (
                <li key={e.name}>;
                  <a;
                    href={e.url}
                    target='_blank';
                    rel='noopener noreferrer';
                    className='text - cyan - 400 hover:underline';
                  >;
                    {e.name}
                  </a>;
                </li>              ))}
            </ul>;
          </Card>;
          <Card className="p - 6 bg - black / 40 border border - gray - 700 / 50">;
            <h2 className="text - xl font - semibold mb - 4 text - white">External References</h2>;
            <ul className="grid grid - cols - 1 md:grid - cols - 2 gap - 3 text - slate - 300">;
              {external.map ((e) => (
                <li key={e.name}><a href={e.url} target="_blank" rel="noopener noreferrer" className="text - cyan - 400 hover:underline">{e.name}</a></li>;
            </ul>;
          </Card>;
          <Card className='p - 6 bg - black / 40 border border - gray - 700 / 50'>;
            <h2 className='text - xl font - semibold mb - 4 text - white'>;
              Need help?;
            </h2>;
            <div className='flex flex - col sm:flex - row gap - 3'>;
              <Button;
                href='/contact';
                className='bg - gradient - to - r from - cyan - 600 to - blue - 600 text - white';
              >;
                Contact Support;
              </Button>;
              <Button;
                href={contact.website}
                variant='outline';
                className='border - gray - 600 text - gray - 200';
              >;
                Visit Website;
              </Button>;
              <a;
                className='text - cyan - 400';
                href={`tel:${contact.mobile.replace (/[^+\\d]/g, '')}`}
              >;
                {contact.mobile}
              </a>;
              <a className='text - purple - 400' href={`mailto:${contact.email}`}>;
                {contact.email}
              </a>            </div>          <Card className="p - 6 bg - black / 40 border border - gray - 700 / 50">;
            <h2 className="text - xl font - semibold mb - 4 text - white">Need help?</h2>;
            <div className="flex flex - col sm:flex - row gap - 3">;
              <Button href="/contact" className="bg - gradient - to - r from - cyan - 600 to - blue - 600 text - white">Contact Support</Button>;
              <Button href={contact.website} variant="outline" className="border - gray - 600 text - gray - 200">Visit Website</Button>;
              <a className="text - cyan - 400" href={`tel:${contact.mobile.replace (/[^+\\d]/g, '')}`}>{contact.mobile}</a>;
              <a className="text - purple - 400" href={`mailto:${contact.email}`}>{contact.email}</a>;
          </Card>;
        </div>;
      </div>;
    </UltraAdvancedFuturisticBackground>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

;
}

<<<<<<< HEAD
=======
=======
  );
}
;
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

              ))}
            </ul>
          </Card>

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
