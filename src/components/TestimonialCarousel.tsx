

import {
  Carousel;
  CarouselContent;
  CarouselItem;
  CarouselNext;
  CarouselPrevious} from "@/components/ui/carousel",
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
import { Avatar } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Quote } from 'lucide-react'
import Link from "next/link",;
import Image from "next/image";
import { CASE_STUDIES } from "@/data/case-studies";
const testimonials = null;
              loop: true}}
            className="w-full"

          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className='md:basis-1/1 lg:basis-1/1'>
                  <Card className='bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col'>
                    <CardContent className='p-8 flex flex-col md:flex-row gap-6 flex-1'>
                      <div className='flex-shrink-0 flex flex-col items-center'>
                        <Avatar className='h-20 w-20 border-2 border-zion-cyan mb-3'>
                          <Image
origin/cursor/automate-test-improve-and-merge-code-2533
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            width={80}
                            height={80}
                            loading="lazy""
                          />
                        </Avatar>
                        <div className="text-center md:text-left">"
                          <p className="font-bold text-zion-cyan">{testimonial.author}</p>"
                          <p className="text-zion-slate-light text-sm">{testimonial.role}</p>"
                        </div>
                      </div>
                      <div className="flex-1">"
                        <div className="flex items-center gap-3 mb-4">"
                          <Image
                            src={testimonial && testimonial.companyLogo}
                            alt={`${testimonial && testimonial.company} logo`}`
                            width={32}
                            height={32}
                        </div>
                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />"
                        <p className="text-white text-lg mb-6">"{testimonial.quote}"</p>"
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">"
                      <Button variant="link" className="text-zion-cyan p-0" asChild>"
                        <Link href={`/case-studies/${testimonial.slug}`} />Read Case Study →</Link>`
                            loading="lazy"
                          />
                        </Avatar>
                        <div className="text-center md:text-left">
                          <p className="font-bold text-zion-cyan">{testimonial.author}</p>
                          <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
loading='lazy'
                          />
                        </Avatar>
                        <div className='text-center md:text-left'>
                          <p className='font-bold text-zion-cyan'>
                            {testimonial.author}
                          </p>
                          <p className='text-zion-slate-light text-sm'>
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className='flex-1'>
                        <div className='flex items-center gap-3 mb-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
                          <Image
                            src={testimonial.companyLogo}
                            alt={`${testimonial.company} logo`}
                            width={32}
                            height={32}
                            className="h-8 w-auto"
                            loading="lazy"
                          />
                          <span className="text-white font-semibold">{testimonial.company}</span>
                        </div>
                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />
                        <p className="text-white text-lg mb-6">"{testimonial.quote}"</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="link" className="text-zion-cyan p-0" asChild>
                        <Link href={`/case-studies/${testimonial.slug}`}>Read Case Study →</Link>
className='h-8 w-auto'
                            loading='lazy'
                          <span className='text-white font-semibold'>
                            {testimonial.company}
                          </span>
                        </div>
                        <Quote className='h-10 w-10 text-zion-cyan opacity-30 mb-3' />
                        <p className='text-white text-lg mb-6'>
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className='p-6 pt-0'>
                      <Button
                        variant='link'
                        className='text-zion-cyan p-0'
                        asChild
                      >
                        <Link href={`/case-studies/${testimonial.slug}`}>
                          Read Case Study →
                        </Link>
origin/cursor/automate-test-improve-and-merge-code-2533
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">"
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />"
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />"
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
<div className='flex justify-center mt-8 gap-2'>
              <CarouselPrevious className='relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple' />
              <CarouselNext className='relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple' />
origin/cursor/automate-test-improve-and-merge-code-2533
            </div>
          </Carousel>
        </div>
      </div>
    </section>
        </div>
      </div>
          <p className='text - zion - slate - light text - lg max - w-2xl mx - auto'>;
          </p>;
        </div>;
        <div className='max - w-5xl mx - auto px - 8'>;
          <Carousel;
pr-12325

            opts={{
              align: 'start,
  loop: true;
            }}


            className='w - full';
          >;

            <CarouselContent>;

export default TestimonialCarousel;
            </CarouselContent>;
            <div className='flex justify-center mt-8 gap-2'>;
              <CarouselPrevious className='relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple' />;
              <CarouselNext className='relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple' />            </div>            <div className="flex justify-center mt-8 gap-2">;
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;",
                            loading='lazy';
                        </Avatar>;
                        <div className='text - center md:text - left'>;
                          <p className='font - bold text - zion - cyan'>;
                            {testimonial.author}
                          </p>;
                          <p className='text - zion - slate - light text - sm'>;
                            {testimonial.role}
                          </p>;
                        </div>;
                      </div>;
                      <div className='flex - 1'>;
                        <div className='flex items - center gap - 3 mb - 4'>                          <Image;
                      <div className="flex - 1">;
                        <div className="flex items - center gap - 3 mb - 4">;
                          />;
                        </Avatar>;
                        <div className="text - center md:text - left">;
                          <p className="font - bold text - zion - cyan">{testimonial.author}</p>;
                          <p className="text - zion - slate - light text - sm">{testimonial.role}</p>;
                        </div>;
                      </div>;
                      <div className="flex - 1">;
                        <div className="flex items - center gap - 3 mb - 4">;
                          <Image;
                            src={testimonial.company_logo}
                            alt={`${testimonial.company} logo`}`
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;
                <CarouselItem key={index} className='md:basis - 1/1 lg:basis - 1/1'>;

                  <Card className='bg - zion - blue - light border border - zion - purple / 20 hover:border - zion - purple / 40 transition - all duration - 300 flex flex - col'>;

                    <CardContent className='p - 8 flex flex - col md:flex - row gap - 6 flex - 1'>;

                      <div className='flex - shrink - 0 flex flex - col items - center'>;
</div>)
                        <Avatar className='h - 20 w - 20 border - 2 border - zion - cyan mb - 3'>                          <Image              {testimonials.map ((testimonial, index) => (

                <CarouselItem key={index} className="md:basis - 1/1 lg:basis - 1/1">;"
"
                  <Card className="bg - zion - blue - light border border - zion - purple / 20 hover:border - zion - purple / 40 transition - all duration - 300 flex flex - col">;"
                    <CardContent className="p - 8 flex flex - col md:flex - row gap - 6 flex - 1">;"
                      <div className="flex - shrink - 0 flex flex - col items - center">;"
                        <Avatar className="h - 20 w - 20 border - 2 border - zion - cyan mb - 3">;"

                <CarouselItem key={index} className='md:basis-1/1 lg:basis-1/1'>;

                  <Card className='bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col'>;

                    <CardContent className='p-8 flex flex-col md:flex-row gap-6 flex-1'>;

                      <div className='flex-shrink-0 flex flex-col items-center'>;
                        <Avatar className='h-20 w-20 border-2 border-zion-cyan mb-3'>                          <Image              {testimonials && testimonials.map((testimonial, index) => (;

                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">;"
                  <Card className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col">;"
                    <CardContent className="p-8 flex flex-col md:flex-row gap-6 flex-1">;"
                      <div className="flex-shrink-0 flex flex-col items-center">;"
                        <Avatar className="h-20 w-20 border-2 border-zion-cyan mb-3">;"
pr-12325

                          <Image;


                            src={testimonial.avatar}
                            alt={testimonial.author}
                            width={80}
                            height={80}
                            loading="lazy""
                          />


                        <div className="text-center md:text-left">"
                          <p className="font-bold text-zion-cyan">{testimonial.author}</p>""
                          <p className="text-zion-slate-light text-sm">{testimonial.role}</p>"



                      <div className="flex-1">"
                        <div className="flex items-center gap-3 mb-4">"
                            src={testimonial && testimonial.companyLogo}
                            alt={`${testimonial && testimonial.company} logo`}
                            width={32}
                            height={32}


                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />"
                        <p className="text-white text-lg mb-6">"{testimonial.quote}"</p>"



                    <CardFooter className="p-6 pt-0">"
                      <Button variant="link" className="text-zion-cyan p-0" asChild>"
`;
                        <Link href={`/case-studies/${testimonial.slug}`}>Read Case Study →

            <div className="flex justify-center mt-8 gap-2">"
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />"
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />"






            ;"
            <div className='flex justify-center mt-8 gap-2'>;
              <CarouselPrevious className='relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple' />;

              <CarouselNext className='relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple' />            </div>            <div className="flex justify-center mt-8 gap-2">;"
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;"
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;"

                        <div className='text - center md:text - left'>;
                          <p className='font - bold text - zion - cyan'>;
                          <p className='text - zion - slate - light text - sm'>;
                      <div className='flex - 1'>;
                        <div className='flex items - center gap - 3 mb - 4'>                          <Image;
                      <div className="flex - 1">;"
                        <div className="flex items - center gap - 3 mb - 4">;"
                        <div className="text - center md:text - left">;"
                          <p className="font - bold text - zion - cyan">{testimonial.author}</p>;""
                          <p className="text - zion - slate - light text - sm">{testimonial.role}</p>;"
                      </div>;"
                            src={testimonial.company_logo}`;
                            alt={`${testimonial.company} logo`}
                            height={32}"
                            className='h - 8 w - auto';
                            loading='lazy';
                          <span className='text - white font - semibold'>;

                          </span>;
                        <Quote className='h - 10 w - 10 text - zion - cyan opacity - 30 mb - 3' />;

                        <p className='text - white text - lg mb - 6'>;
                    ;
                    <CardFooter className='p - 6 pt - 0'>;

                      <Button;
                        variant='link';
                        className='text - zion - cyan p - 0';
                        as_child;
                      >;
                        <Link href={`/case - studies/${testimonial.slug}`} />;`
                          Read Case Study →;
                        </Link>                      </Button>;
                    <CardFooter className="p - 6 pt - 0">;
                      <Button variant="link" className="text - zion - cyan p - 0" as_child>;
                        <Link href={`/case - studies/${testimonial.slug}`} />Read Case Study →</Link>;`
                          />;
                          <span className="text - white font - semibold">{testimonial.company}</span>;
                        </div>;
                        <Quote className="h - 10 w - 10 text - zion - cyan opacity - 30 mb - 3" />;
                        <p className="text - white text - lg mb - 6">"{testimonial.quote}"</p>;
                      </div>;
                    </CardContent>;
                    <CardFooter className="p - 6 pt - 0">;
                      <Button variant="link" className="text - zion - cyan p - 0" as_child>;
                        <Link href={`/case - studies/${testimonial.slug}`} />Read Case Study →</Link>;`
                      </Button>;
                    </CardFooter>;
                  </Card>;
                </CarouselItem>))}
            </CarouselContent>;
            <div className='flex justify - center mt - 8 gap - 2'>;
              <CarouselPrevious className='relative static left - 0 translate - y-0 bg - zion - blue - dark border - zion - purple / 30 text - zion - cyan hover:bg - zion - blue - light hover:text - zion - cyan hover:border - zion - purple' />;
              <CarouselNext className='relative static right - 0 translate - y-0 bg - zion - blue - dark border - zion - purple / 30 text - zion - cyan hover:bg - zion - blue - light hover:text - zion - cyan hover:border - zion - purple' />            </div>            <div className="flex justify - center mt - 8 gap - 2">;
              <CarouselPrevious className="relative static left - 0 translate - y-0 bg - zion - blue - dark border - zion - purple / 30 text - zion - cyan hover: bg - zion - blue - light hover:text - zion - cyan hover:border - zion - purple" />;
              <CarouselNext className="relative static right - 0 translate - y-0 bg - zion - blue - dark border - zion - purple / 30 text - zion - cyan hover:bg - zion - blue - light hover:text - zion - cyan hover:border - zion - purple" />;
  )
                            className="h-8 w-auto";
                            loading="lazy";
                          />;
                          <span className="text-white font-semibold">{testimonial.company}</span>;
                        </div>;
                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />;
                        <p className="text-white text-lg mb-6">"{testimonial.quote}"</p>;
                      </div>;
                    </CardContent>;
                    <CardFooter className="p-6 pt-0">;
                      <Button variant="link" className="text-zion-cyan p-0" asChild>;
                        <Link href={`/case-studies/${testimonial.slug}`}>Read Case Study →</Link>;
                      </Button>;
                    </CardFooter>;
                  </Card>;
                </CarouselItem>;
              ))}
            </CarouselContent>;
            <div className="flex justify-center mt-8 gap-2">;
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;
            </div>;
          </Carousel>;
        </div>;
      </div>;
                        <Link href={`/case - studies/${testimonial.slug}`}>;

                    <CardFooter className="p - 6 pt - 0">;"
                      <Button variant="link" className="text - zion - cyan p - 0" as_child>;"
                        <Link href={`/case - studies/${testimonial.slug}`}>Read Case Study →;"
                          <span className="text - white font - semibold">{testimonial.company}</span>;"
                        <Quote className="h - 10 w - 10 text - zion - cyan opacity - 30 mb - 3" />;"
                        <p className="text - white text - lg mb - 6">"{testimonial.quote}"</p>;"
                        <Link href={`/case - studies/${testimonial.slug}`}>Read Case Study →;
                  ;)
                ))}
            <div className='flex justify - center mt - 8 gap - 2'>;
              <CarouselPrevious className='relative static left - 0 translate - y-0 bg - zion - blue - dark border - zion - purple / 30 text - zion - cyan hover:bg - zion - blue - light hover:text - zion - cyan hover:border - zion - purple' />;

              <CarouselNext className='relative static right - 0 translate - y-0 bg - zion - blue - dark border - zion - purple / 30 text - zion - cyan hover:bg - zion - blue - light hover:text - zion - cyan hover:border - zion - purple' />            </div>            <div className="flex justify - center mt - 8 gap - 2">;"
              <CarouselPrevious className="relative static left - 0 translate - y-0 bg - zion - blue - dark border - zion - purple / 30 text - zion - cyan hover: bg - zion - blue - light hover:text - zion - cyan hover:border - zion - purple" />;"
              <CarouselNext className="relative static right - 0 translate - y-0 bg - zion - blue - dark border - zion - purple / 30 text - zion - cyan hover:bg - zion - blue - light hover:text - zion - cyan hover:border - zion - purple" />;"


  );
}
    </section>);
}
)))))
    </section>;
  );
}
;
origin/cursor/expand-services-advertise-and-build-project-c28b
main
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
export default TestimonialCarousel;
pr-12243
    </section>);"`;
pr-12325
