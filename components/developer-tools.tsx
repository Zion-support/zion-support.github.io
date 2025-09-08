

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';


import { Code;


  GitBranch;
  Database;
  Cloud;
  Shield;
  Zap;




  Code,
  GitBranch,
  Database,
  Cloud,
  Shield,
  Zap,
  Code,
  GitBranch, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Star,
  ExternalLink,
  CheckCircle,
  TrendingUp,


  Star;
  ExternalLink;
  CheckCircle;
  TrendingUp;
  Cpu;


        'Intelligent code completion',
        'Multi-language support',
        'IDE integration',
        'Code explanation',
        'Security vulnerability detection',

      ],      pricing: '$10 / month',      title: 'GitHub Copilot',
      description: 'AI - powered code completion and generation that understands your codebase and suggests intelligent solutions.',
      features: [;
        'Intelligent code completion_multi - language supportIDE integration_code explanation_security vulnerability detection';

    },
    {
      icon: <GitBranch className='w-8 h-8 text-white'    />,
      title: 'GitHub Pro',
  description:
        'Advanced GitHub features for professional developers including private repositories, advanced tools, and priority support.',
      features: [
        'Unlimited private repositories',
        'Advanced code review tools',
        'Priority support',
        'Advanced insights',
        'Team management features',

      ],      pricing: '$4 / month',        'Unlimited private repositories_advanced code review tools_priority support_advanced insights_team management features';

    },
    {
      icon: <Database className='w-8 h-8 text-white'    />,
      title: 'MongoDB Atlas',
  description:
        'Fully managed cloud database service with automatic scaling, backup, and monitoring for modern applications.',
      features: [
        'Fully managed MongoDB',
        'Auto-scaling & optimization',
        'Global distribution',
        'Advanced security',

        'Real - time analytics',
      ],      pricing: '$9 / month',        'Fully managed MongoDBAuto - scaling & optimization_global distribution_advanced security_real - time analytics';

    },
    {
      icon: <Cloud className='w-8 h-8 text-white'    />,
      title: 'Vercel Pro',
  description:
        'Next.js deployment platform with automatic deployments, preview deployments, and advanced analytics.',
      features: [
        'Zero-config deployments',
        'Preview deployments',
        'Advanced analytics',
        'Team collaboration',
        'Custom domains',

      ],      pricing: '$20 / month',        'Zero - config deployments_preview deployments_advanced analytics_team collaboration_custom domains';

    },
    {
      icon: <Shield className='w-8 h-8 text-white'    />,
      title: 'Snyk',
  description:
        'Developer security platform that finds and fixes vulnerabilities in code, dependencies, and containers.',
      features: [
        'Vulnerability scanning',
        'Dependency monitoring',
        'Container security',
        'Infrastructure as Code',

        'CI / CD integration',
      ],      pricing: '$25 / month',        'Vulnerability scanning_dependency monitoring_container security_infrastructure as CodeCI / CD integration';

    },
    {
      icon: <Zap className='w-8 h-8 text-white'    />,
      title: 'Postman',
  description:
        'Complete API development platform for building, testing, and documenting APIs with team collaboration.',

      features: [;



        'API design & testing',
        'Team collaboration',
        'API documentation',
        'Mock servers',
        'Monitoring & analytics',

      ],      pricing: '$12 / month',        'API design & testing_team collaborationAPI documentation_mock servers_monitoring & analytics';

      ];
      pricing: '$12 / month',
      market_price: '$12 - 99 / month',
      website: 'https://www.postman.com / pricing',
      color: 'bg - gradient - to - br from - orange - 500 to - red - 600',
      text_color: 'text - orange - 400',
      gradient: 'from - orange - 400 to - red - 500',
      popular: false,


      category: 'API Development',



  ];
    {



      title: 'Dev Tools Market',

      value: '$8.2B',
      growth: '+24% YoY',
      description: 'Global developer tools market size'

          </div>
          <h1 className='text-responsive-xl font-black mb-8 gradient-text text-shadow-lg'    />
            Professional Developer Tools That Actually Work;
          </h1>
          <p className='text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed'    />
            Curated developer tools and services that professionals use daily.
            Each tool has been tested and verified to provide real value for;
developers and development teams.
          </p>
        </div>
      </section>

      {/* Developer Market Statistics */}


            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'    />
              Understanding the developer tools landscape helps you make;
informed decisions about your development stack.
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
      {/* Developer Market Statistics */}
      <section className='section-padding bg-gradient-cursor-accent'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Understanding the developer tools landscape helps you make
              informed decisions about your development stack.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
            {devMarketStats.map((stat, index) => (
              <Card
                key={index}
                className='card-hover border-gradient-blue text-center'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='p-6'>
                  <h3 className='text-lg font-semibold text-white mb-3'>
                    {stat.title}
                  </h3>
                  <div className='text-2xl font-bold text-cursor-blue mb-2'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-green-400 mb-3'>
                    {stat.growth}
                  </div>
                  <p className='text-sm text-gray-400'>{stat.description}</p>                </div>                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{stat.title}</h3>
                  <div className="text-2xl font-bold text-cursor-blue mb-2">{stat.value}</div>
                  <div className="text-sm text-green-400 mb-3">{stat.growth}</div>
                  <p className="text-sm text-gray-400">{stat.description}</p>

            ))}



          </div>

        </div>
      </section>

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
<section className='section-padding bg-gradient-cursor'    />
        <div className='container-cursor'    />
          <div className='text-center mb-20'    />
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />


              Curated Developer Tools & Services;
            </h2>

            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'    />
              Each tool has been carefully selected based on performance;
reliability, and real-world developer usage.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'    />
            {developerTools.map((tool, index) => (}
}
      {/* Developer Tools Grid */}
<section className='section-padding bg-gradient-cursor'    />;
        <div className='container-cursor'    />;
          <div className='text-center mb-20'    />;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />;
              Curated Developer Tools & Services;
            </h2>;

              <Card

                key={index}


                className={`card-hover group border-gradient-blue relative ${}
                  tool && tool.popular ? 'ring-2 ring-cursor-blue ring-opacity-50' : ''}
                }`}

                          {feature}
                        </li>;
                      ))}


<div className='flex items-center justify-between'    />
                      <Button;
href={tool && tool.website}

                        variant='primary'
                        size='sm'

                        className='bg-cursor-blue hover: bg-cursor-blue-dark'
                          />
                        Try Tool;
                        <ExternalLink className='w-4 h-4 ml-2'    />
                      </Button>
                      <div className='text-right'    />
                        <div className='text-xs text-gray-500'    />Direct Link</div>
                        <div className='text-xs text-cursor-blue font-mono'    />

                          {tool.websit,}
}

                        </div>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </Card>;



                      </div>
                    </div>
                  </div>
                </div>
              </Card>



          </div>
        </div>
      </section>
      {/* Developer Workflow */}

<section className='section-padding bg-gradient-cursor-accent'    />
        <div className='container-cursor'    />
          <div className='text-center mb-20'    />
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />




              Complete Developer Workflow;
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'    />
              Build a complete development pipeline with these essential tools;
that work together seamlessly.

            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'    />
            {devWorkflow.map((phase, index) => (

                        className='text-sm text-cursor-blue font-medium'>                        {tool}              Complete Developer Workflow;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Build a complete development pipeline with these essential tools that work together seamlessly.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {devWorkflow && devWorkflow.map((phase, index) => (;
              <Card
                key={index}
                className="card-hover border-gradient-blue"


                        className='text-sm text-cursor-blue font-medium'
                          />


                        {tool}
                      </div>;
                    ))}
                  </div>;
                </div>;
              </Card>;
            ))}


            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Understanding the different types of developer tools helps you
              build a comprehensive development stack.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {devCategories.map((category, index) => (

            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'    />;
            {devCategories.map((category, index) => (</div>;}
        </div>;}
      </section>;{/* Tool Categories */}
      <section className='section-padding bg-gradient-cursor'    />;
        <div className='container-cursor'    />;
          <div className='text-center mb-20'    />;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'    />;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6'    />;
            {dev_workflow.map ((phase, index) => ())}
      {/* CTA Section */}
      <section className='section-padding bg-gradient-cursor-accent'    />;
        <div className='container-cursor text-center'    />;
          <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />;
          </h2>;
          <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12'    />;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'    />;
            {dev_categories.map ((category, index) => (<Card;}
                key={index}
                className='card - hover border - gradient - blue';
                style={{ animation_delay: `${index * 0.1}s` ,
}
                  />;
                </div>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* Tool Categories */}
<section className='section-padding bg-gradient-cursor'    />;
        <div className='container-cursor'    />;
          <div className='text-center mb-20'    />;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />;
            </h2>;

            <p className='text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;

              Understanding the different types of developer tools helps you;
              build a comprehensive development stack.;
            </p>;
          </div>;





            ))}


          <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devCategories.map((category, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue
                style={{ animationDelay: `${index * 0.1}s` }}
                    </span>                  </div>                <div className=p-6">
              >
                <div className="p-6>
                  <h3 className=text-xl font-semibold text-white mb-3">{category.name}</h3>
                  <p className="text-gray-400 mb-4>{category.description}</p>
                  <div className=flex items-center justify-between text-sm">
                    <span className="text-gray-500>Tools Available: <span className=text-white">{category.tools}</span></span>
                    <span className="text-cursor-blue font-semibold>{category.avgPrice}</span>
                      <span className='text-white>{category.tools}</span>;
                    </span>;
                    <span className=text-cursor-blue font-semibold'>;
                      {category.avgPrice}</span>                  </div>                <div className=p-6">;
                  <h3 className="text-xl font-semibold text-white mb-3>{category.name}</h3>;
                  <p className=text-gray-400 mb-4">{category.description}</p>;
                  <div className="flex items-center justify-between text-sm>;
                    <span className=text-gray-500">Tools Available: <span className="text-white>{category.tools}</span></span>;
                    <span className=text-cursor-blue font-semibold">{category.avgPrice}</span>;
                    </span>;
                  </div>;
                </div>;
              </Card>;
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

            )

}
          </div>;
        </div>;
      </section>;
          </div>;
        </div>;
      </section>;{/* CTA Section */}Start with one tool or build a complete development stack. Each tool;
            is designed to work independently and integrate seamlessly with your;
            existing workflow.;
          </p>;
      {/* CTA Section */}


<section className='section-padding bg-gradient-cursor-accent'    />
        <div className='container-cursor text-center'    />
          <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />
          </h2>
          <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12'    />
            Start with one tool or build a complete development stack. Each tool;
is designed to work independently and integrate seamlessly with your;
existing workflow.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'    />
            <Button;
href='/ai-tools'
              variant='primary'
              size='lg'

              className='bg-cursor-blue hover:bg-cursor-blue-dark'
                />
              Explore AI Tools;
            </Button>
            <Button;
href='/contact'
              variant='outline'
              size='lg'

              className='border-cursor-blue text-cursor-blue hover:bg-cursor-blue hover:text-white'
                />
              Get Dev Consultation;

            </Button>
          </div>
        </div>
      </section>






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
              className='bg-cursor-blue hover:bg-cursor-blue-dark'>;
              Explore AI Tools;
            </Button>;
            <Button
              href='/contact'
              variant='outline'
              size='lg'


          <div className='flex flex - col sm:flex - row gap - 6 justify - center'>;

            <Button;
              href=/ai-tools';
              variant='primary;
              size=lg';
              className='bg-cursor-blue hover:bg-cursor-blue-dark>;
              Explore AI Tools;
            </Button>;className=bg-cursor-blue hover:bg-cursor-blue-dark';
            >;
              Explore AI Tools;
            </Button>;
            <Button;
href='/contact;
              variant=outline';
              size='lg;
              Get Dev Consultation;


            </Button>;
          </div>;
        </div>;
      </section>;


              className='border-cursor-blue text-cursor-blue hover:bg-cursor-blue hover:text-white'            >              href="/ai-tools"
              variant="primary"
              size="lg"

              className="bg-cursor-blue hover:bg-cursor-blue-dark"
              Explore AI Tools
            </Button>


  )}
  )
}




