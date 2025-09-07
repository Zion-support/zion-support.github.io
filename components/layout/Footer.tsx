<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
<<<<<<< HEAD
  const currentYear = new Date().getFullYear();
  
=======
	const currentYear = new Date().getFullYear();
	return (
		<footer className="border-t bg-white mt-16">
			<div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-3 text-sm">
				<div>
					<h3 className="font-semibold mb-3">Zion Tech Group</h3>
					<p className="text-gray-600">Building practical AI and modern web solutions.</p>
				</div>
				<div>
					<h4 className="font-semibold mb-3">Company</h4>
					<ul className="space-y-2 text-gray-700">
						<li><Link href="/about" className="hover:text-blue-600">About</Link></li>
						<li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
						<li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
					</ul>
				</div>
				<div>
					<h4 className="font-semibold mb-3">Legal</h4>
					<ul className="space-y-2 text-gray-700">
						<li><Link href="/privacy" className="hover:text-blue-600">Privacy</Link></li>
						<li><Link href="/terms" className="hover:text-blue-600">Terms</Link></li>
					</ul>
				</div>
			</div>
			<div className="mx-auto max-w-7xl px-4 py-4 text-xs text-gray-500 border-t">
				© {currentYear} Zion Tech Group. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';



import {
  Phone
  Mail
  MapPin
  Facebook
  Twitter
  Linkedin
  Instagram
  Code
  Smartphone
  Cloud
  Database
  Shield
  Zap
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
=======
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

<<<<<<< HEAD
  const services = [
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-development' },
    { name: 'Blockchain Solutions', href: '/services/blockchain' },
    { name: 'IoT Platforms', href: '/services/iot-platforms' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
  ];
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/blog' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' },
    { name: 'FAQ', href: '/faq' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github },
  ];

const company = [;
    { "name": 'About Us', "href": '/about','
},
  { "name": 'Our Team', "href": '/team','
},
  { "name": 'Careers', "href": '/careers','
},
  { "name": 'News', "href": '/news','
},
{ "name": 'Contact', "href": '/contact','
}
  ];

const company = [
    { name: 'About Us'}
  href: '/about'}
},
  { name: 'Our Team'}
  href: '/team'}
},
  { name: 'Careers'}
  href: '/careers'}
},
  { name: 'News'}
  href: '/news'}
},
{ name: 'Contact'}
  href: '/contact'}
}
  ];

const resources = [
    { name: 'Documentation'}
  href: '/docs'}
},
  { name: 'API Reference'}
  href: '/api'}
},
  { name: 'Blog'}
  href: '/blog'}
},
  { name: 'Case Studies'}
  href: '/case-studies'}
},
{ name: 'White Papers'}
  href: '/white-papers'}
}
  ];import { Phone,Mail,MapPin,Facebook,Twitter,Linkedin,Instagram,Code,Smartphone,Cloud,Database,Shield,Zap;}
 } from 'lucide-react';

const Footer: React.FC = () => {const currentYear = new Date().getFullYear(;
  const services = [
  import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Code,
  Smartphone,
  Cloud,
  Database,
<<<<<<< HEAD
  Shield}
  Zap;}
=======
  Shield,
  Zap;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
} from 'lucide-react';

const Footer: React.FC = () => {

  const currentYear = new Date().getFullYear()
 ;
  const services = [
<<<<<<< HEAD
    { name: 'Web Development'}
  href: '/services/web-development'}
}
{ name: 'Mobile Apps'}
  href: '/services/mobile-apps'}
}
    { name: 'AI Solutions'}
  href: '/services/ai-solutions'}
}
    { name: 'Cloud Services'}
  href: '/services/cloud-services'}
}
=======
    { name: 'Web Development', href: '/services/web-development' }
{ name: 'Mobile Apps', href: '/services/mobile-apps' }
    { name: 'AI Solutions', href: '/services/ai-solutions' }
    { name: 'Cloud Services', href: '/services/cloud-services' }
  ];
  const solutions = [
    { name: 'E-commerce', href: '/solutions/ecommerce' }
    { name: 'CRM Systems', href: '/solutions/crm' }
    { name: 'Data Analytics', href: '/solutions/analytics' }
    { name: 'Automation', href: '/solutions/automation' }
  ];
  const company = [
    { name: 'About Us', href: '/about' }
{ name: 'Our Team', href: '/team' }
    { name: 'Careers', href: '/careers' }
    { name: 'Contact', href: '/contact' }
    { name: 'Privacy Policy', href: '/privacy' }
    { name: 'Terms of Service', href: '/terms' }
  ];
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook }
    { name: 'Twitter', href: '#', icon: Twitter }
    { name: 'LinkedIn', href: '#', icon: Linkedin }
    { name: 'Instagram', href: '#', icon: Instagram }

<<<<<<< HEAD
=======
import { ;
  Phone, ;
  Mail, ;
  MapPin, ;
  Facebook, ;
  Twitter, ;
  Linkedin, ;
  Instagram,;
  Code,;
  Smartphone,;
  Cloud,;
  Database,;
  Shield,;
  Zap;
} from 'lucide-react';

const Footer: React.FC = () => {;
  const currentYear = new Date().getFullYear(),;

  const services = [;
    { name: 'Web Development', href: '/services/web-development' },;
    { name: 'Mobile Apps', href: '/services/mobile-apps' },;
    { name: 'AI Solutions', href: '/services/ai-solutions' },;
    { name: 'Cloud Services', href: '/services/cloud-services' },;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  ];

const solutions = [
  ];

const company = [
    { name: 'Careers'}
  href: '/careers'}
},
  { name: 'Contact'}
  href: '/contact'}
},
  { name: 'Privacy Policy'}
  href: '/privacy'}
},
{ name: 'Terms of Service'}
  href: '/terms'}
}
  ];

const socialLinks = [
  ];
<<<<<<< HEAD
  return (<footer className=\"bg-gray-900 text-white\"    />;"
      <div className=\"container mx-auto px-4 py-12\"    />;"
        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8\"    />;
          {/* Company Info */}"
          <div className=\"lg:col-span-2\"    />;"
            <div className=\"flex items-center space-x-2 mb-4\"    />;"
              <div className=\"w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center\"    />;"
                <Code className=\"w-5 h-5 text-white\"    />;
              </div>;"
              <span className=\"text-xl font-bold\"    />Zion Tech Group</span>;
            </div>;"
            <p className=\"text-gray-400 mb-6 max-w-sm\"    />;
              Transforming businesses through innovative technology solutions.;
              We deliver cutting-edge software, AI, and cloud services.;
            </p>;"
            <div className=\"space-y-3\"    />;"
              <div className=\"flex items-center space-x-3\"    />;"
                <Phone className=\"w-4 h-4 text-blue-400\"    />;"
                <a href=\"tel:+13024640950\" className=\"text-gray-400 hover:text-white transition-colors\"    />;
                  +1 302 464 0950;
                </a>;
              </div>;"
              <div className=\"flex items-center space-x-3\"    />;"
                <Mail className=\"w-4 h-4 text-blue-400\"    />;"
                <a href=\"mailto:kleber@ziontechgroup.com\" className=\"text-gray-400 hover:text-white transition-colors\"    />;
                  kleber@ziontechgroup.com;
                </a>;
              </div>;"
              <div className=\"flex items-center space-x-3\"    />;"
                <MapPin className=\"w-4 h-4 text-blue-400\"    />;"
                <span className=\"text-gray-400\"    />;
                  364 E Main St STE 1008<br    />;

<<<<<<< HEAD
const solutions = [
  ];

const company = [
      { name: 'Careers'}
  href: '/careers'}
},

      { name: 'Contact'}
  href: '/contact'}
},

      { name: 'Privacy Policy'}
  href: '/privacy'}
},

    { name: 'Terms of Service'}
  href: '/terms'}
}
  ];

const socialLinks = [
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  ];
>>>>>>> origin/resolved-merge-conflicts
  return (
    <footer className="border-t bg-white mt-16">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <h3 className="font-semibold mb-3">Zion Tech Group</h3>
          <p className="text-gray-600">Building practical AI and modern web solutions.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-700">
            <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-gray-700">
            <li><Link href="/privacy" className="hover:text-blue-600">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-600">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-gray-500 border-t">
        © {currentYear} Zion Tech Group. All rights reserved.
      </div>
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
<<<<<<< HEAD
=======

export default Footer;
"
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
}
}
}
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
                  key = $2;
                  href = $2;
                  target = $2;
                  rel = $2;
                  className = $2;
                  aria-label = $2;
                >,
                  <social.icon className = $2;
                </a>))},
            </div>,
          </div>,
          {/* Services */},
          <div>,
            <h3 className = $2;
            <ul className = $2;
              {services.map((service) => (,
                <li key = $2;
                  <Link,
                    href = $2;
                    {service.name},
                  </Link>,
                </li>))},
            </ul>,
          </div>,
          {/* Company */},
          <div>,
            <h3 className = $2;
            <ul className = $2;
              {company.map((item) => (,
                <li key = $2;
                  <Link,
                    href = $2;
                    {item.name},
                  </Link>,
                </li>))},
            </ul>,
          </div>,
          {/* Resources & Contact */},
          <div>,
            <h3 className = $2;
            <ul className = $2;
              {resources.map((resource) => (,
                <li key = $2;
                  <Link,
                    href = $2;
                    {resource.name},
                  </Link>,
                </li>))},
            </ul>,
            <h3 className = $2;
            <div className = $2;
              <div className = $2;
                <Mail className = $2;
                <a href = $2;
                  info@ziontechgroup.com,
                </a>,
              </div>,
              <div className = $2;
                <Phone className = $2;
                <a href = $2;
                  +1 (555) 123-4567,
                </a>,
              </div>,
              <div className = $2;
                <MapPin className = $2;
                <span>,
                  123 Tech Street<br />,
                  San Francisco, CA 94105,
                </span>,
              </div>,
            </div>,
          </div>,
        </div>,
        {/* Bottom Section */},
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
