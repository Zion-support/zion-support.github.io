
import Head from 'next/head';
import Link from 'next/link';
export default function AutomationInsightsPage() {

  const automationTrends = [
    {
      id: 'ai-automation-2025'
      title: 'AI Automation Trends 2025'
      description:
        'Discover the latest trends in AI automation that are reshaping industries worldwide.',      category: 'Trends'
      readTime: '8 min read'
      featured: true
    }
        'Discover the latest trends in AI automation that are reshaping industries worldwide.',      category: 'Trends',
      readTime: '8 min read',
      featured: true;
    };
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    {
      id: 'autonomous-systems'
      title: 'Building Autonomous Systems'
      description: 'Learn how to design and implement truly autonomous systems that operate independently.'
      category: 'Implementation'
      readTime: '12 min read'
      featured: false
    }
    {
      id: 'automation-roi'
      title: 'Calculating Automation ROI'
      description: 'A comprehensive guide to measuring and maximizing return on investment for automation projects.'
      category: 'Business'
      readTime: '10 min read'
      featured: false
    },      featured: false
    }
  ];
  const automationTools = [
    {
      id: 'automation-framework'
      title: 'Zion Automation Framework'
      description:
        'Our proprietary framework for building scalable automation solutions.'
      type: 'Framework'
      complexity: 'Advanced',      type: 'Framework'
      complexity: 'Advanced'
    }
    {
      id: 'performance-monitor'
      title: 'Performance Monitoring Suite'
      description: 'Comprehensive tools for monitoring and optimizing automation performance.'
      type: 'Tool'
      complexity: 'Intermediate'
    }
    {
      id: 'performance-monitor'
      title: 'Performance Monitoring Suite'
      description:
        'Comprehensive tools for monitoring and optimizing automation performance.'
      type: 'Tool'
      complexity: 'Intermediate'
    },    {      complexity: 'Intermediate'
    }
    {
      id: 'deployment-automation'
      title: 'Deployment Automation'
      description: 'Streamlined deployment processes for automation systems.'
      type: 'Process'
      complexity: 'Beginner'
    },  ];      complexity: 'Beginner'
    }
  ];
  const successMetrics = [
    {
      metric: '227'
      label: 'Active Automations'
      description: 'Successfully deployed and running'
    }
    {
      metric: '99.9%'
      label: 'Uptime'
      description: 'Reliable automation performance',    {
      metric: '99.9%'
      label: 'Uptime'
      description: 'Reliable automation performance'
    }
    {
      metric: '40%'
      label: 'Efficiency Gain'
      label: 'Average improvement across projects'
    }
    {
      metric: '2,960+';
      label: 'Pages Generated'
      description: 'Content created autonomously'
    }
    {
      metric: '40%'
      label: 'Efficiency Gain'
      label: 'Average improvement across projects'
    }
    {
      metric: '2,960+'
      label: 'Pages Generated'
      description: 'Content created autonomously'
    },  ];      description: 'Content created autonomously'
                ))}

=======
              </div>;
            </div>;


            {/* Automation Trends */}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            {/* Automation Trends */}
            <div className='mb-16'>
              <h2 className='text-3xl font-bold mb-8 text-center text-fuchsia-400'>
                Latest Automation Trends
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                {automationTrends.map((trend, index) => (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  <div
                    key={index}
                    className='bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300'
                  >
                    <div className='flex items-center justify-between mb-4'>
                      <span className='px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full'>
                        {trend.category}
                      </span>
                      <span className='text-white/60 text-sm'>
                        {trend.readTime}
                      </span>
                    </div>
                    <h3 className='text-xl font-bold mb-3 text-white'>
                      {trend.title}
                    </h3>
                    <p className='text-white/70 mb-4'>{trend.description}</p>
                    <Link
=======
                      href={`/blog/${trend.id}`}
                      className='inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors'
                    >
                      Read More <span className='ml-1'>→</span>                    </Link>                {automationTrends.map((trend, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full">{trend.category}</span>
                      <span className="text-white/60 text-sm">{trend.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{trend.title}</h3>
                    <p className="text-white/70 mb-4">{trend.description}</p>
                    <Link
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                      href={`/blog/${trend.id}`}
                      className='inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors'
                    >

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                  </div>
                ))}
              </div>
            </div>

            {/* Automation Tools & Frameworks */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Our Automation Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {automationTools.map((tool, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-4">🔧</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{tool.title}</h3>
                    <p className="text-white/70 mb-4">{tool.description}</p>
                    <div className="flex justify-center gap-2">
                      <span className="px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full">{tool.type}</span>
                      <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full">{tool.complexity}</span>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Automation Tools & Frameworks */}


                ))}

              </div>;
            </div>;


            {/* Call to Action */}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            {/* Call to Action */}
            <div className='bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 text-center'>
              <h2 className='text-3xl font-bold mb-4 text-white'>
                Ready to Automate Your Business?
              </h2>
              <p className='text-xl text-white/80 mb-6'>
                Let our experts help you build the automation systems of the
                future

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              </p>
              <div className='flex flex-wrap justify-center gap-4'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                <Link
                  href='/contact'
                  className='px-8 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105'
                >
                  Get Started
                </Link>
                <Link
                  href='/case-studies'
                  className='px-8 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200'                >              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover: from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                <Link
                  href="/case-studies"

                  className="px-8 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
