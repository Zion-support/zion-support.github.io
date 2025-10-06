'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligenceShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const content = [
    {
      id: 'ultimate-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution - Ultimate Breakthrough Guide to 30,000% ROI',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      category: 'blog',
      metrics: {
        roi: '30,000%',
        savings: '$750B+',
        accuracy: '99.99%',
      },
      readingTime: '35 min read',
      featured: true,
      tags: ['AI Revolution', 'Business Intelligence', 'ROI', 'Fortune 500', '30,000% ROI']
    },
    {
      id: 'fortune-500-business-intelligence-success',
      title: 'Fortune 500 Ultimate Business Intelligence Success: $750B Annual Savings - 30,000% ROI Success Story',
      description: 'How a $15.2B manufacturing giant achieved unprecedented business intelligence transformation with AI-powered analytics and decision-making systems.',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-30000-roi-success-story',
      type: 'Case Study',
      category: 'case-study',
      metrics: {
        roi: '30,000%',
        savings: '$750B',
        company: '$15.2B',
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['Fortune 500', 'Case Study', 'ROI', 'Success Story', 'Manufacturing']
    },
    {
      id: 'business-intelligence-implementation-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide: Complete Roadmap to 30,000% ROI',
      description: 'Complete roadmap to 30,000% ROI through revolutionary AI-powered business intelligence transformation. Step-by-step implementation guide.',
      url: '/resources/ai-2025-ultimate-business-intelligence-implementation-guide',
      type: 'Implementation Guide',
      category: 'guide',
      metrics: {
        roi: '30,000%',
        success: '99.8%',
        timeline: '18 months',
          </p>
        </div>

            {[
              { id: 'all', label: 'All Content' },
              { id: 'blog', label: 'Blog Posts' },
              { id: 'case-study', label: 'Case Studies' },
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
                    {item.title}
                  </h3>

                  {/* Description */}
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                        {tag}
                      </span>
                    ))}
                  </div>

            </Link>
          ))}
        </div>

        {/* Call-to-Action Section */}
  );
};

export default UltimateBusinessIntelligenceShowcase2025;