import React from 'react';
<<<<<<< HEAD
import MainLayout from '../src/components/layout/MainLayout';
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Calendar,
  FileText,
  Video,
  Globe,
  Shield,
  Zap
} from 'lucide-react';
import Layout from '../components/Layout';

const benefits = [
  {
    title: 'Exclusive Content',
    description: 'Get access to exclusive white papers, case studies, and industry insights.',
    icon: FileText
  },
  {
    title: 'Webinar Invitations',
    description: 'Receive invitations to our expert-led webinars and virtual events',
    icon: Video
  }
];
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68

export default function NewsletterPage() {
  return (
    <MainLayout title="Newsletter - Zion Tech Group">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Newsletter</h1>
        <p className="text-lg text-gray-700">
          This is a placeholder for the newsletter page.
        </p>
      </div>
    </MainLayout>
  );
}