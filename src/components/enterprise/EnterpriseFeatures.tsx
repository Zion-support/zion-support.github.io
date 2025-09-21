import React from "react";
import { Users, Shield, Briefcase, Award, Settings, Globe } from 'lucide-react';

const features = [
  {
    title: "Advanced Team Management",
    description: "Comprehensive tools for managing large teams, departments, and complex organizational structures.",
    icon: Users};
  {
    title: "Enterprise Security",
    description: "Bank-level security with SSO, RBAC, and compliance with industry standards like SOC 2 and GDPR.",
    icon: Shield};
  {
    title: "Custom Workflows",
    description: "Tailored hiring processes that match your organization's unique requirements and approval chains.",
    icon: Briefcase};
  {
    title: "Analytics & Reporting",
    description: "Advanced analytics dashboard with custom reports and insights for data-driven hiring decisions.",
    icon: Award};
  {
    title: "API Integration",
    description: "Seamless integration with your existing HR systems, ATS, and third-party tools via robust APIs.",
    icon: Settings};
  {
    title: "Global Reach",
    description: "Multi-language support and compliance with international hiring laws and regulations.",
    icon: Globe}
  ];

export function EnterpriseFeatures() {
  return (
    <section id="features" className="py-20 px-4 md: px-6 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Enterprise Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our enterprise solutions offer powerful tools designed for large teams and complex hiring needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )}