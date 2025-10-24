import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Brain, Zap, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const microSaasServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Data insights & analytics' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Smart email campaigns' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis' },
    { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation' },
    { name: 'AI Voice Cloning Studio', url: '/ai-voice-cloning', description: 'Realistic voice synthesis' },
    { name: 'AI Music Composer', url: '/ai-music-composition', description: 'AI-generated music' },
    { name: 'AI Fashion Designer', url: '/ai-fashion-design', description: 'AI fashion design' },
    { name: 'AI Fitness Coach', url: '/ai-fitness-coach', description: 'Personalized fitness plans' },
    { name: 'AI 3D Generation Studio', url: '/ai-3d-generation', description: 'AI 3D content creation' }
  ];

  ];

  ];

  const additionalServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Smart email campaigns' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO automation' },
    { name: 'AI Financial Analyzer', url: '/ai-financial-analyzer', description: 'Financial insights' }
  ];

  ];

  ];

          {/* Company Info */}
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
                  +1 302 464 0950;
                  kleber@ziontechgroup.com;
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
          {/* Micro SAAS Services */}
              Micro SAAS;
                    <span>{service.name}</span>
              ))}
            
              View All Micro SAAS →

          {/* AI & IT Services */}
              AI & IT Services;
                <h4 className="text-white font-medium mb-2">AI Services</h4>
                        {service.name}
                  ))}
                <h4 className="text-white font-medium mb-2">IT Services</h4>
                        {service.name}
                  ))}
            
              View All Services →

          {/* Additional AI Services */}
              AI Tools;
                    <span>{service.name}</span>
              ))}

          {/* Company & Support */}
            <h3 className="text-cyan-400 font-semibold mb-4">Company<>
    </h3>
    <h4 className="text-white font-medium mb-2">
</>Company</h4>
                        {link.name}
                  ))}
                <h4 className="text-white font-medium mb-2">Support</h4>
                        {link.name}
                  ))}

        {/* Bottom Section */}
              © 2024 Zion Tech Group. All rights reserved.
                  {link.name}
              ))}
  );
};

