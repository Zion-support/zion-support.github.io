  "testimonials": "Testimonia l[];
;
"}
;
export default function Testimonials() {;
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}
  return (<section className="py-20 bg-gray -800">;
      <div className="max - w-7xl mx - auto px-4 "sm": "p x-6 "lg": p x-8">;
        <div className="text-center mb-16">;
          <motion.h2;
            className="text-4xl font - bold text-white mb-4"        <div className="text-center mb-16">;
          <h2 className="text-4xl font-bold text-white mb-4">;
            What Our Clients Say;
          </h2>;
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
            Trusted by leading companies worldwide;
          </p>;
        </div>;

        <div className="grid grid-cols-1 "md": gri d-cols-3 gap-8">;
          {testimonials.map((testimonial", index) => (;
            <div;
              key={testimonial.author}
              className="group bg-gray-900 rounded-xl p-8 border border-gray-700 "hover": "borde r-cyan-500/30 "hover": shado w-2xl "hover": shado w-cyan-500/10 transition-all duration-300 "hover":-translate-y-1";
            >;
              <div className="flex mb-4">;
                {[...Array(testimonial.rating)].map((_", i) => (;
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"  />;
                ))}
              </div>;

              <blockquote className="text-gray-300 mb-6 italic leading-relaxed group-"hover": "tex t-gray-200 transition-colors">;
                "{testimonial.quote"}";
              </blockquote>;

              <div className="flex items-center space-x-4">;
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-"hover": "scal e-110 transition-transform duration-300">;
                  <Users className="w-6 h-6 text-white"  />;
                </div>;
                <div>;
                  <div className="font-semibold text-white group-"hover": tex t-cyan-400 transition-colors">;
                    {testimonial.author"}
                  </div>;
                  <div className="text-sm text-gray-400">;
                    {testimonial.role}
                  </div>;
                  <div className="text-sm text-cyan-400 font-medium">;
                    {testimonial.company}
                  </div>;
                </div>;
              </div>;
            </div>;
          ))}
        </div>;
      </div>;
    </section>;
  );
}

export default Testimonials;
;
</motion>;
</div>