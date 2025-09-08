import React from "react";
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Equipment",
    description: "Professional-grade hardware and software solutions",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Innovation",
    description: "Cutting-edge AI and emerging technology solutions",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/innovation",
    color: "from-orange-500 to-red-600",
  },
];

export const CategoriesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-zion-slate-dark to-zion-slate-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GradientHeading
            text="Explore Our Solutions"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              to={category.link}
              className="group block"
            >
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-blue-light/20 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={cn(
                  "w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300",
                  category.color
                )}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {category.title}
                </h3>
                <p className="text-zion-slate-light group-hover:text-zion-slate-light/80 transition-colors">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};