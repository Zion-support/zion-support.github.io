import {Helmet } from 'react-helmet-async';
import {Link } from 'react-router-dom';
import {ArrowRight, ExternalLink } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      category: 'ai',
      challenge: 'Inefficient supply chain management leading to 30% inventory waste and delayed deliveries',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management system',
      results: '40% reduction in inventory costs, 60% improvement in delivery times',
      image: '/api/placeholder/600/400',
      duration: '6 months',
      team: '8 developers'
    },
    {id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'SecureBank International',
      industry: 'Financial Services',
      category: 'cloud',
      challenge: 'Legacy systems causing security vulnerabilities and compliance issues',
      solution: 'Complete cloud migration with enhanced security and compliance framework',
      results: '99.9% uptime, 50% reduction in operational costs, full compliance',
      image: '/api/placeholder/600/400',
      duration: '8 months',
      team: '12 developers'
    },
    {id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      category: 'security',
      challenge: 'Increasing cyber threats targeting patient data and medical records',
      solution: 'Comprehensive cybersecurity framework with real-time threat detection',
      results: 'Zero security breaches, 95% faster threat response, HIPAA compliance',
      image: '/api/placeholder/600/400',
      duration: '4 months',
      team: '6 developers'
    }
  ];

  const categories = ['All', 'AI', 'Cloud', 'Security', 'Development'];

  return (
    <>
      
        <title>Case Studies - Zion Tech Group | Success Stories</title>

      </Helmet>

        {/* Hero Section */}

              Success Stories
            </h1>
            
              Discover how we've helped businesses transform with AI and IT solutions. Real results, real impact.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}

              {caseStudies.map((study) => (

                      <span className="text-2xl font-bold text-cyan-400">{study.title.charAt(0)}</span>
                    </div>

                        {study.category.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-400">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{study.client}</p>
                  </div>

                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h4>
                      <p className="text-sm text-gray-300">{study.challenge}</p>
                    </div>
                    
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                      <p className="text-sm text-gray-300">{study.solution}</p>
                    </div>
                    
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Results</h4>
                      <p className="text-sm text-gray-300">{study.results}</p>
                    </div>
                  </div>

                    <span>Duration: {study.duration}</span>
                    <span>Team: {study.team}</span>
                  </div>

                    View Full Case Study
                    
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}

              Ready to Write Your Success Story?
            </h2>
            
              Let's discuss how we can help transform your business with AI and IT solutions.
            </p>

                <span>Start Your Project</span>
                
              </Link>
              
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;