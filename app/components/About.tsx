"use client";
import React from "react";
import { UsersIcon, TrophyIcon, LightBulbIcon } from "@heroicons/react/24/outline";

const About: React.FC = () => {
  const stats = [
    { icon: UsersIcon, value: "500+", label: "Happy Clients" },
    { icon: TrophyIcon, value: "50+", label: "Awards Won" },
    { icon: LightBulbIcon, value: "1000+", label: "Projects Completed" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions."
    },
    {
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality standards."
    },
    {
      title: "Integrity",
      description: "We maintain transparency and honesty in all our business relationships."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Zion Tech Group
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Leading the future of AI and IT solutions
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">
                  <stat.icon className="h-12 w-12 text-blue-600" />
                </div>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;