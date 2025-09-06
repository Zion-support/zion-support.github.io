
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

import {

=======
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  Brain,
  MessageSquare,
  Image,
  Video,
  FileText,
  BarChart3,
  Users,
  Zap,
  ArrowRight,
  Star,
  Check,
  ExternalLink,
  TrendingUp,

  Brain;
  MessageSquare
  Image
  Video
  FileText
  BarChart3
  Users

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  Zap;
  ArrowRight;
  Star;
  Check;
  ExternalLink;
  TrendingUp;
  Shield;
  Globe

      bestFor: 'Content creators, developers, researchers'
    }
    {
      name: 'Midjourney'
      description:
        'AI-powered image generation tool that creates stunning artwork, illustrations, and designs from text descriptions.'
      category: 'AI Art'
      pricing: '$10 - $30/month'
      rating: 4.7
      users: '1M+'
      icon: <Image className='w-8 h-8 text-purple-400' />
      color: 'bg-gradient-to-br from-purple-500 to-pink-600'
      features: [
        'Text-to-image generation'
        'High-resolution output'
        'Artistic styles'
        'Commercial usage rights'
        'Community features'
        'Discord integration'
      ]
      website: 'https://midjourney.com'
      useCase:
        'Perfect for designers, marketers, content creators, and businesses needing custom visual content.'
      pros: [
        'High-quality output'
        'Creative control'
        'Commercial rights'
        'Active community'
      ]
      cons: [
        'Discord-only interface'
        'Limited customization'
        'Monthly subscription'
      ]
      bestFor: 'Designers, marketers, content creators'
    }
    {
      name: 'Jasper'
      description:
        'AI writing assistant that helps create marketing copy, blog posts, social media content, and more.'
      category: 'AI Writing'
      pricing: '$39 - $125/month'
      rating: 4.6
      users: '100K+'
      icon: <FileText className='w-8 h-8 text-blue-400' />
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
      features: [
        'Marketing copy generation'
        'Blog post writing'
        'Social media content'
        'SEO optimization'
        'Brand voice training'
        'Team collaboration'
      ]
      website: 'https://jasper.ai'
      useCase:
        'Essential for marketing teams, content creators, and businesses that need high-quality written content at scale.'
      pros: [
        'Specialized for marketing'
        'Brand voice training'
        'SEO optimization'
        'Team features'
      ]
      cons: ['Expensive', 'Limited free trial', 'Can be repetitive']
      bestFor: 'Marketing teams, content creators, businesses'
    }
    {

  ];
  const categories = [
    'All'
    'AI Assistant'
    'AI Art'
    'AI Writing'
    'AI Video'
    'AI Copywriting'
    'AI SEO'
  ];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const filteredTools =
    selectedCategory === 'All'
      ? aiTools
      : aiTools.filter(tool => tool.category === selectedCategory);  const filteredTools = selectedCategory === 'All'
    ? aiTools
    : aiTools.filter(tool => tool.category === selectedCategory);

  return (
    <>
      <Head>
        <title>AI Business Tools - Zion Tech Group</title>

              >
                Get AI Consultation
              </Button>
            </div>
          </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                {aiTools.length}+
              </div>
              <div className='text-gray-400 text-sm'>AI Tools</div>
            </div>
            <div className='text-center group'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300'>
                7
              </div>
              <div className='text-gray-400 text-sm'>Categories</div>
            </div>
            <div className='text-center group'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300'>
                4.6+
              </div>
              <div className='text-gray-400 text-sm'>Avg Rating</div>
            </div>
            <div className='text-center group'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300'>
                130M+
              </div>
              <div className='text-gray-400 text-sm'>Total Users</div>            </div>                {aiTools.length}+
              </div>

              <div className="text-gray-400 text-sm">AI Tools</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                7
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                4.6+
              </div>
              <div className="text-gray-400 text-sm">Avg Rating</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                130M+
              </div>
              <div className="text-gray-400 text-sm">Total Users</div>
            </div>
          </div>
        </div>
      </section>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${;
                  selectedCategory === category;
                    ? 'bg-green-600 text-white shadow-lg';
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white';
                }`}
              >;
                {category}

      {/* Tools Grid */}
      <section id='tools' className='py-24 bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>
              {selectedCategory === 'All'
                ? 'All AI Tools'
                : `${selectedCategory} Tools`}

            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              {selectedCategory === 'All'
                ? 'Discover the most powerful AI tools that are transforming how businesses operate and create content.'
                : `Explore the best ${selectedCategory.toLowerCase()} tools to enhance your business capabilities.`}
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {filteredTools.map((tool, index) => (
              <Card
                key={index}
                className='group border border-gray-800 hover:border-green-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='flex items-start space-x-6'>
                  <div className='relative'>
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {tool.icon}
                    </div>
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center justify-between mb-2'>
                      <h3 className='text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300'>
                        {tool.name}
                      </h3>
                      <div className='flex items-center space-x-2'>
                        <Star className='w-4 h-4 text-yellow-400 fill-current' />
                        <span className='text-sm text-gray-300'>
                          {tool.rating}
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center space-x-4 mb-3 text-sm text-gray-400'>
                      <span className='px-2 py-1 bg-gray-800 rounded-full'>
                        {tool.category}
                      </span>
                      <span>{tool.users} users</span>
                      <span className='text-green-400'>{tool.pricing}</span>
                    </div>
                    <p className='text-gray-400 leading-relaxed mb-4'>
                      {tool.description}
                    </p>

                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'>
                        Key Features:
                      </h4>
                      <div className='grid grid-cols-2 gap-2'>
                        {tool.features
                          .slice(0, 4)
                          .map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className='flex items-center text-sm text-gray-400'
                            >
                              <Check className='w-3 h-3 text-green-400 mr-2 flex-shrink-0' />
                              {feature}
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'>
                        Best For:
                      </h4>
                      <p className='text-sm text-gray-400'>{tool.bestFor}</p>
                    </div>
                    <div className='flex items-center justify-between'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Tools Grid */}


            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              {selectedCategory === 'All'
                ? 'Discover the most powerful AI tools that are transforming how businesses operate and create content.'
                : `Explore the best ${selectedCategory.toLowerCase()} tools to enhance your business capabilities.`}
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {filteredTools.map((tool, index) => (
=======
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
              {selectedCategory === 'All';
                ? 'Discover the most powerful AI tools that are transforming how businesses operate and create content.';
                : `Explore the best ${selectedCategory && selectedCategory.toLowerCase()} tools to enhance your business capabilities.`}
            </p>;
          </div>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;
            {filteredTools && filteredTools.map((tool, index) => (;
              <Card
                key={index}
                className='group border border-gray-800 hover:border-green-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1'
                style={{ animationDelay: `${index * 0 && 0.1}s` }}>;
                <div className='flex items-start space-x-6'>;
                  <div className='relative'>;
                    <div

      {/* Category Filter */}
      <section className='py - 16 bg - gray - 900'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='flex flex - wrap justify - center gap - 4'>;
            {categories.map (category => (              <button      <section className="py - 16 bg - gray - 900">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="flex flex - wrap justify - center gap - 4">;
            {categories.map ((category) => (
                key={category}
                on_click={() => setSelectedCategory (category)}
                className={`px - 6 py - 3 rounded - full text - sm font - medium transition - all duration - 300 ${
                  selected_category === category;
                    ? 'bg - green - 600 text - white shadow - lg';
                    : 'bg - gray - 800 text - gray - 300 hover:bg - gray - 700 hover:text - white';
                }`}
              >;
                {category}
              </button>))}
          </div>;
        </div>;
      </section>;
      {/* Tools Grid */}
      <section id='tools' className='py - 24 bg - black'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight'>;
              {selected_category === 'All';
                ? 'All AI Tools';
                : `${selected_category} Tools`}
            <p className='text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
              {selected_category === 'All';
                ? 'Discover the most powerful AI tools that are transforming how businesses operate and create content.';
                : `Explore the best ${selected_category.toLowerCase ()} tools to enhance your business capabilities.`}
            </p>;
          </div>;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>;
            {filtered_tools.map ((tool, index) => (
              <Card;
                key={index}
                className='group border border - gray - 800 hover:border - green - 500 / 30 hover:bg - gray - 900 / 80 transition - all duration - 300 hover:-translate - y-1';
                style={{ animation_delay: `${index * 0.1}s` }}
              >;
                <div className='flex items - start space - x-6'>;
                  <div className='relative'>;
                    <div;
                      className={`w - 20 h - 20 rounded - 2xl flex items - center justify - center text - 3xl bg - gradient - to - br ${tool.color} shadow - xl group - hover:scale - 110 transition - transform duration - 300`}
                    >;

                      {tool.icon}
                    </div>;
                  </div>;
                  <div className='flex - 1'>;
                    <div className='flex items - center justify - between mb - 2'>;
                      <h3 className='text - 2xl font - bold text - white group - hover:text - green - 400 transition - colors duration - 300'>;
                        {tool.name}
                      </h3>;
                      <div className='flex items - center space - x-2'>;
                        <Star className='w - 4 h - 4 text - yellow - 400 fill - current' />;
                        <span className='text - sm text - gray - 300'>;
                          {tool.rating}





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'>
                        Key Features:
                      </h4>
                      <div className='grid grid-cols-2 gap-2'>
                        {tool.features
                          .slice(0, 4)
                          .map((feature, featureIndex) => (
=======
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${tool && tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>;
                      {tool && tool.icon}
                    </div>;
                  </div>;
                  <div className='flex-1'>;
                    <div className='flex items-center justify-between mb-2'>;
                      <h3 className='text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300'>;
                        {tool && tool.name}
                      </h3>;
                      <div className='flex items-center space-x-2'>;
                        <Star className='w-4 h-4 text-yellow-400 fill-current' />;
                        <span className='text-sm text-gray-300'>;
                          {tool && tool.rating}
                        </span>;
                      </div>;
                    </div>;
                    <div className='flex items-center space-x-4 mb-3 text-sm text-gray-400'>;
                      <span className='px-2 py-1 bg-gray-800 rounded-full'>;
                        {tool && tool.category}
                      </span>;
                      <span>{tool && tool.users} users</span>;
                      <span className='text-green-400'>{tool && tool.pricing}</span>;
                    </div>;
                    <p className='text-gray-400 leading-relaxed mb-4'>;
                      {tool && tool.description}
                    </p>;
                    <div className='mb-4'>;
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'>;
                        Key Features:;
                      </h4>;
                      <div className='grid grid-cols-2 gap-2'>;
                        {tool && tool.features;
                          .slice(0, 4);
                          .map((feature, featureIndex) => (;
                            <div
                              key={featureIndex}
                              className='flex items-center text-sm text-gray-400'>;
                              <Check className='w-3 h-3 text-green-400 mr-2 flex-shrink-0' />;
                              {feature}
                            </div>;
                          ))}

                      </div>;
                    </div>;

                    <div className='mb-4'>;
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'>;
                        Best For:;
                      </h4>;
                      <p className='text-sm text-gray-400'>{tool && tool.bestFor}</p>;
                    </div>;

                    <div className='flex items-center justify-between'>;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                      <Button
                        href={tool.website}
                        variant='outline'
                        size='sm'
                        className='group-hover:border-green-500 group-hover:text-green-400'
                      >
                        Visit Website
                        <ExternalLink className='w-4 h-4 ml-2' />
                      </Button>
                      <div className='text-right'>
                        <div className='text-xs text-gray-500 mb-1'>
                          Use Case:
                        </div>
                        <div className='text-sm text-gray-300 max-w-xs'>
                          {tool.useCase}
                        </div>                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 mb-1">Use Case:</div>
                        <div className="text-sm text-gray-300 max-w-xs">{tool.useCase}</div>

                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Benefits Section */}
      <section className='py-24 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              Why Choose AI Tools?
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              AI-powered tools are revolutionizing how businesses operate
              create content, and serve customers.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card className='text-center'>
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600'>
                <Zap className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold mb-4 text-white'>
                10x Productivity
              </h3>
              <p className='text-gray-400'>
                AI tools can automate repetitive tasks, generate content, and
                provide insights that would take humans hours or days to
                complete.
              </p>
            </Card>
            <Card className='text-center'>
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600'>
                <TrendingUp className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold mb-4 text-white'>
                Data-Driven Decisions
              </h3>
              <p className='text-gray-400'>
                AI analytics provide deep insights into customer behavior
                market trends, and business performance for better
                decision-making.
              </p>
            </Card>
            <Card className='text-center'>
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600'>
                <Users className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold mb-4 text-white'>
                Enhanced Customer Experience
              </h3>
              <p className='text-gray-400'>
                AI-powered chatbots, personalization, and automation create
                seamless, personalized experiences for your customers.              </p>              Why Choose AI Tools?
            </h2>

            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              AI-powered tools are revolutionizing how businesses operate, create content, and serve customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">10x Productivity</h3>
              <p className="text-gray-400">
                AI tools can automate repetitive tasks, generate content, and provide insights that would take humans hours or days to complete.
              </p>
            </Card>
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Data-Driven Decisions</h3>
              <p className="text-gray-400">
                AI analytics provide deep insights into customer behavior, market trends, and business performance for better decision-making.
              </p>
            </Card>
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Enhanced Customer Experience</h3>
              <p className="text-gray-400">
                AI-powered chatbots, personalization, and automation create seamless, personalized experiences for your customers.
              </p>
            </Card>
          </div>
        </div>
      </section>

              Explore More Tools
            </Button>
          </div>
        </div>
      </section>
    </>

}
                        className='group-hover:border-green-500 group-hover:text-green-400'>;
                        Visit Website;
                        <ExternalLink className='w-4 h-4 ml-2' />;
                      </Button>;
                      <div className='text-right'>;
                        <div className='text-xs text-gray-500 mb-1'>;
                          Use Case:;
                        </div>;
                        <div className='text-sm text-gray-300 max-w-xs'>;
                          {tool && tool.useCase}
                        </div>                      </div>                      ;
                      <div className="text-right">;
                        <div className="text-xs text-gray-500 mb-1">Use Case:</div>;
                        <div className="text-sm text-gray-300 max-w-xs">{tool && tool.useCase}</div>;
                    </div>;
                  </div>;
                </div>;
              </Card>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* AI Benefits Section */}
      <section className='py-24 bg-gray-900'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Why Choose AI Tools?;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
              AI-powered tools are revolutionizing how businesses operate,;
              create content, and serve customers.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>;
            <Card className='text-center'>;
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600'>;
                <Zap className='w-8 h-8 text-white' />;
              </div>;
              <h3 className='text-xl font-bold mb-4 text-white'>;
                10x Productivity;
              </h3>;
              <p className='text-gray-400'>;
                        </span>;
                      </div>;
                    </div>;
                    <div className='flex items - center space - x-4 mb - 3 text - sm text - gray - 400'>;
                      <span className='px - 2 py - 1 bg - gray - 800 rounded - full'>;
                        {tool.category}
                      </span>;
                      <span>{tool.users} users</span>;
                      <span className='text - green - 400'>{tool.pricing}</span>;
                    </div>;
                    <p className='text - gray - 400 leading - relaxed mb - 4'>;
                      {tool.description}
                    </p>;
                    <div className='mb - 4'>;
                      <h4 className='text - sm font - semibold text - gray - 300 mb - 2'>;
                        Key Features:;
                      </h4>;
                      <div className='grid grid - cols - 2 gap - 2'>;
                        {tool.features;
                          .slice (0, 4);
                          .map ((feature, feature_index) => (
                            <div;
                              key={feature_index}
                              className='flex items - center text - sm text - gray - 400';
                            >;
                              <Check className='w - 3 h - 3 text - green - 400 mr - 2 flex - shrink - 0' />;
                              {feature}
                            </div>))}
                      </div>;
                    </div>;
                    <div className='mb - 4'>;
                      <h4 className='text - sm font - semibold text - gray - 300 mb - 2'>;
                        Best For:;
                      </h4>;
                      <p className='text - sm text - gray - 400'>{tool.best_for}</p>;
                    </div>;
                    <div className='flex items - center justify - between'>;
                      <Button;
                        href={tool.website}
                        variant='outline';
                        size='sm';
                        className='group - hover:border - green - 500 group - hover:text - green - 400';
                      >;
                        Visit Website;
                        <ExternalLink className='w - 4 h - 4 ml - 2' />;
                      </Button>;
                      <div className='text - right'>;
                        <div className='text - xs text - gray - 500 mb - 1'>;
                          Use Case:;
                        </div>;
                        <div className='text - sm text - gray - 300 max - w-xs'>;
                          {tool.use_case}
                        </div>                      </div>;
                      <div className="text - right">;
                        <div className="text - xs text - gray - 500 mb - 1">Use Case:</div>;
                        <div className="text - sm text - gray - 300 max - w-xs">{tool.use_case}</div>;
                    </div>;
                  </div>;
                </div>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* AI Benefits Section */}
      <section className='py - 24 bg - gray - 900'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight'>;
              Why Choose AI Tools?;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
              AI - powered tools are revolutionizing how businesses operate,
              create content, and serve customers.;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>;
            <Card className='text - center'>;
              <div className='w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center bg - gradient - to - br from - blue - 500 to - indigo - 600'>;
                <Zap className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - bold mb - 4 text - white'>;
                10x Productivity;
              </h3>;
              <p className='text - gray - 400'>;
                AI tools can automate repetitive tasks, generate content, and;
                provide insights that would take humans hours or days to;
                complete.;
              </p>;
            </Card>;

            <Card className='text - center'>;
              <div className='w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center bg - gradient - to - br from - green - 500 to - emerald - 600'>;
                <TrendingUp className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - bold mb - 4 text - white'>;
                Data - Driven Decisions;
              </h3>;
              <p className='text - gray - 400'>;
                AI analytics provide deep insights into customer behavior,
                market trends, and business performance for better;
                decision - making.;
              </p>;
            </Card>;
            <Card className='text - center'>;
              <div className='w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center bg - gradient - to - br from - purple - 500 to - pink - 600'>;
                <Users className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - bold mb - 4 text - white'>;
                Enhanced Customer Experience;
              </h3>;
              <p className='text - gray - 400'>;
                AI - powered chatbots, personalization, and automation create;
                seamless, personalized experiences for your customers.              </p>              Why Choose AI Tools?;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
              AI - powered tools are revolutionizing how businesses operate, create content, and serve customers.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            <Card className="text - center">;
              <div className="w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center bg - gradient - to - br from - blue - 500 to - indigo - 600">;
                <Zap className="w - 8 h - 8 text - white" />;
              </div>;
              <h3 className="text - xl font - bold mb - 4 text - white">10x Productivity</h3>;
              <p className="text - gray - 400">;
                AI tools can automate repetitive tasks, generate content, and provide insights that would take humans hours or days to complete.;
              </p>;
            </Card>;
            <Card className="text - center">;
              <div className="w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center bg - gradient - to - br from - green - 500 to - emerald - 600">;
                <TrendingUp className="w - 8 h - 8 text - white" />;
              </div>;
              <h3 className="text - xl font - bold mb - 4 text - white">Data - Driven Decisions</h3>;
              <p className="text - gray - 400">;
                AI analytics provide deep insights into customer behavior, market trends, and business performance for better decision - making.;
              </p>;
            </Card>;
            <Card className="text - center">;
              <div className="w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center bg - gradient - to - br from - purple - 500 to - pink - 600">;
                <Users className="w - 8 h - 8 text - white" />;
              </div>;
              <h3 className="text - xl font - bold mb - 4 text - white">Enhanced Customer Experience</h3>;
              <p className="text - gray - 400">;
                AI - powered chatbots, personalization, and automation create seamless, personalized experiences for your customers.;

              </p>;
            </Card>;
          </div>;
        </div>;
      </section>;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              Explore More Tools;
            </Button>;
          </div>;
        </div>;
      </section>;


=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </>);
=======
);
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
