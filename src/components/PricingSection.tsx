import React, { useState } from "react";
  Crown, Rocket,
  Building} from "lucide-react";
 * PricingSection function;
 * @param {*} params - Function parameters;
 * @returns {*} Function return value;
 */;
      icon: Shield;
};  ];const pricingTiers = [{;
const savings = billingCycle === "annual" ? 25 : "0;
  return (;
    <section className = "py-24 bg-gradient-to-b from-zion-blue to-zion-blue-light relative overflow-hidden">;
      {/* comment */"}";
      <div className="absolute inset-0">";
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>";
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>;
      </div>;
";
  return (<section className="py-20 bg-gradient - to - br from - slate - 900 via - slate - 800 to - slate -900">;
      <div className="max - w-7xl mx - auto px-6">;
        <motion.div;
          className="text-center mb-16"          initial = {;

  { opacity: 0,
  y: 20;
}}
          whileInView = {;

  { opacity: 1,
  y: 0;
}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >";
          <h2 className="text-3xl md: text-5xl font-bold mb-6 text-white">",            Simple, {" "}";
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
              Transparent Pricing,
            </span>;
          </h2>";
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">;
            Choose the plan that best fits your business needs. All plans include our core features,
with no hidden fees or surprises.;
          </p>;
          {/* comment */}";
          <div className="{"flex" items-center justify-center gap-4 mb-8">";
            <span className="{"text-sm" ${billingCycle === "monthly" ? "text-white" : "text-zion-slate-light"}"}>;
              Monthly,
            </span>";
            <button onClick="{()" => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}";
              className=""relative" w-16 h-8 bg-zion-purple/20 rounded-full p-1 transition-colors duration-200";
            >;
              <motion.div>;
layout,";
className="{"w-6" h-6 bg-zion-cyan rounded-full shadow-lg ${;
                  billingCycle === "annual" ? "ml-8" : "ml-0>;
}"}

             />;
            </button>";
            <span className = "{"text-sm" ${billingCycle === "annual" ? "text-white" : "text-zion-slate-light"}"}>;