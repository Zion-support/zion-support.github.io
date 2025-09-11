name: string;
  role?: string;
  text: string;
  avatar?: string
}


interface ServiceLandingTemplateProps {;

  title: string;
  subtitle: string;
  heroImage?: string;
  description: string;
  benefits: Benefit[];
  testimonials: Testimonial[];
  ctaText: string;
import React from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
export interface Benefit {
  title: string,
  description: string,
  icon?: React.ReactNode
import React from 'react';
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
  description: string;
  benefits: Benefit[];
  features?: string[];
  stats?: Array<{ label: string; value: string }>
  ctaText: string
  ctaLink: string
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
export const ServiceLandingTemplate: React.FC < ServiceLandingTemplateProps> = ({


export interface Benefit {
  title: string;
  description: string;
  icon?: React.ReactNode


  stats?: Array<{ label: string; value: string }>
  ctaText: string
  ctaLink: string
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
}

export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({

  title,
  subtitle,
  heroImage,
  description,
  benefits,


export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({;
  title,;
  subtitle,;
  description,;
  benefits,;
  features = [],;
  stats = [],;
  ctaText,;
  ctaLink,;
}) => {;

  return (

          </p>
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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

    <div className="min - h-screen bg - white">;
      <section className="py - 20 px - 4 bg - gradient - to - br from - blue - 50 to - indigo - 100">;
        <div className="max - w-7xl mx - auto text - center">;
          <h1 className="text - 4xl md:text - 6xl font - bold text - gray - 900 mb - 6">;
            {title}
          </h1>;
          <p className="text - xl text - gray - 600 max - w-3xl mx - auto mb - 8">;
            {subtitle}
          </p>;
          <p className="text - lg text - gray - 600 max - w-3xl mx - auto">;

            {description}
          </p>;
        </div>;
      </section>;
      {benefits.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  {benefit.icon && (
                    <div className="mb-4 text-blue-600">
                      {benefit.icon}

          </p>;
        </div>;
      </section>;

      {benefits && benefits.length > 0 && (;
        <section className="py-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">;
              Benefits;
            </h2>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {benefits && benefits.map((benefit, index) => (;
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">;
                  {benefit && benefit.icon && (;
                    <div className="mb-4 text-blue-600">;
                      {benefit && benefit.icon}
                    </div>;

                  )}
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {features && features.length > 0 && (;
        <section className="py-16 px-4 bg-gray-50">;
          <div className="max-w-7xl mx-auto">;
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">;
              Features;
            </h2>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              {features && features.map((feature, index) => (;
                <div key={index} className="flex items-start">;
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>;
                  <span className="text-gray-700">{feature}</span>;
                </div>;

              ))}
            </div>
          </div>
        </section>
      )}

                    </div>)}
                  <h3 className="text - xl font - semibold mb - 3">{benefit.title}</h3>;
                  <p className="text - gray - 600">{benefit.description}</p>;
                </div>))}
            </div>;
          </div>;
        </section>)}
      {features.length > 0 && (
        <section className="py - 16 px - 4 bg - gray - 50">;
          <div className="max - w-7xl mx - auto">;
            <h2 className="text - 3xl font - bold text - center text - gray - 900 mb - 12">;
              Features;
            </h2>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
              {features.map ((feature, index) => (
                <div key={index} className="flex items - start">;
                  <div className="w - 2 h - 2 bg - blue - 600 rounded - full mt - 2 mr - 3"></div>;
                  <span className="text - gray - 700">{feature}</span>;
                </div>))}
            </div>;
          </div>;
        </section>)}

      {stats.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}


      {stats && stats.length > 0 && (;
        <section className="py-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">;
              {stats && stats.map((stat, index) => (;
                <div key={index}>;
                  <div className="text-4xl font-bold text-blue-600 mb-2">;
                    {stat && stat.value}
                  </div>;
                  <div className="text-gray-600">{stat && stat.label}</div>;
                </div>;

              ))}
            </div>
          </div>
        </section>
      )}


      <section className="py-16 px-4 bg-blue-600">;
        <div className="max-w-4xl mx-auto text-center">;
          <h2 className="text-3xl font-bold text-white mb-4">;
            Ready to Get Started?;
          </h2>;
          <p className="text-xl text-blue-100 mb-8">;
            Contact us today to learn more about our services.;
          </p>;

          <a
            href={ctaLink}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            {ctaText}

          </a>;
        </div>;
      </section>;
    </div>;
  );


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
                  </div>;
                )}
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                    </div>;
                  </div>;
                </CardFooter>;
              </Card>;
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-zion-blue-dark text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white"
          asChild
        >
          <a href={ctaLink}>{ctaText}</Link>
        </Button>
      </section>
    </div>
  )
