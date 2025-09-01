Award,
  Users,
  Brain,
  Shield,
  Cloud,
  Zap,
  Star,
  CheckCircle,
  Globe,
  Rocket'''
} from 'lucide-react';'
''
      projects: '50+'};
  ];

  {;""""
    icon: "🚀",;""""
    title: "Successful Projects",;""""
    description: "Successfully delivered complex technology solutions for Fortune 500 companies",;""""
    count: "500+"};
];

const coreExpertise: any = [""""
  "Artificial Intelligence & Machine Learning",""""
  "Quantum Computing & Algorithms",;""""
  "Blockchain & Web3 Technologies",;""""
  "Cloud Infrastructure & DevOps",;""""
  "Cybersecurity & Compliance",;""""
  "Data Science & Analytics",;""""
  "IoT & Edge Computing",;""""
  "Mobile & Web Development";
];

export function TeamExpertiseSection(function TeamExpertiseSection(function TeamExpertiseSection() {): any {): any {}
  return (""""
    <section className = "py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">""""
      <div className="max-w-7xl mx-auto px-6">"""
        <motion.div """"
          className="text-center mb-16"""
          initial = {}
  { opacity: 0,
  y: 20;
}}
          whileInView = {}
  { opacity: 1,
  y: 0;
}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}"""
        >""""
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Team Expertise"""
          </h2>""""
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of certified professionals brings decades of combined experience;
            in cutting - edge technologies and proven methodologies.</p>
        </motion.div>

          initial = {}
  { opacity: 0,
  y: 20;
}}
          whileInView = {}
  { opacity: 1,
  y: 0;
}}
          transition = {}
  { duration: 0.6,
  delay: 0.1;
"""
}}""""
          className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-16"""
        >;
          {stats.map ( (stat, index) => {;
            """
            return (""""
              <div key = {stat.label} className="text-center">""""
                <div className="flex justify-center mb-4">""""
                  <div className="p-3 bg-blue-100 rounded-full">""""
                    <IconComponent className="h-8 w-8 text-blue-600"  />                  </div>"""
                </div>""""
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}"""
                </div>""""
                <div className="text-gray-600">{stat.label}</div>""""
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamExpertise.map((expertise, index) => (
            <motion.div"""
              key={expertise.title}""""
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"""
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}"""
            >""""
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">""""
                <span className="text-3xl">{expertise.icon}</span>
              """
              </div>"""
              """"
              <div className="text-4xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors duration-200">
                {expertise.count}
              </div>"""
              """"
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                {expertise.title}
              </h3>"""
              """"
              <p className="text-gray-400 text-sm leading-relaxed">
                {expertise.description}
              </p>
            </motion.div>) ) }
        </div>
        <motion.div """
"""
        <motion.div """"
          className="text-center mb-12"""
          initial = {}
  { opacity: 0,
  y: 20;
}}
          whileInView = {}
  { opacity: 1,
  y: 0;
}}
          viewport={{ once: true }}
          transition = {}
  { duration: 0.6,
  delay: 0.3;
}}"""
        >""""
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">""""
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work with Experts?"""
            </h3>""""
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our certified professionals are ready to bring their expertise;
              to your project and help you achieve exceptional results."""
            </p>""""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""""
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200">"""
                Schedule Consultation""""
                <Rocket className="ml-2 h-5 w-5"  />"""
              </button>""""
              <button className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-medium transition-colors duration-200">"""
                View Team Profiles""""
                <Users className="ml-2 h-5 w-5"  />              </button>
            </div>
          </div>
        </motion.div>
      </div>;
    </section>;) };
"""
export default TeamExpertiseSection;""""
            <span className="text-2xl">→</span>;
          </div>;
        </motion.div>;
      </div>;
    </section>;) }
export default TeamExpertiseSection;
export default TeamExpertiseSection;"""
'"'"""
