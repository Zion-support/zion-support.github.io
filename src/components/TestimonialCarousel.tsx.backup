<<<<<<< HEAD
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
=======
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
>>>>>>> origin/main

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'CTO at TechCorp',
        company: 'TechCorp Inc.',
        content: 'Zion Tech Group has revolutionized how we find AI talent. The platform is intuitive and the quality of candidates is exceptional. We\'ve reduced our hiring time by 60% while improving candidate quality.',
        avatar: '/avatars/sarah.jpg',
        rating: 5,
        category: 'Enterprise',
        project: 'AI Talent Acquisition'
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'AI Engineer',
        company: 'Freelance',
        content: 'As a freelancer, Zion Tech Group has opened up incredible opportunities. The marketplace is well-organized and the clients are top-tier. I\'ve doubled my income since joining the platform.',
        avatar: '/avatars/michael.jpg',
        rating: 5,
        category: 'Freelancer',
        project: 'Machine Learning Solutions'
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Global Enterprises",
      role: "IT Director",
      content: "Their cloud migration services were seamless. We moved our entire infrastructure to the cloud without any downtime.",
      rating: 5,
<<<<<<< HEAD
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
=======
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 4,
        name: 'David Kim',
        role: 'Startup Founder',
        company: 'DataFlow',
        content: 'Starting a tech company is challenging, but Zion Tech Group made it so much easier. We found the perfect team and equipment to get our MVP to market in record time.',
        avatar: '/avatars/david.jpg',
        rating: 5,
        category: 'Startup',
        project: 'SaaS Platform'
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "FutureSystems",
      role: "Operations Director",
      content: "The digital transformation services exceeded our expectations. Our processes are now 50% more efficient and our team is more productive.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
>>>>>>> origin/main
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
<<<<<<< HEAD
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            width={80}
                            height={80}
                            loading='lazy'
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
                        <div className='flex items-center gap-3 mb-4'>                          <Image
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
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
=======
      {/* Main Testimonial */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 text-blue-100">
          <Quote className="w-12 h-12" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Users Say</span>
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their businesses with Zion Tech Group
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div key={currentIndex} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
        }} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={1} onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
            }
            else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
            }
        }} className="absolute w-full">
              <div className="bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-zion-blue-light/30 shadow-2xl">
                <div className="text-center">
                  {/* Quote icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple mb-8 shadow-lg">
                    <Quote className="w-8 h-8 text-white"/>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (<Star key={i} className="w-6 h-6 text-yellow-400 fill-current"/>))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-zion-slate-light text-lg md:text-xl leading-relaxed mb-8 max-w-4xl mx-auto italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author info */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-white text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-zion-slate-light">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-blue-light/20 rounded-full border border-zion-cyan/30">
                    <span className="text-zion-cyan text-sm font-medium">
                      {testimonials[currentIndex].category}
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-cyan"/>
                    <span className="text-zion-slate-light text-sm">
                      {testimonials[currentIndex].project}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-zion-blue-dark/80 hover:bg-zion-blue-dark border border-zion-blue-light/30 hover:border-zion-cyan/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-zion-cyan/25 z-10" onClick={() => paginate(-1)}>
            <ChevronLeft className="w-6 h-6"/>
          </button>
          
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-zion-blue-dark/80 hover:bg-zion-blue-dark border border-zion-blue-light/30 hover:border-zion-cyan/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-zion-cyan/25 z-10" onClick={() => paginate(1)}>
            <ChevronRight className="w-6 h-6"/>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (<button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-zion-cyan scale-125'
                : 'bg-zion-slate-light/40 hover:bg-zion-slate-light/60'}`}/>))}
        </div>

        {/* Stats section */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          <div className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-cyan mb-2">98%</div>
            <div className="text-zion-slate-light text-sm">Satisfaction Rate</div>
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
            &ldquo;{currentTestimonial.content}&rdquo;
          </blockquote>

          {/* Author Info */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-blue-100">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>

            {/* Author Details */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-gray-900">
                {currentTestimonial.name}
              </h4>
              <p className="text-blue-600 font-medium">
                {currentTestimonial.role}
              </p>
              <p className="text-gray-500 text-sm">
                {currentTestimonial.company}
              </p>
>>>>>>> origin/main
            </div>
          </div>
          <div className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-cyan-light mb-2">24/7</div>
            <div className="text-zion-slate-light text-sm">Support Available</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-purple-light mb-2">100+</div>
            <div className="text-zion-slate-light text-sm">Countries Served</div>
          </div>
        </motion.div>
      </div>
<<<<<<< HEAD
      
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
=======

      {/* Navigation Controls */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        {/* Previous Button */}
        <button
          onClick={prevTestimonial}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 group"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextTestimonial}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 group"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
        </button>
      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
          <div className="text-gray-600">Happy Clients</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
          <div className="text-gray-600">Satisfaction Rate</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
          <div className="text-gray-600">Support Available</div>
        </div>
>>>>>>> origin/main
      </div>
    </div>
  );
};

export default TestimonialCarousel;