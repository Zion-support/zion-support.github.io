import { ArrowRight, TrendingUp, Zap, Factory, Cogs } from 'lucide-react';
import React from 'react';
import { ArrowRight, Cogs, Factory, TrendingUp, Zap } from 'lucide-react';



import ArrowRight from 'next/link';

const AutonomousManufacturingRevolutionBanner: React.FC = () => {
  return (
    <div>
      {/* Animated background elements */}
      <div>
        <div></div>
        <div></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      <div>
        <div>
          {/* Left Column - Content */}
          <div>
            <div>
              <div>
                <Factory />
                <span>Autonomous Manufacturing</span>
              </div>
              
              <h2>
                The <span>Manufacturing</span> Revolution
              </h2>
              
              <p>
                Transform your manufacturing operations with autonomous AI systems that manage production, optimize quality, and coordinate global supply chains. Experience unprecedented efficiency with self-managing manufacturing ecosystems.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <div>
                <div>
                  <Cogs />
                </div>
                <span>Self-Managing Production</span>
              </div>
              <div>
                <div>
                  <TrendingUp />
                </div>
                <span>Predictive Maintenance</span>
              </div>
              <div>
                <div>
                  <Factory />
                </div>
                <span>Autonomous Quality Control</span>
              </div>
              <div>
                <div>
                  <Zap />
                </div>
                <span>Supply Chain Optimization</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ArrowRight 
                href="/blog/ai-2026-autonomous-enterprise-operations"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                <Factory />
                Explore Autonomous Operations
                <ArrowRight className="w-5 h-5 ml-2" />
              </ArrowRight>
              <ArrowRight 
                href="/case-studies/ai-2026-autonomous-manufacturing-revolution-127-billion-success"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-orange-400 text-orange-200 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-300"
              >
                $127B Success Story
              </ArrowRight>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div>
            <div>
              {/* Main manufacturing visualization */}
              <div>
                <div>
                  <div>
                    {/* Central manufacturing hub */}
                    <div></div>
                    {/* Manufacturing elements */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-8 h-8 bg-orange-400 rounded animate-spin" style={{ animationDuration: '2s' }}></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-8 h-8 bg-red-400 rounded animate-spin" style={{ animationDuration: '2s',
  animationDirection: 'reverse' }}></div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 w-8 h-8 bg-yellow-400 rounded animate-spin" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 w-8 h-8 bg-orange-400 rounded animate-spin" style={{ animationDuration: '3s',
  animationDirection: 'reverse' }}></div>
                  </div>
                </div>
                
                {/* Manufacturing data points */}
                <div></div>
                <div className="absolute top-16 right-12 w-2 h-2 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-12 left-16 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-8 right-8 w-3 h-3 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
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
            <div>$127B</div>
            <div>Value Creation</div>
          </div>
          <div>
            <div>567%</div>
            <div>Efficiency Improvement</div>
          </div>
          <div>
            <div>98.7%</div>
            <div>Equipment Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousManufacturingRevolutionBanner;