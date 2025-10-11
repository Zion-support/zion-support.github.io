'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Eye, Target, BarChart, Lock, Clock, Users, ArrowRight, Star, TrendingUp, FileText, DollarSign, CheckCircle, Phone, Mail, MapPin, Database, Settings, Calendar, Award, MessageSquare, CheckSquare, Cpu, Brain, Globe, AlertTriangle, Activity } from 'lucide-react';

const AICyberDefenseMatrix: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => 
    setIsVisible(true);
  }, []);

  const features = const features = const features = [
    {
      icon: Shield,
    },
    {
      icon: Zap,
      title: 'Zero-Trust Architecture',
      description: 'Comprehensive zero-trust security framework with continuous verification',
      benefits: [''Continuous verification', 'Identity-based access', 'Micro-segmentation'']
    },
    {
      icon: Eye,
      title: 'Behavioral Analytics',
      description: 'AI-powered behavioral analysis to detect anomalous activities and insider threats',
      benefits: [''Anomaly detection', 'Insider threat prevention', 'User behavior analysis'']
    },
    {
      icon: Target,
      title: 'Automated Incident Response',
      description: 'Intelligent incident response with automated containment and remediation',
      benefits: [''Automated containment', 'Rapid response', 'Minimal downtime'']
    },
  ];
  const pricingPlans = const pricingPlans = const pricingPlans = [
    {
      name: 'Essential',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic threat detection',
        'Email security',
        'Firewall management',
        'Email support',
        'Basic reporting',
        'Standard monitoring'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for mid-size companies and enterprises',
      features: [
        'Advanced threat detection',
        'Zero-trust architecture',
        'Behavioral analytics',
        'Priority support',
        'Advanced reporting',
        'Real-time monitoring',
        'Incident response',
        'API integration'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$3,999',
      period: '/month',
      description: 'For large organizations and critical infrastructure',
      features: [
        'Full cyber defense suite',
        'Custom security policies',
        '24/7 dedicated support',
        'White-label solutions',
        'On-premise deployment',
        'Custom integrations',
        'Advanced analytics',
        'Compliance management',
        'Training programs'
      ],
      popular: false;
  ];

  const useCases = const useCases = const useCases = [
    {
      title: 'Financial Services',
      description: 'Advanced cyber defense for banks and financial institutions',
      icon: DollarSign,
      results: '99.9% security uptime'
    },
    {
      title: 'Healthcare Protection',
      description: 'HIPAA-compliant cyber defense for healthcare organizations',
      icon: Shield,
      results: 'Zero data breaches'
    },
    {
      title: 'Government Security',
      description: 'National-level cyber defense for government agencies',
      icon: Globe,
      results: 'Enhanced national security'
    },
    {
      title: 'Critical Infrastructure',
      description: 'Industrial cyber defense for power grids and utilities',
      icon: Zap,
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" /></p>
                Revolutionary AI-powered cyber defense platform with 99.9% threat detection, 
                zero-trust architecture, and automated incident response for enterprise security.
              </p></p></p>
              
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
                with advanced threat detection and automated response capabilities.
              </p></p></p>
            </div>
            
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
                across various industries for mission-critical security protection.
              </p></p></p>
            </div>
            
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
                Choose the perfect cyber defense plan for your organization. 
                All plans include our advanced AI threat detection and response capabilities.
              </p></p></p>
            </div>
            
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICyberDefenseMatrix;
