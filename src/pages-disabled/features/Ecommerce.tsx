import React from "react";
import Header from "@/components/Header";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Ecommerce() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <Header />
      <SEO title="E-commerce" description="E-commerce solutions" />
      <div className="container mx-auto px-4 py-12">
        <GradientHeading>E-commerce Solutions</GradientHeading>
        <p className="text-zion-cyan text-center mt-4">
          E-commerce features coming soon...
        </p>
      </div>
    </div>
  );
}