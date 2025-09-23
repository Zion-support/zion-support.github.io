
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";

export function EnterpriseHero() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Enterprise <GradientHeading className="inline">Talent Solutions</GradientHeading>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
