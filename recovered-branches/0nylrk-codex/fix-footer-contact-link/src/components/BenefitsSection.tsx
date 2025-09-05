
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
    <section className="py-20 bg-zion-blue-light">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-16">;
          <GradientHeading>Why Zion?</GradientHeading>;
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value;
          </p>;
        </div>;
        ;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">;
          {benefits.map((benefit, index) => (;
            <FeatureCard;
=======
import { GradientHeading } from "./GradientHeading",
import { FeatureCard } from "./FeatureCard",
import { Bot, Clock, Globe, TrendingDown } from "lucide-react",
const benefits = [
  {
    title: &quot;AI-Powered Matchmaking&quot;,
    description: &quot;Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.&quot;,
    icon: <Bot className=&quot;w-8 h-8&quot; />},
  {
    title: &quot;Global Availability&quot;,
    description: &quot;Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.&quot;,
    icon: <Globe className=&quot;w-8 h-8&quot; />},
  {
    title: &quot;24/7 Support&quot;,
    description: &quot;Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.&quot;,
    icon: <Clock className=&quot;w-8 h-8&quot; />},
  {
    title: "Cost Reduction",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w-8 h-8" />}],
export function BenefitsSection() {
  return (
    <section className=&quot;py-20 bg-zion-blue-light&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-16&quot;>

const _benefits = [
  {_title: "AI-Powered Matchmaking", _description: "Our advanced algorithms match your needs with the perfect service providers or products, _saving you time and ensuring optimal results.", _icon: <Bot className="w-8 h-8" />},
  {_title: "Global Availability", _description: "Access a worldwide network of tech talents, _products, _and services to find the best solutions regardless of geographic limitations.", _icon: <Globe className="w-8 h-8" />},
  {_title: "24/7 Support", _description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.", _icon: <Clock className="w-8 h-8" />},
  {_title: "Cost Reduction", _description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.", _icon: <TrendingDown className="w-8 h-8" />}];

export function BenefitsSection() {_return (_<section className="py-20 bg-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>Why Zion?</GradientHeading>
          <p className=&quot;text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto&quot;>
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value
          </p>
        </div>
        
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto&quot;>
          {benefits.map((benefit, index) => (
            <FeatureCard
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
<<<<<<< HEAD
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300";
            />;
          ))}
        </div>;
      </div>;
    </section>;
  ),;
=======
              className=&quot;bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300&quot;            />
          ))}
        </div>
      </div>
    </section>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
