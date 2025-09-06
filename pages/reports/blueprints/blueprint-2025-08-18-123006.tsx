import React from 'react';
    switch (status) {
      case 'active': return 'text - green - 400';
      case 'implemented': return 'text - green - 400';
      case 'deploying': return 'text - yellow - 400';
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
        {/* Edge Nodes */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Edge Computing Nodes</h2>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6">;
            {edge_nodes.map ((node, index) => (
              <div key={index} className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
                <div className="flex justify - between items - start mb - 4">;
                  <h3 className="text - lg font - semibold text - white">{node.name}</h3>;
                  <span className={`px - 2 py - 1 text - xs rounded - full ${getHealthColor (node.health)}`}>;
                    {node.health}
                  </span>;
                </div>;
                <p className="text - gray - 300 text - sm mb - 4">{node.description}</p>;
                <div className="flex justify - between items - center">;
                  <span className="text - gray - 400 text - sm">Latency: {node.latency}</span>;
                  <span className={`text - xs ${getStatusColor (node.status)}`}>;
                    ● {node.status}
        {/* Features */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Key Features</h2>;
          <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 6">;
            {features.map ((feature, index) => (
              <div key={index} className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
                <div className="flex justify - between items - start mb - 4">;
                  <h3 className="text - lg font - semibold text - white">{feature.feature}</h3>;
                  <span className={`px - 2 py - 1 text - xs rounded - full ${getStatusColor (feature.status)}`}>;
                    {feature.status}
export default Blueprint20250818123006;