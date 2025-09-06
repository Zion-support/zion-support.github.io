
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1

import {GradientHeading} from "./GradientHeading";
import {FeatureCard} from "./FeatureCard";
import {Bot, Clock, Globe, TrendingDown} from "lucide-react";
const benefits = [
=======
import { GradientHeading } from './GradientHeading';
import { FeatureCard } from './FeatureCard';
import { Bot, Clock, Globe, TrendingDown } from './lucide-react';
const benefits = [;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  {
    title: "AI - Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.";
    icon: <Bot className="w - 8 h - 8" />},

  {
    title: "Global Availability"
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.";
<<<<<<< HEAD
    icon: <Globe className="w-8 h-8" />}
<<<<<<< HEAD
=======
import {GradientHeading} from "./GradientHeading";
import {FeatureCard} from "./FeatureCard";
import {Bot, Clock, Globe, TrendingDown} from "lucide-react";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import {GradientHeading} from "./GradientHeading";
import {FeatureCard} from "./FeatureCard";
import {Bot, Clock, Globe, TrendingDown} from "lucide-react";
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { GradientHeading } from "./GradientHeading",
import { FeatureCard } from "./FeatureCard",
import { Bot, Clock, Globe, TrendingDown } from "lucide-react",

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
const benefits = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
    icon: <Bot className="w-8 h-8" />},
  {
    title: "Global Availability",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-8 h-8" />},
  {
    title: "24/7 Support"
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey."
    icon: <Clock className="w-8 h-8" />}
  {
    title: "Cost Reduction"
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors."
    icon: <TrendingDown className="w-8 h-8" />}]

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
          {benefits.map((benefit, index) => (
            <FeatureCard
<<<<<<< HEAD
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
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
}
};
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======

};

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { GradientHeading } from "./GradientHeading",;
import { FeatureCard } from "./FeatureCard",;
import { Bot, Clock, Globe, TrendingDown } from "lucide-react",;
const benefits = [;
  {;
    title: "AI-Powered Matchmaking",;
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",;
    icon: <Bot className="w-8 h-8" />},;
  {;
    title: "Global Availability",;
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",;
    icon: <Globe className="w-8 h-8" />},;
  {;
    title: "24/7 Support",;
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",;
    icon: <Clock className="w-8 h-8" />},;
  {;
    title: "Cost Reduction",;
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",;
    icon: <TrendingDown className="w-8 h-8" />}];
export function BenefitsSection() {;
  return (;

    <section className="py-20 bg-zion-blue-light">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-16">;
          <GradientHeading>Why Zion?</GradientHeading>;
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value;
          </p>;
        </div>;

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">;

        </div>;
      </div>;
    </section>;
  );
}

=======
    icon: <Globe className="w - 8 h - 8" />},
  {
    title: "24 / 7 Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    icon: <Clock className="w - 8 h - 8" />},
  {
    title: "Cost Reduction",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w - 8 h - 8" />}],
export /**
 * BenefitsSection - Function description
 */
function BenefitsSection() {
  return (
    <section className="py - 20 bg - zion - blue - light">;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 16">;
          <GradientHeading > Why Zion?</GradientHeading>;
          <p className="text - zion - slate - light text - lg mt - 4 max - w-2xl mx - auto">;
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value;
          </p>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8 max - w-5xl mx - auto">;
          {benefits.map ((benefit, index) => (
            <FeatureCard;
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className="bg - zion - blue hover:bg - zion - blue - dark transition - all duration - 300";
            />))}
        </div>;
      </div>;
    </section>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
          {benefits.map((benefit, index) => (;
            <FeatureCard;
}
<<<<<<< HEAD
;
;
=======


;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
