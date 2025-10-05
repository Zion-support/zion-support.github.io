import ArrowRight from 'next/link';
import { ArrowRight, TrendingUp, User, Users } from 'lucide-react';




export default function NewContent2026ShowcaseBanner() {
  return (
    <section>
      {/* Background Pattern */}
      <div>
        <div></div>
      </div>
      
      <div>
        <div>
          <div>
            <Star />
            EXCLUSIVE 2026 CONTENT
          </div>
          <h2>
            Revolutionary AI Insights for 2026
          </h2>
          <p>
            Discover cutting-edge AI technologies, breakthrough case studies, and transformative business strategies 
            that are reshaping industries worldwide.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div>
          {/* Featured Article 1 */}
          <ArrowRight href="/blog/ai-future-workforce-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span>
                  FUTURE OF WORK
                </span>
              </div>
              <h3>
                AI Future Workforce 2026: Human-AI Collaboration Revolution
              </h3>
              <p>
                Discover how AI is reshaping the workforce with 85% job transformation and 60% productivity gains.
              </p>
              <div>
                <div>
                  <div>
                    <div>85%</div>
                    <div>Jobs Transformed</div>
                  </div>
                  <div>
                    <div>60%</div>
                    <div>Productivity Gain</div>
                  </div>
                </div>
                <ArrowRight />
              </div>
            </div>
          </ArrowRight>

          {/* Featured Article 2 */}
          <ArrowRight href="/blog/ai-cybersecurity-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-red-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span>
                  CYBERSECURITY
                </span>
              </div>
              <h3>
                AI Cybersecurity 2026: Next-Generation Threat Protection
              </h3>
              <p>
                Advanced AI security with 99.7% threat detection accuracy and autonomous incident response.
              </p>
              <div>
                <div>
                  <div>
                    <div>99.7%</div>
                    <div>Detection Rate</div>
                  </div>
                  <div>
                    <div>80%</div>
                    <div>Cost Reduction</div>
                  </div>
                </div>
                <ArrowRight />
              </div>
            </div>
          </ArrowRight>

          {/* Featured Case Study */}
          <ArrowRight href="/case-studies/ai-finance-automation-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span>
                  FEATURED
                </span>
              </div>
              <h3>
                AI Finance Automation: $15M ROI Success Story
              </h3>
              <p>
                Fortune 500 company achieves 95% process automation and $15M annual ROI with AI finance solutions.
              </p>
              <div>
                <div>
                  <div>
                    <div>$15M</div>
                    <div>Annual ROI</div>
                  </div>
                  <div>
                    <div>95%</div>
                    <div>Automation</div>
                  </div>
                </div>
                <ArrowRight />
              </div>
            </div>
          </ArrowRight>
        </div>

        {/* Stats Section */}
        <div>
          <div>
            <div>50+</div>
            <div>New Articles</div>
          </div>
          <div>
            <div>25+</div>
            <div>Case Studies</div>
          </div>
          <div>
            <div>$100M+</div>
            <div>Total ROI Demonstrated</div>
          </div>
          <div>
            <div>95%</div>
            <div>Average Automation</div>
          </div>
        </div>

        {/* CTA Section */}
        <div>
          <div>
            <h3>
              Stay Ahead with Cutting-Edge AI Insights
            </h3>
            <p>
              Join 50,000+ professionals who trust Zion Tech Group for the latest AI innovations, 
              practical implementations, and proven business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ArrowRight
                href="/blog"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <TrendingUp />
                Explore All Content
              </ArrowRight>
              <ArrowRight
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center"
              >
                <Users />
                View Case Studies
              </ArrowRight>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}