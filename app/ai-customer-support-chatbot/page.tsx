import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
'use client';

export default function AICustomerSupportChatb o t() {
  constfeatures= [
    {
      icon: <BrainclassName="w-6h-6text-cyan-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced AI understan d s context, intent, and provides human-likeresponses';
    },
    {
      icon: <ClockclassName="w-6h-6text-purple-400" />,
      title: '24/7 Availabili t y',
      description: 'Provide instant support around the clock without additional staffing costs';
    },
    {
      icon: <TargetclassName="w-6h-6text-yellow-400" />,
      title: 'Intellige n t Routing',
      description: 'Automatical l y route complex queries to the right human agents when needed';
    },
    {
      icon: <BarChart3className="w-6h-6text-green-400" />,
      title: 'Analytics & Insights',
      description: 'Track customer satisfacti o n, response times, and identify improveme n t opportuniti e s';
    }
  ]

  const chatbotFeatures= [
    {
      category: 'Conversati o n Management',
      items: ['Multi-languageSupport', 'Context Awareness', 'Sentiment Analysis', 'Conversati o n History', 'Quick Responses', 'Escalation Rules']
    },
    {
      category: 'Integrati o n',
      items: ['Website Widget', 'Mobile Apps', 'Social Media', 'Email Integrati o n', 'CRM Systems', 'Help Desk Tools']
    },
    {
      category: 'Customizati o n',
      items: ['Brand Styling', 'Custom Responses', 'Knowledge Base', 'FAQ Management', 'Personali t y Settings', 'Response Templates']
    },
    {
      category: 'Analytics',
      items: ['Response Metrics', 'Customer Satisfacti o n', 'Resolution Rates', 'Popular Queries', 'Performan c e Reports', 'ROI Tracking']
    }
  ]

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversatio n s/month',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic analytics',
        'Website integrati o n';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 conversatio n s/month',
        'Advanced AI features',
        'Custom branding',
        'Priority support',
        'Advanced analytics',
        'Multi-channelsupport',
        'API access';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited conversatio n s',
        'Custom AI training',
        'White-labelsolution',
        'Dedicated support',
        'Custom integratio n s',
        'Advanced analytics',
        'SLA guarantee';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'Lisa Chen',
      company: 'E-commerceStore',
      content: 'AI Customer Support Chatbot reduced our support tickets by 60% and improved customer satisfacti o n by 40%.',
      rating: 5;
    },
    {
      name: 'John Martinez',
      company: 'SaaS Company',
      content: 'The chatbot handles 80% of our support queries automatical l y. Our team can focus on complex issues.',
      rating: 5;
    },
    {
      name: 'Sarah Johnson',
      company: 'Service Provider',
      content: '24/7 support without additional costs. Our customers love the instant responses and availabili t y.',
      rating: 5;
    }
  ]

<<<<<<< HEAD;
=======;
>>>>>>> cursor/website-audit-and-update-with-deployment-6024;
>>>>>>> cursor/fix-errors-and-merge-to-main-0a63;
return (
    <>
      <Helmet></Helmet>
        <title />AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI chatbot, customer support, AI solutions, IT services, Zion Tech Group" />
        <metaproperty="og:title" content="AI Customer Support Chatbot - Zion Tech Group" /  />
        <metaproperty="og:description" content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs." /  />
        <metaproperty="og:type" content="website" /  />
        <metaproperty="og:url" content="https://ziontechgro u p.com/ai-customer-support-chatbot" /  />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h1 className="w-5h-5ml-2" />
              <span className="w-5h-5ml-2" />AI Customer Support Chatbot;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs.;
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Link
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105shadow-lghover:shadow-cyan-500/25flexitems-centerjustify-centergroup"
        >
          Get Started;
                
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
              <Linkto="/contact" className="borderborder-cyan-500text-cyan-400px-8py-4rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10transition-allduration-300transformhover:scale-105">Learn More;
              </Link>
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Ready to Get Started?;
              </h2>
              <p className="w-5h-5ml-2">Contact us to learn more about our solutions and how we can help your business.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105shadow-lghover:shadow-cyan-500/25">Contact Us
                </Link>
                <Linkto="/services" className="borderborder-cyan-500text-cyan-400px-8py-4rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10transition-allduration-300transformhover:scale-105">View All Services;
                </Link>
              </div>
          </div>
        </section>
      </div>
}
