

import {GradientHeading} from "./GradientHeading";
import {FeatureCard} from "./FeatureCard";
import {Bot, Clock, Globe, TrendingDown} from "lucide-react";
<<<<<<< HEAD
const benefits = [
  {
    title: "AI-Powered Matchmaking"
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.";
    icon: <Bot className="w-8 h-8" />}
  {
    title: "Global Availability"
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.";
    icon: <Globe className="w-8 h-8" />}
  {
    title: "24/7 Support"
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey."
    icon: <Clock className="w-8 h-8" />}
  {
    title: "Cost Reduction"
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors."
    icon: <TrendingDown className="w-8 h-8" />}]
=======

const benefits = [;
  {;
    title: "AI-Powered Matchmaking",;
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.";
    icon: <Bot className="w-8 h-8" />},;
  {;
    title: "Global Availability",;
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.";
    icon: <Globe className="w-8 h-8" />},;
  {;
    title: "24/7 Support",;
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",;
    icon: <Clock className="w-8 h-8" />},;
  {;
    title: "Cost Reduction",;
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",;
    icon: <TrendingDown className="w-8 h-8" />}],;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

export function BenefitsSection() {;
  return (
<<<<<<< HEAD
    <section className="py-20 bg-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>Why Zion?</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
=======
    <section className="py-20 bg-zion-blue-light">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-16">;
          <GradientHeading>Why Zion?</GradientHeading>;
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value;
          </p>;
        </div>;

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">;
          {benefits && benefits.map((benefit, index) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <FeatureCard
              key={index}
              title={benefit && benefit.title}
              description={benefit && benefit.description}
              icon={benefit && benefit.icon}
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
            />;
          ))}
<<<<<<< HEAD
        </div>
      </div>
    </section>
  )
}
=======
        </div>;
      </div>;
    </section>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
