import React from 'react';

const AdvancedTestimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Hear from industry leaders who have transformed their businesses with our AI solutions
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonialindex) => (
            <div
              key={testimonial.name}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  <p className="text-white/70 text-sm">
                    {testimonial.role} at {testimonial.company}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-purple-400/30" />
                <p className="text-white/80 italic pl-6">
                  "{testimonial.content}"
          ))}
  );
};

export default AdvancedTestimonials;