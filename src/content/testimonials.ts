export type Testimonial = {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  industry: string;
  avatar?: string;
  projectType: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "sarah-johnson-finance",
    name: "Sarah Johnson",
    title: "CTO",
    company: "FinTech Solutions Inc.",
    content: "Zion Tech Group transformed our financial analytics completely. The AI platform they built reduced our analysis time from 40 hours to just 2 hours per week. The accuracy improvements and cost savings have been phenomenal. Their team's expertise in machine learning and financial services is unmatched.",
    rating: 5,
    industry: "Financial Services",
    projectType: "AI Analytics Platform",
    avatar: "/images/testimonials/sarah-johnson.jpg"
  },
  {
    id: "michael-chen-healthcare",
    name: "Dr. Michael Chen",
    title: "Chief Medical Officer",
    company: "MedCare Hospital Network",
    content: "The healthcare chatbot system has revolutionized our patient communication. Response times went from 30 minutes to 2 minutes, and patient satisfaction improved dramatically. The seamless integration with our existing systems was flawless. Highly recommend their healthcare AI expertise.",
    rating: 5,
    industry: "Healthcare",
    projectType: "AI Chatbot System",
    avatar: "/images/testimonials/michael-chen.jpg"
  },
  {
    id: "emma-rodriguez-ecommerce",
    name: "Emma Rodriguez",
    title: "VP of Digital Strategy",
    company: "RetailMax Online",
    content: "Our e-commerce conversion rates doubled after implementing their AI optimization suite. The personalized recommendations and dynamic pricing features have been game-changers. The ROI has exceeded our expectations by 300%. Zion Tech Group truly understands modern e-commerce challenges.",
    rating: 5,
    industry: "E-commerce",
    projectType: "E-commerce AI Platform",
    avatar: "/images/testimonials/emma-rodriguez.jpg"
  },
  {
    id: "james-wilson-manufacturing",
    name: "James Wilson",
    title: "Operations Director",
    company: "Precision Manufacturing Co.",
    content: "The IoT platform has transformed our manufacturing operations. We've reduced unplanned downtime by 65% and saved over $2 million annually in maintenance costs. The predictive maintenance capabilities are incredibly accurate. Their industrial IoT expertise is outstanding.",
    rating: 5,
    industry: "Manufacturing",
    projectType: "Smart Manufacturing IoT",
    avatar: "/images/testimonials/james-wilson.jpg"
  },
  {
    id: "lisa-patel-saas",
    name: "Lisa Patel",
    title: "Head of Product",
    company: "CloudTech Solutions",
    content: "The analytics dashboard they built has been instrumental in reducing our churn rate from 15% to 8%. The insights we now have into user behavior have completely changed how we make product decisions. The team's understanding of SaaS metrics and user psychology is impressive.",
    rating: 5,
    industry: "SaaS",
    projectType: "SaaS Analytics Platform",
    avatar: "/images/testimonials/lisa-patel.jpg"
  },
  {
    id: "robert-kim-security",
    name: "Robert Kim",
    title: "CISO",
    company: "SecureCorp Financial",
    content: "Our automated cybersecurity platform has been a game-changer. Threat detection time went from 6 hours to 15 minutes, and we've achieved 98% accuracy in threat detection. The compliance monitoring features have ensured we pass every audit. Their security expertise is top-tier.",
    rating: 5,
    industry: "Financial Services",
    projectType: "Cybersecurity Platform",
    avatar: "/images/testimonials/robert-kim.jpg"
  },
  {
    id: "maria-garcia-education",
    name: "Dr. Maria Garcia",
    title: "Dean of Technology",
    company: "TechUniversity",
    content: "The educational AI platform they developed has transformed our online learning experience. Student engagement increased by 60% and course completion rates improved significantly. The adaptive learning features are remarkable. Zion Tech Group's education technology expertise is exceptional.",
    rating: 5,
    industry: "Education",
    projectType: "EdTech AI Platform",
    avatar: "/images/testimonials/maria-garcia.jpg"
  },
  {
    id: "david-thompson-logistics",
    name: "David Thompson",
    title: "Supply Chain Director",
    company: "Global Logistics Corp",
    content: "The supply chain optimization AI they built has improved our delivery efficiency by 40% and reduced costs by $1.5M annually. The predictive analytics for demand forecasting are incredibly accurate. Their logistics technology expertise has been invaluable.",
    rating: 5,
    industry: "Logistics",
    projectType: "Supply Chain AI",
    avatar: "/images/testimonials/david-thompson.jpg"
  },
  {
    id: "jennifer-lee-real-estate",
    name: "Jennifer Lee",
    title: "VP of Technology",
    company: "Premier Real Estate Group",
    content: "The property valuation AI system has revolutionized our business. We can now process valuations 10x faster with 95% accuracy. The market trend analysis features have given us a significant competitive advantage. Highly recommend their real estate technology solutions.",
    rating: 5,
    industry: "Real Estate",
    projectType: "Property Valuation AI",
    avatar: "/images/testimonials/jennifer-lee.jpg"
  },
  {
    id: "alex-kumar-energy",
    name: "Alex Kumar",
    title: "Chief Innovation Officer",
    company: "GreenEnergy Solutions",
    content: "The smart grid optimization platform they developed has improved our energy efficiency by 30% and reduced operational costs by $800K annually. The predictive maintenance for our renewable energy assets has been incredibly effective. Zion Tech Group's energy sector expertise is outstanding.",
    rating: 5,
    industry: "Energy",
    projectType: "Smart Grid Platform",
    avatar: "/images/testimonials/alex-kumar.jpg"
  }
];