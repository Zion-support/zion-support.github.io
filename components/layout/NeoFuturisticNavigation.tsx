



import React, { useState, useEffect } from 'react',
import Link from 'next/link';
import { useRouter } from 'next/router';

	ChevronRight;
	Phone;
	Mail;
	MapPin;
	Globe;
	ArrowRight;
	Sparkles;
	Brain;
	Atom;
	Shield;
	DollarSign;
	FileText;
	BarChart3;
	MessageSquare;
	Truck;
	Users;
	Database;
	Cpu;
	Cloud;
	Play;
	Search;
	ShieldCheck;
	TrendingUp;
	Rocket;
	Zap;
	Check;
	Star;
	Clock;
	Target;
	Building;
	Award;
	ChartBar;
	Lock;
	Smartphone;
	Palette;
	Calendar;
	CreditCard;
	Settings;
	Code;
	BookOpen;
	Activity;
	Bot;
	ChevronRight as ChevronRightIcon;
	Eye;

	Link as LinkIcon;

          {/* Logo */}

          <Link href='/' className='flex items-center space-x-3 group'    />
            <div className='relative'    />
              <div className='w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover: scale-110 transition-transform duration-300'    />
                <Sparkles className='w-6 h-6 text-white'    />
              </div>
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300'    /></div>
            </div>
            <div className='hidden sm:block'    />
              <div className='text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300'    />
                Zion Tech Group;
              </div>
              <div className='text-xs text-gray-400'    />
                Revolutionary Technology;
              </div>
            </div>
          </Link>


          {/* Desktop Navigation *}
}
          <div className='hidden lg:flex items-center space-x-8'    />;
            {/* Services Dropdown */}
            <div className='relative group'    />;
              <button;
                className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2';
                onClick={() =    /> toggleDropdown('services')}

              >;
                <span    />Services</span>;
                <ChevronDown;

                  className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : '';}
                  }`}
                   />;
              </button>;
              {activeDropdown === 'services' && (<div className='absolute top-full left-0 mt-2 w-[800px] bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6'    />;}
                  <div className='grid grid-cols-2 gap-6'    />;}
                    {serviceCategories.map((category, index) => (<div key={index} className='group'    />;
                        <div className='flex items-center space-x-3 mb-3'    />;

                          <div;
                            className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}    />

                            {category.icon}
                          </div>;

                          <div    />;
                            <h3 className='text-white font-semibold group-hover:text-cyan-400 transition-colors'    />;
                              {category.name}
                            </h3>;
                            <p className='text-gray-400 text-sm'    />;

                              {category.description}
                            </p>;
                          </div>;
                        </div>;

                        <div className='space-y-2'    />;
                          {category.services.map((service, serviceIndex) => (<div;}
                              key={serviceIndex}
                              className='flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors'    />

                              <div    />;
                                <div className='text-white text-sm font-medium'    />;
                                  {service.name}
                                </div>;
                                <div className='text-gray-400 text-xs'    />;
                                  {service.description}
                                </div>;
                              </div>;
                              <div className='text-cyan-400 text-sm font-semibold'    />;

                                {service.price}
                              </div>;
                            </div>;
                          ))}
                        </div>;
                      </div>;
                    ))}
                  </div>;

                  <div className='mt-6 pt-6 border-t border-gray-700/50'    />;
                    <div className='flex items-center justify-between'    />;
                      <div className='text-gray-400 text-sm'    />;
                        <span className='text-cyan-400 font-semibold'    />;

                      </Link>;
                    ))}
                  </div>;
                </div>;
              )}


            {/* New Dropdown */}

            <div className='relative group'    />;
              <button;
                className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2';
                onClick={() =    /> toggleDropdown('new')}
              >;
                <span className='flex items-center gap-2'    />;
                  New{' '}
                  <span className='px-2 py-0.5 text-[10px] rounded-full bg-fuchsia-600 text-white'    />;

                    Live;
                  </span>;
                </span>;
                <ChevronDown;

                  className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'new' ? 'rotate-180' : ''}`}
                   />;
              </button>;
              {activeDropdown === 'new' && (<div className='absolute top-full left-0 mt-2 w-96 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6'    />;
                  <div className='space-y-2'    />;}
                    {newServiceLinks.map(item => (<Link;}
                        key={item.href}
                        href={item.href}
                        className='flex items-center justify-between p-2 rounded-lg hover: bg-gray-800/50 transition-colors'    />

                        <span className='text-white text-sm'    />{item.nam}
}</span>;
                        <ArrowRight className='w-4 h-4 text-fuchsia-400'    />;

                      </Link>;
                    ))}
                  </div>;
                </div>;
              )}


          </button>;
        </div>;
      </div>;





      {/* Mobile Menu */}
      {isOpen && (<div className='lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-700/50'    />;
          <div className='max-w-7xl mx-auto px-4 py-6'    />;}
            <div className='space-y-6'    />;}
              {/* Services Section */}
              <div    />;
                <button;
                  className='flex items-center justify-between w-full text-left text-white font-semibold mb-4';
                  onClick={() =    /> toggleDropdown('mobile-services')}
                >;
                  <span    />Services</span>;
                  <ChevronRight;
                    className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-services' ? 'rotate-90' : ''}`}


                     />
                </button>
                {activeDropdown === 'mobile-services' && (
                  <div className='ml-4 space-y-3'    />

                    {serviceCategories.map((category, index) => (

                  />;
                </button>;





                {activeDropdown === 'mobile-services' && (
                  <div className='ml-4 space-y-3'>
                    {serviceCategories.map((category, index) => (

                        <div className='text-cyan-400 font-medium mb-2'>;
                          {category && category.name}
                        </div>;'
                        <div className='text-gray-400 text-sm mb-2'>;
                          {category && category.description}
                        </div>;'
                        <div className='space-y-1'>;
                          {category && category.services;
                            .slice(0, 2);
                            .map((service, serviceIndex) => (;
                              <div;
                                key={serviceIndex}'
                                className='text-xs text-gray-500'>;
                    {serviceCategories.map((category, index) => (
                  />;
                </button>;

                    {serviceCategories.map((category, index) => (/>;
                </button>;{activeDropdown === 'mobile-services && (<div className=ml-4 space-y-3'>;
                    {serviceCategories && serviceCategories.map((category, index) => (<div;
                        }
                        key={index}

                          {category && category.services;
                            .slice(0, 2).map((service, serviceIndex) => (<div;
                                }
                                key={serviceIndex}
                                className='text-xs text-gray-500'>;

                                • {service && service.name} - {service && service.price}
                              </div>;
                            ))}
                        </div>;
                      </div>;
                    ))}

          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className='lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-700/50'>
          <div className='max-w-7xl mx-auto px-4 py-6'>
            <div className='space-y-6'>
              {/* Services Section */}
              <div>
                <button
                  className='flex items-center justify-between w-full text-left text-white font-semibold mb-4'
                  onClick={() => toggleDropdown('mobile-services')}
                >
                  <span>Services</span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-services' ? 'rotate-90' : ''}`}
                  />
                </button>

                {activeDropdown === 'mobile-services' && (
                  <div className='ml-4 space-y-3'>
                    {serviceCategories.map((category, index) => (
                      <div
                        key={index}
                        className='border-l-2 border-gray-700 pl-4'
                      >
                        <div className='text-cyan-400 font-medium mb-2'>
                          {category.name}
                        </div>
                        <div className='text-gray-400 text-sm mb-2'>
                          {category.description}
                        </div>
                        <div className='space-y-1'>
                          {category.services
                            .slice(0, 2)
                            .map((service, serviceIndex) => (
                              <div
                                key={serviceIndex}
                                className='text-xs text-gray-500'
                              >
                                • {service.name} - {service.price}
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                    <div className='pt-3'>
                      <Button
                        href='/services'
                        variant='quantum'
                        size='sm'



              {/* Company Section */}
              <div>;
                <button;'
                  className='flex items - center justify - between w - full text - left text - white font - semibold mb - 4';'
                  on_click={() => toggle_dropdown ('mobile - company')}
                >;
                  <span > Company</span>;
                  <ChevronRight;'`
                    className={`w - 5 h - 5 transition - transform duration - 300 ${active_dropdown === 'mobile - company' ? 'rotate - 90' : ''}`}
                  />;
                </button>;'
                {active_dropdown === 'mobile - company' && ('
                  <div className='ml - 4 space - y-3'>;
                    {company_info.map ((item, index) => (
                      <Link;
                        key={index}
                        href={item.link}'
                        className='block text - gray - 300 hover:text - white transition - colors';
                        on_click={closeMobileMenu}
                      >;
                        {item.name}
                      </Link>))}
                  </div>)}
              </div>;
              {/* Resources Section */}
              <div>;
                <button;'
                  className='flex items - center justify - between w - full text - left text - white font - semibold mb - 4';'
                  on_click={() => toggle_dropdown ('mobile - resources')}
                >;
                  <span > Resources</span>;
                  <ChevronRight;'`
                    className={`w - 5 h - 5 transition - transform duration - 300 ${active_dropdown === 'mobile - resources' ? 'rotate - 90' : ''}`}
                  />;
                </button>;'
                {active_dropdown === 'mobile - resources' && ('
                  <div className='ml - 4 space - y-3'>;
                    {resources.map ((item, index) => (
                      <Link;
                        key={index}
                        href={item.link}'
                        className='block text - gray - 300 hover:text - white transition - colors';
                        on_click={closeMobileMenu}
                      >;
                        {item.name}
                      </Link>))}
                  </div>)}
              </div>;
              {/* Contact Info */}'
              <div className='pt - 6 border - t border - gray - 700 / 50'>;'
                <div className='text - white font - semibold mb - 4'>;
                  Contact Information;
                </div>;'
                <div className='space - y-3'>;'
                  <div className='flex items - center space - x-3'>;'
                    <Phone className='w - 5 h - 5 text - cyan - 400' />;'
                    <span className='text - gray - 300'>{contact_info.mobile}</span>;
                  </div>;'
                  <div className='flex items - center space - x-3'>;'
                    <Mail className='w - 5 h - 5 text - purple - 400' />;'
                    <span className='text - gray - 300'>{contact_info.email}</span>;
                  </div>;'
                  <div className='flex items - center space - x-3'>;'
                    <MapPin className='w - 5 h - 5 text - green - 400' />;'
                    <span className='text - gray - 300 text - sm'>;
                      {contact_info.address}
                    </span>;
                  </div>;'
                  <div className='flex items - center space - x-3'>;'
                    <Globe className='w - 5 h - 5 text - blue - 400' />;'
                    <span className='text - gray - 300'>{contact_info.website}</span>;

                  </div>;
                </div>;'
                <div className='mt - 6 space - y-3'>;
                  <Button;'
                    href='/services';'
                    variant='quantum';'
                    size='lg';'
                    className='w - full';
                  >;
                    Explore Services;'
                    <ArrowRight className='w - 5 h - 5 ml - 2' />;
                  </Button>;
                  <Button;'
                    href='/contact';'
                    variant='secondary';'
                    size='lg';'
                      <Button;
                        href='/services';
                        variant='quantum';
                        size='sm';
                  </div>
                )}


                  <Button;
href='/services'
                    variant='quantum'
                    size='lg'
                  <Button;
href='/contact'
                    variant='secondary'
                    size='lg'

                    className='w-full'
                      />

                    Contact Us;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
  `w-4 h-4 transition-transform duration-300 $ {}
  activeDropdown === 'services' ? 'rotate-180' : ''}
}`
}/> </button> </div>) )
}</div> </div>) )"
}</div> <div className=\"mt-6 pt-6 border-t border-gray-700/50\"     /> <div className=\"flex items-center justify-between\"     /> <div className=\"text-gray-400 text-sm\"     /> <span className=\"text-cyan-400 font-semibold\"     />500+</span> Revolutionary Services Available </div> <Button href=\"/services\" variant=\"quantum\" size=\"sm\"     /> View All Services <ArrowRight className=\"w-4 h-4 ml-2\"    /> </Button> </div> </div> </div>)
}</div> > <span    />Popular</span> <ChevronDown className= {
  `w-4 h-4 transition-transform duration-300 $ {}
  activeDropdown === 'popular'? 'rotate-180': ''}
}`
}   /> </button>) )
}</div> </div>)
}</div>) )
}</div> </div>)
}</div> </div> </button> </div> </div> <span    />Services</span> <ChevronRight className= {
  `w-5 h-5 transition-transform duration-300 $ {}
  activeDropdown === 'mobile-services'? 'rotate-90': ''}
}`
}   /> </button>) )
}</div> </div>) )"
}<div className=\"pt-3\"     /> <Button href=\"/services\" variant=\"quantum\" size=\"sm\" className=\"w-full\"     /> View All Services <ArrowRight className=\"w-4 h-4 ml-2\"    /> </Button> </div> </div>)
}</div> {}
  /* Company Section */}
}<div    /> <span    />Company</span> <ChevronRight className= {
  `w-5 h-5 transition-transform duration-300 $ {}
  activeDropdown === 'mobile-company'? 'rotate-90': ''}
}`
}   /> </button>) )
}</div>)
}</div> {}
  /* Resources Section */}

}<div    /> <span    />Resources</span> <ChevronRight className= {
  `w-5 h-5 transition-transform duration-300 $ {}
  activeDropdown === 'mobile-resources'? 'rotate-90': '' }
}` 
}   /> </button>) ) 
}</div>) "
}</div> </div> </div> <div className=\"mt-6 space-y-3\"     /> <Button href=\"/services\" variant=\"quantum\" size=\"lg\" className=\"w-full\"     /> Explore Services <ArrowRight className=\"w-5 h-5 ml-2\"    /> </Button> <Button href=\"/contact\" variant=\"secondary\" size=\"lg\" className=\"w-full\"     /> Contact Us </Button> </div> </div> </div> </div> </div>) 

}</nav>)
origin/cursor/automate-test-improve-and-merge-code-2533



                        key={index}
                        href={item && item.link}
                        className='block text-gray-300 hover:text-white transition-colors';
                        onClick={closeMobileMenu}>;
                        {item && item.name}
                      </Link>;
                    ))}
                  </div>;
                )}


              {/* Resources Section */}
              <div>;
                <button;
                  className='flex items-center justify-between w-full text-left text-white font-semibold mb-4';
                  onClick={() => toggleDropdown('mobile-resources')}
                >;
                  <span>Resources</span>;
                  <ChevronRight;
                    className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-resources' ? 'rotate-90' : ''}`}


                        key={index}
                        href={item && item.link}
                        className='block text-gray-300 hover:text-white transition-colors';
                        onClick={closeMobileMenu}>;
                        {item && item.name}
                      </Link>;
                    ))}
                  </div>;
                )}


                    className='w-full'>;
                        <ArrowRight className='w - 4 h - 4 ml - 2' />;
                      </Button>;
                    </div>;
                  </div>;
                </div>)}
            </div>;
            {/* Direct Links */}
            <Link;
              href='/it - services';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              IT Services;
            </Link>;
            <Link;
              href='/ai - services';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              AI Services;
            </Link>;
            <Link;
              href='/micro - saas';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Micro SaaS;
            </Link>;
            <Link;
              href='/pricing';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Pricing;
            </Link>;
            <Link;
              href='/ai - evals';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              AI Evals;
            </Link>;
            <Link;
              href='/agentic - rag';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Agentic RAG;
            </Link>;
            <Link;
              href='/ai - guardrails';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Guardrails;
            </Link>;
            <Link;
              href='/ai - agents';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Agents;
            </Link>;
            <Link;
              href='/solutions';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Solutions;
            </Link>;
            <Link;
              href='/api - observability';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              API Observability;
            </Link>;
            <Link;
              href='/incident - automation - suite';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Incident Automation;
            </Link>;
            <Link;
              href='/data - pipeline - health';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Data Pipeline Health;
            </Link>;
            <Link;
              href='/ai - code - review - copilot';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              AI Code Review;
            </Link>;
            <Link;
              href='/resources';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Resources;
            </Link>;
            {/* Popular Dropdown */}
            <div className='relative group'>;
              <button;
                className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
                on_click={() => toggle_dropdown ('popular')}
              >;
                <span > Popular</span>;
                <ChevronDown;
                  className={`w - 4 h - 4 transition - transform duration - 300 ${active_dropdown === 'popular' ? 'rotate - 180' : ''}`}
                />;
              </button>;
              {active_dropdown === 'popular' && (<div className='absolute top - full left - 0 mt - 2 w - 80 bg - black / 90 backdrop - blur - xl rounded - 2xl border border - gray - 700 / 50 shadow - 2xl p - 6'>;
                  <div className='space - y-2'>;
                    {popularServiceLinks.map (item => (<Link;
                        key={item.href}
                        href={item.href}
                        className='flex items - center justify - between p - 2 rounded - lg hover:bg - gray - 800 / 50 transition - colors';
                      >;
                        <span className='text - white text - sm'>{item.name}</span>;
                        <ArrowRight className='w - 4 h - 4 text - cyan - 400' />;
                      </Link>))}
                  </div>;
                </div>)}
            </div>;
            {/* New Dropdown */}
            <div className='relative group'>;
              <button;
                className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
                on_click={() => toggle_dropdown ('new')}
              >;
                <span className='flex items - center gap - 2'>;
                  New{' '}
                  <span className='px - 2 py - 0.5 text-[10px] rounded - full bg - fuchsia - 600 text - white'>;
                    Live;
                  </span>;
                </span>;
                <ChevronDown;
                  className={`w - 4 h - 4 transition - transform duration - 300 ${active_dropdown === 'new' ? 'rotate - 180' : ''}`}
                />;
              </button>;
              {active_dropdown === 'new' && (<div className='absolute top - full left - 0 mt - 2 w - 96 bg - black / 90 backdrop - blur - xl rounded - 2xl border border - gray - 700 / 50 shadow - 2xl p - 6'>;
                  <div className='space - y-2'>;
                    {newServiceLinks.map (item => (<Link;
                        key={item.href}
                        href={item.href}
                        className='flex items - center justify - between p - 2 rounded - lg hover:bg - gray - 800 / 50 transition - colors';
                      >;
                        <span className='text - white text - sm'>{item.name}</span>;
                        <ArrowRight className='w - 4 h - 4 text - fuchsia - 400' />;
                      </Link>))}
                  </div>;
                </div>)}
            </div>;
          </div>;
          {/* Mobile Menu Button */}
          <button;
            className='lg:hidden p - 2 text - gray - 300 hover:text - white transition - colors';
            on_click={() => setIsOpen (!is_open)}
          >;
            {is_open ? <X className='w - 6 h - 6' /> : <Menu className='w - 6 h - 6' />}
          </button>;
        </div>;
      </div>;
      {/* Mobile Menu */}
      {is_open && (<div className='lg:hidden bg - black / 95 backdrop - blur - xl border - t border - gray - 700 / 50'>;
          <div className='max - w-7xl mx - auto px - 4 py - 6'>;
            <div className='space - y-6'>;
              {/* Services Section */}
              <div>;
                <button;
                  className='flex items - center justify - between w - full text - left text - white font - semibold mb - 4';
                  on_click={() => toggle_dropdown ('mobile - services')}
                >;
                  <span > Services</span>;
                  <ChevronRight;
                    className={`w - 5 h - 5 transition - transform duration - 300 ${active_dropdown === 'mobile - services' ? 'rotate - 90' : ''}`}
                  />;
                </button>;
                {active_dropdown === 'mobile - services' && (<div className='ml - 4 space - y-3'>;
                    {service_categories.map ((category, index) => (<div;
                        key={index}
                        className='border - l-2 border - gray - 700 pl - 4';
                      >;
                        <div className='text - cyan - 400 font - medium mb - 2'>;
                          {category.name}
                        </div>;
                        <div className='text - gray - 400 text - sm mb - 2'>;
                          {category.description}
                        </div>;
                        <div className='space - y-1'>;
                          {category.services;
                            .slice (0, 2).map ((service, service_index) => (<div;
                                key={service_index}
                                className='text - xs text - gray - 500';
                              >;
                                • {service.name} - {service.price}
                              </div>))}
                        </div>;
                      </div>))}
                    <div className='pt - 3'>;
                      <Button;
                        href='/services';
                        variant='quantum';
                        size='sm';
                        className='w - full';
                      >;
                        View All Services;
                        <ArrowRight className='w - 4 h - 4 ml - 2' />;
                      </Button>;
                    </div>;
                  </div>)}
              </div>;
              {/* Company Section */}
              <div>;
                <button;
                  className='flex items - center justify - between w - full text - left text - white font - semibold mb - 4';
                  on_click={() => toggle_dropdown ('mobile - company')}
                >;
                  <span > Company</span>;
                  <ChevronRight;
                    className={`w - 5 h - 5 transition - transform duration - 300 ${active_dropdown === 'mobile - company' ? 'rotate - 90' : ''}`}
                  />;
                </button>;
                {active_dropdown === 'mobile - company' && (<div className='ml - 4 space - y-3'>;
                    {company_info.map ((item, index) => (<Link;
                        key={index}
                        href={item.link}
                        className='block text - gray - 300 hover:text - white transition - colors';
                        on_click={closeMobileMenu}
                      >;
                        {item.name}
                      </Link>))}
                  </div>)}
              </div>;
              {/* Resources Section */}
              <div>;
                <button;
                  className='flex items - center justify - between w - full text - left text - white font - semibold mb - 4';
                  on_click={() => toggle_dropdown ('mobile - resources')}
                >;
                  <span > Resources</span>;
                  <ChevronRight;
                    className={`w - 5 h - 5 transition - transform duration - 300 ${active_dropdown === 'mobile - resources' ? 'rotate - 90' : ''}`}
                  />;
                </button>;
                {active_dropdown === 'mobile - resources' && (<div className='ml - 4 space - y-3'>;
                    {resources.map ((item, index) => (<Link;
                        key={index}
                        href={item.link}
                        className='block text - gray - 300 hover:text - white transition - colors';
                        on_click={closeMobileMenu}
                      >;
                        {item.name}
                      </Link>))}
                  </div>)}
              </div>;
              {/* Contact Info */}
              <div className='pt - 6 border - t border - gray - 700 / 50'>;
                <div className='text - white font - semibold mb - 4'>;
                  Contact Information;
                </div>;
                <div className='space - y-3'>;
                  <div className='flex items - center space - x-3'>;
                    <Phone className='w - 5 h - 5 text - cyan - 400' />;
                    <span className='text - gray - 300'>{contact_info.mobile}</span>;
                  </div>;
                  <div className='flex items - center space - x-3'>;
                    <Mail className='w - 5 h - 5 text - purple - 400' />;
                    <span className='text - gray - 300'>{contact_info.email}</span>;
                  </div>;
                  <div className='flex items - center space - x-3'>;
                    <MapPin className='w - 5 h - 5 text - green - 400' />;
                    <span className='text - gray - 300 text - sm'>;
                      {contact_info.address}
                    </span>;
                  </div>;
                  <div className='flex items - center space - x-3'>;
                    <Globe className='w - 5 h - 5 text - blue - 400' />;
                    <span className='text - gray - 300'>{contact_info.website}</span>;
                  </div>;
                </div>;
                <div className='mt - 6 space - y-3'>;
                  <Button;
                    href='/services';
                    variant='quantum';
                    size='lg';
                    className='w - full';
                  >;
                    Explore Services;
                    <ArrowRight className='w - 5 h - 5 ml - 2' />;
                  </Button>;
                  <Button;
                    href='/contact';
                    variant='secondary';
                    size='lg';
                    className='w - full';
                  >;
                    Contact Us;
                  </Button>;
                </div>;
              </div>;
            </div>;
          </div>;



					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-8">
						{/* Services Dropdown */}
						<div className="relative group">
							<button
								className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
								onClick={() => toggleDropdown('services')}
							>
								<span>Services</span>
								<ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
									activeDropdown === 'services' ? 'rotate-180' : ''
								}`}/>
							</button>
							{activeDropdown === 'services' && (
								<div className="absolute top-full left-0 mt-2 w-[800px] bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
									<div className="grid grid-cols-2 gap-6">
										{serviceCategories.map((category, index) => (
											<div key={index} className="group">
												<div className="flex items-center space-x-3 mb-3">
													<div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
														{category.icon}
													</div>
													<div>

<h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">

															{category.name}
														</h3>
														<p className="text-gray-400 text-sm">{category.description}</p>
													</div>
												</div>
												<div className="space-y-2">
													{category.services.map((service, serviceIndex) => (
														<div key={serviceIndex} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
															<div>
																<div className="text-white text-sm font-medium">{service.name}</div>
																<div className="text-gray-400 text-xs">{service.description}</div>
															</div>
															<div className="text-cyan-400 text-sm font-semibold">{service.price}</div>
														</div>
													))}
												</div>
											</div>
									))}
									</div>

<div className="mt-6 pt-6 border-t border-gray-700/50">

										<div className="flex items-center justify-between">
											<div className="text-gray-400 text-sm">
												<span className="text-cyan-400 font-semibold">500+</span> Revolutionary Services Available
											</div>
											<Button href="/services" variant="quantum" size="sm">
												View All Services
												<ArrowRight className="w-4 h-4 ml-2" />
											</Button>
										</div>
									</div>
								</div>
							)}
						</div>


						{/* Popular Dropdown */}
						<div className="relative group>
							<button
								className=flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
								onClick={() => toggleDropdown(popular)}
							>
								<span>Popular</span>
								<ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'popular' ? rotate-180 : ''}`}/>
							</button>
							{activeDropdown === popular && (
								<div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6>
									<div className=space-y-2">
										{popularServiceLinks.map((item) => (
											<Link key={item.href} href={item.href} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors>
												<span className=text-white text-sm">{item.name}</span>
												<ArrowRight className="w-4 h-4 text-cyan-400 />
											</Link>
										))}
									</div>
								</div>
							)}
						</div>

{/* New Dropdown */}
						<div className="relative group">

							<button
								className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2
								onClick={() => toggleDropdown('new')}
							>
								<span className=flex items-center gap-2">New <span className="px-2 py-0.5 text-[10px] rounded-full bg-fuchsia-600 text-white>Live</span></span>
								<ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === new ? 'rotate-180' : }`}/>
							</button>
							{activeDropdown === 'new' && (
								<div className=absolute top-full left-0 mt-2 w-96 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
									<div className="space-y-2>
										{newServiceLinks.map((item) => (
											<Link key={item.href} href={item.href} className=flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
												<span className="text-white text-sm>{item.name}</span>
												<ArrowRight className=w-4 h-4 text-fuchsia-400" />
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
					</div>

{/* Mobile Menu Button */}
					<button className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}

					</button>
				</div>
			</div>
			{/* Mobile Menu */}
			{isOpen && (
				<div className=lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-700/50">
					<div className="max-w-7xl mx-auto px-4 py-6>
						<div className=space-y-6">
							{/* Services Section */}
							<div>
								<button className="flex items-center justify-between w-full text-left text-white font-semibold mb-4 onClick={() => toggleDropdown(mobile-services)}>
									<span>Services</span>
									<ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-services' ? rotate-90 : ''}`}/>
								</button>

								{activeDropdown === 'mobile-services' && (
									<div className="ml-4 space-y-3">

										{serviceCategories.map((category, index) => (
											<div key={index} className="border-l-2 border-gray-700 pl-4>
												<div className=text-cyan-400 font-medium mb-2">{category.name}</div>
												<div className="text-gray-400 text-sm mb-2>{category.description}</div>
												<div className=space-y-1">
													{category.services.slice(0, 2).map((service, serviceIndex) => (
														<div key={serviceIndex} className="text-xs text-gray-500>• {service.name} - {service.price}</div>
													))}
												</div>
											</div>
										))}

<div className="pt-3">
											<Button href="/services" variant="quantum" size="sm" className="w-full">

												View All Services
												<ArrowRight className="w-4 h-4 ml-2 />
											</Button>
										</div>
									</div>
								)}
							</div>
{/* Company Section */}
							<div>
								<button className=flex items-center justify-between w-full text-left text-white font-semibold mb-4" onClick={() => toggleDropdown('mobile-company')}>
									<span>Company</span>
									<ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === mobile-company ? 'rotate-90' : }`}/>
								</button>
								{activeDropdown === 'mobile-company' && (
									<div className="ml-4 space-y-3>
										{companyInfo.map((item, index) => (
											<Link key={index} href={item.link} className=block text-gray-300 hover:text-white transition-colors" onClick={closeMobileMenu}>
												{item.name}
											</Link>
										))}
									</div>
								)}
							</div>
{/* Resources Section */}
							<div>
								<button className="flex items-center justify-between w-full text-left text-white font-semibold mb-4 onClick={() => toggleDropdown(mobile-resources)}>
									<span>Resources</span>
									<ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-resources' ? rotate-90 : ''}`}/>
								</button>
								{activeDropdown === 'mobile-resources' && (
									<div className=ml-4 space-y-3">
										{resources.map((item, index) => (
											<Link key={index} href={item.link} className="block text-gray-300 hover:text-white transition-colors onClick={closeMobileMenu}>
												{item.name}
											</Link>
										))}
									</div>
								)}
							</div>

{/* Contact Info */}
							<div className="pt-6 border-t border-gray-700/50">
								<div className="text-white font-semibold mb-4">Contact Information</div>
								<div className="space-y-3">
									<div className="flex items-center space-x-3">
										<Phone className="w-5 h-5 text-cyan-400" />
										<span className="text-gray-300">{contactInfo.mobile}</span>

									</div>
									<div className=flex items-center space-x-3">
										<Mail className="w-5 h-5 text-purple-400 />
										<span className=text-gray-300">{contactInfo.email}</span>
									</div>
									<div className="flex items-center space-x-3>
										<MapPin className=w-5 h-5 text-green-400" />
										<span className="text-gray-300 text-sm>{contactInfo.address}</span>
									</div>
									<div className=flex items-center space-x-3">
										<Globe className="w-5 h-5 text-blue-400 />
										<span className=text-gray-300">{contactInfo.website}</span>
									</div>
								</div>

								<div className="mt-6 space-y-3>
									<Button href=/services" variant="quantum size=lg" className="w-full>

										Explore Services
										<ArrowRight className=w-5 h-5 ml-2" />
									</Button>
									<Button href="/contact variant=secondary" size="lg className=w-full">
										Contact Us
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</nav>



	);
}






