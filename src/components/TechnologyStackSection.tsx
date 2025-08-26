import React from 'react';

export const TechnologyStackSection = () => {
  const technologies = [
    {
      category: "Frontend",
      items: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Java", "Go", "C#"],
      icon: "⚙️",
      color: "from-purple-500 to-blue-500"
    },
    {
      category: "AI & ML",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face"],
      icon: "🤖",
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
      icon: "☁️",
      color: "from-yellow-500 to-orange-500"
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"],
      icon: "🗄️",
      color: "from-red-500 to-pink-500"
    },
    {
      category: "Security",
      items: ["OAuth 2.0", "JWT", "SSL/TLS", "Penetration Testing", "Compliance"],
      icon: "🔒",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with cutting-edge technologies and industry best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{tech.icon}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {tech.category}
              </h3>
              
              <div className="space-y-2">
                {tech.items.map((item, idx) => (
                  <div key={idx} className="text-gray-400 text-sm">
                    {item}
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