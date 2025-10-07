import { Star } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Star } from 'lucide-react';

export default function NewContent2026ShowcaseBanner() {
  return (
    <section className='py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent'></div>
      </div>

      <div className='max-w-6xl mx-auto px-4 relative z-10'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6'>
            <Star className='w-4 h-4 mr-2' />
            EXCLUSIVE 2026 CONTENT
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Revolutionary AI Insights for 2026
          </h2>
          <p className='text-xl opacity-90 max-w-3xl mx-auto'>
            Discover cutting-edge AI technologies, breakthrough case studies,
            and transformative business strategies that are reshaping industries
            worldwide.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          {/* Featured Article 1 */}
          <ArrowRight href="/blog/ai-future-workforce-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                  FUTURE OF WORK
                </span>
              </div>
              <h3 className='text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors'>
                AI Future Workforce 2026: Human-AI Collaboration Revolution
              </h3>
              <p className='text-white/80 text-sm mb-4'>
                Discover how AI is reshaping the workforce with 85% job
                transformation and 60% productivity gains.
              </p>
              <div className='flex items-center justify-between'>
                <div className='flex gap-4'>
                  <div className='text-center'>
                    <div className='text-lg font-bold text-yellow-300'>85%</div>
                    <div className='text-xs text-white/70'>
                      Jobs Transformed
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-lg font-bold text-green-300'>60%</div>
                    <div className='text-xs text-white/70'>
                      Productivity Gain
                    </div>
                  </div>
                </div>
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </div>
            </div>
          </Link>

          {/* Featured Article 2 */}
          <ArrowRight href="/blog/ai-cybersecurity-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-red-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className='bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                  CYBERSECURITY
                </span>
              </div>
              <h3 className='text-xl font-bold mb-3 group-hover:text-red-200 transition-colors'>
                AI Cybersecurity 2026: Next-Generation Threat Protection
              </h3>
              <p className='text-white/80 text-sm mb-4'>
                Advanced AI security with 99.7% threat detection accuracy and
                autonomous incident response.
              </p>
              <div className='flex items-center justify-between'>
                <div className='flex gap-4'>
                  <div className='text-center'>
                    <div className='text-lg font-bold text-red-300'>99.7%</div>
                    <div className='text-xs text-white/70'>Detection Rate</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-lg font-bold text-purple-300'>80%</div>
                    <div className='text-xs text-white/70'>Cost Reduction</div>
                  </div>
                </div>
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </div>
            </div>
          </Link>

          {/* Featured Case Study */}
          <ArrowRight href="/case-studies/ai-finance-automation-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                  FEATURED
                </span>
              </div>
              <h3 className='text-xl font-bold mb-3 group-hover:text-green-200 transition-colors'>
                AI Finance Automation: $15M ROI Success Story
              </h3>
              <p className='text-white/80 text-sm mb-4'>
                Fortune 500 company achieves 95% process automation and $15M
                annual ROI with AI finance solutions.
              </p>
              <div className='flex items-center justify-between'>
                <div className='flex gap-4'>
                  <div className='text-center'>
                    <div className='text-lg font-bold text-green-300'>$15M</div>
                    <div className='text-xs text-white/70'>Annual ROI</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-lg font-bold text-teal-300'>95%</div>
                    <div className='text-xs text-white/70'>Automation</div>
                  </div>
                </div>
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </div>
            </div>
          </Link>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
          <div className='text-center'>
            <div className='text-3xl font-bold text-yellow-300 mb-2'>50+</div>
            <div className='text-white/80 text-sm'>New Articles</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-green-300 mb-2'>25+</div>
            <div className='text-white/80 text-sm'>Case Studies</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-blue-300 mb-2'>$100M+</div>
            <div className='text-white/80 text-sm'>Total ROI Demonstrated</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-purple-300 mb-2'>95%</div>
            <div className='text-white/80 text-sm'>Average Automation</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='text-center'>
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
            <h3 className='text-2xl font-bold mb-4'>
              Stay Ahead with Cutting-Edge AI Insights
            </h3>
            <p className='text-white/80 mb-6 max-w-2xl mx-auto'>
              Join 50,000+ professionals who trust Zion Tech Group for the
              latest AI innovations, practical implementations, and proven
              business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ArrowRight
                href="/blog"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <TrendingUp className='w-5 h-5 mr-2' />
                Explore All Content
              </Link>
              <Link
                href='/case-studies'
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center'
              >
                <Users className='w-5 h-5 mr-2' />
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }
