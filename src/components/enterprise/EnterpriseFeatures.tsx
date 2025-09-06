<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import { Users, Shield, Briefcase, Award, Settings, Globe } from 'lucide-react';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

import React from "react";
import { Users, Shield, Briefcase, Award, Settings, Globe } from 'lucide-react'

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import React from 'react'
import { Users, Shield, Briefcase, Award, Settings, Globe } from 'lucide-react'
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const features = [
  {
    title: 'Private Hiring Portal'
    description:
      'Create a secure, private hiring portal accessible only to your team members.'
    icon: Shield
  }
  {
    title: 'Dedicated Talent Pool'
    description:
      'Access to a curated pool of pre-vetted talent matched to your industry and needs.'
    icon: Users
  }
  {
    title: 'Custom SLA'
    description:
      'Get guaranteed response times and dedicated support with our custom SLAs.'
    icon: Award
  }
  {
    title: 'Branded Onboarding'
    description:
      'Customize the onboarding experience with your company branding and messaging.'
    icon: Briefcase
  }
  {
    title: 'Admin Dashboards'
    description:
      'Powerful analytics and management tools for team leaders and administrators.'
    icon: Settings
  }
  {
    title: 'Global Access'
    description:
<<<<<<< HEAD
      'Connect with talent across multiple regions with localized interfaces.'
    icon: Globe
  }
]
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
      'Connect with talent across multiple regions with localized interfaces.',
    icon: Globe,
  },
];
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export function EnterpriseFeatures() {
  return (
    <section id='features' className='py-20 px-4 md:px-6 bg-muted/50'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Built for Enterprise Needs
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Our enterprise solutions offer powerful tools designed for large
            teams and complex hiring needs
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map(feature => (
            <div
              key={feature.title}
              className='bg-card rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md'            >
              <div className='h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5'>
                <feature.icon className='h-6 w-6 text-primary' />
              </div>
              <h3 className='font-bold text-xl mb-3'>{feature.title}</h3>
<<<<<<< HEAD
              <p className='text-muted-foreground'>{feature.description}</p>            </div>
<<<<<<< HEAD
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
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
=======
              <p className='text-muted-foreground'>{feature.description}</p>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            </div>
<<<<<<< HEAD
          ))}
        </div>
      </div>
    </section>
<<<<<<< HEAD
  )
}
=======
<<<<<<< HEAD
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

            </div>

import React from "react",
import { Users, Shield, Briefcase, Award, Settings, Globe } from 'lucide-react'

const features = [
  {
    title: "Private Hiring Portal",
    description: "Create a secure, private hiring portal accessible only to your team members.",
    icon: Shield},
  {
    title: "Dedicated Talent Pool",
    description: "Access to a curated pool of pre-vetted talent matched to your industry and needs.",
    icon: Users},
  {
    title: "Custom SLA",
    description: "Get guaranteed response times and dedicated support with our custom SLAs.",
    icon: Award},
  {
    title: "Branded Onboarding",
    description: "Customize the onboarding experience with your company branding and messaging.",
    icon: Briefcase},
  {
    title: "Admin Dashboards",
    description: "Powerful analytics and management tools for team leaders and administrators.",
    icon: Settings},
  {
    title: "Global Access",
    description: "Connect with talent across multiple regions with localized interfaces.",
    icon: Globe}],

export function EnterpriseFeatures() {
  return (
    <section id="features" className="py-20 px-4 md:px-6 bg-muted/50">
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
import React from "react",;
import { Users, Shield, Briefcase, Award, Settings, Globe } from 'lucide-react';
const features = [;
  {;
    title: "Private Hiring Portal",;
    description: "Create a secure, private hiring portal accessible only to your team members.",;
    icon: Shield},;
  {;
    title: "Dedicated Talent Pool",;
    description: "Access to a curated pool of pre-vetted talent matched to your industry and needs.",;
    icon: Users},;
  {;
    title: "Custom SLA",;
    description: "Get guaranteed response times and dedicated support with our custom SLAs.",;
    icon: Award},;
  {;
    title: "Branded Onboarding",;
    description: "Customize the onboarding experience with your company branding and messaging.",;
    icon: Briefcase},;
  {;
    title: "Admin Dashboards",;
    description: "Powerful analytics and management tools for team leaders and administrators.",;
    icon: Settings},;
  {;
    title: "Global Access",;
    description: "Connect with talent across multiple regions with localized interfaces.",;
    icon: Globe}];
export function EnterpriseFeatures() {;
  return (;
    <section id="features" className="py-20 px-4 md:px-6 bg-muted/50">;
      <div className="container mx-auto max-w-6xl">;
        <div className="text-center mb-16">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">;
            Built for Enterprise Needs;
          </h2>;
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">;
            Our enterprise solutions offer powerful tools designed for large teams and complex hiring needs;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {features.map((feature) => (;
            <div;
              key={feature.title}
              className="bg-card rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md";
            >;
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">;
                <feature.icon className="h-6 w-6 text-primary" />;
              </div>;
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>;
              <p className="text-muted-foreground">{feature.description}</p>;
            </div>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
          ))}
        </div>
      </div>;
    </section>;
  );
<<<<<<< HEAD
};
}
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
