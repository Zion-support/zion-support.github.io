<<<<<<< HEAD

=======
import React from "react",;
import { Star } from "lucide-react",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
;
const testimonials = [;
  {;
    name:"Alex Johnson",;
    role:"AI Developer",;
    text:"The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!",;
    rating:5,;
    avatar:"/placeholder.svg";
  },;
  {;
    name:"Sarah Williams",;
    role:"Tech Recruiter",;
    text:"As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.",;
    rating:5,;
    avatar:"/placeholder.svg";
  },;
  {;
    name:"Michael Chen",;
    role:"Full Stack Developer",;
    text:"I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.",;
    rating:4,;
    avatar:"/placeholder.svg";
  }
],;
;
export const AppTestimonials:React.FC = () => {;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.;
          </p>;
        </div>;
<<<<<<< HEAD

              </CardContent>;
              <CardFooter className="border-t border-zion-purple/20 pt-4">;
                <div className="flex items-center">;
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">;

                  </div>;
                </div>;
              </CardFooter>;
            </Card>;
          ))}
        </div>;
      </div>;
    </section>;

=======
 const testimonials = [ {;
  name: "Alex Johnson",";"role: "AI Developer",";"text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!","rating: 5;";"avatar: "/placeholder.svg",
};"{";"  name: "Sarah Williams",";"role: "Tech Recruiter",";"text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.","rating: 5;";"avatar: "/placeholder.svg",
};"{";"  name: "Michael Chen",";"role: "Full Stack Developer",";"text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.","rating: 4;";"avatar: "/placeholder.svg",
}];"export const AppTestimonials: React.FC = () => {";"  return (<section className="py-16 bg-zion-blue" > <div className="container mx-auto px-4" > <div className="text-center mb-12" > <h2 className="text-3xl md:text-4xl font-bold mb-4" >What Our Users Say</h2> <p className="text-lg text-gray-300 max-w-2xl mx-auto" > ;
}</div> </div> </section>) ;
};"'"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
