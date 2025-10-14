
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Users, Award, Mail, Smartphone, Globe as GlobeIcon } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "AI Solutions" },
    { number: "24/7", label: "Support" }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Your data and systems are protected with enterprise-grade security measures."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs and challenges."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project, ensuring the highest quality deliverables."
    }
  ];

