import { TrendingUp, CheckCircle, Globe, BookOpen, Award, Zap } from 'lucide-react';
import Link from 'next/link';



/**
 * Content Intelligence Revolution Banner
 * Promotes the latest autonomous content intelligence blog post and case study
 * Published: October 1, 2025
 */
export default function ContentIntelligenceBanner() {
  return (
    <section>
      {/* Animated background pattern */}
      <div>
        <div />
        <div />
      </div>

      <div>
        {/* Top Badge */}
        <div>
          <div>
            <Zap />
            <span>🚀 JUST PUBLISHED: OCTOBER 1, 2025 - CONTENT INTELLIGENCE BREAKTHROUGH!</span>
            <Zap />
          </div>
        </div>

        {/* Main Heading */}
        <div>
          <h2>
            Autonomous Content Intelligence
            <br />
            <span>Revolution</span>
          </h2>
          <p>
            $127M Proven Value • 99.8% Accuracy • 47,000+ Automated Workflows
          </p>
          <p>
            Transform your enterprise content operations with AI-powered autonomous systems. 
            Fortune 100 proven success across 84 countries with breakthrough results.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div>
          <div>
            <div>$127M</div>
            <div>Annual Value</div>
          </div>
          <div>
            <div>99.8%</div>
            <div>Classification Accuracy</div>
          </div>
          <div>
            <div>47,000+</div>
            <div>Automated Workflows</div>
          </div>
          <div>
            <div>95%</div>
            <div>Cycle Time Reduction</div>
          </div>
          <div>
            <div>127</div>
            <div>Languages Supported</div>
          </div>
          <div>
            <div>340%</div>
            <div>Productivity Gain</div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div>
          <div>
            <BookOpen />
            <h3>Intelligent Processing</h3>
            <ul>
              <li>
                <CheckCircle />
                <span>1,000+ documents/second processing</span>
              </li>
              <li>
                <CheckCircle />
                <span>Advanced NLP & computer vision</span>
              </li>
              <li>
                <CheckCircle />
                <span>Real-time quality assessment</span>
              </li>
              <li>
                <CheckCircle />
                <span>Sub-100ms response time</span>
              </li>
            </ul>
          </div>

          <div>
            <TrendingUp />
            <h3>Autonomous Operations</h3>
            <ul>
              <li>
                <CheckCircle />
                <span>Self-learning workflow optimization</span>
              </li>
              <li>
                <CheckCircle />
                <span>24/7 unattended processing</span>
              </li>
              <li>
                <CheckCircle />
                <span>Automatic compliance checking</span>
              </li>
              <li>
                <CheckCircle />
                <span>Intelligent content distribution</span>
              </li>
            </ul>
          </div>

          <div>
            <Globe />
            <h3>Enterprise Scale</h3>
            <ul>
              <li>
                <CheckCircle />
                <span>247,000 employees supported</span>
              </li>
              <li>
                <CheckCircle />
                <span>84 countries deployment</span>
              </li>
              <li>
                <CheckCircle />
                <span>99.99% uptime guarantee</span>
              </li>
              <li>
                <CheckCircle />
                <span>Enterprise-grade security</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Buttons */}
        <div>
          <Link
            href="/blog/ai-2025-oct-01-autonomous-content-intelligence-revolution"
            className="group bg-yellow-400 text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all shadow-2xl hover:shadow-yellow-400/50 hover:scale-105 flex items-center gap-2"
          >
            <BookOpen />
            <span>📖 Read Complete Guide (18 min)</span>
            <span>→</span>
          </Link>
          
          <Link
            href="/case-studies/ai-2025-oct-01-content-intelligence-127-million-success"
            className="group bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-white/50 hover:scale-105 flex items-center gap-2"
          >
            <Award />
            <span>💎 View $127M Success Story</span>
            <span>→</span>
          </Link>
        </div>

        {/* Additional CTA */}
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-3 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all shadow-2xl hover:scale-105"
          >
            <Zap />
            <span>🚀 Transform Your Content Operations Today</span>
          </Link>
        </div>

        {/* Social Proof */}
        <div>
          <p>TRUSTED BY FORTUNE 100 LEADERS</p>
          <div>
            <div>✅ Manufacturing</div>
            <div>✅ Financial Services</div>
            <div>✅ Healthcare</div>
            <div>✅ Retail</div>
            <div>✅ Technology</div>
            <div>✅ Energy</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Compact Content Intelligence Showcase Banner
 * For use in content hub and other pages
 */
export function ContentIntelligenceShowcaseBanner() {
  return (
    <div>
      <div>
        <div>
          🔥 NEW: OCTOBER 1, 2025 - CONTENT INTELLIGENCE BREAKTHROUGH!
        </div>
        <h2>
          Autonomous Content Intelligence Revolution
        </h2>
        <p>
          $127M Proven Value • 99.8% Accuracy • 47,000+ Workflows
        </p>
        <p>
          Transform enterprise content operations with AI-powered autonomous systems. 
          Fortune 100 proven success across 84 countries worldwide.
        </p>
        <div>
          <Link
            href="/blog/ai-2025-oct-01-autonomous-content-intelligence-revolution"
            className="bg-yellow-400 text-emerald-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors shadow-2xl"
          >
            📖 Read Revolutionary Guide →
          </Link>
          <Link
            href="/case-studies/ai-2025-oct-01-content-intelligence-127-million-success"
            className="bg-white text-emerald-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-2xl"
          >
            💎 View $127M Success Story →
          </Link>
          <Link
            href="/contact"
            className="border-3 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors shadow-2xl"
          >
            🚀 Get Started Today →
          </Link>
        </div>
      </div>
    </div>
  );
}
