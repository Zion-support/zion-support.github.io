import React, { useState } from "react"
import { Server, Users, Building, Database, Cloud, Shield, Brain, Zap, Globe, Cpu, Lock, BarChart3, Palette, Smartphone, Rocket, Target, Lightbulb, Code, Network, Eye, Star, ArrowRight } from "lucide-react"
export default function Categories() {
  const [activeCategory, setActiveCategory] = useState('all')
  const mainCategories = [
    {
      id: 'all',na,
  m: e: 'All Categories',ic,
  o: n: <Globe className="w-8 h-8" />,col,
  o: r: 'from-zion-cyan to-zion-blue',cou,
  n: t: 0
    }, {
      id: 'ai-ml',na,
  m: e: 'AI & Machine Learning',ic,
  o: n: <Brain className="w-8 h-8" />,col,
  o: r: 'from-zion-purple to-zion-pink',cou,
  n: t: 45
    }, {
      id: 'cloud',na,
  m: e: 'Cloud & Infrastructure',ic,
  o: n: <Cloud className="w-8 h-8" />,col,
  o: r: 'from-zion-blue to-zion-cyan',cou,
  n: t: 32
    }, {
      id: 'cybersecurity',na,
  m: e: 'Cybersecurity',ic,
  o: n: <Shield className="w-8 h-8" />,col,
  o: r: 'from-zion-red to-zion-orange',cou,
  n: t: 28
    }, {
      id: 'data',na,
  m: e: 'Data & Analytics',ic,
  o: n: <BarChart3 className="w-8 h-8" />,col,
  o: r: 'from-zion-green to-zion-emerald',cou,
  n: t: 36
    }, {
      id: 'development',na,
  m: e: 'Development',ic,
  o: n: <Code className="w-8 h-8" />,col,
  o: r: 'from-zion-indigo to-zion-purple',cou,
  n: t: 41
    }
  ]
  const const subCategories = { = {
    'ai-ml': [
      {
        na,
  m: e: 'Natural Language Processing',descripti,
  o: n: 'Text analysis, language models, and conversational AI'
        ic,
  o: n: <Brain className="w-6 h-6" />,servic,
  e: s: 12,tale,
  n: t: 8,equipme,
  n: t: 3
      }, {
        na,
  m: e: 'Computer Vision',descripti,
  o: n: 'Image recognition, object detection, and visual AI'
        ic,
  o: n: <Eye className="w-6 h-6" />,servic,
  e: s: 9,tale,
  n: t: 6,equipme,
  n: t: 4
      }, {
        na,
  m: e: 'Machine Learning Platforms',descripti,
  o: n: 'ML model training, deployment, and management'
        ic,
  o: n: <Cpu className="w-6 h-6" />,servic,
  e: s: 15,tale,
  n: t: 12,equipme,
  n: t: 7
      }, {
        na,
  m: e: 'AI Consulting',descripti,
  o: n: 'Strategic AI implementation and optimization',ic,
  o: n: <Target className="w-6 h-6" />,servic,
  e: s: 8,tale,
  n: t: 5,equipme,
  n: t: 1
      }
    ]
    'cloud': [
      {
        na,
  m: e: 'Cloud Migration',descripti,
  o: n: 'Legacy system migration and cloud transformation',ic,
  o: n: <Rocket className="w-6 h-6" />,servic,
  e: s: 11,tale,
  n: t: 7,equipme,
  n: t: 2
      }, {
        na,
  m: e: 'DevOps & CI/CD',descripti,
  o: n: 'Automated deployment and infrastructure management',ic,
  o: n: <Zap className="w-6 h-6" />,servic,
  e: s: 14,tale,
  n: t: 9,equipme,
  n: t: 3
      }, {
        na,
  m: e: 'Serverless Computing',descripti,
  o: n: 'Event-driven and serverless architecture',ic,
  o: n: <Cloud className="w-6 h-6" />,servic,
  e: s: 7,tale,
  n: t: 4,equipme,
  n: t: 1
      }
    ]
    'cybersecurity': [
      {
        na,
  m: e: 'Threat Detection',descripti,
  o: n: 'Advanced threat detection and response systems',ic,
  o: n: <Shield className="w-6 h-6" />,servic,
  e: s: 13,tale,
  n: t: 8,equipme,
  n: t: 5
      }, {
        na,
  m: e: 'Compliance & Governance',descripti,
  o: n: 'Security compliance and policy management',ic,
  o: n: <Lock className="w-6 h-6" />,servic,
  e: s: 9,tale,
  n: t: 6,equipme,
  n: t: 2
      }, {
        na,
  m: e: 'Penetration Testing',descripti,
  o: n: 'Security assessment and vulnerability testing',ic,
  o: n: <Target className="w-6 h-6" />,servic,
  e: s: 6,tale,
  n: t: 4,equipme,
  n: t: 3
      }
    ]
    'data': [
      {
        na,
  m: e: 'Business Intelligence',descripti,
  o: n: 'Data visualization and business analytics',ic,
  o: n: <BarChart3 className="w-6 h-6" />,servic,
  e: s: 18,tale,
  n: t: 11,equipme,
  n: t: 4
      }, {
        na,
  m: e: 'Big Data Processing',descripti,
  o: n: 'Large-scale data processing and analytics',ic,
  o: n: <Database className="w-6 h-6" />,servic,
  e: s: 12,tale,
  n: t: 8,equipme,
  n: t: 6
      }, {
        na,
  m: e: 'Data Engineering',descripti,
  o: n: 'Data pipeline development and ETL processes',ic,
  o: n: <Network className="w-6 h-6" />,servic,
  e: s: 6,tale,
  n: t: 5,equipme,
  n: t: 2
      }
    ]
    'development': [
      {
        na,
  m: e: 'Web Development',descripti,
  o: n: 'Frontend and backend web applications',ic,
  o: n: <Code className="w-6 h-6" />,servic,
  e: s: 22,tale,
  n: t: 15,equipme,
  n: t: 3
      }, {
        na,
  m: e: 'Mobile Development',descripti,
  o: n: 'iOS and Android mobile applications',ic,
  o: n: <Smartphone className="w-6 h-6" />,servic,
  e: s: 16,tale,
  n: t: 12,equipme,
  n: t: 2
      }, {
        na,
  m: e: 'API Development',descripti,
  o: n: 'RESTful APIs and microservices',ic,
  o: n: <Network className="w-6 h-6" />,servic,
  e: s: 13,tale,
  n: t: 8,equipme,
  n: t: 1
      }
    ]
  }
  const featuredItems = [
    {
      ty,
  p: e: 'service',tit,
  l: e: 'AI-Powered Business Intelligence Platform',catego,
  r: y: 'AI & Machine Learning',rati,
  n: g: 4.9,pri,
  c: e: '$2,500/month'
      featur,
  e: d: true
    }, {
      ty,
  p: e: 'talent',tit,
  l: e: 'Senior AI Engineer',catego,
  r: y: 'AI & Machine Learning',rati,
  n: g: 4.8,pri,
  c: e: '$150/hour',featur,
  e: d: true
    }, {
      ty,
  p: e: 'equipment',tit,
  l: e: 'High-Performance GPU Cluster',catego,
  r: y: 'AI & Machine Learning',rati,
  n: g: 4.7,pri,
  c: e: '$15,000/month'
      featur,
  e: d: true
    }
  ]
  const getCategoryCount = (category,
  I: d: string) () => {
    if (if (categoryId === 'all') {) {
      return Object.values(subCategories).flat().reduce((total, sub) =>
        total + sub.services + sub.talent + sub.equipment, 0
      )
    }
    return subCategories[categoryId]?.reduce((total, sub) =>
      total + sub.services + sub.talent + sub.equipment, 0
    ) || 0
  }

  // Update counts
  mainCategories.forEach(cat () () => {
    cat.count = getCategoryCount(cat.id)
  })
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Browse Categories
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Explore our comprehensive collection of services, talent, and equipment organized into logical categories for easy discovery.
          </p>
        </div>
      </div>

      {/* Main Categories */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Main Categories
          </h2>
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
            {mainCategories.map((category) => (
              <button
                key={category.id}
                onClick={onClick={() => setActiveCategory(category.id)}
                className={`text-left p-6 rounded-xl border transition-all duration-300,
  hove: r: scale-105 ${
                  activeCategory === category.id
                    ? 'border-zion-cyan bg-zion-cyan/10'
                    : 'border-zion-slate-light bg-zion-slate hove,
  r:border-zion-cyan/50'
                }`}
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-zion-slate-light text-sm mb-3">
                  {category.count} total items available
                </p>
                <div className="flex items-center gap-2 text-zion-cyan text-sm font-medium">
                  Browse Category
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sub Categories */}, {activeCategory !== 'all' && subCategories[activeCategory] && (
        <div className="py-16 bg-zion-slate-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              {mainCategories.find(c => c.id === activeCategory)?.name} - Sub Categories
            </h2>
            <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
              {subCategories[activeCategory].map((subCategory, index) => (
                <div
                  key={index}
                  className="className="bg-zion-slate border border-zion-slate-light rounded-lg p-6,
  hove: r:shadow-lg transition-shadow";"
                >
                  <div className="text-zion-cyan mb-4">{subCategory.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{subCategory.name}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{subCategory.description}</p>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-zion-slate-light/20 rounded-lg p-3">
                      <div className="text-zion-cyan font-bold text-lg">{subCategory.services}</div>
                      <div className="text-zion-slate-light text-xs">Services</div>
                    </div>
                    <div className="bg-zion-slate-light/20 rounded-lg p-3">
                      <div className="text-zion-purple font-bold text-lg">{subCategory.talent}</div>
                      <div className="text-zion-slate-light text-xs">Talent</div>
                    </div>
                    <div className="bg-zion-slate-light/20 rounded-lg p-3">
                      <div className="text-zion-orange font-bold text-lg">{subCategory.equipment}</div>
                      <div className="text-zion-slate-light text-xs">Equipment</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}, {/* Featured Items */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Featured Items
          </h2>
          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-6">
            {featuredItems.map((item, index) => (
              <div
                key={index}
                className="className="bg-zion-slate border border-zion-slate-light rounded-lg p-6,
  hove: r:shadow-lg transition-shadow";"
              >
                {item.featured && (
                  <div className="inline-block bg-zion-cyan text-zion-slate-dark px-3 py-1 rounded-full text-xs font-medium mb-4">
                    Featured
                  </div>
                )}
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{item.category}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{item.rating}</span>
                  </div>
                  <span className="text-zion-cyan font-semibold">{item.price}</span>
                </div>

                <button className="w-full bg-zion-cyan text-zion-slate-dark py-2 rounded-lg font-medium,
  hove: r:bg-zion-cyan-light transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Browse All CTA */}
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Use our advanced search to find specific services, talent, or equipment, or contact us for custom solutions.
          </p>
          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
            <a
              href="/search"
              className="className="bg-zion-cyan text-zion-slate-dark px-8 py-3 rounded-lg font-semibold,
  hove: r:bg-zion-cyan-light transition-colors";"
            >
              Advanced Search
            </a>
            <a
              href="/contact"
              className="className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold,
  hove: r:bg-zion-cyan hove,
  r:text-zion-slate-dark transition-colors";"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}