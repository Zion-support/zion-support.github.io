import React, { useState } from "react"
import { Server, Users, Building, Database, Cloud, Shield, Brain, Zap, Globe, Cpu, Lock, BarChart3, Palette, Smartphone, Rocket, Target, Lightbulb, Code, Network, Eye, Star, ArrowRight } from "lucide-react"
export default function Categories() {;
  const [activeCategory, setActiveCategory] = useState('all')
  const mainCategories = [;
    {;
      id: 'all',name: 'All Categories',icon: <Globe className="w-8 h-8" />,color: 'from-zion-cyan to-zion-blue',count: 0;
    };
    {;
      id: 'ai-ml',name: 'AI & Machine Learning',icon: <Brain className="w-8 h-8" />,color: 'from-zion-purple to-zion-pink',count: 45;
    };
    {;
      id: 'cloud',name: 'Cloud & Infrastructure',icon: <Cloud className="w-8 h-8" />,color: 'from-zion-blue to-zion-cyan',count: 32;
    };
    {;
      id: 'cybersecurity',name: 'Cybersecurity',icon: <Shield className="w-8 h-8" />,color: 'from-zion-red to-zion-orange',count: 28;
    };
    {;
      id: 'data',name: 'Data & Analytics',icon: <BarChart3 className="w-8 h-8" />,color: 'from-zion-green to-zion-emerald',count: 36;
    };
    {;
      id: 'development',name: 'Development',icon: <Code className="w-8 h-8" />,color: 'from-zion-indigo to-zion-purple',count: 41;
    };
  ];
  const subCategories = {;
    'ai-ml': [;
      {;
        name: 'Natural Language Processing',description: 'Text analysis, language models, and conversational AI',;
        icon: <Brain className="w-6 h-6" />,services: 12,talent: 8,equipment: 3;
      };
      {;
        name: 'Computer Vision',description: 'Image recognition, object detection, and visual AI',;
        icon: <Eye className="w-6 h-6" />,services: 9,talent: 6,equipment: 4;
      };
      {;
        name: 'Machine Learning Platforms',description: 'ML model training, deployment, and management',;
        icon: <Cpu className="w-6 h-6" />,services: 15,talent: 12,equipment: 7;
      };
      {;
        name: 'AI Consulting',description: 'Strategic AI implementation and optimization',icon: <Target className="w-6 h-6" />,services: 8,talent: 5,equipment: 1;
      };
    ];
    'cloud': [;
      {;
        name: 'Cloud Migration',description: 'Legacy system migration and cloud transformation',icon: <Rocket className="w-6 h-6" />,services: 11,talent: 7,equipment: 2;
      };
      {;
        name: 'DevOps & CI/CD',description: 'Automated deployment and infrastructure management',icon: <Zap className="w-6 h-6" />,services: 14,talent: 9,equipment: 3;
      };
      {;
        name: 'Serverless Computing',description: 'Event-driven and serverless architecture',icon: <Cloud className="w-6 h-6" />,services: 7,talent: 4,equipment: 1;
      };
    ];
    'cybersecurity': [;
      {;
        name: 'Threat Detection',description: 'Advanced threat detection and response systems',icon: <Shield className="w-6 h-6" />,services: 13,talent: 8,equipment: 5;
      };
      {;
        name: 'Compliance & Governance',description: 'Security compliance and policy management',icon: <Lock className="w-6 h-6" />,services: 9,talent: 6,equipment: 2;
      };
      {;
        name: 'Penetration Testing',description: 'Security assessment and vulnerability testing',icon: <Target className="w-6 h-6" />,services: 6,talent: 4,equipment: 3;
      };
    ];
    'data': [;
      {;
        name: 'Business Intelligence',description: 'Data visualization and business analytics',icon: <BarChart3 className="w-6 h-6" />,services: 18,talent: 11,equipment: 4;
      };
      {;
        name: 'Big Data Processing',description: 'Large-scale data processing and analytics',icon: <Database className="w-6 h-6" />,services: 12,talent: 8,equipment: 6;
      };
      {;
        name: 'Data Engineering',description: 'Data pipeline development and ETL processes',icon: <Network className="w-6 h-6" />,services: 6,talent: 5,equipment: 2;
      };
    ];
    'development': [;
      {;
        name: 'Web Development',description: 'Frontend and backend web applications',icon: <Code className="w-6 h-6" />,services: 22,talent: 15,equipment: 3;
      };
      {;
        name: 'Mobile Development',description: 'iOS and Android mobile applications',icon: <Smartphone className="w-6 h-6" />,services: 16,talent: 12,equipment: 2;
      };
      {;
        name: 'API Development',description: 'RESTful APIs and microservices',icon: <Network className="w-6 h-6" />,services: 13,talent: 8,equipment: 1;
      };
    ];
  };
  const featuredItems = [;
    {;
      type: 'service',title: 'AI-Powered Business Intelligence Platform',category: 'AI & Machine Learning',rating: 4.9,price: '$2,500/month',;
      featured: true;
    };
    {;
      type: 'talent',title: 'Senior AI Engineer',category: 'AI & Machine Learning',rating: 4.8,price: '$150/hour',featured: true;
    };
    {;
      type: 'equipment',title: 'High-Performance GPU Cluster',category: 'AI & Machine Learning',rating: 4.7,price: '$15,000/month',;
      featured: true;
    };
  ];
  const getCategoryCount = (categoryId: string) => {;
    if (categoryId === 'all') {;
      return Object.values(subCategories).flat().reduce((total, sub) =>;
        total + sub.services + sub.talent + sub.equipment, 0;
      ),;
    };
    return subCategories[categoryId]?.reduce((total, sub) =>;
      total + sub.services + sub.talent + sub.equipment, 0;
    ) || 0,
  },;

  //[^;]*
  mainCategories.forEach(cat => {;
    cat.count = getCategoryCount(cat.id),;
  });
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Hero Section */};
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">;
        <div className="container mx-auto px-4 text-center">;
          <h1 className="text-5xl font-bold text-white mb-6">;
            Browse Categories;
          </[^>]*>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
            Explore our comprehensive collection of services, talent, and equipment organized into logical categories for easy discovery.;
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Main Categories */};
      <div className="py-16">;
        <div className="container mx-auto px-4">;
          <h2 className="text-3xl font-bold text-center text-white mb-12">;
            Main Categories;
          </[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {mainCategories.map((category) => (;
              <button;
                key={category.id};
                onClick={() => setActiveCategory(category.id)};
                className={`text-left p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${;
                  activeCategory === category.id
                    ? 'border-zion-cyan bg-zion-cyan/10'
                    : 'border-zion-slate-light bg-zion-slate hover:border-zion-cyan/50'
                }`};
              >;
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4`}>;
                  {category.icon};
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</[^>]*>
                <p className="text-zion-slate-light text-sm mb-3">;
                  {category.count} total items available;
                </[^>]*>
                <div className="flex items-center gap-2 text-zion-cyan text-sm font-medium">;
                  Browse Category;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Sub Categories */};
      {activeCategory !== 'all' && subCategories[activeCategory] && (;&& subCategories[activeCategory] && (; subCategories[activeCategory] && (
        <div className="py-16 bg-zion-slate-dark">;
          <div className="container mx-auto px-4">;
            <h2 className="text-3xl font-bold text-center text-white mb-12">;
              {mainCategories.find(c => c.id === activeCategory)?.name} - Sub Categories;
            </[^>]*>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
              {subCategories[activeCategory].map((subCategory, index) => (;
                <div;
                  key={index};
                  className="[^"]*"
                >;
                  <div className="text-zion-cyan mb-4">{subCategory.icon}</[^>]*>
                  <h3 className="text-lg font-semibold text-white mb-2">{subCategory.name}</[^>]*>
                  <p className="text-zion-slate-light text-sm mb-4">{subCategory.description}</[^>]*>

                  <div className="grid grid-cols-3 gap-3 text-center">;
                    <div className="bg-zion-slate-light/20 rounded-lg p-3">;
                      <div className="text-zion-cyan font-bold text-lg">{subCategory.services}</[^>]*>
                      <div className="text-zion-slate-light text-xs">Services</[^>]*>
                    </[^>]*>
                    <div className="bg-zion-slate-light/20 rounded-lg p-3">;
                      <div className="text-zion-purple font-bold text-lg">{subCategory.talent}</[^>]*>
                      <div className="text-zion-slate-light text-xs">Talent</[^>]*>
                    </[^>]*>
                    <div className="bg-zion-slate-light/20 rounded-lg p-3">;
                      <div className="text-zion-orange font-bold text-lg">{subCategory.equipment}</[^>]*>
                      <div className="text-zion-slate-light text-xs">Equipment</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>
      )};

      {/* Featured Items */};
      <div className="py-16">;
        <div className="container mx-auto px-4">;
          <h2 className="text-3xl font-bold text-center text-white mb-12">;
            Featured Items;
          </[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
            {featuredItems.map((item, index) => (;
              <div;
                key={index};
                className="[^"]*"
              >;
                {item.featured && (;&& (; (
                  <div className="inline-block bg-zion-cyan text-zion-slate-dark px-3 py-1 rounded-full text-xs font-medium mb-4">;
                    Featured;
                  </[^>]*>
                )};
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</[^>]*>
                <p className="text-zion-slate-light text-sm mb-4">{item.category}</[^>]*>

                <div className="flex items-center justify-between mb-4">;
                  <div className="flex items-center gap-2">;
                    <[^>]*/>
                    <span className="text-white font-medium">{item.rating}</[^>]*>
                  </[^>]*>
                  <span className="text-zion-cyan font-semibold">{item.price}</[^>]*>
                </[^>]*>

                <button className="w-full bg-zion-cyan text-zion-slate-dark py-2 rounded-lg font-medium hover:bg-zion-cyan-light transition-colors">;
                  View Details;
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Browse All CTA */};
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-3xl font-bold text-white mb-6">;
            Can't Find What You're Looking For?;
          </[^>]*>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">;
            Use our advanced search to find specific services, talent, or equipment, or contact us for custom solutions.;
          </[^>]*>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">;
            <a;
              href="/search"
              className="[^"]*"
            >;
              Advanced Search;
            </[^>]*>
            <a;
              href="/contact"
              className="[^"]*"
            >;
              Contact Us;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};