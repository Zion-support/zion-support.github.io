'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

  ];

  ];

  ];


  ];

  ];

  ];

  ];

  ];

                  <h3 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h3>
                  <p className="text-sm text-cyan-400">AI & IT Solutions</p>
                </div>
              </Link>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>

            </div>
          </div>

                  <Link />
                    to={service.url}

                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                <Link />
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

                  <Link />
                    to={service.url}

                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                <Link />
                  to="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                <Link />
                to="/micro-saas"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center group"
              >
                View All Solutions
                <ArrowRight />
              </Link>
              </li>
            </ul>
          </div>

            </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

                <div className="text-white font-medium">{contactInfo.hours}</div>
                <div className="text-gray-400 text-sm">Business hours</div>
              </div>
            </div>
          </div>
        </div>

                  <Link />
                    to={link.url}

                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                  <Link />
                    to={link.url}

                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
              <li><Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">All Services</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Pricing</Link></li>
              <li><Link to="/demo" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Request Demo</Link></li>
              <li><Link to="/consultation" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Free Consultation</Link></li>
            </ul>
          </div>
              </button>
            </div>
          </div>
        </div>
      </div>

              <Link />
                Privacy Policy
              </Link>
              <Link />
                Terms of Service
              </Link>
              <Link />
                Cookie Policy
              </Link>
            </div>
  );
});

Footer.displayName = 'Footer';
export default Footer;
