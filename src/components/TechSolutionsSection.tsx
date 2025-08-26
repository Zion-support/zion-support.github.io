import React from 'react';

export const TechSolutionsSection = () => {
  const solutions = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business automation and insights",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment pipelines",
      icon: "☁️",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      icon: "🛡️",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end business transformation and modernization",
      icon: "🚀",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "IoT & Edge Computing",
      description: "Connected devices and edge computing solutions",
      icon: "🌐",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Data Analytics",
      description: "Business intelligence and data-driven decision making",
      icon: "📊",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive innovation and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-4xl">{solution.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {solution.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};