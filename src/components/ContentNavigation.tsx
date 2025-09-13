import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { 
  Brain, 
  Lightbulb, 
  TrendingUp, 
  ChevronUp,
  Menu
} from 'lucide-react';

const ContentNavigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);

      // Determine active section based on scroll position
      const sections = [
        { id: 'ai-services-showcase', offset: 0 },
        { id: 'technology-innovations', offset: 800 },
        { id: 'success-stories-showcase', offset: 1600 }
      ];

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationItems = [
    {
      id: 'ai-services-showcase',
      label: 'AI Services',
      icon: <Brain className="h-4 w-4" />,
      badge: 'New'
    },
    {
      id: 'technology-innovations',
      label: 'Innovations',
      icon: <Lightbulb className="h-4 w-4" />,
      badge: 'Future'
    },
    {
      id: 'success-stories-showcase',
      label: 'Success Stories',
      icon: <TrendingUp className="h-4 w-4" />,
      badge: 'Results'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Quick Navigation */}
        <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center gap-2 mb-3">
            <Menu className="h-4 w-4" />
            <span className="text-sm font-semibold">Quick Navigation</span>
          </div>
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                variant={activeSection === item.id ? "secondary" : "ghost"}
                size="sm"
                className={`w-full justify-start text-left ${
                  activeSection === item.id 
                    ? "bg-white text-blue-600" 
                    : "text-white hover:bg-white/20"
                }`}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-xs">{item.label}</span>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ml-auto ${
                      activeSection === item.id 
                        ? "border-blue-600 text-blue-600" 
                        : "border-white text-white"
                    }`}
                  >
                    {item.badge}
                  </Badge>
                </div>
              </Button>
            ))}
          </div>
        </div>
        
        {/* Back to Top */}
        <div className="p-2 bg-gray-50">
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="sm"
            className="w-full text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <ChevronUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentNavigation;