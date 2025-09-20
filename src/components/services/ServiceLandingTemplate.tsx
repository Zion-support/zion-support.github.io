import React from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

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
  features: string[];
  stats: Array<{ value: string; label: string }>;
  ctaText: string;
  ctaLink: string;
  testimonials?: Testimonial[];
}

export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({
  title,
  subtitle,
  heroImage,
  description,
  benefits,
  features,
  stats,
  ctaText,
  ctaLink,
  testimonials = []
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <GradientHeading level="h1" className="text-5xl md:text-6xl font-bold mb-6">
            {title}
          </GradientHeading>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
            {description}
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <a href={ctaLink} className="text-white no-underline">
              {ctaText}
            </a>
          </Button>
        </div>

        {heroImage && (
          <div className="mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={heroImage}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the key benefits that make our service stand out from the competition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  {benefit.icon && (
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive features designed to meet your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from satisfied customers who have experienced the value of our service
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <CardContent>
                    <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      {testimonial.avatar && (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full"
                        />
                      )}
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        {testimonial.role && (
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their business with our service
          </p>
          <Button size="lg" variant="secondary">
            <a href={ctaLink} className="text-blue-600 no-underline">
              {ctaText}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};