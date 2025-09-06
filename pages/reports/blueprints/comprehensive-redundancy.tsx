import React from 'react';
const ComprehensiveRedundancyBlueprint: React.FC = () => {
  const architecture_components = [;
    {
    switch (status) {
      case 'active': return 'text - green - 400';
      case 'implemented': return 'text - green - 400';
      case 'exceeded': return 'text - green - 400';
      case 'excellent': return 'text - green - 400';
      default: return 'text - gray - 400';
    }
  }
    switch (health) {
      case 'excellent': return 'bg - green - 500 / 20 text - green - 400';
      case 'good': return 'bg - yellow - 500 / 20 text - yellow - 400';
      case 'warning': return 'bg - orange - 500 / 20 text - orange - 400';
      case 'critical': return 'bg - red - 500 / 20 text - red - 400';
      default: return 'bg - gray - 500 / 20 text - gray - 400';
    }
  }
        {/* Architecture Components */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Architecture Components</h2>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
            {architecture_components.map ((component, index) => (
              <div key={index} className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
                <div className="flex justify - between items - start mb - 4">;
                  <h3 className="text - lg font - semibold text - white">{component.name}</h3>;
                  <span className={`px - 2 py - 1 text - xs rounded - full ${getHealthColor (component.health)}`}>;
                    {component.health}
                  </span>;
                </div>;
                <p className="text - gray - 300 text - sm mb - 4">{component.description}</p>;
                <div className="flex justify - between items - center">;
                  <span className="text - gray - 400 text - sm">{component.instances} instances</span>;
                  <span className={`text - xs ${getStatusColor (component.status)}`}>;
                    ● {component.status}
        {/* Redundancy Features */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Redundancy Features</h2>;
          <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 6">;
            {redundancy_features.map ((feature, index) => (
              <div key={index} className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
                <div className="flex justify - between items - start mb - 4">;
                  <h3 className="text - lg font - semibold text - white">{feature.feature}</h3>;
                  <span className={`px - 2 py - 1 text - xs rounded - full ${getStatusColor (feature.status)}`}>;
                    {feature.status}
        {/* Performance Metrics */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Performance Metrics</h2>;
          <div className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
            <div className="overflow - x-auto">;
              <table className="w - full">;
                <thead>;
                  <tr className="border - b border - white / 20">;
                    <th className="text - left py - 3 px - 4 text - cyan - 400">Metric</th>;
                    <th className="text - left py - 3 px - 4 text - cyan - 400">Current Value</th>;
                    <th className="text - left py - 3 px - 4 text - cyan - 400">Target</th>;
                    <th className="text - left py - 3 px - 4 text - cyan - 400">Status</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  {performance_metrics.map ((metric, index) => (
                    <tr key={index} className="border - b border - white / 10">;
                      <td className="py - 3 px - 4 text - white">{metric.metric}</td>;
                      <td className="py - 3 px - 4 text - green - 400 font - semibold">{metric.value}</td>;
                      <td className="py - 3 px - 4 text - gray - 300">{metric.target}</td>;
                      <td className="py - 3 px - 4">;
                        <span className={`px - 2 py - 1 text - xs rounded - full ${getStatusColor (metric.status)}`}>;
                          {metric.status}
export default ComprehensiveRedundancyBlueprint;