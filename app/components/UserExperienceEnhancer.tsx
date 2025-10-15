import React, { useEffect } from 'react';
import { Heart, Star, ThumbsUp, MessageCircle } from 'lucide-react';

interface UserExperienceEnhancerProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({
  children,
  className = "",
  title,
  description
}) => {
  useEffect(() => {
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add focus management
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const uxFeatures = [
    { name: 'Accessibility', icon: Heart, status: 'Enhanced' },
    { name: 'Performance', icon: Star, status: 'Optimized' },
    { name: 'Usability', icon: ThumbsUp, status: 'Improved' },
    { name: 'Feedback', icon: MessageCircle, status: 'Active' }
  ];

  return (
    <div className={`enhanced-component bg-slate-800 rounded-lg p-6 ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>}
      {description && <p className="text-gray-300 mb-4">{description}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {uxFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="bg-slate-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{feature.name}</p>
                  <p className="text-lg font-semibold text-blue-400">{feature.status}</p>
                </div>
                <Icon className="w-8 h-8 text-blue-500" />
              </div>
            </div>
          );
        })}
      </div>
      
      {children}
    </div>
  );
};

export default UserExperienceEnhancer;
