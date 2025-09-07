
import Link from next/link';
import { useRouter } from 'next/router;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
import { Menu;
	}
	X;
	ChevronDown;
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
	FlaskConical;
	Link as LinkIcon;

export default function NeoFuturisticNavigation() {const [isOpen, setIsOpen] = useState(false);
  }
  const [isScrolled, setIsScrolled] = useState(false);

						</div>
					</Link>


import {

  Menu,
X
  ChevronDown,
ChevronRight
  Phone,
Mail
  MapPin,
Globe
  ArrowRight,
Sparkles
  Brain,
Atom
  Shield,
DollarSign
  FileText,
BarChart3
  MessageSquare,
Truck
  Users,
Database
  Cpu,
Cloud
  Play,
Search
  ShieldCheck,
TrendingUp
  Rocket,
Zap
  Check,
Star
  Clock,
Target
  Building,
Award
  ChartBar,
Lock
  Smartphone,
Palette
  Calendar,
CreditCard
  Settings,
Code
  BookOpen,
Activity
  Bot,

        }
        {'
          name: 'Quantum Simulation
          description: 'Advanced quantum simulations'
          price: $399/month'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        }
      ]
    }

        }
      ]
    }
  ];

    return () => window && window.removeEventListener('scroll', handleScroll);
=======

    return () => window && window.removeEventListener('scroll, handleScroll);
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
}

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null)
}

  const isActive = (path: string) => router && router.pathname === path;

  const serviceCategories = [;

          price: $399/month'}]},

          price: '$149/month}]},

          price: $129/month'}]},

          price: '$99/month}]},

          price: $249/month'}]},

          price: '$199/month}]},

          price: $349/month'}]},

          price: '$149/month}]},

          price: $199/month'}]},

          price: '$399/month}]}];

  const companyInfo = [;

      link: /contact'}];

  const resources = [;

      link: '/reports}];

  // Popular quick links to flagship services;
  const popularServiceLinks = [;
    { name: 'AI Content Generator', href: /ai-content-generator },'
    { name: 'AI Blockchain Analytics, href: /ai-blockchain-analytics' },'
    { name: AI Legal Contract Analyzer, href: '/ai-legal-contract-analyzer' },
    { name: AI HR Recruitment', href: '/ai-hr-recruitment },
    { name: 'AI Video Editing', href: /ai-video-editing },'
    { name: 'AI SEO Optimization, href: /ai-seo-optimization' },'
    { name: AI IoT Platform, href: '/ai-iot-platform' },
    { name: AI Sales Automation', href: '/ai-sales-automation },
    { name: 'AI Market Research', href: /ai-market-research }];

  // Newly added real services quick links;
  const newServiceLinks = [;
    {'
      name: 'Email Deliverability Monitor,
      href: '/services/email-deliverability-monitor'},
    {
      name: Landing Page Experimentation','
      href: /services/landing-page-experimentation},
    {'
      name: 'Invoice Reconciliation Automation,
      href: '/services/invoice-reconciliation-automation'},
    {
      name: GitHub Ops Health Dashboard','
      href: /services/github-ops-health-dashboard},
    {'
      name: 'Error Budget Automation,
      href: '/services/error-budget-automation'},
    { name: LLM Usage Governance', href: '/services/llm-usage-governance }];

    >;
      {/* Scroll Progress Bar */}
      <div className='absolute top-0 left-0 h-1 w-full bg-transparent'>;
        <div
          className=h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600'
          style={{}
          }}
        />;
      </div>;'

            {/* Services Dropdown */}
            <div className=relative group'>;
              <button;
                className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2;
                onClick={() => toggleDropdown(services')}
              >;
                <span>Services</span>;
                <ChevronDown;
                  className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services ? rotate-180' : ';
                  }`}
                />;
              </button>;
              {activeDropdown === services' && (<div className='absolute top-full left-0 mt-2 w-[800px] bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6>;
                  <div className=grid grid-cols-2 gap-6'>;
                    {serviceCategories.map((category, index) => (<div key={index} className='group>;
                        <div className=flex items-center space-x-3 mb-3'>;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                          <div;
                            className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>`
                            {category.icon}
                          </div>;
                          <div>;

                              {category.description}
                            </p>;
                          </div>;
                        </div>;

                          {category.services.map((service, serviceIndex) => (<div;
                              }
                              key={serviceIndex}

                                {service.price}
                              </div>;
                            </div>;
                          ))}
                        </div>;
                      </div>;
                    ))}
                  </div>;

                      </Button>;
                    </div>;
                  </div>;
                </div>;
              )}
            </div>;
            {/* Direct Links */}
            <Link;

                      </Link>;
                    ))}
                  </div>;
                </div>;
              )}
            </div>;
            {/* New Dropdown */}

                    Live;
                  </span>;
                </span>;
                <ChevronDown;

                      </Link>;
                    ))}
                  </div>;
                </div>;
              )}
            </div>;
          </div>;
          {/* Mobile Menu Button */}
          <button;

          </button>;
        </div>;
      </div>;
      {/* Mobile Menu */}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    {serviceCategories.map((category, index) => (
                  />;
                </button>;

                    {serviceCategories.map((category, index) => (/>;
                </button>;{activeDropdown === 'mobile-services && (<div className=ml-4 space-y-3'>;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                    {serviceCategories && serviceCategories.map((category, index) => (<div;
                        }
                        key={index}

                          {category && category.services;
                            .slice(0, 2).map((service, serviceIndex) => (<div;
                                }
                                key={serviceIndex}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                                • {service && service.name} - {service && service.price}
                              </div>;
                            ))}
                        </div>;
                      </div>;

                  </Button>
                </div>
              </div>


						{/* Direct Links */}
						<Link href="/it-services className=text-gray-300 hover:text-white transition-colors duration-300 py-2">IT Services</Link>
						<Link href="/ai-services className=text-gray-300 hover:text-white transition-colors duration-300 py-2">AI Services</Link>
						<Link href="/micro-saas className=text-gray-300 hover:text-white transition-colors duration-300 py-2">Micro SaaS</Link>
						<Link href="/pricing className=text-gray-300 hover:text-white transition-colors duration-300 py-2">Pricing</Link>
						<Link href="/ai-evals className=text-gray-300 hover:text-white transition-colors duration-300 py-2">AI Evals</Link>
						<Link href="/agentic-rag className=text-gray-300 hover:text-white transition-colors duration-300 py-2">Agentic RAG</Link>
						<Link href="/ai-guardrails className=text-gray-300 hover:text-white transition-colors duration-300 py-2">Guardrails</Link>
						<Link href="/ai-agents className=text-gray-300 hover:text-white transition-colors duration-300 py-2">Agents</Link>
						<Link href="/solutions className=text-gray-300 hover:text-white transition-colors duration-300 py-2">Solutions</Link>
						<Link href="/api-observability className=text-gray-300 hover:text-white transition-colors duration-300 py-2">API Observability</Link>
						<Link href="/incident-automation-suite className=text-gray-300 hover:text-white transition-colors duration-300 py-2">Incident Automation</Link>
						<Link href="/data-pipeline-health className=text-gray-300 hover:text-white transition-colors duration-300 py-2">Data Pipeline Health</Link>
						<Link href="/ai-code-review-copilot className=text-gray-300 hover:text-white transition-colors duration-300 py-2">AI Code Review</Link>
						<Link href="/resources className=text-gray-300 hover:text-white transition-colors duration-300 py-2">Resources</Link>

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
						<div className=relative group">
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
					<button className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X className=w-6 h-6" /> : <Menu className="w-6 h-6 />}
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

								{activeDropdown === mobile-services && (
									<div className=ml-4 space-y-3">
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
										<div className=pt-3">
											<Button href="/services variant=quantum" size="sm className=w-full">
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
							<div className=pt-6 border-t border-gray-700/50">
								<div className="text-white font-semibold mb-4>Contact Information</div>
								<div className=space-y-3">
									<div className="flex items-center space-x-3>
										<Phone className=w-5 h-5 text-cyan-400" />
										<span className="text-gray-300>{contactInfo.mobile}</span>
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
