<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import Image from "next/image",
=======
import React from &quot;react&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardFooter } from &quot;@/components/ui/card&quot;;
import Image from &quot;next/image&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export interface Benefit {
  title: string,
  description: string,
  icon?: React.ReactNode
}

export interface Testimonial {
  name: string,
  role?: string,
  text: string,
  avatar?: string
}

interface ServiceLandingTemplateProps {
  title: string,
  subtitle: string,
  heroImage?: string,
  description: string,
  benefits: Benefit[],
  testimonials: Testimonial[],
  ctaText: string,
  ctaLink: string
}

export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({
  title,
  subtitle,
  heroImage,
  description,
  benefits,
  testimonials,
  ctaText,
  ctaLink}) => {
  return (
    <div className=&quot;bg-background text-white&quot;>
      <section className=&quot;bg-zion-blue py-16 px-4 text-center&quot;>
        <div className=&quot;container mx-auto&quot;>
          <GradientHeading level=&quot;h1&quot; className=&quot;mb-4&quot;>
            {title}
          </GradientHeading>
          <p className=&quot;text-xl text-zion-slate-light max-w-3xl mx-auto&quot;>
            {subtitle}
          </p>
          {heroImage && (
            <div className=&quot;mx-auto mt-8 rounded-lg shadow-xl max-w-3xl relative h-80&quot;>
              <Image
                src={heroImage}
                alt={title}
                className=&quot;object-cover rounded-lg&quot;
                loading=&quot;lazy&quot;
=======
import React from "react";
import Image from "next/image";

export interface Benefit {_title: string;
  description: string;
  icon?: React.ReactNode;}

export interface Testimonial {_name: string;
  role?: string;
  text: string;
  avatar?: string;}

interface ServiceLandingTemplateProps {_title: string;
  subtitle: string;
  heroImage?: string;
  description: string;
  benefits: Benefit[];
  testimonials: Testimonial[];
  ctaText: string;
  ctaLink: string;}

export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = (_{_title, _subtitle, _heroImage, _description, _benefits, _testimonials, _ctaText, _ctaLink}) => {_return (
    <div className="bg-background text-white">
      <section className="bg-zion-blue py-16 px-4 text-center">
        <div className="container mx-auto">
          <GradientHeading level="h1" className="mb-4">
            {title}
          </GradientHeading>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            {_subtitle}
          </p>
          {_heroImage && (
            <div className="mx-auto mt-8 rounded-lg shadow-xl max-w-3xl relative h-80">
              <Image
                src={heroImage}
                alt={_title}
                className="object-cover rounded-lg"
                loading="lazy"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            </div>
          )}
        </div>
      </section>

<<<<<<< HEAD
      <section className=&quot;py-12 px-4&quot;>
        <div className=&quot;container mx-auto text-center&quot;>
          <p className=&quot;text-lg text-zion-slate-light max-w-3xl mx-auto&quot;>
            {description}
=======
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
            {_description}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </p>
        </div>
      </section>

      <section className=&quot;py-16 bg-zion-blue-light&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-2xl font-bold text-white text-center mb-8&quot;>
            Benefits
          </h2>
<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
            {benefits.map((benefit, idx) => (
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {_benefits.map(_(benefit, _idx) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <div
                key={idx}
                className=&quot;bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/20 text-center&quot;
              >
<<<<<<< HEAD
                {benefit.icon && (
                  <div className=&quot;mb-4 flex justify-center text-zion-cyan&quot;>
                    {benefit.icon}
                  </div>
                )}
                <h3 className=&quot;text-lg font-bold mb-2&quot;>{benefit.title}</h3>
                <p className=&quot;text-zion-slate-light&quot;>{benefit.description}</p>
=======
                {_benefit.icon && (
                  <div className="mb-4 flex justify-center text-zion-cyan">
                    {benefit.icon}
                  </div>
                )}
                <h3 className="text-lg font-bold mb-2">{_benefit.title}</h3>
                <p className="text-zion-slate-light">{_benefit.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=&quot;py-16 bg-zion-blue&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-2xl font-bold text-white text-center mb-8&quot;>
            What Our Clients Say
          </h2>
<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
            {testimonials.map((t, idx) => (
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {_testimonials.map(_(t, _idx) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <Card
                key={idx}
                className=&quot;bg-zion-blue-dark border-zion-purple/30&quot;
              >
<<<<<<< HEAD
                <CardContent className=&quot;pt-6&quot;>
                  <p className=&quot;text-gray-200 mb-6&quot;>&quot;{t.text}&quot;</p>
                </CardContent>
                <CardFooter className=&quot;border-t border-zion-purple/20 pt-4&quot;>
                  <div className=&quot;flex items-center&quot;>
                    {t.avatar && (
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={40}
                        height={40}
                        className=&quot;rounded-full mr-4&quot;
                        loading=&quot;lazy&quot;
                      />
                    )}
                    <div>
                      <p className=&quot;font-semibold text-white&quot;>{t.name}</p>
                      {t.role && (
                        <p className=&quot;text-sm text-gray-400&quot;>{t.role}</p>
=======
                <CardContent className="pt-6">
                  <p className="text-gray-200 mb-6">"{_t.text}"</p>
                </CardContent>
                <CardFooter className="border-t border-zion-purple/20 pt-4">
                  <div className="flex items-center">
                    {_t.avatar && (
                      <Image
                        src={t.avatar}
                        alt={_t.name}
                        width={_40}
                        height={_40}
                        className="rounded-full mr-4"
                        loading="lazy"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-white">{_t.name}</p>
                      {_t.role && (
                        <p className="text-sm text-gray-400">{t.role}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      )}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className=&quot;py-12 bg-zion-blue-dark text-center&quot;>
        <Button
          size=&quot;lg&quot;
          className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white&quot;
          asChild
        >
<<<<<<< HEAD
          <a href={ctaLink}>{ctaText}</Link>
=======
          <a href={_ctaLink}>{_ctaText}</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </Button>
      </section>
    </div>
  )
},
