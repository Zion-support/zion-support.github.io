import React from 'react';

interface MetricProps {
  value: string;
  label: string;
  color: string;
}

const Metric: React.FC<MetricProps> = ({ value, label, color }) => (
  <div className="text-center">
    <div className={`text-4xl font-bold ${color} mb-2`}>{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

const PerformanceMetrics: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Proven Performance Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our solutions deliver measurable improvements across key business metrics
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Metric value="40%" label="Average Cost Reduction" color="text-green-600" />
          <Metric value="3x" label="Faster Time to Market" color="text-blue-600" />
          <Metric value="99.9%" label="System Uptime" color="text-purple-600" />
          <Metric value="50%" label="Development Time Saved" color="text-orange-600" />
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;