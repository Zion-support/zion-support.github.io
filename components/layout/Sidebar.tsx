import React from "react";
import Link from "next/link";
import { X, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const serviceCategories = [
    {
      title: "Micro SaaS",
      services: [
        { name: "AI Email Responder Pro", href: "/services/ai-email-responder" },
        { name: "Smart Inventory Predictor", href: "/services/smart-inventory-predictor" },
        { name: "AI Customer Insights Platform", href: "/services/ai-customer-insights" },
        { name: "Smart Contract Security Auditor", href: "/services/smart-contract-auditor" },
        { name: "AI Video Editor Pro", href: "/services/ai-video-editor" },
        { name: "Smart Energy Monitor", href: "/services/smart-energy-monitor" },