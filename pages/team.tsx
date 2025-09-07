import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Github,
  Award,
  Users,
  Globe,
  Code,
  Shield
} from "lucide-react";
import Layout from "../components/Layout";

const teamMembers = [
  {
    id: 1,
    name: "Kleber Santos",
    position: "CEO & Founder",
    department: "Leadership",
    bio: "Visionary leader with 15+ years in technology and business transformation. Passionate about leveraging AI and cloud technologies to solve complex business challenges.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/klebersantos",
    twitter: "https://twitter.com/klebersantos",
    github: "https://github.com/klebersantos",
    expertise: [
      "Strategic Leadership",
      "AI & Machine Learning",
      "Cloud Architecture",
      "Business Transformation"
    ]
  }
];

export default function TeamPage() {
  return (
    <Layout
      title="Our Team - Zion Tech Group"
      description="Meet the talented professionals behind Zion Tech Group's innovative solutions."
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the talented professionals behind our innovative solutions.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              Team page is under construction.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}