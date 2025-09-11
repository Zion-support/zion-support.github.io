import {
  Brain
  MessageSquare
  Image
  Video
  Code
  FileText
  Zap
  Star
  ExternalLink
  CheckCircle
  TrendingUp
  Shield;} from 'lucide-react';import {
=======
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';


import {;
  Brain,;
  MessageSquare,;
  Image,;
  Video,;
  Code,;
  FileText,;
  Zap,;
  Star,;
  ExternalLink,;
  CheckCircle,;
  TrendingUp,;
  Shield,;} from 'lucide-react';import { ;
  Brain;
  MessageSquare, ;
  Image, ;
  Video, ;
  Code, ;
  FileText, ;
  Zap, ;
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
  Brain
  MessageSquare
  Image
  Video
  Code
  FileText
  Zap
  Star
  ExternalLink
  CheckCircle
  TrendingUp
  Shield;} from 'lucide-react';import {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Brain,
  MessageSquare,
  Image,
  Video,
  Code,
  FileText,
  Zap,
  Star,
  ExternalLink,
  CheckCircle,
=======
=======


  Brain;
  MessageSquare,
  Image,
  Video,
  Code,
  FileText,
  Zap,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======




        'Advanced reasoning & analysis',
        'Web browsing & real-time info',
        'Plugin ecosystem access',
        'Code generation & debugging',
        'Professional writing assistance',
      ],      pricing: '$20/month',        'Advanced reasoning & analysisWeb browsing & real-time infoPlugin ecosystem accessCode generation & debuggingProfessional writing assistance';


      ];
      pricing: '$20/month'
      marketPrice: '$20/month'
      website: 'https://chat.openai.com'
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
      textColor: 'text-green-400'
      gradient: 'from-green-400 to-emerald-500'
      popular: true

=======

=======
    },  ];
=======
    },  ];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];

;
  const aiMarketStats = [;

    {

      pricing: '$20/month',

      marketPrice: '$20/month',
      website: 'https://claude.ai',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      popular: false,
      category: 'Conversational AI',
    },

    {
      icon: <FileText className='w-8 h-8 text-white' />,
      title: 'Jasper AI',
      description:
        'AI-powered content creation platform for marketers, writers, and businesses with enterprise features.',
      features: [
        'Content generation',
        'Brand voice training',
        'SEO optimization',
        'Team collaboration',
        'Enterprise integrations',
};
=======
=======      title: 'AI Market Size',
      value: '$136.6B',
      growth: '+37% YoY',
      description: 'Global AI market value in 2024'
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
  ];
;
  return (
    <>;
      <Head>;
        <title>;
          AI Tools & Services | Zion Tech Group - Real AI Solutions with Pricing;
        </title>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      name: 'Conversational AI',
      description: 'Chatbots, virtual assistants, and language models',
    tools: 3,
      avgPrice: '$20/month'
    };
    {
      name: 'Image Generation',
      description: 'AI-powered art, design, and visual content creation',
    tools: 1,
      avgPrice: '$20/month'
    };
    {
      name: 'Code Generation',
      description: 'AI-assisted programming and development tools',
      tools: 1,
      avgPrice: '$10/month'
    }
  ];

  return (

    <>
      <Head>
        <title>AI Tools & Services | Zion Tech Group - Real AI Solutions with Pricing</title>
        <meta name="description" content="Discover real AI tools and services including ChatGPT, Midjourney, GitHub Copilot, and more. All tools include real pricing, features, and direct links." />
      marketPrice: '$40-150/month',
      website: 'https://jasper.ai',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
      popular: false,
      category: 'Content Creation',
    },  ];

  ];
  const aiMarketStats = [
    {
      title: 'AI Market Size'
      value: '$136.6B'
      growth: '+37% YoY'
      description: 'Global AI market value in 2024'
    },    {
      title: 'AI Adoption Rate'
      value: '35%'
      growth: '+12% YoY'
      description: 'Businesses actively using AI tools'
    },    {
      title: 'AI Investment'
      value: '$93.5B'
      growth: '+28% YoY'
      description: 'Global AI investment in 2024'
    },    {
      title: 'AI Productivity Gain'
      value: '40%'
      growth: '+15% YoY'
      description: 'Average productivity improvement'
    },  ];      description: 'Global AI market value in 2024'
    }
    {
      title: 'AI Adoption Rate'
      value: '35%'
      growth: '+12% YoY'
      description: 'Businesses actively using AI tools'
    },      description: 'Businesses actively using AI tools'
    }
    {
      title: 'AI Investment'
      value: '$93.5B'
      growth: '+28% YoY'
      description: 'Global AI investment in 2024'
    },      description: 'Global AI investment in 2024'
    }
    {
      title: 'AI Productivity Gain'
      value: '40%'
      growth: '+15% YoY'
      description: 'Average productivity improvement'
    },      description: 'Average productivity improvement'
    }
  ];
  const aiCategories = [
    {
      name: 'Conversational AI'
      description: 'Chatbots, virtual assistants, and language models'
      tools: 3,      tools: 3
      avgPrice: '$20/month'
    }
    {
      name: 'Image Generation'
      description: 'AI-powered art, design, and visual content creation';
      tools: 1
      avgPrice: '$20/month'
    }
    {
      name: 'Image Generation'
      description: 'AI-powered art, design, and visual content creation'
      tools: 1
      avgPrice: '$20/month'
    },    {
      name: 'Code Generation'
      description: 'AI-assisted programming and development tools'
      tools: 1
      avgPrice: '$10/month'
    },    {
      name: 'Video Generation'
      description: 'AI video creation and editing tools'
      tools: 1
      avgPrice: '$44/month'
    },    {
      name: 'Content Creation'
      description: 'AI-powered writing and content generation'
      tools: 1
      avgPrice: '$82/month'
    },  ];    {
      name: 'Code Generation'
      description: 'AI-assisted programming and development tools'
      tools: 1
      avgPrice: '$10/month'
    },      avgPrice: '$20/month'
    }
    {
      name: 'Code Generation'
      description: 'AI-assisted programming and development tools'
      tools: 1
      avgPrice: '$10/month'
    }
    {
      name: 'Video Generation'
      description: 'AI video creation and editing tools'
      tools: 1
      avgPrice: '$44/month'
    },      avgPrice: '$44/month'
    }
    {
      name: 'Content Creation'
      description: 'AI-powered writing and content generation'
      tools: 1
      avgPrice: '$82/month'
    },      avgPrice: '$82/month'
    }
  ];

  return (
    <>
      <Head>
        <title>
          AI Tools & Services | Zion Tech Group - Real AI Solutions with Pricing
        </title>
        <meta
          name='description'
          content='Discover real AI tools and services including ChatGPT, Midjourney, GitHub Copilot, and more. All tools include real pricing, features, and direct links.'
        />
        <meta
          property='og:title'
          content='AI Tools & Services | Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Real AI tools with pricing and direct links to help boost your productivity and creativity.'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      {/* Hero Section */}
      <section className='relative section-padding bg-gradient-cursor overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]' />
        <div className='absolute inset-0 bg-grid opacity-10' />
        <div className='relative z-10 container-cursor text-center'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6'>
            <span className='w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse' />
            AI Tools & Services
          </div>
          <h1 className='text-responsive-xl font-black mb-8 gradient-text text-shadow-lg'>
            Real AI Tools for Real Results
          </h1>
          <p className='text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed'>
            Curated AI tools and services that actually work. Each tool has been
            tested and verified to provide real value for professionals and
            businesses. No hype - just results.          </p>      </Head>
=======

=======

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
            AI Tools & Services
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Real AI Tools for Real Results
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Curated AI tools and services that actually work. Each tool has been tested and verified to provide
            real value for professionals and businesses. No hype - just results.
          </p>
        </div>
      </section>

        />;
        <meta name='twitter:card' content='summary_large_image' />;
      </Head>;
      {/* Hero Section */}
      <section className='relative section-padding bg-gradient-cursor overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0 && 0.08),transparent_50%)]' />;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0 && 0.06),transparent_50%)]' />;
        <div className='absolute inset-0 bg-grid opacity-10' />;
        <div className='relative z-10 container-cursor text-center'>;
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6'>;
            <span className='w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse' />;
            AI Tools & Services;
          </div>;
          <h1 className='text-responsive-xl font-black mb-8 gradient-text text-shadow-lg'>;
            Real AI Tools for Real Results;
          </h1>;
          <p className='text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed'>;
            Curated AI tools and services that actually work. Each tool has been;
            tested and verified to provide real value for professionals and;
            businesses. No hype - just results.          </p>      </Head>;
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0 && 0.08),transparent_50%)]" />;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0 && 0.06),transparent_50%)]" />;
        <div className="absolute inset-0 bg-grid opacity-10" />;
        <div className="relative z-10 container-cursor text-center">;
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">;
            <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />;
            AI Tools & Services;
          </div>;
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">;
            Real AI Tools for Real Results;
          </h1>;
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">;
            Curated AI tools and services that actually work. Each tool has been tested and verified to provide ;
            real value for professionals and businesses. No hype - just results.;
          </p>;
        </div>;
      </section>;
      {/* AI Market Statistics */}
      <section className='section-padding bg-gradient-cursor-accent'>;
        <div className='container-cursor'>;
          <div className='text-center mb-20'>;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
        <meta;
          name='description';
          content='Discover real AI tools and services including ChatGPT, Midjourney, GitHub Copilot, and more. All tools include real pricing, features, and direct links.';
        />;
        <meta;
          property='og:title';
          content='AI Tools & Services | Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Real AI tools with pricing and direct links to help boost your productivity and creativity.';
        />;
        <meta name='twitter:card' content='summary_large_image' />;
      </Head>;
      {/* Hero Section */}
      <section className='relative section - padding bg - gradient - cursor overflow - hidden'>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_30%_20%, rgba (0, 122, 204, 0.08), transparent_50%)]' />;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_70%_80%, rgba (0, 122, 204, 0.06), transparent_50%)]' />;
        <div className='absolute inset - 0 bg - grid opacity - 10' />;
        <div className='relative z - 10 container - cursor text - center'>;
          <div className='inline - flex items - center px - 4 py - 2 rounded - full bg - cursor - blue / 10 border border - cursor - blue / 20 text - cursor - blue text - sm font - medium mb - 6'>;
            <span className='w - 2 h - 2 bg - cursor - blue rounded - full mr - 2 animate - pulse' />;
            AI Tools & Services;
          </div>;
          <h1 className='text - responsive - xl font - black mb - 8 gradient - text text - shadow - lg'>;
            Real AI Tools for Real Results;
          </h1>;
          <p className='text - responsive - md text - gray - 300 max - w-5xl mx - auto leading - relaxed'>;
            Curated AI tools and services that actually work. Each tool has been;
            tested and verified to provide real value for professionals and;
            businesses. No hype - just results.          </p>      </Head>;
      {/* Hero Section */}
      <section className="relative section - padding bg - gradient - cursor overflow - hidden">;
        <div className="absolute inset - 0 bg-[radial - gradient (circle_at_30%_20%, rgba (0, 122, 204, 0.08), transparent_50%)]" />;
        <div className="absolute inset - 0 bg-[radial - gradient (circle_at_70%_80%, rgba (0, 122, 204, 0.06), transparent_50%)]" />;
        <div className="absolute inset - 0 bg - grid opacity - 10" />;
        <div className="relative z - 10 container - cursor text - center">;
          <div className="inline - flex items - center px - 4 py - 2 rounded - full bg - cursor - blue / 10 border border - cursor - blue / 20 text - cursor - blue text - sm font - medium mb - 6">;
            <span className="w - 2 h - 2 bg - cursor - blue rounded - full mr - 2 animate - pulse" />;
            AI Tools & Services;
          </div>;
          <h1 className="text - responsive - xl font - black mb - 8 gradient - text text - shadow - lg">;
            Real AI Tools for Real Results;
          </h1>;
          <p className="text - responsive - md text - gray - 300 max - w-5xl mx - auto leading - relaxed">;
            Curated AI tools and services that actually work. Each tool has been tested and verified to provide;
            real value for professionals and businesses. No hype - just results.;
          </p>;
        </div>;
      </section>;
      {/* AI Market Statistics */}
      <section className='section - padding bg - gradient - cursor - accent'>;
        <div className='container - cursor'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - responsive - lg font - bold mb - 8 gradient - text text - shadow'>;
            </h2>;
            <p className='text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
              Understanding the AI landscape helps you make informed decisions;
              about which tools to invest in.;
            </p>;
          </div>;

=======

            ))}=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a









=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Curated AI Tools & Services
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Each tool has been carefully selected based on performance
              reliability, and real-world value.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {aiTools.map((tool, index) => (              Curated AI Tools & Services
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Each tool has been carefully selected based on performance, reliability, and real-world value.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiTools.map((tool, index) => (
          </div>;
        </div>;
      </section>;
      {/* AI Tools Grid */}
      <section className='section-padding bg-gradient-cursor'>;
        <div className='container-cursor'>;
          <div className='text-center mb-20'>;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
              Curated AI Tools & Services;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
              Each tool has been carefully selected based on performance,;
              reliability, and real-world value.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {aiTools && aiTools.map((tool, index) => (              Curated AI Tools & Services;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Each tool has been carefully selected based on performance, reliability, and real-world value.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {aiTools && aiTools.map((tool, index) => (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Card
                key={index}
                className={`card-hover group border-gradient-blue relative ${
                  tool && tool.popular ? 'ring-2 ring-cursor-blue ring-opacity-50' : ''
                }`}

                        {tool.title}
                      </h3>;
                      <span className="text - xs bg - gray - 800 text - gray - 300 px - 2 py - 1 rounded - full">;
                        {tool.category}

                      className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${tool && tool.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
                    />;
                  </div>;
                  <div className='flex-1'>;
                    <div className='flex items-center justify-between mb-2'>;
                      <h3 className={`text-2xl font-bold ${tool && tool.textColor}`}>;
                        {tool && tool.title}
                      </h3>;
                      <span className='text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full'>;
                        {tool && tool.category}
                      </span>;
                    </div>;
                    <p className='text-gray-400 leading-relaxed mb-6'>;
                      {tool && tool.description}
                    </p>;
                    <div className='mb-6'>;
                      <div className='flex items-center justify-between mb-3'>;
                        <span className='text-sm text-gray-500'>;
                          Service Price:;
                        </span>;
                        <span className='text-lg font-semibold text-cursor-blue'>;
                          {tool && tool.pricing}
                        </span>;
                      </div>;
                      <div className='flex items-center justify-between mb-3'>;
                        <span className='text-sm text-gray-500'>;
                          Market Average:;
                        </span>;
                        <span className='text-sm text-gray-400'>;
                          {tool && tool.marketPrice}
                        </span>;
                      </div>;
                    </div>;
                    <ul className='space-y-2 mb-6'>;
                      {tool && tool.features.map((feature, featureIndex) => (;
                        <li
                          key={featureIndex}
                          className='flex items-center text-gray-300'>;
                          <CheckCircle className='w-4 h-4 text-green-400 mr-3 flex-shrink-0' />                          {feature}                      {tool && tool.icon}
                    </div>;
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${tool && tool.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />;
                  </div>;
                  <div className="flex-1">;
                    <div className="flex items-center justify-between mb-2">;
                      <h3 className={`text-2xl font-bold ${tool && tool.textColor}`}>;
                        {tool && tool.title}
                      </h3>;
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">;
                        {tool && tool.category}
                      </span>;
                    </div>;
                    <p className="text-gray-400 leading-relaxed mb-6">;
                      {tool && tool.description}
                    </p>;
                    <div className="mb-6">;
                      <div className="flex items-center justify-between mb-3">;
                        <span className="text-sm text-gray-500">Service Price:</span>;
                        <span className="text-lg font-semibold text-cursor-blue">{tool && tool.pricing}</span>;
                      </div>;
                      <div className="flex items-center justify-between mb-3">;
                        <span className="text-sm text-gray-500">Market Average:</span>;
                        <span className="text-sm text-gray-400">{tool && tool.marketPrice}</span>;
                      </div>;
                    </div>;
                    <ul className="space-y-2 mb-6">;
                      {tool && tool.features.map((feature, featureIndex) => (;
                        <li key={featureIndex} className="flex items-center text-gray-300">;
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />;

                          {feature}
                        </li>;
                      ))}

                    </ul>;
                    <div className='flex items-center justify-between'>;

                    <div className="flex items-center justify-between">
                      <Button=======

                    <div className="flex items-center justify-between">
                      <Button                        href={tool.website}
                        variant="primary"
                        size="sm"
                        className="bg-cursor-blue hover:bg-cursor-blue-dark"
                      >
                        Try Tool
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Direct Link</div>
                        <div className="text-xs text-cursor-blue font-mono">{tool.website}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

            ))}





=======      {/* AI Categories Overview */}
      <section className='section-padding bg-gradient-cursor-accent'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
              AI Tool Categories


=======
              AI Tool Categories
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Understanding the different types of AI tools helps you build a
              comprehensive toolkit for your needs.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {aiCategories.map((category, index) => (
              <Card
                key={index}
                className='card-hover border-gradient-blue'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-white mb-3'>
                    {category.name}
                  </h3>
                  <p className='text-gray-400 mb-4'>{category.description}</p>
                  <div className='flex items-center justify-between text-sm'>
                    <span className='text-gray-500'>
                      Tools Available:{' '}
                      <span className='text-white'>{category.tools}</span>
                    </span>
                    <span className='text-cursor-blue font-semibold'>
                      {category.avgPrice}
                    </span>                  </div>                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Tools Available: <span className="text-white">{category.tools}</span></span>
                    <span className="text-cursor-blue font-semibold">{category.avgPrice}</span>
            ))}=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a









=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Getting Started with AI Tools
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Practical advice for implementing AI tools in your workflow and
              maximizing their value.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Card className='card-hover border-gradient-blue'>
              <div className='p-6'>
                <div className='w-16 h-16 bg-cursor-blue/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <TrendingUp className='w-8 h-8 text-cursor-blue' />
                </div>
                <h3 className='text-xl font-semibold text-white mb-3'>
                  Start Small
                </h3>
                <p className='text-gray-400 mb-4'>
                  Begin with one AI tool that addresses your most immediate
                  need. Master it before adding more.
                </p>
                <ul className='space-y-2 text-sm text-gray-300'>                  <li>• Choose based on your primary use case</li>              Getting Started with AI Tools
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Practical advice for implementing AI tools in your workflow and maximizing their value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover border-gradient-blue">
              <div className="p-6">
                <div className="w-16 h-16 bg-cursor-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-cursor-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Start Small</h3>
                <p className="text-gray-400 mb-4">
                  Begin with one AI tool that addresses your most immediate need. Master it before adding more.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Choose based on your primary use case</li>
                  <li>• Start with free tiers when available</li>
                  <li>• Focus on one tool at a time</li>
                </ul>
              </div>
            </Card>

            <Card className="card-hover border-gradient-blue">
              <div className="p-6">
                <div className="w-16 h-16 bg-cursor-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-cursor-blue" />
                </div>

            >
              Explore More Tools
            </Button>
            <Button
href="/contact"
              variant="outline"
              size="lg"
              className="border-cursor-blue text-cursor-blue hover:bg-cursor-blue hover:text-white"
            >              Get AI Consultation

==============

              Get AI Consultation

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* CTA Section */}
      <section className='section - padding bg - gradient - cursor - accent'>;
        <div className='container - cursor text - center'>;
          <h2 className='text - responsive - lg font - bold mb - 8 gradient - text text - shadow'>;
          </h2>;
          <p className='text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed mb - 12'>;
            Start with one AI tool or build a complete AI - powered toolkit. Each;
            tool is designed to work independently and integrate seamlessly with;
            your existing processes.;
          </p>;
          <div className='flex flex - col sm:flex - row gap - 6 justify - center'>;
            <Button;
              href='/micro - saas';
              variant='primary';
              size='lg';
              className='bg - cursor - blue hover:bg - cursor - blue - dark'            >;
              Explore More Tools;
            </Button>;
            <Button;
              href='/contact';
              variant='outline';
              size='lg';
              className='border - cursor - blue text - cursor - blue hover:bg - cursor - blue hover:text - white'            >              href="/micro - saas";
              variant="primary";
              size="lg";
              className="bg - cursor - blue hover:bg - cursor - blue - dark";
              Explore More Tools;
            </Button>;
            <Button;
              href='/contact';
              variant='outline';
              size='lg';
              className='border - cursor - blue text - cursor - blue hover:bg - cursor - blue hover:text - white'              href="/contact";
              variant="outline";
              size="lg";
              className="border - cursor - blue text - cursor - blue hover:bg - cursor - blue hover:text - white";
              Get AI Consultation;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            </Button>;
          </div>;
        </div>;
      </section>;
  );
}

=======
    </>);
}=======
            <Button
              href='/contact'
              variant='outline'
              size='lg'
              className='border-cursor-blue text-cursor-blue hover:bg-cursor-blue hover:text-white'              href="/contact"
              variant="outline"
              size="lg"
              className="border-cursor-blue text-cursor-blue hover:bg-cursor-blue hover:text-white"
              Get AI Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
);
}
            <Button
=======

            <Button
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <Button

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
