import ArrowRight from 'next/link';
import { ArrowRight, Award, DollarSign, TrendingUp, Users } from 'lucide-react';




export default function MegaTransformationSuccessBanner() {
  return (
    <section>
      <div>
        {/* Header */}
        <div>
          <h2>
            🏆 Mega Transformation Success Stories
          </h2>
          <p>
            Real-world AI transformation results from Fortune 500 companies, 
            delivering unprecedented ROI and operational excellence.
          </p>
        </div>

        {/* Featured Success Stories */}
        <div>
          {/* Fortune 500 Success */}
          <div>
            <div>
              <Award />
              <h3>Fortune 500 Transformation</h3>
            </div>
            <div>
              <div>
                <DollarSign />
                <span>$200M+ ROI</span>
              </div>
              <div>
                <TrendingUp />
                <span>800% Productivity Gain</span>
              </div>
              <div>
                <Users />
                <span>15-month Payback</span>
              </div>
            </div>
            <ArrowRight 
              href="/case-studies/fortune-500-autonomous-operations-transformation-2026"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
            </ArrowRight>
            <div className="text-xs text-yellow-300 mt-2 font-semibold">🌟 PREMIUM SUCCESS</div>
          </div>

          {/* Manufacturing Transformation */}
          <div>
            <div>
              <Star />
              <h3>Manufacturing Excellence</h3>
            </div>
            <div>
              <div>
                <DollarSign />
                <span>$150M+ Savings</span>
              </div>
              <div>
                <TrendingUp />
                <span>600% Efficiency Boost</span>
              </div>
              <div>
                <Users />
                <span>99.8% Uptime</span>
              </div>
            </div>
            <ArrowRight 
              href="/case-studies/ai-manufacturing-transformation-mega-success-2026"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
            </ArrowRight>
            <div className="text-xs text-orange-300 mt-2 font-semibold">⚡ MEGA SUCCESS</div>
          </div>

          {/* Healthcare Innovation */}
          <div>
            <div>
              <Award />
              <h3>Healthcare AI Revolution</h3>
            </div>
            <div>
              <div>
                <DollarSign />
                <span>$75M+ Value</span>
              </div>
              <div>
                <TrendingUp />
                <span>95% Accuracy</span>
              </div>
              <div>
                <Users />
                <span>50% Faster Diagnosis</span>
              </div>
            </div>
            <ArrowRight 
              href="/case-studies/healthcare-ai-diagnostic-system-2025"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
            </ArrowRight>
            <div className="text-xs text-red-300 mt-2 font-semibold">💎 INNOVATION</div>
          </div>

          {/* Finance Automation */}
          <div>
            <div>
              <Star />
              <h3>Finance Automation</h3>
            </div>
            <div>
              <div>
                <DollarSign />
                <span>$120M+ ROI</span>
              </div>
              <div>
                <TrendingUp />
                <span>700% Process Speed</span>
              </div>
              <div>
                <Users />
                <span>99.9% Accuracy</span>
              </div>
            </div>
            <ArrowRight 
              href="/case-studies/ai-finance-automation-success-story"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
            </ArrowRight>
            <div className="text-xs text-green-300 mt-2 font-semibold">🚀 AUTOMATION</div>
          </div>

          {/* Supply Chain Optimization */}
          <div>
            <div>
              <Award />
              <h3>Supply Chain Excellence</h3>
            </div>
            <div>
              <div>
                <DollarSign />
                <span>$180M+ Savings</span>
              </div>
              <div>
                <TrendingUp />
                <span>500% Optimization</span>
              </div>
              <div>
                <Users />
                <span>99.7% On-time Delivery</span>
              </div>
            </div>
            <ArrowRight 
              href="/case-studies/ai-supply-chain-optimization-mega-success-2025"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
            </ArrowRight>
            <div className="text-xs text-blue-300 mt-2 font-semibold">⚡ OPTIMIZATION</div>
          </div>

          {/* Global Logistics */}
          <div>
            <div>
              <Star />
              <h3>Global Logistics AI</h3>
            </div>
            <div>
              <div>
                <DollarSign />
                <span>$250M+ Value</span>
              </div>
              <div>
                <TrendingUp />
                <span>900% Efficiency</span>
              </div>
              <div>
                <Users />
                <span>Global Scale</span>
              </div>
            </div>
            <ArrowRight 
              href="/case-studies/global-logistics-ai-transformation-2026"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
            </ArrowRight>
            <div className="text-xs text-purple-300 mt-2 font-semibold">🌍 GLOBAL</div>
          </div>
        </div>

        {/* Success Metrics */}
        <div>
          <h3>Cumulative Success Metrics</h3>
          <div>
            <div>
              <div>$1.2B+</div>
              <div>Total Value Created</div>
            </div>
            <div>
              <div>99.9%</div>
              <div>Average Success Rate</div>
            </div>
            <div>
              <div>800%</div>
              <div>Max Productivity Gain</div>
            </div>
            <div>
              <div>18mo</div>
              <div>Average Payback Period</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <ArrowRight
              href="/case-studies"
              className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center"
            >
              View All Case Studies <ArrowRight className="w-5 h-5 ml-2" />
            </ArrowRight>
            <ArrowRight
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-900 transition-colors flex items-center"
            >
              Start Your Transformation <Star className="w-5 h-5 ml-2" />
            </ArrowRight>
          </div>
          <p>
            Join the ranks of industry leaders who have achieved extraordinary results with AI
          </p>
        </div>
      </div>
    </section>
  );
}