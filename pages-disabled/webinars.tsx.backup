
import React from
  'react';
import { motion } from
  'framer-motion';
import { SEO } from
  '../components/SEO';
import { Button } from
  '../components/ui/Button';
import { Card } from
  '../components/ui/Card';
import { Badge } from
  '../components/ui/Badge';
>>>>>>> origin/main
import { 
  Calendar, Clock,
  Users, Play,
  ArrowRight, Search,
  Filter, Tag,
  Eye, Share2,
  Video, TrendingUp,
  Brain, Shield,
  Cloud, Database,
  Network, Zap,
  Globe, Phone,
  Mail, Award,
  Star, CheckCircle,
  Download, Bookmark,
  ExternalLink
} from
  'lucide-react';

const Webinars: React.FC = () => {
  const webinars = [
    {
      id: 1, title: "AI Revolution in Business: Strategies for 2025",
      description: "Join our experts as they discuss the latest AI trends and how businesses can leverage these technologies for competitive advantage.", speaker: "Dr. Sarah Johnson",
      speakerTitle: "Chief AI Officer", speakerCompany: "Zion Tech Group",
      date: "2025-02-15", time: "2:00 PM EST",
      duration: "60 minutes", category: "AI Strategy",
      attendees: 1250, rating: 4.9,
      image: "/api/placeholder/600/400", tags: ["AI Strategy", "Business Innovation", "Future Trends", "Leadership"], featured: true,
      status: "upcoming", registrationUrl: "/webinars/ai-revolution-2025"
    }, {
      id: 2, title: "Cybersecurity in the AI Era: Protecting Your Digital Assets",
      description: "Learn about the latest cybersecurity threats and how AI is being used both to attack and defend digital infrastructure.", speaker: "Michael Chen",
      speakerTitle: "Cybersecurity Expert", speakerCompany: "Zion Tech Group",
      date: "2025-02-12", time: "3:00 PM EST",
      duration: "45 minutes", category: "Security",
      attendees: 980, rating: 4.8,
      image: "/api/placeholder/600/400", tags: ["Cybersecurity", "AI Security", "Threat Protection", "Risk Management"], featured: false,
      status: "upcoming", registrationUrl: "/webinars/cybersecurity-ai-era"
    }, {
      id: 3, title: "Cloud Migration Best Practices: A Complete Guide",
      description: "Comprehensive guide to planning and executing successful cloud migration projects with minimal business disruption.", speaker: "Emily Rodriguez",
      speakerTitle: "Cloud Solutions Architect", speakerCompany: "Zion Tech Group",
      date: "2025-02-10", time: "1:00 PM EST",
      duration: "50 minutes", category: "Cloud Computing",
      attendees: 1150, rating: 4.7,
      image: "/api/placeholder/600/400", tags: ["Cloud Migration", "Strategy", "Best Practices", "Digital Transformation"], featured: false,
      status: "upcoming", registrationUrl: "/webinars/cloud-migration-guide"
    }, {
      id: 4, title: "Data Analytics and Machine Learning: Driving Business Intelligence",
      description: "Discover how advanced analytics and machine learning are transforming business intelligence and decision-making processes.", speaker: "David Kim",
      speakerTitle: "Data Science Director", speakerCompany: "Zion Tech Group",
      date: "2025-01-28", time: "2:30 PM EST",
      duration: "55 minutes", category: "Analytics",
      attendees: 890, rating: 4.6,
      image: "/api/placeholder/600/400", tags: ["Data Analytics", "Machine Learning", "Business Intelligence", "Decision Making"], featured: false,
      status: "recorded", recordingUrl: "/webinars/data-analytics-ml-recording"
    }, {
      id: 5, title: "AI-Powered Customer Experience: The New Competitive Advantage",
      description: "Explore how AI is revolutionizing customer service and experience, with real-world examples and implementation strategies.",
      speaker: "Lisa Wang", speakerTitle: "Customer Experience Lead",
      speakerCompany: "Zion Tech Group", date: "2025-01-25",
      time: "3:30 PM EST", duration: "40 minutes",
      category: "Customer Experience", attendees: 1100,
      rating: 4.8, image: "/api/placeholder/600/400",
      tags: ["Customer Experience", "AI", "Automation", "Competitive Advantage"], featured: false,
      status: "recorded", recordingUrl: "/webinars/ai-customer-experience-recording"
    }, {
      id: 6, title: "Digital Transformation: A Roadmap for Modern Organizations",
      description: "Complete roadmap for organizations looking to embrace digital transformation and leverage emerging technologies.", speaker: "James Wilson",
      speakerTitle: "Digital Transformation Consultant", speakerCompany: "Zion Tech Group",
      date: "2025-01-22", time: "1:30 PM EST",
      duration: "65 minutes", category: "Digital Transformation",
      attendees: 1350, rating: 4.9,
      image: "/api/placeholder/600/400", tags: ["Digital Transformation", "Strategy", "Technology", "Innovation"], featured: false,
      status: "recorded", recordingUrl: "/webinars/digital-transformation-roadmap-recording"
    }
  ];

  const categories = [
    { name: "All Categories", count: 24, active: true }, { name: "AI Strategy", count: 6, active: false }, { name: "Security", count: 4, active: false }, { name: "Cloud Computing", count: 5, active: false }, { name: "Analytics", count: 3, active: false }, { name: "Customer Experience", count: 3, active: false }, { name: "Digital Transformation", count: 2, active: false }, { name: "Other", count: 1, active: false }
  ];

  const featuredWebinar = webinars.find(webinar => webinar.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group" 
        description="Join our expert-led webinars on AI, technology trends, and business innovation. Learn from industry leaders and get actionable insights."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Video className="w-4 h-4 mr-2" />
              Live & Recorded Sessions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Webinars
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our expert-led webinars and learn from industry leaders about the latest technology trends and business strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Webinar */}, {featuredWebinar && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Webinar</h2>
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full">
                    <img 
                      src={featuredWebinar.image} 
                      alt={featuredWebinar.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="text-xs">
                        {featuredWebinar.duration}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                        <Play className="w-6 h-6 mr-2" />
                        {featuredWebinar.status ===,
  upcoming' ?
  'Register Now': 'Watch Recording}
                      </Button>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <Badge variant="outline" className="mr-3">{featuredWebinar.category}</Badge>
                      <Badge variant={featuredWebinar.status ===,
  upcoming' ?
  'default': 'secondary} className="text-xs">
                        {featuredWebinar.status ===,
  upcoming' ?
  'Upcoming': 'Recorded}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredWebinar.title}</h3>
                    <p className="text-gray-300 mb-6">{featuredWebinar.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-center text-gray-300 mb-2">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{featuredWebinar.speaker}</span>
                      </div>
                      <div className="text-sm text-gray-400 ml-6">
                        {featuredWebinar.speakerTitle} at {featuredWebinar.speakerCompany}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{featuredWebinar.attendees.toLocaleString()}</div>
                        <div className="text-sm text-gray-400">Attendees</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{featuredWebinar.rating}/5</div>
                        <div className="text-sm text-gray-400">Rating</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(featuredWebinar.date).toLocaleDateString()}
                        <Clock className="w-4 h-4 ml-4 mr-2" />
                        {featuredWebinar.time}
                      </div>
                      <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        {featuredWebinar.status ===,
  upcoming' ?
  'Register Now': 'Watch Recording}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}, {/* Webinars Grid */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-white">All Webinars</h2>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search webinars..."
                        className="pl-10 pr-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {webinars.filter(webinar => !webinar.featured).map((webinar, index) => (
                    <motion.div
                      key={webinar.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <Card className="overflow-hidden h-full">
                        <div className="relative h-48">
                          <img 
                            src={webinar.image} 
                            alt={webinar.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge variant="outline">{webinar.category}</Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge variant={webinar.status ===,
  upcoming' ?
  'default': 'secondary} className="text-xs">
                              {webinar.status ===,
  upcoming' ?
  'Upcoming': 'Recorded}
                            </Badge>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                              <Play className="w-4 h-4 mr-2" />
                              {webinar.status ===,
  upcoming' ?
  'Register': 'Watch}
                            </Button>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-3">{webinar.title}</h3>
                          <p className="text-gray-300 mb-4 text-sm">{webinar.description}</p>
                          
                          <div className="flex items-center mb-4 text-sm text-gray-400">
                            <Users className="w-4 h-4 mr-2" />
                            {webinar.speaker}
                            <Calendar className="w-4 h-4 ml-4 mr-2" />
                            {new Date(webinar.date).toLocaleDateString()}
                            <Clock className="w-4 h-4 ml-4 mr-2" />
                            {webinar.time}
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-400">{webinar.attendees.toLocaleString()}</div>
                              <div className="text-xs text-gray-400">Attendees</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-400">{webinar.rating}/5</div>
                              <div className="text-xs text-gray-400">Rating</div>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {webinar.tags.slice(0, 3).map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="text-xs">
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                                {webinar.status ===,
  upcoming' ?
  'Register': 'Watch}
                              </Button>
                              <Button variant="outline" size="sm">
                                <Share2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg: w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                {/* Categories Filter */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Filter by Category</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={category.name}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                          category.active 
                            ?,
  bg-gradient-to-r from-blue-500 to-purple-600 text-white': 'text-gray-300 hover:bg-slate-700
                        }`}
                      >
                        <span>{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </Card>

                {/* Webinar Stats */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Webinar Statistics</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">25K+</div>
                      <div className="text-sm text-gray-400">Total Attendees</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">4.8/5</div>
                      <div className="text-sm text-gray-400">Average Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">50+</div>
                      <div className="text-sm text-gray-400">Webinars Hosted</div>
                    </div>
                  </div>
                </Card>

                {/* Newsletter Signup */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Get notified about upcoming webinars and access to exclusive content.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                      Subscribe
                    </Button>
                  </div>
                </Card>

                {/* CTA */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Host Your Own Webinar?</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Partner with us to host educational webinars and reach our audience of technology professionals.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Partner With Us
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Learn from Industry Experts?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our community of professionals and stay ahead with the latest insights and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <Calendar className="w-5 h-5 mr-2" />
                View All Upcoming Webinars
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="w-5 h-5 mr-2" />
                Request Custom Webinar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )};

const categories = []
  "All Webinars",
  "Artificial Intelligence",
  "Cloud Computing",
  "Cybersecurity",
  "SaaS",
  "Data Analytics",
  "Digital Transformation"];
];

const statuses = []
  "All Status",
  "Upcoming",
  "Recorded"];
];

export default function WebinarsPage() {}
  const [selectedCategory, setSelectedCategory] = useState("All Webinars");"
  const [selectedStatus, setSelectedStatus] = useState("All Status");"
  const filteredWebinars = webinars.filter(webinar => {})
    const categoryMatch = selectedCategory === "All Webinars" || webinar.category === selectedCategory;"
    const statusMatch = selectedStatus === "All Status" ||")"
      (selectedStatus === "Upcoming" && webinar.status === "upcoming") ||"
      (selectedStatus === "Recorded" && webinar.status === "recorded");"
    return categoryMatch && statusMatch;
  }
});

  return (")
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
                key={webinar.id};
                className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6 }};
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
                      <span className={`text-xs px-2 py-1 rounded-full ${`}
                        webinar.status === 'upcoming'''
                          ? 'bg-green-100 text-green-800'''
                          : 'bg-gray-100 text-gray-800''
                      }`}>
</span>
                      </span>
                    </div>
                    ``
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
                        <h3 className="font-semibold text-gray-900 mb-1">Presenter:</h3>"
                        <p className="text-gray-600">{webinar.presenter}</p>"
                        <p className="text-sm text-gray-500">{webinar.presenterTitle}</p>"
                      </div>
                      <div>
</div>"
                        <h3 className="font-semibold text-gray-900 mb-1">Date & Time:</h3>"
                        <p className="text-gray-600">{webinar.date} at {webinar.time}</p>"
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
                        href={webinar.registrationUrl};
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                      >
</Link>"
                        <ArrowRight className="w-4 h-4" />"
</ArrowRight>
                      </Link>"
                      <div className="flex gap-4">"
</div>
                        <Link;
                          href={webinar.recordingUrl};
                          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
              </motion.article>);
            ))};
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
                  value={selectedCategory};
                  onChange={(e) => setSelectedCategory(e.target.value)};
</select>
                    <option key={category} value={category}>{category}</option>
                </select>
              </div>
              <div>
</div>"
                <label className="block text-sm font-medium text-gray-700 mb-2">Status:</label>"
                <select;
                  value={selectedStatus};
                  onChange={(e) => setSelectedStatus(e.target.value)};
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All Webinars</h2>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
</div>
                <motion.article;
                  key={webinar.id};
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }};
                  animate={{ opacity: 1, y: 0 }};
                  transition={{ delay: index * 0.1 }};
                  whileHover={{ y: -5 }};
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
                      <span className={`text-xs px-2 py-1 rounded-full ${`}
                        webinar.status === 'upcoming'''
                          ? 'bg-green-100 text-green-800'''
                          : 'bg-gray-100 text-gray-800''
                      }`}>
</span>
                      </span>
                    </div>
                    ``
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
                          href={webinar.registrationUrl};
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
</Link>"
                          <ArrowRight className="w-4 h-4" />"
</ArrowRight>
                        </Link>
                        <>
                          <Link;
                            href={webinar.recordingUrl};
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
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
                      )};
                    </div>
                  </div>
                </motion.article>
              ))};
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
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
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