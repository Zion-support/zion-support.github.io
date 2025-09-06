import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

import {

import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import {;
  Code,;
  Database,;
  Globe,;
  Shield,;
  Zap,;
  Bot,;
  BarChart3,;
  Lock,;
  ArrowRight,;
  CheckCircle,;
  Star,;
  ExternalLink,;
  Play,;
  BookOpen,;
  Github,;
  Terminal,;} from 'lucide-react';import { ;
  Code;
  Database, ;
  Globe, ;
  Shield, ;
  Zap, ;
  Bot, ;
  BarChart3, ;
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {
  Code,
  Database,
  Globe,
  Shield,
  Zap,
  Bot,
  BarChart3,
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  ExternalLink,
  Play,
  BookOpen,
  Code;
  Database,
  Globe,
  Shield,
  Zap,
  Bot,
  BarChart3,
  Lock;
  ArrowRight;
  CheckCircle;
  Star;
  ExternalLink;
  Play;
  BookOpen;
  Github;
  ];
  const [selected_category, setSelectedCategory] = React.useState ('All');
;
  const filtered_tools =;
    selected_category === 'All';
      ? api_tools;
      : api_tools.filter (tool => tool.category === selected_category);
  return (
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <Terminal className="w-4 h-4 mr-2" />
            Developer-First API Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Powerful API Tools & Services
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Build faster, scale better, and deliver more with our comprehensive collection of developer APIs. Each tool is designed for performance, reliability, and ease of integration.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
      <section className='relative py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0 && 0.15),transparent_50%)]' />;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0 && 0.1),transparent_50%)]' />;

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6'>;
            <Terminal className='w-4 h-4 mr-2' />;
            Developer-First API Solutions;
          </div>;
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white leading-tight'>;
            Powerful API Tools & Services;
          </h1>;
          <p className='text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed'>;
            Build faster, scale better, and deliver more with our comprehensive;
            collection of developer APIs. Each tool is designed for performance,;
            reliability, and ease of integration.;
          </p>;

          <div className='flex flex-wrap justify-center gap-4 mb-8'>;
            {categories && categories.map(category => (              <button      </Head>;

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 overflow-hidden">;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0 && 0.15),transparent_50%)]" />;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0 && 0.1),transparent_50%)]" />;

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">;
            <Terminal className="w-4 h-4 mr-2" />;
            Developer-First API Solutions;
          </div>;
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">;
            Powerful API Tools & Services;
          </h1>;
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">;
            Build faster, scale better, and deliver more with our comprehensive collection of developer APIs. Each tool is designed for performance, reliability, and ease of integration.;
          </p>;

          <div className="flex flex-wrap justify-center gap-4 mb-8">;
            {categories && categories.map((category) => (;
    <>
      <Head>


              <button

                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${;
                  selectedCategory === category;
                    ? 'bg-indigo-600 text-white shadow-lg';
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white';
                }`}
              >;
                {category}

          </div>;
        </div>;
      </section>;


            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              {filteredTools.length} APIs available. Each tool is
              production-ready with comprehensive documentation, SDKs, and
              support.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {filteredTools.map((tool, index) => (
              <Card
                key={index}
                className='group border border-gray-800 hover:border-indigo-500/30 transition-all duration-300'
                style={{ animationDelay: `${index * 0 && 0.1}s` }}>;
                <div className='flex items-start space-x-6'>;
                  <div className='relative'>;
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl ${tool && tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>;
                      {tool && tool.icon}
                    </div>;
                    <div
                        {tool.title}
                      </h3>;
                      <div className='flex items - center space - x-2'>;
                        <div className='flex items - center text - yellow - 400'>;
                          <Star className='w - 4 h - 4 fill - current' />;
                          <span className='ml - 1 text - sm font - medium'>;
                            {tool.rating}
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-indigo-400">;
                        <BookOpen className="w-4 h-4 mr-2" />;
                      </Button>;
                      <Button
              Developer Resources
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Everything you need to get started and build amazing applications
              with our APIs.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card className='text-center border border-gray-700 hover:border-indigo-500/30'>
              <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <BookOpen className='w-8 h-8 text-indigo-400' />
              </div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Comprehensive Documentation
              </h3>
              <p className='text-gray-400 mb-6'>
                Detailed API references, code examples, and integration guides
                for every service.
              </p>
              <Button href='/docs' variant='outline' size='sm'>
                Explore Docs
                <ArrowRight className='w-4 h-4 ml-2' />              </Button>
            </Card>
            <Card className='text-center border border-gray-700 hover:border-indigo-500/30'>
              <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <Play className='w-8 h-8 text-indigo-400' />
              </div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Interactive Playground
              </h3>
              <p className='text-gray-400 mb-6'>
                Test APIs directly in your browser with our interactive testing
                environment.
              </p>
              <Button href='/playground' variant='outline' size='sm'>
                Try Playground
                <ArrowRight className='w-4 h-4 ml-2' />
              </Button>
            </Card>
            <Card className='text-center border border-gray-700 hover:border-indigo-500/30'>
              <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <Github className='w-8 h-8 text-indigo-400' />
              </div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Open Source SDKs
              </h3>
              <p className='text-gray-400 mb-6'>
                Official SDKs and client libraries for popular programming
                languages and frameworks.
              </p>
              <Button href='/sdk' variant='outline' size='sm'>
                Browse SDKs
                <ArrowRight className='w-4 h-4 ml-2' />              </Button>                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </section>
      {/* Developer Resources */}
      <section className='py-24 bg-gray-800'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-20'>;
            <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-white'>;
              Developer Resources;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
              Everything you need to get started and build amazing applications;
              with our APIs.;
            </p>;
          </div>;
              </div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Comprehensive Documentation;
              </h3>;
                Detailed API references, code examples, and integration guides;
                for every service.;
              </p>;
              <Button href='/docs' variant='outline' size='sm'>;
                Explore Docs;
            </Card>;

            <Card className='text-center border border-gray-700 hover:border-indigo-500/30'>;
              <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6'>;
                <Play className='w-8 h-8 text-indigo-400' />;
              </div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Interactive Playground;
              </h3>;
                Test APIs directly in your browser with our interactive testing;
                environment.;
              </p>;
              <Button href='/playground' variant='outline' size='sm'>;
                Try Playground;
              </Button>;
            </Card>;

            <Card className='text-center border border-gray-700 hover:border-indigo-500/30'>;
              <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6'>;
                <Github className='w-8 h-8 text-indigo-400' />;
              </div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Open Source SDKs;
              </h3>;
                Official SDKs and client libraries for popular programming;
                languages and frameworks.;
              </p>;
              <Button href='/sdk' variant='outline' size='sm'>;
                Browse SDKs;
              </Button>;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}

      {/* CTA Section */}
      <section className='py-24 bg-gradient-to-r from-indigo-600 to-indigo-700 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0 && 0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>;
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'>;
          </h2>;
          <p className='text-xl text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed'>;
            Start integrating our APIs today and join thousands of developers;
            building the future.;
          </p>;
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>;
            <Button
              href='/contact'
              variant='secondary'
              size='lg'
              className='bg-white text-indigo-600 hover:bg-gray-100 shadow-2xl'>;
              Get API Access;
              <ArrowRight className='w-5 h-5 ml-2' />;
            </Button>;
            <Button
              href='/docs'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-indigo-600 shadow-2xl'            >              href="/docs"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600 shadow-2xl"
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
  );
}
