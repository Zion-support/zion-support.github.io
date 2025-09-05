import React from &quot;react&quot;;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react'
import Link from &quot;next/link&quot;;
import { cn } from &quot;@/lib/utils&quot;;

interface InteractiveFeaturesProps {
  className?: string;
  style?: React.CSSProperties;
}

export function InteractiveFeatures({ className, style }: InteractiveFeaturesProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const features = [
    {
      title: &quot;AI Talent Matching&quot;,
      description: &quot;Connect with the perfect talent using intelligent matching.&quot;,
      details:
        &quot;Our algorithms analyze skills, availability and experience to deliver the best candidates for your project.&quot;,
      icon: <Search className=&quot;h-8 w-8 text-blue-700&quot; />,
      link: &quot;/match&quot;},
    {
      title: &quot;Talent Directory&quot;,
      description: &quot;Browse a verified database of AI and tech specialists.&quot;,
      details:
        &quot;Every profile is vetted for quality and authenticity so you can hire with confidence.&quot;,
      icon: <Users className=&quot;h-8 w-8 text-purple-700&quot; />,
      link: &quot;/talent&quot;},
    {
      title: &quot;Services Marketplace&quot;,
      description: &quot;Discover professional tech and AI services for your business.&quot;,
      details:
        &quot;From on-demand IT support to specialized AI development, our marketplace offers transparent pricing and reviews.&quot;,
      icon: <Zap className=&quot;h-8 w-8 text-cyan-700&quot; />,
      link: &quot;/services&quot;},
    {
      title: &quot;Equipment Catalog&quot;,
      description: &quot;Find specialized hardware for development and research.&quot;,
      details:
        &quot;Access cutting-edge technology with flexible options to buy, rent or lease the gear you need.&quot;,
      icon: <Settings className=&quot;h-8 w-8 text-amber-700&quot; />,
      link: &quot;/equipment&quot;}];

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={cn(&quot;py-16 bg-zion-blue-dark&quot;, className)} style={style}>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2&quot;>
            Key Features
          </h2>
          <p className=&quot;text-zion-slate-light text-lg max-w-2xl mx-auto&quot;>
            Hover or click a card to learn more about what Zion offers
          </p>
        </div>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
          {features.map((feature, index) => (
            <Card
              key={index}
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
              onClick={() => handleToggle(index)}
              className=&quot;cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg&quot;
            >
              <CardHeader className=&quot;flex flex-row items-start space-x-3&quot;>
                {feature.icon}
                <div>
                  <CardTitle className=&quot;text-lg text-white&quot;>{feature.title}</CardTitle>
                  <CardDescription className=&quot;text-zion-slate-light&quot;>
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <div
                className={cn(
                  &quot;transition-all duration-300&quot;,
                  openIndex === index ? &quot;max-h-48 opacity-100 p-6 pt-0&quot; : &quot;max-h-0 opacity-0 p-0&quot;
                )}
              >
                <CardContent className=&quot;text-sm text-zion-slate-light p-0&quot;>
                  <p>{feature.details}</p>
                  <Button asChild variant=&quot;link&quot; className=&quot;mt-3 p-0 h-auto text-primary&quot;>
                    <Link href={feature.link} className=&quot;flex items-center gap-1&quot;>
                      Learn more <ArrowRight className=&quot;h-4 w-4&quot; />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InteractiveFeatures;
