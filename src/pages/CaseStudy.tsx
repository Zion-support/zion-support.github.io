import React from 'react';
import { SEO } from '@/components/SEO';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from 'next/link';

export default function CaseStudy() {
  return (
    <>
      <SEO
        title="Case Studies | Zion AI"
        description="Explore real-world case studies and success stories from our AI solutions."
      />
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-gray-300 mb-8">Real-world success stories with our AI solutions.</p>
          <Link href="/">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}