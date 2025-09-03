import {}
  Check, ;
  Star, ;
  Zap, ;
  Brain, ;
  Cloud, ;
  Shield, ;
  Rocket, ;
  ArrowRight,;
  Users,;
  Clock,;
  MessageSquare,;
  Phone,;
  Mail,;
  Calendar''''} from 'lucide-react';
';
      popular: false,'';
      icon: Rocket,;''';
      color: 'from-orange-500 to-red-500'}
  ];

  ';
'';
  const savings: unknown = billingCycle === 'annual' ? 20 : 0;interface PricingTier {}
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  color: string;
  icon: unknown;
  cta: string;
  ctaLink: string}

const pricingTiers: PricingTier[] = [];
  {}
';
'';
''';
    name: 'Starter',''';
    description: 'Perfect for small businesses and startups',''';
    price: '$299',''';
    period: '/month',''';
    features: ['''';
      'AI-powered business intelligence dashboard',Basic cloud infrastructure setup',Security monitoring & alerts',Email support',Monthly performance reports',Up to 5 team members',Basic API access',Standard compliance features',AI Workflow Orchestrator (Basic),AI Data Governance (Foundation)'';
    ],''';
    color: 'from-blue-500 to-cyan-500','';
    icon: Zap,''';
    cta: 'Get Started',''';
    ctaLink: '/contact'},;
  {}
';
'';
''';
    name: 'Professional',''';
    description: 'Ideal for growing businesses and teams',''';
    price: '$799',''';
    period: '/month','';
    popular: true,''';
    features: ['''';
      'Everything in Starter, plus:',Advanced AI workflow automation',Custom cloud architecture design',Advanced cybersecurity features',Priority support (4-hour response),Up to 25 team members',Custom integrations',Advanced analytics & reporting',Compliance automation tools',Monthly strategy sessions',AI Workflow Orchestrator (Professional),AI Data Governance (Enterprise),AI Customer Experience Analytics (Professional)'';
    ],''';
    color: 'from-zion-cyan to-zion-purple','';
    icon: Brain,''';
    cta: 'Start Free Trial',''';
    ctaLink: '/contact'},;
  {}
';
'';
''';
    name: 'Enterprise',''';
    description: 'For large organizations with complex needs',''';
    price: 'Custom',''';
    period: '',''';
    features: ['''';
      'Everything in Professional, plus:',Custom AI model development',Multi-cloud architecture',Advanced threat intelligence',24/7 dedicated support',Unlimited team members',Custom software development',Advanced data governance',Compliance certification support',Quarterly business reviews',Dedicated success manager''';
    ],''';
    color: 'from-purple-500 to-pink-500','';
    icon: Building,''';
    cta: 'Contact Sales',''';
    ctaLink: '/contact'}
];

  return();
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
      <div>Broken JSX</div>
        />;
      ";
      {/* Hero Section */}"";
      <section className="relative py-20 overflow-hidden">"";
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>"";
        <div className="container mx-auto px-6 relative z-10">;
          <div>Broken JSX</div>
            className="text-center"">"";
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">"";
              Simple, <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Transparent</span> Pricing";
            </h1>"";
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">;
              Choose the perfect plan for your business. All plans include our core features;
              with flexible options to scale as you grow.;
            </p>;
            <div className="grid md:grid-cols-2 gap-8 mb-12">;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Professional Solutions</li>;
                  <li>• Expert Implementation</li>;
                  <li>• 24/7 Support</li>;
                  <li>• Custom Development</li>;
                </ul>;
              </div>;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Industry Expertise</li>;
                  <li>• Proven Results</li>;
                  <li>• Scalable Solutions</li>;
                  <li>• Competitive Pricing</li>;
                </ul>;
              </div>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
                View Pricing;
              </Link>;
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">;
                Contact Us;
              </Link>;
            </div>;
    </>;
  );,
}
export {};