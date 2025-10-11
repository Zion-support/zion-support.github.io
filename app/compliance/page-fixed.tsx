'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
const PageFixedPage: React.FC = () => {
  },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: [''Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'']
  },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: [''Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'']
  },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: [''Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'']
  },
                Learn More,
              </button></button></button>
            </div>
          </div>
        </section>
        {/* Features Section */}
                      ))}
                    </ul>
                  )}
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
      <Footer></Footer>
    </>
  ),
};

export default PageFixedPage;
