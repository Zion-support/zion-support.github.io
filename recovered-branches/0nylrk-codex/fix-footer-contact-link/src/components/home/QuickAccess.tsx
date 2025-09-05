
import React from "react",
import { Link } from "react-router-dom",import { 
  ArrowRight,
  Search, 
  Users, 
  Briefcase, 
  Settings, 
  MessageSquare, 
  Smartphone 
} from "lucide-react",import React from "react";
import {_ArrowRight, _Search, _Users, _Briefcase, _Settings, _MessageSquare, _Smartphone} from "lucide-react";

export function QuickAccess() {_const _quickLinks = [
    {
      title: &quot;AI Matcher&quot;,
      description: &quot;Find the perfect match for your project needs&quot;,
      icon: <Search className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/match&quot;
    },
    {
      title: &quot;Talent Directory&quot;,
      description: &quot;Browse verified tech specialists&quot;,
      icon: <Users className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/talent&quot;
    },
    {
      title: &quot;Service Marketplace&quot;,
      description: &quot;Discover professional services&quot;,
      icon: <Briefcase className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/services&quot;
    },
    {
      title: &quot;Equipment Catalog&quot;,
      description: &quot;Find specialized hardware&quot;,
      icon: <Settings className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/equipment&quot;
    },
    {
      title: &quot;Community&quot;,
      description: &quot;Connect with tech professionals&quot;,
      icon: <MessageSquare className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/community&quot;
    },
    {
      title: &quot;Mobile App&quot;,
      description: &quot;Zion on the go&quot;,
      icon: <Smartphone className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/mobile-launch&quot;
    }
  ],

  return (
    <section className=&quot;py-12 bg-zion-blue-dark&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2&quot;>            Quick Access
          </h2>
          <p className=&quot;text-zion-slate-light text-lg&quot;>
            Jump directly to our most popular features
          </p>
        </div>
        
        <div className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto&quot;>
          {quickLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.link} 
              className=&quot;bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-4 transition-all duration-300 flex flex-col items-center text-center&quot;
            >
              <div className=&quot;bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3&quot;>
                {link.icon}
              </div>
              <h3 className=&quot;text-white font-medium mb-1&quot;>{link.title}</h3>
              <p className=&quot;text-zion-slate-light text-xs mb-2&quot;>{link.description}</p>
              <div className=&quot;flex items-center text-zion-cyan text-xs mt-auto&quot;>                <span>Access</span>
                <ArrowRight className=&quot;ml-1 h-3 w-3&quot; />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
