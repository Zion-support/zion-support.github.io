import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Twitter, Linkedin, Github, Facebook, Instagram, Youtube, Award, Users, Shield, Zap, CheckCircle } from 'lucide-react';

const ImprovedFooter = () => 
  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 relative z-10" /></footer>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" /></div>
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16" /></div>
          
            <div key={index} className="text-center group" /></div>
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" /></div>
                {stat.icon}
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2" />{stat.number}</div>
              <div className="text-gray-300 text-xs md:text-sm" />{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16" /></div>
          
            <div key={index} className="space-y-6" /></div>
              <div className="flex items-center space-x-3" /></div>
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`} /></div>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white" />{category.title}</h3>
              </div>
              <div className="space-y-3" /></div>
                
                    key={linkIndex}
                    to={link.href}
                    className=
                    }`}
                  ></Lin></Link>
                    <div className="flex items-center space-x-2" /></div>
                      <span />{link.label}</span>
                      {link.featured && <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" / />}
                    </div>
                  </Link>
                ))}
                
                    to={category.links.find(l =></Lin> l.featured)?.href || '#'}
                    className="block text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group"
                  >
                    <div className="flex items-center space-x-2" /></div>
                      <span />View All {category.title}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" / />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Company Info & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12" /></div>
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6" /></div>
            <div /></div>
              <h3 className="text-2xl font-bold text-white mb-4" /></h3>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400" /></span>
                  Zion Tech Group
                </span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6" />
                Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology.
              </p>
            </div>
            
            {/* Social Links */}
            <div /></div>
              <h4 className="text-white font-semibold mb-4" />Follow Us</h4>
              <div className="flex space-x-4" /></div>
                
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-white/20 transition-all duration-300 group"
                    aria-label={social.label}
                  ></a>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4" /></div>
            <h4 className="text-lg font-semibold text-white" />Company</h4>
            <div className="space-y-3" /></div>
              
                  key={index}
                  to={link.href}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                ></Lin></Link>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4" /></div>
            <h4 className="text-lg font-semibold text-white" />Resources</h4>
            <div className="space-y-3" /></div>
              
                  key={index}
                  to={link.href}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                ></Lin></Link>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4" /></div>
            <h4 className="text-lg font-semibold text-white" />Contact</h4>
            <div className="space-y-4" /></div>
              <div className="flex items-start space-x-3" /></div>
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5" / />
                <div /></div>
                  <p className="text-white text-sm font-medium">Phone</p>
                  <p className="text-gray-300 text-sm">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3" /></div>
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5" / />
                <div /></div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <p className="text-gray-300 text-sm">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3" /></div>
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" / />
                <div /></div>
                  <p className="text-white text-sm font-medium">Address</p>
                  <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-8 mb-12" /></div>
          <div className="max-w-2xl mx-auto text-center" /></div>
            <h3 className="text-2xl font-bold text-white mb-4" />Stay Updated</h3>
            <p className="text-gray-300 mb-6" />
              Get the latest updates on AI innovations, technology trends, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" /></div>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              / />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center" /></button>
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" / />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8" /></div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" /></div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6" /></div>
              <p className="text-gray-300 text-sm" />
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6" /></div>
                
                    key={index}
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  ></Lin></Link>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4" /></div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm" /></div>
                <CheckCircle className="w-4 h-4 text-green-400" / />
                <span />SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm" /></div>
                <Shield className="w-4 h-4 text-green-400" / />
                <span />GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ImprovedFooter;
