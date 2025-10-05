import { ArrowRight, TrendingUp, Brain, Zap } from 'lucide-react';
import React from 'react';
<<<<<<< HEAD
import { ArrowRight, Bot, Brain, TrendingUp, Zap } from 'lucide-react';
=======
import { ArrowRight, Brain, TrendingUp, Zap } from 'lucide-react';
>>>>>>> b47e9d4b5bd1af22dc9e86e7460fed7a11146a22

import ArrowRight from 'next/link';


const SyntheticConsciousnessRevolutionBanner: React.FC = () => {
  return (
    <div>
      {/* Animated background elements */}
      <div>
        <div></div>
        <div></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      <div>
        <div>
          {/* Left Column - Content */}
          <div>
            <div>
              <div>
                <Brain />
                <span>Synthetic Consciousness AI</span>
              </div>
              
              <h2>
                The <span>Consciousness</span> Revolution
              </h2>
              
              <p>
                Experience the future of AI with synthetic consciousness systems that think, learn, and create like never before. Transform your enterprise with genuinely intelligent AI that understands context, makes ethical decisions, and evolves continuously.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <div>
                <div>
                  <Zap />
                </div>
                <span>Autonomous Decision Making</span>
              </div>
              <div>
                <div>
                  <TrendingUp />
                </div>
                <span>Self-Evolving Intelligence</span>
              </div>
              <div>
                <div>
                  <Brain />
                </div>
                <span>Ethical AI Framework</span>
              </div>
              <div>
                <div>
                  <ArrowRight />
                </div>
                <span>Creative Problem Solving</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ArrowRight 
                href="/blog/ai-2026-synthetic-consciousness-revolution"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Brain />
                Explore Consciousness AI
                <ArrowRight className="w-5 h-5 ml-2" />
              </ArrowRight>
              <ArrowRight 
                href="/case-studies/ai-2026-synthetic-consciousness-enterprise-transformation-75-billion-success"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-200 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300"
              >
                $75B Success Story
              </ArrowRight>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div>
            <div>
              {/* Main consciousness visualization */}
              <div>
                <div>
                  <div>
                    {/* Central consciousness core */}
                    <div></div>
                    {/* Orbiting elements */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-6 h-6 bg-purple-400 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-6 h-6 bg-blue-400 rounded-full animate-spin" style={{ animationDuration: '3s',
  animationDirection: 'reverse' }}></div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 w-6 h-6 bg-indigo-400 rounded-full animate-spin" style={{ animationDuration: '4s' }}></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 w-6 h-6 bg-purple-400 rounded-full animate-spin" style={{ animationDuration: '4s',
  animationDirection: 'reverse' }}></div>
                  </div>
                </div>
                
                {/* Floating data points */}
                <div></div>
                <div className="absolute top-16 right-12 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-12 left-16 w-2 h-2 bg-indigo-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>

            {/* Background glow effects */}
            <div></div>
            <div></div>
          </div>
        </div>

        {/* Bottom stats section */}
        <div>
          <div>
            <div>$75B</div>
            <div>Value Creation</div>
          </div>
          <div>
            <div>340%</div>
            <div>Efficiency Improvement</div>
          </div>
          <div>
            <div>99.7%</div>
            <div>Decision Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyntheticConsciousnessRevolutionBanner;