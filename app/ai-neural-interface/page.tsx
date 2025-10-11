'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, Eye, Mic, Target, BarChart, Shield, Clock, Users, ArrowRight, Star, TrendingUp, Lock, FileText, DollarSign, CheckCircle, Phone, Mail, MapPin, Globe, Database, Settings, Calendar, Award, Rocket, MessageSquare, CheckSquare, Cpu } from 'lucide-react';

const AINeuralInterface: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => 
    setIsVisible(true);
  }, []);

  const features = const features = const features = [
    {
      icon: Brain,
    },
    {
      icon: Eye,
      title: 'Visual Cortex Interface',
      description: 'Direct interface with visual cortex for enhanced vision and augmented reality',
      benefits: [''Enhanced visual processing', 'AR/VR integration', 'Visual pattern recognition'']
    },
    {
      icon: Mic,
      title: 'Auditory Neural Interface',
      description: 'Neural interface for auditory processing and enhanced hearing capabilities',
      benefits: [''Enhanced hearing', 'Noise filtering', 'Audio pattern recognition'']
    },
    {
      icon: Target,
      title: 'Motor Control Interface',
      description: 'Precise motor control interface for prosthetics and assistive devices',
      benefits: [''Precise motor control', 'Prosthetic integration', 'Assistive technology'']
    },
  ];
  const pricingPlans = const pricingPlans = const pricingPlans = [
    {
      name: 'Research',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for academic research and medical studies',
      features: [
        'Basic neural signal processing',
        'Standard interface protocols',
        'Research data export',
        'Email support',
        'Basic visualization',
        'Documentation access'
      ],
      popular: false;
    },
    {
      name: 'Medical',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for medical applications and clinical trials',
      features: [
        'Advanced neural processing',
        'Medical-grade interfaces',
        'Real-time monitoring',
        'Priority support',
        'Clinical data analytics',
        'FDA compliance tools',
        'Patient management',
        'Integration APIs'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'For large-scale neural interface deployments',
      features: [
        'Full neural interface suite',
        'Custom interface development',
        '24/7 dedicated support',
        'White-label solutions',
        'On-site deployment',
        'Custom integrations',
        'Advanced analytics',
        'Research collaboration',
        'Training programs'
      ],
      popular: false;
  ];

  const useCases = const useCases = const useCases = [
    {
      title: 'Medical Rehabilitation',
      description: 'Neural interfaces for stroke recovery and motor function restoration',
      icon: Brain,
      results: '85% improvement in motor function'
    },
    {
      title: 'Prosthetic Control',
      description: 'Advanced prosthetic control using neural signals for natural movement',
      icon: Target,
      results: 'Natural prosthetic control'
    },
    {
      title: 'Cognitive Enhancement',
      description: 'Neural interfaces for memory enhancement and cognitive augmentation',
      icon: Zap,
      results: '40% cognitive improvement'
    },
    {
      title: 'Communication Aid',
      description: 'Neural interfaces for communication assistance in locked-in syndrome',
      icon: MessageSquare,
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" /></p>
                Revolutionary AI-powered neural interface technology for medical rehabilitation, 
                prosthetic control, and cognitive enhancement through advanced brain-computer interfaces.
              </p></p></p>
              
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
                for medical rehabilitation, prosthetic control, and cognitive enhancement.
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
                and research across various applications and use cases.
              </p></p></p>
            </div>
            
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
                Choose the perfect neural interface plan for your medical or research needs. 
                All plans include our advanced AI processing and medical-grade interfaces.
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

export default AINeuralInterface;
