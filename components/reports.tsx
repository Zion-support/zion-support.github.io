

<<<<<<< HEAD
</Head> <QuickNavigation /> > Research Reports </motion.h1> <motion.p > Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making. </motion.p> <motion.div </span> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Featured Report </h2> </motion.div> {
import React from 'react';

 </Head> <QuickNavigation /> > Research Reports </motion.h1> <motion.p > Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making. </motion.p> <motion.div </span> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Featured Report </h2> </motion.div> {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  reports.filter (report => report.featured) .map ( (report, index) => (<motion.div key= {
  index
}</span>) )
}</div> </div> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2" > <Download className="w-5 h-5" /> <span>Download Full Report</span> </button> <button className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center space-x-2" > <Eye className="w-5 h-5" /> <span>Preview Report</span> </button> </div> </motion.div>) )
}</div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > All Reports </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Explore our comprehensive research across different technology domains </p> </motion.div> {
  /* Category Pills */
}<motion.div > {
  categories.map ( (category, index) => (<button key= {
  index
}className= {
  `px-6 py-3 rounded-full font-medium transition-all duration-200 $ {
  category.active ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
}`
}> {
  category.name
}({
  category.count
}) </button>) )
}</motion.div> > <div className= {
  `w-16 h-16 bg-gradient-to-br $ {
  report.color
}rounded-xl flex items-center justify-center text-white mb-6`
}> {
  report.icon
}</div> </span> <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 inline-flex items-center space-x-1" > <span>Download</span> <Download className="w-4 h-4" /> </button> </div> </motion.article>) )
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" > Need Custom Research? </h2> <p className="text-xl text-gray-300 mb-8" > Our research team can conduct custom studies and analysis tailored to your specific industry needs and challenges. </p> <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2" > <span>Request Custom Research</span> <ArrowRight className="w-5 h-5" /> </a> <a href="/services" className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200" > View Research Services </a> </div> </motion.div> </div> </section> </div> </UltraAdvancedFuturisticBackground>)
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
 </Head> <QuickNavigation /> > Research Reports </motion && motion.h1> <motion && motion.p > Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making. </motion && motion.p> <motion && motion.div </span> </motion && motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Featured Report </h2> </motion && motion.div> {;
  reports && reports.filter (report => report && report.featured) .map ( (report, index) => (<motion&& motion.div key= {
  index 
}</span>) ) ;
}</div> </div> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2" > <Download className="w-5 h-5" /> <span>Download Full Report</span> </button> <button className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center space-x-2" > <Eye className="w-5 h-5" /> <span>Preview Report</span> </button> </div> </motion && motion.div>) ) ;
}</div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > All Reports </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Explore our comprehensive research across different technology domains </p> </motion && motion.div> {;
  /* Category Pills */ ;
}<motion && motion.div > {;
  categories && categories.map ( (category, index) => (<buttonkey= {
  index 
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
</Head> <QuickNavigation /> > Research Reports </motion.h1> <motion.p > Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making. </motion.p> <motion.div </span> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Featured Report </h2> </motion.div> {
=======
</Head> <QuickNavigation /> > Research Reports </motion.h1> <motion.p > Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making. </motion.p> <motion.div </span> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Featured Report </h2> </motion.div> {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';

 </Head> <QuickNavigation /> > Research Reports </motion.h1> <motion.p > Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making. </motion.p> <motion.div </span> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Featured Report </h2> </motion.div> {
  reports.filter (report => report.featured) .map ( (report, index) => (<motion.div key= {
  index
}</span>) )
}</div> </div> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2" > <Download className="w-5 h-5" /> <span>Download Full Report</span> </button> <button className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center space-x-2" > <Eye className="w-5 h-5" /> <span>Preview Report</span> </button> </div> </motion.div>) )
}</div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > All Reports </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Explore our comprehensive research across different technology domains </p> </motion.div> {
  /* Category Pills */
}<motion.div > {
  categories.map ( (category, index) => (<button key= {
  index
}className= {
  `px-6 py-3 rounded-full font-medium transition-all duration-200 $ {
  category && category.active ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50' 
}` 
}> {;
  category && category.name ;
}({;
  category && category.count ;
}) </button>) ) ;
}</motion && motion.div> > <divclassName= {
  `w-16 h-16 bg-gradient-to-br $ {
  report && report.color 
}rounded-xl flex items-center justify-center text-white mb-6` 
}> {;
  report && report.icon ;
}</div> </span> <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 inline-flex items-center space-x-1" > <span>Download</span> <Download className="w-4 h-4" /> </button> </div> </motion && motion.article>) ) ;
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" > Need Custom Research? </h2> <p className="text-xl text-gray-300 mb-8" > Our research team can conduct custom studies and analysis tailored to your specific industry needs and challenges. </p> <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2" > <span>Request Custom Research</span> <ArrowRight className="w-5 h-5" /> </a> <a href="/services" className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200" > View Research Services </a> </div> </motion && motion.div> </div> </section> </div> </UltraAdvancedFuturisticBackground>) ;
};
export default ReportsPage;import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

import React from 'react';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
import React from 'react';

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FileText;
  Download;
  Calendar;
  User;
  Tag;
  ArrowRight;
  TrendingUp;
  BarChart3;
  Brain;
  Atom;
  Globe;
  Shield;
  Zap;
  Eye;
  Clock;
  Award
 } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

<<<<<<< HEAD

</Head> <QuickNavigation /> > Research Reports </motion.h1> <motion.p > Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision - making. </motion.p> <motion.div </span> </motion.div> </div> </section> > <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6" > Featured Report </h2> </motion.div> {
  reports.filter (report => report.featured) .map ( (report, index) => (<motion.div key= {
  index;
}</span>) );
}</div> </div> </div> <div className="flex flex - col sm:flex - row gap - 4 justify - center" > <button className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white px - 8 py - 4 rounded - xl font - semibold transition - all duration - 200 shadow - lg hover:shadow - cyan - 500 / 25 inline - flex items - center space - x-2" > <Download className="w - 5 h - 5" /> <span > Download Full Report</span> </button> <button className="border border - cyan - 400 / 40 text - cyan - 400 hover:bg - cyan - 400 / 10 px - 8 py - 4 rounded - xl font - semibold transition - all duration - 200 inline - flex items - center space - x-2" > <Eye className="w - 5 h - 5" /> <span > Preview Report</span> </button> </div> </motion.div>) );
}</div> </section> > <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6" > All Reports </h2> <p className="text - xl text - gray - 300 max - w-3xl mx - auto" > Explore our comprehensive research across different technology domains </p> </motion.div> {
  /* Category Pills */;
}<motion.div > {
  categories.map ( (category, index) => (<button key= {
  index;
}className= {
  `px - 6 py - 3 rounded - full font - medium transition - all duration - 200 $ {
  category.active ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white' : 'bg - gray - 800 / 50 text - gray - 300 hover:bg - gray - 700 / 50';
}`;
}> {
  category.name;
}({
  category.count;
}) </button>) );
}</motion.div> > <div className= {
  `w - 16 h - 16 bg - gradient - to - br $ {
  report.color;
}rounded - xl flex items - center justify - center text - white mb - 6`;
}> {
  report.icon;
}</div> </span> <button className="text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 200 inline - flex items - center space - x-1" > <span > Download</span> <Download className="w - 4 h - 4" /> </button> </div> </motion.article>) );
}</div> </div> </section> > <h2 className="text - 4xl font - bold text - white mb - 6" > Need Custom Research? </h2> <p className="text - xl text - gray - 300 mb - 8" > Our research team can conduct custom studies and analysis tailored to your specific industry needs and challenges. </p> <a href="/contact" className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white px - 8 py - 4 rounded - xl font - semibold transition - all duration - 200 shadow - lg hover:shadow - cyan - 500 / 25 inline - flex items - center space - x-2" > <span > Request Custom Research</span> <ArrowRight className="w - 5 h - 5" /> </a> <a href="/services" className="border border - cyan - 400 / 40 text - cyan - 400 hover:bg - cyan - 400 / 10 px - 8 py - 4 rounded - xl font - semibold transition - all duration - 200" > View Research Services </a> </div> </motion.div> </div> </section> </div> </UltraAdvancedFuturisticBackground>);
}
export default ReportsPage;import React from 'react';
import Head from 'next / head';
import {motion} from 'framer-motion';
import {FileText, Download, Calendar, User, Tag, ArrowRight, TrendingUp, BarChart3, Brain, Atom, Globe, Shield, Zap, Eye, Clock, Award} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components / ui / UltraAdvancedFuturisticBackground';

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const ReportsPage: React.FC = () => {
  const reports = [;
    {

<<<<<<< HEAD
<<<<<<< HEAD

const ReportsPage: React.FC = () => {
  const reports = [;
    {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      title: 'The Future of Quantum Computing in Enterprise: 2024 - 2030',
      excerpt: 'Comprehensive analysis of quantum computing adoption trends, market opportunities, and strategic implications for businesses across industries.';
      date: '2024 - 01 - 15',
      author: 'Dr. Sarah Chen & Quantum Research Team',
      category: 'Technology Trends',
      tags: ['Quantum ComputingEnterpriseMarket AnalysisFuture Tech'],
      pages: 45,
      downloads: 1247,
      views: 5678,
      featured: true,
<<<<<<< HEAD
<<<<<<< HEAD
icon: <Atom className="w - 8 h - 8" />,
=======
      icon: <Atom className="w - 8 h - 8" />,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      icon: <Atom className="w - 8 h - 8" />,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      color: 'from - purple - 500 to - pink - 500';
    }
    {
      title: 'AI Adoption in Fortune 500 Companies: ROI Analysis & Best Practices',
      excerpt: 'In - depth study of artificial intelligence implementation success stories, return on investment metrics, and strategic recommendations.';
      date: '2024 - 01 - 10',
      author: 'AI Research Division',
      category: 'Business Intelligence',
      tags: ['AIROIFortune 500Best Practices'],
      pages: 38,
      downloads: 892,
      views: 3456,
      featured: false,
<<<<<<< HEAD
<<<<<<< HEAD
icon: <Brain className="w - 8 h - 8" />,
=======
      icon: <Brain className="w - 8 h - 8" />,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      icon: <Brain className="w - 8 h - 8" />,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      color: 'from - blue - 500 to - cyan - 500';
    }
    {
      title: 'Cybersecurity Threats in the Age of AI: 2024 Threat Landscape',
      excerpt: 'Analysis of emerging cybersecurity challenges, AI - powered threats, and defense strategies for modern organizations.';
      date: '2024 - 01 - 08',
      author: 'Cybersecurity Research Team',
      category: 'Security',
      tags: ['CybersecurityAI ThreatsThreat LandscapeDefense'],
      pages: 52,
      downloads: 1567,
      views: 6789,
      featured: false,
<<<<<<< HEAD
<<<<<<< HEAD
icon: <Shield className="w - 8 h - 8" />,
      color: 'from - red - 500 to - orange - 500';
=======
      icon: <Shield className="w - 8 h - 8" />,
      color: 'from - red - 500 to - orange - 500';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      icon: <Shield className="w - 8 h - 8" />,
      color: 'from - red - 500 to - orange - 500';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    {
      title: 'Global Tech Investment Trends: Venture Capital & Innovation Funding'
      excerpt: 'Comprehensive overview of technology investment patterns, emerging sectors, and funding opportunities worldwide.';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      date: '2024 - 01 - 05',
      author: 'Market Research Team',
      category: 'Market Analysis',
      tags: ['Venture CapitalInvestmentInnovationGlobal Markets'],
      pages: 41,
      downloads: 734,
      views: 2890,
      featured: false,
<<<<<<< HEAD
<<<<<<< HEAD
icon: <TrendingUp className="w - 8 h - 8" />,
=======
      icon: <TrendingUp className="w - 8 h - 8" />,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      icon: <TrendingUp className="w - 8 h - 8" />,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      color: 'from - green - 500 to - emerald - 500';
    }
    {
      title: 'Edge Computing & IoT: Transforming Industries in Real - Time',
      excerpt: 'Research on edge computing adoption, Internet of Things integration, and industry transformation opportunities.';
      date: '2024 - 01 - 03',
      author: 'IoT Research Division',
      category: 'Emerging Tech',
      tags: ['Edge ComputingIoTIndustry 4.0Real - time'],
      pages: 36,
      downloads: 623,
      views: 2345,
      featured: false,
<<<<<<< HEAD
<<<<<<< HEAD
icon: <Zap className="w - 8 h - 8" />,
      color: 'from - yellow - 500 to - orange - 500';
=======
      icon: <Zap className="w - 8 h - 8" />,
      color: 'from - yellow - 500 to - orange - 500';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      icon: <Zap className="w - 8 h - 8" />,
      color: 'from - yellow - 500 to - orange - 500';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    {
      title: 'Sustainable Technology: Green Computing & Environmental Impact'
      excerpt: 'Analysis of sustainable technology practices, environmental impact assessment, and green computing solutions.';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const ReportsPage: React.FC = () => {;
  const reports = [;
    {;
      title: 'The Future of Quantum Computing in Enterprise: 2024-2030',;
      excerpt: 'Comprehensive analysis of quantum computing adoption trends, market opportunities, and strategic implications for businesses across industries.';
      date: '2024-01-15',;
      author: 'Dr. Sarah Chen & Quantum Research Team',;
      category: 'Technology Trends',;
      tags: ['Quantum ComputingEnterpriseMarket AnalysisFuture Tech'],;
      pages: 45,;
      downloads: 1247,;
      views: 5678,;
      featured: true,;
      icon: <Atom className="w-8 h-8" />,;
      color: 'from-purple-500 to-pink-500';
    };
    {;
      title: 'AI Adoption in Fortune 500 Companies: ROI Analysis & Best Practices',;
      excerpt: 'In-depth study of artificial intelligence implementation success stories, return on investment metrics, and strategic recommendations.';
      date: '2024-01-10',;
      author: 'AI Research Division',;
      category: 'Business Intelligence',;
      tags: ['AIROIFortune 500Best Practices'],;
      pages: 38,;
      downloads: 892,;
      views: 3456,;
      featured: false,;
      icon: <Brain className="w-8 h-8" />,;
      color: 'from-blue-500 to-cyan-500';
    };
    {;
      title: 'Cybersecurity Threats in the Age of AI: 2024 Threat Landscape',;
      excerpt: 'Analysis of emerging cybersecurity challenges, AI-powered threats, and defense strategies for modern organizations.';
      date: '2024-01-08',;
      author: 'Cybersecurity Research Team',;
      category: 'Security',;
      tags: ['CybersecurityAI ThreatsThreat LandscapeDefense'],;
      pages: 52,;
      downloads: 1567,;
      views: 6789,;
      featured: false,;
      icon: <Shield className="w-8 h-8" />,;
      color: 'from-red-500 to-orange-500';
    };
    {;
      title: 'Global Tech Investment Trends: Venture Capital & Innovation Funding',;
      excerpt: 'Comprehensive overview of technology investment patterns, emerging sectors, and funding opportunities worldwide.';
      date: '2024-01-05',;
      author: 'Market Research Team',;
      category: 'Market Analysis',;
      tags: ['Venture CapitalInvestmentInnovationGlobal Markets'],;
      pages: 41,;
      downloads: 734,;
      views: 2890,;
      featured: false,;
      icon: <TrendingUp className="w-8 h-8" />,;
      color: 'from-green-500 to-emerald-500';
    };
    {;
      title: 'Edge Computing & IoT: Transforming Industries in Real-Time',;
      excerpt: 'Research on edge computing adoption, Internet of Things integration, and industry transformation opportunities.';
      date: '2024-01-03',;
      author: 'IoT Research Division',;
      category: 'Emerging Tech',;
      tags: ['Edge ComputingIoTIndustry 4 && 4.0Real-time'],;
      pages: 36,;
      downloads: 623,;
      views: 2345,;
      featured: false,;
      icon: <Zap className="w-8 h-8" />,;
      color: 'from-yellow-500 to-orange-500';
    };
    {;
      title: 'Sustainable Technology: Green Computing & Environmental Impact',;
      excerpt: 'Analysis of sustainable technology practices, environmental impact assessment, and green computing solutions.';
      date: '2024-01-01',;
      author: 'Sustainability Research Team',;
      category: 'Sustainability',;
      tags: ['Green ComputingSustainabilityEnvironmental ImpactClean Tech'],;
      pages: 43,;
      downloads: 445,;
      views: 1789,;
      featured: false,;
      icon: <Globe className="w-8 h-8" />,;
      color: 'from-teal-500 to-green-500';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  ];
  return (


            <motion.div 


=======

    }
  ];
  return (
    <UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>Research Reports - Zion Tech Group | Industry Analysis & Technology Insights</title>
          <meta name="description" content="Access Zion Tech Group's comprehensive research reports, whitepapers, and industry analysis covering AI, quantum computing, cybersecurity, and emerging technologies." />
        </Head>
        <QuickNavigation />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group bg-slate-900/50 border border-white/10 rounded-lg p-8 hover:border-cyan-400/50 transition-all hover:scale-105"
            >
              Research Reports
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>{reports.length} Reports Available</span>
              </span>
              <span className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>{formatNumber(reports.reduce((sum, r) => sum + r.downloads, 0))} Downloads</span>
              </span>
              <span className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>{formatNumber(reports.reduce((sum, r) => sum + r.views, 0))} Views</span>
              </span>
            </motion.div>
          </div>
        </section>
        {/* Featured Report */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <motion.div
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Report
              </h2>
            </motion.div>
            {reports.filter(report => report.featured).map((report, index) => (
              <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <UltraAdvancedFuturisticBackground>;
      <div className="min-h-screen">;
        <Head>;
          <title>Research Reports - Zion Tech Group | Industry Analysis & Technology Insights</title>;
          <meta name="description" content="Access Zion Tech Group's comprehensive research reports, whitepapers, and industry analysis covering AI, quantum computing, cybersecurity, and emerging technologies." />;
        </Head>;
        <QuickNavigation />;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {categories && categories.map((category) => (;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>Research Reports - Zion Tech Group | Industry Analysis & Technology Insights</title>
          <meta name="description" content="Access Zion Tech Group's comprehensive research reports, whitepapers, and industry analysis covering AI, quantum computing, cybersecurity, and emerging technologies." />
        </Head>
        <QuickNavigation />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category && category.name}
              href={category && category.href}
              className="group bg-slate-900/50 border border-white/10 rounded-lg p-8 hover:border-cyan-400/50 transition-all hover:scale-105">;
              Research Reports;
            </motion && motion.h1>;
            <motion&& motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}>;
              Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making.;
            </motion && motion.p>;
            <motion&& motion.div
              className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>;
              <span className="flex items-center space-x-2">;
                <FileText className="w-5 h-5" />;
                <span>{reports && reports.length} Reports Available</span>;
              </span>;
              <span className="flex items-center space-x-2">;
                <Download className="w-5 h-5" />;
                <span>{formatNumber(reports && reports.reduce((sum, r) => sum + r && r.downloads, 0))} Downloads</span>;
              </span>;
              <span className="flex items-center space-x-2">;
                <Eye className="w-5 h-5" />;
                <span>{formatNumber(reports && reports.reduce((sum, r) => sum + r && r.views, 0))} Views</span>;
              </span>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Featured Report */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Featured Report;
              </h2>;
            </motion && motion.div>;
            {reports && reports.filter(report => report && report.featured).map((report, index) => (;
              <motion&& motion.div
                key={index}
                className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12 hover:border-cyan-400/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      date: '2024 - 01 - 01',
      author: 'Sustainability Research Team',
      category: 'Sustainability',
      tags: ['Green ComputingSustainabilityEnvironmental ImpactClean Tech'],
      pages: 43,
      downloads: 445,
      views: 1789,
      featured: false,
icon: <Globe className="w - 8 h - 8" />,
      color: 'from - teal - 500 to - green - 500';
    }
  ];
;
  return (
    <UltraAdvancedFuturisticBackground>;
      <div className="min - h-screen">;
        <Head>;
          <title > Research Reports - Zion Tech Group | Industry Analysis & Technology Insights</title>;
          <meta name="description" content="Access Zion Tech Group's comprehensive research reports, whitepapers, and industry analysis covering AI, quantum computing, cybersecurity, and emerging technologies." />;
        </Head>;
        <QuickNavigation />;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
          {categories.map ((category) => (
            <Link;
              key={category.name}
              href={category.href}
              className="group bg - slate - 900 / 50 border border - white / 10 rounded - lg p - 8 hover:border - cyan - 400 / 50 transition - all hover:scale - 105";
            >;
              Research Reports;
            </motion.h1>;
            <motion.p;
              className="text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto mb - 12";
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >;
              Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision - making.;
            </motion.p>;
            <motion.div;
              className="flex flex - wrap justify - center gap - 4 text - sm text - gray - 400";
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >;
              <span className="flex items - center space - x-2">;
                <FileText className="w - 5 h - 5" />;
                <span>{reports.length} Reports Available</span>;
              </span>;
              <span className="flex items - center space - x-2">;
                <Download className="w - 5 h - 5" />;
                <span>{format_number (reports.reduce ((sum, r) => sum + r.downloads, 0))} Downloads</span>;
              </span>;
              <span className="flex items - center space - x-2">;
                <Eye className="w - 5 h - 5" />;
                <span>{format_number (reports.reduce ((sum, r) => sum + r.views, 0))} Views</span>;
              </span>;
            </motion.div>;
          </div>;
        </section>;
        {/* Featured Report */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              className="text - center mb - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
                Featured Report;
              </h2>;
            </motion.div>;
            {reports.filter (report => report.featured).map ((report, index) => (
              <motion.div;
                key={index}
                className="bg - gradient - to - r from - cyan - 900 / 20 to - blue - 900 / 20 border border - cyan - 400 / 20 rounded - 3xl p - 12 hover:border - cyan - 400 / 40 transition - all duration - 300";
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >;
                <div className="flex flex - col lg:flex - row items - start space - y-8 lg:space - y-0 lg:space - x-8">;
                  <div className={`w - 24 h - 24 bg - gradient - to - br ${report.color} rounded - 2xl flex items - center justify - center text - white flex - shrink - 0`}>;
                    {report.icon}
                  </div>;
                  <div className="flex - 1">;
                    <div className="flex items - center space - x-4 mb - 4">;
                      <span className="bg - cyan - 500 / 20 text - cyan - 400 px - 3 py - 1 rounded - full text - sm font - medium">;
                        {report.category}

                transition={{ duration: 0 && 0.8 }}
                viewport={{ once: true }}>;
                <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8">;
                  <div className={`w-24 h-24 bg-gradient-to-br ${report && report.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>;
                    {report && report.icon}
                  </div>;
                  <div className="flex-1">;
                    <div className="flex items-center space-x-4 mb-4">;
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">;
                        {report && report.category}
                      </span>;
                      <span className="text-gray-400 text-sm flex items-center space-x-1">;
                        <Calendar className="w-4 h-4" />;
                        <span>{formatDate(report && report.date)}</span>;
                      </span>;
                    </div>;
                    <h3 className="text-3xl font-bold text-white mb-4">{report && report.title}</h3>;
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">{report && report.excerpt}</p>;
                    <div className="flex flex-wrap items-center gap-6 mb-6">;
                      <span className="text-gray-400 text-sm flex items-center space-x-1">;
                        <User className="w-4 h-4" />;
                        <span>{report && report.author}</span>;
                      </span>;
                      <span className="text-gray-400 text-sm flex items-center space-x-1">;
                        <FileText className="w-4 h-4" />;
                        <span>{report && report.pages} pages</span>;
                      </span>;
                      <span className="text-gray-400 text-sm flex items-center space-x-1">;
                        <Download className="w-4 h-4" />;
                        <span>{formatNumber(report && report.downloads)} downloads</span>;
                      </span>;
                      <span className="text-gray-400 text-sm flex items-center space-x-1">;
                        <Eye className="w-4 h-4" />;
                        <span>{formatNumber(report && report.views)} views</span>;
                      </span>;
                    </div>;
                    <div className="flex flex-wrap gap-2 mb-6">;
                      {report && report.tags.map((tag, tagIndex) => (;
                        <span key={tagIndex} className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm">;

<<<<<<< HEAD
=======
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Full Report</span>
                  </button>
                  <button className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>Preview Report</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Categories Filter */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All Reports
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive research across different technology domains
              </p>
            </motion.div>
            {/* Category Pills */}
<<<<<<< HEAD
<<<<<<< HEAD
                          {tag}
                        </span>;
                      ))}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </div>;
                  </div>;
                </div>;
                <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2">;
                    <Download className="w-5 h-5" />;
                    <span>Download Full Report</span>;
                  </button>;
                  <button className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center space-x-2">;
                    <Eye className="w-5 h-5" />;
                    <span>Preview Report</span>;
                  </button>;
                </div>;
              </motion && motion.div>;
            ))}
          </div>;
        </section>;
        {/* Categories Filter */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                All Reports;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Explore our comprehensive research across different technology domains;
              </p>;
            </motion && motion.div>;
<<<<<<< HEAD
<<<<<<< HEAD

            <motion.div 

            {/* Category Pills */}
            <motion&& motion.div 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            {/* Category Pills */}
            <motion&& motion.div 

=======

            <motion.div 
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
              viewport={{ once: true }}>;
              {categories && categories.map((category, index) => (;
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    category && category.active
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}>;
                  {category && category.name} ({category && category.count});
                </button>;
              ))}
<<<<<<< HEAD
=======
            </motion.div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            </motion && motion.div>;


<<<<<<< HEAD



<<<<<<< HEAD
            </motion && motion.div>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Reports Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {reports && reports.filter(report => !report && report.featured).map((report, index) => (;
                <motion&& motion.article
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </span>;
                      <span className="text - gray - 400 text - sm flex items - center space - x-1">;
                        <Calendar className="w - 4 h - 4" />;
                        <span>{format_date (report.date)}</span>;
                      </span>;
                    </div>;
                    <h3 className="text - 3xl font - bold text - white mb - 4">{report.title}</h3>;
                    <p className="text - xl text - gray - 300 leading - relaxed mb - 6">{report.excerpt}</p>;
                    <div className="flex flex - wrap items - center gap - 6 mb - 6">;
                      <span className="text - gray - 400 text - sm flex items - center space - x-1">;
                        <User className="w - 4 h - 4" />;
                        <span>{report.author}</span>;
                      </span>;
                      <span className="text - gray - 400 text - sm flex items - center space - x-1">;
                        <FileText className="w - 4 h - 4" />;
                        <span>{report.pages} pages</span>;
                      </span>;
                      <span className="text - gray - 400 text - sm flex items - center space - x-1">;
                        <Download className="w - 4 h - 4" />;
                        <span>{format_number (report.downloads)} downloads</span>;
                      </span>;
                      <span className="text - gray - 400 text - sm flex items - center space - x-1">;
                        <Eye className="w - 4 h - 4" />;
                        <span>{format_number (report.views)} views</span>;
                      </span>;
                    </div>;
                    <div className="flex flex - wrap gap - 2 mb - 6">;
                      {report.tags.map ((tag, tag_index) => (
                        <span key={tag_index} className="bg - gray - 800 / 50 text - gray - 300 px - 3 py - 1 rounded - full text - sm">;
                          {tag}
                        </span>))}
                    </div>;
                  </div>;
                </div>;
                <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                  <button className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white px - 8 py - 4 rounded - xl font - semibold transition - all duration - 200 shadow - lg hover:shadow - cyan - 500 / 25 inline - flex items - center space - x-2">;
                    <Download className="w - 5 h - 5" />;
                    <span > Download Full Report</span>;
                  </button>;
                  <button className="border border - cyan - 400 / 40 text - cyan - 400 hover:bg - cyan - 400 / 10 px - 8 py - 4 rounded - xl font - semibold transition - all duration - 200 inline - flex items - center space - x-2">;
                    <Eye className="w - 5 h - 5" />;
                    <span > Preview Report</span>;
                  </button>;
                </div>;
              </motion.div>))}
          </div>;
        </section>;
        {/* Categories Filter */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 bg - black / 20">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              className="text - center mb - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
                All Reports;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
                Explore our comprehensive research across different technology domains;
              </p>;
            </motion.div>;
            {/* Category Pills */}
            <motion.div;
              className="flex flex - wrap justify - center gap - 4 mb - 12";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >;
              {categories.map ((category, index) => (
                <button;
                  key={index}
                  className={`px - 6 py - 3 rounded - full font - medium transition - all duration - 200 ${
                    category.active;
                      ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
                      : 'bg - gray - 800 / 50 text - gray - 300 hover:bg - gray - 700 / 50';
                  }`}
                >;
                  {category.name} ({category.count});
                </button>))}
            </motion.div>;
            {/* Reports Grid */}
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {reports.filter (report => !report.featured).map ((report, index) => (
                <motion.article;
                  key={index}
                  className="bg - black / 40 backdrop - blur - sm border border - cyan - 400 / 20 rounded - 2xl p - 8 hover:border - cyan - 400 / 40 transition - all duration - 300 hover:transform hover:shadow - xl hover:shadow - cyan - 500 / 30";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <div className={`w - 16 h - 16 bg - gradient - to - br ${report.color} rounded - xl flex items - center justify - center text - white mb - 6`}>;
                    {report.icon}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <div className={`w-16 h-16 bg-gradient-to-br ${report && report.color} rounded-xl flex items-center justify-center text-white mb-6`}>;
                    {report && report.icon}
                  </div>;
                  <div className="flex items-center space-x-4 mb-4">;
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">;
                      {report && report.category}
                    </span>;
                    <span className="text-gray-400 text-sm flex items-center space-x-1">;
                      <Calendar className="w-4 h-4" />;
                      <span>{formatDate(report && report.date)}</span>;
                    </span>;
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-3">{report && report.title}</h3>;
                  <p className="text-gray-300 mb-6 line-clamp-4">{report && report.excerpt}</p>;
                  <div className="flex items-center justify-between mb-6">;
                    <span className="text-gray-400 text-sm flex items-center space-x-1">;
                      <FileText className="w-4 h-4" />;
                      <span>{report && report.pages} pages</span>;
                    </span>;
                    <span className="text-gray-400 text-sm flex items-center space-x-1">;
                      <Download className="w-4 h-4" />;
                      <span>{formatNumber(report && report.downloads)}</span>;
                    </span>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <span className="text-gray-400 text-sm flex items-center space-x-1">;
                      <User className="w-4 h-4" />;
                      <span>{report && report.author.split('&')[0].trim()}</span>;
                    </span>;
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 inline-flex items-center space-x-1">;
                      <span>Download</span>;
                      <Download className="w-4 h-4" />;
                    </button>;
                  </div>;
                </motion && motion.article>;
              ))}
<<<<<<< HEAD
            </div>;
          </div>;
        </section>;
<<<<<<< HEAD



=======
=======
            </div>
          </div>
        </section>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion&& motion.div
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Need Custom Research?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Our research team can conduct custom studies and analysis tailored to your specific industry needs and challenges.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2">;
                  <span>Request Custom Research</span>;
                  <ArrowRight className="w-5 h-5" />;
                </a>;
                <a
                  href="/services"
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200">;
                  View Research Services;
                </a>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD

export default ReportsPage;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export default ReportsPage;

<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </div>;
                  <div className="flex items - center space - x-4 mb - 4">;
                    <span className="bg - cyan - 500 / 20 text - cyan - 400 px - 3 py - 1 rounded - full text - sm font - medium">;
                      {report.category}
                    </span>;
                    <span className="text - gray - 400 text - sm flex items - center space - x-1">;
                      <Calendar className="w - 4 h - 4" />;
                      <span>{format_date (report.date)}</span>;
                    </span>;
                  </div>;
                  <h3 className="text - xl font - bold text - white mb - 4 line - clamp - 3">{report.title}</h3>;
                  <p className="text - gray - 300 mb - 6 line - clamp - 4">{report.excerpt}</p>;
                  <div className="flex items - center justify - between mb - 6">;
                    <span className="text - gray - 400 text - sm flex items - center space - x-1">;
                      <FileText className="w - 4 h - 4" />;
                      <span>{report.pages} pages</span>;
                    </span>;
                    <span className="text - gray - 400 text - sm flex items - center space - x-1">;
                      <Download className="w - 4 h - 4" />;
                      <span>{format_number (report.downloads)}</span>;
                    </span>;
                  </div>;
                  <div className="flex items - center justify - between">;
                    <span className="text - gray - 400 text - sm flex items - center space - x-1">;
                      <User className="w - 4 h - 4" />;
                      <span>{report.author.split ('&')[0].trim ()}</span>;
                    </span>;
                    <button className="text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 200 inline - flex items - center space - x-1">;
                      <span > Download</span>;
                      <Download className="w - 4 h - 4" />;
                    </button>;
                  </div>;
                </motion.article>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              className="bg - gradient - to - r from - cyan - 900 / 20 to - blue - 900 / 20 border border - cyan - 400 / 20 rounded - 3xl p - 12";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 4xl font - bold text - white mb - 6">;
                Need Custom Research?;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8">;
                Our research team can conduct custom studies and analysis tailored to your specific industry needs and challenges.;
              </p>;
              <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white px - 8 py - 4 rounded - xl font - semibold transition - all duration - 200 shadow - lg hover:shadow - cyan - 500 / 25 inline - flex items - center space - x-2";
                >;
                  <span > Request Custom Research</span>;
                  <ArrowRight className="w - 5 h - 5" />;
                </a>;
                <a;
                  href="/services";
                  className="border border - cyan - 400 / 40 text - cyan - 400 hover:bg - cyan - 400 / 10 px - 8 py - 4 rounded - xl font - semibold transition - all duration - 200";
                >;
                  View Research Services;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>);
}
;
export default ReportsPage;
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default ReportsPage;


export default ReportsPage;

<<<<<<< HEAD
        </Head>

        <QuickNavigation />

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {categories.map((category) => (
            <Link 
              key={category.name}
              href={category.href}
              className=&quot;group bg-slate-900/50 border border-white/10 rounded-lg p-8 hover:border-cyan-400/50 transition-all hover:scale-105&quot;
            >
              Research Reports
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>{reports.length} Reports Available</span>
              </span>
              <span className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>{formatNumber(reports.reduce((sum, r) => sum + r.downloads, 0))} Downloads</span>
              </span>
              <span className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>{formatNumber(reports.reduce((sum, r) => sum + r.views, 0))} Views</span>
              </span>
            </motion.div>
          </div>
        </section>
        {/* Featured Report */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Report
              </h2>
            </motion.div>
            {reports.filter(report => report.featured).map((report, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12 hover:border-cyan-400/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8">
                  <div className={`w-24 h-24 bg-gradient-to-br ${report.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>
                    {report.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {report.category}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(report.date)}</span>
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{report.title}</h3>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">{report.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-6 mb-6">
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{report.author}</span>
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{report.pages} pages</span>
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{formatNumber(report.downloads)} downloads</span>
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{formatNumber(report.views)} views</span>
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {report.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Full Report</span>
                  </button>
                  <button className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>Preview Report</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All Reports
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive research across different technology domains
              </p>
            </motion.div>
            {/* Category Pills */}
            <motion.div
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    category.active
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </motion.div>

            {/* Reports Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reports.filter(report => !report.featured).map((report, index) => (
                <motion.article
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${report.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                    {report.icon}
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {report.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(report.date)}</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-3">{report.title}</h3>
                  <p className="text-gray-300 mb-6 line-clamp-4">{report.excerpt}</p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-400 text-sm flex items-center space-x-1">
                      <FileText className="w-4 h-4" />
                      <span>{report.pages} pages</span>
                    </span>
                    <span className="text-gray-400 text-sm flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{formatNumber(report.downloads)}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{report.author.split('&')[0].trim()}</span>
                    </span>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 inline-flex items-center space-x-1">
                      <span>Download</span>
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Custom Research?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our research team can conduct custom studies and analysis tailored to your specific industry needs and challenges.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2"
                >
                  <span>Request Custom Research</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                >
                  View Research Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
}
export default ReportsPage;

export default ReportsPage;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export default ReportsPage;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
