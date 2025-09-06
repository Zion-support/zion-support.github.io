

export interface Benefit {
  title: string;
  description: string;
  icon?: React.ReactNode

}
export interface Testimonial {
  name: string;
  role?: string;
  text: string;
  avatar?: string
}
interface ServiceLandingTemplateProps {

import React from "react",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
import Image from "next/image",;
export interface Benefit {;
  title: string,;
  description: string,;
  icon?: React.ReactNode;
}
;
export interface Testimonial {;
  name: string,;
  role?: string,;
  text: string,;
  avatar?: string;
}
;
interface ServiceLandingTemplateProps {;
  title: string,;
  subtitle: string,;
  heroImage?: string,;
  description: string,;
  benefits: Benefit[],;
  testimonials: Testimonial[],;
  ctaText: string,;
  ctaLink: string;

}

export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({
  title,
  subtitle,
  heroImage,
  description,
  benefits,
  testimonials,
  ctaText,

  return (
    <div className="bg-background text-white">
      <section className="bg-zion-blue py-16 px-4 text-center">
        <div className="container mx-auto">
          <GradientHeading level="h1" className="mb-4">
            {title}
          </GradientHeading>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            {subtitle}
          </p>

            {description}
          </p>
        </div>
      </section>
