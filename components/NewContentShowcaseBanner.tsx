import React from 'react';
import Link from 'next/link';
import { Calendar, BookOpen, Award, Users, ArrowRight, Clock } from 'lucide-react';

const NewContentShowcaseBanner: React.FC = () => {
  const newContent = [
    {
      title: "Neuromorphic Computing Revolution
      excerpt: "Brain-inspired AI with 1000x energy efficiency and real-time learning capabilities
      category: "AI Innovation
      readTime: "8 min read
      href: "/blog/ai-2026-neuromorphic-computing-revolution
      featured: true
    },
    {
      title: "Autonomous Enterprise Operations
      excerpt: "Self-managing organizations achieving 300% ROI through AI transformation
      category: "Enterprise AI
      readTime: "10 min read
      href: "/blog/ai-2026-autonomous-enterprise-operations-breakthrough
      featured: true
    },
    {
      title: "Quantum Machine Learning Revolution
      excerpt: "Exponential performance gains with quantum-enhanced ML systems
      category: "Quantum AI
      readTime: "12 min read
      href: "/blog/ai-2026-quantum-machine-learning-revolution
      featured: true
    },
    {
      title: "Fortune 500 AI Transformation Success
      excerpt: "How a Fortune 500 company achieved 300% ROI in 12 months
      category: "Case Study
      readTime: "15 min read
      href: "/case-studies/fortune-500-ai-transformation-success
      featured: true
    }
  ];

  return (
    <div className="text-left">
      <div className="text-left">
        {/* Header */}
        <div className="text-left">
          <div className="text-left">
            <div className="text-left">
              <Calendar className="text-left" />
              <span className="text-left">Latest Content - January 2026<
            </div>
          </div>
          
          <h2 className="text-left">
            Revolutionary AI Content
          </h2>
          
          <p className="text-left">
            Explore the latest breakthroughs in AI technology, enterprise transformation success stories, and cutting-edge innovations that are reshaping industries.
          </p>
        </div>

        {/* Content Grid */}
        <div className="text-left">
          {newContent.map((content, index) => (
            <div 
              key={index}
              className="text-left"
            >
              {/* Featured badge */}
              {content.featured && (
                <div className="text-left">
                  <span className="text-left">
                    Featured
                  <
                </div>
              )}
              
              <div className="text-left">
                {/* Category */}
                <div className="text-left">
                  <span className="text-left">
                    {content.category}
                  <
                </div>
                
                {/* Title */}
                <h3 className="text-left">
                  {content.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-left">
                  {content.excerpt}
                </p>
                
                {/* Read time */}
                <div className="text-left">
                  <Clock className="text-left" />
                  {content.readTime}
                </div>
                
                {/* CTA */}
                <Link 
                  href={content.href}
                  className="text-left"
                >
                  Read More
                  <ArrowRight className="text-left" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="text-left">
          <div className="text-left">
            <div className="text-left">
              <div className="text-left">
                <BookOpen className="text-left" />
              </div>
              <div className="text-left">50+</div>
              <div className="text-left">New Articles Published</div>
            </div>
            
            <div className="text-left">
              <div className="text-left">
                <Award className="text-left" />
              </div>
              <div className="text-left">300%</div>
              <div className="text-left">Average ROI Achieved</div>
            </div>
            
            <div className="text-left">
              <div className="text-left">
                <Users className="text-left" />
              </div>
              <div className="text-left">10K+</div>
              <div className="text-left">Enterprise Readers</div>
            </div>
            
            <div className="text-left">
              <div className="text-left">
                <Calendar className="text-left" />
              </div>
              <div className="text-left">24/7</div>
              <div className="text-left">Content Updates</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-left">
          <div className="text-left">
            <h3 className="text-left">
              Stay Ahead of the AI Revolution
            </h3>
            <p className="text-left">
              Get the latest insights, case studies, and breakthrough innovations delivered directly to your inbox. Join thousands of enterprise leaders transforming their organizations with AI.
            </p>
            <div className="text-left">
              <Link 
                href="/blog"
                className="text-left"
              >
                Explore All Content
                <ArrowRight className="text-left" />
              </Link>
              <Link 
                href="/case-studies"
                className="text-left"
              >
                View Case Studies
                <ArrowRight className="text-left" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcaseBanner;