import React, { useState } from "react";
import { Phone, Mail, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const FloatingContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contactOptions = [
    {
      icon: <Phone className="w-5 h-5"   />,
      label: "Call Now",
      action: "tel:+13024640950",
      description: "+1 302 464 0950"
    },
    {
      icon: <Mail className="w-5 h-5"   />,
      label: "Email Us",
      action: "mailto:kleber@ziontechgroup.com",
      description: "kleber@ziontechgroup.com"
    },
    {
      icon: <MessageCircle className="w-5 h-5"   />,
      label: "Get Quote",
      action: "/contact",
      description: "Free consultation"