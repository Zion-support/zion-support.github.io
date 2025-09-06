<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

<<<<<<< HEAD
import {

=======
<<<<<<< HEAD
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
<<<<<<< HEAD
  Search
  HelpCircle
  BookOpen
  MessageCircle
  Phone
  Mail
  FileText
  Video
  Download
  ExternalLink
  ChevronDown
  Cloud
=======
<<<<<<< HEAD


import {

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Search,
  HelpCircle,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  Video,
  Download,
  ExternalLink,
  ChevronDown,
  Cloud,;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
} from "lucide-react";
const helpArticles = [
  {
    id: "overview"
    title: "Understanding Our Services"
    description: "Overview of all available services and solutions"
    readTime: "7 min read"
    type: "Overview"
  }
  {
    id: "ai-services"
    title: "AI Services"
    description: "Everything about our AI and machine learning solutions."
    icon: HelpCircle
    color: "green"
    articles: [
      {
        title: "AI Implementation Guide"
        description: "How to implement AI solutions in your business"
        readTime: "10 min read"
        type: "Guide"
      }
      {
        title: "Machine Learning Models"
        description: "Understanding different ML models and their applications"
        readTime: "8 min read"
        type: "Technical"
      }
<<<<<<< HEAD
<<<<<<< HEAD
      {

    icon: Cloud,
    color: "blue",

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from './react';
import Head from './next / head';
import Link from './next / link';
import { motion, AnimatePresence  } from './framer-motion';
import {
  Search,
  HelpCircle,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  Video,
  Download,
  ExternalLink,
  ChevronDown,
  Cloud,
} from './lucide-react';
;
const help_articles = [;
  {
    id: "overview",
    title: "Understanding Our Services",
    description: "Overview of all available services and solutions",
    read_time: "7 min read",
    type: "Overview",
=======
      {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
        title: "AI Best Practices",
        description: "Tips and best practices for AI development",
        readTime: "6 min read",
        type: "Best Practice",
      },
    ],
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  },
  {
    id: "ai - services",
    title: "AI Services",
    description: "Everything about our AI and machine learning solutions.",
    icon: HelpCircle,
    color: "green",
    articles: [;
      {
        title: "AI Implementation Guide",
        description: "How to implement AI solutions in your business",
        read_time: "10 min read",
        type: "Guide",
      },
      {
        title: "Machine Learning Models",
        description: "Understanding different ML models and their applications",
        read_time: "8 min read",
        type: "Technical",
      },
<<<<<<< HEAD

      {

=======
      {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        title: 'AI Best Practices',
        description: 'Tips and best practices for AI development',
        readTime: '6 min read',
        type: 'Best Practice'
      }
    ]
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Cloud infrastructure and deployment solutions.',
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    icon: Cloud,
    color: "blue",

=======
<<<<<<< HEAD
      {



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        title: "AI Best Practices"
        description: "Tips and best practices for AI development"
        readTime: "6 min read"
        type: "Best Practice"
      }
    ]
  }
  {
    id: "cloud-services"
    title: "Cloud Services"
    description: "Cloud infrastructure and deployment solutions."
    icon: Cloud
    color: "blue"
<<<<<<< HEAD

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    articles: [
      {
        title: "Cloud Migration Guide"
        description: "Step-by-step guide to migrating to the cloud"
        readTime: "12 min read"
        type: "Guide"
      }
<<<<<<< HEAD

    articles: [;
      {
<<<<<<< HEAD

=======
=======
    articles: [;
      {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        title: "Cloud Migration Guide",
        description: "Step - by - step guide to migrating to the cloud",
        read_time: "12 min read",
        type: "Guide",
<<<<<<< HEAD
      },

      {

=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Cloud Security",
        description: "Best practices for securing your cloud infrastructure",
        readTime: "9 min read",
        type: "Security",
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      },
      {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        title: 'Cloud Security',
        description: 'Best practices for securing your cloud infrastructure',
        readTime: '9 min read',
        type: 'Security'
      }
    ]
  }
<<<<<<< HEAD

=======
=======
      {


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        title: "Cloud Security"
        description: "Best practices for securing your cloud infrastructure"
        readTime: "9 min read"
        type: "Security"
      }
    ]
  }
<<<<<<< HEAD

];

;
const help_categories = [;

  {
<<<<<<< HEAD

];

=======

=======


=======
];
;
const help_categories = [;
  {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    title: "Getting Started"
    description: "New to our platform? Start here."
    icon: BookOpen
    color: "blue"
    articles: helpArticles
  }
<<<<<<< HEAD

];

=======


=======
];
<<<<<<< HEAD
export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("");
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    color: 'blue',
    articles: helpArticles
  }
];
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {;
  Search,;
  HelpCircle,;
  BookOpen,;
  MessageCircle,;
  Phone,;
  Mail,;
  FileText,;
  Video,;
  Download,;
  ExternalLink,;
  ChevronDown,;
  Cloud,;
} from "lucide-react";
const helpArticles = [;
  {;
    id: "overview",;
    title: "Understanding Our Services",;
    description: "Overview of all available services and solutions",;
    readTime: "7 min read",;
    type: "Overview",;
  },;
  {;
    id: "ai-services",;
    title: "AI Services",;
    description: "Everything about our AI and machine learning solutions.",;
    icon: HelpCircle,;
    color: "green",;
    articles: [;
      {;
        title: "AI Implementation Guide",;
        description: "How to implement AI solutions in your business",;
        readTime: "10 min read",;
        type: "Guide",;
      },;
      {;
        title: "Machine Learning Models",;
        description: "Understanding different ML models and their applications",;
        readTime: "8 min read",;
        type: "Technical",;
      },;
      {;
        title: "AI Best Practices",;
        description: "Tips and best practices for AI development",;
        readTime: "6 min read",;
        type: "Best Practice",;
      },;
    ],;
  },;
  {;
    id: "cloud-services",;
    title: "Cloud Services",;
    description: "Cloud infrastructure and deployment solutions.",;
    icon: Cloud,;
    color: "blue",;
    articles: [;
      {;
        title: "Cloud Migration Guide",;
        description: "Step-by-step guide to migrating to the cloud",;
        readTime: "12 min read",;
        type: "Guide",;
      },;
      {;
        title: "Cloud Security",;
        description: "Best practices for securing your cloud infrastructure",;
        readTime: "9 min read",;
        type: "Security",;
      },;
    ],;
  },;
];
const helpCategories = [;
  {;
    title: "Getting Started",;
    description: "New to our platform? Start here.",;
    icon: BookOpen,;
    color: "blue",;
    articles: helpArticles,;
  },;
];
export default function HelpPage() {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const [searchTerm, setSearchTerm] = useState("");
=======
<<<<<<< HEAD
export default function HelpPage() {
=======

<<<<<<< HEAD
  const toggleCategory = (index: number) => {;

=======
export default function HelpPage() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const toggleCategory = (index: number) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    setExpandedCategory(expandedCategory === index ? null : index);
=======

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
>>>>>>> origin/automation-improvements-final
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const toggleCategory = (index: number) => {;
    setExpandedCategory(expandedCategory === index ? null : index);
<<<<<<< HEAD
=======
<<<<<<< HEAD

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');

=======

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);

<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const filteredCategories = helpCategories
    .map((category) => ({
      ...category
      articles: category.articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) |
          article.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
    .filter((category) => category.articles.length > 0);
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const filteredCategories = helpCategories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const filteredCategories = helpCategories;
    .map((category) => ({;
      ...category,;
      articles: category && category.articles.filter(;
        (article) =>;
          article && article.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
          article && article.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()),;
      ),;
    }));
    .filter((category) => category && category.articles.length > 0);
=======
>>>>>>> origin/automation-improvements-final

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
<<<<<<< HEAD
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <>;
      <Head>;
        <title>Help Center - Zion Tech Group</title>;
        <meta
          name="description"
          content="Get help with Zion Tech Group services. Find documentation, tutorials, and support resources."
        />;
        <meta
          name="keywords"
          content="help, support, documentation, FAQ, tutorials, guides"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        />;
      </Head>;
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Hero Section */}
        <section className="relative py-20 px-4">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.6 }}
              className="text-center max-w-4xl mx-auto">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Help <span className="text-blue-600">Center</span>;
              </h1>;
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">;
                Find answers, get support, and learn how to make the most of our;
                services.;
              </p>;
              <div className="relative max-w-md mx-auto">;
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />;
                <input
                  type="text"
                  placeholder="Search help articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e && e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500";
                />;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
;
export default /**
 * HelpPage - Function description
 */
function HelpPage() {
  const [search_term, setSearchTerm] = useState ("");
  const [expanded_category, setExpandedCategory] = useState < number | null>(null);
;
  const toggle_category = (index: number) =>: any {
    setExpandedCategory (expanded_category === index ? null : index);
  }
;
  const filtered_categories = help_categories;
    .map ((category) => ({
      ...category,
      articles: category.articles.filter (
        (article) =>;
          article.title.toLowerCase ().includes (search_term.toLowerCase ()) ||;
          article.description.toLowerCase ().includes (search_term.toLowerCase ()),
      ),
    }));
    .filter ((category) => category.articles.length > 0);
;
  return (
    <>;
      <Head>;
        <title > Help Center - Zion Tech Group</title>;
        <meta;
          name="description";
          content="Get help with Zion Tech Group services. Find documentation, tutorials, and support resources.";
        />;
        <meta;
          name="keywords";
          content="help, support, documentation, FAQ, tutorials, guides";
        />;
      </Head>;
      <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - blue - 50">;
        {/* Hero Section */}
        <section className="relative py - 20 px - 4">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
              className="text - center max - w-4xl mx - auto";
            >;
              <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">;
                Help <span className="text - blue - 600">Center</span>;
              </h1>;
              <p className="text - xl text - gray - 600 mb - 8 max - w-3xl mx - auto">;
                Find answers, get support, and learn how to make the most of our;
                services.;
              </p>;
              <div className="relative max - w-md mx - auto">;
                <Search className="w - 5 h - 5 absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400" />;
                <input;
                  type="text";
                  placeholder="Search help articles...";
                  value={search_term}
                  on_change={(e) => setSearchTerm (e.target.value)}
                  className="w - full pl - 10 pr - 4 py - 3 rounded - lg border border - gray - 300 focus:outline - none focus:ring - 2 focus:ring - blue - 500";
                />;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>);
}