<<<<<<< HEAD
import Head from 'next/head',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
export default function DocsPage() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
=======
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function DocsPage() {_const _contact = {
    mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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
<<<<<<< HEAD
    {
      title: 'IT & Platform Docs',
      links: [
        { name: 'API Observability', href: '/api-observability' },
        { name: 'Cloud Cost Optimizer', href: '/cloud-cost-optimizer' },
        { name: 'Status Pages & SLO', href: '/status-pages-slo' }]
    }],

  const external = [
    { name: 'OpenAI API pricing', url: 'https://openai.com/api/pricing' },
    { name: 'Anthropic pricing', url: 'https://www.anthropic.com/pricing' },
    { name: 'Pinecone pricing', url: 'https://www.pinecone.io/pricing/' },
    { name: 'Snowflake pricing', url: 'https://www.snowflake.com/pricing/' }],

  const quickLinks = [
    {
      title: 'API Status',
      description: 'Check service availability and performance',
      icon: <CheckCircle className=&quot;w-6 h-6&quot; />,
      href: '/status',
      color: 'text-green-400'
    },
    {
      title: 'SDK Downloads',
      description: 'Get the latest SDKs and client libraries',
      icon: <Download className=&quot;w-6 h-6&quot; />,
      href: '/downloads',
      color: 'text-blue-400'
    },
    {
      title: 'Support Portal',
      description: 'Get help from our technical support team',
      icon: <ExternalLink className=&quot;w-6 h-6&quot; />,
      href: '/support',
      color: 'text-purple-400'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers and users',
      icon: <ExternalLink className=&quot;w-6 h-6&quot; />,
      href: '/community',
      color: 'text-yellow-400'
    }
  ],

  const filteredDocs = documentationItems.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase()),
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory,
    return matchesSearch && matchesCategory
  }),

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400',
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400',
      case 'Advanced': return 'bg-red-500/20 text-red-400',
      default: return 'bg-gray-500/20 text-gray-400'
    }
  },

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  },
=======
    {_title: 'IT & Platform Docs', _links: [
        { name: 'API Observability', _href: '/api-observability'},
        {_name: 'Cloud Cost Optimizer', _href: '/cloud-cost-optimizer'},
        {_name: 'Status Pages & SLO', _href: '/status-pages-slo'}]
    }];

  const _external = [
    {_name: 'OpenAI API pricing', _url: 'https://openai.com/api/pricing'},
    {_name: 'Anthropic pricing', _url: 'https://www.anthropic.com/pricing'},
    {_name: 'Pinecone pricing', _url: 'https://www.pinecone.io/pricing/'},
    {_name: 'Snowflake pricing', _url: 'https://www.snowflake.com/pricing/'}];

  const _quickLinks = [
    {_title: 'API Status', _description: 'Check service availability and performance', _icon: <CheckCircle className="w-6 h-6" />, _href: '/status', _color: 'text-green-400'},
    {_title: 'SDK Downloads', _description: 'Get the latest SDKs and client libraries', _icon: <Download className="w-6 h-6" />, _href: '/downloads', _color: 'text-blue-400'},
    {_title: 'Support Portal', _description: 'Get help from our technical support team', _icon: <ExternalLink className="w-6 h-6" />, _href: '/support', _color: 'text-purple-400'},
    {_title: 'Community Forum', _description: 'Connect with other developers and users', _icon: <ExternalLink className="w-6 h-6" />, _href: '/community', _color: 'text-yellow-400'}
  ];

  const _filteredDocs = documentationItems.filter(doc => {_const _matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const _matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;});

  const _getDifficultyColor = (_difficulty: string) => {_switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';}
  };

  const _formatDate = (_dateString: string) => {_return new Date(dateString).toLocaleDateString('en-US', _{
      year: 'numeric', _month: 'short', _day: 'numeric'});
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<UltraAdvancedFuturisticBackground>
      <Head>
        <title>Documentation | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Guides and references for Zion Tech Group AI, platform, and IT services.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/docs&quot; />
      </Head>

      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-6xl mx-auto space-y-10&quot;>
          <div className=&quot;text-center&quot;>
            <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>Documentation</h1>
            <p className=&quot;text-slate-300 mt-4&quot;>Quick links, references, and integration guides for our services.</p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
            {sections.map((s) => (
              <Card key={s.title} className=&quot;p-6 bg-black/40 border border-gray-700/50&quot;>
                <h2 className=&quot;text-xl font-semibold mb-4 text-white&quot;>{s.title}</h2>
                <ul className=&quot;space-y-2&quot;>
                  {s.links.map((l) => (
                    <li key={l.name}>
                      <a href={l.href} className=&quot;text-cyan-400 hover:underline&quot;>{l.name}</a>
=======
        <meta name="description" content="Guides and references for Zion Tech Group AI, _platform, _and IT services." />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Documentation</h1>
            <p className="text-slate-300 mt-4">Quick links, _references, _and integration guides for our services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {_sections.map((s) => (_<Card key={s.title} className="p-6 bg-black/40 border border-gray-700/50">
                <h2 className="text-xl font-semibold mb-4 text-white">{_s.title}</h2>
                <ul className="space-y-2">
                  {_s.links.map((l) => (
                    <li key={l.name}>
                      <a href={_l.href} className="text-cyan-400 hover:underline">{_l.name}</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

<<<<<<< HEAD
          <Card className=&quot;p-6 bg-black/40 border border-gray-700/50&quot;>
            <h2 className=&quot;text-xl font-semibold mb-4 text-white&quot;>External References</h2>
            <ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300&quot;>
              {external.map((e) => (
                <li key={e.name}><a href={e.url} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-cyan-400 hover:underline&quot;>{e.name}</a></li>
=======
          <Card className="p-6 bg-black/40 border border-gray-700/50">
            <h2 className="text-xl font-semibold mb-4 text-white">External References</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
              {_external.map(_(e) => (
                <li key={e.name}><a href={_e.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{_e.name}</a></li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ))}
            </ul>
          </Card>

<<<<<<< HEAD
          <Card className=&quot;p-6 bg-black/40 border border-gray-700/50&quot;>
            <h2 className=&quot;text-xl font-semibold mb-4 text-white&quot;>Need help?</h2>
            <div className=&quot;flex flex-col sm:flex-row gap-3&quot;>
              <Button href=&quot;/contact&quot; className=&quot;bg-gradient-to-r from-cyan-600 to-blue-600 text-white&quot;>Contact Support</Button>
              <Button href={contact.website} variant=&quot;outline&quot; className=&quot;border-gray-600 text-gray-200&quot;>Visit Website</Button>
              <a className=&quot;text-cyan-400&quot; href={`tel:${contact.mobile.replace(/[^+\\d]/g, '')}`}>{contact.mobile}</a>
              <a className=&quot;text-purple-400&quot; href={`mailto:${contact.email}`}>{contact.email}</a>
=======
          <Card className="p-6 bg-black/40 border border-gray-700/50">
            <h2 className="text-xl font-semibold mb-4 text-white">Need help?</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">Contact Support</Button>
              <Button href={_contact.website} variant="outline" className="border-gray-600 text-gray-200">Visit Website</Button>
              <a className="text-cyan-400" href={_`tel:${contact.mobile.replace(/[^+\\d]/g, _'')}`}>{_contact.mobile}</a>
              <a className="text-purple-400" href={_`mailto:${contact.email}`}>{_contact.email}</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </Card>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
}
