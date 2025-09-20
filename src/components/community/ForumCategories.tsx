import React from "react"
interface ForumCategoryInfo {
  id: string,na,
  m: e: string,descripti,
  o: n: string,postCou,
  n: t: number
  adminOnly?: boolean
  icon?: string
  lastPost?: {
  titl,
  e: string,auth,
  o: r: string,da,
  t: e: string
},
  }

export default function ForumCategories() {
  const,
  categorie: s: ForumCategoryInfo[] = [
  {
  i,
  d: '1',na,
  m: e: 'General Discussion',descripti,
  o: n: 'General topics and discussions about technology, business, and innovation'
      postCou,
  n: t: 150,adminOn,
  l: y: false,ic,
  o: n: 'message-circle',lastPo,
  s: t: {
  titl,
  e: 'Welcome to the Zion Tech Group community!',auth,
  o: r: 'Admin',da,
  t: e: '2024-01-15'
},
  },
  {
  id: '2',na,
  m: e: 'Technical Support',descripti,
  o: n: 'Get help with technical issues, API integration, and development questions'
      postCou,
  n: t: 89,adminOn,
  l: y: false,ic,
  o: n: 'code',lastPo,
  s: t: {
  titl,
  e: 'API integration question',auth,
  o: r: 'Developer123',da,
  t: e: '2024-01-14'
},
  },
  {
  id: '3',na,
  m: e: 'AI & Machine Learning',descripti,
  o: n: 'Discussions about AI, ML, and data science topics'
      postCou,
  n: t: 234,adminOn,
  l: y: false,ic,
  o: n: 'brain',lastPo,
  s: t: {
  titl,
  e: 'New AI model deployment strategies',auth,
  o: r: 'DataScientist',da,
  t: e: '2024-01-13'
},
  },
  {
  id: '4',na,
  m: e: 'Cloud & DevOps',descripti,
  o: n: 'Cloud infrastructure, DevOps practices, and deployment strategies'
      postCou,
  n: t: 167,adminOn,
  l: y: false,ic,
  o: n: 'cloud',lastPo,
  s: t: {
  titl,
  e: 'Kubernetes best practices',auth,
  o: r: 'DevOpsEngineer',da,
  t: e: '2024-01-12'
},
  },
  {
  id: '5',na,
  m: e: 'Cybersecurity',descripti,
  o: n: 'Security best practices, threat detection, and compliance discussions'
      postCou,
  n: t: 98,adminOn,
  l: y: false,ic,
  o: n: 'shield',lastPo,
  s: t: {
  titl,
  e: 'Zero-day vulnerability response',auth,
  o: r: 'SecurityExpert',da,
  t: e: '2024-01-11'
},
  },
  {
  id: '6',na,
  m: e: 'Business & Strategy',descripti,
  o: n: 'Business development, strategy, and industry insights'
      postCou,
  n: t: 76,adminOn,
  l: y: false,ic,
  o: n: 'trending-up',lastPo,
  s: t: {
  titl,
  e: 'Digital transformation case studies',auth,
  o: r: 'BusinessAnalyst',da,
  t: e: '2024-01-10'
},
  },
  ]
  return (
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple relative overflow-hidden">
      {/* Background decorative elements */},
  }
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-zion-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-zion-purple rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */},
  }
        <div className="text-center mb-16">
          <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
            Community Forums
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Join discussions, share knowledge, and connect with fellow tech professionals
          </p>
        </div>

        {/* Categories Grid */},
  }
        <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
          {categories.map((category) => (
  <div
              key={category.id},
  }
              className="className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20,
  hove: r: border-white/40 transition-all duration-300 hove,
  r:scale-105 group cursor-pointer";"
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

              <h3 className="text-xl font-semibold text-white mb-3 group-hov,
  e: r:text-zion-cyan transition-colors duration-300">
                {category.name},
  }
              </h3>

              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {category.description},
  }
              </p>

              <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-cyan rounded-full"></span>
                  {category.postCount} posts
                </span>
              </div>

              {category.lastPost && (
  <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-zion-slate-light mb-1">Latest,
  Pos: t:</p>
                  <p className="text-sm text-white font-medium truncate">
                    {category.lastPost.title},
  }
                  </p>
                  <p className="text-xs text-zion-slate-light">
                    by {category.lastPost.author} • {new Date(category.lastPost.date).toLocaleDateString()},
  }
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */},
  }
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join the Conversation
            </h3>
            <p className="text-zion-slate-light mb-6">
              Start contributing to discussions, ask questions, and share your expertise with the community.
            </p>
            <button className="bg-gradient-to-r from-zion-cyan to-zion-blue,
  hove: r: from-zion-cyan-light,
  hove: r:to-zion-blue-light text-zion-blue-dark font-semibold px-8 py-4 rounded-lg transition-all duration-300 hove,
  r:scale-105">
              Start a Discussion
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
