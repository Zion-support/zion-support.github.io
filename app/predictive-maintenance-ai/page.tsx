import ProductPageLayout from '../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Predictive Maintenance AI | Zion Tech Group',
  description:
    'Predict equipment failures before they happen. AI analyzes IoT sensor data to forecast breakdowns, recommend maintenance windows, and reduce downtime by up to 55%.',
  alternates: { canonical: '/predictive-maintenance-ai' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Predictive Maintenance AI',
        category: 'Industrial IoT & Operations',
        description:
          'Stop unplanned downtime. Our Predictive Maintenance AI ingests data from sensors, SCADA systems, and maintenance logs to forecast equipment failures before they occur. Get early warnings (days or weeks in advance), prioritize work orders, and optimize spare parts inventory. Reduce maintenance costs by 40% and downtime by 55%. Starting at $2,499/month.',
        iconEmoji: '🔧',
        features: [
          {
            title: 'Multi-Source Data Ingestion',
            description:
              'Connect to PLCs, vibration sensors, temperature probes, oil analysis, maintenance logs, and ERP systems (SAP, IBM Maximo). Handles high-frequency time-series data.',
          },
          {
            title: 'Failure Forecasting Models',
            description:
              'Machine learning models (survival analysis, gradient boosting, LSTM) predict Remaining Useful Life (RUL) and probability of failure over next 7–90 days.',
          },
          {
            title: 'Anomaly Detection & Alerts',
            description:
              'Real-time detection of abnormal sensor patterns. Alerts include recommended action, urgency level, and likely root cause. Delivered via SMS, Slack, or CMMS.',
          },
          {
            title: 'Maintenance Workorder Prioritization',
            description:
              'Automatically rank maintenance tasks by business impact, safety risk, and production loss. Optimize crew scheduling and minimize disruption.',
          },
          {
            title: 'Spare Parts Optimization',
            description:
              'Predict which parts will fail and when. Optimize inventory levels, reduce carrying costs, and ensure critical spares are on hand.',
          },
          {
            title: 'Digital Twin Visualization',
            description:
              'Interactive dashboards showing equipment health, failure predictions, and maintenance history. Drill down from plant → line → asset level.',
          },
        ],
        useCases: [
          {
            title: 'Manufacturing Plants',
            description:
              'Keep production lines running. Predict motor failures, pump wear, bearing fatigue, and thermal issues before they halt lines.',
            icon: '🏭',
          },
          {
            title: 'Oil & Gas / Energy',
            description:
              'Monitor compressors, turbines, and pipelines in real time. Prevent environmental incidents and costly unplanned shutdowns.',
            icon: '⚡',
          },
          {
            title: 'Transportation & Fleet',
            description:
              'Predict engine, brake, and tire failures for trucks, aircraft, and trains. Schedule maintenance during layover to avoid missed deliveries.',
            icon: '🚚',
          },
        ],
        pricing: [
          {
            tier: 'Essentials',
            price: '$2,499',
            period: '/month',
            features: [
              'Up to 100 sensors',
              'Basic RUL forecasting',
              'Email & Slack alerts',
              'Monthly health reports',
              'Standard integrations (CSV, REST)',
              'Quarterly business review',
            ],
          },
          {
            tier: 'Industrial',
            price: '$5,999',
            period: '/month',
            features: [
              'Up to 1,000 sensors',
              'Advanced anomaly detection',
              'CMMS integration (Maximo, SAP PM)',
              'Mobile inspector app',
              'Spare parts optimization',
              'Weekly health digest',
              'Phone support',
            ],
            popular: true,
          },
          {
            tier: 'Enterprise',
            price: 'Custom',
            period: '',
            features: [
              'Unlimited sensors & sites',
              'Custom model training per asset class',
              'On-premise edge deployment',
              'Digital twin visualization',
              'Dedicated reliability engineer',
              'SLA-backed uptime',
              '24/7 phone & field support',
            ],
          },
        ],
        benefits: [
          'Reduce unplanned downtime by 55%',
          'Lower maintenance costs by 40%',
          'Extend asset useful life',
          'Optimize spare parts inventory',
          'Improve safety & reliability',
          'Increase overall equipment effectiveness (OEE)',
        ],
        contact: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008, Middletown, DE 19709',
        },
        ctaLabel: 'Get a Free Equipment Health Assessment',
      }}
    />
  );
}
