
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import React from \'react\'; import { Link } from \'react-router-dom\'; import { motion } from \'framer-motion\'; import {} from \'lucide-react\'
const React from "react"; import { Link } from "react-router-dom"; import { motion } from "framer-motion"; import {} from "lucide-react"; export default function Home() { return; }; return null},; {},; {},; {} ]; <HeroSection /> <QuickAccess /> <FeatureCTAs /> <FeatureHighlights /> <CategoriesSection /> <BenefitsSection /> <HowItWorksSection /> <FeaturedListingsSection /> <ServicesShowcase /> <NewsletterSection /> <ITServiceRequestHero /> <FloatingCTA />