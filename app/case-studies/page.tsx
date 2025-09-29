import Link from 'next/link';

export const metadata = {
  title: 'Case Studies | Zion Tech Group',
  description: 'Real-world success stories showcasing how our AI and IT solutions transform businesses.',
};

export default function CaseStudiesPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16 py-12 bg-gradient-to-br from-green-50 to-blue-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Success Stories
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how our AI and IT solutions have transformed businesses across industries
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Featured Case Study */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white">
            <div className="max-w-4xl">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Featured Success Story
              </span>
              <h2 className="text-3xl font-bold mb-4">
                TechCorp Inc.: 90% Reduction in Data Processing Time
              </h2>
              <p className="text-lg opacity-90 mb-6">
                How AI Data Analytics automation transformed manual data processing from 40 hours/week 
                to just 4 hours, saving $500K annually while improving accuracy by 95%.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">90%</div>
                  <div className="text-sm opacity-90">Time Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">$500K</div>
                  <div className="text-sm opacity-90">Annual Savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm opacity-90">Accuracy Improvement</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <CaseStudy
            company="HealthTech Solutions"
            industry="Healthcare"
            challenge="Customer support team overwhelmed with 500+ daily queries"
            solution="AI Virtual Assistant with natural language processing"
            results={[
              "80% faster response time",
              "95% customer satisfaction rate",
              "24/7 availability achieved",
              "60% reduction in support costs"
            ]}
            metrics={{
              "Response Time": "2.3 seconds",
              "Customer Satisfaction": "95%",
              "Cost Reduction": "60%"
            }}
            logo="🏥"
          />
          
          <CaseStudy
            company="FinanceFlow Ltd."
            industry="Fintech"
            challenge="Manual workflow bottlenecks causing 3-day processing delays"
            solution="AI Workflow Automation platform with smart triggers"
            results={[
              "75% process efficiency improvement",
              "300% ROI in 6 months",
              "Real-time workflow monitoring",
              "Zero manual intervention required"
            ]}
            metrics={{
              "Processing Time": "3 days → 4 hours",
              "ROI": "300% in 6 months",
              "Efficiency": "75% improvement"
            }}
            logo="💰"
          />

          <CaseStudy
            company="RetailMax Corporation"
            industry="E-commerce"
            challenge="Complex inventory management across 50+ warehouses"
            solution="AI Inventory Management with predictive analytics"
            results={[
              "40% reduction in stockouts",
              "25% decrease in excess inventory",
              "Real-time demand forecasting",
              "Automated reorder triggers"
            ]}
            metrics={{
              "Stockout Reduction": "40%",
              "Inventory Optimization": "25%",
              "Forecast Accuracy": "92%"
            }}
            logo="🛒"
          />

          <CaseStudy
            company="ManufacturingPro Inc."
            industry="Manufacturing"
            challenge="Quality control processes requiring 100% manual inspection"
            solution="Computer Vision AI with automated defect detection"
            results={[
              "99.8% defect detection accuracy",
              "70% faster inspection process",
              "Real-time quality monitoring",
              "Predictive maintenance alerts"
            ]}
            metrics={{
              "Detection Accuracy": "99.8%",
              "Process Speed": "70% faster",
              "Downtime Reduction": "45%"
            }}
            logo="🏭"
          />

          <CaseStudy
            company="EduTech Academy"
            industry="Education"
            challenge="Personalizing learning experiences for 10,000+ students"
            solution="AI-Powered Learning Platform with adaptive content"
            results={[
              "35% improvement in learning outcomes",
              "Personalized learning paths",
              "Real-time progress tracking",
              "Automated assessment grading"
            ]}
            metrics={{
              "Learning Improvement": "35%",
              "Student Engagement": "85%",
              "Grading Automation": "90%"
            }}
            logo="🎓"
          />

          <CaseStudy
            company="LogisticsPlus"
            industry="Logistics"
            challenge="Route optimization for 500+ daily deliveries"
            solution="AI Route Optimization with real-time traffic analysis"
            results={[
              "30% reduction in delivery time",
              "25% fuel cost savings",
              "Real-time route adjustments",
              "Predictive delivery windows"
            ]}
            metrics={{
              "Delivery Time": "30% reduction",
              "Fuel Savings": "25%",
              "Customer Satisfaction": "98%"
            }}
            logo="🚚"
          />
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our AI and IT solutions can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudy({
  company,
  industry,
  challenge,
  solution,
  results,
  metrics,
  logo,
}: {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: Record<string, string>;
  logo: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-3">{logo}</div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{company}</h3>
          <p className="text-blue-600 font-semibold">{industry}</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
          <p className="text-gray-600 text-sm">{challenge}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
          <p className="text-gray-600 text-sm">{solution}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            {results.map((result, index) => (
              <li key={index} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t pt-4">
        <h4 className="font-semibold text-gray-900 mb-3">Key Metrics:</h4>
        <div className="grid grid-cols-1 gap-2">
          {Object.entries(metrics).map(([key, value]) => (
            <div key={key} className="flex justify-between text-sm">
              <span className="text-gray-600">{key}:</span>
              <span className="font-semibold text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}