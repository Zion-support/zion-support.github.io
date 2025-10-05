import { ArrowRight, TrendingUp, DollarSign, Users, Award, Star } from 'lucide-react';
import Link from 'next/link';



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
            <Link 
              href="/case-studies/fortune-500-autonomous-operations-transformation-2026"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight />
            </Link>
            <div>🌟 PREMIUM SUCCESS</div>
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
            <Link 
              href="/case-studies/ai-manufacturing-transformation-mega-success-2026"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight />
            </Link>
            <div>⚡ MEGA SUCCESS</div>
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
            <Link 
              href="/case-studies/healthcare-ai-diagnostic-system-2025"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight />
            </Link>
            <div>💎 INNOVATION</div>
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
            <Link 
              href="/case-studies/ai-finance-automation-success-story"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight />
            </Link>
            <div>🚀 AUTOMATION</div>
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
            <Link 
              href="/case-studies/ai-supply-chain-optimization-mega-success-2025"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight />
            </Link>
            <div>⚡ OPTIMIZATION</div>
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
            <Link 
              href="/case-studies/global-logistics-ai-transformation-2026"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight />
            </Link>
            <div>🌍 GLOBAL</div>
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
        <div>
          <div>
            <Link
              href="/case-studies"
              className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center"
            >
              View All Case Studies <ArrowRight />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-900 transition-colors flex items-center"
            >
              Start Your Transformation <Star />
            </Link>
          </div>
          <p>
            Join the ranks of industry leaders who have achieved extraordinary results with AI
          </p>
        </div>
      </div>
    </section>
  );
}