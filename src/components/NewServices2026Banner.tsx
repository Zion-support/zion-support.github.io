import React from "react";
import { Link } from "react-router-dom";

type NewServices2026BannerProps = {
  variant?: "showcase" | "hero" | "info";
  showCount?: number;
  className?: string;
};

export default function NewServices2026Banner({
  variant = "showcase",
  showCount = 6,
  className = "",
}: NewServices2026BannerProps) {
  const services = [
    { title: "AI Autonomous Cloud Ops", link: "/services/ai-autonomous-infrastructure-platform", tag: "Cloud" },
    { title: "AI Cybersecurity Suite", link: "/services/ai-cybersecurity-suite", tag: "Security" },
    { title: "AI Multimodal Enterprise", link: "/services/ai-multimodal-enterprise", tag: "Multimodal" },
    { title: "AI FinTech Transformation", link: "/services/ai-fintech-transformation", tag: "FinTech" },
    { title: "AI Sustainability & Green Tech", link: "/services/ai-sustainability-green-tech", tag: "Sustainability" },
    { title: "AI Retail Automation", link: "/services/ai-retail-automation", tag: "Retail" },
  ].slice(0, Math.max(1, showCount));

  return (
    <section
      className={
        `w-full ${
          variant === "hero"
            ? "bg-gradient-to-r from-indigo-600 to-purple-600"
            : variant === "info"
            ? "bg-gradient-to-r from-emerald-50 to-teal-50"
            : "bg-gradient-to-r from-blue-600 to-purple-600"
        } ${variant === "info" ? "text-gray-900" : "text-white"} py-12 ${className}`
      }
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div
className={
              `inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                variant === "info" ? "bg-white text-gray-900" : "bg-white/20 text-white"
              }`
            }
          >
            NEW 2026 SERVICES
          </div>
          <h2 className={`text-3xl font-bold mb-2 ${variant === "info" ? "text-gray-900" : "text-white"}`}>
            Latest AI Services
          </h2>
          <p className={`${variant === "info" ? "text-gray-600" : "text-white/80"} max-w-3xl mx-auto`}>
            Accelerate transformation with our newest AI-powered solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s) => (
            <Link key={s.link} to={s.link} className={`rounded-xl border ${variant === "info" ? "bg-white border-gray-100" : "bg-white/10 border-white/20"} p-6 hover:scale-105 transition-all duration-300`}> 
              <div className="text-xs uppercase tracking-wider mb-2 opacity-80">{s.tag}</div>
              <div className={`text-xl font-semibold ${variant === "info" ? "text-gray-900" : "text-white"}`}>{s.title}</div>
              <div className={`${variant === "info" ? "text-gray-500" : "text-white/70"} mt-2 text-sm`}>Learn more →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

