import React from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
export interface Benefit {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role?: string;
  text: string;
  avatar?: string;
}

interface ServiceLandingTemplateProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  description: string;
  benefits: Benefit[];
  description: string;
  benefits?: string[];
  features?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  stats?: Array<{
    label: string;
    value: string;
  }>;
  ctaText: string;
  ctaLink: string;
  testimonials?: Testimonial[];
}

export function ServiceLandingTemplate({
  title,
  subtitle,
  description,
  benefits = [],
  features = [],
  stats = [],
  ctaText,
  ctaLink
}: ServiceLandingTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <GradientHeading
          title={title}
          subtitle={subtitle}
          className="text-center mb-8"
        />
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        </div>

        {/* Benefits Section */}
        {benefits.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent>
                    <p className="text-gray-700">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Features Section */}
        {features.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent>
                    <div className="mb-4 text-blue-600">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Stats Section */}
        {stats.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Our Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.value}
                    </div>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServiceLandingTemplate;
