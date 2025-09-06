import React from 'react';
const BlueprintsIndexPage: React.FC = () => {
  const blueprint_categories = [;
    {
        }
      ];
    }
  ];
    switch (status) {
      case 'active': return 'text - green - 400';
      case 'deployed': return 'text - blue - 400';
      case 'development': return 'text - yellow - 400';
      case 'research': return 'text - purple - 400';
      default: return 'text - gray - 400';
    }
  }
    switch (complexity) {
      case 'critical': return 'bg - red - 500 / 20 text - red - 400';
      case 'high': return 'bg - orange - 500 / 20 text - orange - 400';
      case 'medium': return 'bg - yellow - 500 / 20 text - yellow - 400';
      case 'low': return 'bg - green - 500 / 20 text - green - 400';
      default: return 'bg - gray - 500 / 20 text - gray - 400';
    }
  }
                          {blueprint.name}
                        </Link>;
                        <span className={`px - 2 py - 1 text - xs rounded - full ${getComplexityColor (blueprint.complexity)}`}>;
                          {blueprint.complexity}
                        </span>;
                      </div>;
                      <p className="text - gray - 300 text - sm mb - 2">{blueprint.description}</p>;
                      <div className="flex justify - between items - center text - xs">;
                        <span className={`${getStatusColor (blueprint.status)}`}>;
                          ● {blueprint.status}
        {/* Recent Blueprints */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Recent Blueprints</h2>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
            {recent_blueprints.map ((blueprint) => (
              <div key={blueprint.id} className="bg - white / 10 rounded - xl p - 6 border border - white / 20 hover:border - indigo - 400 / 30 transition - all duration - 300">;
                <div className="flex justify - between items - start mb - 4">;
                  <h3 className="text - lg font - semibold text - white">{blueprint.name}</h3>;
                  <span className={`px - 2 py - 1 text - xs rounded - full ${getStatusColor (blueprint.status)}`}>;
                    {blueprint.status}
export default BlueprintsIndexPage;