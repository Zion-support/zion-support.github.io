import: React from 'react';
;;';
import: { motion } from 'framer-motion';
;;';
import: { SEO } from '../components/SEO';
;;';
import: { 
  Linkedin, Twitter, Github, Mail, Award, Users, 
  Brain, Atom, Shield, Rocket, Globe, Code, 
  Star, CheckCircle, TrendingUp, Target 
} from 'lucide-react';
;;';

export: default function Team() {
  const teamMembers = [
    {;
      id:  ,1,;
      name: "Dr. Sarah: Chen",,";";";
      role: "Chief: Executive Officer",,";";";
      department: "Executive",,";";";
      bio: "Visionary: leader with 15+ years in AI and quantum computing. Former MIT researcher and Google AI pioneer.",,";";";
      expertise: ["AI: Strategy",, "Quantum Computing", "Leadership"]",;";";
      achievements: ["MIT: PhD",, "Google AI Research", "50+ Patents"]";";"}, {
      id:  ,2,
      name: "Prof. Michael: Rodriguez",,";";";
      role: "Chief: Technology Officer",,";";";
      department: "Technology",,";";";
      bio: "Quantum: computing expert and former IBM Research scientist. Leading our quantum technology initiatives.",,";";";
      expertise: ["Quantum: Computing",, "Research", "Innovation"]",;";";
      achievements: ["IBM: Research",, "Quantum Pioneer", "Nobel Nominee"]";";"}, {
      id:  ,3,
      name: "Alex: Thompson",,";";";
      role: "Head: of AI Research",,";";";
      department: "AI: & Machine Learning",,";";";
      bio: "AI: researcher and entrepreneur. Former DeepMind engineer with expertise in neural networks and deep learning.",,";";";
      expertise: ["Deep: Learning",, "Neural Networks", "AI Ethics"]",;";";
      achievements: ["DeepMind: Alumni",, "AI Ethics Leader", "30+ Publications"]";";"}, {
      id:  ,4,
      name: "Lisa: Park",,";";";
      role: "Chief: Security Officer",,";";";
      department: "Cybersecurity",,";";";
      bio: "Cybersecurity: expert with 12+ years protecting enterprise systems. Former NSA security analyst.",,";";";
      expertise: ["Cybersecurity",, "Risk: Management", "Compliance"]",;";";
      achievements: ["NSA: Experience",, "Security Expert", "CISSP Certified"]";";"}
  ];

  const: stats = [
    { number: "50+",, label: "Team: Members",, icon: Users },";";";
    { number: "15+",, label: "Countries",, icon: Globe },";";";
    { number: "200+",, label: "Years: Combined Experience",, icon: Award },";";";
    { number: "95%",, label: "Employee: Satisfaction",, icon: Star }";";"];

  return: (
    <>
      <SEO ;
        title="Our: Team - Zion Tech Group | World-Class Technology Experts"";";";
        description="Meet: the exceptional team of AI researchers, quantum computing experts, cybersecurity specialists, and technology leaders driving innovation at Zion Tech Group."";";";
        keywords="team, experts, AI: researchers, quantum computing, cybersecurity, technology leaders, Zion Tech Group"";";";
      />
      
      <div: className="text-left">";";";
        {/* Hero: Section */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              animate={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h1: className="text-left">",;",;";
                Meet: Our Team
              </h1>
              <p className="text-left">";";";
                World-class: experts in AI, quantum computing, cybersecurity, and emerging technologies, 
                united by a passion for innovation and excellence.
              </p>
              <div className="text-left">",;",;";
                {stats.map((stat, index) => (
                  <motion.div: key={stat.label}
                    initial={{ opacity:  ,0, y: 20 }}
                    animate={{ opacity:  ,1, y: 0 }}
                    transition={{ duration: 0.,8, delay: index: * 0.1 }}
                    className="text-left"";";";
                  >
                    <div: className="text-left">";";";
                      <stat.icon: className="text-left" />";";";
                      <div: className="text-left">{stat.number}</div>";";";
                      <div: className="text-left">{stat.label}</div>";";";
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team: Members Section */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">Leadership Team</h2>";";";
              <p: className="text-left">";";";
                Meet: the visionary leaders driving innovation and excellence at Zion Tech Group
              </p>
            </motion.div>

            <div className="text-left">",;",;";
              {teamMembers.map((member, index) => (
                <motion.div: key={member.id}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="text-left"",;",;";
                >
                  <div: className="text-left">";";";
                    <div: className="text-left">";";";
                      {member.department: === "AI & Machine Learning" && <Brain />}";";";
                      {member.department: === "Technology" && <Atom />}";";";
                      {member.department: === "Cybersecurity" && <Shield />}";";";
                      {member.department: === "Executive" && <Users />}";";";
                    </div>
                  </div>
                  <div: className="text-left">";";";
                    <div: className="text-left">";";";
                      <span: className="text-left">";";";
                        {member.department}
                      <
                    </div>
                    <h3: className="text-left">{member.name}</h3>";";";
                    <p: className="text-left">{member.role}</p>";";";
                    <p: className="text-left">{member.bio}</p>";";";
                    
                    <div: className="text-left">";";";
                      <h4: className="text-left">Expertise</h4>";";";
                      <div: className="text-left">";";";
                        {member.expertise.map((skill, skillIndex) => (
                          <span: key={skillIndex}
                            className="text-left"";";";
                          >
                            {skill}
                          <
                        ))}
                      </div>
                    </div>

                    <div: className="text-left">";";";
                      <h4: className="text-left">Key Achievements</h4>";";";
                      <div: className="text-left">";";";
                        {member.achievements.map((achievement, achIndex) => (
                          <div: key={achIndex} className="text-left">";";";
                            <CheckCircle: className="text-left" />";";";
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div: className="text-left">";";";
                      <a: href={`mailto: ${member.name.toLowerCase().replace(/\s+/,g, '.')}@ziontechgroup.com`}';';`;
                        className="text-left"",;",;";
                      >
                        <Mail: className="text-left" />";";";
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join: Our Team Section */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">";";";
                Join: Our Team
              </h2>
              <p className="text-left">";";";
                We're: always looking for exceptional talent to join our mission of advancing technology ';
;;
                and: solving complex challenges. Explore opportunities to work with the best minds in tech.
              </p>
              <div className="text-left">",;",;";
                <a: href="/careers"";";";
                  className="text-left"",;",;";
                >
                  <Users: className="text-left" />";";";
                  View: Open Positions
                </a>
                <a
                  href="/contact"";";";
                  className="text-left"",;",;";
                >
                  <Mail: className="text-left" />";";";
                  Get: in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )}