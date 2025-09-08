

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';



  Zap;



  Shield;

    }
  ],



  Shield;
}
  Globe}
 } from 'lucide-react';

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


<section className='py-24 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden'    />
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10'    />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'    />
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'    />
            <Button;
href='/saas-marketplace'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-green-600 shadow-2xl'
                />
              Explore More Tools;



                        Visit Website;
                        <ExternalLink className='w-4 h-4 ml-2' />;
                      </Button>;
                      <div className='text-right'>;
                        <div className='text-xs text-gray-500 mb-1'>;




              <p className='text-gray-400'>;


              <p className='text - gray - 400'>;








    <   />
  );
}





