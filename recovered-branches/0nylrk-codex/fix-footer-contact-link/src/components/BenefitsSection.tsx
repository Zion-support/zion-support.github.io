
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",
import { FeatureCard } from "./FeatureCard",
import { Bot, Clock, Globe, TrendingDown } from "lucide-react",
=======
import { GradientHeading } from &quot;./GradientHeading&quot;;
import { FeatureCard } from &quot;./FeatureCard&quot;;
import { Bot, Clock, Globe, TrendingDown } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
<<<<<<< HEAD
    title: "Cost Reduction",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w-8 h-8" />}],
=======
    title: &quot;Cost Reduction&quot;,
    description: &quot;Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.&quot;,
    icon: <TrendingDown className=&quot;w-8 h-8&quot; />}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function BenefitsSection() {
  return (
    <section className=&quot;py-20 bg-zion-blue-light&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-16&quot;>
          <GradientHeading>Why Zion?</GradientHeading>
          <p className=&quot;text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto&quot;>
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value
          </p>
        </div>
        
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto&quot;>
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className=&quot;bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300&quot;
            />
          ))}
        </div>
      </div>
    </section>
  )
}
