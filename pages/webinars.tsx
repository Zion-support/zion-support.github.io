  Clock, 
  User, 
  ArrowRight, 
  Tag, 
  ExternalLink,
  Play,
  Download,
  Users,
  Award,
  CheckCircle;
import {
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Play, 
  Download, 
  Share2, 
  Tag,
  ExternalLink,
  Video,
  Mic,
  Users,
  Star,
  Award,
  Globe,
  BookOpen,
  MessageSquare,
  Search,
  Filter,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

  }
];

const categories = [
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Webinars</h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Join our educational webinars and learn from industry experts.
                    </div>
                  </div>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
        <section className="py-20 bg-indigo-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to get notified about upcoming webinars.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/newsletter"
                  className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold"
                >
                  Contact Us
                </Link>
              </div>
