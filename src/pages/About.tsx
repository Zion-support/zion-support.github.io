
const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      expertise: "AI & Machine Learning",
      image: "👩‍💼",
      description: "Leading our AI initiatives with 15+ years of experience in machine learning and data science."
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Engineering",
      expertise: "Cloud Architecture",
      image: "👨‍💻",
      description: "Expert in scalable cloud solutions and microservices architecture with a track record of successful enterprise deployments."
    },
    {
      name: "Emily Johnson",
      role: "Security Director",
      expertise: "Cybersecurity",
      image: "👩‍🔬",
      description: "Cybersecurity specialist ensuring our solutions meet the highest security standards and compliance requirements."
    },
    {
      name: "David Kim",
      role: "Product Manager",
      expertise: "Digital Transformation",
      image: "👨‍💼",
      description: "Driving product strategy and digital transformation initiatives for our enterprise clients."
    }
  ];

