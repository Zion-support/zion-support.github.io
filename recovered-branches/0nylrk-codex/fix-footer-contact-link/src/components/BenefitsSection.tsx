
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";

const benefits = [
  {
    title: "AI-Powered Matchmaking",

export function BenefitsSection() {
  return (
    <section className="py-20 bg-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>Why Zion?</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
