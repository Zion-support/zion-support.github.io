'use client';
import React, { useState, useEffect } from 'react';
    };

    animateStats();
  }, [statistics]);

  const getGridColsClass = () => {
    switch (gridCols) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      case 5: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5';
      case 6: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-6';
      default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    }
  };

  return (
        </div>

        {/* Statistics Grid */}
                    </div>
                  )}
                  
                  <div className="text-4xl font-bold mb-2">{displayValue}</div>
                  <div className="text-lg text-gray-300 mb-4">{stat.label}</div>
                  
                  {showTrends && stat.trend && (
                    <div className={`flex items-center justify-center space-x-1 ${
                      stat.trend.isPositive ? 'text-green-400' : 'text-red-400'
                    }`}>
                      <TrendingUp className={`w-4 h-4 ${
                        stat.trend.isPositive ? 'rotate-0' : 'rotate-180'
                      }`} />
                      <span className="text-sm font-semibold">
                        {stat.trend.isPositive ? '+' : ''}{stat.trend.value}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
