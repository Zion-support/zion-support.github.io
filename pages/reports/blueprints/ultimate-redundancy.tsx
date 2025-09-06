import React from 'react';
        {/* System Features */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Advanced System Features</h2>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
            {system_features.map ((feature, index) => (
              <div key={index} className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
                <div className="flex justify - between items - start mb - 4">;
                  <h3 className="text - lg font - semibold text - white">{feature.name}</h3>;
                  <span className={`px - 2 py - 1 text - xs rounded - full ${getPriorityColor (feature.priority)}`}>;
                    {feature.priority}
                  </span>;
                </div>;
                <p className="text - gray - 300 text - sm mb - 4">{feature.description}</p>;
                <div className="flex justify - between items - center">;
                  <span className={`text - xs ${getStatusColor (feature.status)}`}>;
                    ● {feature.status}
        {/* Advanced Capabilities */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Advanced Capabilities</h2>;
          <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 6">;
            {advanced_capabilities.map ((capability, index) => (
              <div key={index} className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
                <div className="flex justify - between items - start mb - 4">;
                  <h3 className="text - lg font - semibold text - white">{capability.capability}</h3>;
                  <span className={`px - 2 py - 1 text - xs rounded - full ${getStatusColor (capability.status)}`}>;
                    {capability.status}
        {/* Performance Metrics */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Performance Metrics</h2>;
          <div className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
            <div className="overflow - x-auto">;
              <table className="w - full">;
                <thead>;
                  <tr className="border - b border - white / 20">;
                    <th className="text - left py - 3 px - 4 text - red - 400">Metric</th>;
                    <th className="text - left py - 3 px - 4 text - red - 400">Current Value</th>;
                    <th className="text - left py - 3 px - 4 text - red - 400">Target</th>;
                    <th className="text - left py - 3 px - 4 text - red - 400">Status</th>;
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
