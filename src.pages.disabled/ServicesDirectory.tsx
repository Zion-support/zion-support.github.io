import: React from 'react';';
import: { Link } from 'react-router-dom';';
import: { motion } from 'framer-motion';';
import: {
  Brain,
  Shield,
  Cloud,
  Database,
  Cpu,
  Zap,
  Globe,
  Lock,
  Smartphone,
  BarChart3,
  Network,
  Server,
  ArrowRight,
  CheckCircle,
  Star} from 'lucide-react';';
const: ServicesDirectory = () => {
  const serviceCategories = [

      title: 'Artificial Intelligence & Machine Learning', description: 'Advanced AI solutions to transform your business operations',
      icon: Brain, color: 'from-purple-500 to-indigo-500',
      services: [{'
          nam,
    e: 'AI Quantum Financial Trading', description: 'Revolutionary quantum-powered trading algorithms',
          path: '/services/ai-quantum-financial-trading', featured: true}, {'
          name: 'AI Business Intelligence', description: 'Intelligent analytics and decision-making systems',
          path: '/services/ai-business-intelligence'}, {'
          name: 'AI Code Review',
          description: 'Automated code analysis and optimization', path: '/services/ai-code-review'}, {'
          name: 'AI Content Generator', description: 'Advanced content creation and automation',
          path: '/services/ai-content-generator'}
      ]}, {'
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets', icon: Shield,
      color: 'from-red-500 to-orange-500', services: [
        {'
          nam,
    e: 'Zero Trust Security',
          description: 'Advanced zero-trust architecture implementation', path: '/services/zero-trust-security',
          featured: true}, {'
          name: 'Vulnerability Assessment',
          description: 'Comprehensive security vulnerability scanning', path: '/services/vulnerability-assessment'}, {'
          name: 'Penetration Testing', description: 'Ethical hacking and security testing services',
          path: '/services/penetration-testing'}, {'
          name: 'Security Monitoring',
          description: '24/7 security monitoring and threat detection', path: '/services/security-monitoring'}
      ]}, {'
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions and modern infrastructure', icon: Cloud,
      color: 'from-blue-500 to-cyan-500', services: [
        {'
          nam,
    e: 'Cloud Migration',
          description: 'Seamless cloud migration and optimization', path: '/services/cloud-migration',
          featured: true}, {'
          name: 'DevOps Automation',
          description: 'Automated deployment and CI/CD pipelines', path: '/services/devops-automation'}, {'
          name: 'Infrastructure as Code', description: 'Automated infrastructure management',
          path: '/services/infrastructure-as-code'}, {'
          name: 'Container Orchestration',
          description: 'Docker and Kubernetes deployment solutions', path: '/services/container-orchestration'}
      ]}, {'
      title: 'Data & Analytics',
      description: 'Transform data into actionable business insights', icon: Database,
      color: 'from-green-500 to-teal-500', services: [
        {'
          nam,
    e: 'Big Data Processing',
          description: 'Large-scale data processing and analytics', path: '/services/big-data-processing',
          featured: true}, {'
          name: 'Real-time Analytics',
          description: 'Live data streaming and analysis', path: '/services/real-time-analytics'}, {'
          name: 'Data Visualization', description: 'Interactive dashboards and reporting',
          path: '/services/data-visualization'}, {'
          name: 'Business Intelligence',
          description: 'Strategic insights and decision support', path: '/services/business-intelligence'}
      ]}, { number: '500+', label: 'Services Delivered' }, { number: '99.9%', label: 'Success Rate' }, { number: '24/7', label: 'Support Available' }, { number: '150+', label: 'Technologies' }
  ]
  return('
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24'>
      {/* Hero Section */}
      <section className='py-20 px-4>
        <div className='container mx-auto max-w-6xl text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >'
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>
              Our'
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400>
                {' '}Services
              </span>
            </h1>'
            <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
              Comprehensive technology solutions designed to accelerate your digital transformation
              and drive business innovation forward.

            </p>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}

              </motion.div>
            ))}
          </div>
        </div>
      </section>

                      </Link>
                    </motion.div>
                  ),)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>


