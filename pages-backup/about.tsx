import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Users, Award, Target, CheckCircle, ArrowRight, Globe, Heart, Zap } from "lucide-react";
const Layout = dynamic(() => import("../components/Layout"), { ssr: false });
const About: NextPage = () => {
  return (;
    <Layout title="About Us - Zion Tech Group";
      description="Learn about Zion Tech Group, a leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.">;
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">;
        {/* comment */}

        <section className="py-20 px-4">;
          <div className="max-w-6xl mx-auto text-center">;
            <h1 className="text-5xl font-bold text-gray-900 mb-6">;
              About Zion Tech Group;
            </h1>;
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">;
              We are a leading technology solutions provider dedicated to transforming businesses,
through innovative AI, cloud architecture, and cutting-edge development services.;
            </p>;
            <div className="flex justify-center">;
              <Link href="/contact";
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">;
                Get in Touch;
                <ArrowRight className="w-5 h-5 ml-2"  />;
              </Link>;
            </div>;
        </section>;
        {/* comment */}

        <section className="py-16 px-4 bg-white">;
          <div className="max-w-6xl mx-auto">;
            <div className="grid md:grid-cols-2 gap-12">;
              <div className="text-center">;
                <Target className="w-16 h-16 text-blue-600 mx-auto mb-6"  />;
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>;
                <p className="text-gray-600">;
                  To empower businesses with cutting-edge technology solutions that drive growth,
                  efficiency, and innovation in the digital age.;
                </p>;
              </div>;
              <div className="text-center">;
                <Globe className="w-16 h-16 text-green-600 mx-auto mb-6"  />;
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>;
                <p className="text-gray-600">;
                  To be the global leader in technology transformation, creating a world where,
every business can thrive through intelligent automation and innovation.;
                </p>;
              </div>;
        </section>;