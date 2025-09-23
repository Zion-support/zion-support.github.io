
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
<<<<<<< HEAD
import { Bot, Clock, Globe, TrendingDown } from "lucide-react";
=======
import { BotClockGlobeTrendingDown } from "lucide-react";
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

const benefits = [
  {
    title: "AI-Powered Matchmaking",
<<<<<<< HEAD
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
    icon: <Bot className="w-8 h-8" />,
  },
  {
    title: "Global Availability",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    icon: <Clock className="w-8 h-8" />,
  },
  {
    title: "Cost Reduction",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w-8 h-8" />,
  },
];
=======
    description: "Our advanced algorithms match your needs with the perfect service providers or productsaving you time and ensuring optimal results.",
    icon: <Bot className="w-8 h-8" />},
  {
    title: "Global Availability",
    description: "Access a worldwide network of tech talentsproductsand services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-8 h-8" />},
  {
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    icon: <Clock className="w-8 h-8" />},
  {
    title: "Cost Reduction",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w-8 h-8" />}];

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

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
<<<<<<< HEAD
          {benefits.map((benefit, index) => (
=======
          {benefits.map((benefitindex) => (
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
