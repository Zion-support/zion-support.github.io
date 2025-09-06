<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/home/QuickAccess.tsx


<<<<<<< HEAD
=======

=======

import React from "react";

import {Link} from "react-router-dom";
import {ArrowRight, Search, Users, Briefcase, Settings, MessageSquare, Smartphone} from "lucide-react";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { Link } from "react-router-dom",
import { 
  ArrowRight,
  Search, 
  Users, 
  Briefcase, 
  Settings, 
  MessageSquare, 
  Smartphone 
} from "lucide-react",
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export function QuickAccess() {
  const quickLinks = [
    {

<<<<<<< HEAD
      link: "/match"

=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

export function QuickAccess() {
  const quickLinks = [
    {
      title: "AI Matcher"
      description: "Find the perfect match for your project needs"
      icon: <Search className="h-6 w-6 text-zion-cyan" />
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      title: "AI Matcher",
      description: "Find the perfect match for your project needs",
      icon: <Search className="h-6 w-6 text-zion-cyan" />,
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
      title: "AI Matcher",
      description: "Find the perfect match for your project needs",
      icon: <Search className="h-6 w-6 text-zion-cyan" />,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      link: "/match";
    };
      link: "/match"
    }
    },
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {
      title: "Talent Directory"
      description: "Browse verified tech specialists"
      icon: <Users className="h-6 w-6 text-zion-purple" />
      link: "/talent"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {
      title: "Service Marketplace"
      description: "Discover professional services"
      icon: <Briefcase className="h-6 w-6 text-zion-cyan" />
      link: "/services"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {
      title: "Equipment Catalog"
      description: "Find specialized hardware"
      icon: <Settings className="h-6 w-6 text-zion-purple" />
      link: "/equipment"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {
      title: "Community"
      description: "Connect with tech professionals"
      icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />
      link: "/community"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {
      title: "Mobile App"
      description: "Zion on the go"
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />
      link: "/mobile-launch"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  ],

  return (
    <section className="py-12 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">
            Quick Access
          </h2>
          <p className="text-zion-slate-light text-lg">
            Jump directly to our most popular features
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-4 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3">
<<<<<<< HEAD
=======
=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/home/QuickAccess.tsx
export function QuickAccess() {;
  const quickLinks = [;
    {;
      title: "AI Matcher",;
      description: "Find the perfect match for your project needs",;
      icon: <Search className="h-6 w-6 text-zion-cyan" />,;
      link: "/match";
    };
    {;
      title: "Talent Directory",;
      description: "Browse verified tech specialists",;
      icon: <Users className="h-6 w-6 text-zion-purple" />,;
      link: "/talent";
    };
    {;
      title: "Service Marketplace",;
      description: "Discover professional services",;
      icon: <Briefcase className="h-6 w-6 text-zion-cyan" />,;
      link: "/services";
    };
    {;
      title: "Equipment Catalog",;
      description: "Find specialized hardware",;
      icon: <Settings className="h-6 w-6 text-zion-purple" />,;
      link: "/equipment";
    };
    {;
      title: "Community",;
      description: "Connect with tech professionals",;
      icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />,;
      link: "/community";
    };
    {;
      title: "Mobile App",;
      description: "Zion on the go",;
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,;
      link: "/mobile-launch";
import React from './react';
import { Link } from './react-router-dom';
import { ArrowRight, Search, Users, Briefcase, Settings, MessageSquare, Smartphone } from './lucide-react';
;
export /**
 * QuickAccess - Function description
 */
function QuickAccess() {
  const quick_links = [;
    {
      title: "AI Matcher",
      description: "Find the perfect match for your project needs",
      icon: <Search className="h - 6 w - 6 text - zion - cyan" />,
      link: "/match";
    }
    {
      title: "Talent Directory",
      description: "Browse verified tech specialists",
      icon: <Users className="h - 6 w - 6 text - zion - purple" />,
      link: "/talent";
    }
    {
      title: "Service Marketplace",
      description: "Discover professional services",
      icon: <Briefcase className="h - 6 w - 6 text - zion - cyan" />,
      link: "/services";
    }
    {
      title: "Equipment Catalog",
      description: "Find specialized hardware",
      icon: <Settings className="h - 6 w - 6 text - zion - purple" />,
      link: "/equipment";
    }
    {
      title: "Community",
      description: "Connect with tech professionals",
      icon: <MessageSquare className="h - 6 w - 6 text - zion - cyan" />,
      link: "/community";
    }
    {
      title: "Mobile App",
      description: "Zion on the go",
      icon: <Smartphone className="h - 6 w - 6 text - zion - purple" />,
      link: "/mobile - launch";
    }
  ];
;
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/home/QuickAccess.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/home/QuickAccess.tsx
=======

import React from "react",;
import { Link } from "react-router-dom",;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/home/QuickAccess.tsx
=======
                {link.icon}
              </div>
              <h3 className="text-white font-medium mb-1">{link.title}</h3>
              <p className="text-zion-slate-light text-xs mb-2">{link.description}</p>
              <div className="flex items-center text-zion-cyan text-xs mt-auto">
                <span>Access</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </Link>
import React from "react",;
import { Link } from "react-router-dom",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {;
  ArrowRight,;
  Search,;
  Users,;
  Briefcase,;
  Settings,;
  MessageSquare,;
  Smartphone;
} from "lucide-react",;
export function QuickAccess() {;
  const quickLinks = [;
    {;
      title: "AI Matcher",;
      description: "Find the perfect match for your project needs",;
      icon: <Search className="h-6 w-6 text-zion-cyan" />,;
      link: "/match";
    },;
    {;
      title: "Talent Directory",;
      description: "Browse verified tech specialists",;
      icon: <Users className="h-6 w-6 text-zion-purple" />,;
      link: "/talent";
    },;
    {;
      title: "Service Marketplace",;
      description: "Discover professional services",;
      icon: <Briefcase className="h-6 w-6 text-zion-cyan" />,;
      link: "/services";
    },;
    {;
      title: "Equipment Catalog",;
      description: "Find specialized hardware",;
      icon: <Settings className="h-6 w-6 text-zion-purple" />,;
      link: "/equipment";
    },;
    {;
      title: "Community",;
      description: "Connect with tech professionals",;
      icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />,;
      link: "/community";
    },;
    {;
      title: "Mobile App",;
      description: "Zion on the go",;
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />;
      link: "/mobile-launch";
    }
  ];
  return (;
<<<<<<< HEAD

========
import { ;
  ArrowRight,;
  Search, ;
  Users, ;
  Briefcase, ;
  Settings, ;
  MessageSquare, ;
  Smartphone ;
} from "lucide-react",;
;
export function QuickAccess() {;
  const quickLinks = [;
    {;
      title:"AI Matcher",;
      description:"Find the perfect match for your project needs",;
      icon:<Search className="h-6 w-6 text-zion-cyan" />,;
      link:"/match";
    },;
    {;
      title:"Talent Directory",;
      description:"Browse verified tech specialists",;
      icon:<Users className="h-6 w-6 text-zion-purple" />,;
      link:"/talent";
    },;
    {;
      title:"Service Marketplace",;
      description:"Discover professional services",;
      icon:<Briefcase className="h-6 w-6 text-zion-cyan" />,;
      link:"/services";
    },;
    {;
      title:"Equipment Catalog",;
      description:"Find specialized hardware",;
      icon:<Settings className="h-6 w-6 text-zion-purple" />,;
      link:"/equipment";
    },;
    {;
      title:"Community",;
      description:"Connect with tech professionals",;
      icon:<MessageSquare className="h-6 w-6 text-zion-cyan" />,;
      link:"/community";
    },;
    {;
      title:"Mobile App",;
      description:"Zion on the go",;
      icon:<Smartphone className="h-6 w-6 text-zion-purple" />,;
      link:"/mobile-launch";
    }
  ],;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/home/QuickAccess.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <section className="py-12 bg-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-8">;
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">;
            Quick Access;
          </h2>;
          <p className="text-zion-slate-light text-lg">;
            Jump directly to our most popular features;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">;
          {quickLinks && quickLinks.map((link, index) => (;
            <Link
              key={index} 
              to={link && link.link} 
              className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-4 transition-all duration-300 flex flex-col items-center text-center">;
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3">;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">;
          {quickLinks.map((link, index) => (;
            <Link;
              key={index} ;
              to={link.link} ;
              className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-4 transition-all duration-300 flex flex-col items-center text-center";
            >;
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {link.icon}
              </div>
              <h3 className="text-white font-medium mb-1">{link.title}</h3>
              <p className="text-zion-slate-light text-xs mb-2">{link.description}</p>
              <div className="flex items-center text-zion-cyan text-xs mt-auto">
                <span>Access</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </Link>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          ))}
        </div>;
      </div>;
    </section>;
  );
}
    <section className="py - 12 bg - zion - blue - dark">;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 8">;
          <h2 className="text - 2xl font - bold bg - gradient - to - r from - zion - cyan via - zion - purple - light to - zion - purple bg - clip - text text - transparent mb - 2">;
            Quick Access;
          </h2>;
          <p className="text - zion - slate - light text - lg">;
            Jump directly to our most popular features;
          </p>;
        </div>;
        <div className="grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 4 max - w-6xl mx - auto">;
          {quick_links.map ((link, index) => (
            <Link;
              key={index}
              to={link.link}
              className="bg - zion - blue border border - zion - blue - light hover:border - zion - purple / 50 rounded - lg p - 4 transition - all duration - 300 flex flex - col items - center text - center";
            >;
              <div className="bg - zion - blue - dark rounded - full w - 12 h - 12 flex items - center justify - center mb - 3">;
                {link.icon}
              </div>;
              <h3 className="text - white font - medium mb - 1">{link.title}</h3>;
              <p className="text - zion - slate - light text - xs mb - 2">{link.description}</p>;
              <div className="flex items - center text - zion - cyan text - xs mt - auto">;
                <span > Access</span>;
                <ArrowRight className="ml - 1 h - 3 w - 3" />;
              </div>;
            </Link>))}
        </div>;
      </div>;
    </section>);
}
=======
        ;
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">;
          {quickLinks.map((link, index) => (;
            <Link ;
              key={index} ;
              to={link.link} ;
              className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-4 transition-all duration-300 flex flex-col items-center text-center";
            >;
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3">;
                {link.icon}
              </div>;
              <h3 className="text-white font-medium mb-1">{link.title}</h3>;
              <p className="text-zion-slate-light text-xs mb-2">{link.description}</p>;
              <div className="flex items-center text-zion-cyan text-xs mt-auto">;
                <span>Access</span>;
                <ArrowRight className="ml-1 h-3 w-3" />;
              </div>;
            </Link>;
          ))}
        </div>;
      </div>;
    </section>;
  ),;}
 import {
  ArrowRight;
Search;
Users;
Briefcase;
Settings;
MessageSquare;
Smartphone const quickLinks = [ {
  Quick Access </h2> <p className="text-zion-slate-light text-lg" > Jump directly to our most popular features </p> </div> <span>Access</span> <ArrowRight className="ml-1 h-3 w-3" /> </div> </Link>) ) 
}</div> </div> </section>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          ))}
        </div>
      </div>
    </section>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
