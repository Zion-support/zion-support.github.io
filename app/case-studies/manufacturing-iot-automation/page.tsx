import React from 'react';
import { Link } from 'react-router-dom';

export const metadata = {
  title: 'Manufacturing IoT Automation: 75% Efficiency Gain Case Study | Zion Tech Group',
  description: 'See how a manufacturing company achieved 75% efficiency improvement and $800K annual savings through IoT automation and predictive maintenance.',
  keywords: 'manufacturing IoT automation, case study, predictive maintenance, efficiency improvement, industrial automation',
};

export default function ManufacturingIoTAutomation() {
  return (
    <div className="animate-fade-in">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/case-studies" className="text-blue-600 hover:text-blue-700 transition-colors">
              Case Studies
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Manufacturing IoT Automation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Manufacturing IoT Automation: 75% Efficiency Gain
          </h1>
          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-semibold">
              Success Story
            </span>
            <span>•</span>
            <span>Manufacturing</span>
            <span>•</span>
            <span>8 months implementation</span>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            A mid-size manufacturing company transformed their operations with IoT automation and predictive 
            maintenance, achieving significant efficiency gains and cost savings. This case study details their 
            journey from manual processes to intelligent automation.
          </p>
        </header>

        {/* Key Results Banner */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-6">Transformation Results</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">75%</div>
              <div className="text-sm opacity-90">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">$800K</div>
              <div className="text-sm opacity-90">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">60%</div>
              <div className="text-sm opacity-90">Reduced Downtime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Predictive Accuracy</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Precision Manufacturing Corp, a specialized equipment manufacturer, was facing increasing pressure 
            to improve efficiency and reduce costs. Their production lines relied heavily on manual monitoring 
            and reactive maintenance, leading to frequent unplanned downtime and quality issues.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-red-900 mb-3">Critical Issues</h3>
            <ul className="space-y-2 text-red-800">
              <li>• 15% unplanned downtime due to equipment failures</li>
              <li>• Manual quality inspections taking 2 hours per batch</li>
              <li>• Reactive maintenance causing production delays</li>
              <li>• Limited visibility into equipment performance</li>
              <li>• High energy consumption without optimization</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Solution</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Zion Tech Group implemented a comprehensive IoT automation solution that included sensor networks, 
            predictive maintenance algorithms, and real-time monitoring dashboards. The system provided complete 
            visibility into production operations and enabled proactive decision-making.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1. IoT Sensor Network</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We deployed a comprehensive sensor network across all production equipment, monitoring temperature, 
            vibration, pressure, and other critical parameters. The sensors provided real-time data to identify 
            potential issues before they caused failures.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-semibold text-blue-900 mb-3">Sensor Coverage</h4>
            <ul className="space-y-2 text-blue-800">
              <li>• 150+ IoT sensors across 12 production lines</li>
              <li>• Real-time vibration monitoring for all motors</li>
              <li>• Temperature sensors for critical components</li>
              <li>• Pressure monitoring for hydraulic systems</li>
              <li>• Energy consumption tracking for optimization</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Predictive Maintenance System</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our AI-powered predictive maintenance system analyzes sensor data to predict equipment failures 
            with 95% accuracy. The system schedules maintenance during planned downtime, reducing unplanned 
            outages by 60%.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Automated Quality Control</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Computer vision systems now perform automated quality inspections, reducing inspection time from 
            2 hours to 15 minutes per batch. The system identifies defects with 99.2% accuracy and automatically 
            flags non-conforming products.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Real-Time Dashboard</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A comprehensive dashboard provides real-time visibility into all aspects of production, including 
            equipment status, quality metrics, energy consumption, and predictive alerts. Managers can make 
            informed decisions based on live data.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Implementation Timeline</h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Month 1-2: Infrastructure Assessment</h4>
                <p className="text-gray-600">
                  Comprehensive evaluation of existing systems, network infrastructure, and operational processes.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Month 3-5: Sensor Deployment</h4>
                <p className="text-gray-600">
                  Installation of IoT sensors, network infrastructure, and initial data collection systems.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Month 6-7: AI Model Development</h4>
                <p className="text-gray-600">
                  Development and training of predictive maintenance algorithms and quality control systems.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Month 8: Full Deployment</h4>
                <p className="text-gray-600">
                  Complete system activation, staff training, and performance monitoring and optimization.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Results & Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-900 mb-4">Operational Improvements</h4>
              <ul className="space-y-2 text-green-800">
                <li>• 75% improvement in overall efficiency</li>
                <li>• 60% reduction in unplanned downtime</li>
                <li>• 95% accuracy in predictive maintenance</li>
                <li>• 87% faster quality inspections</li>
                <li>• 25% reduction in energy consumption</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-4">Business Impact</h4>
              <ul className="space-y-2 text-blue-800">
                <li>• $800K annual cost savings</li>
                <li>• 40% increase in production capacity</li>
                <li>• 99.2% quality inspection accuracy</li>
                <li>• 30% reduction in maintenance costs</li>
                <li>• ROI achieved in 6 months</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Technology Stack</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">IoT Infrastructure</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Industrial IoT sensors</li>
                <li>• Edge computing devices</li>
                <li>• Secure data transmission</li>
                <li>• Cloud-based storage</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">AI & Analytics</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Machine learning models</li>
                <li>• Predictive algorithms</li>
                <li>• Computer vision systems</li>
                <li>• Real-time analytics</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Integration</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• ERP system integration</li>
                <li>• MES connectivity</li>
                <li>• Mobile applications</li>
                <li>• API management</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Key Success Factors</h2>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Comprehensive Planning</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Thorough assessment and planning were critical for success. We spent significant time understanding 
            the existing infrastructure and operational requirements before designing the solution.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Phased Implementation</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A phased approach minimized disruption to ongoing operations while delivering incremental value. 
            Each phase built upon the previous one, creating a solid foundation for the complete system.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Staff Training & Adoption</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Comprehensive training programs ensured smooth adoption of new technologies. Staff were involved 
            in the process and understood the benefits of automation.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Future Expansion</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The IoT foundation established in this project enables future expansion into advanced applications 
            such as autonomous quality control, supply chain optimization, and energy management systems. 
            The modular architecture supports easy integration of new capabilities.
          </p>

          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white mt-12">
            <h3 className="text-2xl font-bold mb-4">Transform Your Manufacturing Operations</h3>
            <p className="text-lg mb-6 opacity-90">
              Zion Tech Group specializes in manufacturing automation and IoT solutions that deliver measurable 
              results. Our experts will help you design and implement systems that improve efficiency, reduce 
              costs, and enhance quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+13024640950"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-center"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}