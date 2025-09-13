<<<<<<< HEAD
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
  testimonials: Testimonial[];
  ctaText: string;
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
  ctaLink,
}) => {
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
          {heroImage && (
            <div className="mx-auto mt-8 rounded-lg shadow-xl max-w-3xl relative h-80">
              <Image
                src={heroImage}
                alt={title}
                className="object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      <section className="py-16 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/20 text-center"
              >
                {benefit.icon && (
                  <div className="mb-4 flex justify-center text-zion-cyan">
                    {benefit.icon}
                  </div>
                )}
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
=======
import React from 'react';

interface ServiceLandingTemplateProps {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  ctaText?: string;
  ctaLink?: string;
}

const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({
  title,
  description,
  features,
  benefits,
  ctaText = 'Get Started',
  ctaLink = '/contact'
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {description}
            </p>
            <a
              href={ctaLink}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature}
                </h3>
>>>>>>> 0019087cc94659218a6a56b7d706ee956e6c4958
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <Card
                key={idx}
                className="bg-zion-blue-dark border-zion-purple/30"
              >
                <CardContent className="pt-6">
                  <p className="text-gray-200 mb-6">"{t.text}"</p>
                </CardContent>
                <CardFooter className="border-t border-zion-purple/20 pt-4">
                  <div className="flex items-center">
                    {t.avatar && (
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="rounded-full mr-4"
                        loading="lazy"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-white">{t.name}</p>
                      {t.role && (
                        <p className="text-sm text-gray-400">{t.role}</p>
                      )}
                    </div>
                  </div>
                </CardFooter>
              </Card>
=======
      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </div>
>>>>>>> 0019087cc94659218a6a56b7d706ee956e6c4958
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

      <section className="py-12 bg-zion-blue-dark text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white"
          asChild
        >
          <a href={ctaLink}>{ctaText}</a>
        </Button>
      </section>
    </div>
  );
};
=======
    </div>
  );
};

export default ServiceLandingTemplate;
>>>>>>> 0019087cc94659218a6a56b7d706ee956e6c4958
