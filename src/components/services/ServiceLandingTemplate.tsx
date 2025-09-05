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
              />
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
            {_description}
          </p>
        </div>
      </section>

      <section className="py-16 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {_benefits.map(_(benefit, _idx) => (
              <div
                key={idx}
                className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/20 text-center"
              >
                {_benefit.icon && (
                  <div className="mb-4 flex justify-center text-zion-cyan">
                    {benefit.icon}
                  </div>
                )}
                <h3 className="text-lg font-bold mb-2">{_benefit.title}</h3>
                <p className="text-zion-slate-light">{_benefit.description}</p>
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
            {_testimonials.map(_(t, _idx) => (
              <Card
                key={idx}
                className="bg-zion-blue-dark border-zion-purple/30"
              >
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
                      )}
                    </div>
                  </div>
                </CardFooter>
              </Card>
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
          <a href={_ctaLink}>{_ctaText}</a>
        </Button>
      </section>
    </div>
  );
};
