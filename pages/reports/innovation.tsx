import React from 'react';
        { name: 'Security Scanning', status: 'active', impact: 'critical', description: 'Automated vulnerability detection' }
      ];
    }
  ];
        {/* Innovation Areas */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Innovation Areas</h2>;
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;
            {innovation_areas.map ((area, area_index) => (
              <div key={area_index} className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
                <h3 className="text - xl font - semibold mb - 4 text - purple - 400">{area.category}</h3>;
                <div className="space - y-4">;
                  {area.innovations.map ((innovation, innovation_index) => (
                    <div key={innovation_index} className="border - l-2 border - purple - 400 / 30 pl - 4">;
                      <div className="flex justify - between items - start mb - 2">;
                        <span className="text - white font - medium">{innovation.name}</span>;
                        <span className={`px - 2 py - 1 text - xs rounded - full ${getImpactColor (innovation.impact)}`}>;
                          {innovation.impact}
                        </span>;
                      </div>;
                      <p className="text - gray - 300 text - sm">{innovation.description}</p>;
                      <div className="flex items - center mt - 2">;
                        <span className={`text - xs ${getStatusColor (innovation.status)}`}>;
                          ● {innovation.status}
        {/* Recent Innovations */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Recent Innovations</h2>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
            {recent_innovations.map ((innovation) => (
              <div key={innovation.id} className="bg - white / 10 rounded - xl p - 6 border border - white / 20 hover:border - purple - 400 / 30 transition - all duration - 300">;
                <div className="flex justify - between items - start mb - 4">;
                  <h3 className="text - lg font - semibold text - white">{innovation.title}</h3>;
                  <span className={`px - 2 py - 1 text - xs rounded - full ${getImpactColor (innovation.impact)}`}>;
                    {innovation.impact}
                  </span>;
                </div>;
                <p className="text - gray - 300 text - sm mb - 4">{innovation.summary}</p>;
                <div className="flex justify - between items - center">;
                  <span className="text - gray - 400 text - sm">{innovation.date}</span>;
                  <span className={`text - xs ${getStatusColor (innovation.status)}`}>;
                    {innovation.status}
        {/* Upcoming Innovations */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Upcoming Innovations</h2>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
            {upcoming_innovations.map ((innovation, index) => (
              <div key={index} className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
                <h3 className="text - lg font - semibold text - white mb - 2">{innovation.name}</h3>;
                <p className="text - gray - 300 text - sm mb - 4">{innovation.description}</p>;
                <div className="flex justify - between items - center">;
                  <span className="text - gray - 400 text - sm">{innovation.timeline}</span>;
                  <span className={`px - 2 py - 1 text - xs rounded - full ${getStatusColor (innovation.status)}`}>;
                    {innovation.status}
