import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Users, Award, Globe, Linkedin, Mail, Github, Twitter } from 'lucide-react';
import Link from 'next/link';

const TeamPage: NextPage = () => {
  const teamMembers = [;
    {
      name: 'Kleber Silva',;
      role: 'Founder & CEO',;
      bio: 'Technology visionary with over 15 years of experience in software development and business transformation. Passionate about helping businesses leverage technology for growth.',;
      image: '/team/kleber.jpg',;
      linkedin: 'https://linkedin.com/in/klebersilva',;
      email: 'kleber@ziontechgroup.com',;
      expertise: ['Strategic Leadership', 'Technology Innovation', 'Business Development']},;
    {
      name: 'Sarah Johnson',;
      role: 'Chief Technology Officer',;
      bio: 'Expert in cloud architecture and AI/ML solutions with a passion for scalable, innovative technology. Leads our technical strategy and innovation initiatives.',;
      image: '/team/sarah.jpg',;
      linkedin: 'https://linkedin.com/in/sarahjohnson',;
      email: 'sarah@ziontechgroup.com',;
      expertise: ['Cloud Architecture', 'AI/ML', 'System Design']},;
    {
      name: 'Michael Chen',;
      role: 'Head of Security',;
      bio: 'Cybersecurity expert with extensive experience in enterprise security, compliance, and threat management. Ensures our clients\' data and systems remain secure.',;
      image: '/team/michael.jpg',;
      linkedin: 'https://linkedin.com/in/michaelchen',;
      email: 'michael@ziontechgroup.com',;
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management']},;
    {
      name: 'Emily Rodriguez',;
      role: 'Lead Developer',;
      bio: 'Full-stack developer with expertise in modern web technologies and microservices architecture. Passionate about building scalable, maintainable solutions.',;
      image: '/team/emily.jpg',;
      linkedin: 'https://linkedin.com/in/emilyrodriguez',;
      email: 'emily@ziontechgroup.com',;
      expertise: ['Full-Stack Development', 'Microservices', 'DevOps']},;
    {
      name: 'David Kim',;
      role: 'Data Science Lead',;
      bio: 'Data scientist and machine learning engineer with expertise in predictive analytics and business intelligence. Helps clients unlock insights from their data.',;
      image: '/team/david.jpg',;
      linkedin: 'https://linkedin.com/in/davidkim',;
      email: 'david@ziontechgroup.com',;
      expertise: ['Data Science', 'Machine Learning', 'Analytics']},;
    {
      name: 'Lisa Wang',;
      role: 'UX/UI Designer',;
      bio: 'Creative designer focused on user experience and interface design. Ensures our solutions are not only functional but also intuitive and engaging.',;
      image: '/team/lisa.jpg',;
      linkedin: 'https://linkedin.com/in/lisawang',;
      email: 'lisa@ziontechgroup.com',;
      expertise: ['UX Design', 'UI Design', 'User Research']}
  ];

  const values = [;
    {
      title: 'Innovation',;
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.',;
      icon: <Award className="w-8 h-8" />},;
    {
      title: 'Collaboration',;
      description: 'We work closely with our clients as partners in their success.',;
      icon: <Users className="w-8 h-8" />},;
    {
      title: 'Excellence',;
      description: 'We maintain the highest standards of quality in everything we do.',;
      icon: <Globe className="w-8 h-8" />}
  ];

  return (;
    <MainLayout>;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4 text-center">;
          <h1 className="text-5xl md:text-6xl font-bold mb-6">;
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>;
          </h1>;
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">;
            The passionate experts behind Zion Tech Group's success;
          </p>;
        </div>;
      </section>;

      {/* Team Members */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Experienced professionals dedicated to delivering exceptional technology solutions;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {teamMembers.map((member, index) => (;
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">;
                <div className="text-center mb-6">;
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">;
                    <Users className="w-16 h-16 text-gray-400" />;
                  </div>;
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>;
                  <p className="text-zion-cyan font-medium mb-4">{member.role}</p>;
                  <p className="text-gray-600 text-sm mb-6">{member.bio}</p>;
                </div>;

                <div className="mb-6">;
                  <h4 className="font-semibold mb-3">Expertise</h4>;
                  <div className="flex flex-wrap gap-2">;
                    {member.expertise.map((skill, skillIndex) => (;
                      <span key={skillIndex} className="bg-zion-cyan/10 text-zion-cyan px-3 py-1 rounded-full text-sm">;
                        {skill}
                      </span>;
                    ))}
                  </div>;
                </div>;

                <div className="flex justify-center gap-4">;
                  <Link href={member.linkedin} className="text-blue-500 hover:text-blue-600 transition-colors">;
                    <Linkedin className="w-5 h-5" />;
                  </Link>;
                  <Link href={`mailto:${member.email}`} className="text-gray-500 hover:text-gray-600 transition-colors">;
                    <Mail className="w-5 h-5" />;
                  </Link>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Our Values */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              The principles that guide everything we do;
            </p>;
          </div>;

          <div className="grid md:grid-cols-3 gap-8">;
            {values.map((value, index) => (;
              <div key={index} className="text-center p-8 bg-white rounded-lg shadow-lg">;
                <div className="text-zion-cyan mb-6 flex justify-center">;
                  {value.icon}
                </div>;
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>;
                <p className="text-gray-600">{value.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-blue-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>;
          <p className="text-xl mb-8 max-w-3xl mx-auto">;
            We're always looking for talented individuals who share our passion for technology and innovation;
          </p>;
          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <Link href="/careers" className="bg-white text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
              View Open Positions;
            </Link>;
            <Link href="/contact" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">;
              Contact Us;
            </Link>;
          </div>;
        </div>;
      </section>;
    </MainLayout>;
  )}
export default TeamPage;