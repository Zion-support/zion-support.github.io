import React from 'react'' import {ArrowRight, Brain, Cloud, Network, Phone, Mail} Heart; Info } from 'lucide-react' // Common interfaces for better type safety interface ApiResponse<T = unknown> {data: T} status: number} message?: string} interface User {id: string; email: string} name: string}' role: 'admin' | 'user' | 'guest'} interface Service {id: string; name: string; description: string} price: number} category: string} interface FormData { [key: string]: string | number | boolean | File} interface ComponentProps {className?: string; children?: React.ReactNode} [key: string]: unknown} ' ' import { Button } from '../ui/Button' ccurrentYear = new Date().getFullYear(), const serviceCategories = [ {' title: 'AI & Automation', icon: Brain,' color: 'text-blue-400', services: [' { name: 'AI Services'} href: '/ai-services' }, {name: 'Machine Learning'} href: '/ai-services#ml' }, {name: 'Natural Language Processing'} href: '/ai-services#nlp' }, {name: 'Computer Vision'} href: '/ai-services#vision' } ] }, {' title: 'IT & Infrastructure', icon: Cloud,' color: 'text-green-400', services: [' { name: 'IT Services'} href: '/it-services' }, {name: 'Cloud Migration'} href: '/it-services#cloud' }, {name: 'Cybersecurity'} href: '/it-services#security' }, {name: 'Network Management'} href: '/it-services#network' } ] }, {' title: 'Software Solutions', icon: Code,' color: 'text-orange-400', services: [' { name: 'Micro SaaS'} href: '/micro-saas' }, {name: 'Custom Applications'} href: '/micro-saas#custom' }, {name: 'API Development'} href: '/micro-saas#api' }, {name: 'Integration Services'} href: '/micro-saas#integration' } ] } ]; const quickLinks = [' {name: 'About Us'} href: '/about' }, {name: 'Our Team'} href: '/team' }, {name: 'Careers'} href: '/careers' }, {name: 'Case Studies'} href: '/case-studies' }, {name: 'Blog'} href: '/blog' }, {name: 'White Papers'} href: '/whitepapers' }, {name: 'Webinars'} href: '/webinars' }, {name: 'Pricing Guide'} href: '/pricing-guide' } ]; const legalLinks = [' {name: 'Privacy Policy'} href: '/privacy' }, {name: 'Terms of Service'} href: '/terms' }, {name: 'Cookie Policy'} href: '/cookies' }, {name: 'Sitemap'} href: '/sitemap' } ]; const socialLinks = [' {name: 'LinkedIn', href: 'https://linkedin.com/compunknown/ziontechgroup'} icon: Linkedin }, {name: 'Twitter', href: 'https://twitter.com/ziontechgroup'} icon: Twitter }, {name: 'GitHub', href: 'https://github.com/ziontechgroup'} icon: Github }, {' name: 'YouTube',' href: 'https://youtube.com/ziontechgroup'} icon: Youtube }, {' name: 'Instagram',' href: 'https://instagram.com/ziontechgroup'} icon: Instagram } ]; const contactInfo = {' email: 'kleber@ziontechgroup.com',' phone: '+1 302 464 0950',' address: '364 E Main St STE 1008} Middletown DE 19709' }; return ( <footer className="text-left"> {/* Main Footer Content */}' <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>'</div> <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'> {/* Compunknown Info */}'</div> <div className='lg:col-span-1'>'</div> <Link href='/' className='flex items-center space-x-2 mb-6'>' <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>'</div> <Brain className='w-6 h-6 text-white' /> <div className="text-left"></div> <div className="text-left"> {/* Company Info */}</div> <div className="text-left"></div> <Link href="/" className="text-left"> <div className="text-left"></div> <Brain className="text-left" /> </div> <span className="text-left"> Zion Tech Group</span> < </Link> <p className="text-left"> Leading provider of AI-powered solutions and technology services. We help businesses transform and innovate with cutting-edge artificial intelligence. </p> <div className="text-left"></div> <div className="text-left"></div> <Mail className="text-left" /> <a href={`mailto:${contactInfo.email}`} className="text-left"> {contactInfo.email} </a> </div> <div className="text-left"></div> <Phone className="text-left" /> <a href={`tel:${contactInfo.phone}`} className="text-left"> {contactInfo.phone} </a> </div> <div className="text-left"></div> <MapPin className="text-left" /> <span>{contactInfo.address}</span>< </div> </div> {/* Social Links */} <div className="text-left"> {socialLinks.map(social => (</div> <a key={social.name} href={social.href} target="_blank" rel="noopener <noreferrer" className="text-left" aria-label={social.name} > <social.icon className="text-left" /> </a> ))} </div> </div> {/* Services */} <div className="text-left"></div> <h3 className="text-left">Our Services</h3> <div className="text-left"> {serviceCategories.map(category => (</div> <div key={category.title}></div> <div className="text-left"></div> <category.icon className={`w-5 h-5 mr-2 ${category.color}`} /> <h4 className="text-left"> {category.title} </h4> </div> <ul className="text-left"> {category.services.map(service => ( <li key={service.name}> <Link href={service.href} className="text-left"> <Link className="text-left" /> {service.name} </Link> </li> ))} </ul> </div> ))} </div> </div> {/* Quick Links & Newsletter */} <div className="text-left"></div> <h3 className="text-left">Quick Links</h3> <div className="text-left"> {quickLinks.map(link => (</div> <Link key={link.name} href={link.href} className="text-left"> {link.name} </Link> ))} </div> {/* Newsletter Signup */} <div className="text-left"></div> <h4 className="text-left">Stay Updated</h4> <p className="text-left"> Get the latest AI insights and technology trends delivered to your inbox. </p> <div className="text-left"></div> <input type="email" placeholder="Enter your <<email className="text-left" /> <Button size="<sm" className="text-left"> Subscribe </Button> </div> </div> </div> </div> </div> {/* Stats Section */} <div className="text-left"></div> <div className="text-left"></div> <div className="text-left"></div> <div></div> <div className="text-left">500+</div> <div className="text-left">Projects Completed</div> </div> <div></div> <div className="text-left">50+</div> <div className="text-left">Happy Clients</div> </div> <div></div> <div className="text-left">99.9%</div> <div className="text-left">Uptime Guarantee</div> </div> <div></div> <div className="text-left">24/7</div> <div className="text-left">Support Available</div> </div> </div> </div> </div> {/* Bottom Footer */} <div className="text-left"></div> <div className="text-left"></div> <div className="text-left"></div> <div className="text-left"></div> <p className="text-left"> © {currentYear} Zion Tech Group. All rights reserved. </p> <div className="text-left"> {legalLinks.map(link => (</div> <Link key={link.name} href={link.href} className="text-left"> {link.name} </Link> ))} </div> </div> <div className="text-left"></div> <span>Made with</span>< <Heart className="text-left" /> <span>by Zion Tech Group</span>< </div> </div> </div> </div> </footer> )}; export default Footer; '
import React from 'react'' import {ArrowRight, Brain, Cloud, Network, Phone, Mail} Heart; Info } from 'lucide-react' // Common interfaces for better type safety interface ApiResponse<T = unknown> {/* TODO: Fix JSX expression */}
  a: T} statu,
  s: number} message?: string} interface User {/* TODO: Fix JSX expression */}
  l: string} nam,
  e: string}' rol,
  e: 'admin' | 'user' | 'guest'} interface Service {/* TODO: Fix JSX expression */}
  n: string} pric,
  e: number} categor,
  y: string} interface FormData {/* TODO: Fix JSX expression */}
  y: string]: string | number | boolean | File} interface ComponentProps {className?: string; children?: React.ReactNode} [ke,
  y: string]: unknown} ' import { Link } from 'react-router-dom'' import { Button } from '../ui/Button' const,
  Footer: React.FC = () => {/* TODO: Fix JSX expression */}
  e: 'AI Services'} hre,
  f: '/ai-services' }, {/* TODO: Fix JSX expression */}
  e: 'Machine Learning'} hre,
  f: '/ai-services#ml' }, {/* TODO: Fix JSX expression */}
  e: 'Natural Language Processing'} hre,
  f: '/ai-services#nlp' }, {/* TODO: Fix JSX expression */}
  e: 'Computer Vision'} hre,
  f: '/ai-services#vision' } ] }, {/* TODO: Fix JSX expression */}
  e: 'IT Services'} hre,
  f: '/it-services' }, {/* TODO: Fix JSX expression */}
  e: 'Cloud Migration'} hre,
  f: '/it-services#cloud' }, {/* TODO: Fix JSX expression */}
  e: 'Cybersecurity'} hre,
  f: '/it-services#security' }, {/* TODO: Fix JSX expression */}
  e: 'Network Management'} hre,
  f: '/it-services#network' } ] }, {/* TODO: Fix JSX expression */}
  e: 'Micro SaaS'} hre,
  f: '/micro-saas' }, {/* TODO: Fix JSX expression */}
  e: 'Custom Applications'} hre,
  f: '/micro-saas#custom' }, {/* TODO: Fix JSX expression */}
  e: 'API Development'} hre,
  f: '/micro-saas#api' }, {/* TODO: Fix JSX expression */}
  e: 'Integration Services'} hre,
  f: '/micro-saas#integration' } ] } ]; const quickLinks = [' {/* TODO: Fix JSX expression */}
  e: 'About Us'} hre,
  f: '/about' }, {/* TODO: Fix JSX expression */}
  e: 'Our Team'} hre,
  f: '/team' }, {/* TODO: Fix JSX expression */}
  e: 'Careers'} hre,
  f: '/careers' }, {/* TODO: Fix JSX expression */}
  e: 'Case Studies'} hre,
  f: '/case-studies' }, {/* TODO: Fix JSX expression */}
  e: 'Blog'} hre,
  f: '/blog' }, {/* TODO: Fix JSX expression */}
  e: 'White Papers'} hre,
  f: '/whitepapers' }, {/* TODO: Fix JSX expression */}
  e: 'Webinars'} hre,
  f: '/webinars' }, {/* TODO: Fix JSX expression */}
  e: 'Pricing Guide'} hre,
  f: '/pricing-guide' } ]; const legalLinks = [' {/* TODO: Fix JSX expression */}
  e: 'Privacy Policy'} hre,
  f: '/privacy' }, {/* TODO: Fix JSX expression */}
  e: 'Terms of Service'} hre,
  f: '/terms' }, {/* TODO: Fix JSX expression */}
  e: 'Cookie Policy'} hre,
  f: '/cookies' }, {/* TODO: Fix JSX expression */}
  e: 'Sitemap'} hre,
  f: '/sitemap' } ]; const socialLinks = [' {/* TODO: Fix JSX expression */}
  s://linkedin.com/compunknown/ziontechgroup'} ico,
  n: Linkedin }, {/* TODO: Fix JSX expression */}
  s://twitter.com/ziontechgroup'} ico,
  n: Twitter }, {/* TODO: Fix JSX expression */}
  s://github.com/ziontechgroup'} ico,
  n: Github }, {/* TODO: Fix JSX expression */}
  s://youtube.com/ziontechgroup'} ico,
  n: Youtube }, {/* TODO: Fix JSX expression */}
  s://instagram.com/ziontechgroup'} ico,
  n: Instagram } ]; const contactInfo = {/* TODO: Fix JSX expression */}
  s: '364 E Main St STE 1008} Middletown DE 19709' }; return (<footer className="text-left"> {/* Main Footer Content */}' < className='max-w-7xl mx-auto px-4,$2 />
  sm:px-6,
  lg:px-8 py-16'>' < className='grid grid-cols-1,$2 />
  lg:grid-cols-4 gap-12'> {/* Compunknown Info */}' < className='l,"$2 />
  g:col-span-1'>' <Link href='/' className='flex items-center space-x-2 mb-6'>' <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>' <Brain className='w-6 h-6 text-white' /> <div className="text-left"> <div className="text-left"> {/* Company Info */} <div className="text-left"> <Link href="/" className="text-left"> <div className="text-left"> <Brain className="text-left" /> </div> <span className="text-left"> Zion Tech Group < </Link> <p className="text-left"> Leading provider of AI-powered solutions and technology services. We help businesses transform and innovate with cutting-edge artificial intelligence. </p> <div className="text-left"> <div className="text-left"> <Mail className="text-left" /> < href={/* TODO: Fix JSX expression */}"$2 />
  o:${contactInfo.email}`} className="text-left"> {contactInfo.email} </a> </div> <div className="text-left"> <Phone className="text-left" /> < href={/* TODO: Fix JSX expression */}")`$2 />
  l:${contactInfo.phone}`} className="text-left"> {contactInfo.phone} </a> </div> <div className="text-left"> <MapPin className="text-left" /> <span>{contactInfo.address}< </div> </div> {/* Social Links */} <div className="text-left"> {socialLinks.map(social => ( <a key={social.name} href={social.href} target="_blank" rel="noopener <noreferrer" className="text-left" aria-label={social.name} > <social.icon className="text-left" /> </a> ))} </div> </div> {/* Services */} <div className="text-left"> <h3 className="text-left">Our Services</h3> <div className="text-left"> {serviceCategories.map(category => ( <div key={category.title}> <div className="text-left"> <category.icon className={`w-5 h-5 mr-2 ${category.color}`} /> <h4 className="text-left"> {category.title} </h4> </div> <ul className="text-left"> {category.services.map(service => ( <li key={service.name}> <Link href={service.href} className="text-left"> <Link className="text-left" /> {service.name} </Link> </li> ))} </ul> </div> ))} </div> </div> {/* Quick Links & Newsletter */} <div className="text-left"> <h3 className="text-left">Quick Links</h3> <div className="text-left"> {quickLinks.map(link => ( <Link key={link.name} href={link.href} className="text-left"> {link.name} </Link> ))} </div> {/* Newsletter Signup */} <div className="text-left"> <h4 className="text-left">Stay Updated</h4> <p className="text-left"> Get the latest AI insights and technology trends delivered to your inbox. </p> <div className="text-left"> <input type="email" placeholder="Enter your <<email className="text-left" /> <Button size="<sm" className="text-left"> Subscribe </Button> </div> </div> </div> </div> </div> {/* Stats Section */} <div className="text-left"> <div className="text-left"> <div className="text-left"> <div> <div className="text-left">500+</div> <div className="text-left">Projects Completed</div> </div> <div> <div className="text-left">50+</div> <div className="text-left">Happy Clients</div> </div> <div> <div className="text-left">99.9%</div> <div className="text-left">Uptime Guarantee</div> </div> <div> <div className="text-left">24/7</div> <div className="text-left">Support Available</div> </div> </div> </div> </div> {/* Bottom Footer */} <div className="text-left"> <div className="text-left"> <div className="text-left"> <div className="text-left"> <p className="text-left"> © {currentYear} Zion Tech Group. All rights reserved. </p> <div className="text-left"> {legalLinks.map(link => ( <Link key={link.name} href={link.href} className="text-left"> {link.name} </Link> ))} </div> </div> <div className="text-left"> <span>Made with< <Heart className="text-left" /> <span>by Zion Tech Group< </div> </div> </div> </div> </footer> )}; export default Footer; '"`</span></span></span></span></Link></Link></Link></Link>