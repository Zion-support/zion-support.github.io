import: React { useState, useEffect } from;
  'react' import: { motion, AnimatePresence } from;';
  'framer-motion' import: {  Quote, Star, ChevronLeft, ChevronRight, Building, User, Globe, TrendingUp } from;';
  'lucide-react' import: { ModernCard } from;';
  './ui/ModernCard'  interface: Testimonial {';
   id: number;
   name: string;
   position: string;
   company: string;
   companyLogo?: string;
   content: string;

  all', name: 'All Industries, icon: Globe }' { id: 'placeholder',
  Technology', name: 'Technology, icon: TrendingUp }' { id: 'placeholder',
  Manufacturing', name: 'Manufacturing, icon: Building }' { id: 'placeholder',
  Healthcare', name: 'Healthcare, icon: User }' { id: 'placeholder',
  Financial Services', name: 'Financial Services, icon: TrendingUp }' { id: 'placeholder',
  Retail', name: 'Retail, icon: Building } ]  export const ModernTestimonials: React.FC = () => { const [currentTestimonial, setCurrentTestimonial] = useState(0) const [selectedIndustry', setSelectedIndustry] = useState('
  'all') const [isAutoPlaying, setIsAutoPlaying] = useState(true)  const filteredTestimonials = selectedIndustry ===;



