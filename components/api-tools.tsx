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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  Code;
  Database, ;
  Globe, ;
  Shield, ;
  Zap, ;
  Bot, ;
  BarChart3, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
  Github,
  Terminal,} from 'lucide-react';import {
  Code;
  Database,
  Globe,
  Shield,
  Zap,
  Bot,
  BarChart3,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  Lock;
  ArrowRight;
  CheckCircle;
  Star;
  ExternalLink;
  Play;
  BookOpen;
  Github;
  Terminal;
=======
  Terminal
} from 'lucide-react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

    'All',
    'Development',
    'Data',
    'Location',
    'Security',
    'Integration',
    'AI / ML',
    'Analytics',
  const filteredTools =
    selectedCategory === 'All'
      ? apiTools
      : apiTools && apiTools.filter(tool => tool && tool.category === selectedCategory);
  return (

=======
  ];
  const [selected_category, setSelectedCategory] = React.useState ('All');
;
  const filtered_tools =;
    selected_category === 'All';
      ? api_tools;
      : api_tools.filter (tool => tool.category === selected_category);
  return (
    <>;
      <Head>  const filtered_tools = selected_category === 'All';
    ? api_tools;
    : api_tools.filter (tool => tool.category === selected_category);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <>;
      <Head>;
        <title>;
          API Tools & Developer Services | Zion Tech Group - Powerful APIs for;
          Modern Applications;
        </title>;
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
              </button>;
            ))}
      {/* API Tools Grid */}
      <section className='py-24 bg-gray-900'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-20'>;
            <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-white'>;
              {selectedCategory === 'All';
                ? 'All API Tools';
                : `${selectedCategory} APIs`}
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
                          {tool.status}
                        </span>
                      </div>
                    </div>
                          {tool.users}
                        </div>;
                        <div className='text - xs text - gray - 500'>Users</div>;
                      </div>;
                      <div className='text - center p - 3 bg - gray - 800 / 50 rounded - lg'>;
                        <div className='text - lg font - bold text - green - 400'>;
                          {tool.response_time}
                        </div>;
                        <div className='text - xs text - gray - 500'>Response</div>;
                      </div>;
                      <div className='text - center p - 3 bg - gray - 800 / 50 rounded - lg'>;
                        <div className='text - sm font - medium text - gray - 300'>;
                          Starting at;
                        </div>;
                        <div className='text - lg font - bold text - green - 400'>;
                          {tool.pricing.free}
                          <li
                            key={featureIndex}
                            className='flex items-center text-gray-300 text-sm'>;
                            <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />;
                            {feature}
                          </li>;
                        ))}
                      <Button
                        href={tool && tool.website}
                        variant='primary'
                        size='sm'
                        className='bg-indigo-600 hover:bg-indigo-700'>;
                        <ExternalLink className='w-4 h-4 mr-2' />                        Visit API;
                      </Button>;
                      <Button
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-lg font-bold text-indigo-400">{tool.users}</div>
                        <div className="text-xs text-gray-500">Users</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-lg font-bold text-green-400">{tool.responseTime}</div>
                        <div className="text-xs text-gray-500">Response</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-sm font-medium text-gray-300">Starting at</div>
                        <div className="text-lg font-bold text-green-400">{tool.pricing.free}</div>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {tool.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                        href={tool && tool.docs}                      {tool && tool.description}
                    </p>;

                    <div className="grid grid-cols-3 gap-4 mb-6">;
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">;
                        <div className="text-lg font-bold text-indigo-400">{tool && tool.users}</div>;
                        <div className="text-xs text-gray-500">Users</div>;
                      </div>;
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">;
                        <div className="text-lg font-bold text-green-400">{tool && tool.responseTime}</div>;
                        <div className="text-xs text-gray-500">Response</div>;
                      </div>;
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">;
                        <div className="text-sm font-medium text-gray-300">Starting at</div>;
                        <div className="text-lg font-bold text-green-400">{tool && tool.pricing.free}</div>;
                      </div>;
                    </div>;

                    <ul className="space-y-2 mb-6">;
                      {tool && tool.features.slice(0, 3).map((feature, featureIndex) => (;
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">;
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                          {feature}
                        </li>;
                      ))}
                      <Button
                        href={tool && tool.website}
                        variant="primary"
                        size="sm"
                        className="bg-indigo-600 hover:bg-indigo-700">;
                        <ExternalLink className="w-4 h-4 mr-2" />;
                        Visit API;
                      </Button>;
                      <Button
                        href={tool && tool.docs}
                        variant='outline'
                        size='sm'
                        className='border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-indigo-400'>;
                        <BookOpen className='w-4 h-4 mr-2' />                        Documentation;
                      </Button>;
                      <Button
                        href={tool && tool.github}                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-indigo-400">;
                        <BookOpen className="w-4 h-4 mr-2" />;
                      </Button>;
                      <Button
                        href={tool && tool.github}
                        variant='ghost'
                        size='sm'
                        className='text-gray-400 hover:text-indigo-400'>;
                        <Github className='w-4 h-4 mr-2' />                        GitHub                        variant="ghost";
                        size="sm";
                        className="text-gray-400 hover:text-indigo-400";
                      >;
                        <Github className="w-4 h-4 mr-2" />;
                      </Button>;
                    </div>;
                  </div>;
                </div>;
              </Card>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
              </Button>
            </Card>
          </div>
        </div>
      </section>
=======
          </div>;
        </div>;
      </section>;

      {/* Developer Resources */}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      <section className='py-24 bg-gray-800'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-20'>;
            <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-white'>;
              Developer Resources;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              Everything you need to get started and build amazing applications;
              with our APIs.;
            </p>;
          </div>;

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>;
            <Card className='text-center border border-gray-700 hover:border-indigo-500/30'>;
              <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6'>;
                <BookOpen className='w-8 h-8 text-indigo-400' />;
              </div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Comprehensive Documentation;
              </h3>;
              <p className='text-gray-400 mb-6'>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                Detailed API references, code examples, and integration guides;
                for every service.;
              </p>;
              <Button href='/docs' variant='outline' size='sm'>;
                Explore Docs;
                <ArrowRight className='w-4 h-4 ml-2' />              </Button>;
            </Card>;

            <Card className='text-center border border-gray-700 hover:border-indigo-500/30'>;
              <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6'>;
                <Play className='w-8 h-8 text-indigo-400' />;
              </div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Interactive Playground;
              </h3>;
              <p className='text-gray-400 mb-6'>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                Test APIs directly in your browser with our interactive testing;
                environment.;
              </p>;
              <Button href='/playground' variant='outline' size='sm'>;
                Try Playground;
                <ArrowRight className='w-4 h-4 ml-2' />;
              </Button>;
            </Card>;

            <Card className='text-center border border-gray-700 hover:border-indigo-500/30'>;
              <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6'>;
                <Github className='w-8 h-8 text-indigo-400' />;
              </div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Open Source SDKs;
              </h3>;
              <p className='text-gray-400 mb-6'>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                Official SDKs and client libraries for popular programming;
                languages and frameworks.;
              </p>;
              <Button href='/sdk' variant='outline' size='sm'>;
                Browse SDKs;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              </Button>;
            </Card>;
          </div>;
        </div>;
      </section>;
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
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </>
              className='border-white text-white hover:bg-white hover:text-indigo-600 shadow-2xl'>              href="/docs";
              variant="outline";
              size="lg";
              className="border-white text-white hover:bg-white hover:text-indigo-600 shadow-2xl";
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              View Documentation;
            </Button>;
          </div>;
        </div>;
      </section>;
    </>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
