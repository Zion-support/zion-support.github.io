import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Pipeline Architecture & Engineering | Zion Tech Group',
  description: 'Build robust data pipelines with Kafka, Spark, Airflow for real-time and batch processing at enterprise scale.',
  alternates: { canonical: 'it-services/data-pipeline-architecture' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Data Pipeline Architecture & Engineering',
        category: 'Data Engineering',
        description: 'Build robust data pipelines with Kafka, Spark, Airflow for real-time and batch processing at enterprise scale.',
        iconEmoji: '🔧',
        features: [
          {
            "title": "Pipeline Design & Architecture",
            "description": "Design scalable pipelines with Kafka streaming and Airflow orchestration."
          },
          {
            "title": "Real-Time Stream Processing",
            "description": "Process millions of events/second with Flink or Spark Streaming."
          },
          {
            "title": "Data Quality & Validation",
            "description": "Automated quality checks and anomaly detection at every pipeline stage."
          },
          {
            "title": "Cloud-Native Warehousing",
            "description": "Build on Snowflake, BigQuery, or Redshift with optimized schemas."
          },
          {
            "title": "CI/CD for Data Pipelines",
            "description": "Version-controlled pipeline code with automated testing and promotion."
          },
          {
            "title": "Cost Optimization",
            "description": "Monitor pipeline costs with auto-scaling and efficient resource allocation."
          }
        ],
        useCases: [
          {
            "title": "Real-Time Analytics Pipeline",
            "description": "Sub-second analytics on user behavior, transactions, and system metrics.",
            "icon": "📊"
          },
          {
            "title": "Data Lake Modernization",
            "description": "Migrate to modern data lake with automated ingestion and transformation.",
            "icon": "🏗️"
          },
          {
            "title": "ML Data Foundation",
            "description": "Create versioned datasets for ML training with automated feature stores.",
            "icon": "🤖"
          }
        ],
        benefits: ["Sub-second data processing", "Automated data quality", "Cloud cost optimization", "Scale to billions of events", "Version-controlled pipelines", "Real-time monitoring"],
        ctaLabel: 'Get Started with Data Pipeline Architecture & Engineering',
        pricing: [
          { tier: 'Starter', price: '$3,999', period: '/month', features: ['Core features', 'Up to 100 items/month', 'Email support', 'Standard security'], popular: false },
          { tier: 'Professional', price: '$9,999', period: '/month', features: ['Advanced engine', 'Unlimited items', 'Priority support', 'API access', 'Team collaboration (10 users)', 'Custom integrations'], popular: true },
          { tier: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited usage', 'Dedicated support engineer', 'Custom configuration', 'SSO & advanced security', '99.99% SLA guarantee', 'On-premise deployment option'], popular: false },
        ],
        contact: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008, Middletown DE 19709',
        },
      }}
    />
  );
}
