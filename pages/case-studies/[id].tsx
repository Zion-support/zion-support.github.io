import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function CaseStudyPage() {
  const router = useRouter()
  const { id } = router.query

  // Case studies data - this should match the data in case-studies.tsx
  const caseStudies = [
    {
      id: 'ai-automation-manufacturing',
      title: 'AI-Powered Manufacturing Automation',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Traditional manufacturing processes were inefficient with high downtime and low production rates.',
      solution: 'Implemented autonomous AI systems with predictive maintenance and real-time optimization.',
      results: ['40% increase in production efficiency60% reduction in downtime25% improvement in quality control'],
      duration: '6 months',
      description: 'How we implemented autonomous AI systems to revolutionize manufacturing processes.',
      fullContent: `
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudyPage() {_const _router = useRouter();
  const { id} = router.query;

  // Case studies data - this should match the data in case-studies.tsx
  const _caseStudies = [
    {_id: 'ai-automation-manufacturing', _title: 'AI-Powered Manufacturing Automation', _company: 'Global Manufacturing Corp', _industry: 'Manufacturing', _challenge: 'Traditional manufacturing processes were inefficient with high downtime and low production rates.', _solution: 'Implemented autonomous AI systems with predictive maintenance and real-time optimization.', _results: ['40% increase in production efficiency', _'60% reduction in downtime', _'25% improvement in quality control'], _duration: '6 months', _description: 'How we implemented autonomous AI systems to revolutionize manufacturing processes.', _fullContent: `
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <h2>Background</h2>
        <p>Global Manufacturing Corp was facing significant challenges with their traditional manufacturing processes. 
        High downtime, _inefficient production scheduling, _and quality control issues were impacting their bottom line.</p>
        
        <h2>Challenge</h2>
        <p>The company needed to modernize their manufacturing operations while maintaining high quality standards 
        and reducing operational costs. They required a solution that could adapt to changing production demands 
        and minimize human intervention.</p>
        
        <h2>Solution</h2>
        <p>We implemented a comprehensive AI automation system that included:</p>
        <ul>
          <li>Predictive maintenance algorithms</li>
          <li>Real-time production optimization</li>
          <li>Automated quality control systems</li>
          <li>Intelligent scheduling and resource allocation</li>
        </ul>
        
        <h2>Results</h2>
        <p>The implementation delivered exceptional results:</p>
        <ul>
          <li><strong>40% increase in production efficiency</strong> - Streamlined processes and reduced bottlenecks</li>
          <li><strong>60% reduction in downtime</strong> - Predictive maintenance prevented equipment failures</li>
          <li><strong>25% improvement in quality control</strong> - AI-powered inspection systems caught defects early</li>
        </ul>
        
        <h2>Implementation Timeline</h2>
        <p>The project was completed in 6 months with minimal disruption to ongoing operations. 
        The system was deployed in phases, allowing for gradual adoption and optimization.</p>
      `
    },
    {
      id: 'content-generation-scale',
      title: 'Scaling Content Generation 10x',
      company: 'Digital Marketing Agency',
      industry: 'Marketing',
      challenge: 'Manual content creation was limiting growth and unable to meet client demands.',
      solution: 'Deployed autonomous AI content generation systems with human oversight.',
      results: ['10x increase in content output85% improvement in engagement70% reduction in production time'],
      duration: '4 months',
      description: 'Transforming content creation through autonomous AI systems.',
      fullContent: `
        <h2>Background</h2>
        <p>A leading digital marketing agency was struggling to scale their content creation capabilities. 
        Their manual processes were limiting growth and preventing them from taking on new clients.</p>
        
        <h2>Challenge</h2>
        <p>The agency needed to dramatically increase their content production capacity while maintaining 
        high quality standards and creative excellence. They required a solution that could handle multiple 
        content types and formats.</p>
        
        <h2>Solution</h2>
        <p>We implemented an autonomous content generation system that included:</p>
        <ul>
          <li>AI-powered content creation engines</li>
          <li>Automated research and fact-checking</li>
          <li>Intelligent content optimization</li>
          <li>Human oversight and quality control</li>
        </ul>
        
        <h2>Results</h2>
        <p>The transformation was remarkable:</p>
        <ul>
          <li><strong>10x increase in content output</strong> - From 50 to 500 pieces per month</li>
          <li><strong>85% improvement in engagement</strong> - AI-optimized content performed significantly better</li>
          <li><strong>70% reduction in production time</strong> - Automated workflows accelerated delivery</li>
        </ul>
        
        <h2>Implementation Timeline</h2>
        <p>The system was deployed in 4 months with comprehensive training for the creative team. 
        The AI systems learned from human feedback and continuously improved over time.</p>
      `
    },
    {
      id: 'cloud-infrastructure-optimization',
      title: 'Cloud Infrastructure Optimization',
      company: 'E-commerce Platform',
      industry: 'Technology',
      challenge: 'Cloud costs were spiraling out of control with poor resource utilization.',
      solution: 'Built self-healing, auto-scaling cloud infrastructure with intelligent cost optimization.',
      results: ['50% reduction in cloud costs99.9% uptime achieved3x improvement in performance'],
      duration: '8 months',
      description: 'Building self-healing, auto-scaling cloud infrastructure.',
      fullContent: `
        <h2>Background</h2>
        <p>A growing e-commerce platform was experiencing skyrocketing cloud costs and frequent outages. 
        Their infrastructure was not scaling efficiently with their business growth.</p>
        
        <h2>Challenge</h2>
        <p>The platform needed to optimize their cloud infrastructure for cost, _performance, _and reliability. 
        They required a solution that could automatically adapt to traffic patterns and prevent outages.</p>
        
        <h2>Solution</h2>
        <p>We designed and implemented a comprehensive cloud optimization system:</p>
        <ul>
          <li>Auto-scaling infrastructure with intelligent resource allocation</li>
          <li>Self-healing systems with automatic failure recovery</li>
          <li>Cost optimization algorithms</li>
          <li>Performance monitoring and alerting</li>
        </ul>
        
        <h2>Results</h2>
        <p>The optimization delivered outstanding results:</p>
        <ul>
          <li><strong>50% reduction in cloud costs</strong> - Intelligent resource allocation eliminated waste</li>
          <li><strong>99.9% uptime achieved</strong> - Self-healing systems prevented outages</li>
          <li><strong>3x improvement in performance</strong> - Optimized infrastructure handled traffic spikes</li>
        </ul>
        
        <h2>Implementation Timeline</h2>
        <p>The project was completed in 8 months with careful planning to avoid service disruption. 
        The new infrastructure was deployed alongside the existing system and gradually migrated traffic.</p>
      `
    }
  ],

  if (!caseStudy) {_return (
      <>
        <Head>
          <title>Case Study Not Found | Zion Tech Group</title>
        </Head>
        <div className=&quot;min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white&quot;>
          <main className=&quot;container mx-auto px-6 py-12&quot;>
            <div className=&quot;max-w-4xl mx-auto text-center&quot;>
              <h1 className=&quot;text-4xl font-bold mb-6 text-white&quot;>Case Study Not Found</h1>
              <p className=&quot;text-xl text-white/80 mb-8&quot;>
                The case study you're looking for doesn't exist.
              </p>
              <Link 
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
              >
                ← Back to Case Studies
              </Link>
            </div>
          </main>
        </div>
      </>
    )
  }
    );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
      <Head>
        <title>{caseStudy.title} | Zion Tech Group - Case Study</title>
        <meta name=&quot;description&quot; content={caseStudy.description} />
        <meta property=&quot;og:title&quot; content={`${caseStudy.title} | Zion Tech Group`} />
        <meta property=&quot;og:description&quot; content={caseStudy.description} />
      </Head>
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white&quot;>
        <main className=&quot;container mx-auto px-6 py-12&quot;>
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <nav className=&quot;mb-8&quot;>
              <Link href=&quot;/case-studies&quot; className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;>
                ← Back to Case Studies
              </Link>
            </nav>
            
            <header className=&quot;mb-12&quot;>
              <div className=&quot;mb-6&quot;>
                <span className=&quot;px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30&quot;>
                  {caseStudy.industry}
                </span>
              </div>
              <h1 className=&quot;text-4xl font-bold mb-4 text-white&quot;>{caseStudy.title}</h1>
              <p className=&quot;text-xl text-cyan-400 font-semibold mb-2&quot;>{caseStudy.company}</p>
              <p className=&quot;text-white/80 text-lg&quot;>{caseStudy.description}</p>
            </header>
            
            <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12&quot;>
              <div className=&quot;lg:col-span-2&quot;>
                <div className=&quot;bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20&quot;>
                  <h2 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Overview</h2>
                  <div className=&quot;space-y-6&quot;>
                    <div>
                      <h3 className=&quot;font-semibold text-cyan-400 text-lg mb-2&quot;>Challenge</h3>
                      <p className=&quot;text-white/80&quot;>{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h3 className=&quot;font-semibold text-fuchsia-400 text-lg mb-2&quot;>Solution</h3>
                      <p className=&quot;text-white/80&quot;>{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className=&quot;space-y-6&quot;>
                <div className=&quot;bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20&quot;>
                  <h3 className=&quot;font-semibold text-green-400 text-lg mb-4&quot;>Key Results</h3>
                  <ul className=&quot;space-y-3&quot;>
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className=&quot;text-white/80 flex items-center gap-3&quot;>
                        <div className=&quot;w-2 h-2 bg-green-400 rounded-full&quot;></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className=&quot;bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20&quot;>
                  <h3 className=&quot;font-semibold text-blue-400 text-lg mb-4&quot;>Project Details</h3>
                  <div className=&quot;space-y-3&quot;>
                    <div>
                      <span className=&quot;text-white/60 text-sm&quot;>Duration:</span>
                      <p className=&quot;text-white font-medium&quot;>{caseStudy.duration}</p>
                    </div>
                    <div>
                      <span className=&quot;text-white/60 text-sm&quot;>Industry:</span>
                      <p className=&quot;text-white font-medium&quot;>{caseStudy.industry}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className=&quot;bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-12&quot;>
              <div 
                className=&quot;prose prose-invert max-w-none&quot;
                dangerouslySetInnerHTML={{ __html: caseStudy.fullContent }}
              />
            </div>
            
            <div className=&quot;text-center&quot;>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
              >
                Get Started with Your Project
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}