import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Phone,
  MapPin,
  Users
} from "lucide-react";
import Layout from "../components/Layout";

export default function PrivacyPage() {
  return (
    <Layout
      title="Privacy Policy - Zion Tech Group"
      description="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information."
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we collect, use, and protect your personal information.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              Privacy Policy page is under construction.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}