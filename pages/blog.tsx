import React from 'react';''
import Head from 'next/head';''
import Link from 'next/link';''
import { motion } from 'framer-motion';''
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';'
const blogPosts = [
  {
    id: 1,'
    title: "The Future of AI in Business: 2025 Trends",""
    excerpt: "Explore the latest AI trends that are transforming businesses across industries.",""
    author: "Dr. Sarah Chen",""
    date: "2024-01-15",""
    category: "AI & Technology",""
    readTime: "5 min read",""
    image: "/api/placeholder/600/300""
  },
  {
    id: 2,"
    title: "Micro SaaS: Building Scalable Solutions",""
    excerpt: "Learn how to build and scale micro SaaS applications for modern businesses.",""
    author: "Michael Rodriguez",""
    date: "2024-01-10",""
    category: "SaaS Development",""
    readTime: "7 min read",""
    image: "/api/placeholder/600/300""
  },
  {
    id: 3,"
    title: "Cybersecurity Best Practices for SMBs",""
    excerpt: "Essential security measures every small business should implement.",""
    author: "Emily Johnson",""
    date: "2024-01-05",""
    category: "Cybersecurity",""
    readTime: "6 min read",""
    image: "/api/placeholder/600/300""
  },
  {
    id: 4,"
    title: "Cloud Migration Strategies",""
    excerpt: "A complete guide to successfully migrating your infrastructure to the cloud.",""
    author: "David Kim",""
    date: "2023-12-28",""
    category: "Cloud Computing",""
    readTime: "8 min read",""
    image: "/api/placeholder/600/300""
  },
  {
    id: 5,"
    title: "Data Analytics in Digital Transformation",""
    excerpt: "How data analytics is driving digital transformation across industries.",""
    author: "Sarah Johnson",""
    date: "2023-12-20",""
    category: "Data Analytics",""
    readTime: "6 min read",""
    image: "/api/placeholder/600/300""
  },
  {
    id: 6,"
    title: "Building Resilient IT Infrastructure",""
    excerpt: "Key considerations for creating IT infrastructure that supports remote work.",""
    author: "Michael Chen",""
    date: "2023-12-15",""
    category: "IT Infrastructure",""
    readTime: "5 min read",""
    image: "/api/placeholder/600/300""
  }]
];

const categories = ["
  "All Posts",""
  "AI & Technology",""
  "Cloud Computing",""
  "Cybersecurity",""
  "SaaS",""
  "Digital Transformation""]
];

export default function BlogPage() {
  return (
"
    <div className="min-h-screen bg-gray-50">"
</div>
      <Head>
</Head>
        <title>Blog - Zion Tech Group</title>"
        <meta name="description" content="Insights, trends, and best practices in AI, cloud computing, cybersecurity, and technology solutions." />"
</meta>"
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, SaaS development, digital transformation" />"
</meta>
      </Head>
"
      <div className="min-h-screen bg-gray-50">"
</div>"
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">"
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
</h1>
              </h1>"
              <p className="text-xl md:text-2xl text-gray-300 mb-8">"
</p>
              </p>
            </motion.div>
          </div>
        </section>"
        <section className="py-20">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">"
</div>"
              <div className="lg:col-span-3">"
</div>"
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">"
</div>
                    <motion.article;
                      key={post.id}"
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300""
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
</motion>"
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>""
                      <div className="p-6">"
</div>"
                        <div className="flex items-center gap-2 mb-3">"
</div>"
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">"
</span>
                          </span>
                        </div>"
                        <h2 className="text-xl font-bold mb-3 line-clamp-2">"
</h2>
                        </h2>"
                        <p className="text-gray-600 mb-4 line-clamp-3">"
</p>
                        </p>"
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">"
</div>"
                          <div className="flex items-center gap-4">"
</div>"
                            <div className="flex items-center gap-1">"
</div>"
                              <User className="w-4 h-4" />"
</User>
                              <span>{post.author}</span>
                            </div>"
                            <div className="flex items-center gap-1">"
</div>"
                              <Calendar className="w-4 h-4" />"
</Calendar>
                              <span>{post.date}</span>
                            </div>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <Link;
                          href={`/blog/${post.id}`}"
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium""
                        >
</Link>"
                          <ArrowRight className="w-4 h-4" />"
</ArrowRight>
                        </Link>
                      </div>
                    </motion.article>)
                  ))}
                </div>"
                <div className="text-center mt-12">"
</div>"
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">"
</button>
                  </button>
                </div>
              </div>"
              <div className="lg:col-span-1">"
</div>"
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">"
</div>"
                  <h3 className="text-xl font-bold mb-4">Categories</h3>""
                  <div className="space-y-2">"
</div>
                      <Link;
                        key={index}"
                        href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}''
                        className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200""
                      >
</Link>"
                        <span className="text-gray-700">{category.name}</span>""
                        <span className="text-gray-500 text-sm">{category.count}</span>"
                      </Link>
                  </div>
                </div>
"
                <div className="bg-white rounded-lg shadow-lg p-6">"
</div>"
                  <h3 className="text-xl font-bold mb-4">Newsletter</h3>""
                  <p className="text-gray-600 mb-4">"
</p>
                  </p>"
                  <div className="space-y-3">"
</div>
                    <input;"
                      type="email"""
                      placeholder="Enter your email"""
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500""
                    />
</input>"
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">"
</button>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

() {
  return (
    <Layout>
</Layout>"
      <div className="min-h-screen bg-white">"
</div>"
        <div className="container mx-auto px-4 py-20">"
</div>"
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>""
          <p className="text-lg text-gray-600">"
</p>
          </p>
        </div>
      </div>
    </Layout>)"