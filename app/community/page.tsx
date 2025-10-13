export default function Community() {
  const stats = [
    { number: "10K+", label: "Active Members", icon: <Users className="w-8 h-8" /> },
    { number: "500+", label: "Events Hosted", icon: <Calendar className="w-8 h-8" /> },
    { number: "50+", label: "Countries", icon: <Globe className="w-8 h-8" /> },
    { number: "24/7", label: "Support", icon: <MessageCircle className="w-8 h-8" /> }
  ];

  const events = [
    {
      title: "AI Innovation Summit 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual Event",
      description: "Join industry leaders as we explore the latest trends in artificial intelligence and machine learning.",
      attendees: 500;
    },
    {
      title: "Tech Talk: Cloud Security Best Practices",
      date: "March 22, 2024",
      time: "2:00 PM - 3:00 PM",
      location: "Online Webinar",
      description: "Learn about the latest cloud security strategies and how to protect your digital assets.",
      attendees: 150;
    },
    {
      title: "Developer Workshop: React & TypeScript",
      date: "March 29, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Zion Tech Office",
      description: "Hands-on workshop covering advanced React patterns and TypeScript best practices.",
      attendees: 25;
    }
  ];

  const initiatives = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tech Mentorship Program",
      description: "Connect with experienced professionals and get guidance on your career journey.",
      participants: "200+ mentees"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Developer Forums",
      description: "Join our active community forums to discuss technology trends and share knowledge.",
      participants: "1,500+ members"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation Challenges",
      description: "Participate in hackathons and coding challenges to showcase your skills.",
      participants: "500+ participants"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Open Source Projects",
      description: "Contribute to our open source initiatives and make a global impact.",
      participants: "100+ contributors"
    }
  ];
}