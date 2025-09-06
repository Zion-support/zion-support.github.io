<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';

=======
import React from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export interface Benefit {
  title: string,
  description: string,
  icon?: React.ReactNode
}

export interface Testimonial {
  name: string,
  role?: string;
  text: string,
  avatar?: string
}

interface ServiceLandingTemplateProps {
  title: string,
  subtitle: string,
  heroImage?: string;
  description: string,
  benefits: Benefit[],
  testimonials: Testimonial[],
  ctaText: string,
  ctaLink: string
}

export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({
  title;
  subtitle;
  heroImage;
  description;
  benefits;
  testimonials;
  ctaText;
  ctaLink}) => {
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
<<<<<<< HEAD
                className='object-cover rounded-lg'
                loading='lazy'
=======
import React from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
export interface Benefit {
  title: string,
  description: string,
  icon?: React.ReactNode
}

export interface Testimonial {
  name: string,
  role?: string;
  text: string,
  avatar?: string
}

interface ServiceLandingTemplateProps {
  title: string,
  subtitle: string,
  heroImage?: string;
  description: string,
  benefits: Benefit[],
  testimonials: Testimonial[],
  ctaText: string,
  ctaLink: string
}

export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({
  title;
  subtitle;
  heroImage;
  description;
  benefits;
  testimonials;
  ctaText;
  ctaLink}) => {
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="object-cover rounded-lg"
                loading="lazy"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              />
            </div>
          )}
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-12 px-4'>
        <div className='container mx-auto text-center'>
          <p className='text-lg text-zion-slate-light max-w-3xl mx-auto'>
=======
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {description}
          </p>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-16 bg-zion-blue-light'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl font-bold text-white text-center mb-8'>
=======
      <section className="py-16 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
                <h3 className='text-lg font-bold mb-2'>{benefit.title}</h3>
                <p className='text-zion-slate-light'>{benefit.description}</p>
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-16 bg-zion-blue'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl font-bold text-white text-center mb-8'>
=======
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
                <CardFooter className='border-t border-zion-purple/20 pt-4'>
                  <div className='flex items-center'>
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <CardFooter className="border-t border-zion-purple/20 pt-4">
                  <div className="flex items-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    {t.avatar && (
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={40}
                        height={40}
<<<<<<< HEAD
<<<<<<< HEAD
                        className='rounded-full mr-4'
                        loading='lazy'
=======
                        className="rounded-full mr-4"
                        loading="lazy"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      />
                    )}
                    <div>
                      <p className="font-semibold text-white">{t.name}</p>
                      {t.role && (
<<<<<<< HEAD
                        <p className='text-sm text-gray-400'>{t.role}</p>
=======
                        className="rounded-full mr-4"
                        loading="lazy"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-white">{t.name}</p>
                      {t.role && (
                        <p className="text-sm text-gray-400">{t.role}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <p className="text-sm text-gray-400">{t.role}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      )}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-12 bg-zion-blue-dark text-center'>
        <Button
          size='lg'
          className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white'
=======
      <section className="py-12 bg-zion-blue-dark text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <section className="py-12 bg-zion-blue-dark text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          asChild
        >
          <a href={ctaLink}>{ctaText}</a>
        </Button>
      </section>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};
"
=======
  )

};

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
