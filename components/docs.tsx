import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function DocsPage() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const sections = [
    {
      title: 'Getting Started',
      links: [
    },
    {
      title: 'AI Services Docs',
      links: [
    },
    {
      title: 'IT & Platform Docs',
      links: [

  const quickLinks = [
    {
      title: 'API Status',
      description: 'Check service availability and performance',
      icon: <CheckCircle className="w-6 h-6" />,
      href: '/status',
      color: 'text-green-400'
    },
    {
      title: 'SDK Downloads',
      description: 'Get the latest SDKs and client libraries',
      icon: <Download className="w-6 h-6" />,
      href: '/downloads',
      color: 'text-blue-400'
    },
    {
      title: 'Support Portal',
      description: 'Get help from our technical support team',
      icon: <ExternalLink className="w-6 h-6" />,
      href: '/support',
      color: 'text-purple-400'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers and users',
      icon: <ExternalLink className="w-6 h-6" />,
      href: '/community',
      color: 'text-yellow-400'
    }
  ];

  const filteredDocs = documentationItems.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const formatDate = (dateString: string) => {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Documentation | Zion Tech Group</title>
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Documentation</h1>
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
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="p-6 bg-black/40 border border-gray-700/50">
            <h2 className="text-xl font-semibold mb-4 text-white">External References</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
              {external.map((e) => (
                <li key={e.name}><a href={e.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{e.name}</a></li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 bg-black/40 border border-gray-700/50">
            <h2 className="text-xl font-semibold mb-4 text-white">Need help?</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">Contact Support</Button>
              <Button href={contact.website} variant="outline" className="border-gray-600 text-gray-200">Visit Website</Button>
              <a className="text-purple-400" href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </Card>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
