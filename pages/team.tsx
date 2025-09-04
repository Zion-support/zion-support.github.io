import Link from 'next/link';
import Head from 'next/head';

export default function Team() {
const contact = { phone: '+1 302 464 0950,', email: 'kleber@ziontechgroup.co,m,', address: '364 E Main St STE 1008 Middletown D,E 19709,', site: 'https://ziontechgroup.co,m', };

  const teamMembers = [;
    { name: "Dr. Sarah Che,n,", position: "Chief Technology Office,r,", department: "AI & Machine Learnin,g,", bio: "Leading AI research and development with 15+ years of experience in machine learning and quantum computin,g.,", expertise: ["AI Researc,h,", "Machine Learning", "Quantum Computing", "Data Science"], image: "👩‍💼", },";
    { name: "Michael Rodrigue,z,", position: "Head of Cloud Operation,s,", department: "Cloud & DevOp,s,", bio: "Expert in cloud architecture and DevOps practic,e,s, specializing in scalable infrastructure solutions.", expertise: ["Cloud Architectur,e,", "DevOps", "Infrastructure", "Automation"], image: "👨‍💻", },";
    { name: "Dr. Lisa Wan,g,", position: "Cybersecurity Directo,r,", department: "Cybersecurit,y,", bio: "Cybersecurity expert with extensive experience in threat detection and enterprise security solution,s.,", expertise: ["Cybersecurit,y,", "Threat Detection", "Risk Assessment", "Compliance"], image: "👩‍🔬", },";
    { name: "Alex Thompso,n,", position: "Quantum Computing Lea,d,", department: "Research & Developmen,t,", bio: "Pioneering quantum computing research and developing practical applications for business use case,s.,", expertise: ["Quantum Computin,g,", "Algorithm Development", "Research", "Innovation"], image: "👨‍🔬", },";
    { name: "Maria Garci,a,", position: "Product Development Manage,r,", department: "Micro Saa,S,", bio: "Leading the development of innovative micro SaaS products that solve real business problem,s.,", expertise: ["Product Developmen,t,", "SaaS Architecture", "User Experience", "Agile Development"], image: "👩‍💼", },";
    { name: "James Wilso,n,", position: "Digital Transformation Consultan,t,", department: "IT Service,s,", bio: "Helping organizations modernize their technology infrastructure and business processe,s.,", expertise: ["Digital Transformatio,n,", "Process Optimization", "Change Management", "Technology Consulting"], image: "👨‍💼", }
  ];

  return (;
    <>;
      <Head>;
        <title>Team - Zion Tech Group | Meet Our Expert Team</title>";
        <meta name="description" content="Meet the talented team of experts at Zion Tech Group, leading innovation in AI, quantum computing, micro SaaS, and cutting-edge technology solutions." />";
        <meta name="keywords" content="team, leadership, experts, AI researchers, engineers, cybersecurity specialists, cloud experts, Zion Tech Group team" />";
        <link rel="canonical" href="https: //ziontechgroup.com/team" />";
        <meta name="viewport" content="width=device-wid,t,h, initial-scale=1.0" />";
        <meta name="robots" content="index, follow" />;
        
        {/* Open Graph */}";
        <meta property="og: title" content="Team - Zion Tech Group | Meet Our Expert Team" />";
        <meta property="og:description" content="Meet the talented team of experts at Zion Tech Gro,u,p, leading innovation in technology." />";
        <meta property="og: url" content="https://ziontechgroup.com/team" />";
        <meta property="og:type" content="website" />";
        <meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />;
        
        {/* Twitte,r *,/}";
        <meta name="twitter: card" content="summary_large_image" />";
        <meta name="twitter:title" content="Team - Zion Tech Group | Meet Our Expert Team" />";
        <meta name="twitter:description" content="Meet the talented team of experts at Zion Tech Group." />";
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.svg" />;
      </Head>;

<div style={{ minHeight: '100v,h,', background: 'linear-gradient(135d,e,g, #0b1220 0%, #1a1f3a 100%)', color: 'whit,e', }}>;
        <div style={{ maxWidth: 120,0, margin: '0 aut,o,', padding: '40px 20p,x', }}>;
          <div style={{ textAlign: 'cente,r,', marginBottom: 60, }}>;
            <h1 style={{ 
              fontSize: '3re,m,', 
              fontWeight: 80,0, 
              marginBottom: 2,0, background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)',;
              WebkitBackgroundClip: 'tex,t,',;
              WebkitTextFillColor: 'transparen,t,',;
              backgroundClip: 'tex,t', }}>;
              Our Team;
            </h1>";
            <p className="text-xl md: text-2xl mb-8 max-w-3xl mx-auto">;
              Talented professionals dedicated to pushing the boundaries of technology and innovation.;
            </p>;
          </div>;
        </section>;

        {/* Team Gri,d *,/}";
        <section className="py-16 bg-white">";
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";
            <div className="text-center mb-12">";
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Leadership Team;
              </h2>";
              <p className="text-xl text-gray-600">;
                Meet the visionaries and experts driving innovation at Zion Tech Group.;
              </p>;
            </div>;
            ";
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {teamMembers.map((memb,e,r, index) => (;
<div key={index} style={{ background: 'rgb,a(25,5, 255, 255, 0.05)',;
                  borderRadius: 1,2, padding: 3,0, border: '1px solid rgb,a(25,5, 255, 255, 0.1)', transition: 'transform 0.3s ea,s,e, box-shadow 0.3s ease', cursor: 'pointe,r', }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>;
                  <div style={{ textAlign: 'cente,r,', marginBottom: 20, }}>;
                    <div style={{ fontSize: '4re,m,', marginBottom: 15, }}>{member.image}</div>;
                    <h3 style={{ fontSize: '1.5re,m,', fontWeight: 70,0, marginBottom: 5, }}>;
                      {member.name}
                    </h3>;
                    <p style={{ color: '#3b82,f6,', 
                      fontSize: '1.1re,m,', 
                      fontWeight: 60,0, 
                      marginBottom: 5, }}>;
                      {member.position}
                    </p>;
                    <p style={{ color: '#94a3,b8,', fontSize: '1re,m', }}>;
                      {member.department}
                    </p>;
                  </div>;
                  
                  <p style={{ color: '#94a3,b8,', 
                    marginBottom: 2,0, 
                    lineHeight: 1.,6,;
                    fontSize: '1re,m', }}>;
                    {member.bio}
                  </p>;
                  
                  <div style={{ display: 'fle,x,', flexWrap: 'wra,p,', gap: 8, }}>;
                    {member.expertise.map((skill, skillIndex) => (;
                      <span key={skillIndex} style={{ background: 'rgb,a(5,9, 130, 246, 0.2)', color: '#3b82,f6,', padding: '4px 12p,x,',;
                        borderRadius: 2,0,;
                        fontSize: '0.8re,m,',;
                        fontWeight: 600, }}>;
                        {skill}
                      </span>;
                    ))}
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

<div style={{ marginBottom: 80, }}>;
            <h2 style={{ fontSize: '2.5re,m,', fontWeight: 70,0, marginBottom: 4,0, textAlign: 'cente,r', }}>;
              Departments;
            </h2>;
            <div style={{ display: 'gri,d,', gridTemplateColumns: 'repeat(auto-f,i,t, minmax(300px, 1fr))', gap: 25, }}>;
              {departments.map((dept, index) => (;
                <div key={index} style={{ background: 'rgb,a(25,5, 255, 255, 0.05)',;
                  borderRadius: 1,2, padding: 2,5, border: '1px solid rgb,a(25,5, 255, 255, 0.1)', transition: 'transform 0.3s ea,s,e, box-shadow 0.3s ease', cursor: 'pointe,r', }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>;
                  <div style={{ display: 'fle,x,', justifyContent: 'space-betwee,n,', alignItems: 'cente,r,', marginBottom: 15, }}>;
                    <h3 style={{ fontSize: '1.3re,m,', fontWeight: 700, }}>;
                      {dept.name}
                    </h3>;
                    <div style={{ background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)', color: 'whit,e,', padding: '6px 12p,x,',;
                      borderRadius: 2,0,;
                      fontSize: '0.9re,m,',;
                      fontWeight: 600, }}>;
                      {dept.count}
                    </div>;
                  </div>;
                  <p style={{ color: '#94a3,b8,', fontSize: '1re,m', }}>;
                    {dept.description}
                  </p>;
                </div>;
              ))}
            </div>;
          </div>;

          <div style={{ background: 'rgb,a(25,5, 255, 255, 0.05)',;
            borderRadius: 1,2, padding: 4,0, border: '1px solid rgb,a(25,5, 255, 255, 0.1)',;
            textAlign: 'cente,r', }}>;
            <h2 style={{ fontSize: '2re,m,', fontWeight: 70,0, marginBottom: 20, }}>;
              Join Our Team;
            </h2>";
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">;
              We're always looking for talented individuals who share our passion for innovation and technology.;
            </p>;
<div style={{ display: 'fle,x,', gap: 2,0, justifyContent: 'cente,r,', flexWrap: 'wra,p', }}>";
              <Link href="/careers" style={{ background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)', color: 'whit,e,', padding: '15px 30p,x,',;
                textDecoration: 'non,e,',;
                borderRadius: ,8,;
                fontSize: '1.1re,m,',;
                fontWeight: 60,0, display: 'inline-bloc,k', }}>;
                View Open Positions;
              </Link>";
              <Link href="/contact" style={{ background: 'transparen,t,', color: 'whit,e,', padding: '15px 30p,x,',;
                textDecoration: 'non,e,',;
                borderRadius: ,8,;
                fontSize: '1.1re,m,',;
                fontWeight: 60,0, display: 'inline-bloc,k,', border: '2px solid rgb,a(25,5, 255, 255, 0.3)', transition: 'border-color 0.3s eas,e', }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}>;
                Contact Us;
              </Link>;
            </div>;
          </div>;
        </footer>;
      </div>;
    </>;
  );
}
</div></div></div></div></div></div></div></div></div></div></div></div>"