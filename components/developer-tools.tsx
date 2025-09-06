
import React from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Code;
  GitBranch;
  Database;
  Cloud;
  Shield;
  Zap;

  Star;
  ExternalLink;
  CheckCircle;
  TrendingUp;
  Cpu;
  Globe

 } from 'lucide-react';
export default function DeveloperToolsPage() {
  const developerTools = null;

  return (
    <>
      <Head>
        <title>
          Developer Tools & Services | Zion Tech Group - Real Dev Tools with
          Pricing
        </title>
        <meta
          name='description'
          content='Discover real developer tools and services including GitHub Copilot, MongoDB Atlas, Vercel, and more. All tools include pricing, features, and direct links.'
        />
        <meta
          property='og:title'
          content='Developer Tools & Services | Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Real developer tools with pricing and direct links to boost your development workflow.'
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
            Developer Tools & Services
          </div>
          <h1 className='text-responsive-xl font-black mb-8 gradient-text text-shadow-lg'>
            Professional Developer Tools That Actually Work
          </h1>
          <p className='text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed'>
            Curated developer tools and services that professionals use daily.
            Each tool has been tested and verified to provide real value for
            developers and development teams.          </p>      </Head>

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
            Developer Tools & Services
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Professional Developer Tools That Actually Work
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Curated developer tools and services that professionals use daily. Each tool has been tested and verified 
            to provide real value for developers and development teams.
          </p>
        </div>
      </section>

      {/* Developer Market Statistics */}
      <section className='section-padding bg-gradient-cursor-accent'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Understanding the developer tools landscape helps you make
              informed decisions about your development stack.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
            {devMarketStats.map((stat, index) => (
              <Card
                key={index}
                className='card-hover border-gradient-blue text-center'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='p-6'>
                  <h3 className='text-lg font-semibold text-white mb-3'>
                    {stat.title}
                  </h3>
                  <div className='text-2xl font-bold text-cursor-blue mb-2'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-green-400 mb-3'>
                    {stat.growth}
                  </div>
                  <p className='text-sm text-gray-400'>{stat.description}</p>                </div>                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{stat.title}</h3>
                  <div className="text-2xl font-bold text-cursor-blue mb-2">{stat.value}</div>
                  <div className="text-sm text-green-400 mb-3">{stat.growth}</div>
                  <p className="text-sm text-gray-400">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Tools Grid */}
      <section className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
              Curated Developer Tools & Services
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Each tool has been carefully selected based on performance,
              reliability, and real-world developer usage.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {developerTools.map((tool, index) => (              Curated Developer Tools & Services
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Each tool has been carefully selected based on performance, reliability, and real-world developer usage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {developerTools.map((tool, index) => (
              <Card
                key={index}
                className={`card-hover group border-gradient-blue relative ${
                  tool.popular ? 'ring-2 ring-cursor-blue ring-opacity-50' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tool.popular && (
                  <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                    <div className='inline-flex items-center px-3 py-1 rounded-full bg-cursor-blue text-white text-xs font-medium'>
                      <Star className='w-3 h-3 mr-1' />                      Most Popular                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cursor-blue text-white text-xs font-medium">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className='flex items-start space-x-6'>
                  <div className='relative'>
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {tool.icon}
                    </div>
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${tool.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
                    />
                  </div>

                  <div className='flex-1'>
                    <div className='flex items-center justify-between mb-2'>
                      <h3 className={`text-2xl font-bold ${tool.textColor}`}>
                        {tool.title}
                      </h3>
                      <span className='text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full'>
                        {tool.category}
                      </span>
                    </div>

                    <p className='text-gray-400 leading-relaxed mb-6'>
                      {tool.description}
                    </p>

                    <div className='mb-6'>
                      <div className='flex items-center justify-between mb-3'>
                        <span className='text-sm text-gray-500'>
                          Service Price:
                        </span>
                        <span className='text-lg font-semibold text-cursor-blue'>
                          {tool.pricing}
                        </span>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <span className='text-sm text-gray-500'>
                          Market Average:
                        </span>
                        <span className='text-sm text-gray-400'>
                          {tool.marketPrice}
                        </span>
                      </div>
                    </div>

                    <ul className='space-y-2 mb-6'>
                      {tool.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className='flex items-center text-gray-300'
                        >
                          <CheckCircle className='w-4 h-4 text-green-400 mr-3 flex-shrink-0' />                          {feature}                      {tool.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${tool.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-2xl font-bold ${tool.textColor}`}>
                        {tool.title}
                      </h3>
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {tool.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500">Service Price:</span>
                        <span className="text-lg font-semibold text-cursor-blue">{tool.pricing}</span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500">Market Average:</span>
                        <span className="text-sm text-gray-400">{tool.marketPrice}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className='flex items-center justify-between'>
                      <Button
                        href={tool.website}
                        variant='primary'
                        size='sm'
                        className='bg-cursor-blue hover:bg-cursor-blue-dark'
                      >
                        Try Tool
                        <ExternalLink className='w-4 h-4 ml-2' />
                      </Button>
                      <div className='text-right'>
                        <div className='text-xs text-gray-500'>Direct Link</div>
                        <div className='text-xs text-cursor-blue font-mono'>
                          {tool.website}
                        </div>                      </div>                      <Button
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
            ))}
          </div>
        </div>
      </section>

      {/* Developer Workflow */}
      <section className='section-padding bg-gradient-cursor-accent'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
              Complete Developer Workflow
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Build a complete development pipeline with these essential tools
              that work together seamlessly.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {devWorkflow.map((phase, index) => (
              <Card
                key={index}
                className='card-hover border-gradient-blue'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='p-6 text-center'>
                  <div className='w-16 h-16 bg-cursor-blue/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Cpu className='w-8 h-8 text-cursor-blue' />
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-3'>
                    {phase.phase}
                  </h3>
                  <p className='text-gray-400 mb-4'>{phase.description}</p>
                  <div className='space-y-1'>
                    {phase.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className='text-sm text-cursor-blue font-medium'
                      >                        {tool}              Complete Developer Workflow
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Build a complete development pipeline with these essential tools that work together seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devWorkflow.map((phase, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-cursor-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-8 h-8 text-cursor-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{phase.phase}</h3>
                  <p className="text-gray-400 mb-4">{phase.description}</p>
                  <div className="space-y-1">
                    {phase.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="text-sm text-cursor-blue font-medium">
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Understanding the different types of developer tools helps you
              build a comprehensive development stack.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {devCategories.map((category, index) => (
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
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='section-padding bg-gradient-cursor-accent'>
        <div className='container-cursor text-center'>
          <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
          </h2>
          <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12'>
            Start with one tool or build a complete development stack. Each tool
            is designed to work independently and integrate seamlessly with your
            existing workflow.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <Button
              href='/ai-tools'
              variant='primary'
              size='lg'
              className='bg-cursor-blue hover:bg-cursor-blue-dark'            >
              Explore AI Tools
            </Button>
            <Button
              href='/contact'
              variant='outline'
              size='lg'
              className='border-cursor-blue text-cursor-blue hover:bg-cursor-blue hover:text-white'            >              href="/ai-tools"
              variant="primary"
              size="lg"
              className="bg-cursor-blue hover:bg-cursor-blue-dark"
              Explore AI Tools
            </Button>
            <Button
              href='/contact'
              variant='outline'
              size='lg'
              className='border-cursor-blue text-cursor-blue hover:bg-cursor-blue hover:text-white'              href="/contact"
              variant="outline"
              size="lg"
              className="border-cursor-blue text-cursor-blue hover:bg-cursor-blue hover:text-white"
              Get Dev Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
);
}
