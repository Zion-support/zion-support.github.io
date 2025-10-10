'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MessageCircle, Bot, Zap, Shield, BarChart, Clock, Users, CheckCircle, Star, ArrowRight, Brain, Target, Activity, TrendingUp, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Phone, Mail, MapPin } from 'lucide-react';

      icon: Bot,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent chatbots that understand context, handle complex queries, and provide instant responses 24/7.',
      benefits: ['99.9% uptime', 'Instant responses', 'Multi-language support', 'Context understanding']
    },
    {
      icon: MessageCircle,
      title: 'Omnichannel Communication',
      description: 'Seamless integration across email, chat, phone, and social media platforms.',
      benefits: ['Unified experience', 'Context preservation', 'Cross-platform sync', 'Multi-channel support']
    },
    {
      icon: Zap,
      title: 'Intelligent Automation',
      description: 'Automated ticket routing, priority assignment, and resolution suggestions based on AI analysis.',
      benefits: ['Faster resolution', 'Reduced workload', 'Smart prioritization', 'Process automation']
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with data encryption and compliance with industry standards.',
      benefits: ['Data protection', 'Compliance ready', 'Secure communication', 'Privacy protection']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Real-time analytics and performance metrics to optimize customer support operations.',
      benefits: ['Performance tracking', 'Data-driven insights', 'Continuous improvement', 'ROI measurement']
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless handoff between AI and human agents for complex issues requiring human touch.',
    }
  ];

  const benefits = [
    'Increase customer satisfaction by 95%',
    'Reduce response time by 90%',
    'Lower support costs by 70%',
    'Handle 10x more inquiries',
    'Enable 24/7 support',
    'Improve resolution rates',
    'Scale support operations',
    'Enhance customer experience']
  ];

  const useCases = [
    {
    }]
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support - Zion Tech Group</title>
        <meta name="description" content="Transform your customer support with our AI Customer Support solutions. Intelligent automation, omnichannel communication, and human-AI collaboration for better customer experience." />
        <meta name="keywords" content="AI customer support, customer service automation, omnichannel support, AI chatbots, customer experience, support AI" />
      </Helmet>

            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer support with our AI Customer Support solutions. Intelligent automation, 
              omnichannel communication, and human-AI collaboration for better customer experience.
            </p>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

                </div>
              ))}
            </div>
          </div>
        </section>

                </div>
              ))}
            </div>
          </div>
        </section>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AICustomerSupportPage;
