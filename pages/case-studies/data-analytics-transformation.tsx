import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
export default function CaseStudyPage() {
  return (
    <>
      <Head>
        <title>Data Analytics Transformation - Case Study | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Discover how a Healthcare Provider achieved 30% improvement in patient outcomes with comprehensive data analytics platform. Read our detailed case study.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;data analytics, healthcare analytics, predictive modeling, big data, machine learning&quot; />      </Head>
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900&quot;>
        <main className=&quot;container mx-auto px-6 py-12&quot;>
          {/* Breadcrumb */}
          <nav className=&quot;mb-8&quot;>
            <Link href=&quot;/&quot; className=&quot;text-white/60 hover:text-white transition-colors&quot;>
              Home
            </Link>
            <span className=&quot;text-white/60 mx-2&quot;>→</span>
            <Link href=&quot;/case-studies&quot; className=&quot;text-white/60 hover:text-white transition-colors&quot;>
              Case Studies
            </Link>
            <span className=&quot;text-white/60 mx-2&quot;>→</span>
            <span className=&quot;text-white&quot;>Data Analytics Transformation</span>
          </nav>

          {/* Header */}
          <header className=&quot;text-center mb-16&quot;>
            <div className=&quot;inline-block px-4 py-2 bg-purple-400/20 text-purple-400 text-sm rounded-full border border-purple-400/30 mb-6&quot;>              Healthcare Industry
            </div>
            <h1 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Data Analytics Transformation
            </h1>
            <p className=&quot;text-xl text-white/80 max-w-3xl mx-auto&quot;>
              How a Healthcare Provider achieved 30% improvement in patient outcomes with comprehensive data analytics platform
            </p>
          </header>

          {/* Case Study Content */}
          <div className=&quot;max-w-4xl mx-auto&quot;>
            {/* Company Overview */}
            <section className=&quot;mb-16&quot;>
              <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Company Overview</h2>
              <div className=&quot;bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20&quot;>
                <h3 className=&quot;text-2xl font-semibold text-purple-400 mb-4&quot;>Healthcare Provider</h3>
                <p className=&quot;text-white/90 text-lg mb-4&quot;>
                  A large healthcare network serving multiple communities with hospitals, 
                  clinics, and specialized medical services. The organization struggled to leverage data for patient care improvements.                </p>
                <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mt-6&quot;>
                  <div className=&quot;text-center&quot;>
                    <div className=&quot;text-3xl font-bold text-purple-400&quot;>5+</div>
                    <div className=&quot;text-white/70&quot;>Hospitals</div>
                  </div>
                  <div className=&quot;text-center&quot;>
                    <div className=&quot;text-3xl font-bold text-purple-400&quot;>50+</div>
                    <div className=&quot;text-white/70&quot;>Clinics</div>
                  </div>
                  <div className=&quot;text-center&quot;>
                    <div className=&quot;text-3xl font-bold text-purple-400&quot;>$200M+</div>
                    <div className=&quot;text-white/70&quot;>Annual Budget</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Challenge */}
            <section className=&quot;mb-16&quot;>
              <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>The Challenge</h2>
              <div className=&quot;bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20&quot;>
                <h3 className=&quot;text-2xl font-semibold text-red-400 mb-4&quot;>Critical Issues</h3>
                <ul className=&quot;space-y-3 text-white/90 text-lg&quot;>
                  <li className=&quot;flex items-start gap-3&quot;>
                    <div className=&quot;w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0&quot;></div>                    <span>Inability to leverage data for patient care improvements</span>
                  </li>
                  <li className=&quot;flex items-start gap-3&quot;>
                    <div className=&quot;w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0&quot;></div>
                    <span>Operational inefficiencies due to lack of data insights</span>
                  </li>
                  <li className=&quot;flex items-start gap-3&quot;>
                    <div className=&quot;w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0&quot;></div>
                    <span>Manual data collection and analysis processes</span>
                  </li>
                  <li className=&quot;flex items-start gap-3&quot;>
                    <div className=&quot;w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0&quot;></div>
                    <span>No predictive capabilities for patient care planning</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section className=&quot;mb-16&quot;>
              <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Our Solution</h2>
              <div className=&quot;bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20&quot;>
                <h3 className=&quot;text-2xl font-semibold text-green-400 mb-4&quot;>Comprehensive Data Analytics Platform</h3>
                <p className=&quot;text-white/90 text-lg mb-6&quot;>
                  We built a comprehensive data analytics platform that provides real-time insights, 
                  predictive modeling, and automated reporting for improved patient care and operational efficiency.
                </p>
                
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
                  <div className=&quot;bg-white/5 rounded-lg p-6 border border-white/10&quot;>
                    <h4 className=&quot;text-xl font-semibold text-purple-400 mb-3&quot;>Big Data Processing</h4>
                    <p className=&quot;text-white/80&quot;>
                      Advanced big data infrastructure processes millions of patient records, 
                      lab results, and operational data points in real-time.
                    </p>
                  </div>
                  
                  <div className=&quot;bg-white/5 rounded-lg p-6 border border-white/10&quot;>
                    <h4 className=&quot;text-xl font-semibold text-purple-400 mb-3&quot;>Machine Learning</h4>
                    <p className=&quot;text-white/80&quot;>
                      ML algorithms identify patterns, predict outcomes, and provide                       personalized treatment recommendations.
                    </p>
                  </div>
                  
                  <div className=&quot;bg-white/5 rounded-lg p-6 border border-white/10&quot;>
                    <h4 className=&quot;text-xl font-semibold text-purple-400 mb-3&quot;>Real-time Analytics</h4>
                    <p className=&quot;text-white/80&quot;>
                      Live dashboards provide instant insights into patient conditions, 
                      resource utilization, and operational metrics.
                    </p>
                  </div>
                  
                  <div className=&quot;bg-white/5 rounded-lg p-6 border border-white/10&quot;>
                    <h4 className=&quot;text-xl font-semibold text-purple-400 mb-3&quot;>Predictive Modeling</h4>
                    <p className=&quot;text-white/80&quot;>
                      Advanced predictive models forecast patient outcomes, readmission risks, 
                      and resource requirements.                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Results */}
            <section className=&quot;mb-16&quot;>
              <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Results & Impact</h2>
              <div className=&quot;bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20&quot;>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>                  <div>
                    <h3 className=&quot;text-2xl font-semibold text-green-400 mb-6&quot;>Quantifiable Results</h3>
                    <div className=&quot;space-y-4&quot;>
                      <div className=&quot;flex items-center justify-between&quot;>
                        <span className=&quot;text-white/90&quot;>Patient Outcomes</span>
                        <span className=&quot;text-2xl font-bold text-green-400&quot;>+30%</span>
                      </div>
                      <div className=&quot;flex items-center justify-between&quot;>
                        <span className=&quot;text-white/90&quot;>Operational Costs</span>
                        <span className=&quot;text-2xl font-bold text-green-400&quot;>-40%</span>
                      </div>
                      <div className=&quot;flex items-center justify-between&quot;>
                        <span className=&quot;text-white/90&quot;>Data Processing</span>
                        <span className=&quot;text-2xl font-bold text-green-400&quot;>Real-time</span>
                      </div>
                      <div className=&quot;flex items-center justify-between&quot;>
                        <span className=&quot;text-white/90&quot;>Predictive Accuracy</span>
                        <span className=&quot;text-2xl font-bold text-green-400&quot;>85%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className=&quot;text-2xl font-semibold text-green-400 mb-6&quot;>Additional Benefits</h3>
                    <ul className=&quot;space-y-3 text-white/80&quot;>
                      <li className=&quot;flex items-start gap-3&quot;>
                        <div className=&quot;w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0&quot;></div>
                        <span>Improved clinical decision-making with data-driven insights</span>
                      </li>
                      <li className=&quot;flex items-start gap-3&quot;>
                        <div className=&quot;w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0&quot;></div>
                        <span>Reduced readmission rates through predictive interventions</span>
                      </li>
                      <li className=&quot;flex items-start gap-3&quot;>
                        <div className=&quot;w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0&quot;></div>
                        <span>Optimized resource allocation and staffing</span>
                      </li>
                      <li className=&quot;flex items-start gap-3&quot;>
                        <div className=&quot;w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0&quot;></div>
                        <span>Enhanced patient engagement and satisfaction</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Technologies */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Technologies Used</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Big DataMachine LearningReal-time AnalyticsPredictive Modeling'].map((tech) => (
                    <div key={tech} className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                      <span className="text-purple-400 font-semibold">{tech}</span>                  {_['Big Data', _'Machine Learning', _'Real-time Analytics', _'Predictive Modeling'].map((tech) => (
                    <div key={tech} className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                      <span className="text-purple-400 font-semibold">{_tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Implementation */}
            <section className=&quot;mb-16&quot;>
              <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Implementation Timeline</h2>
              <div className=&quot;bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20&quot;>
                <div className=&quot;space-y-6&quot;>
                  <div className=&quot;flex items-center gap-4&quot;>
                    <div className=&quot;w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold&quot;>1</div>                    <div>
                      <h4 className=&quot;text-lg font-semibold text-white&quot;>Data Assessment & Planning (Months 1-2)</h4>
                      <p className=&quot;text-white/70&quot;>Comprehensive data audit and system architecture design</p>
                    </div>
                  </div>
                  
                  <div className=&quot;flex items-center gap-4&quot;>
                    <div className=&quot;w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold&quot;>2</div>
                    <div>
                      <h4 className=&quot;text-lg font-semibold text-white&quot;>Infrastructure Development (Months 3-6)</h4>
                      <p className=&quot;text-white/70&quot;>Building big data infrastructure and ML model development</p>
                    </div>
                  </div>
                  
                  <div className=&quot;flex items-center gap-4&quot;>
                    <div className=&quot;w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold&quot;>3</div>
                    <div>
                      <h4 className=&quot;text-lg font-semibold text-white&quot;>Integration & Testing (Months 7-9)</h4>
                      <p className=&quot;text-white/70&quot;>System integration and comprehensive testing with real data</p>
                    </div>
                  </div>
                  
                  <div className=&quot;flex items-center gap-4&quot;>
                    <div className=&quot;w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold&quot;>4</div>
                    <div>
                      <h4 className=&quot;text-lg font-semibold text-white&quot;>Deployment & Training (Month 10)</h4>
                      <p className=&quot;text-white/70&quot;>Full deployment and staff training on new analytics platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className=&quot;text-center&quot;>
              <div className=&quot;bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-500/20&quot;>
                <h2 className=&quot;text-2xl font-bold mb-4 text-white&quot;>Ready to Transform Your Data Analytics?</h2>
                <p className=&quot;text-white/80 mb-6 max-w-2xl mx-auto&quot;>                  This case study demonstrates the real impact of data analytics transformation. 
                  Let's discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm: flex-row gap-4 justify-center">                  <Link 
                    href=&quot;/contact&quot;
                    className=&quot;bg-gradient-to-r from-purple-400 to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300&quot;
                  >
                    Get Started
                  </Link>
                  <Link 
                    href=&quot;/case-studies&quot;
                    className=&quot;px-8 py-4 border border-white/20 rounded-lg text-white hover:border-purple-400/50 transition-all duration-300&quot;
                  >
                    View All Case Studies
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}