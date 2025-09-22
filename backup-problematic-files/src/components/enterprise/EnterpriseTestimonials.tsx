
import React from "react",;
import { Quote } from 'lucide-react';
import {;
  Carousel,;
  CarouselContent,;
  CarouselItem,;
  CarouselNext,;

    <section id="testimonials" className="py-20 px-4 md:px-6">;
      <div className="container mx-auto max-w-6xl">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">;
            Trusted by Leading Companies;
          </h2>;
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">;
            See how enterprise teams are transforming their hiring process;
          </p>;
        </div>;

              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">;
                <div className="bg-card rounded-xl p-8 border border-border h-full">;
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />;
                  <blockquote className="text-xl mb-6 italic">;

                        {testimonial.title}, {testimonial.company}
                      </p>;
                    </div>;
                  </div>;
                </div>;
              </CarouselItem>;
            ))}

            <CarouselPrevious />;
            <CarouselNext />;
          </div>;
        </Carousel>;
      </div>;
