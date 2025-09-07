
import Link from 'next/link;

export const metadata = {
  title: Advanced Data Analytics & BI | Zion Tech Group',
  description: 'Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.,
  keywords: data analytics, business intelligence, data visualization, predictive analytics, data engineering'
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center>
    <div className=text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3>{title}</h3>
    <p className=text-gray-600">{description}</p>
  </div>
);

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="text-center p-6 bg-white rounded-xl shadow-md>
    <p className=text-5xl font-bold text-purple-600 mb-2">{value}</p>
    <p className="text-lg text-gray-600>{label}</p>
  </div>
);

const ContactSection: React.FC = () => (
  <section className=py-12 bg-purple-600 rounded-lg text-white text-center">
    <h2 className="text-3xl font-bold mb-4>Ready to Unlock Your Data's Potential?</h2>
    <p className=text-xl mb-8 max-w-2xl mx-auto">
      Let's discuss how advanced data analytics can drive your business forward.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center>
      <a
        href=mailto:kleber@ziontechgroup.com?subject=Data Analytics Inquiry"
        className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors
      >
        Get Free Consultation
      </a>
      <a
        href=tel:+13024640950"
        className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors
      >
        Call +1 302 464 0950
      </a>
    </div>
    <div className=mt-8 text-sm">
      <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      <p>📧 kleber@ziontechgroup.com</p>
    </div>
  </section>
);

export default function DataAnalyticsPage() {
  return (
    <div className="space-y-16>
      <section className=text-center py-16 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6>
          Data Analytics & BI
        </h1>
        <p className=text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your data into actionable insights with advanced analytics,
          real-time dashboards, and AI-powered business intelligence solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center>

          <a
            href=/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block
          >
            Contact Us
          </a>
        </div>
      </section>


      <section className=py-12">
        <div className="text-center mb-12>
          <h2 className=text-3xl font-bold text-gray-900 mb-4">Our Data Analytics Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto>
            Comprehensive services to help you collect, process, analyze, and visualize your data effectively.
          </p>
        </div>
        <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Data Engineering
            description=Building robust data pipelines, ETL processes, and data warehousing solutions."
            icon="⚙️
          />
          <FeatureCard
            title=Business Intelligence"
            description="Creating interactive dashboards and reports for real-time performance monitoring.
            icon=📈"
          />
          <FeatureCard
            title="Predictive Modeling
            description=Developing AI/ML models for forecasting, anomaly detection, and strategic insights."
            icon="🔮
          />
          <FeatureCard
            title=Data Visualization"
            description="Designing clear and impactful visualizations to communicate complex data stories.
            icon=📊"
          />
          <FeatureCard
            title="Data Strategy & Consulting
            description=Guiding your data journey with expert strategy, governance, and implementation."
            icon="🧭
          />
          <FeatureCard
            title=Big Data Solutions"
            description="Implementing scalable solutions for processing and analyzing large datasets.
            icon=📦"
          />
        </div>
      </section>

      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8 mb-16>
        <h2 className=text-3xl font-bold text-gray-900 mb-6 text-center">
          Impactful Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6>
          <StatCard value=25%" label="Operational Efficiency />
          <StatCard value=40%" label="Improved Decision Making />
          <StatCard value=30%" label="Cost Reduction />
          <StatCard value=50%" label="Faster Insights" />
        </div>
      </div>

      <ContactSection />

    </div>
  );
}
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
