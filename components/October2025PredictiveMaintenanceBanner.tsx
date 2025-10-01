import React from 'react';
import { Link } from 'react-router-dom';

/**
 * October 2025 AI-Powered Predictive Maintenance Revolution Banner
 * 
 * Promotes breakthrough content featuring:
 * - $4.3B Fortune 500 automotive manufacturing transformation
 * - 96% reduction in unplanned downtime
 * - 78% lower maintenance costs
 * - 15.8x ROI with 3.2-month payback
 * - 92% accuracy predicting failures 30-90 days in advance
 * 
 * Created: October 1, 2025
 */

export const October2025PredictiveMaintenanceBanner: React.FC = () => {
  return (
    <div className="predictive-maintenance-banner-oct-2025">
      <style>{`
        .predictive-maintenance-banner-oct-2025 {
          background: linear-gradient(135deg, #1a1f3a 0%, #2d1b4e 50%, #1a1f3a 100%);
          border-radius: 24px;
          padding: 48px;
          margin: 40px 0;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);
          border: 1px solid rgba(139, 92, 246, 0.2);
        }

        .predictive-maintenance-banner-oct-2025::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%);
          animation: pulseGlow 8s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .pm-banner-content {
          position: relative;
          z-index: 1;
        }

        .pm-banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(139, 92, 246, 0.2);
          border: 1px solid rgba(139, 92, 246, 0.4);
          border-radius: 24px;
          padding: 10px 20px;
          margin-bottom: 24px;
          animation: badgePulse 2s ease-in-out infinite;
        }

        @keyframes badgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .pm-banner-badge-icon {
          font-size: 20px;
          animation: rotate 4s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .pm-banner-badge-text {
          color: #a78bfa;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .pm-banner-title {
          font-size: 48px;
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 16px 0;
          line-height: 1.2;
          text-shadow: 0 2px 20px rgba(139, 92, 246, 0.4);
        }

        .pm-banner-title-highlight {
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pm-banner-subtitle {
          font-size: 24px;
          color: #c7d2fe;
          margin: 0 0 32px 0;
          line-height: 1.4;
        }

        .pm-metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 32px 0;
        }

        .pm-metric-card {
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .pm-metric-card:hover {
          background: rgba(139, 92, 246, 0.2);
          border-color: rgba(139, 92, 246, 0.5);
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(139, 92, 246, 0.3);
        }

        .pm-metric-value {
          font-size: 42px;
          font-weight: 900;
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 8px 0;
        }

        .pm-metric-label {
          color: #e0e7ff;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .pm-capabilities {
          margin: 40px 0;
        }

        .pm-capabilities-title {
          font-size: 28px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 24px 0;
          text-align: center;
        }

        .pm-capabilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .pm-capability-card {
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .pm-capability-card:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.5);
          transform: translateY(-4px);
        }

        .pm-capability-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }

        .pm-capability-title {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px 0;
        }

        .pm-capability-description {
          color: #c7d2fe;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        .pm-case-study-highlight {
          background: rgba(168, 85, 247, 0.15);
          border: 2px solid rgba(168, 85, 247, 0.4);
          border-radius: 20px;
          padding: 32px;
          margin: 40px 0;
          text-align: center;
        }

        .pm-case-study-tag {
          display: inline-block;
          background: rgba(168, 85, 247, 0.3);
          color: #e9d5ff;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .pm-case-study-title {
          font-size: 32px;
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 16px 0;
        }

        .pm-case-study-results {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          margin: 24px 0;
        }

        .pm-case-study-stat {
          text-align: center;
        }

        .pm-case-study-stat-value {
          font-size: 36px;
          font-weight: 900;
          color: #a78bfa;
          display: block;
        }

        .pm-case-study-stat-label {
          font-size: 14px;
          color: #e0e7ff;
          font-weight: 600;
        }

        .pm-industries {
          margin: 40px 0;
        }

        .pm-industries-title {
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 20px 0;
          text-align: center;
        }

        .pm-industries-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .pm-industry-tag {
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #c7d2fe;
          padding: 10px 20px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .pm-industry-tag:hover {
          background: rgba(139, 92, 246, 0.25);
          border-color: rgba(139, 92, 246, 0.5);
          transform: scale(1.05);
        }

        .pm-cta-section {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .pm-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
        }

        .pm-cta-primary {
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
          color: #ffffff;
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
        }

        .pm-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(139, 92, 246, 0.6);
        }

        .pm-cta-secondary {
          background: rgba(139, 92, 246, 0.2);
          color: #e0e7ff;
          border: 2px solid rgba(139, 92, 246, 0.5);
        }

        .pm-cta-secondary:hover {
          background: rgba(139, 92, 246, 0.3);
          border-color: rgba(139, 92, 246, 0.7);
          transform: translateY(-2px);
        }

        .pm-cta-tertiary {
          background: rgba(99, 102, 241, 0.2);
          color: #e0e7ff;
          border: 2px solid rgba(99, 102, 241, 0.5);
        }

        .pm-cta-tertiary:hover {
          background: rgba(99, 102, 241, 0.3);
          border-color: rgba(99, 102, 241, 0.7);
          transform: translateY(-2px);
        }

        .pm-trust-indicators {
          margin-top: 40px;
          padding-top: 32px;
          border-top: 1px solid rgba(139, 92, 246, 0.2);
          text-align: center;
        }

        .pm-trust-text {
          color: #a5b4fc;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        .pm-trust-highlights {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
          margin-top: 16px;
        }

        .pm-trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #c7d2fe;
          font-size: 14px;
          font-weight: 600;
        }

        .pm-trust-icon {
          font-size: 20px;
        }

        @media (max-width: 768px) {
          .predictive-maintenance-banner-oct-2025 {
            padding: 32px 24px;
            margin: 24px 0;
          }

          .pm-banner-title {
            font-size: 32px;
          }

          .pm-banner-subtitle {
            font-size: 18px;
          }

          .pm-metrics-grid {
            grid-template-columns: 1fr 1fr;
          }

          .pm-metric-value {
            font-size: 32px;
          }

          .pm-capabilities-grid {
            grid-template-columns: 1fr;
          }

          .pm-case-study-title {
            font-size: 24px;
          }

          .pm-case-study-results {
            gap: 24px;
          }

          .pm-cta-section {
            flex-direction: column;
          }

          .pm-cta-button {
            width: 100%;
            justify-content: center;
          }

          .pm-trust-highlights {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>

      <div className="pm-banner-content">
        {/* Badge */}
        <div className="pm-banner-badge">
          <span className="pm-banner-badge-icon">⚡</span>
          <span className="pm-banner-badge-text">🚨 BREAKTHROUGH OCTOBER 2025 🚨 Zero Downtime Revolution</span>
          <span className="pm-banner-badge-icon">⚡</span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="pm-banner-title">
          AI-Powered Predictive Maintenance: <span className="pm-banner-title-highlight">Eliminate 96% of Unplanned Downtime</span>
        </h1>
        <p className="pm-banner-subtitle">
          Transform manufacturing operations with AI that predicts equipment failures 30-90 days in advance. 
          Proven results: $4.3B value creation, 15.8x ROI, 3.2-month payback.
        </p>

        {/* Key Metrics Grid */}
        <div className="pm-metrics-grid">
          <div className="pm-metric-card">
            <div className="pm-metric-value">96%</div>
            <div className="pm-metric-label">Downtime Reduction</div>
          </div>
          <div className="pm-metric-card">
            <div className="pm-metric-value">$4.3B</div>
            <div className="pm-metric-label">Value Created</div>
          </div>
          <div className="pm-metric-card">
            <div className="pm-metric-value">15.8x</div>
            <div className="pm-metric-label">ROI (First Year)</div>
          </div>
          <div className="pm-metric-card">
            <div className="pm-metric-value">92%</div>
            <div className="pm-metric-label">Prediction Accuracy</div>
          </div>
        </div>

        {/* Revolutionary Capabilities */}
        <div className="pm-capabilities">
          <h2 className="pm-capabilities-title">🎯 Revolutionary Capabilities</h2>
          <div className="pm-capabilities-grid">
            <div className="pm-capability-card">
              <div className="pm-capability-icon">🔮</div>
              <h3 className="pm-capability-title">Predict Failures 30-90 Days Early</h3>
              <p className="pm-capability-description">
                AI models trained on 847M+ failure events achieve 92% accuracy predicting equipment failures months in advance. No more surprise breakdowns.
              </p>
            </div>
            <div className="pm-capability-card">
              <div className="pm-capability-icon">🤖</div>
              <h3 className="pm-capability-title">Autonomous Maintenance Orchestration</h3>
              <p className="pm-capability-description">
                Auto-schedule maintenance during planned downtime, optimize parts inventory just-in-time, coordinate multi-system interventions seamlessly.
              </p>
            </div>
            <div className="pm-capability-card">
              <div className="pm-capability-icon">💰</div>
              <h3 className="pm-capability-title">78% Lower Maintenance Costs</h3>
              <p className="pm-capability-description">
                Eliminate unnecessary preventive maintenance. Maintain only when actually needed based on real equipment condition, not arbitrary schedules.
              </p>
            </div>
          </div>
        </div>

        {/* Case Study Highlight */}
        <div className="pm-case-study-highlight">
          <div className="pm-case-study-tag">⭐ FORTUNE 500 SUCCESS STORY ⭐</div>
          <h2 className="pm-case-study-title">
            Automotive Manufacturer: $4.3B Annual Value Creation
          </h2>
          <div className="pm-case-study-results">
            <div className="pm-case-study-stat">
              <span className="pm-case-study-stat-value">43</span>
              <span className="pm-case-study-stat-label">Plants Transformed</span>
            </div>
            <div className="pm-case-study-stat">
              <span className="pm-case-study-stat-value">127K</span>
              <span className="pm-case-study-stat-label">IoT Sensors</span>
            </div>
            <div className="pm-case-study-stat">
              <span className="pm-case-study-stat-value">23,400</span>
              <span className="pm-case-study-stat-label">Assets Monitored</span>
            </div>
            <div className="pm-case-study-stat">
              <span className="pm-case-study-stat-value">3.2 Mo</span>
              <span className="pm-case-study-stat-label">Payback Period</span>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="pm-industries">
          <h2 className="pm-industries-title">🏭 Proven Across Industries</h2>
          <div className="pm-industries-list">
            <div className="pm-industry-tag">🚗 Automotive</div>
            <div className="pm-industry-tag">✈️ Aerospace</div>
            <div className="pm-industry-tag">💻 Semiconductor</div>
            <div className="pm-industry-tag">⚡ Power Generation</div>
            <div className="pm-industry-tag">🛢️ Oil & Gas</div>
            <div className="pm-industry-tag">🧪 Chemical Processing</div>
            <div className="pm-industry-tag">🍔 Food & Beverage</div>
            <div className="pm-industry-tag">💊 Pharmaceutical</div>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="pm-cta-section">
          <Link to="/content/blog/ai-2025-oct-predictive-maintenance-revolution" className="pm-cta-button pm-cta-primary">
            <span>📖 Read Full Story</span>
            <span>→</span>
          </Link>
          <Link to="/content/case-studies/ai-2025-oct-automotive-predictive-maintenance-4-3-billion-success" className="pm-cta-button pm-cta-secondary">
            <span>📊 View $4.3B Case Study</span>
            <span>→</span>
          </Link>
          <Link to="/content/services/ai-predictive-maintenance-services" className="pm-cta-button pm-cta-tertiary">
            <span>🚀 Explore Services</span>
            <span>→</span>
          </Link>
        </div>

        {/* Free Assessment CTA */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/contact" className="pm-cta-button pm-cta-primary" style={{ fontSize: '18px', padding: '20px 40px' }}>
            <span>🎯 Get FREE 2-Week Assessment</span>
            <span>→</span>
          </Link>
          <p style={{ color: '#a5b4fc', fontSize: '14px', marginTop: '12px' }}>
            Zero cost, no obligation. Discover your $50M-$500M opportunity.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="pm-trust-indicators">
          <p className="pm-trust-text">
            Trusted by 847+ enterprises globally. $127B+ in documented value creation.
          </p>
          <div className="pm-trust-highlights">
            <div className="pm-trust-item">
              <span className="pm-trust-icon">✅</span>
              <span>15.8x Average ROI</span>
            </div>
            <div className="pm-trust-item">
              <span className="pm-trust-icon">✅</span>
              <span>94% Customer Renewal Rate</span>
            </div>
            <div className="pm-trust-item">
              <span className="pm-trust-icon">✅</span>
              <span>Success Guarantee</span>
            </div>
            <div className="pm-trust-item">
              <span className="pm-trust-icon">✅</span>
              <span>Fortune 500 Validated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025PredictiveMaintenanceBanner;
