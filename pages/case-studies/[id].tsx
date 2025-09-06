<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======


import React from 'react',;
import Head from 'next/head',;
import Link from 'next/link',;
import { useRouter } from 'next/router',;
export default function CaseStudyPage() {
  const router = useRouter(),
  const { id } = router.query,



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
<<<<<<< HEAD

=======

      id: 'ai-automation-manufacturing',
=======
id: 'ai-automation-manufacturing',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      title: 'AI-Powered Manufacturing Automation',
import React from 'react',
import Head from 'next / head',
import Link from 'next / link',
import { use_router } from 'next / router',
export default /**
 * CaseStudyPage - Function description
 */
function CaseStudyPage() {
  const router = use_router (),
  const { id } = router.query,
  // Case studies data - this should match the data in case - studies.tsx;
  const case_studies = [;
    {
      id: 'ai - automation - manufacturing',
      title: 'AI - Powered Manufacturing Automation',
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Traditional manufacturing processes were inefficient with high downtime and low production rates.',
      solution: 'Implemented autonomous AI systems with predictive maintenance and real - time optimization.',
      results: ['40% increase in production efficiency60% reduction in downtime25% improvement in quality control'],
      duration: '6 months',
      description: 'How we implemented autonomous AI systems to revolutionize manufacturing processes.',
<<<<<<< HEAD


      fullContent: `
        <h2>Background</h2>
        <p>Global Manufacturing Corp was facing significant challenges with their traditional manufacturing processes.
        High downtime, inefficient production scheduling, and quality control issues were impacting their bottom line.</p>
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


=======
    };
      full_content: `;
        <h2 > Background</h2>;
        <p > Global Manufacturing Corp was facing significant challenges with their traditional manufacturing processes.;
        High downtime, inefficient production scheduling, and quality control issues were impacting their bottom line.</p>;
        <h2 > Challenge</h2>;
        <p > The company needed to modernize their manufacturing operations while maintaining high quality standards;
        and reducing operational costs. They required a solution that could adapt to changing production demands;
        and minimize human intervention.</p>;
        <h2 > Solution</h2>;
        <p > We implemented a comprehensive AI automation system that included:</p>;
        <ul>;
          <li > Predictive maintenance algorithms</li>;
          <li > Real - time production optimization</li>;
          <li > Automated quality control systems</li>;
          <li > Intelligent scheduling and resource allocation</li>;
        </ul>;
        <h2 > Results</h2>;
        <p > The implementation delivered exceptional results:</p>;
        <ul>;
          <li><strong > 40% increase in production efficiency</strong> - Streamlined processes and reduced bottlenecks</li>;
          <li><strong > 60% reduction in downtime</strong> - Predictive maintenance prevented equipment failures</li>;
          <li><strong > 25% improvement in quality control</strong> - AI - powered inspection systems caught defects early</li>;
        </ul>;
        <h2 > Implementation Timeline</h2>;
        <p > The project was completed in 6 months with minimal disruption to ongoing operations.;
        The system was deployed in phases, allowing for gradual adoption and optimization.</p>;
      `;
    },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: 'content - generation - scale',
        <h2>Background</h2>
        <p>Global Manufacturing Corp was facing significant challenges with their traditional manufacturing processes. 
        High downtime, _inefficient production scheduling, _and quality control issues were impacting their bottom line.</p>
        
        <h2>Challenge</h2>
        <p>The company needed to modernize their manufacturing operations while maintaining high quality standards 
        and reducing operational costs. They required a solution that could adapt to changing production demands 
        and minimize human intervention.</p>
        
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',;
import Head from 'next/head',;
import Link from 'next/link',;
import { useRouter } from 'next/router',;
export default function CaseStudyPage() {
  const router = useRouter(),
  const { id } = router.query,

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function CaseStudyPage() {
  const router = useRouter()
  const { id } = router.query
  // Case studies data - this should match the data in case-studies.tsx
  const caseStudies = [
    {
      id: 'ai-automation-manufacturing'
      title: 'AI-Powered Manufacturing Automation'
      company: 'Global Manufacturing Corp'
      industry: 'Manufacturing'
      challenge: 'Traditional manufacturing processes were inefficient with high downtime and low production rates.'
      solution: 'Implemented autonomous AI systems with predictive maintenance and real-time optimization.'
      results: ['40% increase in production efficiency60% reduction in downtime25% improvement in quality control']
      duration: '6 months'
      description: 'How we implemented autonomous AI systems to revolutionize manufacturing processes.'
      fullContent: `
        <h2>Background</h2>
        <p>Global Manufacturing Corp was facing significant challenges with their traditional manufacturing processes.
        High downtime, inefficient production scheduling, and quality control issues were impacting their bottom line.</p>
        <h2>Challenge</h2>
        <p>The company needed to modernize their manufacturing operations while maintaining high quality standards
        and reducing operational costs. They required a solution that could adapt to changing production demands
        and minimize human intervention.</p>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <h2>Solution</h2>
        <p>We implemented a comprehensive AI automation system that included:</p>
        <ul>
          <li>Predictive maintenance algorithms</li>
          <li>Real-time production optimization</li>
          <li>Automated quality control systems</li>
          <li>Intelligent scheduling and resource allocation</li>
        </ul>
<<<<<<< HEAD
        
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <h2>Results</h2>
        <p>The implementation delivered exceptional results:</p>
        <ul>
          <li><strong>40% increase in production efficiency</strong> - Streamlined processes and reduced bottlenecks</li>
          <li><strong>60% reduction in downtime</strong> - Predictive maintenance prevented equipment failures</li>
          <li><strong>25% improvement in quality control</strong> - AI-powered inspection systems caught defects early</li>
        </ul>
<<<<<<< HEAD
        
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
<<<<<<< HEAD


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


      industry: 'Technology',
      challenge: 'Cloud costs were spiraling out of control with poor resource utilization.',


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
};
      full_content: `;
        <h2 > Background</h2>;
        <p > A leading digital marketing agency was struggling to scale their content creation capabilities.;
        Their manual processes were limiting growth and preventing them from taking on new clients.</p>;
        <h2 > Challenge</h2>;
        <p > The agency needed to dramatically increase their content production capacity while maintaining;
        high quality standards and creative excellence. They required a solution that could handle multiple;
        content types and formats.</p>;
        <h2 > Solution</h2>;
        <p > We implemented an autonomous content generation system that included:</p>;
        <ul>;
          <li > AI - powered content creation engines</li>;
          <li > Automated research and fact - checking</li>;
          <li > Intelligent content optimization</li>;
          <li > Human oversight and quality control</li>;
        </ul>;
        <h2 > Results</h2>;
        <p > The transformation was remarkable:</p>;
        <ul>;
          <li><strong > 10x increase in content output</strong> - From 50 to 500 pieces per month</li>;
          <li><strong > 85% improvement in engagement</strong> - AI - optimized content performed significantly better</li>;
          <li><strong > 70% reduction in production time</strong> - Automated workflows accelerated delivery</li>;
        </ul>;
        <h2 > Implementation Timeline</h2>;
        <p > The system was deployed in 4 months with comprehensive training for the creative team.;
        The AI systems learned from human feedback and continuously improved over time.</p>;
      `;
    },
    {
      id: 'cloud - infrastructure - optimization',
      title: 'Cloud Infrastructure Optimization',
      company: 'E - commerce Platform',
      industry: 'Technology',
      challenge: 'Cloud costs were spiraling out of control with poor resource utilization.',
        <p>We designed and implemented a comprehensive cloud optimization system: </p>
=======
        <h2>Implementation Timeline</h2>
        <p>The project was completed in 6 months with minimal disruption to ongoing operations.
        The system was deployed in phases, allowing for gradual adoption and optimization.</p>
      `
    }
    {
      id: 'content-generation-scale'
      title: 'Scaling Content Generation 10x'
      company: 'Digital Marketing Agency'
      industry: 'Marketing'
      challenge: 'Manual content creation was limiting growth and unable to meet client demands.'
      solution: 'Deployed autonomous AI content generation systems with human oversight.'
      results: ['10x increase in content output85% improvement in engagement70% reduction in production time']
      duration: '4 months'
      description: 'Transforming content creation through autonomous AI systems.'
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
    }
    {
      id: 'cloud-infrastructure-optimization'
      title: 'Cloud Infrastructure Optimization'
      company: 'E-commerce Platform'
      industry: 'Technology'
      challenge: 'Cloud costs were spiraling out of control with poor resource utilization.'
      solution: 'Built self-healing, auto-scaling cloud infrastructure with intelligent cost optimization.'
      results: ['50% reduction in cloud costs99.9% uptime achieved3x improvement in performance']
      duration: '8 months'
      description: 'Building self-healing, auto-scaling cloud infrastructure.'
      fullContent: `
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <h2>Background</h2>
        <p>A growing e-commerce platform was experiencing skyrocketing cloud costs and frequent outages.
        Their infrastructure was not scaling efficiently with their business growth.</p>
        <h2>Challenge</h2>
        <p>The platform needed to optimize their cloud infrastructure for cost, performance, and reliability.
        They required a solution that could automatically adapt to traffic patterns and prevent outages.</p>
        <h2>Solution</h2>
<<<<<<< HEAD
        <p>We designed and implemented a comprehensive cloud optimization system: </p>


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
        <p>We designed and implemented a comprehensive cloud optimization system:</p>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <ul>
          <li>Auto-scaling infrastructure with intelligent resource allocation</li>
          <li>Self-healing systems with automatic failure recovery</li>
          <li>Cost optimization algorithms</li>
          <li>Performance monitoring and alerting</li>
        </ul>
<<<<<<< HEAD

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <h2>Results</h2>
        <p>The optimization delivered outstanding results:</p>
        <ul>
          <li><strong>50% reduction in cloud costs</strong> - Intelligent resource allocation eliminated waste</li>
          <li><strong>99.9% uptime achieved</strong> - Self-healing systems prevented outages</li>
          <li><strong>3x improvement in performance</strong> - Optimized infrastructure handled traffic spikes</li>
        </ul>
<<<<<<< HEAD
<h2>Implementation Timeline</h2>
=======
        <h2>Implementation Timeline</h2>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <p>The project was completed in 8 months with careful planning to avoid service disruption.
        The new infrastructure was deployed alongside the existing system and gradually migrated traffic.</p>
      `
    }
<<<<<<< HEAD
<<<<<<< HEAD



=======

=======
<<<<<<< HEAD
  ];
  const caseStudy = caseStudies.find(study => study.id === id);
=======
<<<<<<< HEAD
  ]
  const caseStudy = caseStudies.find(study => study.id === id)

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
=======
  ]
  const caseStudy = caseStudies.find(study => study.id === id)

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default function CaseStudyPage(req, res) {
  try {
  const router = useRouter();
  const { id } = router.query;
  // Case studies data - this should match the data in case-studies.tsx;
  const caseStudies = [;
    {;
      id: 'ai-automation-manufacturing';
      title: 'AI-Powered Manufacturing Automation';
      company: 'Global Manufacturing Corp';
      industry: 'Manufacturing';
      challenge: 'Traditional manufacturing processes were inefficient with high downtime and low production rates.',;
      solution: 'Implemented autonomous AI systems with predictive maintenance and real-time optimization.',;
      results: ['40% increase in production efficiency60% reduction in downtime25% improvement in quality control'],;
      duration: '6 months',;
      description: 'How we implemented autonomous AI systems to revolutionize manufacturing processes.',;
      fullContent: `;
        <h2>Background</h2>;
        <p>Global Manufacturing Corp was facing significant challenges with their traditional manufacturing processes.;
        High downtime, inefficient production scheduling, and quality control issues were impacting their bottom line.</p>;
        <h2>Challenge</h2>;
        <p>The company needed to modernize their manufacturing operations while maintaining high quality standards;
        and reducing operational costs. They required a solution that could adapt to changing production demands;
        and minimize human intervention.</p>;
        <h2>Solution</h2>;
        <p>We implemented a comprehensive AI automation system that included:</p>;
        <ul>;
          <li>Predictive maintenance algorithms</li>;
          <li>Real-time production optimization</li>;
          <li>Automated quality control systems</li>;
          <li>Intelligent scheduling and resource allocation</li>;
        </ul>;
        <h2>Results</h2>;
        <p>The implementation delivered exceptional results:</p>;
        <ul>;
          <li><strong>40% increase in production efficiency</strong> - Streamlined processes and reduced bottlenecks</li>;
          <li><strong>60% reduction in downtime</strong> - Predictive maintenance prevented equipment failures</li>;
          <li><strong>25% improvement in quality control</strong> - AI-powered inspection systems caught defects early</li>;
        </ul>;
        <h2>Implementation Timeline</h2>;
        <p>The project was completed in 6 months with minimal disruption to ongoing operations.;
        The system was deployed in phases, allowing for gradual adoption and optimization.</p>;
      `;
    },;
    {;
      id: 'content-generation-scale',;
      title: 'Scaling Content Generation 10x',;
      company: 'Digital Marketing Agency',;
      industry: 'Marketing',;
      challenge: 'Manual content creation was limiting growth and unable to meet client demands.',;
      solution: 'Deployed autonomous AI content generation systems with human oversight.',;
      results: ['10x increase in content output85% improvement in engagement70% reduction in production time'],;
      duration: '4 months',;
      description: 'Transforming content creation through autonomous AI systems.',;
      fullContent: `;
        <h2>Background</h2>;
        <p>A leading digital marketing agency was struggling to scale their content creation capabilities.;
        Their manual processes were limiting growth and preventing them from taking on new clients.</p>;
        <h2>Challenge</h2>;
        <p>The agency needed to dramatically increase their content production capacity while maintaining;
        high quality standards and creative excellence. They required a solution that could handle multiple;
        content types and formats.</p>;
        <h2>Solution</h2>;
        <p>We implemented an autonomous content generation system that included:</p>;
        <ul>;
          <li>AI-powered content creation engines</li>;
          <li>Automated research and fact-checking</li>;
          <li>Intelligent content optimization</li>;
          <li>Human oversight and quality control</li>;
        </ul>;
        <h2>Results</h2>;
        <p>The transformation was remarkable:</p>;
        <ul>;
          <li><strong>10x increase in content output</strong> - From 50 to 500 pieces per month</li>;
          <li><strong>85% improvement in engagement</strong> - AI-optimized content performed significantly better</li>;
          <li><strong>70% reduction in production time</strong> - Automated workflows accelerated delivery</li>;
        </ul>;
        <h2>Implementation Timeline</h2>;
        <p>The system was deployed in 4 months with comprehensive training for the creative team.;
        The AI systems learned from human feedback and continuously improved over time.</p>;
      `;
    },;
    {;
      id: 'cloud-infrastructure-optimization',;
      title: 'Cloud Infrastructure Optimization',;
      company: 'E-commerce Platform',;
      industry: 'Technology',;
      challenge: 'Cloud costs were spiraling out of control with poor resource utilization.',;
      solution: 'Built self-healing, auto-scaling cloud infrastructure with intelligent cost optimization.',;
      results: ['50% reduction in cloud costs99.9% uptime achieved3x improvement in performance'],;
      duration: '8 months',;
      description: 'Building self-healing, auto-scaling cloud infrastructure.',;
      fullContent: `;
        <h2>Background</h2>;
        <p>A growing e-commerce platform was experiencing skyrocketing cloud costs and frequent outages.;
        Their infrastructure was not scaling efficiently with their business growth.</p>;
        <h2>Challenge</h2>;
        <p>The platform needed to optimize their cloud infrastructure for cost, performance, and reliability.;
        They required a solution that could automatically adapt to traffic patterns and prevent outages.</p>;
        <h2>Solution</h2>;
        <p>We designed and implemented a comprehensive cloud optimization system:</p>;
        <ul>;
          <li>Auto-scaling infrastructure with intelligent resource allocation</li>;
          <li>Self-healing systems with automatic failure recovery</li>;
          <li>Cost optimization algorithms</li>;
          <li>Performance monitoring and alerting</li>;
        </ul>;
        <h2>Results</h2>;
        <p>The optimization delivered outstanding results:</p>;
        <ul>;
          <li><strong>50% reduction in cloud costs</strong> - Intelligent resource allocation eliminated waste</li>;
          <li><strong>99.9% uptime achieved</strong> - Self-healing systems prevented outages</li>;
          <li><strong>3x improvement in performance</strong> - Optimized infrastructure handled traffic spikes</li>;
        </ul>;
        <h2>Implementation Timeline</h2>;
        <p>The project was completed in 8 months with careful planning to avoid service disruption.;
        The new infrastructure was deployed alongside the existing system and gradually migrated traffic.</p>;
      `;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  ],
  const caseStudy = caseStudies.find(study => study.id === id),

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  ],
  const caseStudy = caseStudies.find(study => study.id === id),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  ],
  const caseStudy = caseStudies.find(study => study.id === id),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  ],
  const caseStudy = caseStudies.find(study => study.id === id),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  if (!caseStudy) {
    return (
      <>
        <Head>
          <title>Case Study Not Found | Zion Tech Group</title>
        </Head>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <main className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-white">Case Study Not Found</h1>
              <p className="text-xl text-white/80 mb-8">
                The case study you're looking for doesn't exist.
              </p>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
              <Link
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
              <Link
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <Link 
              <Link
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <>
      <Head>
        <title>{caseStudy.title} | Zion Tech Group - Case Study</title>
        <meta name="description" content={caseStudy.description} />
        <meta property="og:title" content={`${caseStudy.title} | Zion Tech Group`} />
        <meta property="og:description" content={caseStudy.description} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Case Studies
              </Link>
            </nav>
            <header className="mb-12">
              <div className="mb-6">
                <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">

<<<<<<< HEAD
=======

                  {caseStudy.industry  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-white">{caseStudy.title}</h1>
              <p className="text-xl text-cyan-400 font-semibold mb-2">{caseStudy.company}</p>
              <p className="text-white/80 text-lg">{caseStudy.description}</p>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold mb-6 text-white">Overview</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-cyan-400 text-lg mb-2">Challenge</h3>
                      <p className="text-white/80">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-fuchsia-400 text-lg mb-2">Solution</h3>
                      <p className="text-white/80">{caseStudy.solution}</p>
=======
<<<<<<< HEAD
return (
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
  return (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <>
      <Head>
        <title>{caseStudy.title} | Zion Tech Group - Case Study</title>
        <meta name="description" content={caseStudy.description} />
        <meta property="og:title" content={`${caseStudy.title} | Zion Tech Group`} />
        <meta property="og:description" content={caseStudy.description} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Case Studies
              </Link>
            </nav>
            <header className="mb-12">
              <div className="mb-6">
                <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                  {caseStudy.industry}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  {caseStudy.industry}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  {caseStudy.industry  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-white">{caseStudy.title}</h1>
              <p className="text-xl text-cyan-400 font-semibold mb-2">{caseStudy.company}</p>
              <p className="text-white/80 text-lg">{caseStudy.description}</p>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold mb-6 text-white">Overview</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-cyan-400 text-lg mb-2">Challenge</h3>
                      <p className="text-white/80">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-fuchsia-400 text-lg mb-2">Solution</h3>
                      <p className="text-white/80">{caseStudy.solution}</p>
<<<<<<< HEAD

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

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </div>
                  </div>
                </div>
              </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<div className="space-y-6">
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="space-y-6">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <h3 className="font-semibold text-green-400 text-lg mb-4">Key Results</h3>
                  <ul className="space-y-3">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="text-white/80 flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                        {result}
                      </li>
                    ))}
  ];
  const caseStudy = caseStudies.find(study => study.id === id);
  if (!caseStudy) {;
    return (;
      <>;
        <Head>;
          <title>Case Study Not Found | Zion Tech Group</title>;
        </Head>;
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">;
          <main className="container mx-auto px-6 py-12">;
            <div className="max-w-4xl mx-auto text-center">;
              <h1 className="text-4xl font-bold mb-6 text-white">Case Study Not Found</h1>;
              <p className="text-xl text-white/80 mb-8">;
                The case study you're looking for doesn't exist.;
              </p>;
              <Link;
                href="/case-studies";
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-500 hover:to-fuchsia-500 transition-all duration-300";
              >;
                ← Back to Case Studies;
              </Link>;
            </div>;
          </main>;
        </div>;
      </>;
    );
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  return (;
    <>;
      <Head>;
        <title>{caseStudy.title} | Zion Tech Group - Case Study</title>;
        <meta name="description" content={caseStudy.description} />;
        <meta property="og:title" content={`${caseStudy.title} | Zion Tech Group`} />;
        <meta property="og:description" content={caseStudy.description} />;
      </Head>;
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">;
        <main className="container mx-auto px-6 py-12">;
          <div className="max-w-4xl mx-auto">;
            <nav className="mb-8">;
              <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">;
                ← Back to Case Studies;
              </Link>;
            </nav>;
            <header className="mb-12">;
              <div className="mb-6">;
                <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">;
                  {caseStudy.industry  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </span>;
              </div>;
              <h1 className="text-4xl font-bold mb-4 text-white">{caseStudy.title}</h1>;
              <p className="text-xl text-cyan-400 font-semibold mb-2">{caseStudy.company}</p>;
              <p className="text-white/80 text-lg">{caseStudy.description}</p>;
            </header>;
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">;
              <div className="lg:col-span-2">;
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">;
                  <h2 className="text-2xl font-bold mb-6 text-white">Overview</h2>;
                  <div className="space-y-6">;
                    <div>;
                      <h3 className="font-semibold text-cyan-400 text-lg mb-2">Challenge</h3>;
                      <p className="text-white/80">{caseStudy.challenge}</p>;
                    </div>;
                    <div>;
                      <h3 className="font-semibold text-fuchsia-400 text-lg mb-2">Solution</h3>;
                      <p className="text-white/80">{caseStudy.solution}</p>;
                    </div>;
                  </div>;
                </div>;
              </div>;
              <div className="space-y-6">;
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">;
                  <h3 className="font-semibold text-green-400 text-lg mb-4">Key Results</h3>;
                  <ul className="space-y-3">;
                    {caseStudy.results.map((result, index) => (;
                      <li key={index} className="text-white/80 flex items-center gap-3">;
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>;
                        {result  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </li>;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </ul>
                </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
=======
<<<<<<< HEAD

  ];
  const caseStudy = caseStudies.find(study => study.id === id);
  if (!caseStudy) {;
    return (;
      <>;
        <Head>;
          <title>Case Study Not Found | Zion Tech Group</title>;
        </Head>;
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">;
          <main className="container mx-auto px-6 py-12">;
            <div className="max-w-4xl mx-auto text-center">;
              <h1 className="text-4xl font-bold mb-6 text-white">Case Study Not Found</h1>;
              <p className="text-xl text-white/80 mb-8">;
                The case study you're looking for doesn't exist.;
              </p>;
              <Link;
                href="/case-studies";
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-500 hover:to-fuchsia-500 transition-all duration-300";
              >;
                ← Back to Case Studies;
              </Link>;
            </div>;
          </main>;
        </div>;
      </>;
    );
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  return (;
    <>;
      <Head>;
        <title>{caseStudy.title} | Zion Tech Group - Case Study</title>;
        <meta name="description" content={caseStudy.description} />;
        <meta property="og:title" content={`${caseStudy.title} | Zion Tech Group`} />;
        <meta property="og:description" content={caseStudy.description} />;
      </Head>;
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">;
        <main className="container mx-auto px-6 py-12">;
          <div className="max-w-4xl mx-auto">;
            <nav className="mb-8">;
              <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">;
                ← Back to Case Studies;
              </Link>;
            </nav>;
            <header className="mb-12">;
              <div className="mb-6">;
                <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">;
                  {caseStudy.industry  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </span>;
              </div>;
              <h1 className="text-4xl font-bold mb-4 text-white">{caseStudy.title}</h1>;
              <p className="text-xl text-cyan-400 font-semibold mb-2">{caseStudy.company}</p>;
              <p className="text-white/80 text-lg">{caseStudy.description}</p>;
            </header>;
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">;
              <div className="lg:col-span-2">;
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">;
                  <h2 className="text-2xl font-bold mb-6 text-white">Overview</h2>;
                  <div className="space-y-6">;
                    <div>;
                      <h3 className="font-semibold text-cyan-400 text-lg mb-2">Challenge</h3>;
                      <p className="text-white/80">{caseStudy.challenge}</p>;
                    </div>;
                    <div>;
                      <h3 className="font-semibold text-fuchsia-400 text-lg mb-2">Solution</h3>;
                      <p className="text-white/80">{caseStudy.solution}</p>;
                    </div>;
                  </div>;
                </div>;
              </div>;
              <div className="space-y-6">;
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">;
                  <h3 className="font-semibold text-green-400 text-lg mb-4">Key Results</h3>;
                  <ul className="space-y-3">;
                    {caseStudy.results.map((result, index) => (;
                      <li key={index} className="text-white/80 flex items-center gap-3">;
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>;
                        {result  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </li>;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  </ul>
                </div>


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <h3 className="font-semibold text-blue-400 text-lg mb-4">Project Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-white/60 text-sm">Duration:</span>
                      <p className="text-white font-medium">{caseStudy.duration}</p>
                    </div>
                    <div>
                      <span className="text-white/60 text-sm">Industry:</span>
                      <p className="text-white font-medium">{caseStudy.industry}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD


            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-12">

<<<<<<< HEAD
=======
<<<<<<< HEAD
<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-12">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div
=======
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-12">
              <div 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                className="prose prose-invert max-w-none"
<<<<<<< HEAD

              />
            </div>
            <div className="text-center">
              <Link
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
                dangerouslySetInnerHTML={{ __html: caseStudy.fullContent }}
              />
            </div>
            <div className="text-center">
              <Link 
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: caseStudy.fullContent }}
                dangerouslySetInnerHTML={{ __html: caseStudy.fullContent }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              />
            </div>
            <div className="text-center">
              <Link
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  )
                  </ul>;
                </div>;
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">;
                  <h3 className="font-semibold text-blue-400 text-lg mb-4">Project Details</h3>;
                  <div className="space-y-3">;
=======
=======
}

=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  );
};
  )
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      solution: 'Built self - healing, auto - scaling cloud infrastructure with intelligent cost optimization.',
      results: ['50% reduction in cloud costs99.9% uptime achieved3x improvement in performance'],
      duration: '8 months',
      description: 'Building self - healing, auto - scaling cloud infrastructure.',
      full_content: `;
        <h2 > Background</h2>;
        <p > A growing e - commerce platform was experiencing skyrocketing cloud costs and frequent outages.;
        Their infrastructure was not scaling efficiently with their business growth.</p>;
        <h2 > Challenge</h2>;
        <p > The platform needed to optimize their cloud infrastructure for cost, performance, and reliability.;
        They required a solution that could automatically adapt to traffic patterns and prevent outages.</p>;
        <h2 > Solution</h2>;
        <p > We designed and implemented a comprehensive cloud optimization system:</p>;
        <ul>;
          <li > Auto - scaling infrastructure with intelligent resource allocation</li>;
          <li > Self - healing systems with automatic failure recovery</li>;
          <li > Cost optimization algorithms</li>;
          <li > Performance monitoring and alerting</li>;
        </ul>;
        <h2 > Results</h2>;
        <p > The optimization delivered outstanding results:</p>;
        <ul>;
          <li><strong > 50% reduction in cloud costs</strong> - Intelligent resource allocation eliminated waste</li>;
          <li><strong > 99.9% uptime achieved</strong> - Self - healing systems prevented outages</li>;
          <li><strong > 3x improvement in performance</strong> - Optimized infrastructure handled traffic spikes</li>;
        </ul>;
        <h2 > Implementation Timeline</h2>;
        <p > The project was completed in 8 months with careful planning to avoid service disruption.;
        The new infrastructure was deployed alongside the existing system and gradually migrated traffic.</p>;
      `;
    }
  ],
  const case_study = case_studies.find (study => study.id === id),
  // Check condition
if ( {) {
  $2
}
    return (
      <>;
        <Head>;
          <title > Case Study Not Found | Zion Tech Group</title>;
        </Head>;
        <div className="min - h-screen bg - gradient - to - br from - indigo - 950 via - purple - 950 to - slate - 950 text - white">;
          <main className="container mx - auto px - 6 py - 12">;
            <div className="max - w-4xl mx - auto text - center">;
              <h1 className="text - 4xl font - bold mb - 6 text - white">Case Study Not Found</h1>;
              <p className="text - xl text - white / 80 mb - 8">;
                The case study you're looking for doesn't exist.;
              </p>;
              <Link;
                href="/case - studies";
                className="inline - flex items - center gap - 2 bg - gradient - to - r from - cyan - 400 to - fuchsia - 400 text - white px - 8 py - 4 rounded - lg font - semibold hover: from - cyan - 500 hover:to - fuchsia - 500 transition - all duration - 300";
              >;
                ← Back to Case Studies;
              </Link>;
            </div>;
          </main>;
        </div>;
      </>);
  }
  return (
    <>;
      <Head>;
        <title>{case_study.title} | Zion Tech Group - Case Study</title>;
        <meta name="description" content={case_study.description} />;
        <meta property="og:title" content={`${case_study.title} | Zion Tech Group`} />;
        <meta property="og:description" content={case_study.description} />;
      </Head>;
      <div className="min - h-screen bg - gradient - to - br from - indigo - 950 via - purple - 950 to - slate - 950 text - white">;
        <main className="container mx - auto px - 6 py - 12">;
          <div className="max - w-4xl mx - auto">;
            <nav className="mb - 8">;
              <Link href="/case - studies" className="text - cyan - 400 hover:text - cyan - 300 transition - colors">;
                ← Back to Case Studies;
              </Link>;
            </nav>;
            <header className="mb - 12">;
              <div className="mb - 6">;
                <span className="px - 3 py - 1 bg - cyan - 400 / 20 text - cyan - 400 text - sm rounded - full border border - cyan - 400 / 30">;
                  {case_study.industry}
                </span>;
              </div>;
              <h1 className="text - 4xl font - bold mb - 4 text - white">{case_study.title}</h1>;
              <p className="text - xl text - cyan - 400 font - semibold mb - 2">{case_study.company}</p>;
              <p className="text - white / 80 text - lg">{case_study.description}</p>;
            </header>;
            <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8 mb - 12">;
              <div className="lg:col - span - 2">;
                <div className="bg - white / 10 backdrop - blur - xl rounded - 2xl p - 8 border border - white / 20">;
                  <h2 className="text - 2xl font - bold mb - 6 text - white">Overview</h2>;
                  <div className="space - y-6">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    <div>;
                      <h3 className="font - semibold text - cyan - 400 text - lg mb - 2">Challenge</h3>;
                      <p className="text - white / 80">{case_study.challenge}</p>;
                    </div>;
                    <div>;
                      <h3 className="font - semibold text - fuchsia - 400 text - lg mb - 2">Solution</h3>;
                      <p className="text - white / 80">{case_study.solution}</p>;
                    </div>;
                  </div>;
                </div>;
              </div>;
              <div className="space - y-6">;
                <div className="bg - white / 10 backdrop - blur - xl rounded - 2xl p - 6 border border - white / 20">;
                  <h3 className="font - semibold text - green - 400 text - lg mb - 4">Key Results</h3>;
                  <ul className="space - y-3">;
                    {case_study.results.map ((result, index) => (
                      <li key={index} className="text - white / 80 flex items - center gap - 3">;
                        <div className="w - 2 h - 2 bg - green - 400 rounded - full"></div>;
                        {result}
                      </li>))}
                  </ul>;
                </div>;
                <div className="bg - white / 10 backdrop - blur - xl rounded - 2xl p - 6 border border - white / 20">;
                  <h3 className="font - semibold text - blue - 400 text - lg mb - 4">Project Details</h3>;
                  <div className="space - y-3">;
                    <div>;
                      <span className="text - white / 60 text - sm">Duration:</span>;
                      <p className="text - white font - medium">{case_study.duration}</p>;
                    </div>;
                    <div>;
                      <span className="text - white / 60 text - sm">Industry:</span>;
                      <p className="text - white font - medium">{case_study.industry}</p>;
=======
                  </ul>;
                </div>;
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">;
                  <h3 className="font-semibold text-blue-400 text-lg mb-4">Project Details</h3>;
                  <div className="space-y-3">;
                    <div>;
                      <span className="text-white/60 text-sm">Duration:</span>;
                      <p className="text-white font-medium">{caseStudy.duration}</p>;
                    </div>;
                    <div>;
                      <span className="text-white/60 text-sm">Industry:</span>;
                      <p className="text-white font-medium">{caseStudy.industry}</p>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD
            <div className="bg - white / 10 backdrop - blur - xl rounded - 2xl p - 8 border border - white / 20 mb - 12">;
              <div;
                className="prose prose - invert max - w-none";
                dangerouslySetInnerHTML={{ __html: case_study.full_content }}
              />;
            </div>;
            <div className="text - center">;
              <Link;
                href="/contact";
                className="inline - flex items - center gap - 2 bg - gradient - to - r from - cyan - 400 to - fuchsia - 400 text - white px - 8 py - 4 rounded - lg font - semibold hover: from - cyan - 500 hover:to - fuchsia - 500 transition - all duration - 300";
=======
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-12">;
              <div;
                className="prose prose-invert max-w-none";
                dangerouslySetInnerHTML={{ __html: caseStudy.fullContent }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              />;
            </div>;
            <div className="text-center">;
              <Link;
                href="/contact";
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-500 hover:to-fuchsia-500 transition-all duration-300";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              >;
                Get Started with Your Project;
              </Link>;
            </div>;
          </div>;
        </main>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    </>);
}
=======
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
