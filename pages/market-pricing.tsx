import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BarChart3, TrendingUp, DollarSign, Target, 
  ArrowRight, CheckCircle, Globe, Brain, Atom,
  Shield, Rocket, Star, Users, Award
} from 'lucide-react';
import Link from 'next/link';

const MarketPricing: React.FC = () => {
  const marketSegments = [
    {
      title: 'Startup & SMB',
      companySize: '1-100 employees',
      revenue: '$1M - $50M',
      pricing: 'Competitive',
      features: [
        'Essential AI tools',
        'Basic security',
        'Cloud migration',
        'Email support'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Mid-Market',
      companySize: '100-1000 employees',
      revenue: '$50M - $500M',
      pricing: 'Market Rate',
      features: [
        'Advanced AI platforms',
        'Comprehensive security',
        'Custom integrations',
        'Priority support'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Enterprise',
      companySize: '1000+ employees',
      revenue: '$500M+',
      pricing: 'Premium',
      features: [
        'Full AI consciousness suite',
        'Enterprise security',
        'Custom development',
        'Dedicated support'
      ],
      icon: <Award className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const competitiveAnalysis = [
    {
      competitor: 'Traditional AI Companies',
      pricing: 'High',
      features: 'Limited',
      innovation: 'Moderate',
      advantage: 'First-mover in AI consciousness',
      icon: <Brain className="w-6 h-6" />
    },
    {
      competitor: 'Quantum Computing Firms',
      pricing: 'Very High',
      features: 'Specialized',
      innovation: 'High',
      advantage: 'Hybrid quantum-classical approach',
      icon: <Atom className="w-6 h-6" />
    },
    {
      competitor: 'Cybersecurity Vendors',
      pricing: 'High',
      features: 'Standard',
      innovation: 'Moderate',
      advantage: 'AI-powered security automation',
      icon: <Shield className="w-6 h-6" />
    },
    {
      competitor: 'Cloud Providers',
      pricing: 'Variable',
      features: 'Comprehensive',
      innovation: 'High',
      advantage: 'Integrated AI + Cloud solutions',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const pricingFactors = [
    {
      factor: 'Market Demand',
      impact: 'High',
      description: 'Growing demand for AI and quantum solutions drives competitive pricing',
      trend: 'Increasing',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      factor: 'Technology Innovation',
      impact: 'High',
      description: 'Cutting-edge technology commands premium pricing in the market',
      trend: 'Stable',
      icon: <Star className="w-6 h-6" />
    },
    {
      factor: 'Competition',
      impact: 'Medium',
      description: 'Competitive landscape influences pricing strategy and positioning',
      trend: 'Increasing',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      factor: 'Customer Value',
      impact: 'High',
      description: 'ROI and business impact justify premium pricing models',
      trend: 'Stable',
      icon: <DollarSign className="w-6 h-6" />
    }
  ];

  const marketTrends = [
    {
      trend: 'AI Market Growth',
      current: '$110B',
      projected: '$1.8T by 2030',
      growth: '35% CAGR',
      description: 'Rapid expansion of AI market creates pricing opportunities'
    },
    {
      trend: 'Quantum Computing',
      current: '$1.3B',
      projected: '$65B by 2045',
      growth: '40% CAGR',
      description: 'Emerging quantum market allows premium pricing strategies'
    },
    {
      trend: 'Cybersecurity',
      current: '$200B',
      projected: '$450B by 2045',
      growth: '25% CAGR',
      description: 'Growing security needs support competitive pricing'
    },
    {
      trend: 'Space Technology',
      current: '$469B',
      projected: '$1.4T by 2045',
      growth: '45% CAGR',
      description: 'Space sector expansion enables innovative pricing models'
    }
  ];

  const pricingStrategy = [
    {
      strategy: 'Value-Based Pricing',
      description: 'Price based on customer value and ROI, not just costs',
      benefits: [
        'Higher profit margins',
        'Customer satisfaction',
        'Market differentiation',
        'Sustainable growth'
      ]
    },
    {
      strategy: 'Tiered Pricing',
      description: 'Multiple service tiers to capture different market segments',
      benefits: [
        'Market penetration',
        'Revenue optimization',
        'Customer choice',
        'Scalable growth'
      ]
    },
    {
      strategy: 'Dynamic Pricing',
      description: 'Adjust pricing based on market conditions and demand',
      benefits: [
        'Market responsiveness',
        'Revenue maximization',
        'Competitive advantage',
        'Flexible positioning'
      ]
    }
  ];

  return (
    <Layout
      title="Market Pricing - Zion Tech Group"
      description="Understand our market-based pricing strategy and competitive positioning in AI, quantum computing, and cybersecurity markets."
      keywords="market pricing, competitive pricing, AI pricing, quantum computing pricing, cybersecurity pricing, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Market Pricing
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Competitive pricing aligned with market value and innovation
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our pricing strategy reflects the market value of our cutting-edge technologies 
                while ensuring accessibility across different business segments.
              </p>
            </motion.div>
          </div>
        </section>

          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl border border-sky-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">MLOps, Prompting & Evaluation</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Weights & Biases: <a className="text-cyan-400 underline" href={`https://wandb.ai/site/pricing`} target="_blank" rel="noopener noreferrer">wandb.ai/site/pricing</a></li>
                <li>Humanloop: <a className="text-cyan-400 underline" href={`https://humanloop.com/pricing`} target="_blank" rel="noopener noreferrer">humanloop.com/pricing</a></li>
                <li>Promptfoo: <a className="text-cyan-400 underline" href={`https://www.promptfoo.dev/pricing`} target="_blank" rel="noopener noreferrer">promptfoo.dev/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $50–$800/month depending on test volume and team size.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">AI Guardrails & Safety</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>OpenAI Safety: <a className="text-cyan-400 underline" href={`https://openai.com/index/safety/`} target="_blank" rel="noopener noreferrer">openai.com/index/safety</a></li>
                <li>Anthropic RAI: <a className="text-cyan-400 underline" href={`https://www.anthropic.com/news`} target="_blank" rel="noopener noreferrer">anthropic.com/news</a> (policy updates)</li>
                <li>Guardrails libraries: <a className="text-cyan-400 underline" href={`https://github.com/shreyashankar/gpt-guardrails`} target="_blank" rel="noopener noreferrer">github.com/shreyashankar/gpt-guardrails</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $0–$500/month for hosted tools; internal policies recommended.</div>
            </div>
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">LLM & AI Platforms</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>OpenAI API pricing: <a className="text-cyan-400 underline" href={`https://openai.com/api/pricing`} target="_blank" rel="noopener noreferrer">openai.com/api/pricing</a></li>
                <li>Anthropic pricing: <a className="text-cyan-400 underline" href={`https://www.anthropic.com/pricing`} target="_blank" rel="noopener noreferrer">anthropic.com/pricing</a></li>
                <li>Langfuse (observability) pricing: <a className="text-cyan-400 underline" href={`https://langfuse.com/pricing`} target="_blank" rel="noopener noreferrer">langfuse.com/pricing</a> (community + paid tiers)</li>
                <li>OpenRouter model pricing: <a className="text-cyan-400 underline" href={`https://openrouter.ai/models`} target="_blank" rel="noopener noreferrer">openrouter.ai/models</a></li>
                <li>Vercel AI SDK pricing notes: <a className="text-cyan-400 underline" href={`https://vercel.com/pricing`} target="_blank" rel="noopener noreferrer">vercel.com/pricing</a> (edge/function costs)</li>
                <li>Groq API pricing: <a className="text-cyan-400 underline" href={`https://wow.groq.com/pricing`} target="_blank" rel="noopener noreferrer">wow.groq.com/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$2,000/month depending on traffic and model choice.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-purple-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Security & Compliance</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Wiz pricing overview: <a className="text-cyan-400 underline" href={`https://www.wiz.io/pricing`} target="_blank" rel="noopener noreferrer">wiz.io/pricing</a></li>
                <li>Prisma Cloud: <a className="text-cyan-400 underline" href={`https://www.paloaltonetworks.com/prisma/cloud/pricing`} target="_blank" rel="noopener noreferrer">paloaltonetworks.com/prisma/cloud/pricing</a></li>
                <li>HashiCorp Vault: <a className="text-cyan-400 underline" href={`https://www.hashicorp.com/products/vault/pricing`} target="_blank" rel="noopener noreferrer">hashicorp.com/products/vault/pricing</a></li>
                <li>Cloudflare Zero Trust: <a className="text-cyan-400 underline" href={`https://www.cloudflare.com/plans/zero-trust/`} target="_blank" rel="noopener noreferrer">cloudflare.com/plans/zero-trust</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $200–$5,000/month based on scale and compliance scope.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Data & Analytics</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Snowflake pricing: <a className="text-cyan-400 underline" href={`https://www.snowflake.com/pricing/`} target="_blank" rel="noopener noreferrer">snowflake.com/pricing</a></li>
                <li>BigQuery pricing: <a className="text-cyan-400 underline" href={`https://cloud.google.com/bigquery/pricing`} target="_blank" rel="noopener noreferrer">cloud.google.com/bigquery/pricing</a></li>
                <li>Databricks: <a className="text-cyan-400 underline" href={`https://www.databricks.com/product/pricing`} target="_blank" rel="noopener noreferrer">databricks.com/product/pricing</a></li>
                <li>dbt Cloud: <a className="text-cyan-400 underline" href={`https://www.getdbt.com/pricing/`} target="_blank" rel="noopener noreferrer">getdbt.com/pricing</a></li>
                <li>ClickHouse Cloud: <a className="text-cyan-400 underline" href={`https://clickhouse.com/pricing`} target="_blank" rel="noopener noreferrer">clickhouse.com/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$3,000/month depending on storage, queries, and concurrency.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-amber-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Cloud & Edge</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>AWS pricing calculator: <a className="text-cyan-400 underline" href={`https://calculator.aws`} target="_blank" rel="noopener noreferrer">calculator.aws</a></li>
                <li>Azure pricing: <a className="text-cyan-400 underline" href={`https://azure.microsoft.com/pricing`} target="_blank" rel="noopener noreferrer">azure.microsoft.com/pricing</a></li>
                <li>Cloudflare plans: <a className="text-cyan-400 underline" href={`https://www.cloudflare.com/plans/`} target="_blank" rel="noopener noreferrer">cloudflare.com/plans</a></li>
                <li>Netlify plans: <a className="text-cyan-400 underline" href={`https://www.netlify.com/pricing/`} target="_blank" rel="noopener noreferrer">netlify.com/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $200–$10,000/month depending on traffic and workloads.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-rose-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">PDF & Document Generation</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>DocRaptor pricing: <a className="text-cyan-400 underline" href={`https://docraptor.com/#pricing`} target="_blank" rel="noopener noreferrer">docraptor.com/#pricing</a></li>
                <li>PDFMonkey pricing: <a className="text-cyan-400 underline" href={`https://www.pdfmonkey.io/pricing`} target="_blank" rel="noopener noreferrer">pdfmonkey.io/pricing</a></li>
                <li>CloudConvert: <a className="text-cyan-400 underline" href={`https://cloudconvert.com/pricing`} target="_blank" rel="noopener noreferrer">cloudconvert.com/pricing</a></li>
                <li>Gotenberg (self-hosted): <a className="text-cyan-400 underline" href={`https://gotenberg.dev`} target="_blank" rel="noopener noreferrer">gotenberg.dev</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $15–$200/month depending on volume and features.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-pink-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Contact Center & Voice AI</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Twilio: <a className="text-cyan-400 underline" href={`https://www.twilio.com/pricing`} target="_blank" rel="noopener noreferrer">twilio.com/pricing</a></li>
                <li>Deepgram: <a className="text-cyan-400 underline" href={`https://deepgram.com/pricing`} target="_blank" rel="noopener noreferrer">deepgram.com/pricing</a></li>
                <li>ElevenLabs: <a className="text-cyan-400 underline" href={`https://elevenlabs.io/pricing`} target="_blank" rel="noopener noreferrer">elevenlabs.io/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $50–$1,500/month by minutes, languages, and concurrency.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-amber-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Kubernetes & FinOps</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Kubecost pricing: <a className="text-cyan-400 underline" href={`https://www.kubecost.com/pricing`} target="_blank" rel="noopener noreferrer">kubecost.com/pricing</a></li>
                <li>CloudZero pricing: <a className="text-cyan-400 underline" href={`https://www.cloudzero.com/pricing`} target="_blank" rel="noopener noreferrer">cloudzero.com/pricing</a></li>
                <li>Finout pricing: <a className="text-cyan-400 underline" href={`https://www.finout.io/pricing`} target="_blank" rel="noopener noreferrer">finout.io/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $99–$2,000/month based on clusters and spend.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Identity & Access</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Auth0 pricing: <a className="text-cyan-400 underline" href={`https://auth0.com/pricing`} target="_blank" rel="noopener noreferrer">auth0.com/pricing</a></li>
                <li>Okta pricing: <a className="text-cyan-400 underline" href={`https://www.okta.com/pricing/`} target="_blank" rel="noopener noreferrer">okta.com/pricing</a></li>
                <li>Azure AD pricing: <a className="text-cyan-400 underline" href={`https://azure.microsoft.com/pricing/details/active-directory/`} target="_blank" rel="noopener noreferrer">azure.microsoft.com/pricing/details/active-directory</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $50–$1,000/month by MAUs and features.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Email Deliverability & Warmup</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Google Postmaster Tools: <a className="text-cyan-400 underline" href={`https://postmaster.google.com`} target="_blank" rel="noopener noreferrer">postmaster.google.com</a></li>
                <li>Mailgun pricing: <a className="text-cyan-400 underline" href={`https://www.mailgun.com/pricing/`} target="_blank" rel="noopener noreferrer">mailgun.com/pricing</a></li>
                <li>SendGrid pricing: <a className="text-cyan-400 underline" href={`https://sendgrid.com/pricing/`} target="_blank" rel="noopener noreferrer">sendgrid.com/pricing</a></li>
                <li>Postmark pricing: <a className="text-cyan-400 underline" href={`https://postmarkapp.com/pricing`} target="_blank" rel="noopener noreferrer">postmarkapp.com/pricing</a></li>
                <li>Folderly: <a className="text-cyan-400 underline" href={`https://folderly.com`} target="_blank" rel="noopener noreferrer">folderly.com</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $50–$300/month for warmup and monitoring; ESP fees separate.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-purple-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Product Analytics & Personalization</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Amplitude pricing: <a className="text-cyan-400 underline" href={`https://amplitude.com/pricing`} target="_blank" rel="noopener noreferrer">amplitude.com/pricing</a></li>
                <li>Mixpanel pricing: <a className="text-cyan-400 underline" href={`https://mixpanel.com/pricing/`} target="_blank" rel="noopener noreferrer">mixpanel.com/pricing</a></li>
                <li>Mutiny personalization: <a className="text-cyan-400 underline" href={`https://www.mutinyhq.com/product`} target="_blank" rel="noopener noreferrer">mutinyhq.com/product</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$1,500/month depending on MAUs and features.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Vector Search & Retrieval</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Pinecone pricing: <a className="text-cyan-400 underline" href={`https://www.pinecone.io/pricing/`} target="_blank" rel="noopener noreferrer">pinecone.io/pricing</a></li>
                <li>Weaviate Cloud: <a className="text-cyan-400 underline" href={`https://weaviate.io/pricing`} target="_blank" rel="noopener noreferrer">weaviate.io/pricing</a></li>
                <li>Elastic Search pricing: <a className="text-cyan-400 underline" href={`https://www.elastic.co/pricing`} target="_blank" rel="noopener noreferrer">elastic.co/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $50–$1,000/month depending on index size and QPS.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-amber-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">API Security & Edge</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Cloudflare plans: <a className="text-cyan-400 underline" href={`https://www.cloudflare.com/plans/`} target="_blank" rel="noopener noreferrer">cloudflare.com/plans</a></li>
                <li>Fastly pricing: <a className="text-cyan-400 underline" href={`https://www.fastly.com/pricing`} target="_blank" rel="noopener noreferrer">fastly.com/pricing</a></li>
                <li>Salt Security overview: <a className="text-cyan-400 underline" href={`https://salt.security`} target="_blank" rel="noopener noreferrer">salt.security</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$2,000/month based on traffic and protections.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-slate-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Privacy, PII & DSAR</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Skyflow pricing: <a className="text-cyan-400 underline" href={`https://www.skyflow.com/pricing`} target="_blank" rel="noopener noreferrer">skyflow.com/pricing</a></li>
                <li>VGS pricing: <a className="text-cyan-400 underline" href={`https://www.verygoodsecurity.com/pricing`} target="_blank" rel="noopener noreferrer">verygoodsecurity.com/pricing</a></li>
                <li>Transcend: <a className="text-cyan-400 underline" href={`https://transcend.io/`} target="_blank" rel="noopener noreferrer">transcend.io</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$2,000/month by data volume and systems.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-indigo-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Identity & SSO/SCIM</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Auth0 pricing: <a className="text-cyan-400 underline" href={`https://auth0.com/pricing`} target="_blank" rel="noopener noreferrer">auth0.com/pricing</a></li>
                <li>WorkOS pricing: <a className="text-cyan-400 underline" href={`https://workos.com/pricing`} target="_blank" rel="noopener noreferrer">workos.com/pricing</a></li>
                <li>Okta pricing: <a className="text-cyan-400 underline" href={`https://www.okta.com/pricing/`} target="_blank" rel="noopener noreferrer">okta.com/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$1,500/month depending on MAUs and features.</div>
            </div>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Competitive Analysis
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                How we position ourselves against market competitors
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {competitiveAnalysis.map((competitor, index) => (
                <motion.div
                  key={competitor.competitor}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-3">
                      {competitor.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{competitor.competitor}</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div>
                      <div className="text-gray-400">Pricing</div>
                      <div className="text-white font-semibold">{competitor.pricing}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Features</div>
                      <div className="text-white font-semibold">{competitor.features}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Innovation</div>
                      <div className="text-white font-semibold">{competitor.innovation}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Our Advantage:</div>
                    <div className="text-blue-400 text-sm">{competitor.advantage}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Factors */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Pricing Factors
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Key factors that influence our market-based pricing strategy
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingFactors.map((factor, index) => (
                <motion.div
                  key={factor.factor}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {factor.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{factor.factor}</h3>
                  <div className="text-sm text-gray-400 mb-3">Impact: {factor.impact}</div>
                  <p className="text-gray-300 text-sm mb-3">{factor.description}</p>
                  <div className="text-xs text-green-400 font-semibold">Trend: {factor.trend}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

          {/* Additional easy-to-verify market references */}
          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl border border-sky-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Surveys & Forms</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Typeform pricing: <a className="text-cyan-400 underline" href={`https://www.typeform.com/pricing/`} target="_blank" rel="noopener noreferrer">typeform.com/pricing</a></li>
                <li>SurveyMonkey pricing: <a className="text-cyan-400 underline" href={`https://www.surveymonkey.com/pricing/`} target="_blank" rel="noopener noreferrer">surveymonkey.com/pricing</a></li>
                <li>Tally.so pricing: <a className="text-cyan-400 underline" href={`https://tally.so/pricing`} target="_blank" rel="noopener noreferrer">tally.so/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $0–$100/month depending on responses and branding.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-purple-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Helpdesk & Chat</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Zendesk pricing: <a className="text-cyan-400 underline" href={`https://www.zendesk.com/pricing/`} target="_blank" rel="noopener noreferrer">zendesk.com/pricing</a></li>
                <li>Freshdesk pricing: <a className="text-cyan-400 underline" href={`https://freshdesk.com/pricing`} target="_blank" rel="noopener noreferrer">freshdesk.com/pricing</a></li>
                <li>Intercom pricing: <a className="text-cyan-400 underline" href={`https://www.intercom.com/pricing`} target="_blank" rel="noopener noreferrer">intercom.com/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $20–$500/month by seats and channels.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-amber-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">SEO & Content</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Ahrefs pricing: <a className="text-cyan-400 underline" href={`https://ahrefs.com/pricing`} target="_blank" rel="noopener noreferrer">ahrefs.com/pricing</a></li>
                <li>Semrush pricing: <a className="text-cyan-400 underline" href={`https://www.semrush.com/pricing/`} target="_blank" rel="noopener noreferrer">semrush.com/pricing</a></li>
                <li>Clearscope pricing: <a className="text-cyan-400 underline" href={`https://www.clearscope.io/pricing`} target="_blank" rel="noopener noreferrer">clearscope.io/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$500/month depending on seats and projects.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-rose-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Ecommerce Reviews & UGC</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Yotpo pricing: <a className="text-cyan-400 underline" href={`https://www.yotpo.com/pricing/`} target="_blank" rel="noopener noreferrer">yotpo.com/pricing</a></li>
                <li>Judge.me pricing: <a className="text-cyan-400 underline" href={`https://judge.me/pricing`} target="_blank" rel="noopener noreferrer">judge.me/pricing</a></li>
                <li>Loox pricing: <a className="text-cyan-400 underline" href={`https://loox.app/pricing`} target="_blank" rel="noopener noreferrer">loox.app/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $9–$199/month based on features and order volume.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Scheduling & Appointments</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Calendly pricing: <a className="text-cyan-400 underline" href={`https://calendly.com/pricing`} target="_blank" rel="noopener noreferrer">calendly.com/pricing</a></li>
                <li>Cal.com pricing: <a className="text-cyan-400 underline" href={`https://cal.com/pricing`} target="_blank" rel="noopener noreferrer">cal.com/pricing</a></li>
                <li>Acuity pricing: <a className="text-cyan-400 underline" href={`https://acuityscheduling.com/pricing`} target="_blank" rel="noopener noreferrer">acuityscheduling.com/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $10–$200/month depending on calendars and reminders.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-violet-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Learning Management (LMS)</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>TalentLMS pricing: <a className="text-cyan-400 underline" href={`https://www.talentlms.com/pricing`} target="_blank" rel="noopener noreferrer">talentlms.com/pricing</a></li>
                <li>Docebo pricing: <a className="text-cyan-400 underline" href={`https://www.docebo.com/pricing/`} target="_blank" rel="noopener noreferrer">docebo.com/pricing</a></li>
                <li>LearnWorlds pricing: <a className="text-cyan-400 underline" href={`https://www.learnworlds.com/pricing/`} target="_blank" rel="noopener noreferrer">learnworlds.com/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $60–$600/month depending on seats and content.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-indigo-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Developer Productivity</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Sentry pricing: <a className="text-cyan-400 underline" href={`https://sentry.io/pricing/`} target="_blank" rel="noopener noreferrer">sentry.io/pricing</a></li>
                <li>Linear pricing: <a className="text-cyan-400 underline" href={`https://linear.app/pricing`} target="_blank" rel="noopener noreferrer">linear.app/pricing</a></li>
                <li>Postman pricing: <a className="text-cyan-400 underline" href={`https://www.postman.com/pricing/`} target="_blank" rel="noopener noreferrer">postman.com/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $0–$300/month per team depending on usage.</div>
            </div>
          </div>
        </section>

        {/* Pricing Strategy */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Pricing Strategy
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Strategic approach to market positioning and value delivery
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingStrategy.map((strategy, index) => (
                <motion.div
                  key={strategy.strategy}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-orange-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{strategy.strategy}</h3>
                  <p className="text-gray-300 mb-4">{strategy.description}</p>
                  <ul className="space-y-2">
                    {strategy.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl border border-sky-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">CDP & Reverse ETL</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Segment: <a className="text-cyan-400 underline" href={`https://segment.com/pricing/`} target="_blank" rel="noopener noreferrer">segment.com/pricing</a></li>
                <li>RudderStack: <a className="text-cyan-400 underline" href={`https://www.rudderstack.com/pricing/`} target="_blank" rel="noopener noreferrer">rudderstack.com/pricing</a></li>
                <li>Hightouch (Reverse ETL): <a className="text-cyan-400 underline" href={`https://hightouch.com/pricing`} target="_blank" rel="noopener noreferrer">hightouch.com/pricing</a></li>
                <li>Census (Reverse ETL): <a className="text-cyan-400 underline" href={`https://www.getcensus.com/pricing`} target="_blank" rel="noopener noreferrer">getcensus.com/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$1,500/month depending on sources, destinations, and MAUs.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-rose-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Returns & Logistics</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Loop Returns: <a className="text-cyan-400 underline" href={`https://www.loopreturns.com/pricing/`} target="_blank" rel="noopener noreferrer">loopreturns.com/pricing</a></li>
                <li>Happy Returns: <a className="text-cyan-400 underline" href={`https://www.happyreturns.com/`} target="_blank" rel="noopener noreferrer">happyreturns.com</a></li>
                <li>Shippo: <a className="text-cyan-400 underline" href={`https://goshippo.com/pricing/`} target="_blank" rel="noopener noreferrer">goshippo.com/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $50–$400/month plus label costs.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Feature Flags & Experimentation</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>LaunchDarkly pricing: <a className="text-cyan-400 underline" href={`https://launchdarkly.com/pricing/`} target="_blank" rel="noopener noreferrer">launchdarkly.com/pricing</a></li>
                <li>Flagsmith pricing: <a className="text-cyan-400 underline" href={`https://www.flagsmith.com/pricing`} target="_blank" rel="noopener noreferrer">flagsmith.com/pricing</a></li>
                <li>Optimizely Web: <a className="text-cyan-400 underline" href={`https://www.optimizely.com/pricing/`} target="_blank" rel="noopener noreferrer">optimizely.com/pricing</a></li>
                <li>VWO pricing: <a className="text-cyan-400 underline" href={`https://vwo.com/pricing/`} target="_blank" rel="noopener noreferrer">vwo.com/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $50–$500/month for flags; $100–$1,000/month for experimentation depending on traffic.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-fuchsia-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Synthetic Data & Privacy</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Gretel pricing: <a className="text-cyan-400 underline" href={`https://gretel.ai/pricing`} target="_blank" rel="noopener noreferrer">gretel.ai/pricing</a></li>
                <li>Mostly AI pricing: <a className="text-cyan-400 underline" href={`https://mostly.ai/pricing/`} target="_blank" rel="noopener noreferrer">mostly.ai/pricing</a></li>
                <li>Hazy (synthetic data): <a className="text-cyan-400 underline" href={`https://hazy.com/`} target="_blank" rel="noopener noreferrer">hazy.com</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $99–$1,500/month based on datasets, privacy features, and synthesis volume.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-teal-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Data Reliability & Observability</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Monte Carlo: <a className="text-cyan-400 underline" href={`https://www.montecarlodata.com/`} target="_blank" rel="noopener noreferrer">montecarlodata.com</a></li>
                <li>Bigeye: <a className="text-cyan-400 underline" href={`https://www.bigeye.com/pricing`} target="_blank" rel="noopener noreferrer">bigeye.com/pricing</a></li>
                <li>OpenTelemetry docs: <a className="text-cyan-400 underline" href={`https://opentelemetry.io/`} target="_blank" rel="noopener noreferrer">opentelemetry.io</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $200–$2,000/month depending on data volume, SLAs, and alerting needs.</div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MarketPricing;