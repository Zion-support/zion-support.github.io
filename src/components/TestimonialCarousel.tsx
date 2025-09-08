import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="flex items-center justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-6 h-6 ${
                i < currentTestimonial.rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <div className='max-w-5xl mx-auto px-8'>
          <Carousel
            opts={{
              align: 'start'
              loop: true
            }}
            className='w-full'
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className='md:basis-1/1 lg:basis-1/1'>
                  <Card className='bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col'>
                    <CardContent className='p-8 flex flex-col md:flex-row gap-6 flex-1'>
                      <div className='flex-shrink-0 flex flex-col items-center'>
                        <Avatar className='h-20 w-20 border-2 border-zion-cyan mb-3'>                          <Image              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <Card className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col">
                    <CardContent className="p-8 flex flex-col md:flex-row gap-6 flex-1">
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <Avatar className="h-20 w-20 border-2 border-zion-cyan mb-3">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.author}
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
                          <Image
                            src={testimonial.companyLogo}
                            alt={`${testimonial.company} logo`}
                            width={32}
                            height={32}
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
                        asChild><Link href={`/case-studies/${testimonial.slug}`}>
                          Read Case Study →
                        </Link>                      </Button>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="link" className="text-zion-cyan p-0" asChild>
                        <Link href={`/case-studies/${testimonial.slug}`}>Read Case Study →</Link>
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
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className='flex justify-center mt-8 gap-2'>
              <CarouselPrevious className='relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple' />
              <CarouselNext className='relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple' />            </div>            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
            </div>
            <div className="text-gray-600">
              {currentTestimonial.role} at {currentTestimonial.company}
      
      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={prevTestimonial}
          className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
