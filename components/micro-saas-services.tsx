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

  Brain;
  Monitor, ;
  Search, ;
  Shield, ;
  Mail, ;
  Share2, ;
  Check, ;
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {

    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Professional Business Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of micro SaaS services including AI content generation, performance monitoring, SEO analytics, API management, email marketing, and social media scheduling." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Professional micro SaaS services for modern businesses. AI-powered solutions with competitive pricing and enterprise-grade features." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
            Micro SaaS Services
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Professional Micro SaaS Solutions
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Discover our comprehensive suite of micro SaaS services designed for modern businesses.
            From AI-powered content generation to enterprise-grade performance monitoring, we deliver professional solutions with competitive pricing and exceptional value.
          </p>
        </div>
      </section>
      {/* Market Overview */}        <meta;
          name='description';
          content='Discover our comprehensive suite of micro SaaS services including AI content generation, performance monitoring, SEO analytics, API management, email marketing, and social media scheduling.';
        />;
        <meta;
          property='og:title';
          content='Micro SaaS Services | Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Professional micro SaaS services for modern businesses. AI - powered solutions with competitive pricing and enterprise - grade features.';
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
            Micro SaaS Services;
          </div>;
          <h1 className='text - responsive - xl font - black mb - 8 gradient - text text - shadow - lg'>;
            Professional Micro SaaS Solutions;
          </h1>;
          <p className='text - responsive - md text - gray - 300 max - w-5xl mx - auto leading - relaxed'>;
            Discover our comprehensive suite of micro SaaS services designed for;
            modern businesses. From AI - powered content generation to;
            enterprise - grade performance monitoring, we deliver professional;
            solutions with competitive pricing and exceptional value.          </p>      </Head>;
      {/* Hero Section */}
      <section className="relative section - padding bg - gradient - cursor overflow - hidden">;
        <div className="absolute inset - 0 bg-[radial - gradient (circle_at_30%_20%, rgba (0, 122, 204, 0.08), transparent_50%)]" />;
        <div className="absolute inset - 0 bg-[radial - gradient (circle_at_70%_80%, rgba (0, 122, 204, 0.06), transparent_50%)]" />;
        <div className="absolute inset - 0 bg - grid opacity - 10" />;
        <div className="relative z - 10 container - cursor text - center">;
          <div className="inline - flex items - center px - 4 py - 2 rounded - full bg - cursor - blue / 10 border border - cursor - blue / 20 text - cursor - blue text - sm font - medium mb - 6">;
            <span className="w - 2 h - 2 bg - cursor - blue rounded - full mr - 2 animate - pulse" />;
            Micro SaaS Services;
          </div>;
          <h1 className="text - responsive - xl font - black mb - 8 gradient - text text - shadow - lg">;
            Professional Micro SaaS Solutions;
          </h1>;
          <p className="text - responsive - md text - gray - 300 max - w-5xl mx - auto leading - relaxed">;
            Discover our comprehensive suite of micro SaaS services designed for modern businesses.;
            From AI - powered content generation to enterprise - grade performance monitoring, we deliver professional solutions with competitive pricing and exceptional value.;
          </p>;
        </div>;
      </section>;
      {/* Market Overview */}
      <section className='section - padding bg - gradient - cursor - accent'>;
        <div className='container - cursor'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - responsive - lg font - bold mb - 8 gradient - text text - shadow'>;
              Market Overview & Competitive Analysis;
            </h2>;
            <p className='text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
              Our services are positioned competitively in growing markets with;
              strong demand and proven business models.;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
            {market_insights.map ((insight, index) => (
              <Card;
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Market Overview & Competitive Analysis            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our services are positioned competitively in growing markets with strong demand and proven business models.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketInsights.map((insight, index) => (
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
            Micro SaaS Services;
          </div>;
          <h1 className='text-responsive-xl font-black mb-8 gradient-text text-shadow-lg'>;
            Professional Micro SaaS Solutions;
          </h1>;
          <p className='text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed'>;
            Discover our comprehensive suite of micro SaaS services designed for;
            modern businesses. From AI-powered content generation to;
            enterprise-grade performance monitoring, we deliver professional;
            solutions with competitive pricing and exceptional value.          </p>      </Head>;
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0 && 0.08),transparent_50%)]" />;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0 && 0.06),transparent_50%)]" />;
        <div className="absolute inset-0 bg-grid opacity-10" />;
        <div className="relative z-10 container-cursor text-center">;
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">;
            <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />;
            Micro SaaS Services;
          </div>;
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">;
            Professional Micro SaaS Solutions;
          </h1>;
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">;
            Discover our comprehensive suite of micro SaaS services designed for modern businesses. ;
            From AI-powered content generation to enterprise-grade performance monitoring, we deliver professional solutions with competitive pricing and exceptional value.;
          </p>;
        </div>;
      </section>;
      {/* Market Overview */}
      <section className='section-padding bg-gradient-cursor-accent'>;
        <div className='container-cursor'>;
          <div className='text-center mb-20'>;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
              Market Overview & Competitive Analysis;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
              Our services are positioned competitively in growing markets with;
              strong demand and proven business models.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
            {marketInsights && marketInsights.map((insight, index) => (;
              <Card
                key={index}
                className='card-hover border-gradient-blue text-center'
                style={{ animationDelay: `${index * 0 && 0.1}s` }}>;
                <div className='p-6'>;
                  <h3 className='text-xl font-bold text-white mb-4'>;
                    {insight && insight.title}
                  </h3>;
                  <div className='flex items-center justify-center space-x-4 mb-4'>;
                    <div className='text-2xl font-bold text-cursor-blue'>;
                      {insight && insight.marketSize}
                    </div>;
                    <div className='text-green-400 font-semibold'>;
                      {insight && insight.growth}
                    </div>;
                  </div>;
                  <p className='text-gray-400 text-sm'>{insight && insight.description}</p>                </div>              Market Overview & Competitive Analysis;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Our services are positioned competitively in growing markets with strong demand and proven business models.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {marketInsights && marketInsights.map((insight, index) => (;
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center"



=======
              </Card>>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
=======

            'Unlimited accounts',
            'Enterprise scheduling',
            'Advanced calendar',
            'Enterprise analytics',
            'Dedicated support',=======
              </Card>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            ))}
          </div>
        </div>
      </section>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662




              </Card>
            ))}
=======
==============
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className='section-padding bg-gradient-cursor'>;
        <div className='container-cursor'>;
          <div className='text-center mb-20'>;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
              Our Micro SaaS Services;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
              Each service is designed to solve specific business challenges;
              with professional-grade features and competitive pricing.;
            </p>;
          </div>;
          <div className='space-y-16'>;
            {microSaasServices && microSaasServices.map((service, index) => (;
=======
      {/* Services Grid */}
      <section className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>

              Our Micro SaaS Services
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Each service is designed to solve specific business challenges
              with professional-grade features and competitive pricing.
            </p>
          </div>
          <div className='space-y-16'>
            {microSaasServices.map((service, index) => (
              <div
                key={service && service.id}
                className='bg-gray-900/50 rounded-2xl p-8 border border-gray-800'>;
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>;
                  {/* Service Info */}
                  <div className='lg:col-span-2'>;
                    <div className='flex items-center space-x-4 mb-6'>;
                      <div

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              {useCase}
                            </li>;
                          ))}

=======

                          </div>
=======                        </div>
                        <div>
                          <p className='text-sm text-gray-400 mb-1'>
                            Key Competitors
                          </p>
                          <div className='flex flex-wrap gap-2'>
                            {service.competitors.map(
                              (competitor, compIndex) => (
=======                                <span
                                  key={compIndex}
                                  className='px-2 py-1 bg-gray-700 rounded text-xs text-gray-300'>;
                                  {competitor}
                                </span>;
                              );
                            )}                          </div>                          <p className="text-sm text-gray-400 mb-1">Key Competitors</p>;
                          <div className="flex flex-wrap gap-2">;
                            {service && service.competitors.map((competitor, compIndex) => (;
                              <span key={compIndex} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <p className="text-sm text-gray-400 mb-1">Key Competitors</p>
                          <div className="flex flex-wrap gap-2">
                            {service.competitors.map((competitor, compIndex) => (
                              <span key={compIndex} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                                {competitor}
                              </span>;
                            ))}

                      </div>;
                      <div>;
                        <h3 className="text - 2xl font - bold text - white">{service.name}</h3>;
                        <p className="text - gray - 400">{service.description}</p>;
                      </div>;
                    </div>;
                    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6 mb - 8">;
                      <div>;
                        <h4 className="text - lg font - semibold text - white mb - 3 flex items - center">;
                          <Zap className="w - 5 h - 5 mr - 2 text - cursor - blue" />;
                          Key Features;
                        </h4>;
                        <ul className="space - y-2">;
                          {service.features.map ((feature, feature_index) => (
                            <li key={feature_index} className="flex items - center text - gray - 300 text - sm">;
                              <Check className="w - 4 h - 4 mr - 2 text - green - 400 flex - shrink - 0" />;
                              {feature}
                            </li>))}
                        </ul>;
                      </div>;
                      <div>;
                        <h4 className='text - lg font - semibold text - white mb - 3 flex items - center'>;
                          <Target className='w - 5 h - 5 mr - 2 text - cursor - blue' />;
                          Use Cases;
                        </h4>;
                        <ul className='space - y-2'>;
                          {service.use_cases.map ((use_case, useCaseIndex) => (
                            <li;
                              key={useCaseIndex}
                              className='flex items - center text - gray - 300 text - sm';
                            >;
                              <Check className='w - 4 h - 4 mr - 2 text - green - 400 flex - shrink - 0' />                              {use_case}                          Use Cases;
                        </h4>;
                        <ul className="space - y-2">;
                          {service.use_cases.map ((use_case, useCaseIndex) => (
                            <li key={useCaseIndex} className="flex items - center text - gray - 300 text - sm">;
                              <Check className="w - 4 h - 4 mr - 2 text - green - 400 flex - shrink - 0" />;
                              {use_case}
                            </li>))}
                        </ul>;
                      </div>;
                    </div>;
                    <div className='flex flex - wrap gap - 4'>;
                      <Button;
                        href={service.website}
                        size='sm';
                        className='bg - cursor - blue hover:bg - blue - 600'                      >                    <div className="flex flex - wrap gap - 4">;
                      <Button;
                        href={service.website}
                        size="sm";
                        className="bg - cursor - blue hover:bg - blue - 600";
                        Visit Website;
                      </Button>;
                      <Button;
                        href={service.demo}
                        variant='outline';
                        size='sm';
                        className='border - cursor - blue text - cursor - blue hover:bg - cursor - blue hover:text - white'                      >                        variant="outline";
                        size="sm";
                        className="border - cursor - blue text - cursor - blue hover:bg - cursor - blue hover:text - white";
                      >;
                        Try Demo;
                      </Button>;
                    </div>;
                  </div>;
                  {/* Pricing & Market Info */}
                  <div className='lg:col - span - 1'>;
                    <div className='bg - gray - 800 / 50 rounded - xl p - 6 border border - gray - 700'>;
                      <h4 className='text - lg font - semibold text - white mb - 4 flex items - center'>;
                        <BarChart3 className='w - 5 h - 5 mr - 2 text - cursor - blue' />;
                      </h4>;
                      <div className='space - y-4'>;
                        <div>;
                          <p className='text - sm text - gray - 400 mb - 1'>;
                            Market Price Range;
                          </p>;
                          <p className='text - lg font - bold text - white'>;
                            {service.market_price}
                          </p>;
                        </div>;
                        <div>;
                          <p className='text - sm text - gray - 400 mb - 1'>;
                            Our Pricing;
                          </p>;
                          <div className='space - y-2'>;
                            {Object.entries (service.pricing).map (
                              ([tier, details]) => (
                                <div;
                                  key={tier}
                                  className='flex justify - between items - center';
                                >;
                                  <span className='text - sm text - gray - 300 capitalize'>;
                                    {tier}
                                  </span>;
                                  <span className='text - sm font - semibold text - white'>;
                                    ${details.price}/mo;
                                  </span>;
                                </div>))}                          </div>;
                        </div>;
                        <div>                          <p className="text - sm text - gray - 400 mb - 1">Our Pricing</p>;
                          <div className="space - y-2">;
                            {Object.entries (service.pricing).map (([tier, details]) => (
                              <div key={tier} className="flex justify - between items - center">;
                                <span className="text - sm text - gray - 300 capitalize">{tier}</span>;
                                <span className="text - sm font - semibold text - white">${details.price}/mo</span>;
                              </div>))}
                        </div>;
                        <div>;
                          <p className='text - sm text - gray - 400 mb - 1'>;
                            Key Competitors;
                          </p>;
                          <div className='flex flex - wrap gap - 2'>;
                            {service.competitors.map (
                              (competitor, comp_index) => (
                                <span;
                                  key={comp_index}
                                  className='px - 2 py - 1 bg - gray - 700 rounded text - xs text - gray - 300';
                                >;
                                  {competitor}
                                </span>))}                          </div>                          <p className="text - sm text - gray - 400 mb - 1">Key Competitors</p>;
                          <div className="flex flex - wrap gap - 2">;
                            {service.competitors.map ((competitor, comp_index) => (
                              <span key={comp_index} className="px - 2 py - 1 bg - gray - 700 rounded text - xs text - gray - 300">;
                                {competitor}
                              </span>))}

=======                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
            ))}

      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Why Choose Zion Tech Group Micro SaaS Services?





=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </Card>
          </div>
        </div>
      </section>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Card className='card - hover border - gradient - blue text - center'>;
              <div className='p - 6'>;
                <div className='w - 16 h - 16 mx - auto mb - 4 rounded - 2xl bg - cursor - blue / 10 flex items - center justify - center'>;
                  <Globe className='w - 8 h - 8 text - cursor - blue' />;
                </div>;
                <h3 className='text - xl font - bold text - white mb - 3'>;
                  Global Infrastructure;
                </h3>;
                <p className='text - gray - 400 text - sm'>;
                  Worldwide availability with enterprise - grade reliability;
                </p>              </div>              Why Choose Zion Tech Group Micro SaaS Services?;
            </h2>;
            <p className="text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
              We combine professional - grade features with competitive pricing to deliver exceptional value for your business.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
            <Card className="card - hover border - gradient - blue text - center">;
              <div className="p - 6">;
                <div className="w - 16 h - 16 mx - auto mb - 4 rounded - 2xl bg - cursor - blue / 10 flex items - center justify - center">;
                  <Star className="w - 8 h - 8 text - cursor - blue" />;
                </div>;
                <h3 className="text - xl font - bold text - white mb - 3">Professional Quality</h3>;
                <p className="text - gray - 400 text - sm">Enterprise - grade features and reliability at micro SaaS prices</p>;
              </div>;
            </Card>;
            <Card className="card - hover border - gradient - blue text - center">;
              <div className="p - 6">;
                <div className="w - 16 h - 16 mx - auto mb - 4 rounded - 2xl bg - cursor - blue / 10 flex items - center justify - center">;
                  <TrendingUp className="w - 8 h - 8 text - cursor - blue" />;
                </div>;
                <h3 className="text - xl font - bold text - white mb - 3">Competitive Pricing</h3>;
                <p className="text - gray - 400 text - sm">Market - competitive pricing with better value than alternatives</p>;
              </div>;
            </Card>;
            <Card className="card - hover border - gradient - blue text - center">;
              <div className="p - 6">;
                <div className="w - 16 h - 16 mx - auto mb - 4 rounded - 2xl bg - cursor - blue / 10 flex items - center justify - center">;
                  <Users className="w - 8 h - 8 text - cursor - blue" />;
                </div>;
                <h3 className="text - xl font - bold text - white mb - 3">Expert Support</h3>;
                <p className="text - gray - 400 text - sm">Professional support and guidance for your business needs</p>;
              </div>;
            </Card>;
            <Card className="card - hover border - gradient - blue text - center">;
              <div className="p - 6">;
                <div className="w - 16 h - 16 mx - auto mb - 4 rounded - 2xl bg - cursor - blue / 10 flex items - center justify - center">;
                  <Globe className="w - 8 h - 8 text - cursor - blue" />;
                </div>;
                <h3 className="text - xl font - bold text - white mb - 3">Global Infrastructure</h3>;
                <p className="text - gray - 400 text - sm">Worldwide availability with enterprise - grade reliability</p>;
=======
      {/* CTA Section */}
      <section className='section - padding bg - gradient - to - r from - cursor - blue to - blue - 600 relative overflow - hidden'>;
        <div className='absolute inset - 0 bg - dots opacity - 10' />;
        <div className='container - cursor text - center relative z - 10'>;
          <h2 className='text - responsive - lg font - bold text - white mb - 8 text - shadow - lg'>;
            Ready to Get Started?;
          </h2>;
          <p className='text - responsive - md text - blue - 100 mb - 12 max - w-4xl mx - auto leading - relaxed'>;
            Choose the micro SaaS service that fits your business needs and;
            start transforming your operations today.;
          </p>;
          <div className='flex flex - col sm:flex - row gap - 6 justify - center'>;
            <Button;
              href='/contact';
              size='lg';
              className='bg - white text - cursor - blue hover:bg - gray - 100 shadow - 2xl hover - glow'            >;
              Get Started;
            </Button>;
            <Button;
              href='/pricing';
              variant='outline';
              size='lg';
              className='border - white text - white hover:bg - white hover:text - cursor - blue shadow - 2xl'            >            Ready to Get Started?;
          </h2>;
          <p className="text - responsive - md text - blue - 100 mb - 12 max - w-4xl mx - auto leading - relaxed">;
            Choose the micro SaaS service that fits your business needs and start transforming your operations today.;
          </p>;
          <div className="flex flex - col sm: flex - row gap - 6 justify - center">;
            <Button;
              href="/contact";
              size="lg";
              className="bg - white text - cursor - blue hover:bg - gray - 100 shadow - 2xl hover - glow";
            >;
              Get Started;
            </Button>;
            <Button;
              href='/pricing';
              variant='outline';
              size='lg';
              className='border - white text - white hover:bg - white hover:text - cursor - blue shadow - 2xl'              href="/pricing";
              variant="outline";
              size="lg";
              className="border - white text - white hover:bg - white hover:text - cursor - blue shadow - 2xl";
              View Pricing;

            <Button

  );
}
    </>);
}
              href='/pricing'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl'              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
);
}
            <Button
=======

  );
}

=======
    </>);
}=======

            <Button
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  );
}
            <Button

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
