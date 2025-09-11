>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';
import Head from 'next/head';


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

  Code;
  GitBranch, ;
  Database, ;
  Cloud, ;
  Shield, ;
  Zap, ;
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {

  ];

;
  const devMarketStats = [;

    {

      pricing: '$12/month',

      marketPrice: '$12-99/month',
      website: 'https://www.postman.com/pricing',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      popular: false,
      category: 'API Development',
    },  ];

  ];
;
  const devMarketStats = [;
    {
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      title: 'Dev Tools Market',
      value: '$8.2B',
      growth: '+24% YoY',
      description: 'Global developer tools market size'
    {

      name: 'Code Generation',
      description: 'AI - powered coding assistants and code completion tools',
      tools: 1,

  ];
  const devWorkflow = [
    {

      phase: 'Development',
      tools: ['GitHub CopilotVS CodeGit'],

      description: 'Write and manage code with AI assistance'
    }

  ];
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Developer Tools Market Insights
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Understanding the developer tools landscape helps you make informed decisions about your development stack.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {devMarketStats.map((stat, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}
          </div>
        </div>
      </section>


      {/* Developer Tools Grid */}
      <section className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a









=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Curated Developer Tools & Services
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Each tool has been carefully selected based on performance
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
          </div>;
        </div>;
      </section>;
      {/* Developer Tools Grid */}
      <section className='section-padding bg-gradient-cursor'>;
        <div className='container-cursor'>;
          <div className='text-center mb-20'>;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
              Curated Developer Tools & Services;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
              Each tool has been carefully selected based on performance,;
              reliability, and real-world developer usage.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {developerTools && developerTools.map((tool, index) => (              Curated Developer Tools & Services;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Each tool has been carefully selected based on performance, reliability, and real-world developer usage.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {developerTools && developerTools.map((tool, index) => (;
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}=======

            ))}
          </div>
        </div>
      </section>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a









              Complete Developer Workflow
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Understanding the different types of developer tools helps you
              build a comprehensive development stack.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {devCategories.map((category, index) => (
=======
          </div>;
        </div>;
      </section>;
      {/* Tool Categories */}
      <section className='section-padding bg-gradient-cursor'>;
        <div className='container-cursor'>;
          <div className='text-center mb-20'>;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6'>;
            {dev_workflow.map ((phase, index) => (
              <Card;
                key={index}
                className='card - hover border - gradient - blue';
                style={{ animation_delay: `${index * 0.1}s` }}
              >;
                <div className='p - 6 text - center'>;
                  <div className='w - 16 h - 16 bg - cursor - blue / 10 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                    <Cpu className='w - 8 h - 8 text - cursor - blue' />;
                  </div>;
                  <h3 className='text - xl font - semibold text - white mb - 3'>;
                    {phase.phase}
                  </h3>;
                  <p className='text - gray - 400 mb - 4'>{phase.description}</p>;
                  <div className='space - y-1'>;
                    {phase.tools.map ((tool, tool_index) => (
                      <div;
                        key={tool_index}
                        className='text - sm text - cursor - blue font - medium';
                      >                        {tool}              Complete Developer Workflow;
            </h2>;
            <p className="text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
              Build a complete development pipeline with these essential tools that work together seamlessly.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6">;
            {dev_workflow.map ((phase, index) => (
              <Card;
                key={index}
                className="card - hover border - gradient - blue";
                style={{ animation_delay: `${index * 0.1}s` }}
              >;
                <div className="p - 6 text - center">;
                  <div className="w - 16 h - 16 bg - cursor - blue / 10 rounded - full flex items - center justify - center mx - auto mb - 4">;
                    <Cpu className="w - 8 h - 8 text - cursor - blue" />;
                  </div>;
                  <h3 className="text - xl font - semibold text - white mb - 3">{phase.phase}</h3>;
                  <p className="text - gray - 400 mb - 4">{phase.description}</p>;
                  <div className="space - y-1">;
                    {phase.tools.map ((tool, tool_index) => (
                      <div key={tool_index} className="text - sm text - cursor - blue font - medium">;
                        {tool}
                      </div>))}
                  </div>;
                </div>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* Tool Categories */}
      <section className='section - padding bg - gradient - cursor'>;
        <div className='container - cursor'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - responsive - lg font - bold mb - 8 gradient - text text - shadow'>;
            </h2>;
            <p className='text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
              Understanding the different types of developer tools helps you;
              build a comprehensive development stack.;
            </p>;
          </div>;

=======
      {/* Tool Categories */}
      <section className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>

              Developer Tool Categories
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
=======
                  </div>
                </div>
              </Card>

            ))}
          </div>
        </div>
      </section>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </div>;
      </section>;


      {/* CTA Section */}


            Start with one tool or build a complete development stack. Each tool;
            is designed to work independently and integrate seamlessly with your;
            existing workflow.;
          </p>;





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
            >
              Explore AI Tools
            </Button>
            <Button
href="/contact"
              variant="outline"
              size="lg"
              className="border-cursor-blue text-cursor-blue hover:bg-cursor-blue hover:text-white"
            >

          <div className='flex flex - col sm:flex - row gap - 6 justify - center'>;
            <Button;
              href='/ai - tools';
              variant='primary';
              size='lg';
              className='bg - cursor - blue hover:bg - cursor - blue - dark'            >;
              Explore AI Tools;
            </Button>;
            <Button;
              href='/contact';
              variant='outline';
              size='lg';
              className='border - cursor - blue text - cursor - blue hover:bg - cursor - blue hover:text - white'            >              href="/ai - tools";
              variant="primary";
              size="lg";
              className="bg - cursor - blue hover:bg - cursor - blue - dark";
              Explore AI Tools;
            </Button>;
            <Button;
              href='/contact';
              variant='outline';
              size='lg';
              className='border - cursor - blue text - cursor - blue hover:bg - cursor - blue hover:text - white'              href="/contact";
              variant="outline";
              size="lg";
              className="border - cursor - blue text - cursor - blue hover:bg - cursor - blue hover:text - white";
              Get Dev Consultation;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            </Button>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='section-padding bg-gradient-cursor-accent'>
        <div className='container-cursor text-center'>
          <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>

            Ready to Level Up Your Development?
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
=======
=======
  );
}

=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
            <Button
=======

            <Button
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <Button

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
