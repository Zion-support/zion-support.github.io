import React from "react",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import Image from "next/image",
export interface Benefit {
  title: string,
  description: string,
  icon?: React.ReactNode;
}

export interface Testimonial {
  name: string,
  role?: string;
  text: string,
  avatar?: string;
}

interface ServiceLandingTemplateProps {
  title: string,
  subtitle: string,
  heroImage?: string;
  description: string,
  benefits: Benefit[],
  testimonials: Testimonial[],
  ctaText: string,
  ctaLink: string}

export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({
  title,
  subtitle;
  heroImage,
  description,
  benefits,
  testimonials,
  ctaText;
  ctaLink
}) => {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <GradientHeading
          title={title}
          subtitle={subtitle}
          className="text-center mb-12"
        />
        
        <div className="bg-white rounded-lg p-8">
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild>
              <a href={ctaLink}>{ctaText}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );;