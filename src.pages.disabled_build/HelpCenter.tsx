import React, { useState } from "react";
import { motion } from "framer-motion";import { 
  Search,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  Video,
  Users,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronRight
} from "lucide-react";
export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");