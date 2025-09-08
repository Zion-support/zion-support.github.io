

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

export default function DocsPage() {
export default function DocsPage() {
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
        { name: 'AI Guardrails', href: '/ai-guardrails' },
        { name: 'AI Evals', href: '/ai-evals' },
        { name: 'Agentic RAG', href: '/agentic-rag' }]
    };

    {
      title: 'IT & Platform Docs'
      links: [

        { name: 'API Observability', href: '/api-observability' },
        { name: 'Cloud Cost Optimizer', href: '/cloud-cost-optimizer' },
        { name: 'Status Pages & SLO', href: '/status-pages-slo' }]
    }];

  const external = [
    { name: 'OpenAI API pricing', url: 'https://openai.com/api/pricing' },
    { name: 'Anthropic pricing', url: 'https://www.anthropic.com/pricing' },
    { name: 'Pinecone pricing', url: 'https://www.pinecone.io/pricing/' },
    { name: 'Snowflake pricing', url: 'https://www.snowflake.com/pricing/' }],
  const quickLinks = [
    {
      title: 'API Status',
      description: 'Check service availability and performance',
      icon: <CheckCircle className="w-6 h-6" />,
      href: '/status',

    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup.com',  };    website: 'https://ziontechgroup.com'
  };

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


      title: 'Community Forum',
      description: 'Connect with other developers and users',
      icon: <ExternalLink className='w-6 h-6' />,
      href: '/community',
      color: 'text-yellow-400',
    },


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


export default function DocsPage() {;
  const contact = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com',  };    website: 'https://ziontechgroup && ziontechgroup.com';
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400'
    }
  };

  const sections = [;
    {;
      title: 'Getting Started',;
      links: [;
        { name: 'Overview', href: '/enhanced-services-showcase' },;
        { name: 'Pricing & Market Benchmarks', href: '/market-pricing' },;
        { name: 'Contact Sales', href: '/contact' },;
      ],;
    },    {        { name: 'Contact Sales', href: '/contact' }]
};
    {;
      title: 'AI Services Docs',;
      links: [;
        { name: 'AI Guardrails', href: '/ai-guardrails' },;
        { name: 'AI Evals', href: '/ai-evals' },;
        { name: 'Agentic RAG', href: '/agentic-rag' },;
      ],;
    },    {        { name: 'Agentic RAG', href: '/agentic-rag' }]
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
      title: 'API Status',,
  description: 'Check service availability and performance',;
      icon: <CheckCircle className='w-6 h-6' />,;
      color: 'text-green-400',;
    },;
    {;
      title: 'SDK Downloads',,
  description: 'Get the latest SDKs and client libraries',;
      icon: <Download className='w-6 h-6' />,;
      href: '/downloads',;
      color: 'text-blue-400',;
    },;
    {;
      title: 'Support Portal',,
  description: 'Get help from our technical support team',;
      icon: <ExternalLink className='w-6 h-6' />,;
      href: '/support',;
      color: 'text-purple-400',;
    },;
    {;
      title: 'Community Forum',,
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
      case 'Beginner':
        return 'bg-green-500/20 text-green-400';
                      </a>                    </li>

                    </li>


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

                  ))}
                </ul>
              </Card>
            ))}
          </div>


  );
}
            </div>
          </Card>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
