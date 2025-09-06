
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
  TrendingUp,;
  Shield,;} from 'lucide-react';import { ;
  Brain;
  MessageSquare
  Image
  Video
  Code
  FileText
  Zap



  Brain;
  MessageSquare,
  Image,
  Video,
  Code,
  FileText,
  Zap,
  Star;
  ExternalLink;
  CheckCircle;
  TrendingUp;
        'Advanced reasoning & analysis'
        'Web browsing & real-time info'
        'Plugin ecosystem access'
        'Code generation & debugging'
        'Professional writing assistance'
      ],      pricing: '$20/month',        'Advanced reasoning & analysisWeb browsing & real-time infoPlugin ecosystem accessCode generation & debuggingProfessional writing assistance'
      ];
      pricing: '$20/month'
      marketPrice: '$20/month'
      website: 'https://chat.openai.com'
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
      textColor: 'text-green-400'
      gradient: 'from-green-400 to-emerald-500'
      popular: true
      website: 'https://chat.openai.com',
      color: 'bg - gradient - to - br from - green - 500 to - emerald - 600',
      text_color: 'text - green - 400',
      gradient: 'from - green - 400 to - emerald - 500',
      popular: true,
      category: 'Conversational AI'
    }
    {
      icon: <Image className='w-8 h-8 text-white' />
      title: 'Midjourney'
      description:
        'State-of-the-art AI image generation with exceptional quality and artistic control for creative professionals.'
      features: [
        'High-quality image generation'
        'Artistic style control'
        'Commercial usage rights'
        'Community features'
        'Advanced prompting system'
      ],      pricing: '$10-30/month',    {
      icon: <Image className="w-8 h-8 text-white" />
      title: 'Midjourney'
      description: 'State-of-the-art AI image generation with exceptional quality and artistic control for creative professionals.'
      features: [
        'High-quality image generationArtistic style controlCommercial usage rightsCommunity featuresAdvanced prompting system'
      ];
      pricing: '$10-30/month'
      marketPrice: '$10-30/month'
      website: 'https://midjourney.com'
      color: 'bg-gradient-to-br from-purple-500 to-pink-600'
      textColor: 'text-purple-400'
      gradient: 'from-purple-400 to-pink-500'
      popular: true
      website: 'https://midjourney.com',
      color: 'bg - gradient - to - br from - purple - 500 to - pink - 600',
      text_color: 'text - purple - 400',
      gradient: 'from - purple - 400 to - pink - 500',
      popular: true,
      category: 'Image Generation'
    }
    {
      icon: <Code className='w-8 h-8 text-white' />
      title: 'GitHub Copilot'
      description:
        'AI-powered code completion and generation that understands your codebase and suggests intelligent solutions.'
      features: [
        'Intelligent code completion'
        'Multi-language support'
        'IDE integration'
        'Code explanation'
        'Security vulnerability detection'
      ],      pricing: '$10/month',    {
      icon: <Code className="w-8 h-8 text-white" />
      title: 'GitHub Copilot'
      description: 'AI-powered code completion and generation that understands your codebase and suggests intelligent solutions.'
      features: [
        'Intelligent code completionMulti-language supportIDE integrationCode explanationSecurity vulnerability detection'
      ];
      pricing: '$10/month'
      marketPrice: '$10-20/month'
      website: 'https://github.com/features/copilot'
      color: 'bg-gradient-to-br from-gray-500 to-black'
      textColor: 'text-gray-400'
      gradient: 'from-gray-400 to-black'
      popular: true
      category: 'Code Generation'
    }
      icon: <Video className='w-8 h-8 text-white' />
      title: 'Runway ML'
      description:
        'Professional AI video generation and editing tools for filmmakers, marketers, and content creators.'
      features: [
        'AI video generation'
        'Video editing tools'
        'Motion tracking'
        'Green screen removal'
        'Professional workflows'
      ],      pricing: '$12-76/month',        'AI video generationVideo editing toolsMotion trackingGreen screen removalProfessional workflows'
      ];
      pricing: '$12-76/month'
      marketPrice: '$15-100/month'
      website: 'https://runwayml.com'
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
      textColor: 'text-blue-400'
      gradient: 'from-blue-400 to-indigo-500'
      popular: false
      category: 'Video Generation'
    }
    {
      icon: <MessageSquare className='w-8 h-8 text-white' />
      title: 'Claude Pro'
      description:
        "Anthropic's advanced AI assistant with superior reasoning, analysis, and document processing capabilities."
      features: [
        'Advanced reasoning abilities'
        'Document analysis'
        'Code generation'
        'Creative writing'
        'Research assistance'
      ],      pricing: '$20/month',    {
      icon: <MessageSquare className="w-8 h-8 text-white" />
      title: 'Claude Pro'
      description: 'Anthropic\'s advanced AI assistant with superior reasoning, analysis, and document processing capabilities.';
      description: 'Anthropic\'s advanced AI assistant with superior reasoning, analysis, and document processing capabilities.';
      features: [;
        'Advanced reasoning abilitiesDocument analysisCode generationCreative writingResearch assistance';
      ];
      pricing: '$20/month'
      marketPrice: '$20/month'
      website: 'https://claude.ai'
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
      textColor: 'text-orange-400'
      gradient: 'from-orange-400 to-red-500'
      popular: false
      category: 'Conversational AI'
    }
      icon: <FileText className='w-8 h-8 text-white' />
      title: 'Jasper AI'
      description:
        'AI-powered content creation platform for marketers, writers, and businesses with enterprise features.'
      features: [
        'Content generation'
        'Brand voice training'
        'SEO optimization'
        'Team collaboration'
        'Enterprise integrations'
      ],      pricing: '$39-125/month',        'Content generationBrand voice trainingSEO optimizationTeam collaborationEnterprise integrations'
      ];
      pricing: '$39-125/month'
      marketPrice: '$40-150/month'
      website: 'https://jasper.ai'
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600'
      textColor: 'text-teal-400'
      gradient: 'from-teal-400 to-cyan-500'
      popular: false
      category: 'Content Creation'
    },  ];      category: 'Content Creation'
    }
      ];
      pricing: '$12 - 76 / month',
      market_price: '$15 - 100 / month',
      website: 'https://runwayml.com',
      color: 'bg - gradient - to - br from - blue - 500 to - indigo - 600',
      text_color: 'text - blue - 400',
      gradient: 'from - blue - 400 to - indigo - 500',
      popular: false,
      category: 'Video Generation'
    };
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      features: [;
        'Advanced reasoning abilities',
        'Document analysis',
        'Code generation',
        'Creative writing',
        'Research assistance',

      {/* AI Tools Grid */}

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
              <Card
                key={index}
                className={`card-hover group border-gradient-blue relative ${
                  tool && tool.popular ? 'ring-2 ring-cursor-blue ring-opacity-50' : ''
                }`}
                        {tool.title}
                      </h3>;
                      <span className="text - xs bg - gray - 800 text - gray - 300 px - 2 py - 1 rounded - full">;
                        {tool.category}
                      <Button
                        href={tool && tool.website}
                        variant='primary'
                        size='sm'
                        className='bg-cursor-blue hover:bg-cursor-blue-dark'>;
                        Try Tool;
                        <ExternalLink className='w-4 h-4 ml-2' />;
                      </Button>;
                      <div className='text-right'>;
                        <div className='text-xs text-gray-500'>Direct Link</div>;
                        <div className='text-xs text-cursor-blue font-mono'>;
                          {tool && tool.website}
                        </div>                      </div>                      <Button
                        href={tool && tool.website}
                        variant="primary"
                        size="sm"
                        className="bg-cursor-blue hover:bg-cursor-blue-dark">;
                        Try Tool;
                        <ExternalLink className="w-4 h-4 ml-2" />;
                      </Button>;
                      <div className="text-right">;
                        <div className="text-xs text-gray-500">Direct Link</div>;
                        <div className="text-xs text-cursor-blue font-mono">{tool && tool.website}</div>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </Card>;
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <Button
                        href={tool.website}
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

      {/* AI Categories Overview */}



              AI Tool Categories
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Understanding the different types of AI tools helps you build a
              comprehensive toolkit for your needs.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {aiCategories.map((category, index) => (
              Understanding the different types of AI tools helps you build a;
              comprehensive toolkit for your needs.;
            </p>;
          </div>;

              <Card
                key={index}
                className='card-hover border-gradient-blue'
                style={{ animationDelay: `${index * 0 && 0.1}s` }}>;
                <div className='p-6'>;
                  <h3 className='text-xl font-semibold text-white mb-3'>;
                    {category && category.name}
                  </h3>;
                  <p className='text-gray-400 mb-4'>{category && category.description}</p>;
                  <div className='flex items-center justify-between text-sm'>;
                    <span className='text-gray-500'>;
                      Tools Available:{' '}

      {/* AI Implementation Guide */}

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
                <ul className='space-y-2 text-sm text-gray-300'>                  <li> Choose based on your primary use case</li>              Getting Started with AI Tools
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
                  <li> Choose based on your primary use case</li>
                  <li> Start with free tiers when available</li>
                  <li> Focus on one tool at a time</li>
                </ul>
              </div>
            </Card>
                <h3 className="text-xl font-semibold text-white mb-3">Best Practices</h3>
                <p className="text-gray-400 mb-4">
                  Follow proven strategies to get the most out of your AI tools and ensure quality output.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li> Always review and edit AI-generated content</li>
                  <li> Use specific, detailed prompts</li>
                  <li> Maintain human oversight and creativity</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>
        </div>;
      </section>;

      {/* AI Implementation Guide */}
      <section className='section-padding bg-gradient-cursor'>;
        <div className='container-cursor'>;
          <div className='text-center mb-20'>;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
              Getting Started with AI Tools;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
            {ai_categories.map ((category, index) => (
              <Card;
                key={index}
                className='card - hover border - gradient - blue';
                style={{ animation_delay: `${index * 0.1}s` }}
              >;
                <div className='p - 6'>;
                  <h3 className='text - xl font - semibold text - white mb - 3'>;
                    {category.name}
                  </h3>;
                  <p className='text - gray - 400 mb - 4'>{category.description}</p>;
                  <div className='flex items - center justify - between text - sm'>;
                    <span className='text - gray - 500'>;
                      Tools Available:{' '}
                      <span className='text - white'>{category.tools}</span>;
                    </span>;
                    <span className='text - cursor - blue font - semibold'>;
                      {category.avg_price}
                    </span>                  </div>                <div className="p - 6">;
                  <h3 className="text - xl font - semibold text - white mb - 3">{category.name}</h3>;
                  <p className="text - gray - 400 mb - 4">{category.description}</p>;
                  <div className="flex items - center justify - between text - sm">;
                    <span className="text - gray - 500">Tools Available: <span className="text - white">{category.tools}</span></span>;
                    <span className="text - cursor - blue font - semibold">{category.avg_price}</span>;
                </div>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* AI Implementation Guide */}
      <section className='section - padding bg - gradient - cursor'>;
        <div className='container - cursor'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - responsive - lg font - bold mb - 8 gradient - text text - shadow'>;
              Getting Started with AI Tools;
            </h2>;
            <p className='text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
              Practical advice for implementing AI tools in your workflow and;
              maximizing their value.;
            </p>;
          </div>;

                </div>;
                <h3 className='text-xl font-semibold text-white mb-3'>;
                  Start Small;
                </h3>;
                <p className='text-gray-400 mb-4'>;
                  Begin with one AI tool that addresses your most immediate;
                  need. Master it before adding more.;
                </p>;
                <ul className='space-y-2 text-sm text-gray-300'>                  <li> Choose based on your primary use case</li>              Getting Started with AI Tools;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Practical advice for implementing AI tools in your workflow and maximizing their value.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            <Card className="card-hover border-gradient-blue">;
              <div className="p-6">;
                <div className="w-16 h-16 bg-cursor-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <TrendingUp className="w-8 h-8 text-cursor-blue" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">Start Small</h3>;
                <p className="text-gray-400 mb-4">;
                  Begin with one AI tool that addresses your most immediate need. Master it before adding more.;
                </p>;
                </ul>;
              </div>;
            </Card>;

                </div>;
                <h3 className='text-xl font-semibold text-white mb-3'>;
                  Best Practices;
                </h3>;
                <p className='text-gray-400 mb-4'>;
                  Follow proven strategies to get the most out of your AI tools;
                  and ensure quality output.;
                </p>;
                <ul className='space-y-2 text-sm text-gray-300'>                  <li> Always review and edit AI-generated content</li>                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">Best Practices</h3>;
                <p className="text-gray-400 mb-4">;
                  Follow proven strategies to get the most out of your AI tools and ensure quality output.;
                </p>;
                </ul>;
              </div>;
            </Card>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className='section-padding bg-gradient-cursor-accent'>;
        <div className='container-cursor text-center'>;
          <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
          </h2>;
          <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12'>;
            Start with one AI tool or build a complete AI-powered toolkit. Each;
            tool is designed to work independently and integrate seamlessly with;
            your existing processes.;
          </p>;
            </Button>;
          </div>;
        </div>;
      </section>;
              className='border-cursor-blue text-cursor-blue hover:bg-cursor-blue hover:text-white'            >              href="/micro-saas"
              variant="primary"
              size="lg"
              className="bg-cursor-blue hover:bg-cursor-blue-dark"
              Explore More Tools
            </Button>

            <Button
