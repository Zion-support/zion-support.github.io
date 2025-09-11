import React from 'react';

interface ForumCategoryInfo {
  id: string;
  name: string;
  description: string;
  postCount: number;
  adminOnly?: boolean;
  icon?: string;
  lastPost?: {
    title: string;
    author: string;
    date: string;
  };
}

export default function ForumCategories() {
  const categories: ForumCategoryInfo[] = [
    {
      id: '1',
      name: 'General Discussion',
      description: 'General topics and discussions about technology, business, and innovation',
      postCount: 150,
      adminOnly: false,
      icon: 'message-circle',
      lastPost: {
        title: 'Welcome to the Zion Tech Group community!',
        author: 'Admin',
        date: '2024-01-15'
      }
    },
    {
      id: '2',
      name: 'Technical Support',
      description: 'Get help with technical issues, API integration, and development questions',
      postCount: 89,
      adminOnly: false,
      icon: 'code',
      lastPost: {
        title: 'API integration question',
        author: 'Developer123',
        date: '2024-01-14'
      }
    },
    {
      id: '3',
      name: 'AI & Machine Learning',
      description: 'Discussions about AI, ML, and data science topics',
      postCount: 234,
      adminOnly: false,
      icon: 'brain',
      lastPost: {
        title: 'New AI model deployment strategies',
        author: 'DataScientist',
        date: '2024-01-13'
      }
    },
    {
      id: '4',
      name: 'Cloud & DevOps',
      description: 'Cloud infrastructure, DevOps practices, and deployment strategies',
      postCount: 167,
      adminOnly: false,
      icon: 'cloud',
      lastPost: {
        title: 'Kubernetes best practices',
        author: 'DevOpsEngineer',
        date: '2024-01-12'
      }
    },
    {
      id: '5',
      name: 'Cybersecurity',
      description: 'Security best practices, threat detection, and compliance discussions',
      postCount: 98,
      adminOnly: false,
      icon: 'shield',
      lastPost: {
        title: 'Zero-day vulnerability response',
        author: 'SecurityExpert',
        date: '2024-01-11'
      }
    },
    {
      id: '6',
      name: 'Business & Strategy',
      description: 'Business development, strategy, and industry insights',
      postCount: 76,
      adminOnly: false,
      icon: 'trending-up',
      lastPost: {
        title: 'Digital transformation case studies',
        author: 'BusinessAnalyst',
        date: '2024-01-10'
      }
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-zion-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-zion-purple rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Community Forums
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Join discussions, share knowledge, and connect with fellow tech professionals
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                {category.adminOnly && (
                  <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30">
                    Admin Only
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                {category.name}
              </h3>
              
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-cyan rounded-full"></span>
                  {category.postCount} posts
                </span>
              </div>
              
              {category.lastPost && (
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-zion-slate-light mb-1">Latest Post:</p>
                  <p className="text-sm text-white font-medium truncate">
                    {category.lastPost.title}
                  </p>
                  <p className="text-xs text-zion-slate-light">
                    by {category.lastPost.author} • {new Date(category.lastPost.date).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join the Conversation
            </h3>
            <p className="text-zion-slate-light mb-6">
              Start contributing to discussions, ask questions, and share your expertise with the community.
            </p>
            <button className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-zion-blue-dark font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
              Start a Discussion
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
