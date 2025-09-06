<<<<<<< HEAD
<<<<<<< HEAD
=======

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
<<<<<<< HEAD
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
>>>>>>> origin/automation-improvements-final
import {
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
      {
<<<<<<< HEAD
<<<<<<< HEAD
        title: "AI Best Practices",
        description: "Tips and best practices for AI development",
        readTime: "6 min read",
        type: "Best Practice",
      },
    ],
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description: "Cloud infrastructure and deployment solutions.",
=======
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
>>>>>>> origin/automation-improvements-final
    icon: Cloud,
    color: "blue",
=======
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
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
    articles: [
      {
        title: "Cloud Migration Guide"
        description: "Step-by-step guide to migrating to the cloud"
        readTime: "12 min read"
        type: "Guide"
      }
      {
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Cloud Security",
        description: "Best practices for securing your cloud infrastructure",
        readTime: "9 min read",
        type: "Security",
      },
    ],
  },
=======
        title: 'Cloud Security',
        description: 'Best practices for securing your cloud infrastructure',
        readTime: '9 min read',
        type: 'Security'
      }
    ]
  }
>>>>>>> origin/automation-improvements-final
=======
        title: "Cloud Security"
        description: "Best practices for securing your cloud infrastructure"
        readTime: "9 min read"
        type: "Security"
      }
    ]
  }
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
];
const helpCategories = [
  {
<<<<<<< HEAD
    title: "Getting Started",
    description: "New to our platform? Start here.",
    icon: BookOpen,
<<<<<<< HEAD
    color: "blue",
    articles: helpArticles,
  },
=======
    title: "Getting Started"
    description: "New to our platform? Start here."
    icon: BookOpen
    color: "blue"
    articles: helpArticles
  }
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
];
export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("");
=======
    color: 'blue',
    articles: helpArticles
  }
];

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
>>>>>>> origin/automation-improvements-final
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const toggleCategory = (index: number) => {
=======
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
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    setExpandedCategory(expandedCategory === index ? null : index);
<<<<<<< HEAD
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
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
  const filteredCategories = helpCategories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);
>>>>>>> origin/automation-improvements-final
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
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
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
=======
        />;
      </Head>;

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
}