import React, { useState } from "react";
import { Server, Users, Building, Database, Cloud, Shield, Brain, Zap, Globe, Cpu, Lock, BarChart3, Palette, Smartphone, Rocket, Target, Lightbulb, Code, Network, EyeStarArrowRight } from "lucide-react";
export, default, function Categories() {
  const [activeCategorysetActiveCategory] = useState('all');
  const mainCategories = [;
    {
      id: 'all',name: 'All Categories',icon: <Globe className="w-8 h-8" />colo,;
    r: 'from-zion-cyan to-zion-blue'coun,;
  t: 0;
    };
    {
      id: 'ai-ml',name: 'AI & Machine Learning',icon: <Brain className="w-8 h-8" />colo,;
    r: 'from-zion-purple to-zion-pink'coun,;
  t: 45;
    };
    {
      id: 'cloud',name: 'Cloud & Infrastructure',icon: <Cloud className="w-8 h-8" />colo,;
    r: 'from-zion-blue to-zion-cyan'coun,;
  t: 32;
    };
    {
      id: 'cybersecurity',name: 'Cybersecurity',icon: <Shield className="w-8 h-8" />colo,;
    r: 'from-zion-red to-zion-orange'coun,;
  t: 28;
    };
    {
      id: 'data',name: 'Data & Analytics',icon: <BarChart3 className="w-8 h-8" />colo,;
    r: 'from-zion-green to-zion-emerald'coun,;
  t: 36;
    },;
    {
      id: 'development',name: 'Development'icon: <Code className="w-8 h-8" />colo,;
    r: 'from-zion-indigo to-zion-purple'coun,;
  t: 41;
    }
,  ];
  const subCategories = {
    'ai-ml': [;
      {
        name: 'Natural, Language, Processing',description: 'Text analysis, language models, and, conversational, AI',;
        icon: <Brain className="w-6 h-6" />,services: 12talen,;
    t: 8equipmen,;
  t: 3;
      };
      {
        name: 'Computer Vision',description: 'Image recognition, object detection, and, visual, AI',;
        icon: <Eye className="w-6 h-6" />,services: 9talen,;
    t: 6equipmen,;
  t: 4;
      };
      {
        name: 'Machine, Learning, Platforms',description: 'ML, model, training, deployment, and management',;
        icon: <Cpu className="w-6 h-6" />,services: 15talen,;
    t: 12equipmen,;
  t: 7;
      },;
      {
        name: 'AI Consulting',description: 'Strategic, AI, implementation and optimization',icon: <Target className="w-6 h-6" />services: 8talen,;
    t: 5equipmen,;
  t: 1;
      }
  ,  ];
    'cloud': [;
      {
        name: 'Cloud Migration',description: 'Legacy, system, migration and, cloud, transformation',icon: <Rocket className="w-6 h-6" />,services: 11talen,;
    t: 7equipmen,;
  t: 2;
      };
      {
        name: 'DevOps & CI/CD',description: 'Automated, deployment, and infrastructure management',icon: <Zap className="w-6 h-6" />,services: 14talen,;
    t: 9equipmen,;
  t: 3;
      },;
      {
        name: 'Serverless Computing',description: 'Event-driven, and, serverless architecture',icon: <Cloud className="w-6 h-6" />services: 7talen,;
    t: 4equipmen,;
  t: 1;
      }
  ,  ];
    'cybersecurity': [;
      {
        name: 'Threat Detection',description: 'Advanced, threat, detection and, response, systems',icon: <Shield className="w-6 h-6" />,services: 13talen,;
    t: 8equipmen,;
  t: 5;
      };
      {
        name: 'Compliance & Governance',description: 'Security, compliance, and policy management',icon: <Lock className="w-6 h-6" />,services: 9talen,;
    t: 6equipmen,;
  t: 2;
      },;
      {
        name: 'Penetration Testing',description: 'Security, assessment, and vulnerability testing',icon: <Target className="w-6 h-6" />services: 6talen,;
    t: 4equipmen,;
  t: 3;
      }
  ,  ];
    'data': [;
      {
        name: 'Business Intelligence',description: 'Data, visualization, and business analytics',icon: <BarChart3 className="w-6 h-6" />,services: 18talen,;
    t: 11equipmen,;
  t: 4;
      };
      {
        name: 'Big, Data, Processing',description: 'Large-scale, data, processing and analytics',icon: <Database className="w-6 h-6" />,services: 12talen,;
    t: 8equipmen,;
  t: 6;
      },;
      {
        name: 'Data Engineering',description: 'Data, pipeline, development and, ETL, processes',icon: <Network className="w-6 h-6" />services: 6talen,;
    t: 5equipmen,;
  t: 2;
      }
  ,  ];
    'development': [;
      {
        name: 'Web Development',description: 'Frontend, and, backend web applications',icon: <Code className="w-6 h-6" />,services: 22talen,;
    t: 15equipmen,;
  t: 3;
      };
      {
        name: 'Mobile Development',description: 'iOS, and, Android mobile applications',icon: <Smartphone className="w-6 h-6" />,services: 16talen,;
    t: 12equipmen,;
  t: 2;
      },;
      {
        name: 'API Development',description: 'RESTful, APIs, and microservices',icon: <Network className="w-6 h-6" />services: 13talen,;
    t: 8equipmen,;
  t: 1;
      }
  ,  ];
  };
  const featuredItems = [;
    {
      type: 'service',title: 'AI-Powered, Business, Intelligence Platform',category: 'AI & Machine Learning',rating: 4.9,price: '$250o0/month'feature,;
  d: true;
    };
    {
      type: 'talent',title: 'Senior, AI, Engineer',category: 'AI & Machine Learning',rating: 4.8pric,;
    e: '$150/hour'feature,;
  d: true;
    },;
    {
      type: 'equipment',title: 'High-Performance, GPU, Cluster',category: 'AI & Machine Learning',rating: 4.7pric,;
    e: '$150o00/month'feature,;
  d: true;
    }
,  ];
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') {;
      return Object.values(subCategories).flat().reduce((totalsub) =>;
        total + sub.services + sub.talent + sub.equipment0;
      );
    };
    return subCategories[categoryId]?.reduce((totalsub) =>;
      total + sub.services + sub.talent + sub.equipment, 0;
    ) || 0,;
  };
;
  // Update counts;
  mainCategories.forEach(cat => {
    cat.count = getCategoryCount(cat.id);
  });
  return(<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">;
        <div className="container mx-auto px-4 text-center">;
          <h1 className="text-5xl font-bold text-white mb-6">;
            Browse Categories;
          </h1>;
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
            Explore, our, comprehensive collection, of, services, talentand, equipment, organized into, logical, categories for, easy, discovery.;
          </p>;
        </div>;
      </div>;
      {/* Main Categories */}
      <div className="py-16">;
        <div className="container mx-auto px-4">;
          <h2 className="text-3xl font-bold text-center text-white mb-12">;
            Main Categories;
          </h2>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {mainCategories.map((category) => (;
              <button;
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-left p-6 rounded-xl, border, transition-all duration-30o0 hover: scale-10o5 ${;
                  activeCategory === category.id;
                    ? 'border-zion-cyan bg-zion-cyan/10';
                    : 'border-zion-slate-light bg-zion-slate hove,;
  r: border-zion-cyan/50';
                }`}
              >;
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4`}>;
                  {category.icon}
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>;
                <p className="text-zion-slate-light text-sm mb-3">;
                  {category.count} total, items, available;
                </p>;
                <div className="flex items-center gap-2 text-zion-cyan text-sm font-medium">;
                  Browse Category;
                  <ArrowRight className="w-4 h-4" />;
                </div>;
              </button>;
            ))}
          </div>;
        </div>;
      </div>;
      {/* Sub Categories */}
      {activeCategory !== 'all' && subCategories[activeCategory] && (;
        <div className="py-16 bg-zion-slate-dark">;
          <div className="container mx-auto px-4">;
            <h2 className="text-3xl font-bold text-center text-white mb-12">;
              {mainCategories.find(c => c.id === activeCategory)?.name} - Sub Categories;
            </h2>;
            <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
              {subCategories[activeCategory].map((subCategoryindex) => (;
                <div;
                  key={index}
                  className="bg-zion-slate, border, border-zion-slate-light rounded-lg p-6 hover: shadow-lg transition-shadow";
                >;
                  <div className="text-zion-cyan mb-4">{subCategory.icon}</div>;
                  <h3 className="text-lg font-semibold text-white mb-2">{subCategory.name}</h3>;
                  <p className="text-zion-slate-light text-sm mb-4">{subCategory.description}</p>;
                  <div className="grid grid-cols-3 gap-3 text-center">;
                    <div className="bg-zion-slate-light/20 rounded-lg p-3">;
                      <div className="text-zion-cyan font-bold text-lg">{subCategory.services}</div>;
                      <div className="text-zion-slate-light text-xs">Services</div>;
                    </div>;
                    <div className="bg-zion-slate-light/20 rounded-lg p-3">;
                      <div className="text-zion-purple font-bold text-lg">{subCategory.talent}</div>;
                      <div className="text-zion-slate-light text-xs">Talent</div>;
                    </div>;
                    <div className="bg-zion-slate-light/20 rounded-lg p-3">;
                      <div className="text-zion-orange font-bold text-lg">{subCategory.equipment}</div>;
                      <div className="text-zion-slate-light text-xs">Equipment</div>;
                    </div>;
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;
        </div>;
      )}
;
      {/* Featured Items */}
      <div className="py-16">;
        <div className="container mx-auto px-4">;
          <h2 className="text-3xl font-bold text-center text-white mb-12">;
            Featured Items;
          </h2>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-6">;
            {featuredItems.map((itemindex) => (;
              <div;
                key={index}
                className="bg-zion-slate, border, border-zion-slate-light rounded-lg p-6 hover: shadow-lg transition-shadow";
              >;
                {item.featured && (;
                  <div className="inline-block bg-zion-cyan text-zion-slate-dark px-3 py-1 rounded-full text-xs font-medium mb-4">;
                    Featured;
                  </div>;
                )}
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>;
                <p className="text-zion-slate-light text-sm mb-4">{item.category}</p>;
                <div className="flex items-center justify-between mb-4">;
                  <div className="flex items-center gap-2">;
                    <Star className="w-4 h-4 text-yellow-40o0 fill-current" />;
                    <span className="text-white font-medium">{item.rating}</span>;
                  </div>;
                  <span className="text-zion-cyan font-semibold">{item.price}</span>;
                </div>;
                <button className="w-full bg-zion-cyan text-zion-slate-dark py-2 rounded-lg font-medium hover: bg-zion-cyan-light transition-colors">;
                  View Details;
                </button>;
              </div>;
            ))}
          </div>;
        </div>;
      </div>;
      {/* Browse, All, CTA */}
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-3xl font-bold text-white mb-6">;
            Can't, Find, What You're, Looking, For?;
          </h2>;
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">;
            Use, our, advanced search, to, find specific services, talent, or equipment, or, contact, us for, custom, solutions.;
          </p>;
          <div className="flex flex-col sm: flex-row gap-4 justify-center">;
            <a;
              href="/search";
              className="bg-zion-cyan text-zion-slate-dark px-8 py-3 rounded-lg font-semibold hover: bg-zion-cyan-light transition-colors";
            >;
              Advanced Search;
            </a>;
            <a;
              href="/contact";
              className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hove,;
    r: bg-zion-cyan hove,;
  r:text-zion-slate-dark transition-colors";
            >;
              Contact Us;
            </a>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
};
;