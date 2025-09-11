
import { GradientHeading } from './GradientHeading';
import { FeatureCard } from './FeatureCard';
import { Bot, Clock, Globe, TrendingDown } from './lucide-react';
const benefits = [;
  {
    title: "AI - Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.";
    icon: <Bot className="w - 8 h - 8" />},

<<<<<<< HEAD
<<<<<<< HEAD
import {GradientHeading} from "./GradientHeading";
import {FeatureCard} from "./FeatureCard";
import {Bot, Clock, Globe, TrendingDown} from "lucide-react";
const benefits = [
  {
    title: "AI-Powered Matchmaking"
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.";
    icon: <Bot className="w-8 h-8" />}
  {
    title: "Global Availability"
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.";
    icon: <Globe className="w-8 h-8" />}
import {GradientHeading} from "./GradientHeading";
import {FeatureCard} from "./FeatureCard";
import {Bot, Clock, Globe, TrendingDown} from "lucide-react";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    title: "Global Availability"
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.";


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { GradientHeading } from "./GradientHeading",
import { FeatureCard } from "./FeatureCard",
import { Bot, Clock, Globe, TrendingDown } from "lucide-react",

<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const benefits = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
    icon: <Bot className="w-8 h-8" />},
  {
    title: "Global Availability",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-8 h-8" />},
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    title: "24/7 Support"
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey."
    icon: <Clock className="w-8 h-8" />}
  {
    title: "Cost Reduction"
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors."
    icon: <TrendingDown className="w-8 h-8" />}]
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  {
    title: "Global Availability"
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.";
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
export function BenefitsSection() {;
  return (
            <FeatureCard

};

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
}
};
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

};

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",;
import { FeatureCard } from "./FeatureCard",;
import { Bot, Clock, Globe, TrendingDown } from "lucide-react",;
;
const benefits = [;
  {;
    title:"AI-Powered Matchmaking",;
    description:"Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",;
    icon:<Bot className="w-8 h-8" />},;
  {;
    title:"Global Availability",;
    description:"Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",;
    icon:<Globe className="w-8 h-8" />},;
  {;
    title:"24/7 Support",;
    description:"Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",;
    icon:<Clock className="w-8 h-8" />},;
  {;
    title:"Cost Reduction",;
    description:"Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",;
    icon:<TrendingDown className="w-8 h-8" />}],;
;
export function BenefitsSection() {;
  return (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <section className="py-20 bg-zion-blue-light">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-16">;
          <GradientHeading>Why Zion?</GradientHeading>;
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          {benefits && benefits.map((benefit, index) => (;
            <FeatureCard
              key={index}
              title={benefit && benefit.title}
              description={benefit && benefit.description}
              icon={benefit && benefit.icon}
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
            />;
          ))}
=======

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>;
      </div>;
    </section>;
  );
}
<<<<<<< HEAD
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
          {benefits.map((benefit, index) => (;
            <FeatureCard;
}


;
<<<<<<< HEAD
        ;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">;
          {benefits.map((benefit, index) => (;
            <FeatureCard;              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300";
            />;
          ))}
        </div>;
      </div>;
    </section>;
  ),;}
 const benefits = [ {
  title: "AI-Powered Matchmaking";
description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.";
icon: <Bot className="w-8 h-8" /> 
};
{
  title: "Global Availability";
description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.";
icon: <Globe className="w-8 h-8" /> 
};
{
  title: "24/7 Support";
description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.";
icon: <Clock className="w-8 h-8" /> 
};
{
  export function BenefitsSection () {
  return (<section className="py-20 bg-zion-blue-light" > <div className="container mx-auto px-4" > <div className="text-center mb-16" > text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto" > Experience the next generation of tech marketplace with features designed to maximize efficiency and value </p> </div> />) ) 
}</div> </div> </section>) 
}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">;
          {benefits.map((benefit, index) => (;
            <FeatureCard;
}
;
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
          {benefits.map((benefit, index) => (;
            <FeatureCard;
}


;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
