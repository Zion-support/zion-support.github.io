
import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {SEO} from "@/components/SEO";
import {useWhitelabel} from "@/context/WhitelabelContext";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ArrowRight, Briefcase, PenTool, BarChart3, Users, Shield, Globe} from "lucide-react";
import {useAuth} from "@/hooks/useAuth";
import {Link} from "react-router-dom";
export default function ZionHireAI() {;
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel();
  const { isAuthenticated } = useAuth();
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { useWhitelabel } from "@/context/WhitelabelContext",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { ArrowRight, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from "lucide-react",
  
  return (
    <>

      <SEO
        title="Zion Hire AI - White-labeled AI Recruiting Assistant"
        description="Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience."
      />;
      <Header />;
      <main className="flex-1">;
        {/* Hero Section */}
        <section
          className="relative bg-gradient-to-br from-zion-blue to-zion-blue-dark py-16 md:py-24"
          style={primaryColor ? { backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, rgba(25, 33, 52, 1))` } : {}}>;
          <div className="container mx-auto px-4 md:px-6">;
            <div className="grid gap-6 md:grid-cols-2 items-center">;
              <div className="space-y-4">;
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">;
                  {isWhitelabel ? `${brandName} Recruiting Assistant` : "Zion Hire AI"}
                    asChild>;
                    <Link to="/enterprise/demo">;
import React from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { SEO } from '@/components / SEO';
import { use_whitelabel } from '@/context / WhitelabelContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { ArrowRight, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from './lucide-react';
import { use_auth } from '@/hooks / use_auth';
import { Link } from './react-router-dom';
export default /**
 * ZionHireAI - Function description
 */
function ZionHireAI() {
  const { is_whitelabel, brand_name, primary_color } = use_whitelabel ();
  const { is_authenticated } = use_auth ();
;
  return (
    <>;
      <SEO;
        title="Zion Hire AI - White - labeled AI Recruiting Assistant";
        description="Empower your company with AI - powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience.";
      />;
      <Header />;
      <main className="flex - 1">;
        {/* Hero Section */}
        <section;
          className="relative bg - gradient - to - br from - zion - blue to - zion - blue - dark py - 16 md:py - 24";
          style={primary_color ? { background_image: `linear - gradient (to bottom right, ${primary_color}, rgba (25, 33, 52, 1))` } : {}}
        >;
          <div className="container mx - auto px - 4 md:px - 6">;
            <div className="grid gap - 6 md:grid - cols - 2 items - center">;
              <div className="space - y-4">;
                <h1 className="text - 3xl md:text - 5xl font - bold tracking - tighter text - white">;
                  {is_whitelabel ? `${brand_name} Recruiting Assistant` : "Zion Hire AI"}
                </h1>;
                <p className="text - lg text - zion - slate - light max - w-[600px]">;
                  Empower your team with AI - driven talent acquisition. Streamline your hiring process,
                  improve candidate matches, and enhance the applicant experience.;
                </p>;
                <div className="flex flex - col sm:flex - row gap - 3 pt - 4">;
                  <Button;
                    size="lg";
                    className="bg - zion - purple hover:bg - zion - purple - light text - white";
                    as_child;
                  >;
                    <Link to={is_authenticated ? "/enterprise / admin" : "/login"}>;
                      Get Started <ArrowRight className="ml - 2 h - 4 w - 4" />;
import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { useWhitelabel } from "@/context/WhitelabelContext",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { ArrowRight, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from "lucide-react",;
import { useAuth } from "@/hooks/useAuth",;
import { Link } from "react-router-dom",;
export default function ZionHireAI() {;
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel(),;
  const { isAuthenticated } = useAuth(),;
  return (;
    <>;
      <SEO;
        title="Zion Hire AI - White-labeled AI Recruiting Assistant";
        description="Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience.";
      />;
      <Header />;
      <main className="flex-1">;
        {/* Hero Section */}
        <section;
          className="relative bg-gradient-to-br from-zion-blue to-zion-blue-dark py-16 md:py-24";
          style={primaryColor ? { backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, rgba(25, 33, 52, 1))` } : {}}
        >;
          <div className="container mx-auto px-4 md:px-6">;
            <div className="grid gap-6 md:grid-cols-2 items-center">;
              <div className="space-y-4">;
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">;
                  {isWhitelabel ? `${brandName} Recruiting Assistant` : "Zion Hire AI"}
                </h1>;
                <p className="text-lg text-zion-slate-light max-w-[600px]">;
                  Empower your team with AI-driven talent acquisition. Streamline your hiring process,;
                  improve candidate matches, and enhance the applicant experience.;
                </p>;
                <div className="flex flex-col sm:flex-row gap-3 pt-4">;
                  <Button;
                    size="lg";
                    className="bg-zion-purple hover:bg-zion-purple-light text-white";
                    asChild;
                  >;
                    <Link to={isAuthenticated ? "/enterprise/admin" : "/login"}>;
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />;
                    </Link>;
                  </Button>;
                  <Button;
                    variant="outline";
                    size="lg";
                      Request Demo;
                    </Link>;
                  </Button>;
                </div>;
              </div>;
              <div className="relative hidden md:block">;
                <div className="absolute -top-8 -left-8 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl"></div>;
            <Button
              size="lg"
              className="bg-zion-purple hover: bg-zion-purple-light text-white"
                Schedule a Demo;
              </Link>;
            </Button>;
          </div>;
        </section>;
      </main>;
      <Footer />;
}
    </>);
}
