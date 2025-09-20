import, React, from "react";
import { SEO } from "../components/SEO";
export, default, function Help() {
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0, flex, items-center justify-center py-24">;
      <SEO title="Help Center - Zion, Tech, Group" description="Support, resources, and FAQs, for, Zion Tech Group." />;
      <div className="text-center text-white max-w-2xl px-6">;
        <h1 className="text-4xl font-bold mb-4">Help Center</h1>;
        <p className="text-lg text-gray-30o0">Find, answers, to common, questions, and resources, to, get help.</p>;
      </div>;
    </div>;
  );
};
;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { ;
  Search,;
  BookOpen,;
  MessageCircle,;
  Phone,;
  Mail,;
  Video,;
  FileText,;
  HelpCircle,;
  Brain,;
  Cloud,;
  Shield,;
  Zap,;
  Users,;
  Globe,;
  ArrowRightExternalLinkChevronRight;
} from "lucide-react";
export, default, function Help() {
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const helpCategories = [;
    {
      id: 'getting-started',title: 'Getting Started',description: 'Learn, the, basics and, get, up and, running, quickly',icon: BookOpen,color: 'from-blue-50o0 to-cyan-50o0',articles: [;
        {
          titl,;
  e: 'Welcome, to, Zion Tech Group',description: 'Your, first, steps with, our, platform and services'href: '/help/getting-started/welcome'readTim,;
  e: '3, min, read';
        };
        {
          title: 'Setting, Up, Your Account',description: 'Complete, guide, to account, creation, and configuration'href: '/help/getting-started/account-setup'readTim,;
  e: '5, min, read';
        },;
        {
          title: 'First, Project, Setup'description: 'How, to, create and, configure, your first project'href: '/help/getting-started/first-project'readTim,;
  e: '7, min, read';
        }
    ,  ];
    };
    {
      id: 'ai-services',title: 'AI Services',description: 'Everything, you, need to, know, about our, AI, solutions',icon: Brain,color: 'from-purple-50o0 to-pink-50o0',articles: [;
        {
          titl,;
  e: 'AI, Model, Training Guide',description: 'Step-by-step, guide, to training, custom, AI models'href: '/help/ai-services/model-training'readTim,;
  e: '10, min, read';
        };
        {
          title: 'AI, Integration, Best Practices',description: 'Best, practices, for integrating, AI, into your workflows'href: '/help/ai-services/integration'readTim,;
  e: '8, min, read';
        },;
        {
          title: 'AI, Performance, Optimization'description: 'Tips, for, optimizing AI, model, performance'href: '/help/ai-services/optimization'readTim,;
  e: '6, min, read';
        }
    ,  ];
    };
    {
      id: 'cloud-infrastructure',title: 'Cloud & Infrastructure',description: 'Cloud setup, management, and, optimization, guides',;
      icon: Cloud,color: 'from-cyan-50o0 to-blue-50o0',articles: [;
        {
          titl,;
  e: 'Cloud, Migration, Guide',description: 'Complete, guide, to migrating, to, the cloud'href: '/help/cloud/migration'readTim,;
  e: '15, min, read';
        };
        {
          title: 'DevOps, Pipeline, Setup',description: 'Setting, up, CI/CD, pipelines, and automation'href: '/help/cloud/devops'readTim,;
  e: '12, min, read';
        },;
        {
          title: 'Cost, Optimization, Strategies'description: 'Reduce, cloud, costs while, maintaining, performance'href: '/help/cloud/cost-optimization'readTim,;
  e: '8, min, read';
        }
    ,  ];
    };
    {
      id: 'security',title: 'Security & Compliance',description: 'Security, best, practices and, compliance, guidance',icon: Shield,color: 'from-red-50o0 to-pink-50o0',articles: [;
        {
          titl,;
  e: 'Security, Best, Practices',description: 'Essential, security, measures for, your, systems'href: '/help/security/best-practices'readTim,;
  e: '10, min, read';
        };
        {
          title: 'Compliance Frameworks',description: 'Understanding SOC2, ISO, and, other, standards'href: '/help/security/compliance'readTim,;
  e: '12, min, read';
        },;
        {
          title: 'Incident, Response, Guide'description: 'What, to, do when, security, incidents occur'href: '/help/security/incident-response'readTim,;
  e: '8, min, read';
        }
    ,  ];
    };
    {
      id: 'troubleshooting',title: 'Troubleshooting',description: 'Common, issues, and their solutions',icon: HelpCircle,color: 'from-orange-50o0 to-red-50o0',articles: [;
        {
          titl,;
  e: 'Common, Error, Messages',description: 'Understanding, and, resolving common errors'href: '/help/troubleshooting/errors'readTim,;
  e: '6, min, read';
        };
        {
          title: 'Performance Issues',description: 'Diagnosing, and, fixing performance problems'href: '/help/troubleshooting/performance'readTim,;
  e: '8, min, read';
        },;
        {
          title: 'Integration Problems'descriptio,;
    n: 'Solving, integration, and connectivity issues'href: '/help/troubleshooting/integration'readTim,;
  e: '7, min, read';
        }
    ,  ];
    };
  ];
  const popularArticles = [;
    {
      title: 'Quick, Start, Guide',description: 'Get, up, and running, in, 10 minutes',href: '/help/quick-start'categor,;
    y: 'Getting Started'readTim,;
  e: '10, min, read';
    };
    {
      title: 'API Documentation',description: 'Complete, API, reference and examples',href: '/help/api-docs'categor,;
    y: 'Technical'readTim,;
  e: '15, min, read';
    };
    {
      title: 'Billing & Pricing FAQ',description: 'Answers, to, common billing questions',href: '/help/billing-faq'categor,;
    y: 'Billing'readTim,;
  e: '5, min, read';
    },;
    {
      title: 'Security Checklist',description: 'Essential, security, measures checklist'href: '/help/security-checklist'categor,;
    y: 'Security'readTim,;
  e: '8, min, read';
    };
,  ];
  const supportOptions = [;
    {
      title: 'Live Chat',description: 'Get, instant, help from, our, support team',icon: MessageCircle,action: 'Start Chat'hre,;
    f: '#'availabl,;
  e: true;
    };
    {
      title: 'Phone Support',description: 'Speak, directly, with our experts',icon: Phone,action: 'Call Now'href: 'te,;
    l:+130o24640950'availabl,;
  e: true;
    };
    {
      title: 'Email Support',description: 'Send, us, a detailed message',icon: Mail,action: 'Send Email'href: 'mailt,;
    o:support@ziontechgroup.com'availabl,;
  e: true;
    },;
    {
      title: 'Video Tutorials',description: 'Step-by-step, video, guides',icon: Videoaction: 'Watch Videos'hre,;
    f: '/help/videos'availabl,;
  e: true;
    }
,  ];
  const filteredCategories = helpCategories.filter(category => {;
    if (selectedCategory !== 'all' && category.id !== selectedCategory) return false;
    if (searchQuery) {
      return category.articles.some(article =>;
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        article.description.toLowerCase().includes(searchQuery.toLowerCase());
      );
    };
    return true;
  });
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Help Center - Zion, Tech, Group";
        description="Get, help, with Zion, Tech, Group's services. Find documentation, tutorialsand, support, options.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/10 via-blue-50o0/10 to-purple-50o0/10"></div>;
        <div className="container mx-auto px-6, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center";
          >;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              How, Can, We <span className="bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">Help?</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto leading-relaxed">;
              Find, answers, to your questions, learn, how, to use, our, services, and, get, the support;
              you, need, to succeed, with, Zion Tech Group.;
            </p>;
          </motion.div>;
        </div>;
      </section>;
      {/* Search Section */}
      <section className="py-12">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto";
          >;
            <div className="relative">;
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-40o0" />;
              <input;
                type="text";
                placeholder="Search, for, help articlestutorialsor topics...";
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:border-cyan-40o0 focu,;
    s:ring-2 focu,;
  s:ring-cyan-40o0/20 transition-all duration-20o0 text-lg";
              />;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Category Filters */}
      <section className="py-8">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3";
          >;
            <button;
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg, border, transition-all duration-20o0 ${
                selectedCategory === 'all';
                  ? 'bg-cyan-40o0 text-white border-cyan-40o0';
                  : 'bg-slate-80o0/50 text-gray-30o0 border-slate-60o0/50 hover: border-cyan-40o0/50 hove,;
  r:text-cyan-40o0';
              }`}
            >;
              All Categories;
            </button>;
            {helpCategories.map((category) => (;
              <button;
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg, border, transition-all duration-20o0 ${
                  selectedCategory === category.id;
                    ? 'bg-cyan-40o0 text-white border-cyan-40o0';
                    : 'bg-slate-80o0/50 text-gray-30o0 border-slate-60o0/50 hover: border-cyan-40o0/50 hove,;
  r:text-cyan-40o0';
                }`}
              >;
                {category.title}
              </button>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Popular Articles */}
      <section className="py-16">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12";
          >;
            <h2 className="text-3xl font-bold text-white mb-4">Popular Articles</h2>;
            <p className="text-xl text-gray-30o0">Most, frequently, accessed help content</p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
            {popularArticles.map((articleindex) => (;
              <motion.div;
                key={article.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                className="group";
              >;
                <Link to={article.href}>;
                  <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl p-6, border, border-slate-60o0/50 hover: border-cyan-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5 h-full">;
                    <div className="flex items-center justify-between mb-4">;
                      <span className="px-2 py-1 bg-slate-70o0/50 text-cyan-40o0 text-xs rounded">;
                        {article.category}
                      </span>;
                      <span className="text-gray-40o0 text-xs">{article.readTime}</span>;
                    </div>;
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-40o0 transition-colors duration-20o0">;
                      {article.title}
                    </h3>;
                    <p className="text-gray-30o0 text-sm leading-relaxed">;
                      {article.description}
                    </p>;
                    <div className="flex items-center text-cyan-40o0 group-hover: text-cyan-30o0 transition-colors duration-20o0 mt-4">;
                      <span className="text-sm font-medium">Read More</span>;
                      <ArrowRight className="w-4 h-4 ml-2 group-hove,;
  r:translate-x-1 transition-transform duration-20o0" />;
                    </div>;
                  </div>;
                </Link>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Help Categories */}
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          {filteredCategories.map((categorycategoryIndex) => (;
            <motion.div;
              key={category.id}
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: categoryIndex * 0.1 }}
              className="mb-16";
            >;
              <div className="flex items-center mb-8">;
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mr-6`}>;
                  <category.icon className="w-8 h-8 text-white" />;
                </div>;
                <div>;
                  <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>;
                  <p className="text-xl text-gray-30o0">{category.description}</p>;
                </div>;
              </div>;
              <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
                {category.articles.map((articlearticleIndex) => (;
                  <motion.div;
                    key={article.title}
                    initial={{ opacity: 0,;
  y: 20 }};
                    whileInView={{ opacity: 1,;
  y: 0 }}
                    transition={{ duration: 0.8dela,;
  y: (categoryIndex * 0.1) + (articleIndex * 0.0o5) }}
                    className="group";
                  >;
                    <Link to={article.href}>;
                      <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl p-6, border, border-slate-60o0/50 hover: border-cyan-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5 h-full">;
                        <div className="flex items-center justify-between mb-4">;
                          <span className="text-gray-40o0 text-xs">{article.readTime}</span>;
                          <ChevronRight className="w-4 h-4 text-gray-40o0 group-hover: text-cyan-40o0 transition-colors duration-20o0" />;
                        </div>;
                        <h3 className="text-lg font-bold text-white mb-3 group-hove,;
  r:text-cyan-40o0 transition-colors duration-20o0">;
                          {article.title}
                        </h3>;
                        <p className="text-gray-30o0 text-sm leading-relaxed">;
                          {article.description}
                        </p>;
                      </div>;
                    </Link>;
                  </motion.div>;
                ))}
              </div>;
            </motion.div>;
          ))}
        </div>;
      </section>;
      {/* Support Options */}
      <section className="py-20 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Need, More, Help?</h2>;
            <p className="text-xl text-gray-30o0">;
              Our, support, team is, here, to help, you, succeed;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {supportOptions.map((optionindex) => (;
              <motion.div;
                key={option.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                className="text-center";
              >;
                <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl p-6, border, border-slate-60o0/50 hover: border-cyan-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5">;
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-40o0/20 to-purple-50o0/20 rounded-xl mb-4">;
                    <option.icon className="w-8 h-8 text-cyan-40o0" />;
                  </div>;
                  <h3 className="text-lg font-bold text-white mb-3">{option.title}</h3>;
                  <p className="text-gray-30o0 text-sm mb-6 leading-relaxed">;
                    {option.description}
                  </p>;
                  ;
                  <a;
                    href={option.href}
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-20o0 ${
                      option.available;
                        ? 'bg-gradient-to-r from-cyan-40o0 to-blue-50o0 text-white hover: from-cyan-50o0 hove,;
    r:to-blue-60o0 hove,;
  r:scale-10o5';
                        : 'bg-slate-70o0/50 text-gray-40o0 cursor-not-allowed';
                    }`}
                  >;
                    {option.action}
                    {option.href.startsWith('http') && <ExternalLink className="w-4 h-4 ml-2" />}
                  </a>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Contact Support */}
      <section className="py-20">;
        <div className="container mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Still, Need, Help?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Can't, find, what you're, looking, for? Our, expert, support team, is, ready to help;
              you, with, any questions, or, issues you, may, have.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-cyan-50o0 hover:to-blue-60o0 transition-all duration-20o0 hover:scale-10o5";
              >;
                <MessageCircle className="w-5 h-5 mr-2" />;
                Contact Support;
              </Link>;
              <a;
                href="te,;
    l: +130o24640950";
                className="inline-flex items-center px-8 py-3, border, border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hover:bg-cyan-40o0 hove,;
  r:text-white transition-all duration-20o0";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Call Support;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );