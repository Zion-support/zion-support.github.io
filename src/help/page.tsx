import {HelpCircle, Search, Phone, Mail, MessageSquare, BookOpen, Video, Download, CheckCircle, ArrowRight, Users, BookOpen, HelpCircle, MessageSquare, Video, Mail, Users 'use, client'; import, React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const HelpPage: React.FC = () => {
  return (
    <div>Coming Soon</div>
  );
};
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');
const categories = [
    {
  // TODO: Add content;
};
  id: 'getting-started',
      name: 'Getting Started',
      icon: BookOpen,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },











    }
  ];
  const helpArticles = {
  // TODO: Add content;
}
    'getting-started': [;
  title: 'Setting Up Your First Dashboard',
        description: 'Step-by-step instructions for creating and customizing your analytics dashboard',
        readTime: '3 min read',



        difficulty: 'Intermediate',






      count: '50+ videos',








      responseTime: 'Within 4 hours',





                
          
          
          
          
          
          
          
          
          <MessageSquare className="w-5 h-5 mr-2" />
// Contact Support
              
          
          
          
          
          
          
          
          ;
          </a>
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hove,text-slate-900 transition-all duration-300 inline-flex items-center"
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover: bg-purple-400 hove,text-slate-900 transition-all duration-300 inline-flex items-center"
                <Mail className="w-4 h-4 mr-2" />
                Email Us;
      <Footer />
    </div>
  );
};

export default AiAnalyticsDashboardPage;