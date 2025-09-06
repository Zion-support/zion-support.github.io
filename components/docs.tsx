import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function DocsPage() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
<<<<<<< HEAD
    website: 'https://ziontechgroup.com',  };
=======
<<<<<<< HEAD
<<<<<<< HEAD
    website: 'https://ziontechgroup.com',
=======
    website: 'https://ziontechgroup.com'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    website: 'https://ziontechgroup.com'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const sections = [
    {
      title: 'Getting Started',
      links: [
        { name: 'Overview', href: '/enhanced-services-showcase' },
        { name: 'Pricing & Market Benchmarks', href: '/market-pricing' },
<<<<<<< HEAD
        { name: 'Contact Sales', href: '/contact' },
      ],
    },    {
=======
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'Contact Sales', href: '/contact' },
      ],
    },
=======
        { name: 'Contact Sales', href: '/contact' }]
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        { name: 'Contact Sales', href: '/contact' }]
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      title: 'AI Services Docs',
      links: [
        { name: 'AI Guardrails', href: '/ai-guardrails' },
        { name: 'AI Evals', href: '/ai-evals' },
<<<<<<< HEAD
        { name: 'Agentic RAG', href: '/agentic-rag' },
      ],
    },    {
=======
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'Agentic RAG', href: '/agentic-rag' },
      ],
    },
=======
        { name: 'Agentic RAG', href: '/agentic-rag' }]
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        { name: 'Agentic RAG', href: '/agentic-rag' }]
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      title: 'IT & Platform Docs',
      links: [
        { name: 'API Observability', href: '/api-observability' },
        { name: 'Cloud Cost Optimizer', href: '/cloud-cost-optimizer' },
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        { name: 'Status Pages & SLO', href: '/status-pages-slo' },
      ],
    },
  ];
<<<<<<< HEAD
=======
=======
        { name: 'Status Pages & SLO', href: '/status-pages-slo' }]
    }];
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        { name: 'Status Pages & SLO', href: '/status-pages-slo' }]
    }];
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const external = [
    { name: 'OpenAI API pricing', url: 'https://openai.com/api/pricing' },
    { name: 'Anthropic pricing', url: 'https://www.anthropic.com/pricing' },
    { name: 'Pinecone pricing', url: 'https://www.pinecone.io/pricing/' },
<<<<<<< HEAD
    { name: 'Snowflake pricing', url: 'https://www.snowflake.com/pricing/' },
  ];
=======
<<<<<<< HEAD
<<<<<<< HEAD
    { name: 'Snowflake pricing', url: 'https://www.snowflake.com/pricing/' },
  ];

=======
    { name: 'Snowflake pricing', url: 'https://www.snowflake.com/pricing/' }],
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    { name: 'Snowflake pricing', url: 'https://www.snowflake.com/pricing/' }],
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const quickLinks = [
    {
      title: 'API Status',
      description: 'Check service availability and performance',
<<<<<<< HEAD
      icon: <CheckCircle className='w-6 h-6' />,
=======
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <CheckCircle className='w-6 h-6' />,
=======
      icon: <CheckCircle className="w-6 h-6" />,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      href: '/status',
      color: 'text-green-400',
    },
    {
      title: 'SDK Downloads',
      description: 'Get the latest SDKs and client libraries',
      icon: <Download className='w-6 h-6' />,
      href: '/downloads',
      color: 'text-blue-400',
    },
    {
      title: 'Support Portal',
      description: 'Get help from our technical support team',
      icon: <ExternalLink className='w-6 h-6' />,
      href: '/support',
      color: 'text-purple-400',
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers and users',
      icon: <ExternalLink className='w-6 h-6' />,
      href: '/community',
      color: 'text-yellow-400',
    },
  ];

  const filteredDocs = documentationItems.filter(doc => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || doc.category === selectedCategory;
<<<<<<< HEAD
    return matchesSearch && matchesCategory;  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
=======
    return matchesSearch && matchesCategory;
=======
      icon: <CheckCircle className="w-6 h-6" />,
      href: '/status',
      color: 'text-green-400'
    };
    {
      title: 'SDK Downloads',
      description: 'Get the latest SDKs and client libraries',
      icon: <Download className="w-6 h-6" />,
      href: '/downloads',
      color: 'text-blue-400'
    };
    {
      title: 'Support Portal',
      description: 'Get help from our technical support team',
      icon: <ExternalLink className="w-6 h-6" />,
      href: '/support',
      color: 'text-purple-400'
    };
    {
      title: 'Community Forum',
      description: 'Connect with other developers and users',
      icon: <ExternalLink className="w-6 h-6" />,
      href: '/community',
      color: 'text-yellow-400'
    }
  ];

  const filteredDocs = documentationItems.filter(doc => {
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      case 'Beginner':
        return 'bg-green-500/20 text-green-400';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced':
        return 'bg-red-500/20 text-red-400';
      default:
<<<<<<< HEAD
        return 'bg-gray-500/20 text-gray-400';    }
=======
        return 'bg-gray-500/20 text-gray-400';
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400'
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
<<<<<<< HEAD
      day: 'numeric',
    });  };
=======
<<<<<<< HEAD
<<<<<<< HEAD
      day: 'numeric',
    });
=======
      day: 'numeric'
    })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      day: 'numeric'
    })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Documentation | Zion Tech Group</title>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <meta
          name='description'
          content='Guides and references for Zion Tech Group AI, platform, and IT services.'
        />
        <link rel='canonical' href='https://ziontechgroup.com/docs' />
<<<<<<< HEAD
=======
=======
        <meta name="description" content="Guides and references for Zion Tech Group AI, platform, and IT services." />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      <a
                        href={l.href}
                        className='text-cyan-400 hover:underline'
                      >
                        {l.name}
<<<<<<< HEAD
                      </a>                    </li>
=======
                      </a>
=======
        <meta name="description" content="Guides and references for Zion Tech Group AI, platform, and IT services." />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
      </Head>

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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <a href={l.href} className="text-cyan-400 hover:underline">{l.name}</a>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </li>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  ))}
                </ul>
              </Card>
            ))}
          </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <Card className='p-6 bg-black/40 border border-gray-700/50'>
            <h2 className='text-xl font-semibold mb-4 text-white'>
              External References
            </h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300'>
              {external.map(e => (
                <li key={e.name}>
                  <a
                    href={e.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-cyan-400 hover:underline'
                  >
                    {e.name}
                  </a>
<<<<<<< HEAD
                </li>              ))}
            </ul>
          </Card>

=======
                </li>
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <Card className="p-6 bg-black/40 border border-gray-700/50">
            <h2 className="text-xl font-semibold mb-4 text-white">External References</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
              {external.map((e) => (
                <li key={e.name}><a href={e.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{e.name}</a></li>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              ))}
            </ul>
          </Card>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <Card className='p-6 bg-black/40 border border-gray-700/50'>
            <h2 className='text-xl font-semibold mb-4 text-white'>
              Need help?
            </h2>
            <div className='flex flex-col sm:flex-row gap-3'>
              <Button
                href='/contact'
                className='bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
              >
                Contact Support
              </Button>
              <Button
                href={contact.website}
                variant='outline'
                className='border-gray-600 text-gray-200'
              >
                Visit Website
              </Button>
              <a
                className='text-cyan-400'
                href={`tel:${contact.mobile.replace(/[^+\\d]/g, '')}`}
              >
                {contact.mobile}
              </a>
              <a className='text-purple-400' href={`mailto:${contact.email}`}>
                {contact.email}
<<<<<<< HEAD
              </a>            </div>
=======
              </a>
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <Card className="p-6 bg-black/40 border border-gray-700/50">
            <h2 className="text-xl font-semibold mb-4 text-white">Need help?</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">Contact Support</Button>
              <Button href={contact.website} variant="outline" className="border-gray-600 text-gray-200">Visit Website</Button>
              <a className="text-cyan-400" href={`tel:${contact.mobile.replace(/[^+\\d]/g, '')}`}>{contact.mobile}</a>
              <a className="text-purple-400" href={`mailto:${contact.email}`}>{contact.email}</a>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </Card>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
