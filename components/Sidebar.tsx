import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Home,
  Users,
  Phone,
  FileText,
  Briefcase,
  Brain,
  Network,
  Cloud,
  Code,
  Server,
  Cpu,
  Mail,
  Calendar,
  DollarSign,
  X
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const mainNavigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Users },
    { name: "Contact", href: "/contact", icon: Phone },
    { name: "Blog", href: "/blog", icon: FileText },
    { name: "Careers", href: "/careers", icon: Briefcase }
  ];

  const services = [
    { name: "AI Services", href: "/ai-services", icon: Brain },
    { name: "IT Services", href: "/it-services", icon: Network },
    { name: "Micro SaaS", href: "/micro-saas", icon: Cloud },
    { name: "Web Development", href: "/services/web-development", icon: Code },
    { name: "Cloud Services", href: "/services/cloud-services", icon: Server },
    { name: "AI Development", href: "/services/ai-development", icon: Cpu }
  ];

  const solutions = [
    {
      name: "AI Content Creation",
      href: "/solutions/ai-content-creation",
      icon: Brain
    },
    {
      name: "Customer Support",
      href: "/solutions/customer-support",
      icon: Users
    },
    {
      name: "Email Automation",
      href: "/solutions/email-automation",
      icon: Mail
    },
    {
      name: "Event Management",
      href: "/solutions/event-management",
      icon: Calendar
    },
    {
      name: "Project Management",
      href: "/solutions/project-management",
      icon: Briefcase
    }
  ];

  const pricing = [
    { name: "Pricing Plans", href: "/pricing", icon: DollarSign },
    { name: "Request Quote", href: "/request-quote", icon: Mail }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative flex flex-col w-full max-w-sm bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <nav className="p-4 space-y-6">
            {/* Main Navigation */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                Navigation
              </h3>
              <ul className="space-y-2">
                {mainNavigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        router.pathname === item.href
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={onClose}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <button
                onClick={() => toggleSection("services")}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                <span>Services</span>
                <span className={`transform transition-transform ${expandedSections.includes("services") ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {expandedSections.includes("services") && (
                <ul className="mt-2 space-y-1 pl-6">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                        onClick={onClose}
                      >
                        <service.icon className="w-4 h-4 mr-3" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Solutions */}
            <div>
              <button
                onClick={() => toggleSection("solutions")}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                <span>Solutions</span>
                <span className={`transform transition-transform ${expandedSections.includes("solutions") ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {expandedSections.includes("solutions") && (
                <ul className="mt-2 space-y-1 pl-6">
                  {solutions.map((solution) => (
                    <li key={solution.name}>
                      <Link
                        href={solution.href}
                        className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                        onClick={onClose}
                      >
                        <solution.icon className="w-4 h-4 mr-3" />
                        {solution.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Pricing */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                Pricing
              </h3>
              <ul className="space-y-2">
                {pricing.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={onClose}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}