/**
 * New insights and analysis
 */

export interface Insight {
  id: string;
  title: string;
  content: string;
  category: string;
  publishedAt: string;
  featured: boolean;
}

/**
 * New insights collection
 */
export const newInsights: Insight[] = [
  {
    id: "ai-security-insights",
    title: "AI Security Capabilities and Best Practices",
    content: `
      <h3>AI Security Capabilities</h3>
      <ul>
        <li>Advanced threat detection using machine learning</li>
        <li>Automated security monitoring and response</li>
        <li>Predictive security analytics</li>
        <li>Real-time vulnerability assessment</li>
      </ul>
      
      <h3>Key Principles</h3>
      <ul>
        <li>Defense in depth approach</li>
        <li>Zero trust architecture</li>
        <li>Continuous monitoring and validation</li>
        <li>Automated incident response</li>
      </ul>
      
      <h3>AI Analytics Capabilities</h3>
      <ul>
        <li>Real-time data processing</li>
        <li>Predictive analytics and forecasting</li>
        <li>Anomaly detection and alerting</li>
        <li>Automated reporting and insights</li>
      </ul>
      
      <h3>Implementation Strategy</h3>
      <p>Start with data quality initiatives, then implement self-service analytics platforms that empower business users to explore data independently.</p>
    `,
    category: "AI Security",
    publishedAt: "2024-12-01",
    featured: true
  },
  {
    id: "automation-pillars",
    title: "Automation Pillars for Enterprise Success",
    content: `
      <h3>Automation Pillars</h3>
      <ul>
        <li>Scorecards with owners and review cadence</li>
        <li>Policy tests in CI for high-risk areas</li>
        <li>Live canaries with rollback triggers</li>
      </ul>
    `,
    category: "Automation",
    publishedAt: "2024-12-01",
    featured: false
  }
];

export default newInsights;