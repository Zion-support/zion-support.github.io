'use client';
import React from 'react';
'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Server, Database, Shield, CheckCircle, ArrowRight, Zap, Globe, Lock, Settings, Activity, Users, Star, Phone, Mail, MapPin } from 'lucide-react';

const AICloudInfrastructurePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Cloud,
      title: 'AI-Powered Cloud Management',
      description: 'Intelligent cloud resource optimization and automated scaling based on demand patterns.',
      benefits: ['Auto-scaling', 'Cost optimization', 'Performance monitoring', 'Resource allocation']
    },
    {
      icon: Server,
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless integration between on-premises and cloud infrastructure with AI-driven optimization.',
      benefits: ['Hybrid architecture', 'Data migration', 'Workload balancing', 'Unified management']
    },
    {
      icon: Database,
      title: 'Smart Data Management',
      description: 'AI-powered data storage, backup, and recovery solutions with predictive analytics.',
      benefits: ['Automated backups', 'Data analytics', 'Disaster recovery', 'Storage optimization']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security monitoring and compliance management for cloud infrastructure.',
      benefits: ['Security monitoring', 'Compliance management', 'Threat detection', 'Access control']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'AI-driven performance tuning and optimization for maximum efficiency and speed.',
      benefits: ['Performance tuning', 'Load balancing', 'Caching strategies', 'Speed optimization']
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Worldwide cloud infrastructure with intelligent content delivery and edge computing.',
      benefits: ['Global CDN', 'Edge computing', 'Low latency', 'High availability']
    }
  ];

  ];

  const useCases = [
    {
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-sky-400 mr-2 flex-shrink-0" />
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
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AICloudInfrastructurePage;
