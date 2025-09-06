<<<<<<< HEAD


<<<<<<< HEAD

=======
import React from "react";

import {Link} from "react-router-dom";
import {ArrowRight, Search, Users, Briefcase, Settings, MessageSquare, Smartphone} from "lucide-react";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


export function QuickAccess() {
  const quickLinks = [
    {
<<<<<<< HEAD

      title: "AI Matcher",
      description: "Find the perfect match for your project needs",
      icon: <Search className="h-6 w-6 text-zion-cyan" />,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export function QuickAccess() {
  const quickLinks = [
    {
      title: "AI Matcher"
      description: "Find the perfect match for your project needs"
      icon: <Search className="h-6 w-6 text-zion-cyan" />
      title: "AI Matcher",
      description: "Find the perfect match for your project needs",
      icon: <Search className="h-6 w-6 text-zion-cyan" />,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      title: "AI Matcher",
      description: "Find the perfect match for your project needs",
      icon: <Search className="h-6 w-6 text-zion-cyan" />,
      link: "/match";
    };
      link: "/match"
    }
    },
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

      title: "AI Matcher",
      description: "Find the perfect match for your project needs",
      icon: <Search className="h-6 w-6 text-zion-cyan" />,

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    {
      title: "Talent Directory"
      description: "Browse verified tech specialists"
      icon: <Users className="h-6 w-6 text-zion-purple" />
      link: "/talent"
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    {
      title: "Service Marketplace"
      description: "Discover professional services"
      icon: <Briefcase className="h-6 w-6 text-zion-cyan" />
      link: "/services"
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    {
      title: "Equipment Catalog"
      description: "Find specialized hardware"
      icon: <Settings className="h-6 w-6 text-zion-purple" />
      link: "/equipment"
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    {
      title: "Community"
      description: "Connect with tech professionals"
      icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />
      link: "/community"
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    {
      title: "Mobile App"
      description: "Zion on the go"
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />
      link: "/mobile-launch"
<<<<<<< HEAD
=======

=======
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


import React from "react",;
import { Link } from "react-router-dom",;
                {link.icon}
              </div>
              <h3 className="text-white font-medium mb-1">{link.title}</h3>
              <p className="text-zion-slate-light text-xs mb-2">{link.description}</p>
              <div className="flex items-center text-zion-cyan text-xs mt-auto">
                <span>Access</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </Link>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react",;
import { Link } from "react-router-dom",;
import {;
  ArrowRight,;
  Search,;
  Users,;
  Briefcase,;
  Settings,;
  MessageSquare,;
  Smartphone;
} from "lucide-react",;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
    }
  ];
  return (;

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">;
          {quickLinks && quickLinks.map((link, index) => (;
            <Link
              key={index} 
              to={link && link.link} 
              className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-4 transition-all duration-300 flex flex-col items-center text-center">;
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3">;

                {link.icon}
              </div>
              <h3 className="text-white font-medium mb-1">{link.title}</h3>
              <p className="text-zion-slate-light text-xs mb-2">{link.description}</p>
              <div className="flex items-center text-zion-cyan text-xs mt-auto">
                <span>Access</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </Link>


          ))}
        </div>;
      </div>;
    </section>;
  );
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======

import React from "react",;
import { Link } from "react-router-dom",;
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

=======
    }
  ];
  return (;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">;
          {quickLinks && quickLinks.map((link, index) => (;
            <Link
              key={index} 
              to={link && link.link} 
              className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-4 transition-all duration-300 flex flex-col items-center text-center">;
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3">;

=======
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">;
          {quickLinks.map((link, index) => (;
            <Link;
              key={index} ;
              to={link.link} ;
              className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-4 transition-all duration-300 flex flex-col items-center text-center";
            >;
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          ))}
        </div>;
      </div>;
    </section>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
          ))}
        </div>
      </div>
    </section>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
