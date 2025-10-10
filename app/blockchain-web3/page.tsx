'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
const BlockchainWeb3Page: React.FC = () => {
    const features = const features = const features = [
    {
      icon: Zap,
      title: 'Smart Contracts',;
      description: 'Automated, self-executing contracts with the terms directly written into code.',;
      benefits: ['Automated execution', 'Transparent transactions', 'Reduced costs', 'Enhanced security'];
  },
    {
    icon: Shield,
      title: 'Decentralized Security',
      description: 'Enhanced security through decentralized architecture and cryptographic protection.',
      benefits: ['Immutable records', 'Cryptographic security', 'Distributed consensus', 'Tamper-proof data']
  },
    {
    icon: Brain,
      title: 'AI Integration',
      description: 'AI-powered blockchain solutions for intelligent automation and optimization.',
      benefits: ['Smart automation', 'Predictive analytics', 'Optimized transactions', 'Intelligent contracts']
  },
    {
    icon: Globe,
      title: 'Global Access',
      description: 'Access blockchain services from anywhere in the world with global connectivity.',
      benefits: ['24/7 availability', 'Global reach', 'Cross-border transactions', 'Universal access']
  },
  ];
return() {features.map((feature, index) => ()
    feature.benefits.map((benefit, benefitIndex) => ()
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainWeb3Page;
