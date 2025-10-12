    }
  ]

  const chatbotTypes = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Customer Support Bot',
      description: 'Handle customer inquiries, provide product information, and resolve common issues.',
      useCases: ['FAQ automation', 'Order tracking', 'Technical support', 'Returns processing'],
      pricing: 'Starting at $300/month'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'Sales Assistant Bot',
      description: 'Qualify leads, provide product recommendations, and guide customers through the sales process.',
      useCases: ['Lead qualification', 'Product recommendations', 'Price inquiries', 'Appointment booking'],
      pricing: 'Starting at $500/month'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Multi-Channel Bot',
      description: 'Deploy across multiple channels including website, social media, and messaging apps.',
      useCases: ['Website chat', 'Facebook Messenger', 'WhatsApp Business', 'Slack integration'],
      pricing: 'Starting at $800/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Enterprise Bot',
      description: 'Advanced AI chatbot with custom training, analytics, and enterprise features.',
      useCases: ['Custom AI training', 'Advanced analytics', 'White-label options', 'API access'],
      pricing: 'Starting at $1,500/month'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$300',
      period: '/month',
      description: 'Perfect for small businesses getting started with chatbots',
      features: [
        'Up to 1,000 conversations/month',
        'Basic NLP capabilities',
        'Website integration',
        'Email support',
        'Basic analytics',
        '1 chatbot'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$800',
      period: '/month',
      description: 'Ideal for growing businesses with higher conversation volumes',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced NLP capabilities',
        'Multi-channel deployment',
        'Priority support',
        'Advanced analytics',
        'CRM integration',
        'Up to 5 chatbots',
        'Custom training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,500',
      period: '/month',
      description: 'For large organizations with complex requirements',
      features: [
        'Unlimited conversations',
        'Premium NLP capabilities',
        'All channels supported',
        '24/7 dedicated support',
        'Custom AI training',
        'White-label options',
        'API access',
        'Unlimited chatbots',
        'Advanced security'
      ],
      popular: false
    }
  ]

  const integrations = [
    { name: 'Salesforce', logo: 'SF' },
    { name: 'HubSpot', logo: 'HS' },
    { name: 'Zendesk', logo: 'ZD' },
    { name: 'Slack', logo: 'SL' },
    { name: 'WhatsApp', logo: 'WA' },
    { name: 'Facebook', logo: 'FB' },
    { name: 'WordPress', logo: 'WP' },
    { name: 'Shopify', logo: 'SP' }
  ]

  const testimonials = [
    {
      name: 'David Martinez',
      company: 'E-commerce Store',
      content: 'Our AI chatbot has handled 80% of customer inquiries automatically, reducing response time from hours to seconds. Customer satisfaction has increased by 40%.',
      rating: 5,
      avatar: 'DM'
    },
    {
      name: 'Lisa Thompson',
      company: 'SaaS Company',
      content: 'The chatbot integration with our CRM has streamlined our lead qualification process. We\'ve seen a 60% increase in qualified leads and 30% improvement in conversion rates.',
      rating: 5,
      avatar: 'LT'
    },
    {
      name: 'James Wilson',
      company: 'Healthcare Provider',
      content: 'The HIPAA-compliant chatbot has improved our patient communication while maintaining security standards. Patient satisfaction scores have increased significantly.',
      rating: 5,
      avatar: 'JW'
    }
  ]

  const stats = [
    { number: '80%', label: 'Inquiries Resolved', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '24/7', label: 'Availability', icon: <Clock className="w-6 h-6" /> },
    { number: '40%', label: 'Cost Reduction', icon: <Zap className="w-6 h-6" /> },
    { number: '95%', label: 'Customer Satisfaction', icon: <Star className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
            </div>
          </div>
        </div>
      </section>
