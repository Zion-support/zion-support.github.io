import React from 'react';
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
