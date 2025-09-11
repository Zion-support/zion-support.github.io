import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Code, BookOpen, Search, ArrowRight, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';
const DocsPage: NextPage = () => {;
  const docCategories = [;
    {;
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions',
      icon: <BookOpen className="w-6 h-6" />,
      docs: [;
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', type: 'Guide' },
        { title: 'Quick Start Tutorial', description: 'Get up and running in 5 minutes', type: 'Tutorial' },
        { title: 'Configuration', description: 'Basic configuration options', type: 'Reference' }
      ];
},
    {;
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: <Code className="w-6 h-6" />,
      docs: [;
        { title: 'REST API', description: 'Complete REST API documentation', type: 'API' },
        { title: 'GraphQL API', description: 'GraphQL schema and queries', type: 'API' },
        { title: 'Webhooks', description: 'Webhook configuration and events', type: 'Reference' }
      ];
},
    {;
      title: 'SDKs & Libraries',
      description: 'Client libraries and SDKs for various languages',
      icon: <FileText className="w-6 h-6" />,
      docs: [;
        { title: 'JavaScript SDK', description: 'Node.js and browser SDK', type: 'SDK' },
        { title: 'Python SDK', description: 'Python client library', type: 'SDK' },
        { title: 'React Components', description: 'Ready-to-use React components', type: 'Library' }
      ];
},
    {;
      title: 'Guides & Tutorials',
      description: 'In-depth guides and best practices',
      icon: <BookOpen className="w-6 h-6" />,
      docs: [;
        { title: 'Authentication', description: 'User authentication and authorization', type: 'Guide' },
        { title: 'Data Management', description: 'Working with data and databases', type: 'Tutorial' },