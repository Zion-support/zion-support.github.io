import React, { useState } from 'react';''
import Head from 'next/head';''
import Link from 'next/link';''
import { motion } from 'framer-motion';'
import {
  // TODO: Implement
}
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Tag, 
  ExternalLink,
  Play,
  Download,
  Users,
  Award,
  CheckCircle;'
} from 'lucide-react';'
const webinars = [
  {
    id: 1,'
    title: "The Future of AI in Business: 2025 Trends and Predictions",""
    description: "Join our experts as they discuss the latest AI trends, emerging technologies, and how businesses can prepare for the future of artificial intelligence.",""
    presenter: "Dr. Sarah Chen",""
    presenterTitle: "Chief AI Officer",""
    date: "2024-02-15",""
    time: "2:00 PM EST",""
    duration: "60 minutes",""
    category: "Artificial Intelligence",""
    attendees: "1,247","
    featured: true,"
    status: "upcoming",""
    registrationUrl: "/webinars/register/ai-future-2025""
  },
  {
    id: 2,"
    title: "Cloud Migration Best Practices: A Complete Guide",""
    description: "Learn the essential strategies and best practices for successful cloud migration, including planning, execution, and optimization.",""
    presenter: "Michael Rodriguez",""
    presenterTitle: "Cloud Solutions Architect",""
    date: "2024-02-10",""
    time: "3:00 PM EST",""
    duration: "45 minutes",""
    category: "Cloud Computing",""
    attendees: "892","
    featured: false,"
    status: "upcoming",""
    registrationUrl: "/webinars/register/cloud-migration-guide""
  },
  {
    id: 3,"
    title: "Cybersecurity in the Age of AI: Threats and Solutions",""
    description: "Explore the evolving cybersecurity landscape and how AI is both creating new threats and providing innovative solutions.",""
    presenter: "Alex Thompson",""
    presenterTitle: "Cybersecurity Expert",""
    date: "2024-01-25",""
    time: "1:00 PM EST",""
    duration: "50 minutes",""
    category: "Cybersecurity",""
    attendees: "1,156","
    featured: false,"
    status: "recorded",""
    recordingUrl: "/webinars/recordings/cybersecurity-ai-age""
  },
  {
    id: 4,"
    title: "Building Scalable Micro SaaS Applications",""
    description: "Discover how to design, develop, and scale micro SaaS applications for maximum growth and profitability.",""
    presenter: "Jennifer Lee",""
    presenterTitle: "SaaS Product Manager",""
    date: "2024-01-20",""
    time: "2:30 PM EST",""
    duration: "55 minutes",""
    category: "SaaS",""
    attendees: "743","
    featured: false,"
    status: "recorded",""
    recordingUrl: "/webinars/recordings/micro-saas-scalable""
  },
  {
    id: 5,"
    title: "Data Analytics and Business Intelligence: Advanced Techniques",""
    description: "Learn advanced data analytics techniques and how to turn data into actionable business insights.",""
    presenter: "David Kim",""
    presenterTitle: "Data Science Lead",""
    date: "2024-01-15",""
    time: "4:00 PM EST",""
    duration: "65 minutes",""
    category: "Data Analytics",""
    attendees: "1,089","
    featured: false,"
    status: "recorded",""
    recordingUrl: "/webinars/recordings/data-analytics-bi""
  },
  {
    id: 6,"
    title: "Digital Transformation: A Strategic Approach",""
    description: "Understand the key principles of digital transformation and how to successfully lead organizational change.",""
    presenter: "Emma Wilson",""
    presenterTitle: "Digital Transformation Consultant",""
    date: "2024-01-10",""
    time: "11:00 AM EST",""
    duration: "70 minutes",""
    category: "Digital Transformation",""
    attendees: "967","
    featured: false,"
    status: "recorded",""
    recordingUrl: "/webinars/recordings/digital-transformation-strategy""
  }]
];

const categories = ["
  "All Webinars",""
  "Artificial Intelligence",""
  "Cloud Computing",""
  "Cybersecurity",""
  "SaaS",""
  "Data Analytics",""
  "Digital Transformation""]
];

const statuses = ["
  "All Status",""
  "Upcoming",""
  "Recorded""]
];

export default function WebinarsPage() {"
  const [selectedCategory, setSelectedCategory] = useState("All Webinars");""
  const [selectedStatus, setSelectedStatus] = useState("All Status");"
  const filteredWebinars = webinars.filter(webinar => {"
    const categoryMatch = selectedCategory === "All Webinars" || webinar.category === selectedCategory;""
    const statusMatch = selectedStatus === "All Status" ||")"
      (selectedStatus === "Upcoming" && webinar.status === "upcoming") ||""
      (selectedStatus === "Recorded" && webinar.status === "recorded");"
    return categoryMatch && statusMatch;
  });

  return ("
    <div className="min-h-screen bg-gray-50">"
</div>
      <Head>
</Head>
        <title>Webinars - Zion Tech Group</title>"
        <meta name="description" content="Join our expert-led webinars on AI, cloud computing, cybersecurity, and technology trends. Learn from industry leaders." />"
</meta>
      </Head>"
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-4xl mx-auto text-center">"
</div>"
            <h1 className="text-5xl font-bold mb-6">"
</h1>
            </h1>"
            <p className="text-xl text-blue-100">"
</p>
            </p>
          </div>
        </div>
      </section>"
      <section className="py-16">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-6xl mx-auto">"
</div>"
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Webinar</h2>"
              <motion.article;
                key={webinar.id}"
                className="bg-white rounded-lg shadow-lg overflow-hidden mb-8""
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
</motion>"
                <div className="md:flex">"
</div>"
                  <div className="md:w-1/3">"
</div>"
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">"
</div>"
                      <Play className="w-24 h-24 text-white" />"
</Play>
                    </div>
                  </div>"
                  <div className="md:w-2/3 p-8">"
</div>"
                    <div className="flex items-center gap-2 mb-4">"
</div>"
                      <Tag className="w-4 h-4 text-blue-600" />"
</Tag>"
                      <span className="text-sm text-blue-600 font-medium">"
</span>
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${"
                        webinar.status === 'upcoming'''
                          ? 'bg-green-100 text-green-800'''
                          : 'bg-gray-100 text-gray-800''
                      }`}>
</span>
                      </span>
                    </div>
                    '
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">"
</h2>
                    </h2>
                    "
                    <p className="text-gray-600 mb-6 text-lg">"
</p>
                    </p>
                    "
                    <div className="grid grid-cols-2 gap-4 mb-6">"
</div>
                      <div>
</div>"
                        <h3 className="font-semibold text-gray-900 mb-1">Presenter:</h3>""
                        <p className="text-gray-600">{webinar.presenter}</p>""
                        <p className="text-sm text-gray-500">{webinar.presenterTitle}</p>"
                      </div>
                      <div>
</div>"
                        <h3 className="font-semibold text-gray-900 mb-1">Date & Time:</h3>""
                        <p className="text-gray-600">{webinar.date} at {webinar.time}</p>""
                        <p className="text-sm text-gray-500">{webinar.duration}</p>"
                      </div>
                    </div>
                    "
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">"
</div>"
                      <div className="flex items-center gap-4">"
</div>"
                        <div className="flex items-center gap-2">"
</div>"
                          <Users className="w-4 h-4" />"
</Users>
                          <span>{webinar.attendees} registered</span>
                        </div>"
                        <div className="flex items-center gap-2">"
</div>"
                          <Clock className="w-4 h-4" />"
</Clock>
                          <span>{webinar.duration}</span>
                        </div>
                      </div>
                    </div>
                      <Link;
                        href={webinar.registrationUrl}"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors""
                      >
</Link>"
                        <ArrowRight className="w-4 h-4" />"
</ArrowRight>
                      </Link>"
                      <div className="flex gap-4">"
</div>
                        <Link;
                          href={webinar.recordingUrl}"
                          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors""
                        >
</Link>"
                          <Play className="w-4 h-4" />"
</Play>
                        </Link>"
                        <button className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">"
</button>"
                          <Download className="w-4 h-4" />"
</Download>
                        </button>
                      </div>
                  </div>
                </div>
              </motion.article>)
            ))}
          </div>
        </div>
      </section>"
      <section className="py-8 bg-white">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-6xl mx-auto">"
</div>"
            <div className="flex flex-wrap gap-4 justify-center mb-4">"
</div>
              <div>
</div>"
                <label className="block text-sm font-medium text-gray-700 mb-2">Category:</label>"
                <select;
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
</select>
                    <option key={category} value={category}>{category}</option>
                </select>
              </div>
              <div>
</div>"
                <label className="block text-sm font-medium text-gray-700 mb-2">Status:</label>"
                <select;
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
</select>
                    <option key={status} value={status}>{status}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>"
      <section className="py-16">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-6xl mx-auto">"
</div>"
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All Webinars</h2>""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
</div>
                <motion.article;
                  key={webinar.id}"
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow""
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
</motion>"
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">"
</div>"
                    <Play className="w-16 h-16 text-white" />"
</Play>
                  </div>"
                  <div className="p-6">"
</div>"
                    <div className="flex items-center gap-2 mb-3">"
</div>"
                      <Tag className="w-4 h-4 text-blue-600" />"
</Tag>"
                      <span className="text-sm text-blue-600 font-medium">"
</span>
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${"
                        webinar.status === 'upcoming'''
                          ? 'bg-green-100 text-green-800'''
                          : 'bg-gray-100 text-gray-800''
                      }`}>
</span>
                      </span>
                    </div>
                    '
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">"
</h3>
                    </h3>
                    "
                    <p className="text-gray-600 mb-4 line-clamp-3">"
</p>
                    </p>
                    "
                    <div className="space-y-2 mb-4">"
</div>"
                      <div className="flex items-center gap-2 text-sm text-gray-600">"
</div>"
                        <User className="w-4 h-4" />"
</User>
                        <span>{webinar.presenter}</span>
                      </div>"
                      <div className="flex items-center gap-2 text-sm text-gray-600">"
</div>"
                        <Calendar className="w-4 h-4" />"
</Calendar>
                        <span>{webinar.date} at {webinar.time}</span>
                      </div>"
                      <div className="flex items-center gap-2 text-sm text-gray-600">"
</div>"
                        <Clock className="w-4 h-4" />"
</Clock>
                        <span>{webinar.duration}</span>
                      </div>"
                      <div className="flex items-center gap-2 text-sm text-gray-600">"
</div>"
                        <Users className="w-4 h-4" />"
</Users>
                        <span>{webinar.attendees} registered</span>
                      </div>
                    </div>
                    "
                    <div className="flex gap-2">"
</div>
                        <Link;
                          href={webinar.registrationUrl}"
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm""
                        >
</Link>"
                          <ArrowRight className="w-4 h-4" />"
</ArrowRight>
                        </Link>
                        <>
                          <Link;
                            href={webinar.recordingUrl}"
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm""
                          >
</Link>"
                            <Play className="w-4 h-4" />"
</Play>
                          </Link>"
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">"
</button>"
                            <Download className="w-4 h-4" />"
</Download>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>"
            <div className="text-center mt-12">"
</div>"
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">"
</button>
              </button>
            </div>
          </div>
        </div>
      </section>"
      <section className="py-16 bg-blue-600">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-4xl mx-auto text-center">"
</div>"
            <h2 className="text-3xl font-bold text-white mb-4">"
</h2>
            </h2>"
            <p className="text-xl text-blue-100 mb-8">"
</p>
            </p>
            "
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">"
</div>
              <input;"
                type="email"""
                placeholder="Enter your email"""
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300""
              />
</input>"
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">"
</button>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>"