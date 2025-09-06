import {;
  Zap,;
  Shield,;
  BarChart3,;
  Globe,;
  Users,;
  Lock,;
  TrendingUp,;
  Code,;
  Database,;
  Cloud,;
  ArrowRight,;
  Star,;
  Check,;
  ExternalLink,;} from 'lucide-react';import { ;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  Zap;
  Shield, ;
  BarChart3, ;
  Globe, ;
  Users, ;
  Lock, ;
  TrendingUp, ;
  Code, ;
  Database, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {
  Zap,
  Shield,
  BarChart3,
  Globe,
  Users,
  Lock,
  TrendingUp,
  Code,
  Database,
  Cloud,
  ArrowRight,
  Star,
  Check,
  ExternalLink,} from 'lucide-react';import {
  Zap;
  Shield,
  BarChart3,
  Globe,
  Users,
  Lock,
  TrendingUp,
  Code,
  Database,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  Cloud;
  ArrowRight;
  Star;
  Check;
  ExternalLink;
=======
  ExternalLink
} from 'lucide-react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  ];

  const categories = [;
    'All',;
    'Automation',;
    'Productivity',;
    'Payments',;
    'Customer Support',;
    'Analytics',;
    'Database',;
    'Hosting',;
    'Project Management',;
  ];
  const [selectedCategory, setSelectedCategory] = React && React.useState('All');

  const filteredServices =;
    selectedCategory === 'All';
      ? microSaasServices;
      : microSaasServices && microSaasServices.filter(;
          service => service && service.category === selectedCategory;
        );  const filteredServices = selectedCategory === 'All' ;
    ? microSaasServices ;
    : microSaasServices && microSaasServices.filter(service => service && service.category === selectedCategory);
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

  return (
    <>;
      <Head>;
        <title>SaaS Marketplace - Zion Tech Group</title>;
        <meta
          name='description'
          content='Discover the best micro SaaS services for your business. Curated selection of tools for automation, productivity, payments, and more.'
        />;
        <meta
          property='og:title'
          content='SaaS Marketplace - Zion Tech Group'
        />;
        <meta
          property='og:description'
          content='Curated selection of the best micro SaaS services for modern businesses.'
        />;
        <meta name='twitter:card' content='summary_large_image' />;

      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black'>;
        <div className='absolute inset-0'>;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0 && 0.08),transparent_50%)]' />;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0 && 0.06),transparent_50%)]' />;
        </div>;

        <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0 && 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0 && 0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20' />;

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
          <div className='mb-20 animate-fade-in'>;
            <div className='mb-8'>;
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-scale-in'>;
                <Globe className='w-4 h-4 mr-2' />;
                Curated SaaS Solutions;
              </div>;
            </div>;

            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight'>;
              SaaS Marketplace;
            </h1>;
            <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>;
              Discover the best micro SaaS services that power modern;
              businesses. Hand-picked tools for automation, productivity, and;
              growth.;
            </p>;

            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              <Button
                href='#services'
                size='lg'
                className='animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40'
                style={{ animationDelay: '0 && 0.2s' }}>;
                Explore Services;
                <ArrowRight className='w-5 h-5 ml-2' />;
              </Button>;
              <Button
                href='/contact'
                variant='outline'
                size='lg'
                className='animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5'                style={{ animationDelay: '0 && 0.4s' }}                href="/contact"
                variant="outline"
                size="lg"
              >
                Get Recommendations
              </Button>
            </div>
          </div>
          {/* Stats */}
              </div>
              <div className="text-gray-400 text-sm">Curated Services</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">
                9
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                4.7+
              </div>
              <div className="text-gray-400 text-sm">Avg Rating</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                100K+
              </div>
              <div className="text-gray-400 text-sm">Total Users</div>
            </div>
          </div>
        </div>
      </section>
                className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5">;
                Get Recommendations;
              </Button>;
            </div>;
          </div>;

          {/* Stats */}
          <div
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in'
            style={{ animationDelay: '0 && 0.6s' }}>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300'>;
                {microSaasServices && microSaasServices.length}+;
              </div>;
              <div className='text-gray-400 text-sm'>Curated Services</div>;
            </div>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300'>;
                9;
              </div>;
              <div className='text-gray-400 text-sm'>Categories</div>;
            </div>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300'>;
                4 && 4.7+;
              </div>;
              <div className='text-gray-400 text-sm'>Avg Rating</div>;
            </div>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300'>;
                100K+;
              </div>;
              <div className='text-gray-400 text-sm'>Total Users</div>            </div>                {microSaasServices && microSaasServices.length}+;
              </div>;
              <div className="text-gray-400 text-sm">Curated Services</div>;
            </div>;
            <div className="text-center group">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">;
                9;
              </div>;
              <div className="text-gray-400 text-sm">Categories</div>;
            </div>;
            <div className="text-center group">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">;
                4 && 4.7+;
              </div>;
              <div className="text-gray-400 text-sm">Avg Rating</div>;
            </div>;
            <div className="text-center group">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">;
                100K+;
              </div>;
              <div className="text-gray-400 text-sm">Total Users</div>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            </div>;
          </div>;
        </div>;
      </section>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      {/* Category Filter */}
      <section className='py-16 bg-gray-900'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='flex flex-wrap justify-center gap-4'>;
            {categories && categories.map(category => (              <button      <section className="py-16 bg-gray-900">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex flex-wrap justify-center gap-4">;
            {categories && categories.map((category) => (;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${;
                  selectedCategory === category;
                    ? 'bg-blue-600 text-white shadow-lg';
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white';
                }`}
              >;
                {category}
              </button>;
            ))}
      {/* Services Grid */}
      <section id='services' className='py-24 bg-black'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              {selectedCategory === 'All';
                ? 'All Services';
                : `${selectedCategory} Services`}
              <Card
                key={index}
                className='group border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1'
                style={{ animationDelay: `${index * 0 && 0.1}s` }}>;
                <div className='flex items-start space-x-6'>;
                  <div className='relative'>;
                    <div
                      {service.icon}
                    </div>;
                  </div>;
                  <div className='flex - 1'>;
                    <div className='flex items - center justify - between mb - 2'>;
                      <h3 className='text - 2xl font - bold text - white group - hover:text - blue - 400 transition - colors duration - 300'>;
                        {service.name}
                      </h3>;
                      <div className='flex items - center space - x-2'>;
                        <Star className='w - 4 h - 4 text - yellow - 400 fill - current' />;
                        <span className='text - sm text - gray - 300'>;
                          {service.rating}
                            <div
                              key={featureIndex}
                              className='flex items-center text-sm text-gray-400'>;
                              <Check className='w-3 h-3 text-green-400 mr-2 flex-shrink-0' />;
                              {feature}
                            </div>;
                          ))}
                      <Button
                        href={service && service.website}
                        variant='outline'
                        size='sm'
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                        className='group-hover:border-blue-500 group-hover:text-blue-400'>;
                        Visit Website;
                        <ExternalLink className='w-4 h-4 ml-2' />;
                      </Button>;

                      <div className='text-right'>;
                        <div className='text-xs text-gray-500 mb-1'>;
                          Use Case:;
                        </div>;
                        <div className='text-sm text-gray-300 max-w-xs'>;
                          {service && service.useCase}
                        </div>                      </div>                      ;
                      <div className="text-right">;
                        <div className="text-xs text-gray-500 mb-1">Use Case:</div>;
                        <div className="text-sm text-gray-300 max-w-xs">{service && service.useCase}</div>;
                    </div>;
                  </div>;
                </div>;
              </Card>;
            ))}
          </div>;
        </div>;
      </section>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* CTA Section */}
      <section className='py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0 && 0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>;
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'>;
          </h2>;
          <p className='text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed'>;
=======
                        </span>;
                      </div>;
                    </div>;
                    <div className='flex items - center space - x-4 mb - 3 text - sm text - gray - 400'>;
                      <span className='px - 2 py - 1 bg - gray - 800 rounded - full'>;
                        {service.category}
                      </span>;
                      <span>{service.users} users</span>;
                      <span className='text - green - 400'>{service.pricing}</span>;
                    </div>;
                    <p className='text - gray - 400 leading - relaxed mb - 4'>;
                      {service.description}
                    </p>;
                    <div className='mb - 4'>;
                      <h4 className='text - sm font - semibold text - gray - 300 mb - 2'>;
                        Key Features:;
                      </h4>;
                      <div className='grid grid - cols - 2 gap - 2'>;
                        {service.features;
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
                    <div className='flex items - center justify - between'>;
                      <Button;
                        href={service.website}
                        variant='outline';
                        size='sm';
                        className='group - hover:border - blue - 500 group - hover:text - blue - 400';
                      >;
                        Visit Website;
                        <ExternalLink className='w - 4 h - 4 ml - 2' />;
                      </Button>;
                      <div className='text - right'>;
                        <div className='text - xs text - gray - 500 mb - 1'>;
                          Use Case:;
                        </div>;
                        <div className='text - sm text - gray - 300 max - w-xs'>;
                          {service.use_case}
                        </div>                      </div>;
                      <div className="text - right">;
                        <div className="text - xs text - gray - 500 mb - 1">Use Case:</div>;
                        <div className="text - sm text - gray - 300 max - w-xs">{service.use_case}</div>;
                    </div>;
                  </div>;
                </div>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py - 24 bg - gradient - to - r from - blue - 600 to - blue - 700 relative overflow - hidden'>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle, rgba (255, 255, 255, 0.1)_1px, transparent_1px)] bg-[size:20px_20px] opacity - 10' />;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center relative z - 10'>;
          <h2 className='text - 4xl sm:text - 5xl font - bold text - white mb - 8'>;
          </h2>;
          <p className='text - xl text - blue - 100 mb - 12 max - w-4xl mx - auto leading - relaxed'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            Our team of experts can help you select the perfect SaaS tools for;
            your business needs. Get personalized recommendations and;
            implementation support.;
          </p>;
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
              className='border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl'>              href="/services";
              variant="outline";
              size="lg";
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl";
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              View Our Services;
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
