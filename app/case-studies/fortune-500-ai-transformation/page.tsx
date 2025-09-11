import React from 'react';
import Link from 'next/link';

export default function Fortune500AITransformationPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4'>
              <span>🏭</span>
              Manufacturing Case Study
            </div>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Fortune 500 Manufacturing: AI Transformation Success Story
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              How we helped a Fortune 500 manufacturing company achieve 65% cost reduction 
              and $2.3M annual savings through AI-powered quality control and predictive maintenance.
            </p>
            <div className='flex items-center justify-center gap-6 text-sm text-gray-500'>
              <span>📅 January 15, 2025</span>
              <span>⏱️ 8 min read</span>
              <span>👥 5,200+ views</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <article className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='prose prose-lg max-w-none'>
            
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>The Challenge</h2>
            <p className='text-lg text-gray-700 mb-6'>
              A Fortune 500 manufacturing company with 15 facilities across North America was facing 
              significant operational challenges. Manual quality control processes were time-consuming 
              and error-prone, while equipment downtime was costing millions annually.
            </p>

            <div className='bg-red-50 border-l-4 border-red-500 p-6 mb-8'>
              <h3 className='text-xl font-semibold text-red-900 mb-3'>Key Pain Points</h3>
              <ul className='space-y-2 text-red-800'>
                <li>• Manual quality inspections taking 4-6 hours per batch</li>
                <li>• 15% equipment downtime due to unexpected failures</li>
                <li>• $3.2M annual maintenance costs</li>
                <li>• 8% defect rate impacting customer satisfaction</li>
                <li>• Inconsistent quality standards across facilities</li>
              </ul>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Our Solution</h2>
            <p className='text-lg text-gray-700 mb-6'>
              We implemented a comprehensive AI-powered solution combining computer vision for quality 
              control and predictive analytics for maintenance optimization across all 15 facilities.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <span className='text-blue-600 text-xl'>👁️</span>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-800'>AI-Powered Quality Control</h3>
                </div>
                <ul className='space-y-2 text-gray-700'>
                  <li>• Computer vision systems for real-time defect detection</li>
                  <li>• Automated quality scoring and classification</li>
                  <li>• Integration with existing production lines</li>
                  <li>• Real-time alerts for quality issues</li>
                </ul>
              </div>

              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
                    <span className='text-green-600 text-xl'>🔧</span>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-800'>Predictive Maintenance</h3>
                </div>
                <ul className='space-y-2 text-gray-700'>
                  <li>• IoT sensors for equipment monitoring</li>
                  <li>• Machine learning models for failure prediction</li>
                  <li>• Automated maintenance scheduling</li>
                  <li>• Spare parts inventory optimization</li>
                </ul>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Implementation Timeline</h2>
            
            <div className='space-y-6 mb-8'>
              <div className='flex gap-4'>
                <div className='flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold'>1</div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Phase 1: Assessment & Planning (Weeks 1-4)</h3>
                  <p className='text-gray-700'>
                    Comprehensive analysis of current processes, data collection, and system architecture design. 
                    Identified 3 pilot facilities for initial implementation.
                  </p>
                </div>
              </div>
              
              <div className='flex gap-4'>
                <div className='flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold'>2</div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Phase 2: Pilot Implementation (Weeks 5-12)</h3>
                  <p className='text-gray-700'>
                    Deployed AI systems at 3 pilot facilities. Trained models on historical data and 
                    fine-tuned algorithms for optimal performance.
                  </p>
                </div>
              </div>
              
              <div className='flex gap-4'>
                <div className='flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold'>3</div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Phase 3: Full Rollout (Weeks 13-24)</h3>
                  <p className='text-gray-700'>
                    Scaled successful pilot solutions across all 15 facilities. Implemented comprehensive 
                    training programs and change management initiatives.
                  </p>
                </div>
              </div>
              
              <div className='flex gap-4'>
                <div className='flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold'>4</div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Phase 4: Optimization (Weeks 25-32)</h3>
                  <p className='text-gray-700'>
                    Continuous monitoring, performance optimization, and system enhancements based on 
                    real-world usage data and feedback.
                  </p>
                </div>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Results & Impact</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              <div className='text-center p-6 bg-blue-50 rounded-lg'>
                <div className='text-4xl font-bold text-blue-600 mb-2'>65%</div>
                <div className='text-lg font-semibold text-gray-800 mb-2'>Cost Reduction</div>
                <div className='text-sm text-gray-600'>In quality control and maintenance operations</div>
              </div>
              <div className='text-center p-6 bg-green-50 rounded-lg'>
                <div className='text-4xl font-bold text-green-600 mb-2'>80%</div>
                <div className='text-lg font-semibold text-gray-800 mb-2'>Faster Processing</div>
                <div className='text-sm text-gray-600'>Quality inspections completed in minutes vs hours</div>
              </div>
              <div className='text-center p-6 bg-purple-50 rounded-lg'>
                <div className='text-4xl font-bold text-purple-600 mb-2'>$2.3M</div>
                <div className='text-lg font-semibold text-gray-800 mb-2'>Annual Savings</div>
                <div className='text-sm text-gray-600'>From reduced downtime and improved efficiency</div>
              </div>
            </div>

            <div className='bg-green-50 border border-green-200 rounded-lg p-6 mb-8'>
              <h3 className='text-xl font-semibold text-green-800 mb-4'>Additional Benefits Achieved</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <ul className='space-y-2 text-green-700'>
                  <li>• 95% reduction in quality inspection time</li>
                  <li>• 60% decrease in equipment downtime</li>
                  <li>• 40% improvement in defect detection accuracy</li>
                  <li>• 25% increase in overall equipment effectiveness</li>
                </ul>
                <ul className='space-y-2 text-green-700'>
                  <li>• 90% reduction in manual inspection errors</li>
                  <li>• 50% decrease in maintenance costs</li>
                  <li>• 30% improvement in customer satisfaction</li>
                  <li>• 100% compliance with quality standards</li>
                </ul>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Technology Stack</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
              <div className='bg-gray-50 p-6 rounded-lg'>
                <h3 className='text-lg font-semibold text-gray-800 mb-4'>AI & Machine Learning</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li>• TensorFlow for computer vision models</li>
                  <li>• PyTorch for predictive analytics</li>
                  <li>• OpenCV for image processing</li>
                  <li>• Scikit-learn for classification algorithms</li>
                </ul>
              </div>
              
              <div className='bg-gray-50 p-6 rounded-lg'>
                <h3 className='text-lg font-semibold text-gray-800 mb-4'>Infrastructure & Integration</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li>• AWS cloud infrastructure</li>
                  <li>• Kubernetes for container orchestration</li>
                  <li>• Apache Kafka for real-time data streaming</li>
                  <li>• REST APIs for system integration</li>
                </ul>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Client Testimonial</h2>
            
            <div className='bg-blue-50 border-l-4 border-blue-500 p-6 mb-8'>
              <blockquote className='text-lg text-gray-700 italic mb-4'>
                "The AI transformation has been nothing short of revolutionary for our operations. 
                We've not only achieved significant cost savings but also improved our quality standards 
                and customer satisfaction. The team at Zion Tech Group delivered exactly what they promised, 
                on time and within budget."
              </blockquote>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center'>
                  <span className='text-white font-semibold'>JS</span>
                </div>
                <div>
                  <div className='font-semibold text-gray-800'>John Smith</div>
                  <div className='text-sm text-gray-600'>VP of Operations, Fortune 500 Manufacturing</div>
                </div>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Lessons Learned</h2>
            
            <div className='space-y-4 mb-8'>
              <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-4'>
                <h4 className='font-semibold text-yellow-800 mb-2'>Change Management is Critical</h4>
                <p className='text-yellow-700 text-sm'>
                  Success required comprehensive training and change management programs to ensure 
                  smooth adoption across all facilities and employee levels.
                </p>
              </div>
              
              <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
                <h4 className='font-semibold text-blue-800 mb-2'>Data Quality Matters</h4>
                <p className='text-blue-700 text-sm'>
                  The quality of historical data directly impacted model performance. Investing in 
                  data cleaning and validation upfront was crucial for success.
                </p>
              </div>
              
              <div className='bg-green-50 border border-green-200 rounded-lg p-4'>
                <h4 className='font-semibold text-green-800 mb-2'>Pilot Approach Works</h4>
                <p className='text-green-700 text-sm'>
                  Starting with a pilot implementation allowed us to refine the solution before 
                  scaling across all facilities, reducing risk and improving outcomes.
                </p>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>ROI Analysis</h2>
            
            <div className='bg-gray-50 p-6 rounded-lg mb-8'>
              <h3 className='text-lg font-semibold text-gray-800 mb-4'>Investment vs. Returns</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <h4 className='font-semibold text-gray-700 mb-2'>Total Investment</h4>
                  <ul className='space-y-1 text-sm text-gray-600'>
                    <li>• AI system development: $450K</li>
                    <li>• Hardware & infrastructure: $200K</li>
                    <li>• Training & change management: $150K</li>
                    <li>• <strong>Total: $800K</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-700 mb-2'>Annual Returns</h4>
                  <ul className='space-y-1 text-sm text-gray-600'>
                    <li>• Cost savings: $2.3M</li>
                    <li>• Productivity gains: $800K</li>
                    <li>• Quality improvements: $400K</li>
                    <li>• <strong>Total: $3.5M</strong></li>
                  </ul>
                </div>
              </div>
              <div className='mt-4 p-4 bg-green-100 rounded-lg'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-green-600'>337% ROI</div>
                  <div className='text-sm text-green-700'>Payback period: 3.4 months</div>
                </div>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Ready to Transform Your Manufacturing Operations?</h2>
            <p className='text-lg text-gray-700 mb-6'>
              This case study demonstrates the transformative power of AI in manufacturing. 
              Our team can help you achieve similar results with a customized solution for your specific needs.
            </p>

            <div className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg text-center'>
              <h3 className='text-2xl font-bold mb-4'>Start Your AI Transformation Journey</h3>
              <p className='text-lg mb-6 opacity-90'>
                Get a free consultation to discover how AI can transform your manufacturing operations.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/contact'
                  className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
                >
                  Schedule Consultation
                </Link>
                <Link
                  href='/services/ai-services'
                  className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Case Studies */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>Related Case Studies</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Link href='/case-studies/ecommerce-platform-transformation' className='group'>
              <article className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                  E-commerce Platform Transformation
                </h3>
                <p className='text-gray-600 mb-4'>
                  How we helped a mid-market retail platform achieve 150% revenue growth with AI-powered recommendations.
                </p>
                <span className='text-blue-600 font-medium group-hover:underline'>Read Case Study →</span>
              </article>
            </Link>
            
            <Link href='/case-studies/healthcare-ai-implementation' className='group'>
              <article className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                  Healthcare AI Implementation
                </h3>
                <p className='text-gray-600 mb-4'>
                  Transforming patient care with AI-powered diagnostic tools and workflow automation.
                </p>
                <span className='text-blue-600 font-medium group-hover:underline'>Read Case Study →</span>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}