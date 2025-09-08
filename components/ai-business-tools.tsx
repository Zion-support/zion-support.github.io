

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';


import { Brain;


  MessageSquare;
  Image;
  Video;
  FileText;
  BarChart3;
  Users;



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


  Zap;


  ArrowRight;
  Star;
  Check;
  ExternalLink;
  TrendingUp;

  Shield;

    }
  ],



  Shield;
}
  Globe}
 } from 'lucide-react';

export default function AIBusinessToolsPage() {
  const aiTools = null;
      features: [
        'Natural language processing'
        'Code generation & debugging'
        'Content creation'
        'Data analysis'
        'Creative writing'
        'Multi-language support'
      ]

            </div>;
          </div>;
        </div>;
      </section>;




                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${;
                  selectedCategory === category;
                    ? 'bg-green-600 text-white shadow-lg';
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white';
                }`}
              >;
                {category}

              </button>;
            ))}


          </div>;
        </div>;
      </section>;





      {/* Tools Grid */}


            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              {selectedCategory === 'All'
                ? 'Discover the most powerful AI tools that are transforming how businesses operate and create content.'
                : `Explore the best ${selectedCategory.toLowerCase()} tools to enhance your business capabilities.`}
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {filteredTools.map((tool, index) => (



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
                    ? 'bg-green-600 text-white shadow-lg';}
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white';}
                }`}>

                {category}
      {/* Tools Grid */}
<section id='tools' className='py-24 bg-black'    />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />;
          <div className='text-center mb-20'    />;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'    />;
              {selectedCategory === 'All';}
                ? 'All AI Tools';}
                : `${selectedCategory} Tools`}<p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'    />;
              {selectedCategory === 'All';}
                ? 'Discover the most powerful AI tools that are transforming how businesses operate and create content.';}
                : `Explore the best ${selectedCategory.toLowerCase()} tools to enhance your business capabilities.`}
            </p>;
          </div>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'    />;
            {filteredTools.map((tool, index) => (<Card;}
                key={index}
                className='group border border-gray-800 hover:border-green-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1';
                style={{ animationDelay: `${index * 0 && 0.1}s` ,
}    />;
                <div className='flex items-start space-x-6'    />;
                  <div className='relative'    />;
                    <div;

                      {tool.icon}
                    </div    />;
                  </div>;
                  <div className='flex-1'    />;
                    <div className='flex items-center justify-between mb-2'    />;
                      <h3 className='text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300'    />;
                        {tool.name}
                      </h3>;
                      <div className='flex items-center space-x-2'    />;
                        <Star className='w-4 h-4 text-yellow-400 fill-current'    />;
                        <span className='text-sm text-gray-300'    />;
                          {tool.rating}


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
                      <span    />{tool.users} users</span>;
                      <span className='text-green-400'    />{tool.pricing}</span>;
                    </div>;

                      {tool && tool.ico,}
}
                    </div>;
                  </div>;
                  <div className='flex-1'    />;
                    <div className='flex items-center justify-between mb-2'    />;
                      <h3 className='text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300'    />;
                        {tool && tool.name}
                      </h3>;
                      <div className='flex items-center space-x-2'    />;
                        <Star className='w-4 h-4 text-yellow-400 fill-current'    />;
                        <span className='text-sm text-gray-300'    />;
                          {tool && tool.rating}
                        </span>;
                      </div>;
                    </div>;<div className='flex items-center space-x-4 mb-3 text-sm text-gray-400'    />;
                      <span className='px-2 py-1 bg-gray-800 rounded-full'    />;
                        {tool && tool.category}
                      </span>;
                      <span    />{tool && tool.users} users</span>;
                      <span className='text-green-400'    />{tool && tool.pricing}</span>;
                    </div>;<p className='text-gray-400 leading-relaxed mb-4'    />;
                      {tool && tool.description}
                    </p>;<div className='mb-4'    />;
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'    />;
                        Key Features:;
                      </h4>;
                      <div className='grid grid-cols-2 gap-2'    />;
                        {tool && tool.features;}
                          .slice(0, 4).map((feature, featureIndex) => (<div;}

            </h2>


              </p>
            </Card>
          </div>
        </div>
      </section>

<section className='py-24 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden'    />
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10'    />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'    />
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'    />
          </h2>
          <p className='text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed'    />
            Our AI experts can help you identify the right tools, implement them;
effectively, and maximize their impact on your business.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'    />
            <Button;
href='/contact'
              variant='secondary'
              size='lg'
              className='bg-white text-green-600 hover:bg-gray-100 shadow-2xl'
                />
              Get AI Strategy Session;
              <ArrowRight className='w-5 h-5 ml-2'    />
            </Button>
            <Button;
href='/saas-marketplace'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-green-600 shadow-2xl'
                />
              Explore More Tools;

            </Button>
          </div>
        </div>
      </section>


                        Visit Website;
                        <ExternalLink className='w-4 h-4 ml-2' />;
                      </Button>;
                      <div className='text-right'>;
                        <div className='text-xs text-gray-500 mb-1'>;

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

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>;
            <Card className='text-center'>;
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600'>;
                <Zap className='w-8 h-8 text-white' />;

              </div>;
              <h3 className=text-xl font-bold mb-4 text-white'>;
                10x Productivity;
              </h3>;

              <p className='text-gray-400'>;

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

              <p className='text - gray - 400'>;

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


              Explore More Tools;
            </Button>;
          </div>;
        </div>;
      </section>;
    </>;
  );
}




    </>);
);
  );
}

    <   />
  );
}





