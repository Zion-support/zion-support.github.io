
import {_Carousel, _CarouselContent, _CarouselItem, _CarouselNext, _CarouselPrevious} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

const _testimonials = CASE_STUDIES;

export function TestimonialCarousel() {_return (_<section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-3">What Our Users Say</h3>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Discover how Zion is transforming the tech and AI marketplace ecosystem
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto px-8">
          <Carousel
            opts={{
              align: "start", _loop: true}}
            className="w-full"
          >
            <CarouselContent>
              {_testimonials.map((testimonial, _index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <Card className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col">
                    <CardContent className="p-8 flex flex-col md:flex-row gap-6 flex-1">
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <Avatar className="h-20 w-20 border-2 border-zion-cyan mb-3">
                          <Image
                            src={_testimonial.avatar}
                            alt={_testimonial.author}
                            width={_80}
                            height={_80}
                            loading="lazy"
                          />
                        </Avatar>
                        <div className="text-center md:text-left">
                          <p className="font-bold text-zion-cyan">{_testimonial.author}</p>
                          <p className="text-zion-slate-light text-sm">{_testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Image
                            src={_testimonial.companyLogo}
                            alt={_`${testimonial.company} logo`}
                            width={_32}
                            height={_32}
                            className="h-8 w-auto"
                            loading="lazy"
                          />
                          <span className="text-white font-semibold">{_testimonial.company}</span>
                        </div>
                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />
                        <p className="text-white text-lg mb-6">"{_testimonial.quote}"</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="link" className="text-zion-cyan p-0" asChild>
                        <Link href={_`/case-studies/${testimonial.slug}`}>Read Case Study →</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
