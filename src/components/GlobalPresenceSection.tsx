import React from 'react';

export const GlobalPresenceSection = () => {
  const locations = [
    {
      city: "New York",
      country: "United States",
      services: ["AI Development", "Cloud Solutions", "Cybersecurity"],
      icon: "🗽",
      color: "from-blue-500 to-cyan-500"
    },
    {
      city: "London",
      country: "United Kingdom",
      services: ["Digital Transformation", "AI Consulting", "IT Services"],
      icon: "🇬🇧",
      color: "from-purple-500 to-blue-500"
    },
    {
      city: "Singapore",
      country: "Singapore",
      services: ["Cloud Migration", "DevOps", "Data Analytics"],
      icon: "🇸🇬",
      color: "from-red-500 to-orange-500"
    },
    {
      city: "Sydney",
      country: "Australia",
      services: ["AI Solutions", "Cybersecurity", "Cloud Infrastructure"],
      icon: "🇦🇺",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Global <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Presence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Serving clients worldwide with local expertise and global reach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 text-center"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${location.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{location.icon}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {location.city}
              </h3>
              
              <p className="text-cyan-400 font-semibold text-sm mb-4">
                {location.country}
              </p>
              
              <div className="space-y-2">
                {location.services.map((service, idx) => (
                  <div key={idx} className="text-gray-400 text-xs">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};