

import React from 'react';
import Head from 'next/head';

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';


import { Rocket;


  DollarSign;
  Users;
  BarChart3;
  Mail;
  Calendar;

  Rocket;
  DollarSign, ;
  Users, ;
  BarChart3, ;
  Mail, ;
  Calendar, ;
  Shield, ;
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';

import {





  Globe;


  Lightbulb;


export default function StartupToolsPage() {
  const startupTools = [
    {
      name: 'HubSpot'
      description:
        'All-in-one inbound marketing, sales, and customer service platform designed to help businesses grow better.'
      pricing: 'Free - $45/month'
      rating: 4.7
      users: '135K+'
      icon: <Target className='w-8 h-8 text-orange-400' />
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
        'Analytics & reporting'
        'Marketing automation'
        'Free tier available'
      ]
      website: 'https://hubspot.com'
      useCase:
        'Perfect for startups that want to implement inbound marketing strategies and manage customer relationships effectively.'
      pros: [
        'Free tier'
        'All-in-one solution'
        'Great for beginners'
        'Excellent support'
      ]
      cons: [
        'Can get expensive'
        'Complex for small teams'
        'Limited customization'
      ]


      website: 'https://mailchimp.com'
      useCase:
        'Ideal for startups that need to build email lists, nurture leads, and communicate with customers.'
      pros: ['Free tier', 'Easy to use', 'Good templates', 'Affordable']
      cons: ['Limited free features', 'Basic automation', 'Can be expensive']
      bestFor: 'E-commerce, content creators, small businesses'
    }
    {


      description:;
        'Scheduling automation platform that eliminates the back - and - forth of scheduling meetings and calls.',      category: 'Productivity',
      pricing: 'Free - $12 / month',
      rating: 4.8,
      users: '10M+',
      icon: <Calendar className='w - 8 h - 8 text - blue - 400' />,      description: 'Scheduling automation platform that eliminates the back - and - forth of scheduling meetings and calls.',




      description:;
        'Graphic design platform that makes it easy to create professional designs without design skills.',      category: 'Design',
      pricing: 'Free - $12.99 / month',
      rating: 4.6,
      users: '100M+',
      icon: <Lightbulb className='w - 8 h - 8 text - blue - 400' />,      description: 'Graphic design platform that makes it easy to create professional designs without design skills.',






      description:;
        'Customer messaging platform that helps businesses build better customer relationships through personalized experiences.',      category: 'Customer Support',
      pricing: '$39 - $999 / month',
      rating: 4.6,
      users: '25K+',
      icon: <Users className='w - 8 h - 8 text - green - 400' />,      description: 'Customer messaging platform that helps businesses build better customer relationships through personalized experiences.',




      description:;
        'Product analytics platform that helps you understand how users interact with your product and make data - driven decisions.',      category: 'Analytics',
      pricing: 'Free - $25 / month',
      rating: 4.5,
      users: '26K+',
      icon: <BarChart3 className='w - 8 h - 8 text - purple - 400' />,      color: 'bg - gradient - to - br from - green - 500 to - emerald - 600',
      features: [;
        'Live chat_customer messaging_help desk_user onboarding_analytics & reporting_integration ecosystem';
      ];
      website: 'https://intercom.com',
      use_case: 'Perfect for SaaS startups and online businesses that want to provide excellent customer support and user engagement.',
      pros: ['Great UXPowerful features_good integrations_mobile apps'],
      cons: ['ExpensiveComplex pricing_can be overwhelming'],
      best_for: 'SaaS companies, online businesses, customer support teams';


            </div>;
          </div>;
        </div>;
      </section>;


      {/* Category Filter */}
<section className='py-16 bg-gray-900'    />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />
          <div className='flex flex-wrap justify-center gap-4'    />
            {categories.map(category => (}
              <button;}
key={category}
                onClick={() =    /> setSelectedCategory(category,}
}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category;
                    ? 'bg-orange-600 text-white shadow-lg';}
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white';}
                }`}>



                {category}

              </button>


              </button>;

            ))}
          </div>
        </div>
      </section>
      {/* Tools Grid */}

<section id='tools' className='py-24 bg-black'    />
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'    />
          <div className='text-center mb-20'    />
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'    />
              {selectedCategory === 'All'}
                ? 'All Startup Tools'}
                : `${selectedCategory} Tools`}
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'    />
              {selectedCategory === 'All'}
                ? 'Discover the essential tools that successful startups use to grow and scale their businesses.'}
                : `Explore the best ${selectedCategory.toLowerCase()} tools to accelerate your startup's growth.,
}





              </Button>;
            </Card>;
            <Card className='text-center'>;
              <div className=w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600>;
                <TrendingUp className='w-8 h-8 text-white' />;
              </div>;
              <h3 className=text-xl font-bold mb-4 text-white>;
                Growth Strategies;
              </h3>;
              <p className='text-gray-400 mb-4'>;
                Learn proven growth strategies from successful entrepreneurs and growth hackers.;
              </p>;
              <Button href="/resources variant=outline" size="sm>;
                View Resources;
              </Button>;
            </Card>;
          </div>;
        </div>;
      </section>;
}
    </>);
}

import React from react;
}

import React from 'react';
}

 export default function StartupToolsPage () {
  const startupTools = [ {
  const filteredTools = selectedCategory === 'All' ? startupTools : startupTools.filter (tool => tool.category === selectedCategory);

return (<> <Head> <title>Startup Tools & Resources - Zion Tech Group</title> <meta name="description" content="Essential tools and resources for startups and entrepreneurs. Curated selection of SaaS services to help your business grow." /> <meta property="og:title" content="Startup Tools & Resources - Zion Tech Group" /> <meta property="og:description" content="Essential tools and resources for startups and entrepreneurs to accelerate growth." /> <meta name="twitter:card" content="summary large image" /> </Head> </div> <div className="absolute inset-0 bg-[linear-gradient (rgba (59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient (90deg, rgba (59, 130, 246, 0.1) 1px, transparent 1px) ] bg-[size:50px 50px] opacity-20" /> <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" > <div className="mb-20 animate-fade-in" > <div className="mb-8" > <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6 animate-scale-in" > <Rocket className="w-4 h-4 mr-2" /> Startup Growth Tools </div> </div> <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight" > Startup Tools & Resources </h1> <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light" > Essential tools and resources to help your startup grow faster. Expert-curated selection of SaaS services for entrepreneurs and growing businesses. </p> <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20" > <Button > Explore Tools <ArrowRight className="w-5 h-5 ml-2" /> </Button> <Button > Get Startup Advice </Button> </div> </div> </div> <div className="text-gray-400 text-sm" >Essential Tools</div> </div> <div className="text-center group" > <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" > 10 </div> <div className="text-gray-400 text-sm" >Categories</div> </div> <div className="text-center group" > <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300" > 4.6+ </div> <div className="text-gray-400 text-sm" >Avg Rating</div> </div> <div className="text-center group" > <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300" > 130M+ </div> <div className="text-gray-400 text-sm" >Total Users</div> </div> </div> </div> </section> key= {
return (<> <Head> <title>Startup Tools & Resources - Zion Tech Group</title> <meta name=description" content="Essential tools and resources for startups and entrepreneurs. Curated selection of SaaS services to help your business grow. /> <meta property=og:title" content="Startup Tools & Resources - Zion Tech Group /> <meta property=og:description" content="Essential tools and resources for startups and entrepreneurs to accelerate growth. /> <meta name=twitter:card" content="summary large image /> </Head> </div> <div className=absolute inset-0 bg-[linear-gradient (rgba (59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient (90deg, rgba (59, 130, 246, 0.1) 1px, transparent 1px) ] bg-[size:50px 50px] opacity-20" /> <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center > <div className=mb-20 animate-fade-in" > <div className="mb-8 > <div className=inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6 animate-scale-in" > <Rocket className="w-4 h-4 mr-2 /> Startup Growth Tools </div> </div> <h1 className=text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight" > Startup Tools & Resources </h1> <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light > Essential tools and resources to help your startup grow faster. Expert-curated selection of SaaS services for entrepreneurs and growing businesses. </p> <div className=flex flex-col sm:flex-row gap-6 justify-center items-center mb-20" > <Button > Explore Tools <ArrowRight className="w-5 h-5 ml-2 /> </Button> <Button > Get Startup Advice </Button> </div> </div> </div> <div className=text-gray-400 text-sm" >Essential Tools</div> </div> <div className="text-center group > <div className=text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" > 10 </div> <div className="text-gray-400 text-sm >Categories</div> </div> <div className=text-center group" > <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300 > 4.6+ </div> <div className=text-gray-400 text-sm" >Avg Rating</div> </div> <div className="text-center group > <div className=text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300" > 130M+ </div> <div className="text-gray-400 text-sm >Total Users</div> </div> </div> </div> </section> key= {
  category 
}onClick= {
  () => setSelectedCategory (category) 
}className= {
  `px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 $ {
  selectedCategory === category ? 'bg-orange-600 text-white shadow-lg' : bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white 
}` 
}> {
  category 
}</button>) ) 
}</div> </div> </section> ? 'Discover the essential tools that successful startups use to grow and scale their businesses.' : `Explore the best $ {
  selectedCategory.toLowerCase () 
}tools to accelerate your startup's growth.` 
}</p> </div> </div>) ) 
}</div> </div> </div> <div className="flex items-center justify-between" > <Button > Visit Website <ExternalLink className="w-4 h-4 ml-2" /> </Button> </div> </div> </div> </div> </Card>) ) 
}</div> </div> </section> Additional Startup Resources </h2> <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed" > Beyond tools, here are additional resources to help your startup succeed. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8" > <Card className="text-center" > <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600" > <Users className="w-8 h-8 text-white" /> </div> <h3 className="text-xl font-bold mb-4 text-white" >Startup Communities</h3> <p className="text-gray-400 mb-4" > Join startup communities like Y Combinator Startup School, Indie Hackers, and local startup meetups. </p> <Button href="https://www.startupschool.org" variant="outline" size="sm" > Explore Communities </Button> </Card> <Card className="text-center" > <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600" > <BookOpen className="w-8 h-8 text-white" /> </div> <h3 className="text-xl font-bold mb-4 text-white" >Educational Resources</h3> <p className="text-gray-400 mb-4" > Access free courses from platforms like Coursera, edX, and startup-specific learning resources. </p> <Button href="https://www.coursera.org" variant="outline" size="sm" > Start Learning </Button> </Card> <Card className="text-center" > <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600" > <TrendingUp className="w-8 h-8 text-white" /> </div> <h3 className="text-xl font-bold mb-4 text-white" >Growth Strategies</h3> <p className="text-gray-400 mb-4" > Learn proven growth strategies from successful entrepreneurs and growth hackers. </p> <Button href="/resources" variant="outline" size="sm" > View Resources </Button> </Card> </div> </div> </section> Ready to Scale Your Startup? </h2> <p className="text-xl text-orange-100 mb-12 max-w-4xl mx-auto leading-relaxed" > Our startup experts can help you choose the right tools, implement growth strategies, and accelerate your business growth. </p> <Button href="/contact" variant="secondary" size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-2xl" > Get Startup Consultation <ArrowRight className="w-5 h-5 ml-2" /> </Button> <Button href="/saas-marketplace" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600 shadow-2xl" > Explore More Tools </Button> </div> </div> </section> </>) 
}

}

}
                {category}Beyond tools, here are additional resources to help your startup;
              succeed.;
            </p>;
          </div>;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Beyond tools, here are additional resources to help your startup succeed.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <Card className="text-center">;
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">;
                <Users className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-bold mb-4 text-white">Startup Communities</h3>;
              <p className="text-gray-400 mb-4">;
                Join startup communities like Y Combinator Startup School, Indie Hackers, and local startup meetups.;
              </p>;
              <Button href="https://www.startupschool.org" variant="outline" size="sm">;
                Explore Communities;
              </Button>;
            </Card>;


          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>;
            <Card className='text - center'>;
              <div className='w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center bg - gradient - to - br from - blue - 500 to - indigo - 600'>;
                <Users className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - bold mb - 4 text - white'>;
                Startup Communities;
              </h3>;
              <p className='text - gray - 400 mb - 4'>;
                Join startup communities like Y Combinator Startup School, Indie;
                Hackers, and local startup meetups.;
              </p>;
              <Button;
                href='https://www.startupschool.org';
                variant='outline';
                size='sm';
              >                Explore Communities;
              </Button>;
            </Card>;
            <Card className='text - center'>;
              <div className='w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center bg - gradient - to - br from - green - 500 to - emerald - 600'>;
                <BookOpen className='w - 8 h - 8 text - white' />              Additional Startup Resources;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
              Beyond tools, here are additional resources to help your startup succeed.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            <Card className="text - center">;
              <div className="w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center bg - gradient - to - br from - blue - 500 to - indigo - 600">;
                <Users className="w - 8 h - 8 text - white" />;
              </div>;
              <h3 className="text - xl font - bold mb - 4 text - white">Startup Communities</h3>;
              <p className="text - gray - 400 mb - 4">;
                Join startup communities like Y Combinator Startup School, Indie Hackers, and local startup meetups.;
              </p>;
              <Button href="https://www.startupschool.org" variant="outline" size="sm">;
                Explore Communities;
              </Button>;
            </Card>;
            <Card className='text - center'>;
              <div className='w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center bg - gradient - to - br from - green - 500 to - emerald - 600'>;
                <BookOpen className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - bold mb - 4 text - white'>;
                Educational Resources;
              </h3>;
              <p className='text - gray - 400 mb - 4'>;
                Access free courses from platforms like Coursera, ed_x, and;
                startup - specific learning resources.;
              </p>;
              <Button;
                href='https://www.coursera.org';
                variant='outline';
                size='sm';
              >                Start Learning;
              </Button>;
            </Card>;
            <Card className='text - center'>;
              <div className='w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center bg - gradient - to - br from - purple - 500 to - pink - 600'>;
                <TrendingUp className='w - 8 h - 8 text - white' />              </div>;
              <h3 className="text - xl font - bold mb - 4 text - white">Educational Resources</h3>;
              <p className="text - gray - 400 mb - 4">;
                Access free courses from platforms like Coursera, ed_x, and startup - specific learning resources.;
              </p>;
              <Button href="https://www.coursera.org" variant="outline" size="sm">;
                Start Learning;
              </Button>;
            </Card>;
            <Card className='text - center'>;
              <div className='w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center bg - gradient - to - br from - purple - 500 to - pink - 600'>;
                <TrendingUp className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - bold mb - 4 text - white'>;
                Growth Strategies;
              </h3>;
              <p className='text - gray - 400 mb - 4'>;
                Learn proven growth strategies from successful entrepreneurs and;
                growth hackers.;
              </p>;
              <Button href='/resources' variant='outline' size='sm'>                View Resources              </div>;

