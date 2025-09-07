export const metadata = { 
  title: 'Data Science Services | Zion Tech Group',
  description: 'Comprehensive data science solutions including machine learning, predictive analytics, data engineering, and business intelligence services.'
};

export default function DataSciencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Data Science & Analytics Services</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Transform your data into actionable insights with our comprehensive data science solutions. 
            We help businesses make data-driven decisions and unlock the power of their information.
          </p>
        </div>

        {/* Data Engineering Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Data Engineering Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Data Pipeline Development"
              description="ETL/ELT pipeline development for data ingestion, processing, and transformation"
              features={["Real-time processing", "Batch processing", "Data validation", "Error handling"]}
              price="$20k - $60k"
              icon="🔄"
            />
              title="Data Lake Implementation"
              description="Scalable data lake setup for storing and processing large volumes of data"
              features={["Storage optimization", "Data partitioning", "Schema evolution", "Access controls"]}
              price="$25k - $80k"
              icon="🏞️"
              title="Data Warehouse Design"
              description="Enterprise data warehouse design and implementation for analytics"
              features={["Dimensional modeling", "ETL processes", "Data quality", "Performance tuning"]}
              price="$30k - $100k"
              icon="🏢"
              title="Real-time Analytics Platform"
              description="Streaming data processing and real-time analytics solutions"
              features={["Stream processing", "Real-time dashboards", "Event sourcing", "Scalability"]}
              price="$35k - $90k"
              icon="⚡"
              title="Data Integration Services"
              description="Integration of disparate data sources into unified analytics platform"
              features={["API integration", "Database connections", "Data mapping", "Synchronization"]}
              price="$15k - $50k"
              icon="🔗"
              title="Data Quality Management"
              description="Data quality assessment, cleansing, and monitoring solutions"
              features={["Data profiling", "Cleansing rules", "Quality metrics", "Monitoring"]}
              price="$12k - $35k"
              icon="✨"

        {/* Machine Learning Services */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Machine Learning Services</h2>
              title="Predictive Analytics"
              description="Custom predictive models for forecasting and trend analysis"
              features={["Time series analysis", "Regression models", "Feature engineering", "Model validation"]}
              price="$25k - $70k"
              icon="🔮"
              title="Classification Models"
              description="Machine learning models for categorization and decision-making"
              features={["Binary classification", "Multi-class models", "Ensemble methods", "Model optimization"]}
              icon="📊"
              title="Recommendation Systems"
              description="Personalized recommendation engines for e-commerce and content platforms"
              features={["Collaborative filtering", "Content-based filtering", "Hybrid approaches", "A/B testing"]}
              price="$30k - $80k"
              icon="⭐"
              title="Natural Language Processing"
              description="Text analysis and language understanding solutions"
              features={["Sentiment analysis", "Text classification", "Named entity recognition", "Language models"]}
              icon="💬"
              title="Computer Vision Solutions"
              description="Image and video analysis using deep learning techniques"
              features={["Object detection", "Image classification", "OCR systems", "Video analysis"]}
              icon="👁️"
              title="Anomaly Detection"
              description="Automated detection of unusual patterns and outliers in data"
              features={["Statistical methods", "Machine learning models", "Real-time detection", "Alert systems"]}
              price="$18k - $50k"
              icon="🚨"

        {/* Business Intelligence & Analytics */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Business Intelligence & Analytics</h2>
              title="Interactive Dashboards"
              description="Custom business intelligence dashboards with real-time data visualization"
              features={["Custom visualizations", "Real-time updates", "Drill-down capabilities", "Mobile responsive"]}
              price="$15k - $45k"
              icon="📈"
              title="Executive Reporting"
              description="Automated executive reports and KPI tracking systems"
              features={["Automated reports", "KPI dashboards", "Trend analysis", "Alert systems"]}
              price="$10k - $30k"
              icon="📋"
              title="Customer Analytics"
              description="Customer behavior analysis and segmentation for marketing optimization"
              features={["Customer segmentation", "Behavior analysis", "Churn prediction", "Lifetime value"]}
              icon="👥"
              title="Financial Analytics"
              description="Financial data analysis and forecasting for business planning"
              features={["Revenue forecasting", "Cost analysis", "Profitability analysis", "Risk assessment"]}
              icon="💰"
              title="Operational Analytics"
              description="Operations data analysis for process optimization and efficiency"
              features={["Process mining", "Performance metrics", "Bottleneck analysis", "Optimization"]}
              price="$18k - $55k"
              icon="⚙️"
              title="Market Research Analytics"
              description="Market data analysis and competitive intelligence solutions"
              features={["Market sizing", "Competitive analysis", "Trend analysis", "Forecasting"]}
              price="$22k - $65k"
              icon="🌐"

        {/* Advanced Analytics */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Advanced Analytics</h2>
              title="Deep Learning Solutions"
              description="Advanced neural network models for complex pattern recognition"
              features={["Neural network design", "Model training", "Hyperparameter tuning", "GPU optimization"]}
              price="$40k - $120k"
              icon="🧠"
              title="Time Series Forecasting"
              description="Advanced forecasting models for business planning and resource allocation"
              features={["ARIMA models", "LSTM networks", "Seasonal analysis", "Confidence intervals"]}
              icon="📅"
              title="A/B Testing & Experimentation"
              description="Statistical testing framework for product optimization and decision-making"
              features={["Test design", "Statistical analysis", "Power analysis", "Results interpretation"]}
              icon="🧪"
              title="Causal Inference"
              description="Causal analysis to understand cause-and-effect relationships in data"
              features={["Causal modeling", "Confounding control", "Treatment effects", "Causal graphs"]}
              title="Survival Analysis"
              description="Statistical analysis for time-to-event data and risk modeling"
              features={["Kaplan-Meier curves", "Cox regression", "Risk modeling", "Hazard analysis"]}
              icon="⏱️"
              title="Graph Analytics"
              description="Network analysis and graph-based machine learning solutions"
              features={["Network analysis", "Graph algorithms", "Community detection", "Link prediction"]}
              icon="🕸️"

        {/* Data Science Consulting */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Data Science Consulting</h2>
              title="Data Strategy Consulting"
              description="Strategic planning for data-driven transformation and analytics roadmap"
              features={["Data assessment", "Strategy development", "Technology selection", "Implementation planning"]}
              price="$15k - $40k"
              title="Data Science Team Building"
              description="Hiring, training, and structuring data science teams for organizations"
              features={["Role definition", "Hiring support", "Team structure", "Training programs"]}
              title="Model MLOps Implementation"
              description="Machine learning operations setup for model deployment and management"
              features={["Model versioning", "Deployment pipelines", "Monitoring", "A/B testing"]}
              title="Data Governance Setup"
              description="Data governance framework and policies for data quality and compliance"
              features={["Policy development", "Data cataloging", "Access controls", "Compliance"]}
              icon="🛡️"
              title="Data Science Training"
              description="Custom training programs for teams on data science tools and techniques"
              features={["Custom curriculum", "Hands-on workshops", "Tool training", "Certification"]}
              price="$8k - $25k"
              icon="🎓"
              title="Data Science Audit"
              description="Comprehensive audit of existing data science practices and recommendations"
              features={["Practice assessment", "Gap analysis", "Recommendations", "Implementation plan"]}
              icon="🔍"

        {/* Pricing Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Data Science Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              name="Data Discovery"
              price="$8k - $20k"
              duration="2-4 weeks"
              features={[
                "Data assessment",
                "Use case identification",
                "Technology evaluation",
                "Proof of concept",
                "Implementation roadmap"
              ]}
              popular={false}
              name="Data Science Implementation"
              duration="8-16 weeks"
                "Data pipeline setup",
                "Model development",
                "Dashboard creation",
                "MLOps implementation",
                "Team training",
                "3 months support"
              popular={true}
              name="Data Science Managed Services"
              price="$10k+/month"
              duration="Ongoing"
                "Model monitoring",
                "Performance optimization",
                "Data quality management",
                "Regular reporting",
                "Continuous improvement",
                "24/7 support"

        {/* Contact CTA */}
        <ContactCTA />
  );
}

function ServiceCard({ 
  title, 
  description, 
  features, 
  price, 
  icon 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      <div className="text-lg font-bold text-blue-600 mb-4">{price}</div>
      <a 
        href="tel:+13024640950" 
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Quote
      </a>

function PricingCard({ 
  name, 
  duration, 
  popular 
  name: string; 
  duration: string; 
  popular: boolean; 
    <div className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${popular ? 'border-blue-500' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-700">{feature}</span>
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
        Get Started

function ContactCTA() {
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white">
      <h2 className="text-4xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto">
        Let's discuss how data science can transform your business and drive better decision-making. 
        Our data science experts are ready to help you extract maximum value from your data.
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          📞 Call +1 302 464 0950
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
          ✉️ Email Us
        <div className="text-center">
          <div className="text-sm opacity-90">Visit us at:</div>
          <div className="font-semibold">364 E Main St STE 1008</div>
          <div className="font-semibold">Middletown, DE 19709</div>