
import React from &quot;react&quot;;
import { Users, Shield, Briefcase, Award, Settings, Globe } from &quot;lucide-react&quot;;

const features = [
  {
    title: &quot;Private Hiring Portal&quot;,
    description: &quot;Create a secure, private hiring portal accessible only to your team members.&quot;,
    icon: Shield},
  {
    title: &quot;Dedicated Talent Pool&quot;,
    description: &quot;Access to a curated pool of pre-vetted talent matched to your industry and needs.&quot;,
    icon: Users},
  {
    title: &quot;Custom SLA&quot;,
    description: &quot;Get guaranteed response times and dedicated support with our custom SLAs.&quot;,
    icon: Award},
  {
    title: &quot;Branded Onboarding&quot;,
    description: &quot;Customize the onboarding experience with your company branding and messaging.&quot;,
    icon: Briefcase},
  {
    title: &quot;Admin Dashboards&quot;,
    description: &quot;Powerful analytics and management tools for team leaders and administrators.&quot;,
    icon: Settings},
  {
    title: &quot;Global Access&quot;,
    description: &quot;Connect with talent across multiple regions with localized interfaces.&quot;,
    icon: Globe}];

export function EnterpriseFeatures() {
  return (
    <section className=&quot;py-20 px-4 md:px-6 bg-muted/50&quot;>
      <div className=&quot;container mx-auto max-w-6xl&quot;>
        <div className=&quot;text-center mb-16&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
            Built for Enterprise Needs
          </h2>
          <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
            Our enterprise solutions offer powerful tools designed for large teams and complex hiring needs
          </p>
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {features.map((feature) => (
            <div
              key={feature.title}
              className=&quot;bg-card rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md&quot;
            >
              <div className=&quot;h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5&quot;>
                <feature.icon className=&quot;h-6 w-6 text-primary&quot; />
              </div>
              <h3 className=&quot;font-bold text-xl mb-3&quot;>{feature.title}</h3>
              <p className=&quot;text-muted-foreground&quot;>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
