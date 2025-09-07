import React from 'react';
import Head from 'next/head';
export default function AIBusinessToolsPage () {
  const aiTools = [ {
  const filteredTools = selectedCategory === 'All' ? aiTools : aiTools.filter (tool => tool.category === selectedCategory)
return (<> <Head> <title>AI Business Tools - Zion Tech Group</title> <meta name="description" content="Discover the best AI-powered business tools for automation, content creation, and productivity. Expert-curated selection of AI SaaS services." /> <meta property="og:title" content="AI Business Tools - Zion Tech Group" /> <meta property="og:description" content="Expert-curated selection of AI-powered business tools and SaaS services." /> <meta name="twitter:card" content="summary large image" /> </Head> </div> <div className="absolute inset-0 bg-[linear-gradient (rgba (59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient (90deg, rgba (59, 130, 246, 0.1) 1px, transparent 1px) ] bg-[size:50px 50px] opacity-20" /> <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" > <div className="mb-20 animate-fade-in" > <div className="mb-8" > <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6 animate-scale-in" > <Brain className="w-4 h-4 mr-2" /> AI-Powered Business Solutions </div> </div> <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight" > AI Business Tools </h1> <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light" > Transform your business with cutting-edge AI tools. Expert-curated selection of the best AI-powered SaaS services for modern enterprises. </p> <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20" > <Button > Explore AI Tools <ArrowRight className="w-5 h-5 ml-2" /> </Button> <Button > Get AI Consultation </Button> </div> </div> </div> <div className="text-gray-400 text-sm" >AI Tools</div> </div> <div className="text-center group" > <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" > 7 </div> <div className="text-gray-400 text-sm" >Categories</div> </div> <div className="text-center group" > <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300" > 4.6+ </div> <div className="text-gray-400 text-sm" >Avg Rating</div> </div> <div className="text-center group" > <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300" > 130M+ </div> <div className="text-gray-400 text-sm" >Total Users</div> </div> </div> </div> </section> key= {
  category 
}onClick= {
  () => setSelectedCategory (category) 
}className= {
  `px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 $ {
  selectedCategory === category ? 'bg-green-600 text-white shadow-lg' : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
}` 
}> {
  category 
}</button>) ) 
}</div> </div> </section> ? 'Discover the most powerful AI tools that are transforming how businesses operate and create content.' : `Explore the best $ {
  selectedCategory.toLowerCase () 
}tools to enhance your business capabilities.` 
}</p> </div> </div>) ) 
}</div> </div> </div> <div className="flex items-center justify-between" > <Button > Visit Website <ExternalLink className="w-4 h-4 ml-2" /> </Button> </div> </div> </div> </div> </Card>) ) 
}</div> </div> </section> Why Choose AI Tools? </h2> <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed" > AI-powered tools are revolutionizing how businesses operate, create content, and serve customers. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8" > <Card className="text-center" > <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600" > <Zap className="w-8 h-8 text-white" /> </div> <h3 className="text-xl font-bold mb-4 text-white" >10x Productivity</h3> <p className="text-gray-400" > AI tools can automate repetitive tasks, generate content, and provide insights that would take humans hours or days to complete. </p> </Card> <Card className="text-center" > <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600" > <TrendingUp className="w-8 h-8 text-white" /> </div> <h3 className="text-xl font-bold mb-4 text-white" >Data-Driven Decisions</h3> <p className="text-gray-400" > AI analytics provide deep insights into customer behavior, market trends, and business performance for better decision-making. </p> </Card> <Card className="text-center" > <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600" > <Users className="w-8 h-8 text-white" /> </div> <h3 className="text-xl font-bold mb-4 text-white" >Enhanced Customer Experience</h3> <p className="text-gray-400" > AI-powered chatbots, personalization, and automation create seamless, personalized experiences for your customers. </p> </Card> </div> </div> </section> Ready to Transform Your Business with AI? </h2> <p className="text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed" > Our AI experts can help you identify the right tools, implement them effectively, and maximize their impact on your business. </p> <Button href="/contact" variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl" > Get AI Strategy Session <ArrowRight className="w-5 h-5 ml-2" /> </Button> <Button href="/saas-marketplace" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600 shadow-2xl" > Explore More Tools </Button> </div> </div> </section> </>) 
}
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import {import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
  Brain,MessageSquare,Image,Video,FileText,BarChart3,Users,Zap,ArrowRight,Star,Check,ExternalLink,TrendingUp,Brain;
  MessageSquare;
  Image;
  Video;
  FileText;
  BarChart3;
  Users;

import {
import Head from next / head';
import Card from '../components / ui / Card;
import Button from ../components / ui / Button';
  Brain,
  MessageSquare,
  Image,
  Video,
  FileText,
  BarChart3,
  Users,
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
  MessageSquare,Image,Video,FileText,BarChart3,Users,import { Brain;
  MessageSquare;
  Image;
  Video;
  FileText;
  BarChart3;
  Users;Zap;
  ArrowRight;
  Star;
  Check;
  ExternalLink;
  TrendingUp;
  Shield,
  Globe

      ? aiTools
      useCase: Essential for content marketers, SEO specialists, and businesses that want to improve their search rankings.',
      pros: ['Data-driven insightsContent optimizationCompetitor analysisGood support],
      cons: [ExpensiveComplex interfaceSteep learning curve'],
      bestFor: 'SEO specialists, content marketers, businesses
    }
  ],


              >
                Get AI Consultation
              </Button>
            </div>
          </div>


            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}

                {category}
      {/* Tools Grid */}

                      {tool.description}
                    </p>;
                    <div className='mb-4'>;'
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'>;'
                        Key "Features":;
                      </h4>;
                      <div className='grid grid-cols-2 gap-2'>;'
                        {tool.features;
                          .slice(0, 4).map((feature, featureIndex) => (className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${tool && tool.color} shadow-xl group-"hover": scale-110 transition-transform duration-300`}>`


                        </div>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </Card>;
                      
                      <div className=text-right">
                        <div className="text-xs text-gray-500 mb-1>Use Case:</div>
                        <div className=text-sm text-gray-300 max-w-xs">{tool.useCase}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

          </div>
        </div>
      </section>
      {/* AI Benefits Section */}
<section className='py-24 bg-gray-900'>'
        <div className='max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8'>'
          <div className='text-center mb-20'>'
            <h2 className='text-4xl "sm":text-5xl font-bold mb-8 text-white leading-tight'>'

      {/* AI Benefits Section */}
      <section className="py-24 bg-gray-900>
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20>
            <h2 className=text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Why Choose AI Tools?
            </h2>

              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}

            >
              Explore More Tools
            </Button>
          </div>
        </div>
      </section>
    </>
          </div>;
        </div>;
      </section>;
      {/* AI Benefits Section */}
<section className='py-24 bg-gray-900>;
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-20>;
            <h2 className=text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Why Choose AI Tools?;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed>;
              AI-powered tools are revolutionizing how businesses operate, create content, and serve customers.;
            </p>;
          </div>;
          <div className=grid grid-cols-1 md:grid-cols-3 gap-8">;
            <Card className="text-center>;
              <div className=w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">;
                <Zap className="w-8 h-8 text-white />;
              </div>;
              <h3 className=text-xl font-bold mb-4 text-white">10x Productivity</h3>;
              <p className="text-gray-400>;
                AI tools can automate repetitive tasks, generate content, and provide insights that would take humans hours or days to complete.;
              </p>;
            </Card>;
            <Card className=text-center">;
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600>;
                <TrendingUp className=w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-bold mb-4 text-white>Data-Driven Decisions</h3>;
              <p className=text-gray-400">;
                AI analytics provide deep insights into customer behavior, market trends, and business performance for better decision-making.;
              </p>;
            </Card>;
            <Card className="text-center>;
              <div className=w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">;
                <Users className="w-8 h-8 text-white />;
              </div>;
              <h3 className=text-xl font-bold mb-4 text-white">Enhanced Customer Experience</h3>;
              <p className="text-gray-400>;
                AI-powered chatbots, personalization, and automation create seamless, personalized experiences for your customers.;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed>;
              AI-powered tools are revolutionizing how businesses operate;
              create content, and serve customers.;
            </p>;
          </div>;
          <div className=grid grid-cols-1 md:grid-cols-3 gap-8'>;
            <Card className='text-center>;
              <div className=w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600'>;
                <Zap className='w-8 h-8 text-white />;
              </div>;
              <h3 className=text-xl font-bold mb-4 text-white'>;
                10x Productivity;
              </h3>;
              <p className='text-gray-400>;
                AI tools can automate repetitive tasks, generate content, and;
                provide insights that would take humans hours or days to;
                complete.;
              </p>;
            </Card>;
            <Card className=text-center'>;
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600>;
                <TrendingUp className=w-8 h-8 text-white' />;
              </div>;
              <h3 className='text-xl font-bold mb-4 text-white>;
                Data-Driven Decisions;
              </h3>;
              <p className=text-gray-400'>;
                AI analytics provide deep insights into customer behavior;
                market trends, and business performance for better;
                decision-making.;
              </p>;
            </Card>;
            <Card className='text-center>;
              <div className=w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600'>;
                <Users className='w-8 h-8 text-white />;
              </div>;
              <h3 className=text-xl font-bold mb-4 text-white'>;
                Enhanced Customer Experience;
              </h3>;
              <p className='text-gray-400>;
                AI-powered chatbots, personalization, and automation create;
                seamless, personalized experiences for your customers.;
              </p>;
            </Card>;
          </div>;
        </div>;
      </section>;
                        className=group-hover:border-green-500 group-hover:text-green-400'>;
                        Visit Website;
                        <ExternalLink className='w-4 h-4 ml-2 />;
                      </Button>;
                      <div className=text-right'>;
                        <div className='text-xs text-gray-500 mb-1>;
                          Use Case:;
                        </div>;
                        <div className=text-sm text-gray-300 max-w-xs'>;
                          {tool && tool.useCase}
                        </div>                      </div>                      ;
                      <div className=text-right">;
                        <div className="text-xs text-gray-500 mb-1>Use Case:</div>;
                        <div className=text-sm text-gray-300 max-w-xs">{tool && tool.useCase}</div>;
                    </div>;
                  </div>;
                </div>;
              </Card>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* AI Benefits Section */}
      <section className='py-24 bg-gray-900>;
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-20>;
            <h2 className=text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Why Choose AI Tools?;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed>;
              AI-powered tools are revolutionizing how businesses operate,create content, and serve customers.;
            </p>;
          </div>;
          <div className=grid grid-cols-1 md:grid-cols-3 gap-8'>;
            <Card className='text-center>;
              <div className=w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600'>;
                <Zap className='w-8 h-8 text-white />;
              </div>;
              <h3 className=text-xl font-bold mb-4 text-white'>;
                10x Productivity;
              </h3>;
              <p className='text-gray-400>;
                        </span>;
                      </div>;
                    </div>;
                    <div className=flex items - center space - x-4 mb - 3 text - sm text - gray - 400'>;
                      <span className='px - 2 py - 1 bg - gray - 800 rounded - full>;
                        {tool.category}
                      </span>;
                      <span>{tool.users} users</span>;
                      <span className=text - green - 400'>{tool.pricing}</span>;
                    </div>;
                    <p className='text - gray - 400 leading - relaxed mb - 4>;
                      {tool.description}
                    </p>;
                    <div className=mb - 4'>;
                      <h4 className='text - sm font - semibold text - gray - 300 mb - 2>;
                        Key Features:;
                      </h4>;
                      <div className=grid grid - cols - 2 gap - 2'>;
                        {tool.features;
                          .slice (0, 4).map ((feature, feature_index) => (<div;
                              key={feature_index}
                              className='flex items - center text - sm text - gray - 400;
                            >;
                              <Check className=w - 3 h - 3 text - green - 400 mr - 2 flex - shrink - 0' />;
                              {feature}
                            </div>))}
                      </div>;
                    </div>;
                    <div className='mb - 4>;
                      <h4 className=text - sm font - semibold text - gray - 300 mb - 2'>;
                        Best For:;
                      </h4>;
                      <p className='text - sm text - gray - 400>{tool.best_for}</p>;
                    </div>;
                    <div className=flex items - center justify - between'>;
                      <Button;
                        href={tool.website}
                        variant='outline;
                        size=sm';
                        className='group - hover:border - green - 500 group - hover:text - green - 400;
                      >;
                        Visit Website;
                        <ExternalLink className=w - 4 h - 4 ml - 2' />;
                      </Button>;
                      <div className='text - right>;
                        <div className=text - xs text - gray - 500 mb - 1'>;
                          Use Case:;
                        </div>;
                        <div className='text - sm text - gray - 300 max - w-xs>;
                          {tool.use_case}
                        </div>                      </div>;
                      <div className="text-right>;
                        <div className=text - xs text - gray-500 mb-1">Use Case:</div>;
                        <div className="text - sm text - gray-300 max-w-xs">{tool.use_case}</div>;
                    </div>;
                  </div>;
                </div>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* AI Benefits Section */}
      <section className=py - 24 bg - gray - 900'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8>;
          <div className=text - center mb - 20'>;
            <h2 className='text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight>;
              Why Choose AI Tools?;
            </h2>;
            <p className=text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
              AI - powered tools are revolutionizing how businesses operate,create content, and serve customers.;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8>;
            <Card className=text - center'>;
              <div className='w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center bg - gradient - to - br from - blue - 500 to - indigo - 600>;
                <Zap className=w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - bold mb - 4 text - white>;
                10x Productivity;
              </h3>;
              <p className=text - gray - 400'>;
                AI tools can automate repetitive tasks, generate content, and;
                provide insights that would take humans hours or days to;
                complete.;
              </p>;
            </Card>;
              </p>;
            </Card>;
          </div>;
        </div>;
      </section>;
    </>)}
  )}
}
    </>)}{/* CTA Section */}
<section className='py-24 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden>;
        <div className=absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10>;
          <h2 className=text-4xl sm:text-5xl font-bold text-white mb-8'>;
          </h2>;
          <p className='text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed>;
            Our AI experts can help you identify the right tools, implement them;
            effectively, and maximize their impact on your business.;
          </p>;
          <div className=flex flex-col sm:flex-row gap-6 justify-center'>;
            <Button;
              href='/contact;
              variant=secondary';
              size='lg;
              className=bg-white text-green-600 hover:bg-gray-100 shadow-2xl';
            >;
              Get AI Strategy Session;
              <ArrowRight className='w-5 h-5 ml-2 />;
            </Button>;
            <Button;
              href=/saas-marketplace';
              variant='outline;
              size=lg';
              className='border-white text-white hover:bg-white hover:text-green-600 shadow-2xl';
            >;
              Explore More Tools;
            </Button>;
          </div>;
        </div>;
      </section>;
    </>;
  );
}
}
    </>);
}
  )}
  )
}
