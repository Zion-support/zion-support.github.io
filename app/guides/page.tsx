import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Code, Database, Cloud, Shield, Zap, Brain } from 'lucide-react;
const GuidesPage: React.FC = () => {
  const guides = [
    {'
          title: 'AI 2026 Implementation Roadmap','
          description: 'Comprehensive guide to implementing AI solutions in your enterprise for 2026'
  },'
      url: '/','
      category: 'AI Implementation',
      icon: Brain,'
      difficulty: 'Intermediate','
      duration: '45 min read'
    ,
  },
    {'
        title: 'AI 2027 Implementation Roadmap','
          description: 'Advanced roadmap for AI implementation strategies in 2027'
  },'
      url: '/','
      category: 'AI Implementation',
      icon: Brain,'
      difficulty: 'Advanced','
      duration: '60 min read'
    ,
  },
    {'
        title: 'Autonomous Business Processes Implementation Guide 2026','
          description: 'Step-by-step guide to implementing autonomous business processes'
  },'
      url: '/','
      category: 'Process Automation',
      icon: Zap,'
      difficulty: 'Expert','
      duration: '90 min read'
    ,
  }
  ,
  ];

  const categories = [
    {'
    name: 'AI Implementation', icon: Brain, color: 'text-purple-400' ,
  },
    {'
    name: 'Process Automation', icon: Zap, color: 'text-blue-400' ,
  },
    {'
    name: 'Security', icon: Shield, color: 'text-red-400' ,
  },
    {'
    name: 'Cloud Infrastructure', icon: Cloud, color: 'text-cyan-400' ,
  },
    {'
    name: 'Data Management', icon: Database, color: 'text-green-400' ,
  },
    {'
    name: 'Development', icon: Code, color: 'text-orange-400' ,
  }
  ,
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {'
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-orange-400 bg-orange-400/20';
      case 'Expert': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

const Page = () => {

  return (
    
    <div>
    <Helmet />
        <title> - Zion Tech Group</title>
        <meta />
      </Helmet>
      <div>
    <div />
          <div>
    <h1> </h1><p className="text-gray-300 text-lg">This page is under construction. Please check back later.</p>
          </div>
        </nav>

        <main />
          {/* Header  */}
          <div>
    <div />
              <BookOpen />
              <h1>Implementation  <span>Guides</span></h1>
            </div>
            <p />
              Step-by-step guides to help you implement AI, automation, and digital transformation 
              solutions in your enterprise with confidence.
            </p>
          </div>

          {/* Categories  */}
          <section />
            <h2 className="text-3xl font-bold text-white mb-8">Guide Categories</h2>
            <div />
              {categories.map((category, index) => (
                <div>
    <category />
                  <h3 className="text-white font-semibold text-sm">{category.name}</h3>
                </div>
              ))}
            </div>
      </section>

          {/* Guides Grid  */}
          <section />
            <h2 className="text-3xl font-bold text-white mb-8">Available Guides</h2>
            <div />
              {guides.map((guide, index) => (
                <div>
    <div />
                    <div>
    <guide />
                    </div>
                    <div>
    <h3 className="text-xl font-semibold text-white mb-2">{guide.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{guide.description}</p>
                    </div>
  </div>
  <div>
    <span className="text-cyan-400 text-sm font-medium">{guide.category}</span>
                    <span />
                      {guide.difficulty}
                    </span>
                  </div>
                  
                  <div>
    <span className="text-gray-400 text-sm">{guide.duration}</span>
<Link />
                      Read Guide →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
      </section>

          {/* Getting Started  */}
          <section />
            <h2 className="text-3xl font-bold text-white mb-8">Getting Started</h2>
            <div>
    <div />
                <div />
                  <h3 className="text-xl font-semibold text-white mb-4">New to AI Implementation?</h3>
                  <p />
                    Start with our comprehensive AI 2026 Implementation Roadmap to understand 
                    the fundamentals and plan your AI transformation journey.
                  </p>
                  <ul />
                    <li>• Assess your current AI readiness</li>
                    <li>• Plan your implementation strategy</li>
                    <li>• Choose the right technologies</li>
                    <li>• Measure success and ROI</li>
                  </ul>
                </div>
                <div />
                  <h3 className="text-xl font-semibold text-white mb-4">Ready for Advanced Topics?</h3>
                  <p />
                    Explore our advanced guides for autonomous systems, process automation, 
                    and cutting-edge AI implementations.
                  </p>
                  <ul />
                    <li>• Autonomous business processes</li>
                    <li>• Advanced AI architectures</li>
                    <li>• Enterprise automation strategies</li>
                    <li>• Future-ready implementations</li>
                  </ul>
                </div>
        </div>
      </div>
      </section>

          {/* Call to Action  */}
          <section />
            <h2 />
              Need Personalized Guidance?
            </h2>
            <p />
              Our experts are available to provide personalized implementation guidance 
              tailored to your specific business needs and requirements.
            </p>
            <div>
    <Link />
                Get Expert Consultation
              </Link>
              <Link />
                View Our Services
              </Link>
            </div>
      </section>
        </main>
      </>
  );
};

export default Page;