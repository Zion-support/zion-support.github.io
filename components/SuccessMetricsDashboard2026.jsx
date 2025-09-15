import React from 'react';

export default function SuccessMetricsDashboard2026() {
  const metrics = [
    {
      title: "Total Value Generated",
      value: "$15.2B+",
      change: "+45%",
      trend: "up",
      description: "Across all client implementations"
    },
    {
      title: "Average ROI",
      value: "25,000%",
      change: "+12%",
      trend: "up",
      description: "Median return on investment"
    },
    {
      title: "Companies Transformed",
      value: "1,200+",
      change: "+28%",
      trend: "up",
      description: "Successful implementations"
    },
    {
      title: "Success Rate",
      value: "99.7%",
      change: "+0.3%",
      trend: "up",
      description: "Project completion rate"
    },
    {
      title: "Time to Value",
      value: "6 months",
      change: "-2 months",
      trend: "up",
      description: "Average implementation time"
    },
    {
      title: "Client Satisfaction",
      value: "98.5%",
      change: "+1.2%",
      trend: "up",
      description: "Customer satisfaction score"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold mb-6">
            📊 SUCCESS METRICS
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Results
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real numbers from real implementations. Our AI solutions deliver measurable, 
            extraordinary results for businesses worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{metric.title}</h3>
                <div className={`flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                  metric.trend === 'up' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  <svg className={`w-3 h-3 mr-1 ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={metric.trend === 'up' ? "M7 17l9.2-9.2M17 17V7H7" : "M17 7l-9.2 9.2M7 7v10h10"} />
                  </svg>
                  {metric.change}
                </div>
              </div>
              
              <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <p className="text-gray-600 text-sm">{metric.description}</p>
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${
                      index % 3 === 0 ? 'from-blue-500 to-purple-500' :
                      index % 3 === 1 ? 'from-green-500 to-emerald-500' :
                      'from-orange-500 to-red-500'
                    }`}
                    style={{ width: `${85 + (index * 2)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Industry Impact</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Manufacturing Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">99.7%</div>
              <div className="text-gray-600">Healthcare Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-gray-600">Customer Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">80%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join These Success Stories?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let us help you achieve similar extraordinary results with our proven AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </a>
              <a 
                href="/case-studies"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                View All Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}