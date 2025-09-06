=======
import {  Carousel,
  Carousel,

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious} from "@/components/ui/carousel",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { Avatar } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Quote } from 'lucide-react'
import Link from "next/link",
import Image from "next/image",
import { CASE_STUDIES } from "@/data/case-studies",
onst testimonials = CASE_STUDIES,
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea


const testimonials = CASE_STUDIES,


                            src={testimonial.avatar}
                            alt={testimonial.author}
                            width={80}
                            height={80}

                        </Avatar>
                        <div className="text-center md:text-left">
                          <p className="font-bold text-zion-cyan">{testimonial.author}</p>
                          <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Image
                            src={testimonial && testimonial.companyLogo}
                            alt={`${testimonial && testimonial.company} logo`}
                            width={32}
                            height={32}

                        </div>
                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />
                        <p className="text-white text-lg mb-6">"{testimonial.quote}"</p>
                      </div>
                    </CardContent>

                    <CardFooter className="p-6 pt-0">
                      <Button variant="link" className="text-zion-cyan p-0" asChild>
                        <Link href={`/case-studies/${testimonial.slug}`}>Read Case Study →</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
            </div>
          </Carousel>
        </div>

<<<<<<< HEAD
                            className="h-8 w-auto";
                            loading="lazy";
                          />;
                          <span className="text-white font-semibold">{testimonial.company}</span>;
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
                            alt={`${testimonial.company} logo`}
                            width={32}
                            height={32}
                            className='h - 8 w - auto';
                            loading='lazy';
                          <span className='text - white font - semibold'>;
                            {testimonial.company}
                          </span>;
                        </div>;
                        <Quote className='h - 10 w - 10 text - zion - cyan opacity - 30 mb - 3' />;
                        <p className='text - white text - lg mb - 6'>;
                          "{testimonial.quote}";
                        </p>;
                      </div>;
                    </CardContent>;
                    <CardFooter className='p - 6 pt - 0'>;
                      <Button;
                        variant='link';
                        className='text - zion - cyan p - 0';
                        as_child;
                      >;
                        <Link href={`/case - studies/${testimonial.slug}`}>;
                          Read Case Study →;
                        </Link>                      </Button>;
                    <CardFooter className="p - 6 pt - 0">;
                      <Button variant="link" className="text - zion - cyan p - 0" as_child>;
                        <Link href={`/case - studies/${testimonial.slug}`}>Read Case Study →</Link>;
                          />;
                          <span className="text - white font - semibold">{testimonial.company}</span>;
                        </div>;
                        <Quote className="h - 10 w - 10 text - zion - cyan opacity - 30 mb - 3" />;
                        <p className="text - white text - lg mb - 6">"{testimonial.quote}"</p>;
                      </div>;
                    </CardContent>;
                    <CardFooter className="p - 6 pt - 0">;
                      <Button variant="link" className="text - zion - cyan p - 0" as_child>;
                        <Link href={`/case - studies/${testimonial.slug}`}>Read Case Study →</Link>;
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

            </div>;
          </Carousel>;
        </div>;
      </div>;


  );
}
;
