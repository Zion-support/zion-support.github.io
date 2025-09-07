import React from \"react\";
import {Star} from \"lucide-react\";
import {Card, CardContent, CardFooter} from \"@/components/ui/card\";
import {Star} from \"lucide-react\";
import {Card, CardContent, CardFooter} from \"@/components/ui/card\";
import React from \"react\",
import { Star } from \"lucide-react\",
import { Card, CardContent, CardFooter } from \"@/components/ui/card\",
const testimonials = [
  {
    name: \"name\",
    role: \"AI Developer\"
    text: \"The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!\"}
    rating: 5;}
    avatar: \"/placeholder.svg\"  }
  {
    name: \"Sarah Williams\"
    role: \"Tech Recruiter\"
    text: \"As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.\";  {
    name: \"Michael Chen\"
    role: \"Full Stack Developer\"
    text: \"I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.\"
    rating: 4;}
avatar: \"/placeholder.svg\"}
  }                    <Star;
key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? \"text-yellow-400 fill-yellow-400\" : \"text-gray-400\"}`}
                    />
                  ))}
                </div>
                <p className=\"text-gray-200 mb-6\" />\"{testimonial.text}\"</p>
              </CardContent>
              <CardFooter className=\"border-t border-zion-purple/20 pt-4\" />
                <div className=\"flex items-center\" />
                  <div className=\"h-10 w-10 rounded-full overflow-hidden mr-4\" />
                    <img src={testimonial.avatar} alt={testimonial.name} className=\"h-full w-full object-cover\" />
                  </div>
                  <div />
                    <p className=\"font-semibold text-white\" />{testimonial.name}</p>
                    <p className=\"text-sm text-gray-400\" />{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
import React from \"react\";
import { Star } from \"lucide-react\";
import { Card, CardContent, CardFooter } from \"@/components/ui/card\",;
    <section className=\"py-16 bg-zion-blue\" />;
      <div className=\"container mx-auto px-4\" />;
        <div className=\"text-center mb-12\" />;
          <h2 className=\"text-3xl md:text-4xl font-bold mb-4\" />What Our Users Say</h2>;
          <p className=\"text-lg text-gray-300 max-w-2xl mx-auto\" />;
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.;
          </p>;
        </div>;                      key={i}
                      className={`h-5 w-5 ${i < testimonial && testimonial.rating ? \"text-yellow-400 fill-yellow-400\" : \"text-gray-400\"}`}
                    />;
                  ))}
                </div>;
                <p className=\"text-gray-200 mb-6\" />\"{testimonial && testimonial.text}\"</p>;






import React from "react";""
import {Star} from "lucide-react";""
import {Card, CardContent, CardFooter} from "@/components/ui/card";""
import React from "react";""
import {Star} from "lucide-react";""
import {Card, CardContent, CardFooter} from "@/components/ui/card";""
import React from "react",""
import { Star } from "lucide-react",""
import { Card, CardContent, CardFooter } from "@/components/ui/card","
const testimonials = [
  {"
    name: "Alex Johnson"","
  role: "AI Developer"""
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!"",
  rating: 5;"
    avatar: "/placeholder.svg"""
import React from './react';''
import { Star } from './lucide-react';''
import { Card, CardContent, CardFooter } from '@/components / ui / card';'
const testimonials = [;
  {'
    name: "Alex Johnson",""
    role: "AI Developer",""
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!","
    rating: 5,"
    avatar: "/placeholder.svg";"
  }
  {"
    name: "Sarah Williams"","
  role: "Tech Recruiter"""
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.";"
  },
  {"
    name: "Sarah Williams",""
    role: "Tech Recruiter",""
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.","
    rating: 5,"
    avatar: "/placeholder.svg""
  },


  {"
    name: "Michael Chen"","
  role: "Full Stack Developer"""
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful."",
  rating: 4;"
    avatar: "/placeholder.svg""
  }

]
],



export const AppTestimonials: React.FC = () => {
  return ("
    <section className="py-16 bg-zion-blue">"
</section>"
      <div className="container mx-auto px-4">"
</div>"
        <div className="text-center mb-12">"
</div>"
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>""
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">"
</p>
          </p>
        </div>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">"
</div>"
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30">"
</Card>"
              <CardContent className="pt-6">"
</CardContent>"
                <div className="flex mb-4">"
</div>
                    <Star;
                      key={i}"
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}"
                    />
</Star>
                </div>"
                <p className="text-gray-200 mb-6">"{testimonial.text}"</p>"
              </CardContent>"
              <CardFooter className="border-t border-zion-purple/20 pt-4">"
</CardFooter>"
                <div className="flex items-center">"
</div>"
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">"
</div>"
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />"
</img>
                  </div>
                  <div>
</div>"
                    <p className="font-semibold text-white">{testimonial.name}</p>""
                    <p className="text-sm text-gray-400">{testimonial.role}</p>"
                  </div>
                </div>
              </CardFooter>
            </Card>"
    <section className="py-16 bg-zion-blue">;"
</section>"
      <div className="container mx-auto px-4">;"
</div>"
        <div className="text-center mb-12">;"
</div>"
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>;""
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;"
</p>
          </p>;
        </div>;"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;"
</div>"
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30">;"
</Card>"
              <CardContent className="pt-6">;"
</CardContent>"
                <div className="flex mb-4">;"
</div>
                    <Star;
                      key={i}"
                      className={`h-5 w-5 ${i < testimonial && testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}"
                    />;
</Star>
                </div>;"
                <p className="text-gray-200 mb-6">"{testimonial && testimonial.text}"</p>;"
              </CardContent>;"
              <CardFooter className="border-t border-zion-purple/20 pt-4">;"
</CardFooter>"
                <div className="flex items-center">;"
</div>"
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">;"
</div>"
                    <img src={testimonial && testimonial.avatar} alt={testimonial && testimonial.name} className="h-full w-full object-cover" />;"
</img>
                  </div>;
                  <div>;
</div>"
                    <p className="font-semibold text-white">{testimonial && testimonial.name}</p>;""
                    <p className="text-sm text-gray-400">{testimonial && testimonial.role}</p>;"
                  </div>;
                </div>;
              </CardFooter>;
            </Card>;
        </div>;
      </div>;
    </section>;"
    <section className="py - 16 bg - zion - blue">;"
</section>"
      <div className="container mx - auto px - 4">;"
</div>"
        <div className="text - center mb - 12">;"
</div>"
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">What Our Users Say</h2>;""
          <p className="text - lg text - gray - 300 max - w-2xl mx - auto">;"
</p>
          </p>;
        </div>;"
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;"
</div>"
            <Card key={index} className="bg - zion - blue - dark border - zion - purple / 30">;"
</Card>"
              <CardContent className="pt - 6">;"
</CardContent>"
                <div className="flex mb - 4">;"
</div>
                    <Star;
                      key={i}"
                      className={`h - 5 w - 5 ${i < testimonial.rating ? "text - yellow - 400 fill - yellow - 400" : "text - gray - 400"}`}")
                    />))}
</Star>
                </div>;"
                <p className="text - gray - 200 mb - 6">"{testimonial.text}"</p>;"
              </CardContent>;"
              <CardFooter className="border - t border - zion - purple / 20 pt - 4">;"
</CardFooter>"
                <div className="flex items - center">;"
</div>"
                  <div className="h - 10 w - 10 rounded - full overflow - hidden mr - 4">;"
</div>"
                    <img src={testimonial.avatar} alt={testimonial.name} className="h - full w - full object - cover" />;"
</img>
                  </div>;
                  <div>;
</div>"
                    <p className="font - semibold text - white">{testimonial.name}</p>;""
                    <p className="text - sm text - gray - 400">{testimonial.role}</p>;"
                  </div>;
                </div>;
              </CardFooter>;
            </Card>))}
        </div>;
      </div>;
    </section>);"
  return (<section className="py-16 bg-zion-blue" > <div className="container mx-auto px-4" > <div className="text-center mb-12" > <h2 className="text-3xl md:text-4xl font-bold mb-4" >What Our Users Say</h2> <p className="text-lg text-gray-300 max-w-2xl mx-auto" >"
</section>)
}</div> </div> </section>) 
        </div>;
      </div>;
    </section>;"

