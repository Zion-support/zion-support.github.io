


import React from 'react';

import Link from 'next/link';

import {

  Brain,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,;
  Twitter,;


} from 'lucide-react';import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';
import React from 'react';


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
{
  name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' 
}
{
  name: 'Edge Computing', href: '/edge-computing-orchestration' 
}
{
  name: 'Space Technology', href: '/space-technology' 
}
{
  name: 'View All Services', href: '/comprehensive-2025-services-showcase' 
}] 
}
{
  title: 'Company', links: [ {
  name: 'About Us', href: '/about' 
}
{
  name: 'Our Work', href: '/portfolio' 
}
{
  name: 'Blog & Insights', href: '/blog' 
}
{
  name: 'Careers', href: '/careers' 
}
{
  name: 'Contact', href: '/contact' 
}] 
}
{
  title: 'Resources', links: [ {
  name: 'Documentation', href: '/docs' 
}
{
  name: 'API Reference', href: '/api' 
}
{
  name: 'Support Center', href: '/support' 
}
{
  name: 'Privacy Policy', href: '/privacy' 
}
{
  name: 'Terms of Service', href: '/terms' 
}] 
}]
</div> <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent" > Zion Tech Group </span> </div> <p className="text-white/70 mb-6 max-w-md" > Leading-edge technology solutions and autonomous innovation platform. Empowering businesses with cutting-edge AI, quantum computing, and digital transformation. </p> kleber@ziontechgroup.com </a> </div> <div className="flex items-center space-x-3 text-white/70" > <Phone className="w-4 h-4" /> <a href="tel:+13024640950" className="hover:text-white transition-colors" > +1 (302) 464-0950 </a> </div> <div className="flex items-center space-x-3 text-white/70" > <MapPin className="w-4 h-4" /> <span>Global Operations</span> </div> </div> </div> </li>) ) 
}</ul> </div>) ) 
}</div> > <social.icon className="w-5 h-5" /> </a>) ) 
}</div> </div> </div> </div> </footer>) 
}
export default EnhancedFooter






        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}


            {/* Social Links */}

            <div className='flex items-center space-x-4'>;
              {socialLinks && socialLinks.map(social => (        <div className="pt-8 border-t border-white/10">;
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">;
            {/* Copyright */}

            <div className="text-white/60 text-sm">;
            </div>;


            {/* Social Links */}

};export default EnhancedFooter;  );


              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>


          <div className="flex flex - col md: flex - row justify - between items - center">";
            <div className="text - gray - 400 text - sm mb - 4 md:mb - 0">,© {current_year} Zion Tech Group. All rights reserved.;
            </div>";
            <div className="flex items - center space - x-6">";
              <div className="flex items - center space - x-4">;
                {social_links.map (social => (";
                  <a key="{social.name}
                    href="{social.href}
                    target="_blank;
                    rel="noopener noreferrer;
                    className="text - gray - 400 hover: text - white transition - colors"">;
                    aria - label="{social.name}">";
                    <social.icon className="w - 5 h - 5" />;

                  </a>))}
              </div>;



  );
};export default EnhancedFooter;  )

};








