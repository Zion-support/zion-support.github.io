  Video,
  Download,
  ExternalLink,
  ChevronDown,

const helpCategories = [;
  {}
    title: "Getting Started","
    icon: BookOpen,
    articles: [;
      {}
        title: "Welcome to Zion Tech Group","
        description: "Learn the basics of our platform and services","
        type: "Guide","
        readTime: "5 min"";
      },
      {}
        title: "Setting Up Your Account","
        description: "Step-by-step guide to create and configure your account","
        type: "Tutorial","
        readTime: "10 min"";
      },
      {}
        title: "First Steps with AI Services","
        description: "How to get started with our AI solutions","
        type: "Tutorial","
        readTime: "15 min"";
  ChevronRight,
  ArrowRight
} from 'lucide-react';
const helpCategories = [
  {
    name: 'Getting Started',
    icon: BookOpen,
    description: 'Learn the basics and get up and running quickly',
    articles: [
      {
        title: 'Welcome to Zion Tech Group',
        description: 'Introduction to our platform and services',
        type: 'Guide',
        readTime: '5 min',
        difficulty: 'Beginner'
      },
      {
        title: 'Setting Up Your Account',
        description: 'Complete guide to account setup and configuration',
        type: 'Tutorial',
        readTime: '10 min',
        difficulty: 'Beginner'
      },
      {
        title: 'First Steps with Our Services',
        description: 'Quick start guide for new users',
        type: 'Guide',
        readTime: '8 min',
        difficulty: 'Beginner'
      }
    ];
  },
      }
    ];
  },
      }
    ];
  },
  {}
    title: "Billing & Account","
    icon: FileText,
    articles: [;
      {}
        title: "Understanding Your Bill","
        description: "Learn how to read and understand your billing statement","
        type: "Guide","
        readTime: "5 min"";
      },
      {}
        title: "Payment Methods","
        description: "How to add and manage payment methods","
        type: "Tutorial","
        readTime: "8 min"";
      },
      }
    ];
  }
  {
    title: 'Getting Started with AI Services',
    views: 1250,
    rating: 4.8,
    category: 'AI Services'
  },
  {
    title: 'Cloud Migration Checklist',
    views: 980,
    rating: 4.9,
    category: 'Cloud Services'
  },
  {
    title: 'API Authentication Guide',
    views: 850,
    rating: 4.7,
    category: 'API Documentation'
  },
  {

const supportChannels = [
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    availability: '24/7',
    responseTime: '2-5 minutes',
    color: 'blue'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    availability: 'Mon-Fri 9AM-6PM EST',
    responseTime: 'Immediate',
    color: 'green'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us detailed questions and get comprehensive answers',
    availability: '24/7',
    responseTime: '2-4 hours',
    color: 'purple'
  },
  {
    icon: Users,
    title: 'Community Forum',
    description: 'Connect with other users and share knowledge',
    availability: '24/7',
    responseTime: 'Varies',
    color: 'orange'
  }
];

export default function HelpPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Help Center
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Find answers, learn best practices, and get the most out of our services. 
                Our comprehensive help center has everything you need to succeed.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search help articles, guides, and tutorials..."
                    className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find the information you need organized by topic and difficulty level.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {category.articles.slice(0, 3).map((article, articleIndex) => (
                        <div key={articleIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">{article.title}</h4>
                            <div className="flex items-center mt-1">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                article.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                                article.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {article.difficulty}
                              </span>
                              <span className="text-xs text-gray-500 ml-2">{article.readTime}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');',
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help with Zion Tech Group services. Find guides, tutorials, and support resources." />
      </Head>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Help Center
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find answers, guides, and support to help you succeed
            </p>
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 hover:shadow-lg transition-all group""
                  whileHover={{ y: -2 }}
                >,
                  <link.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:text-blue-700" />";
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">";
                    {link.title}
                  </h3>,
                </motion.a>;
              ))}
                  key={categoryIndex}
                  className="bg-white rounded-lg shadow-lg overflow-hidden""
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >,
                  <button;
                    onClick={() => toggleCategory(category.title)}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto, opacity: 1 }}',
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden""
                      >;
                        <div className="px-6 pb-6">";
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">";
                            {category.articles.map((article, articleIndex) => (,
                              <motion.div}),
                                key={articleIndex}
                                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group""
                                whileHover={{ y: -2 }}
                                    {article.readTime}
                                  </span>,
                                </div>;
                                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">";
                                  {article.title}
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      href={`/help/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center block"
                    >
                      View All Articles
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular Articles
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Most viewed and highly rated articles from our community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm text-gray-600">{article.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span>{article.views} views</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
                  key={index}
                  className="bg-gray-50 rounded-lg p-6""
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
  );
}