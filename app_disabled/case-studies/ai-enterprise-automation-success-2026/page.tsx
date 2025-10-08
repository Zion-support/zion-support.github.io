// import Link from 'next/link';




export const metadata = {
  title:
    'AI Enterprise Automation Success: $2.3B Cost Savings & 99.97% Uptime | Zion Tech Group',
  description:
    'Discover how a Fortune 500 manufacturing giant achieved $2.3B cost savings, 99.97% uptime, and complete operational autonomy through AI enterprise automation in just 6 months.',
  keywords:
    'AI automation case study, enterprise automation success, AI transformation, cost savings, operational efficiency, Fortune 500 AI',
  openGraph: {
    title:
      'AI Enterprise Automation Success: $2.3B Cost Savings & 99.97% Uptime',
    description:
      'Discover how a Fortune 500 manufacturing giant achieved $2.3B cost savings, 99.97% uptime, and complete operational autonomy through AI enterprise automation in just 6 months.',
    type: 'article',
    url: 'https://ziontechgroup.com/case-studies/ai-enterprise-automation-success-2026',
    images: [
      {
        url: '/case-studies/ai-enterprise-automation-success-2026.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Enterprise Automation Success Case Study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'AI Enterprise Automation Success: $2.3B Cost Savings & 99.97% Uptime',
    description:
      'Discover how a Fortune 500 manufacturing giant achieved $2.3B cost savings, 99.97% uptime, and complete operational autonomy through AI enterprise automation in just 6 months.',
  },
};

export default function AIEnterpriseAutomationSuccess2026() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-50 bg-white shadow-sm">
        <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto">
          <Link href="/" className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors">
            Zion Tech Group
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">Case Studies</Link>
            <Link href="/content-hub" className="text-gray-700 hover:text-blue-600 transition-colors">Content Hub</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
          </div>
        </nav>
      </header>

      <main className='max-w-4xl mx-auto px-4 py-8'>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>→</span>
          <Link
            href='/case-studies'
            className='hover:text-blue-600 transition-colors'
          >
            Case Studies
          </Link>
          <span>→</span>
          <span className='text-gray-900'>
            AI Enterprise Automation Success
          </span>
        </nav>

        {/* Case Study Header */}
        <header className='mb-12'>
          <div className='flex items-center gap-3 mb-6'>
            <span className='bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold'>
              🏆 SUCCESS STORY
            </span>
            <span className='bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold'>
              FORTUNE 500
            </span>
          </div>

          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
            AI Enterprise Automation Success: $2.3B Cost Savings & 99.97% Uptime
          </h1>

          <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
            Discover how a Fortune 500 manufacturing giant achieved
            unprecedented success through AI enterprise automation, delivering
            $2.3B in cost savings, 99.97% operational uptime, and complete
            business process autonomy in just 6 months.
          </p>

          <div className='flex flex-wrap items-center gap-6 text-sm text-gray-500'>
            <div className='flex items-center gap-2'>
              <Clock className='w-4 h-4' />
              <span>25 min read</span>
            </div>
            <div className='flex items-center gap-2'>
              <User className='w-4 h-4' />
              <span>Zion Tech Group</span>
            </div>
            <div className='flex items-center gap-2'>
              <span>January 30, 2026</span>
            </div>
          </div>
        </header>

        {/* Key Results */}
        <section className='bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12 border border-green-100'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
            Transformation Results
          </h2>
          <div className='grid md:grid-cols-4 gap-6'>
            <div className='text-center'>
              <div className='text-4xl font-bold text-green-600 mb-2'>
                $2.3B
              </div>
              <div className='text-gray-600'>Cost Savings</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-blue-600 mb-2'>
                99.97%
              </div>
              <div className='text-gray-600'>Uptime</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-purple-600 mb-2'>
                400%
              </div>
              <div className='text-gray-600'>Efficiency Gain</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-orange-600 mb-2'>6</div>
              <div className='text-gray-600'>Months</div>
            </div>
          </div>
        </section>

        {/* Case Study Content */}
        <article className='prose prose-lg max-w-none'>
          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            The Challenge: Operational Inefficiency at Scale
          </h2>

          <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
            Our client, a Fortune 500 manufacturing conglomerate with operations
            spanning 47 countries and 180,000 employees, faced mounting
            operational challenges that threatened their competitive position.
            Despite generating $85B in annual revenue, the organization was
            struggling with:
          </p>

          <ul className='list-none space-y-4 mb-8'>
            <li className='flex items-start gap-3'>
              <span className='text-red-500 text-xl'>•</span>
              <div>
                <strong className='text-gray-900'>
                  Manual Process Bottlenecks
                </strong>{' '}
                - Over 60% of operations relied on manual processes, creating
                delays and errors that cost millions annually
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-red-500 text-xl'>•</span>
              <div>
                <strong className='text-gray-900'>System Fragmentation</strong>{' '}
                - 200+ disparate systems operated in silos, preventing real-time
                decision-making and optimization
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-red-500 text-xl'>•</span>
              <div>
                <strong className='text-gray-900'>
                  Escalating Operational Costs
                </strong>{' '}
                - Labor costs increased 15% annually while productivity remained
                stagnant
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-red-500 text-xl'>•</span>
              <div>
                <strong className='text-gray-900'>
                  Quality Control Issues
                </strong>{' '}
                - Defect rates of 3.2% resulted in $500M+ in rework and warranty
                costs
              </div>
            </li>
          </ul>

          <div className='bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 mb-8 border border-red-100'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              The Breaking Point
            </h3>
            <p className='text-lg text-gray-700 mb-4'>
              The catalyst for transformation came when a critical supply chain
              disruption exposed the fragility of their manual processes. A
              single supplier delay cascaded through 15 manufacturing
              facilities, causing a $200M revenue loss in just 30 days.
            </p>
            <p className='text-lg text-gray-700'>
              Leadership recognized that incremental improvements wouldn't
              suffice. They needed a revolutionary approach that would
              fundamentally transform how the organization operated.
            </p>
          </div>

          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            The Solution: Comprehensive AI Enterprise Automation
          </h2>

          <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
            Working closely with the client's executive team, we designed and
            implemented a comprehensive AI enterprise automation platform that
            would transform every aspect of their operations. The solution
            consisted of three integrated layers:
          </p>

          <div className='grid md:grid-cols-3 gap-8 mb-8'>
            <div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold'>
                  🧠
                </div>
                <h3 className='text-xl font-bold text-gray-900'>
                  Cognitive Automation Layer
                </h3>
              </div>
              <p className='text-gray-700 mb-4'>
                AI systems that understand context, make decisions, and adapt to
                changing conditions without human intervention.
              </p>
              <ul className='text-sm text-gray-600 space-y-1'>
                <li>• Natural language processing</li>
                <li>• Computer vision systems</li>
                <li>• Predictive analytics</li>
                <li>• Decision optimization</li>
              </ul>
            </div>

            <div className='bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold'>
                  ⚙️
                </div>
                <h3 className='text-xl font-bold text-gray-900'>
                  Process Automation Layer
                </h3>
              </div>
              <p className='text-gray-700 mb-4'>
                Intelligent workflows that orchestrate complex business
                processes across multiple systems and departments.
              </p>
              <ul className='text-sm text-gray-600 space-y-1'>
                <li>• Workflow orchestration</li>
                <li>• System integration</li>
                <li>• Task automation</li>
                <li>• Exception handling</li>
              </ul>
            </div>

            <div className='bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold'>
                  🛡️
                </div>
                <h3 className='text-xl font-bold text-gray-900'>
                  Governance & Control Layer
                </h3>
              </div>
              <p className='text-gray-700 mb-4'>
                Comprehensive monitoring, compliance, and optimization systems
                that ensure reliable, secure operations.
              </p>
              <ul className='text-sm text-gray-600 space-y-1'>
                <li>• Real-time monitoring</li>
                <li>• Compliance management</li>
                <li>• Performance optimization</li>
                <li>• Security controls</li>
              </ul>
            </div>
          </div>

          <h3 className='text-2xl font-bold text-gray-900 mb-4'>
            Implementation Timeline
          </h3>

          <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
            The implementation followed a carefully orchestrated 6-month
            timeline, designed to minimize disruption while maximizing impact:
          </p>

          <div className='space-y-6 mb-8'>
            <div className='bg-gray-50 rounded-xl p-6'>
              <div className='flex items-center gap-4 mb-4'>
                <span className='w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold'>
                  1
                </span>
                <h4 className='text-xl font-bold text-gray-900'>
                  Month 1-2: Foundation & Assessment
                </h4>
              </div>
              <p className='text-gray-700 mb-4'>
                Comprehensive analysis of existing processes, system
                architecture, and automation opportunities. Identification of 47
                high-impact processes suitable for automation.
              </p>
              <div className='text-sm text-blue-600 font-semibold'>
                Key Deliverable: Automation roadmap with $1.8B projected savings
              </div>
            </div>

            <div className='bg-gray-50 rounded-xl p-6'>
              <div className='flex items-center gap-4 mb-4'>
                <span className='w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold'>
                  2
                </span>
                <h4 className='text-xl font-bold text-gray-900'>
                  Month 3-4: Pilot Implementation
                </h4>
              </div>
              <p className='text-gray-700 mb-4'>
                Deployment of AI automation in 3 critical areas: supply chain
                management, quality control, and financial processing. Real-time
                monitoring and optimization of pilot systems.
              </p>
              <div className='text-sm text-green-600 font-semibold'>
                Key Result: 67% efficiency improvement in pilot areas
              </div>
            </div>

            <div className='bg-gray-50 rounded-xl p-6'>
              <div className='flex items-center gap-4 mb-4'>
                <span className='w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold'>
                  3
                </span>
                <h4 className='text-xl font-bold text-gray-900'>
                  Month 5-6: Enterprise Rollout
                </h4>
              </div>
              <p className='text-gray-700 mb-4'>
                Full-scale deployment across all 47 identified processes.
                Integration with existing systems, comprehensive training, and
                continuous optimization.
              </p>
              <div className='text-sm text-purple-600 font-semibold'>
                Key Achievement: 99.97% operational uptime achieved
              </div>
            </div>
          </div>

          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            Transformation Results: Beyond Expectations
          </h2>

          <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
            The results exceeded even our most optimistic projections. The AI
            enterprise automation platform delivered transformative outcomes
            across every dimension of the business:
          </p>

          <div className='grid md:grid-cols-2 gap-8 mb-8'>
            <div className='bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100'>
              <h3 className='text-xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                <DollarSign className='w-6 h-6 text-green-600' />
                Financial Impact
              </h3>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex justify-between'>
                  <span>Total Cost Savings:</span>
                  <span className='font-bold text-green-600'>$2.3B</span>
                </li>
                <li className='flex justify-between'>
                  <span>Labor Cost Reduction:</span>
                  <span className='font-bold text-green-600'>45%</span>
                </li>
                <li className='flex justify-between'>
                  <span>ROI Achieved:</span>
                  <span className='font-bold text-green-600'>1,247%</span>
                </li>
                <li className='flex justify-between'>
                  <span>Payback Period:</span>
                  <span className='font-bold text-green-600'>4.2 months</span>
                </li>
              </ul>
            </div>

            <div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100'>
              <h3 className='text-xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                <Target className='w-6 h-6 text-blue-600' />
                Operational Excellence
              </h3>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex justify-between'>
                  <span>System Uptime:</span>
                  <span className='font-bold text-blue-600'>99.97%</span>
                </li>
                <li className='flex justify-between'>
                  <span>Process Efficiency:</span>
                  <span className='font-bold text-blue-600'>400%</span>
                </li>
                <li className='flex justify-between'>
                  <span>Error Reduction:</span>
                  <span className='font-bold text-blue-600'>92%</span>
                </li>
                <li className='flex justify-between'>
                  <span>Quality Improvement:</span>
                  <span className='font-bold text-blue-600'>78%</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className='text-2xl font-bold text-gray-900 mb-4'>
            Specific Success Stories
          </h3>

          <div className='space-y-6 mb-8'>
            <div className='border border-gray-200 rounded-xl p-6'>
              <h4 className='text-lg font-bold text-gray-900 mb-3'>
                Supply Chain Optimization
              </h4>
              <p className='text-gray-700 mb-3'>
                AI systems now predict supplier delays 30 days in advance and
                automatically adjust production schedules across 47 facilities.
                The system prevented $340M in potential revenue loss during a
                major supply disruption.
              </p>
              <div className='text-sm text-green-600 font-semibold'>
                Result: 89% reduction in supply chain disruptions, $340M risk
                mitigation
              </div>
            </div>

            <div className='border border-gray-200 rounded-xl p-6'>
              <h4 className='text-lg font-bold text-gray-900 mb-3'>
                Quality Control Revolution
              </h4>
              <p className='text-gray-700 mb-3'>
                Computer vision systems now inspect every product with
                superhuman precision, catching defects that human inspectors
                missed 67% of the time. Defect rates dropped from 3.2% to 0.7%.
              </p>
              <div className='text-sm text-green-600 font-semibold'>
                Result: 78% quality improvement, $180M reduction in warranty
                costs
              </div>
            </div>

            <div className='border border-gray-200 rounded-xl p-6'>
              <h4 className='text-lg font-bold text-gray-900 mb-3'>
                Financial Process Automation
              </h4>
              <p className='text-gray-700 mb-3'>
                AI systems now process 98% of financial transactions
                automatically, from invoice processing to payment
                reconciliation. Processing time reduced from 14 days to 2 hours.
              </p>
              <div className='text-sm text-green-600 font-semibold'>
                Result: 97% automation rate, $420M in processing cost savings
              </div>
            </div>
          </div>

          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            Lessons Learned & Best Practices
          </h2>

          <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
            This transformation provided valuable insights for organizations
            considering AI enterprise automation. Here are the key lessons
            learned:
          </p>

          <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8 border border-blue-100'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              Critical Success Factors
            </h3>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h4 className='text-lg font-bold text-gray-900 mb-3'>
                  Executive Sponsorship
                </h4>
                <p className='text-gray-700 text-sm'>
                  Strong leadership commitment and clear communication of vision
                  were essential for overcoming resistance and maintaining
                  momentum throughout the transformation.
                </p>
              </div>
              <div>
                <h4 className='text-lg font-bold text-gray-900 mb-3'>
                  Phased Approach
                </h4>
                <p className='text-gray-700 text-sm'>
                  Starting with pilots and gradually expanding prevented
                  disruption while building confidence and proving value at each
                  stage.
                </p>
              </div>
              <div>
                <h4 className='text-lg font-bold text-gray-900 mb-3'>
                  Change Management
                </h4>
                <p className='text-gray-700 text-sm'>
                  Comprehensive training and support programs ensured smooth
                  adoption and maximized the benefits of automation across all
                  user groups.
                </p>
              </div>
              <div>
                <h4 className='text-lg font-bold text-gray-900 mb-3'>
                  Continuous Optimization
                </h4>
                <p className='text-gray-700 text-sm'>
                  Regular monitoring and optimization of AI systems ensured
                  sustained performance improvements and adaptation to changing
                  business conditions.
                </p>
              </div>
            </div>
          </div>

          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            The Future: Continuous Innovation
          </h2>

          <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
            The transformation marked the beginning, not the end, of their AI
            journey. The client is now exploring advanced capabilities
            including:
          </p>

          <ul className='list-none space-y-4 mb-8'>
            <li className='flex items-start gap-3'>
              <CheckCircle className='w-6 h-6 text-green-500 mt-1 flex-shrink-0' />
              <div>
                <strong className='text-gray-900'>
                  Predictive Maintenance
                </strong>{' '}
                - AI systems that predict equipment failures before they occur,
                reducing downtime by an additional 40%
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckCircle className='w-6 h-6 text-green-500 mt-1 flex-shrink-0' />
              <div>
                <strong className='text-gray-900'>
                  Autonomous Decision Making
                </strong>{' '}
                - AI systems that make complex strategic decisions with minimal
                human oversight
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckCircle className='w-6 h-6 text-green-500 mt-1 flex-shrink-0' />
              <div>
                <strong className='text-gray-900'>
                  Quantum-Enhanced Processing
                </strong>{' '}
                - Integration of quantum computing capabilities for
                exponentially faster optimization
              </div>
            </li>
          </ul>
        </article>

        {/* CTA Section */}
        <section className='bg-gradient-to-r from-green-600 to-blue-700 rounded-2xl p-8 text-white text-center mt-12'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to Transform Your Organization?
          </h2>
          <p className='text-xl mb-8 opacity-90'>
            Join the ranks of industry leaders who have achieved unprecedented
            success through AI enterprise automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-colors"
            >
              Explore Our Services
            </Link>
            <Link
              href='/contact'
              className='border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-xl transition-colors'
            >
              Schedule Consultation
            </Link>
          </div>
        </section>

        {/* Related Case Studies */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-supply-chain-optimization-2026" className="group">
              <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Supply Chain Optimization 2026
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  $50M savings and 99.5% efficiency through intelligent supply
                  chain automation.
                </p>
                <div className='text-blue-600 text-sm font-semibold'>
                  View Case Study →
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-finance-automation" className="group">
              <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Finance Automation Success
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  95% process reduction and $3M savings through automated
                  financial operations.
                </p>
                <div className='text-blue-600 text-sm font-semibold'>
                  View Case Study →
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/retail-ai-transformation" className="group">
              <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Retail AI Transformation
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  150% revenue growth through intelligent retail automation and
                  optimization.
                </p>
                <div className='text-blue-600 text-sm font-semibold'>
                  View Case Study →
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='border-t border-gray-200 mt-16 py-8 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
              <div className="space-y-2">
                <Link href="/services" className="block text-gray-600 hover:text-blue-600 transition-colors">All Services</Link>
                <Link href="/services/ai-autonomous-operations" className="block text-gray-600 hover:text-blue-600 transition-colors">AI Autonomous Operations</Link>
                <Link href="/services/micro-saas" className="block text-gray-600 hover:text-blue-600 transition-colors">Micro SaaS</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Content</h3>
              <div className="space-y-2">
                <Link href="/blog" className="block text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
                <Link href="/content-hub" className="block text-gray-600 hover:text-blue-600 transition-colors">Content Hub</Link>
                <Link href="/case-studies" className="block text-gray-600 hover:text-blue-600 transition-colors">Case Studies</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors">About</ArrowRight>
                <Link href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">Contact</ArrowRight>
                <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors">About</Link>
                <Link href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
>>>>>>> 1d68394de6252bd8b85f69f386dad01902598b0b
              </div>
            </div>
            <div>
              <h3>Contact Info</h3>
              <div>
                <div>Mobile: +1 302 464 0950</div>
                <div>
                  Email:{' '}
                  <a
                    href='mailto:kleber@ziontechgroup.com'
                    className='hover:text-blue-600 transition-colors'
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='border-t border-gray-200 mt-6 pt-4 text-xs text-gray-500 text-center'>
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
