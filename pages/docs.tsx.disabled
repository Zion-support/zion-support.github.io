import React, { useState } from 'react';''
import MainLayout from '../components/layout/MainLayout';''
import Link from 'next/link';''
import { motion } from 'framer-motion';'
import {
  // TODO: Implement
}
  BookOpen, 
  Search, 
  Filter,
  ArrowRight,
  ExternalLink,
  Code,
  Zap,
  Shield,
  Globe,
  Database,
  Smartphone,
  Clock,
  User,
  Star,
  Download,
  ChevronRight,
  ChevronDown,
  Key;'
} from 'lucide-react';'
const docCategories = ['
  { name: "All", count: 50, active: true },""
  { name: "Getting Started", count: 8, active: false },""
  { name: "API Reference", count: 15, active: false },""
  { name: "Guides", count: 12, active: false },""
  { name: "Tutorials", count: 10, active: false },""
  { name: "Troubleshooting", count: 5, active: false }"]
];

const documentation = [
  {
    id: 1,"
    title: "Getting Started with Zion Tech Group Services",""
    description: "Complete introduction to our services and how to get started with your first project.",""
    category: "Getting Started",""
    author: "Sarah Chen",""
    lastUpdated: "2024-01-15",""
    readTime: "10 min read",""
    difficulty: "Beginner","
    featured: true,]"
    tags: ["Introduction", "Setup", "First Steps"],"
    sections: ["
      "Account Setup",""
      "Service Overview",""
      "First Project",""
      "Basic Configuration",""
      "Next Steps""]
    ]
  },
  {
    id: 2,"
    title: "AI Services API Documentation",""
    description: "Complete API reference for our AI services including authentication, endpoints, and examples.",""
    category: "API Reference",""
    author: "Dr. Michael Rodriguez",""
    lastUpdated: "2024-01-12",""
    readTime: "25 min read",""
    difficulty: "Intermediate","
    featured: true,"
    tags: ["API", "AI", "Authentication", "Endpoints"],"
    sections: ["
      "Authentication",""
      "Endpoints Overview",""
      "Request/Response Format",""
      "Error Handling",""
      "Rate Limiting",""
      "Code Examples""]
    ]
  },
  {
    id: 3,"
    title: "IT Services Configuration Guide",""
    description: "Step-by-step guide to configuring and managing IT services for your organization.",""
    category: "Guides",""
    author: "David Kim",""
    lastUpdated: "2024-01-10",""
    readTime: "20 min read",""
    difficulty: "Intermediate","
    featured: false,"
    tags: ["IT Services", "Configuration", "Management"],"
    sections: ["
      "Service Setup",""
      "User Management",""
      "Security Configuration",""
      "Monitoring Setup",""
      "Backup Configuration""]
    ]
  },
  {
    id: 4,"
    title: "Micro SaaS Development Tutorial",""
    description: "Complete tutorial on building and deploying micro SaaS applications using our platform.",""
    category: "Tutorials",""
    author: "Emily Johnson",""
    lastUpdated: "2024-01-08",""
    readTime: "30 min read",""
    difficulty: "Advanced","
    featured: false,"
    tags: ["Micro SaaS", "Development", "Deployment"],"
    sections: ["
      "Project Setup",""
      "Database Design",""
      "API Development",""
      "Frontend Implementation",""
      "Deployment Process""]
    ]
  },
  {
    id: 5,"
    title: "Security Best Practices",""
    description: "Comprehensive guide to implementing security best practices for your applications.",""
    category: "Guides",""
    author: "John Smith",""
    lastUpdated: "2024-01-05",""
    readTime: "18 min read",""
    difficulty: "Intermediate","
    featured: false,"
    tags: ["Security", "Best Practices", "Implementation"],"
    sections: ["
      "Authentication Security",""
      "Data Encryption",""
      "Input Validation",""
      "Security Headers",""
      "Regular Audits""]
    ]
  },
  {
    id: 6,"
    title: "Troubleshooting Common Issues",""
    description: "Solutions to common problems and issues you might encounter while using our services.",""
    category: "Troubleshooting",""
    author: "Support Team",""
    lastUpdated: "2024-01-03",""
    readTime: "15 min read",""
    difficulty: "Beginner","
    featured: false,"
    tags: ["Troubleshooting", "Common Issues", "Solutions"],"
    sections: ["
      "Authentication Issues",""
      "API Errors",""
      "Performance Problems",""
      "Integration Issues",""
      "Contact Support""]
    ]
  }
];

const quickLinks = ["
  { title: "API Keys", description: "Manage your API keys and authentication", href: "/docs/api-keys", icon: Key },""
  { title: "Rate Limits", description: "Understand API rate limits and quotas", href: "/docs/rate-limits", icon: Zap },""
  { title: "SDKs", description: "Download and use our SDKs", href: "/docs/sdks", icon: Code },""
  { title: "Webhooks", description: "Set up and manage webhooks", href: "/docs/webhooks", icon: Globe },""
  { title: "Status Page", description: "Check service status and uptime", href: "/status", icon: Shield },""
  { title: "Support", description: "Get help and contact support", href: "/support", icon: User }"]
];

const featuredDocs = documentation.filter(doc => doc.featured);
const regularDocs = documentation.filter(doc => !doc.featured);

export default function DocsPage() {"
  const [selectedCategory, setSelectedCategory] = useState('All');''
  const [searchQuery, setSearchQuery] = useState('');'
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
</number>
    <MainLayout;'
      title="Documentation - Zion Tech Group"""
      description="Comprehensive documentation for Zion Tech Group services. API references, guides, tutorials, and troubleshooting resources.""
    >
</MainLayout>"
      <div className="min-h-screen bg-gray-50">"
</div>"
        <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white py-20">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center max-w-4xl mx-auto""
            >
</motion>"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">"
</h1>"
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">"
</span>
                </span>
              </h1>"
              <p className="text-xl md:text-2xl text-gray-300 mb-8">"
</p>
              </p>
            </motion.div>
          </div>
        </section>"
        <section className="py-12 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;"
              className="text-center mb-8""
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Links</h2>""
              <p className="text-gray-600">Popular documentation sections</p>"
            </motion.div>
"
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">"
</div>
                  <motion.div;
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
</motion>
                    <Link;
                      href={link.href}"
                      className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group""
                    >
</Link>"
                      <IconComponent className="w-6 h-6 text-blue-600 mb-2 group-hover:text-blue-700" />"
</IconComponent>"
                      <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700 text-center">"
</span>
                      </span>"
                      <span className="text-xs text-gray-500 text-center mt-1">"
</span>
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>"
        <section className="py-8 bg-white border-b">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="max-w-6xl mx-auto">"
</div>"
              <div className="flex flex-col lg:flex-row gap-4 mb-8">"
</div>"
                <div className="flex-1 relative">"
</div>"
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
</Search>
                  <input;"
                    type="text"""
                    placeholder="Search documentation...""
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
</input>
                </div>"
                <div className="flex gap-2 overflow-x-auto">"
</div>
                    <button;
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
</button>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </section>"
        <section className="py-16 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;"
              className="text-center mb-12""
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Documentation</h2>""
              <p className="text-lg text-gray-600">Essential guides to get you started</p>"
            </motion.div>
"
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">"
</div>
                <motion.div;
                  key={doc.id}"
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-indigo-100""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
</motion>"
                  <div className="p-8">"
</div>"
                    <div className="flex items-center justify-between mb-4">"
</div>"
                      <div className="flex items-center space-x-2">"
</div>"
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">"
</span>
                        </span>"
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">"
</span>
                        </span>
                      </div>"
                      <div className="flex items-center text-sm text-gray-500">"
</div>"
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />"
</Star>
                      </div>
                    </div>
                    "
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">"
</h3>
                    </h3>
                    "
                    <p className="text-gray-600 mb-6 leading-relaxed">"
</p>
                    </p>
                    "
                    <div className="mb-6">"
</div>
                      <button;
                        onClick={() => toggleSection(doc.id)}
</button>"
                        <h4 className="font-semibold text-gray-900">Table of Contents</h4>""
                          <ChevronDown className="w-5 h-5 text-gray-500" />"
</ChevronDown>"
                          <ChevronRight className="w-5 h-5 text-gray-500" />"
</ChevronRight>
                      </button>
                        <motion.div;
                          initial={{ opacity: 0, height: 0 }}"
                          animate={{ opacity: 1, height: 'auto' }}'
                          exit={{ opacity: 0, height: 0 }}'
                          className="mt-3""
                        >
</motion>"
                          <ul className="space-y-1">"
</ul>"
                              <li key={sectionIndex} className="flex items-center text-sm text-gray-600">"
</li>"
                                <ChevronRight className="w-3 h-3 text-gray-400 mr-2" />"
</ChevronRight>
                              </li>
                          </ul>
                        </motion.div>
                      )}
                    </div>
                    "
                    <div className="flex items-center justify-between mb-6">"
</div>"
                      <div className="flex items-center space-x-4 text-sm text-gray-500">"
</div>"
                        <div className="flex items-center">"
</div>"
                          <User className="w-4 h-4 mr-1" />"
</User>
                        </div>"
                        <div className="flex items-center">"
</div>"
                          <Clock className="w-4 h-4 mr-1" />"
</Clock>
                        </div>"
                        <div className="flex items-center">"
</div>"
                          <Download className="w-4 h-4 mr-1" />"
</Download>
                        </div>
                      </div>
                    </div>
                    "
                    <div className="flex flex-wrap gap-1 mb-6">"
</div>"
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"
</span>
                        </span>
                    </div>
                    "
                    <div className="flex items-center justify-between">"
</div>"
                      <div className="text-sm text-gray-500">"
</div>
                      </div>
                      <Link;
                        href={`/docs/${doc.id}`}"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold""
                      >
</Link>
                        <span>Read Documentation</span>"
                        <ArrowRight className="w-4 h-4 ml-1" />"
</ArrowRight>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>"
        <section className="py-16">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;"
              className="text-center mb-12""
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Documentation</h2>""
              <p className="text-lg text-gray-600">"
</p>
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
</div>
                <motion.article;
                  key={doc.id}"
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
</motion>"
                  <div className="p-6">"
</div>"
                    <div className="flex items-center justify-between mb-4">"
</div>"
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">"
</span>
                      </span>"
                      <div className="flex items-center text-sm text-gray-500">"
</div>"
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />"
</Star>
                      </div>
                    </div>
                    "
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">"
</h3>
                    </h3>
                    "
                    <p className="text-gray-600 mb-4 leading-relaxed">"
</p>
                    </p>
                    "
                    <div className="flex items-center justify-between mb-4">"
</div>"
                      <div className="flex items-center space-x-3 text-sm text-gray-500">"
</div>"
                        <div className="flex items-center">"
</div>"
                          <User className="w-4 h-4 mr-1" />"
</User>
                        </div>"
                        <div className="flex items-center">"
</div>"
                          <Clock className="w-4 h-4 mr-1" />"
</Clock>
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${"
                        doc.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :''
                        doc.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :''
                        'bg-red-100 text-red-800''
                      }`}>
</span>
                      </span>
                    </div>
                    '
                    <div className="flex flex-wrap gap-1 mb-4">"
</div>"
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"
</span>
                        </span>
                    </div>
                    "
                    <div className="flex items-center justify-between">"
</div>"
                      <div className="text-sm text-gray-500">"
</div>
                      </div>
                      <Link;
                        href={`/docs/${doc.id}`}"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group-hover:text-indigo-700""
                      >
</Link>
                        <span>Read More</span>"
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />"
</ArrowRight>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>"
              <div className="text-center py-12">"
</div>"
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />"
</BookOpen>"
                <h3 className="text-xl font-semibold text-gray-900 mb-2">"
</h3>
                </h3>"
                <p className="text-gray-600">"
</p>
                </p>
              </div>
          </div>
        </section>"
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">"
</section>"
          <div className="container mx-auto px-4 text-center">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold mb-6">"
</h2>
              </h2>"
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">"
</p>
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>"
                <Link href="/support" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">"
</Link>
                </Link>"
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">"
</Link>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>"