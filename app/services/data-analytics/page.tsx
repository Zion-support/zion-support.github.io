export const metadata = { 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  title: 'Data Analytics Solutions | Zion Tech Group',
  description: 'Advanced data analytics solutions including business intelligence, data visualization, predictive analytics, and data engineering. Turn data into actionable insights.'
=======
  title: 'Advanced Data Analytics & BI | Zion Tech Group',
  description: 'Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.'
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  title: 'Advanced Data Analytics & BI | Zion Tech Group',
  description: 'Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.'
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-8824
=======
  title: 'Data Analytics Services | Zion Tech Group',
  description: 'Comprehensive data analytics services including business intelligence, data visualization, predictive analytics, and data science solutions for data-driven decision making.',
  keywords: 'data analytics, business intelligence, data visualization, predictive analytics, data science, machine learning, data consulting'
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  title: 'Advanced Data Analytics & BI | Zion Tech Group',
  description: 'Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.'
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> 7f75898722d8fd84372e93f8a34999dbfb36e377
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-8824
};

export default function DataAnalyticsPage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <section>
      <h1 style={{fontSize: 26, fontWeight: 800}}>Advanced Data Analytics & Business Intelligence</h1>
      <p style={{marginTop: 8, color: '#374151'}}>
        Unlock the power of your data with cutting-edge analytics, real-time dashboards, and AI-driven insights 
        that drive strategic decision-making and boost revenue by up to 25%.
      </p>
      
      <div style={{display: 'grid', gap: 12, marginTop: 16}}>
        <Item 
          title="Real-Time Dashboards" 
          details={[
            "Custom KPI dashboards", 
            "Real-time data visualization", 
            "Interactive charts and graphs", 
            "Mobile-responsive design",
            "Automated alerts and notifications"
          ]} 
        />
        <Item 
          title="Predictive Analytics" 
          details={[
            "Machine learning forecasting", 
            "Customer behavior prediction", 
            "Sales trend analysis", 
            "Risk assessment models",
            "Demand planning optimization"
          ]} 
        />
        <Item 
          title="Data Integration & ETL" 
          details={[
            "Multi-source data consolidation", 
            "Real-time data pipelines", 
            "Data quality validation", 
            "Automated data cleansing",
            "Cloud and on-premise solutions"
          ]} 
        />
        <Item 
          title="Advanced Reporting" 
          details={[
            "Automated report generation", 
            "Custom report templates", 
            "Scheduled email delivery", 
            "PDF and Excel exports",
            "White-label reporting solutions"
          ]} 
        />
        <Item 
          title="AI-Powered Insights" 
          details={[
            "Natural language queries", 
            "Automated anomaly detection", 
            "Pattern recognition", 
            "Intelligent recommendations",
            "Conversational analytics"
          ]} 
        />
        <Item 
          title="Data Governance" 
          details={[
            "Data security and compliance", 
            "Access control and permissions", 
            "Audit trails and logging", 
            "GDPR and CCPA compliance",
            "Data lineage tracking"
          ]} 
        />
      </div>
      
      <div style={{marginTop: 24, padding: 20, backgroundColor: '#f0fdf4', borderRadius: 12, border: '1px solid #bbf7d0'}}>
        <h3 style={{fontSize: 18, fontWeight: 700, marginBottom: 12, color: '#14532d'}}>Proven Results for Our Clients</h3>
        <ul style={{color: '#166534', lineHeight: 1.6}}>
          <li>• <strong>25% Average Revenue Increase:</strong> Through data-driven decision making</li>
          <li>• <strong>60% Faster Reporting:</strong> Automated dashboards vs manual processes</li>
          <li>• <strong>40% Cost Reduction:</strong> Optimized operations through predictive analytics</li>
          <li>• <strong>99.9% Data Accuracy:</strong> Advanced validation and cleansing processes</li>
          <li>• <strong>Real-Time Insights:</strong> Make decisions based on current data, not yesterday's reports</li>
        </ul>
      </div>
      
      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16, backgroundColor: '#ffffff'}}>
      <h3 style={{fontWeight: 700, color: '#1f2937', marginBottom: 8}}>{title}</h3>
      <ul style={{paddingLeft: 18, color: '#4b5563', margin: 0}}>
        {details.map(d => (<li key={d} style={{listStyle: 'disc', marginBottom: 4}}>{d}</li>))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div style={{marginTop: 32}}>
      <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 20, color: '#1f2937'}}>Analytics Solutions Pricing</h2>
      <div style={{display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
        <Plan 
          name="Analytics Starter" 
          price="$3,000–$10,000" 
          features={[
            "2-4 weeks implementation", 
            "Basic dashboard setup", 
            "Up to 5 data sources", 
            "Standard visualizations",
            "Email support"
          ]} 
        />
        <Plan 
          name="Business Intelligence" 
          price="$10,000–$30,000" 
          features={[
            "4-8 weeks implementation", 
            "Advanced analytics platform", 
            "Unlimited data sources", 
            "Predictive modeling",
            "Custom report automation",
            "Priority support & training"
          ]} 
        />
        <Plan 
          name="Enterprise Analytics" 
          price="$30,000+" 
          features={[
            "Custom analytics platform", 
            "AI-powered insights", 
            "Real-time data processing", 
            "Advanced security & compliance",
            "Dedicated analytics specialist",
            "SLA guarantees & monitoring"
          ]} 
        />
      </div>
      
      <div style={{marginTop: 24, textAlign: 'center', padding: 20, backgroundColor: '#fef2f2', borderRadius: 12, border: '1px solid #fecaca'}}>
        <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#991b1b'}}>Free Data Health Check</h3>
        <p style={{color: '#b91c1c', marginBottom: 16}}>
          Get a comprehensive analysis of your current data infrastructure and discover 
          opportunities for improvement. Includes ROI projections and implementation roadmap.
        </p>
        <div style={{display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap'}}>
          <a 
            href="tel:+13024640950" 
            style={{
              display: 'inline-block', 
              padding: '12px 24px', 
              backgroundColor: '#dc2626', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: 8,
              fontWeight: 600
            }}
          >
            Schedule Free Assessment
          </a>
          <a 
            href="mailto:kleber@ziontechgroup.com" 
            style={{
              display: 'inline-block', 
              padding: '12px 24px', 
              backgroundColor: 'transparent', 
              color: '#dc2626', 
              textDecoration: 'none', 
              borderRadius: 8,
              border: '2px solid #dc2626',
              fontWeight: 600
            }}
          >
            Email Us
          </a>
        </div>
      </div>
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-8824
    <div className="animate-fade-in">
<<<<<<< HEAD
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Data Analytics Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Advanced data analytics solutions including business intelligence, data visualization, predictive analytics, and data engineering. 
          Turn your data into actionable insights that drive business growth.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Data Analytics Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DataServiceCard
            title="Business Intelligence Dashboards"
            description="Interactive dashboards and reports for real-time business insights"
            features={["Custom dashboard design", "Real-time data visualization", "Interactive reports", "Mobile-responsive design", "Automated reporting"]}
            price="$12k–$40k"
            icon="📊"
          />
          <DataServiceCard
            title="Predictive Analytics & ML"
            description="Machine learning models for forecasting and predictive insights"
            features={["Predictive modeling", "Time series forecasting", "Anomaly detection", "Recommendation engines", "Risk assessment"]}
            price="$18k–$60k"
            icon="🔮"
          />
          <DataServiceCard
            title="Data Engineering & ETL"
            description="Data pipeline development and data warehouse solutions"
            features={["ETL pipeline development", "Data warehouse design", "Data quality management", "Real-time streaming", "Data governance"]}
            price="$15k–$50k"
            icon="⚙️"
          />
          <DataServiceCard
            title="Customer Analytics"
            description="Customer behavior analysis and segmentation for targeted marketing"
            features={["Customer segmentation", "Behavioral analysis", "Churn prediction", "Lifetime value modeling", "Personalization engines"]}
            price="$20k–$70k"
            icon="👥"
          />
          <DataServiceCard
            title="Financial Analytics"
            description="Financial data analysis and reporting for better decision making"
            features={["Financial reporting", "Budget analysis", "Cost optimization", "Revenue forecasting", "Risk modeling"]}
            price="$16k–$55k"
            icon="💰"
          />
          <DataServiceCard
            title="Real-time Analytics"
            description="Real-time data processing and streaming analytics"
            features={["Stream processing", "Real-time dashboards", "Event-driven analytics", "Alert systems", "Performance monitoring"]}
            price="$22k–$80k"
=======
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Data Analytics Services
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Transform your data into actionable insights with our comprehensive analytics services. 
          From business intelligence to predictive analytics, we help you make data-driven decisions that drive growth.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Data Analytics Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DataAnalyticsServiceCard
            title="Business Intelligence Dashboards"
            description="Interactive dashboards and reports for real-time business insights"
            features={["Real-time dashboards", "KPI tracking", "Custom reports", "Data visualization", "Mobile access"]}
            price="$8,000-30,000"
            icon="📊"
          />
          <DataAnalyticsServiceCard
            title="Predictive Analytics"
            description="Machine learning models for forecasting and predictive insights"
            features={["Demand forecasting", "Customer churn prediction", "Risk assessment", "Sales forecasting", "Anomaly detection"]}
            price="$12,000-45,000"
            icon="🔮"
          />
          <DataAnalyticsServiceCard
            title="Data Warehousing & ETL"
            description="Centralized data storage and processing pipelines for analytics"
            features={["Data warehouse design", "ETL/ELT pipelines", "Data quality management", "Data governance", "Scalable architecture"]}
            price="$15,000-60,000"
            icon="🏗️"
          />
          <DataAnalyticsServiceCard
            title="Customer Analytics"
            description="Deep insights into customer behavior and segmentation"
            features={["Customer segmentation", "Behavioral analysis", "Lifetime value prediction", "Churn analysis", "Personalization"]}
            price="$10,000-35,000"
            icon="👥"
          />
          <DataAnalyticsServiceCard
            title="Marketing Analytics"
            description="Comprehensive marketing performance measurement and optimization"
            features={["Campaign analysis", "Attribution modeling", "ROI measurement", "A/B testing", "Marketing automation"]}
            price="$8,000-25,000"
            icon="📈"
          />
          <DataAnalyticsServiceCard
            title="Real-time Analytics"
            description="Streaming data processing and real-time decision making"
            features={["Stream processing", "Real-time dashboards", "Event-driven analytics", "Alert systems", "Live monitoring"]}
            price="$12,000-40,000"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            icon="⚡"
          />
        </div>
      </section>

<<<<<<< HEAD
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Data Analytics Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item 
            title="Data Processing & Storage" 
            details={[
              "Apache Spark, Hadoop, and Kafka",
              "Cloud data warehouses (Snowflake, BigQuery)",
              "NoSQL databases (MongoDB, Cassandra)",
              "Data lakes and object storage",
              "Stream processing platforms",
              "Data versioning and lineage"
            ]} 
          />
          <Item 
            title="Analytics & Visualization" 
            details={[
              "Tableau, Power BI, and Looker",
              "Python (Pandas, NumPy, Scikit-learn)",
              "R and statistical analysis",
              "Jupyter notebooks and RStudio",
              "Custom web applications",
              "Interactive dashboards"
            ]} 
          />
          <Item 
            title="Machine Learning & AI" 
            details={[
              "TensorFlow, PyTorch, and scikit-learn",
              "MLOps and model deployment",
              "Feature engineering and selection",
              "Model monitoring and drift detection",
              "AutoML and hyperparameter tuning",
              "Deep learning and neural networks"
            ]} 
=======
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Data Analytics Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DataAnalyticsProcessStep
            step="1"
            title="Data Discovery"
            description="Identify data sources, assess quality, and understand business requirements"
          />
          <DataAnalyticsProcessStep
            step="2"
            title="Data Preparation"
            description="Clean, transform, and structure data for analysis and modeling"
          />
          <DataAnalyticsProcessStep
            step="3"
            title="Analysis & Modeling"
            description="Apply statistical methods and machine learning to extract insights"
          />
          <DataAnalyticsProcessStep
            step="4"
            title="Visualization & Deployment"
            description="Create dashboards and deploy solutions for ongoing insights"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          />
        </div>
      </section>

<<<<<<< HEAD
      <Pricing />
      <ContactSection />
=======
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Analytics Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DataAnalyticsTechStack
            title="Data Processing"
            technologies={["Apache Spark", "Hadoop", "Apache Kafka", "Apache Airflow", "dbt"]}
          />
          <DataAnalyticsTechStack
            title="Visualization & BI"
            technologies={["Tableau", "Power BI", "Looker", "Grafana", "D3.js"]}
          />
          <DataAnalyticsTechStack
            title="Machine Learning"
            technologies={["Python", "R", "TensorFlow", "Scikit-learn", "MLflow"]}
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry Analytics Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryAnalytics
            title="E-commerce"
            description="Customer behavior analysis and sales optimization"
            solutions={["Product recommendation", "Inventory optimization", "Price optimization", "Customer lifetime value"]}
            icon="🛒"
          />
          <IndustryAnalytics
            title="Healthcare"
            description="Patient outcomes and operational efficiency analytics"
            solutions={["Patient risk scoring", "Treatment optimization", "Resource allocation", "Clinical outcomes"]}
            icon="🏥"
          />
          <IndustryAnalytics
            title="Finance"
            description="Risk management and fraud detection analytics"
            solutions={["Credit risk modeling", "Fraud detection", "Algorithmic trading", "Regulatory compliance"]}
            icon="💰"
          />
          <IndustryAnalytics
            title="Manufacturing"
            description="Supply chain and production optimization analytics"
            solutions={["Predictive maintenance", "Quality control", "Supply chain optimization", "Demand forecasting"]}
            icon="🏭"
          />
          <IndustryAnalytics
            title="Marketing"
            description="Campaign performance and customer acquisition analytics"
            solutions={["Attribution modeling", "Customer journey analysis", "Campaign optimization", "ROI measurement"]}
            icon="📢"
          />
          <IndustryAnalytics
            title="HR & People"
            description="Workforce analytics and talent management"
            solutions={["Employee retention", "Performance analytics", "Talent acquisition", "Workforce planning"]}
            icon="👨‍💼"
          />
        </div>
      </section>

      <Pricing />
      
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Data Analytics Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DataAnalyticsBenefitCard
            title="Expert Data Scientists"
            description="PhD-level data scientists with deep industry experience"
            icon="👨‍🔬"
          />
          <DataAnalyticsBenefitCard
            title="Actionable Insights"
            description="Transform complex data into clear, actionable business recommendations"
            icon="💡"
          />
          <DataAnalyticsBenefitCard
            title="Scalable Solutions"
            description="Analytics solutions that grow with your business and data volume"
            icon="📈"
          />
          <DataAnalyticsBenefitCard
            title="Real-time Processing"
            description="Process and analyze data in real-time for immediate insights"
            icon="⚡"
          />
          <DataAnalyticsBenefitCard
            title="Custom Dashboards"
            description="Tailored visualizations that match your business needs and KPIs"
            icon="📊"
          />
          <DataAnalyticsBenefitCard
            title="Ongoing Support"
            description="Continuous monitoring, optimization, and support for your analytics"
            icon="🛠️"
          />
        </div>
      </section>

      <CTASection />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    </div>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
function DataServiceCard({ title, description, features, price, icon }: { 
=======
function DataAnalyticsServiceCard({ title, description, features, price, icon }: { 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
<<<<<<< HEAD
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
<<<<<<< HEAD
=======
    <section>
      <h1 style={{fontSize: 26, fontWeight: 800}}>Advanced Data Analytics & Business Intelligence</h1>
      <p style={{marginTop: 8, color: '#374151'}}>
        Unlock the power of your data with cutting-edge analytics, real-time dashboards, and AI-driven insights 
        that drive strategic decision-making and boost revenue by up to 25%.
      </p>
      
      <div style={{display: 'grid', gap: 12, marginTop: 16}}>
        <Item 
          title="Real-Time Dashboards" 
          details={[
            "Custom KPI dashboards", 
            "Real-time data visualization", 
            "Interactive charts and graphs", 
            "Mobile-responsive design",
            "Automated alerts and notifications"
          ]} 
        />
        <Item 
          title="Predictive Analytics" 
          details={[
            "Machine learning forecasting", 
            "Customer behavior prediction", 
            "Sales trend analysis", 
            "Risk assessment models",
            "Demand planning optimization"
          ]} 
        />
        <Item 
          title="Data Integration & ETL" 
          details={[
            "Multi-source data consolidation", 
            "Real-time data pipelines", 
            "Data quality validation", 
            "Automated data cleansing",
            "Cloud and on-premise solutions"
          ]} 
        />
        <Item 
          title="Advanced Reporting" 
          details={[
            "Automated report generation", 
            "Custom report templates", 
            "Scheduled email delivery", 
            "PDF and Excel exports",
            "White-label reporting solutions"
          ]} 
        />
        <Item 
          title="AI-Powered Insights" 
          details={[
            "Natural language queries", 
            "Automated anomaly detection", 
            "Pattern recognition", 
            "Intelligent recommendations",
            "Conversational analytics"
          ]} 
        />
        <Item 
          title="Data Governance" 
          details={[
            "Data security and compliance", 
            "Access control and permissions", 
            "Audit trails and logging", 
            "GDPR and CCPA compliance",
            "Data lineage tracking"
          ]} 
        />
=======
    <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-2xl font-bold text-blue-600 mb-2">{price}</div>
        <div className="text-sm text-gray-500">Starting price</div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      </div>
      
      <div style={{marginTop: 24, padding: 20, backgroundColor: '#f0fdf4', borderRadius: 12, border: '1px solid #bbf7d0'}}>
        <h3 style={{fontSize: 18, fontWeight: 700, marginBottom: 12, color: '#14532d'}}>Proven Results for Our Clients</h3>
        <ul style={{color: '#166534', lineHeight: 1.6}}>
          <li>• <strong>25% Average Revenue Increase:</strong> Through data-driven decision making</li>
          <li>• <strong>60% Faster Reporting:</strong> Automated dashboards vs manual processes</li>
          <li>• <strong>40% Cost Reduction:</strong> Optimized operations through predictive analytics</li>
          <li>• <strong>99.9% Data Accuracy:</strong> Advanced validation and cleansing processes</li>
          <li>• <strong>Real-Time Insights:</strong> Make decisions based on current data, not yesterday's reports</li>
        </ul>
      </div>
      
      <Pricing />
    </section>
=======
      <a 
        href="tel:+13024640950" 
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
>>>>>>> 7f75898722d8fd84372e93f8a34999dbfb36e377
    </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-8824
  );
}

<<<<<<< HEAD
function Plan({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div style={{border: '2px solid #e5e7eb', borderRadius: 12, padding: 20, backgroundColor: '#ffffff', position: 'relative'}}>
      <h4 style={{fontWeight: 700, fontSize: 18, color: '#1f2937', marginBottom: 8}}>{name}</h4>
      <div style={{color: '#111827', fontWeight: 800, fontSize: 24, marginBottom: 16}}>{price}</div>
      <ul style={{paddingLeft: 18, color: '#4b5563', marginBottom: 20}}>
        {features.map(f => (<li key={f} style={{listStyle: 'disc', marginBottom: 6}}>{f}</li>))}
      </ul>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <a 
        href="tel:+13024640950" 
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </div>
  );
}

<<<<<<< HEAD
function Pricing() {
  return (
    <div style={{marginTop: 32}}>
      <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 20, color: '#1f2937'}}>Analytics Solutions Pricing</h2>
      <div style={{display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
        <Plan 
          name="Analytics Starter" 
          price="$3,000–$10,000" 
          features={[
            "2-4 weeks implementation", 
            "Basic dashboard setup", 
            "Up to 5 data sources", 
            "Standard visualizations",
            "Email support"
          ]} 
        />
        <Plan 
          name="Business Intelligence" 
          price="$10,000–$30,000" 
          features={[
            "4-8 weeks implementation", 
            "Advanced analytics platform", 
            "Unlimited data sources", 
            "Predictive modeling",
            "Custom report automation",
            "Priority support & training"
          ]} 
        />
        <Plan 
          name="Enterprise Analytics" 
          price="$30,000+" 
          features={[
            "Custom analytics platform", 
            "AI-powered insights", 
            "Real-time data processing", 
            "Advanced security & compliance",
            "Dedicated analytics specialist",
            "SLA guarantees & monitoring"
          ]} 
        />
      </div>
      
      <div style={{marginTop: 24, textAlign: 'center', padding: 20, backgroundColor: '#fef2f2', borderRadius: 12, border: '1px solid #fecaca'}}>
        <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#991b1b'}}>Free Data Health Check</h3>
        <p style={{color: '#b91c1c', marginBottom: 16}}>
          Get a comprehensive analysis of your current data infrastructure and discover 
          opportunities for improvement. Includes ROI projections and implementation roadmap.
        </p>
        <div style={{display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap'}}>
          <a 
            href="tel:+13024640950" 
            style={{
              display: 'inline-block', 
              padding: '12px 24px', 
              backgroundColor: '#dc2626', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: 8,
              fontWeight: 600
            }}
          >
            Schedule Free Assessment
          </a>
          <a 
            href="mailto:kleber@ziontechgroup.com" 
            style={{
              display: 'inline-block', 
              padding: '12px 24px', 
              backgroundColor: 'transparent', 
              color: '#dc2626', 
              textDecoration: 'none', 
              borderRadius: 8,
              border: '2px solid #dc2626',
              fontWeight: 600
            }}
          >
            Email Us
          </a>
        </div>
      </div>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      <a 
        href="mailto:kleber@ziontechgroup.com?subject=Data Analytics Services Inquiry" 
        style={{
          display: 'inline-block', 
          width: '100%',
          textAlign: 'center',
          padding: '12px 16px', 
          backgroundColor: '#3b82f6', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: 8,
          fontWeight: 600
        }}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-8824
=======
function DataAnalyticsProcessStep({ step, title, description }: { 
  step: string; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </div>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
          </li>
=======
function DataAnalyticsTechStack({ title, technologies }: { 
  title: string; 
  technologies: string[]; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {tech}
          </span>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        ))}
      </div>
    </div>
  );
}

<<<<<<< HEAD
function Pricing() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Data Analytics Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Data Assessment" 
          price="$8k–$20k" 
          duration="3–6 weeks"
          features={[
            "Data quality assessment",
            "Analytics opportunity identification",
            "Technology stack recommendations",
            "ROI analysis and business case",
            "Implementation roadmap",
            "Pilot project design"
          ]} 
        />
        <Plan 
          name="Analytics Implementation" 
          price="$25k–$100k" 
          duration="10–20 weeks"
          features={[
            "End-to-end analytics solution",
            "Data pipeline development",
            "Dashboard and visualization creation",
            "Machine learning model development",
            "Testing and validation",
            "User training and documentation"
          ]} 
        />
        <Plan 
          name="Managed Analytics" 
          price="$5k+/mo" 
          duration="Ongoing"
          features={[
            "Continuous data monitoring",
            "Model maintenance and updates",
            "Performance optimization",
            "Regular reporting and insights",
            "Data quality management",
            "Scalability and growth support"
          ]} 
=======
function IndustryAnalytics({ title, description, solutions, icon }: { 
  title: string; 
  description: string; 
  solutions: string[]; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {solutions.map((solution) => (
          <li key={solution} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {solution}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DataAnalyticsBenefitCard({ title, description, icon }: { 
  title: string; 
  description: string; 
  icon: string; 
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Pricing() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Data Analytics Service Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Analytics Assessment" 
          price="$5k–$15k" 
          features={["2–3 weeks", "Data audit", "Requirements analysis", "Strategy roadmap", "Tool recommendations"]} 
          popular={false}
        />
        <Plan 
          name="Dashboard Development" 
          price="$10k–$35k" 
          features={["4–8 weeks", "Custom dashboards", "Data integration", "User training", "Documentation"]} 
          popular={true}
        />
        <Plan 
          name="Advanced Analytics" 
          price="$20k–$75k" 
          features={["8–16 weeks", "ML models", "Predictive analytics", "Real-time processing", "Ongoing support"]} 
          popular={false}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        />
      </div>
    </section>
  );
}

<<<<<<< HEAD
function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
=======
function Plan({ name, price, features, popular }: { 
  name: string; 
  price: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-3">✓</span> {feature}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
<<<<<<< HEAD
<<<<<<< HEAD
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
=======
function Plan({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div style={{border: '2px solid #e5e7eb', borderRadius: 12, padding: 20, backgroundColor: '#ffffff', position: 'relative'}}>
      <h4 style={{fontWeight: 700, fontSize: 18, color: '#1f2937', marginBottom: 8}}>{name}</h4>
      <div style={{color: '#111827', fontWeight: 800, fontSize: 24, marginBottom: 16}}>{price}</div>
      <ul style={{paddingLeft: 18, color: '#4b5563', marginBottom: 20}}>
        {features.map(f => (<li key={f} style={{listStyle: 'disc', marginBottom: 6}}>{f}</li>))}
      </ul>
      <a 
        href="mailto:kleber@ziontechgroup.com?subject=Data Analytics Services Inquiry" 
        style={{
          display: 'inline-block', 
          width: '100%',
          textAlign: 'center',
          padding: '12px 16px', 
          backgroundColor: '#3b82f6', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: 8,
          fontWeight: 600
        }}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-8824
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> 7f75898722d8fd84372e93f8a34999dbfb36e377
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-8824
      >
        Get Started
      </a>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-8824
}

<<<<<<< HEAD
function ContactSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Unlock Your Data's Potential?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's transform your data into actionable insights that drive business growth. 
          Our data analytics experts have delivered 100+ successful analytics projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </section>
=======
function CTASection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Unlock the Power of Your Data?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Transform your data into competitive advantage with our comprehensive analytics solutions. 
        Let's discuss your data challenges and create a strategy that drives real business value.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">
        <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
      </div>
    </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  );
<<<<<<< HEAD
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> 7f75898722d8fd84372e93f8a34999dbfb36e377
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-8824
