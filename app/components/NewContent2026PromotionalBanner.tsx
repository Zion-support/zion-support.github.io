import ArrowRight from 'next/link';
import { ArrowRight, Brain, TrendingUp, Zap } from 'lucide-react';




export default function NewContent2026PromotionalBanner() {
  return (
    <section>
      {/* Animated Background */}
      <div>
        <div></div>
      </div>
      
      <div>
        <div>
          <div>
            <Zap />
            NEW OCTOBER 2026 CONTENT
          </div>
          <h2>
            Latest AI Innovations & Success Stories
          </h2>
          <p>
            Explore cutting-edge AI technologies that are transforming industries worldwide
          </p>
        </div>

        <div>
          {/* Federated Learning Card */}
          <ArrowRight 
            href="/blog/ai-federated-learning-privacy-2026"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div>
              <div>
                <LockIcon />
              </div>
              <span>
                NEW GUIDE
              </span>
            </div>
            
            <h3>
              Federated Learning & Privacy AI 2026
            </h3>
            
            <p>
              Master privacy-preserving machine learning at scale. Achieve 99.9% accuracy while keeping data distributed and secure across your organization.
            </p>
            
            <div>
              <div>
                <div>99.9%</div>
                <div>Accuracy</div>
              </div>
              <div>
                <div>100%</div>
                <div>Data Privacy</div>
              </div>
              <div>
                <div>$8M+</div>
                <div>Savings</div>
              </div>
            </div>
            
            <div>
              Read Full Guide
              <ArrowRight />
            </div>
          </ArrowRight>

          {/* Reinforcement Learning Card */}
          <ArrowRight 
            href="/blog/ai-reinforcement-learning-robotics-2026"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div>
              <div>
                <Brain />
              </div>
              <span>
                NEW GUIDE
              </span>
            </div>
            
            <h3>
              Reinforcement Learning for Robotics 2026
            </h3>
            
            <p>
              Deploy intelligent robots that learn from experience. Achieve 98% task success rates and $15M+ operational savings with deep RL.
            </p>
            
            <div>
              <div>
                <div>98%</div>
                <div>Success Rate</div>
              </div>
              <div>
                <div>90%</div>
                <div>Faster Training</div>
              </div>
              <div>
                <div>$15M+</div>
                <div>Savings</div>
              </div>
            </div>
            
            <div>
              Read Full Guide
              <ArrowRight />
            </div>
          </ArrowRight>

          {/* Retail Case Study Card */}
          <ArrowRight 
            href="/case-studies/ai-retail-personalization-transformation-2026"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div>
              <div>
                <TrendingUp />
              </div>
              <span>
                CASE STUDY
              </span>
            </div>
            
            <h3>
              Retail Personalization: $25M Revenue Boost
            </h3>
            
            <p>
              See how GlobalRetail Corp achieved $25M revenue increase and 45% conversion improvement through AI-powered personalization.
            </p>
            
            <div>
              <div>
                <div>$25M</div>
                <div>Revenue</div>
              </div>
              <div>
                <div>45%</div>
                <div>Conversion</div>
              </div>
              <div>
                <div>180%</div>
                <div>ROI</div>
              </div>
            </div>
            
            <div>
              Read Case Study
              <ArrowRight />
            </div>
          </ArrowRight>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <ArrowRight
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <Zap />
            Explore All Latest Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </ArrowRight>
        </div>
      </div>
    </section>
  );
}
