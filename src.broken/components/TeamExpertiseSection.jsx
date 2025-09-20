import { motion, AnimatePresence  } from 'framer-motion';

export default function Page() {
,
    {

        id: 5,"
        name: "Lisa Patel","
        role: "Security Specialist","
        expertise: "Cybersecurity & Compliance","
        experience: "11+ years","
        avatar: "/avatars/lisa-patel.jpg","
        bio: "Cybersecurity expert with deep knowledge of security frameworks, compliance standards, and threat detection systems.","
        skills["Security Auditing", "Compliance", "Penetration Testing", "Incident Response", "Risk Assessment"],"
        achievements["40+ Security Projects", "CISSP Certified", "Security Excellence Award"],
        rating: 4.9,
        projects: 53,"
        location: "Washington, DC","
        linkedin: "https://linkedin.com/in/lisa-patel","
        github: "https://github.com/lisapatel-sec"
    },
    {

        id: 6,"
        name: "Alex Johnson","
        role: "DevOps Engineer","
        expertise: "Automation & CI/CD","
        experience: "9+ years","
        avatar: "/avatars/alex-johnson.jpg","
        bio: "DevOps specialist focused on automation, continuous integration, and deployment optimization for high-performance systems.","
        skills["Jenkins", "GitLab CI", "Terraform", "Ansible", "Monitoring"],"
        achievements["70+ DevOps Projects", "DevOps Certification", "Automation Award"],
        rating: 4.7,
        projects: 81,"
        location: "Denver, CO","
        linkedin: "https://linkedin.com/in/alex-johnson","
        github: "https://github.com/alexjohnson-devops"
    }
];
const expertiseAreas = [{
"
        name: "Artificial Intelligence","
        icon: <Brain className="w-8 h-8"/>,"
        color: "from-zion-purple to-zion-purple-dark","
        description: "Machine learning, computer vision, NLP, and AI solutions",
        experts: 12,
        projects: 150,"
        success: "98%"
    },
    {
"
        name: "Cloud Infrastructure","
        icon: <Cloud className="w-8 h-8"/>,"
        color: "from-zion-cyan to-zion-blue","
        description: "AWS, Azure, Google Cloud, and hybrid solutions",
        experts: 18,
        projects: 200,"
        success: "99%"
    },
    {
"
        name: "Web Development","
        icon: <Globe className="w-8 h-8"/>,"
        color: "from-zion-cyan-light to-zion-cyan","
        description: "Modern web applications and progressive web apps",
        experts: 25,
        projects: 300,"
        success: "97%"
    },
    {
"
        name: "Mobile Development","
        icon: <Zap className="w-8 h-8"/>,"
        color: "from-zion-purple-light to-zion-purple","
        description: "iOS, Android, and cross-platform solutions",
        experts: 20,
        projects: 180,"
        success: "96%"
    },
    {
"
        name: "Data Analytics","
        icon: <Database className="w-8 h-8"/>,"
        color: "from-zion-cyan to-zion-purple","
        description: "Business intelligence and predictive analytics",
        experts: 15,
        projects: 120,"
        success: "98%"
    },
    {
"
        name: "Cybersecurity","
        icon: <Shield className="w-8 h-8"/>,"
        color: "from-zion-purple to-zion-cyan","
        description: "Security auditing, compliance, and threat protection",
        experts: 10,
        projects: 80,"
        success: "99%"
    }
];
const stats = ["
    { icon: <Users className="w-6 h-6"/>, value: "100+", label: "Expert Team Members" },"
    { icon: <Award className="w-6 h-6"/>, value: "500+", label: "Projects Completed" },"
    { icon: <Star className="w-6 h-6"/>, value: "4.9/5", label: "Average Rating" },"
    { icon: <Globe className="w-6 h-6"/>, value: "25+", label: "Countries Served" }
];
    const [selectedMember, setSelectedMember] = useState(null);
    const [hoveredExpertise, setHoveredExpertise] = useState(null);
    const containerVariants = {

        hidden: { opacity: 0 },
        visible: {

            opacity: 1,
            transition: {

                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };
    const itemVariants = {

  hidden: { y: 30,
  opacity: 0

},
        visible: {

            y: 0,
            opacity: 1,
            transition: {

                duration: 0.6,"
                ease: "easeOut"
            }
        }
    };"
    return (<section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">
      {/* Background decorative elements */}"
      <div className="absolute inset-0 opacity-5">"
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>"
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>"
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>
"
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}"
        <motion.div className="text-center mb-20" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font - bold text-white mb-6">
            Meet Our < span className="bg-gradient - to - r from - zion - cyan to - zion - purple bg-clip - text text-transparent">Expert Team</span>
          </h2>
          <p className="text-zion - slate - light text-lg md:text-xl max - w-4xl mx - auto leading - relaxed mb-8">
            Our world - class team of technology experts brings together decades of experience
  delay: index * 0.1

}} className="text-center p - 4 rounded-xl bg-zion - blue - dark / 40 backdrop - blur - sm border border-zion - blue -light / 20">
                <div className="text-zion - cyan mb-2 flex justify -center">

          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-6">
            {expertiseAreas.map((area, index) => (<motion.div key={index} initial = {
  delay: index * 0.1

}} onHoverStart={ () => setHoveredExpertise(index) } onHoverEnd={ () => setHoveredExpertise(null) } whileHover={{ y: -4 }} className="p - 6 rounded-2xl bg-gradient - to - br from - zion - blue - dark / 80 to - zion - blue - dark / 40 backdrop - blur - sm border border-zion - blue - light / 30 hover:border-zion - cyan / 50 transition - all duration - 300 hover:shadow-lg hover:shadow-zion -cyan / 20">
                <div className={`inline - flex items - center justify - center w-16 h-16 rounded-2xl bg-gradient - to - br ${area.color} mb-4 shadow-lg`}>
                  <div className="text-white">
                    {area.icon}
                  </div>
                </div>

                <h4 className="text-xl font - bold text-white mb-3">{area.name}</h4>
                <p className="text-zion - slate - light text-sm mb-4 leading -relaxed">{area.description}</p>

                <div className="grid grid - cols - 3 gap-4 text-center">
                  <div>
                    <div className="text-zion - cyan font - bold text-lg">{area.experts}</div>
                    <div className="text-zion - slate - light text-xs">Experts</div>

          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8">
            {teamMembers.map((member, index) => (<motion.div key={member.id} variants={itemVariants} whileHover={{ y: -8 }} transition = {
  { type: "spring",
  stiffness: 300

}} className="relative">
                <div className="h-full p - 6 rounded-2xl bg-gradient - to - br from - zion - blue - dark / 80 to - zion - blue - dark / 40 backdrop - blur - sm border border-zion - blue - light / 30 hover:border-zion - cyan / 50 transition - all duration - 300 hover:shadow-2xl hover:shadow-zion - cyan / 20 group cursor -pointer" onClick={ () => setSelectedMember(selectedMember === member.id ? null : member.id) }>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="inline - flex items - center justify - center w-20 h-20 rounded-2xl bg-gradient - to - br from - zion - cyan to - zion - purple mb-4 shadow-lg group - hover:shadow-xl transition - all duration -300">
                      <span className="text-white font - bold text-2xl">
                        {member.name.charAt(0) }
                      </span>
                    </div>

                    <h4 className="text-xl font - bold text-white mb-2 group - hover:text-zion - cyan transition -colors">
}} transition={{ duration: 0.3 }}>
                        <p className="text-zion - slate - light text-sm mb-4 leading -relaxed">{member.bio}</p>

                        <h5 className="text-zion - cyan font - semibold text-sm mb-2">Achievements:</h5>
                        <div className="space - y-1 mb-4">
                          {member.achievements.map((achievement, idx) => (<motion.div key={idx} className="flex items - center gap-2 text-zion - slate - light / 80 text-xs" initial = {
