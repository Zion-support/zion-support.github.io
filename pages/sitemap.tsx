import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Home, 
  Users, 
  Mail, 
  Phone as PhoneIcon, 
  MapPin, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

const sitemapData = {
  main: [
    { path: "/", label: "Home", description: "Welcome to Zion Tech Group" },
    { path: "/about", label: "About Us", description: "Learn about our company and mission" },
    { path: "/contact", label: "Contact", description: "Get in touch with our team" },
    { path: "/careers", label: "Careers", description: "Join our innovative team" },
    { path: "/blog", label: "Blog", description: "Latest insights and technology trends" }
  ],
  services: [
    { path: "/ai-services", label: "AI Services", description: "Artificial Intelligence solutions" },
    { path: "/it-services", label: "IT Services", description: "Information Technology solutions" },
    { path: "/micro-saas", label: "Micro SaaS", description: "Micro Software as a Service solutions" }
  ],
  solutions: [
    { path: "/solutions/enterprise", label: "Enterprise Solutions", description: "Large-scale business solutions" },
    { path: "/solutions/small-business", label: "Small Business", description: "Solutions for small businesses" },
    { path: "/solutions/startup", label: "Startup Solutions", description: "Solutions for startups" }
  ]
};

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Navigate our website with our comprehensive sitemap" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sitemap
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate our website with our comprehensive sitemap
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(sitemapData).map(([category, pages], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
                {category}
              </h2>
              
              <ul className="space-y-4">
                {pages.map((page, idx) => (
                  <li key={idx}>
                    <Link href={page.path}>
                      <a className="flex items-center text-blue-600 hover:text-blue-800 font-semibold group">
                        <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        <div>
                          <div className="font-semibold">{page.label}</div>
                          <div className="text-sm text-gray-600">{page.description}</div>
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <PhoneIcon className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <div className="font-semibold text-gray-900">Phone</div>
                <div className="text-gray-600">+1 302 464 0950</div>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <div className="font-semibold text-gray-900">Email</div>
                <div className="text-gray-600">kleber@ziontechgroup.com</div>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <div className="font-semibold text-gray-900">Address</div>
                <div className="text-gray-600">364 E Main St STE 1008 Middletown DE 19709</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}