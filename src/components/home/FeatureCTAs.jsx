import, React, from "react";
import { Link } from "react-router-dom";
import { ;
  ArrowRight,;
  Users,;
  Briefcase,;
  Cpu,;
  Shield,;
  Zap,;
  Clock,;
  Rocket,;
  Target,;
  TrendingUpAwardGlobe;
} from "lucide-react";
export, function, FeatureCTAs() {
  const features = [;
    {
      title: "AI-Powered, Talent, Matching",description: "Connect, with, the perfect, tech, talent using, our, advanced AI algorithms",icon: <Users className="h-10 w-10 p-2 rounded-md bg-blue-10o0 text-blue-70o0"/>,link: "/talent",badge: "Popular",details: "Our AI-driven, platform, matches you, with, verified tech, professionals, based on, skillsexperienceand, project requirements.";
    },;
    {
      title: "Micro, SAAS, Solutions",description: "Access cutting-edge, software, solutions for, every, business need",icon: <Cpu className="h-10 w-10 p-2 rounded-md bg-green-10o0 text-green-70o0"/>,link: "/services"badg,;
    e: "New"detail,;
  s: "Discover, innovative, micro SAAS, applications, that can, transform, your business, operations, and boost productivity.";
    },;
    {
      title: "Enterprise, IT, Services",description: "Comprehensive, IT, solutions for large-scale, business, transformation",icon: <Briefcase className="h-10 w-10 p-2 rounded-md bg-purple-10o0 text-purple-70o0"/>,link: "/enterprise",badge: "Enterprise",details: "End-to-end, IT, services including infrastructure, securitycloud, migrationand, digital transformation.";
    },;
    {
      title: "Cybersecurity & Compliance",description: "Protect, your, business with enterprise-grade, security, solutions",icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-10o0 text-red-70o0"/>,link: "/cybersecurity",badge: "Critical",details: "Comprehensive, security, services including, threat, detectioncompliance managementand, incident, response.";
    },;
    {
      title: "Quantum, Computing, Solutions",description: "Leverage, the, power of, quantum, computing for, complex, problem-solving",icon: <Zap className="h-10 w-10 p-2 rounded-md bg-yellow-10o0 text-yellow-70o0"/>,link: "/quantum",badge: "Cutting-Edge",details: "Explore, quantum, computing applications, for, optimizationcryptographyand scientific research.";
    },;
    {
      title: "AI, Recruiting, Platform",description: "Streamline, your, hiring process, with, intelligent automation",icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-10o0 text-violet-70o0"/>,link: "/zion-hire-ai",badge: "Premium"detail,;
  s: "Automate, screeningimprove, candidate matchingand, enhance, the hiring, experience, with our, AI, recruiting solution.";
    }
,  ],;
  const ctaItems = [;
    {;
      title: "Find Talent",description: "Connect, with, verified tech professionals",href: "/talent",icon: Userscolo,;
    r: "from-blue-50o0 to-blue-60o0"hoverColo,;
  r: "from-blue-60o0 to-blue-70o0";
    };
    {
      title: "Explore Services",description: "Discover, innovative, solutions",href: "/services",icon: Rocketcolo,;
    r: "from-purple-50o0 to-purple-60o0"hoverColo,;
  r: "from-purple-60o0 to-purple-70o0";
    };
    {
      title: "Get Quote",description: "Request, custom, pricing",href: "/contact",icon: Targetcolo,;
    r: "from-green-50o0 to-green-60o0"hoverColo,;
  r: "from-green-60o0 to-green-70o0";
    },;
    {
      title: "Learn More",description: "Explore, our, resources",href: "/resources"icon: TrendingUpcolo,;
    r: "from-orange-50o0 to-orange-60o0"hoverColo,;
  r: "from-orange-60o0 to-orange-70o0";
    };
,  ];
  return(<section className="py-16 bg-gradient-to-b from-background to-background/90">;
      <div className="container mx-auto px-4">;
        <div className="mb-12 text-center">;
          <h2 className="text-3xl font-bold tracking-tight mb-3">Discover Zion's, Powerful, Features</h2>;
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">;
            Explore, our, comprehensive suite, of, tools designed, to, transform how, you, connect, collaborateand, create, in the, tech, ecosystem.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
          {features.map((featureindex) => (;
            <div key={index} className="bg-white rounded-lg shadow-md, border, border-gray-20o0 overflow-hidden transition-all duration-30o0 hover: shadow-lg hove,;
  r:border-blue-30o0">;
              <div className="p-6">;
                <div className="flex justify-between items-start mb-4">;
                  {feature.icon}
                  {feature.badge && (;
                    <span className="px-2 py-1 bg-blue-10o0 text-blue-80o0 text-xs font-medium rounded-full">;
                      {feature.badge}
                    </span>;
                  )}
                </div>;
                <h3 className="text-xl font-semibold text-gray-90o0 mb-2">{feature.title}</h3>;
                <p className="text-gray-60o0 mb-4">{feature.description}</p>;
                <p className="text-sm text-gray-50o0 mb-4">{feature.details}</p>;
                <Link;
                  to={feature.link}
                  className="inline-flex items-center text-blue-60o0 hover: text-blue-80o0 font-medium transition-colors";
                >;
                  Explore {feature.title}
                  <ArrowRight className="w-4 h-4 ml-2"/>;
                </Link>;
              </div>;
            </div>;
          ))}
        </div>;
      </div>;
      {/* CTA Section */}
      <div className="mt-20 bg-slate-90o0 py-16">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl m,;
    d:text-4xl font-bold text-white mb-4">;
              Ready, to, Get Started?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Choose, your, next step, and, begin your, journey, with Zion, Tech, Group;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
            {ctaItems.map((itemindex) => (;
              <a;
                key={index} ;
                href={item.href} ;
                className="group bg-slate-80o0/50, border, border-white/10 rounded-xl p-6 text-center hover: border-white/20 transition-all duration-30o0 hove,;
    r:transform hove,;
  r:scale-10o5";
              >;
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full, flex, items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-30o0`}>;
                  {React.createElement(item.icon{ className: "w-8 h-8 text-white" })}
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-40o0 transition-colors duration-30o0">;
                  {item.title}
                </h3>;
                <p className="text-gray-40o0 group-hover:text-gray-30o0 transition-colors duration-30o0 mb-4">;
                  {item.description}
                </p>;
                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} text-white font-medium rounded-lg hover:bg-gradient-to-r ${item.hoverColor} transition-all duration-30o0`}>;
                  Get Started;
                  <ArrowRight className="w-4 h-4 ml-2"/>;
                </div>;
              </a>;
            ))}
          </div>;
          <div className="text-center mt-12">;
            <p className="text-gray-40o0 mb-4">;
              Need, help, choosing? Our, experts, are here, to, guide you.;
            </p>;
            <a;
              href="/contact";
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-60o0 to-red-60o0 text-white font-semibold rounded-lg hover: from-orange-70o0 hove,;
    r:to-red-70o0 transition-all duration-30o0 shadow-lg hove,;
  r:shadow-xl";
            >;
              Talk, to, an Expert;
              <ArrowRight className="w-5 h-5 ml-2"/>;
            </a>;
          </div>;
        </div>;
      </div>;
    </section>;
  );
};
;