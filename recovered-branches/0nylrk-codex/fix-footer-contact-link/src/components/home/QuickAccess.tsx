
import React from "react";
import {_ArrowRight, _Search, _Users, _Briefcase, _Settings, _MessageSquare, _Smartphone} from "lucide-react";

export function QuickAccess() {_const _quickLinks = [
    {
      title: "AI Matcher", _description: "Find the perfect match for your project needs", _icon: <Search className="h-6 w-6 text-zion-cyan" />, _link: "/match"},
    {_title: "Talent Directory", _description: "Browse verified tech specialists", _icon: <Users className="h-6 w-6 text-zion-purple" />, _link: "/talent"},
    {_title: "Service Marketplace", _description: "Discover professional services", _icon: <Briefcase className="h-6 w-6 text-zion-cyan" />, _link: "/services"},
    {_title: "Equipment Catalog", _description: "Find specialized hardware", _icon: <Settings className="h-6 w-6 text-zion-purple" />, _link: "/equipment"},
    {_title: "Community", _description: "Connect with tech professionals", _icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />, _link: "/community"},
    {_title: "Mobile App", _description: "Zion on the go", _icon: <Smartphone className="h-6 w-6 text-zion-purple" />, _link: "/mobile-launch"}
  ];

  return (_<section className="py-12 bg-zion-blue-dark">
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
          {_quickLinks.map((link, _index) => (
            <Link 
              key={index} 
              to={_link.link} 
              className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-4 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3">
                {_link.icon}
              </div>
              <h3 className="text-white font-medium mb-1">{_link.title}</h3>
              <p className="text-zion-slate-light text-xs mb-2">{_link.description}</p>
              <div className="flex items-center text-zion-cyan text-xs mt-auto">
                <span>Access</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
