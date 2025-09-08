import React from "react";


import React from "react",


import React from "react",
import { Link } from "react-router-dom",
import { 


  ArrowRight,
  Search, 
  Users, 
  Briefcase, 
  Settings, 
  MessageSquare, 





    {
      title: "Talent Directory"
      description: "Browse verified tech specialists"
      icon: <Users className="h-6 w-6 text-zion-purple" />
      link: "/talent"



    {
      title: "Service Marketplace"
      description: "Discover professional services"
      icon: <Briefcase className="h-6 w-6 text-zion-cyan" />
      link: "/services"



    {
      title: "Equipment Catalog"
      description: "Find specialized hardware"
      icon: <Settings className="h-6 w-6 text-zion-purple" />



    {
      title: "Community"
      description: "Connect with tech professionals"
      icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />
      link: "/community"



    {



    {
      title: "Mobile App"
      description: "Zion on the go"
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />
      link: "/mobile-launch"


      link: "/mobile - launch";
    }
  ];
;
  return (



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
      title: "AI Matcher",,
  description: "Find the perfect match for your project needs",;
      icon: <Search className="h-6 w-6 text-zion-cyan" />,;
      link: "/match";
    },;
    {;
      title: "Talent Directory",,
  description: "Browse verified tech specialists",;
      icon: <Users className="h-6 w-6 text-zion-purple" />,;
      link: "/talent";
    },;
    {;
      title: "Service Marketplace",,
  description: "Discover professional services",;
      icon: <Briefcase className="h-6 w-6 text-zion-cyan" />,;
      link: "/services";
    },;
    {;
      title: "Equipment Catalog",,
  description: "Find specialized hardware",;
      icon: <Settings className="h-6 w-6 text-zion-purple" />,;
      link: "/equipment";
    },;
    {;
      title: "Community",,
  description: "Connect with tech professionals",;
      icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />,;
      link: "/community";
    },;
    {;
      title: "Mobile App",,
  description: "Zion on the go",;
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />;
      link: "/mobile-launch";
    }
  ];
  return (;



          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">;
            Quick Access;
          </h2>;"
          <p className="text-zion-slate-light text-lg">;
            Jump directly to our most popular features;
          </p>;
        </div>;



                {link.icon}
              </div>"
              <h3 className="text-white font-medium mb-1">{link.title}</h3>"
              <p className="text-zion-slate-light text-xs mb-2">{link.description}</p>"
              <div className="flex items-center text-zion-cyan text-xs mt-auto">
                <span>Access</span>"
                <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </Link>

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

    <section className="py - 12 bg - zion - blue-dark">;
      <div className="container mx - auto px-4">;
        <div className="text - center mb-8">;
          <h2 className="text - 2xl font - bold bg - gradient - to - r from - zion - cyan via - zion - purple - light to - zion - purple bg - clip - text text - transparent mb-2">;

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
      title:"AI Matcher",,
  description:"Find the perfect match for your project needs",;
      icon:<Search className="h-6 w-6 text-zion-cyan" />,;
      link:"/match";
    },;
    {;
      title:"Talent Directory",,
  description:"Browse verified tech specialists",;
      icon:<Users className="h-6 w-6 text-zion-purple" />,;
      link:"/talent";
    },;
    {;
      title:"Service Marketplace",,
  description:"Discover professional services",;
      icon:<Briefcase className="h-6 w-6 text-zion-cyan" />,;
      link:"/services";
    },;
    {;
      title:"Equipment Catalog",,
  description:"Find specialized hardware",;
      icon:<Settings className="h-6 w-6 text-zion-purple" />,;
      link:"/equipment";
    },;
    {;
      title:"Community",,
  description:"Connect with tech professionals",;
      icon:<MessageSquare className="h-6 w-6 text-zion-cyan" />,;
      link:"/community";
    },;
    {;
      title:"Mobile App",,
  description:"Zion on the go",;
      icon:<Smartphone className="h-6 w-6 text-zion-purple" />,;
      link:"/mobile-launch";
    }
  ],;
;
  return (;
    <section className="py-12 bg-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-8">;
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">;

            Quick Access;

              </div>;
            </Link>))}
        </div>;
      </div>;
    </section>);
}



