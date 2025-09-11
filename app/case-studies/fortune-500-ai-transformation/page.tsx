import React from 'react';
import Link from 'next/link';

export default function Fortune500AITransformation() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Header */}
        <header className='mb-12'>
          <div className='flex items-center gap-2 mb-4'>
            <Link href='/case-studies' className='text-blue-600 hover:underline'>Case Studies</Link>
            <span className='text-gray-400'>/</span>
            <span className='text-gray-600'>AI Transformation</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Fortune 500 Manufacturing: AI-Powered Supply Chain Transformation
          </h1>
          <div className='flex items-center gap-4 text-gray-600 mb-6'>
            <span>Industry: Manufacturing</span>
            <span>•</span>
            <span>Company Size: 50,000+ employees</span>
            <span>•</span>
            <span>Project Duration: 8 months</span>
          </div>
          <p className='text-xl text-gray-600 leading-relaxed'>
            How a global manufacturing leader transformed their supply chain operations using 
            AI automation, resulting in 40% cost reduction and 60% faster processing times 
            across their global network.
          </p>
        </header>

        {/* Featured Image */}
        <div className='mb-12'>
          <div className='aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center'>
            <div className='text-8xl'>🏭</div>
          </div>
        </div>

        {/* Key Results */}
        <div className='bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 mb-12'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Key Results</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='text-center'>
              <div className='text-4xl font-bold text-green-600 mb-2'>40%</div>
              <div className='text-gray-700 font-medium'>Cost Reduction</div>
              <div className='text-sm text-gray-600'>in supply chain operations</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-blue-600 mb-2'>60%</div>
              <div className='text-gray-700 font-medium'>Faster Processing</div>
              <div className='text-sm text-gray-600'>order fulfillment times</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-purple-600 mb-2'>$2.3M</div>
              <div className='text-gray-700 font-medium'>Annual Savings</div>
              <div className='text-sm text-gray-600'>in operational costs</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className='prose prose-lg max-w-none'>
          <section>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>The Challenge</h2>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              Our client, a Fortune 500 manufacturing company with operations across 15 countries, 
              was facing significant challenges in their supply chain management. With over 50,000 
              employees and a complex network of suppliers, distributors, and manufacturing facilities, 
              they were struggling with:
            </p>
            
            <ul className='list-disc pl-6 mb-8 text-gray-700 space-y-2'>
              <li>Manual inventory management processes taking 15-20 hours per week</li>
              <li>Inaccurate demand forecasting leading to overstock and stockouts</li>
              <li>Delayed supplier communication and order processing</li>
              <li>Lack of real-time visibility into supply chain performance</li>
              <li>High operational costs due to inefficient processes</li>
            </ul>

            <div className='bg-red-50 border-l-4 border-red-500 p-6 mb-8'>
              <h3 className='text-lg font-semibold text-red-900 mb-2'>Critical Pain Points</h3>
              <p className='text-red-800'>
                The company was losing approximately $500K annually due to supply chain inefficiencies, 
                with customer satisfaction scores dropping due to delayed deliveries and inventory issues.
              </p>
            </div>
          </section>

          <section>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Our Solution</h2>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              We developed a comprehensive AI-powered supply chain automation platform that integrated 
              with their existing ERP systems and provided intelligent automation across multiple touchpoints.
            </p>

            <h3 className='text-2xl font-semibold text-gray-900 mb-4'>1. AI-Powered Demand Forecasting</h3>
            <p className='text-gray-700 mb-4'>
              Implemented machine learning models that analyzed historical sales data, seasonal patterns, 
              market trends, and external factors to predict demand with 95% accuracy.
            </p>
            <ul className='list-disc pl-6 mb-6 text-gray-700 space-y-2'>
              <li>Real-time demand prediction across 200+ product lines</li>
              <li>Integration with weather data and economic indicators</li>
              <li>Automated reorder point calculations</li>
              <li>Seasonal adjustment algorithms</li>
            </ul>

            <h3 className='text-2xl font-semibold text-gray-900 mb-4'>2. Intelligent Inventory Management</h3>
            <p className='text-gray-700 mb-4'>
              Deployed automated inventory optimization systems that continuously monitored stock levels 
              and automatically generated purchase orders based on predicted demand.
            </p>
            <ul className='list-disc pl-6 mb-6 text-gray-700 space-y-2'>
              <li>Automated stock level monitoring across 50+ warehouses</li>
              <li>Dynamic safety stock calculations</li>
              <li>Supplier performance tracking and optimization</li>
              <li>Cross-location inventory balancing</li>
            </ul>

            <h3 className='text-2xl font-semibold text-gray-900 mb-4'>3. Supplier Communication Automation</h3>
            <p className='text-gray-700 mb-4'>
              Created intelligent communication workflows that automated supplier interactions, 
              order confirmations, and delivery tracking.
            </p>
            <ul className='list-disc pl-6 mb-6 text-gray-700 space-y-2'>
              <li>Automated purchase order generation and distribution</li>
              <li>Real-time delivery tracking and notifications</li>
              <li>Supplier performance scoring and alerts</li>
              <li>Automated invoice processing and validation</li>
            </ul>

            <h3 className='text-2xl font-semibold text-gray-900 mb-4'>4. Real-Time Analytics Dashboard</h3>
            <p className='text-gray-700 mb-6'>
              Built a comprehensive dashboard that provided real-time visibility into supply chain 
              performance, with predictive analytics and automated reporting.
            </p>
          </section>

          <section>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Implementation Process</h2>
            
            <div className='space-y-8'>
              <div className='border-l-4 border-blue-500 pl-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Phase 1: Assessment & Planning (Month 1-2)</h3>
                <ul className='text-gray-700 space-y-2 text-sm'>
                  <li>• Comprehensive supply chain audit and process mapping</li>
                  <li>• Data quality assessment and cleanup</li>
                  <li>• Technology stack evaluation and integration planning</li>
                  <li>• Stakeholder alignment and change management planning</li>
                </ul>
              </div>

              <div className='border-l-4 border-green-500 pl-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Phase 2: Core System Development (Month 3-5)</h3>
                <ul className='text-gray-700 space-y-2 text-sm'>
                  <li>• AI model development and training</li>
                  <li>• Integration with existing ERP and warehouse systems</li>
                  <li>• User interface development and testing</li>
                  <li>• Security implementation and compliance validation</li>
                </ul>
              </div>

              <div className='border-l-4 border-purple-500 pl-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Phase 3: Pilot Deployment (Month 6)</h3>
                <ul className='text-gray-700 space-y-2 text-sm'>
                  <li>• Limited pilot with 3 key product lines</li>
                  <li>• User training and feedback collection</li>
                  <li>• Performance monitoring and optimization</li>
                  <li>• System refinement based on pilot results</li>
                </ul>
              </div>

              <div className='border-l-4 border-orange-500 pl-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Phase 4: Full Rollout (Month 7-8)</h3>
                <ul className='text-gray-700 space-y-2 text-sm'>
                  <li>• Gradual rollout across all product lines and locations</li>
                  <li>• Comprehensive user training and support</li>
                  <li>• Performance monitoring and continuous optimization</li>
                  <li>• Knowledge transfer and documentation</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Results & Impact</h2>
            
            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>Operational Improvements</h3>
                <ul className='text-gray-700 space-y-2 text-sm'>
                  <li>• 40% reduction in supply chain operational costs</li>
                  <li>• 60% faster order processing and fulfillment</li>
                  <li>• 95% accuracy in demand forecasting</li>
                  <li>• 80% reduction in manual data entry tasks</li>
                  <li>• 50% improvement in inventory turnover</li>
                </ul>
              </div>

              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>Business Impact</h3>
                <ul className='text-gray-700 space-y-2 text-sm'>
                  <li>• $2.3M annual cost savings</li>
                  <li>• 25% improvement in customer satisfaction</li>
                  <li>• 30% reduction in stockouts</li>
                  <li>• 20% increase in supplier performance scores</li>
                  <li>• 15% improvement in on-time delivery rates</li>
                </ul>
              </div>
            </div>

            <div className='bg-green-50 border-l-4 border-green-500 p-6 mb-8'>
              <h3 className='text-lg font-semibold text-green-900 mb-2'>ROI Achievement</h3>
              <p className='text-green-800'>
                The project achieved a 340% ROI within the first year, with payback period of just 
                3.2 months. The AI automation platform continues to deliver value and has been 
                expanded to additional business units.
              </p>
            </div>
          </section>

          <section>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Technology Stack</h2>
            
            <div className='grid md:grid-cols-3 gap-6 mb-8'>
              <div className='bg-blue-50 p-6 rounded-lg'>
                <h4 className='font-semibold text-blue-900 mb-3'>AI/ML Platform</h4>
                <ul className='text-blue-800 text-sm space-y-1'>
                  <li>• Python & TensorFlow</li>
                  <li>• AWS SageMaker</li>
                  <li>• Apache Spark</li>
                  <li>• MLflow</li>
                </ul>
              </div>
              <div className='bg-green-50 p-6 rounded-lg'>
                <h4 className='font-semibold text-green-900 mb-3'>Data & Analytics</h4>
                <ul className='text-green-800 text-sm space-y-1'>
                  <li>• AWS Redshift</li>
                  <li>• Apache Kafka</li>
                  <li>• Tableau</li>
                  <li>• Grafana</li>
                </ul>
              </div>
              <div className='bg-purple-50 p-6 rounded-lg'>
                <h4 className='font-semibold text-purple-900 mb-3'>Integration & APIs</h4>
                <ul className='text-purple-800 text-sm space-y-1'>
                  <li>• REST APIs</li>
                  <li>• GraphQL</li>
                  <li>• Apache Airflow</li>
                  <li>• Docker & Kubernetes</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Client Testimonial</h2>
            
            <div className='bg-gray-50 rounded-xl p-8 mb-8'>
              <blockquote className='text-xl text-gray-700 italic mb-6'>
                "Zion Tech Group transformed our supply chain operations beyond our expectations. 
                The AI automation platform not only reduced our costs by 40% but also improved 
                our customer satisfaction significantly. Their team's expertise and dedication 
                made this complex implementation seamless."
              </blockquote>
              <div className='flex items-center gap-4'>
                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center'>
                  <span className='text-blue-600 font-bold text-xl'>JS</span>
                </div>
                <div>
                  <div className='font-semibold text-gray-900'>John Smith</div>
                  <div className='text-gray-600'>Chief Operations Officer</div>
                  <div className='text-gray-600'>Global Manufacturing Corp</div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Lessons Learned</h2>
            
            <div className='space-y-6'>
              <div className='bg-blue-50 border-l-4 border-blue-500 p-6'>
                <h3 className='text-lg font-semibold text-blue-900 mb-2'>Data Quality is Critical</h3>
                <p className='text-blue-800'>
                  Investing time in data cleanup and validation upfront was crucial for AI model 
                  accuracy. Poor data quality would have significantly impacted results.
                </p>
              </div>

              <div className='bg-green-50 border-l-4 border-green-500 p-6'>
                <h3 className='text-lg font-semibold text-green-900 mb-2'>Change Management Matters</h3>
                <p className='text-green-800'>
                  Comprehensive user training and change management were essential for adoption. 
                  Users needed to understand both the technology and the business benefits.
                </p>
              </div>

              <div className='bg-purple-50 border-l-4 border-purple-500 p-6'>
                <h3 className='text-lg font-semibold text-purple-900 mb-2'>Start Small, Scale Fast</h3>
                <p className='text-purple-800'>
                  The pilot approach allowed us to validate the solution and build confidence 
                  before full deployment, reducing risk and ensuring success.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className='mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center'>
          <h2 className='text-2xl font-bold mb-4'>Ready to Transform Your Operations?</h2>
          <p className='text-lg opacity-90 mb-6 max-w-2xl mx-auto'>
            Let our AI automation experts help you achieve similar results. Get a free 
            assessment of your current processes and discover automation opportunities.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
            >
              Get Free Assessment
            </Link>
            <Link
              href='/services/ai-automation'
              className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
            >
              Learn About Our Services
            </Link>
          </div>
        </div>

        {/* Related Case Studies */}
        <section className='mt-16'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Related Case Studies</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <Link href='/case-studies' className='group'>
              <div className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow'>
                <h3 className='font-semibold text-gray-900 mb-2 group-hover:text-blue-600'>
                  SaaS Startup: 0 to 10K Users in 6 Months
                </h3>
                <p className='text-gray-600 text-sm'>
                  How a growing SaaS company scaled their user base using growth hacking strategies.
                </p>
              </div>
            </Link>
            <Link href='/case-studies' className='group'>
              <div className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow'>
                <h3 className='font-semibold text-gray-900 mb-2 group-hover:text-blue-600'>
                  Healthcare Provider: AI-Powered Patient Management
                </h3>
                <p className='text-gray-600 text-sm'>
                  Transforming patient scheduling and care coordination with intelligent automation.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}