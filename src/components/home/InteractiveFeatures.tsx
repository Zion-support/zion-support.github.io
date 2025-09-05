<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react'
import Link from "next/link",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react'
import Link from &quot;next/link&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface InteractiveFeaturesProps {
  className?: string,
  style?: React.CSSProperties
}

export function InteractiveFeatures({ className, style }: InteractiveFeaturesProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null),
=======
import React from "react";
import Link from "next/link";

interface InteractiveFeaturesProps {_className?: string;
  style?: React.CSSProperties;}

export function InteractiveFeatures(_{_className, _style}: InteractiveFeaturesProps) {_const [openIndex, _setOpenIndex] = React.useState<number | null>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _features = [
    {
<<<<<<< HEAD
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
<<<<<<< HEAD
        "Access cutting-edge technology with flexible options to buy, rent or lease the gear you need.",
      icon: <Settings className="h-8 w-8 text-amber-700" />,
      link: "/equipment"}],
=======
        &quot;Access cutting-edge technology with flexible options to buy, rent or lease the gear you need.&quot;,
      icon: <Settings className=&quot;h-8 w-8 text-amber-700&quot; />,
      link: &quot;/equipment&quot;}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  },

  return (
    <section className={cn(&quot;py-16 bg-zion-blue-dark&quot;, className)} style={style}>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2&quot;>
=======
      title: "AI Talent Matching", _description: "Connect with the perfect talent using intelligent matching.", _details:
        "Our algorithms analyze skills, _availability and experience to deliver the best candidates for your project.", _icon: <Search className="h-8 w-8 text-blue-700" />, _link: "/match"},
    {_title: "Talent Directory", _description: "Browse a verified database of AI and tech specialists.", _details:
        "Every profile is vetted for quality and authenticity so you can hire with confidence.", _icon: <Users className="h-8 w-8 text-purple-700" />, _link: "/talent"},
    {_title: "Services Marketplace", _description: "Discover professional tech and AI services for your business.", _details:
        "From on-demand IT support to specialized AI development, _our marketplace offers transparent pricing and reviews.", _icon: <Zap className="h-8 w-8 text-cyan-700" />, _link: "/services"},
    {_title: "Equipment Catalog", _description: "Find specialized hardware for development and research.", _details:
        "Access cutting-edge technology with flexible options to buy, _rent or lease the gear you need.", _icon: <Settings className="h-8 w-8 text-amber-700" />, _link: "/equipment"}];

  const _handleToggle = (_index: number) => {_setOpenIndex(_(prev) => (prev === index ? null : index));};

  return (
    <section className={_cn("py-16 bg-zion-blue-dark", _className)} style={_style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Key Features
          </h2>
          <p className=&quot;text-zion-slate-light text-lg max-w-2xl mx-auto&quot;>
            Hover or click a card to learn more about what Zion offers
          </p>
        </div>
<<<<<<< HEAD
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
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {_features.map(_(feature, _index) => (_<Card
              key={index}
              onMouseEnter={_() => setOpenIndex(index)}
              onMouseLeave={_() => setOpenIndex(null)}
              onClick={_() => handleToggle(index)}
              className="cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="flex flex-row items-start space-x-3">
                {_feature.icon}
                <div>
                  <CardTitle className="text-lg text-white">{_feature.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {_feature.description}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </CardDescription>
                </div>
              </CardHeader>
              <div
<<<<<<< HEAD
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
=======
                className={_cn(
                  "transition-all duration-300", _openIndex === index ? "max-h-48 opacity-100 p-6 pt-0" : "max-h-0 opacity-0 p-0"
                )}
              >
                <CardContent className="text-sm text-zion-slate-light p-0">
                  <p>{_feature.details}</p>
                  <Button asChild variant="link" className="mt-3 p-0 h-auto text-primary">
                    <Link href={_feature.link} className="flex items-center gap-1">
                      Learn more <ArrowRight className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InteractiveFeatures,
