

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';


import { Code;


  Database;
  Globe;
  Shield;
  Zap;
  Bot;
  BarChart3;




  Code,
  Database,
  Globe,
  Shield,
  Zap,
  Bot,
  BarChart3,
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


  ArrowRight;
  CheckCircle;
  Star;
  ExternalLink;
  Play;
  BookOpen;

  Github;


  ];
  const [selectedCategory, setSelectedCategory] = React.useState('All);
      rating: 4.9,
      responseTime: <20ms'
    }
  ],


                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

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

              </button>;
            ))}


          </div>;
        </div>;
      </section>;






      {/* API Tools Grid */}

<section className='py-24 bg-gray-900'    />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />;
          <div className='text-center mb-20'    />;
            <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-white'    />;
              {selectedCategory === 'All';}
                ? 'All API Tools';}
                : `${selectedCategory} APIs`}{/* API Tools Grid */}</h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'    />;
              {filteredTools.length} APIs available. Each tool is;
              production-ready with comprehensive documentation, SDKs, and;
              support.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'    />;
            {filteredTools.map((tool, index) => (</h2>;}
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'    />;}
              {filteredTools && filteredTools.length} APIs available. Each tool is;
              production-ready with comprehensive documentation, SDKs, and;

                            {feature}
                          </li>;
                        ))}


                        href={tool && tool.website}


                        variant='primary'
                        size='sm'


                        className='bg-indigo-600 hover:bg-indigo-700'
                          />
                        <ExternalLink className='w-4 h-4 mr-2'    />
                        Visit API;
                      </Button>


                        className=\"bg-indigo-600 hover:bg-indigo-700\">;
                        <ExternalLink className=\"w-4 h-4 mr-2\"    />;
                        Visit API;
                      </Button>;

                      <Button
                        href={tool && tool.website}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        href={tool.website}
                        variant="primary"
                        size="sm"





                        Visit API
                      </Button>
                      <Button
                        href={tool.docs}


                      >
                        <BookOpen className="w-4 h-4 mr-2 />
                        Documentation
                      </Button>
                      <Button
                        href={tool.github}

variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-indigo-400"
                      >
                        <Github className="w-4 h-4 mr-2" />

                      </Button>
                    </div>
                  </div>
                </div>
              </Card>



          </div>
        </div>
      </section>
      {/* Developer Resources */}

<section className='py-24 bg-gray-800'    />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />
          <div className='text-center mb-20'    />
            <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-white'    />


              Developer Resources;






      {/* Developer Resources */}




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


            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'    />
              Everything you need to get started and build amazing applications;
with our APIs.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'    />
            <Card className='text-center border border-gray-700 hover:border-indigo-500/30'    />
              <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6'    />
                <BookOpen className='w-8 h-8 text-indigo-400'    />
              </div>
              <h3 className='text-xl font-bold text-white mb-4'    />
                Comprehensive Documentation;
              </h3>
              <p className='text-gray-400 mb-6'    />
                Detailed API references, code examples, and integration guides;
for every service.
              </p>
              <Button href='/docs' variant='outline' size='sm'    />
                Explore Docs;
                <ArrowRight className='w-4 h-4 ml-2'    />              </Button>
            </Card>
            <Card className='text-center border border-gray-700 hover: border-indigo-500/30'    />
              <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6'    />
                <Play className='w-8 h-8 text-indigo-400'    />
              </div>
              <h3 className='text-xl font-bold text-white mb-4'    />
                Interactive Playground;
              </h3>
              <p className='text-gray-400 mb-6'    />
                Test APIs directly in your browser with our interactive testing;
environment.
              </p>
              <Button href='/playground' variant='outline' size='sm'    />
                Try Playground;
                <ArrowRight className='w-4 h-4 ml-2'    />
              </Button>
            </Card>
            <Card className='text-center border border-gray-700 hover:border-indigo-500/30'    />
              <div className='w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6'    />
                <Github className='w-8 h-8 text-indigo-400'    />
              </div>
              <h3 className='text-xl font-bold text-white mb-4'    />
                Open Source SDKs;
              </h3>
              <p className='text-gray-400 mb-6'    />
                Official SDKs and client libraries for popular programming;
languages and frameworks.
              </p>

              <Button href="/playground" variant="outline" size="sm">
                Try Playground
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            <Card className="text-center border border-gray-700 hover:border-indigo-500/30">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Github className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Open Source SDKs</h3>
              <p className="text-gray-400 mb-6">
                Official SDKs and client libraries for popular programming languages and frameworks.
              </p>
              <Button href="/sdk" variant="outline" size="sm">
                Browse SDKs
                <ArrowRight className="w-4 h-4 ml-2" />


              </Button>
            </Card>
          </div>
        </div>
      </section>

          </div>;
        </div>;
      </section>;

</div>;
        </div>;
      </section>;
      {/* Developer Resources */}
      <section className='py-24 bg-gray-800'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-20'>;
            <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-white'>;
              Developer Resources;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;

          </div>;
        </div>;
      </section>;
      {/* Developer Resources */}
<section className='py-24 bg-gray-800>;
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-20>;
            <h2 className=text-3xl sm:text-4xl font-bold mb-6 text-white'>;
              Developer Resources;
            </h2>;

            <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;


              Everything you need to get started and build amazing applications;
              with our APIs.;
            </p>;
          </div>;


                Detailed API references, code examples, and integration guides;
                for every service.;
              </p>;
              <Button href=/docs' variant='outline size=sm'>;
                Explore Docs;


                Test APIs directly in your browser with our interactive testing;
                environment.;
              </p>;
              <Button href='/playground variant=outline' size='sm>;
                Try Playground;


                Official SDKs and client libraries for popular programming;
                languages and frameworks.;
              </p>;
              <Button href=/sdk' variant='outline size=sm'>;
                Browse SDKs;
                <ArrowRight className='w-4 h-4 ml-2 />;
              </Button>;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Developer Resources */}
      <section className=py-24 bg-gray-800'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>;
          <div className=text-center mb-20'>;
            <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-white>;
              Developer Resources;
            </h2>;
            <p className=text-xl text-gray-400 max-w-3xl mx-auto'>;
              Everything you need to get started and build amazing applications;
              with our APIs.;
            </p>;
          </div>;
                Detailed API references, code examples, and integration guides;
                for every service.;
              </p>;
              <Button href='/docs variant=outline' size='sm>;
                Explore Docs;
                Test APIs directly in your browser with our interactive testing;
                environment.;
              </p>;
              <Button href=/playground' variant='outline size=sm'>;
                Try Playground;
                Official SDKs and client libraries for popular programming;
                languages and frameworks.;
              </p>;
              <Button href='/sdk variant=outline' size='sm>;
                Browse SDKs;


              </Button>;
            </Card>;
          </div>;
        </div>;
      </section>;


              View Documentation;
            </Button>;
          </div>;
        </div>;
      </section>;
    </>)}
  )}
}
    </>)}{/* CTA Section */}
<section className=py-24 bg-gradient-to-r from-indigo-600 to-indigo-700 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 />;
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>;
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8>;
          </h2>;
          <p className=text-xl text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed'>;
            Start integrating our APIs today and join thousands of developers;
            building the future.;
          </p>;
          <div className='flex flex-col sm:flex-row gap-6 justify-center>;
            <Button;
              href=/contact';
              variant='secondary;
              size=lg';
              className='bg-white text-indigo-600 hover:bg-gray-100 shadow-2xl;
            >;
              Get API Access;
              <ArrowRight className=w-5 h-5 ml-2' />;
            </Button>;
            <Button;
              href='/docs;
              variant=outline';
              size='lg;
              className=border-white text-white hover:bg-white hover:text-indigo-600 shadow-2xl';
            >;
              View Documentation;
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





