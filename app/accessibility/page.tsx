'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Eye, MousePointer, Volume2, Shield, Users, Globe, Zap, ArrowRight, Star } from 'lucide-react';
const AccessibilityPage: React.FC = () => {
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation and alternative input methods for users with motor impairments.',
      benefits: [''Keyboard navigation', 'Voice commands', 'Switch control', 'Customizable controls'']
    },
    {
      icon: Volume2,
      title: 'Audio Accessibility',
      description: 'Audio alternatives and visual indicators for users with hearing impairments.',
      benefits: [''Audio descriptions', 'Visual alerts', 'Captions', 'Sign language support'']
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Secure accessibility features that protect user data while providing inclusive experiences.',
      benefits: [''Data protection', 'Secure forms', 'Privacy controls', 'Encrypted communications'']
    },
    {
      icon: Users,
      title: 'Inclusive Design',
      description: 'Design principles that ensure our solutions work for users of all abilities and backgrounds.',
      benefits: [''Universal design', 'Cultural sensitivity', 'Language support', 'Age-friendly interfaces'']
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Compliance with international accessibility standards including WCAG 2.1 AA and Section 508.',
      benefits: [''WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards'']
    },
  ];
const standards = const standards = const standards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Fully Compliant'
    },
    {
      name: 'Section 508',
      description: 'US federal accessibility standards for electronic and information technology',
      status: 'Fully Compliant'
    },
    {
      name: 'ADA',
      description: 'Americans with Disabilities Act compliance for digital accessibility',
      status: 'Fully Compliant'
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility standard for ICT products and services',
      status: 'Fully Compliant';
    };
  ];
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" /></p>
              Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people of all abilities and comply with international standards.
            </div>
          </div>
        </section>
        {/* Features Section */}
                Our solutions cover all aspects of digital accessibility to ensure inclusive experiences for all users.
              </p></p></p>
            </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Standards Compliance */}
                We ensure full compliance with international accessibility standards and regulations.
              </p></p></p>
            </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AccessibilityPage;
