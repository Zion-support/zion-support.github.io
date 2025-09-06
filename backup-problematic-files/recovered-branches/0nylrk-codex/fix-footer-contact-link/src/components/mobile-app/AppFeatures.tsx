
=======
import React from "react",;
import { Brain, Clock, Award, Zap } from "lucide-react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
;
const features = [;
  {;
    icon:<Brain className="h-10 w-10 text-zion-cyan" />,;
    title:"AI Talent Matching",;
    description:"Our AI algorithm matches you with the perfect talent or job based on your skills and requirements.";
  },;
  {;
    icon:<Clock className="h-10 w-10 text-zion-cyan" />,;
    title:"1-Click Hiring",;
    description:"Streamlined hiring process that lets you connect with talent instantly with just one click.";
  },;
  {;
    icon:<Award className="h-10 w-10 text-zion-cyan" />,;
    title:"Resume Builder",;
    description:"Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired.";
  },;
  {;
    icon:<Zap className="h-10 w-10 text-zion-cyan" />,;
    title:"Real-time Notifications",;
    description:"Get instant alerts about new job opportunities, messages, and hiring requests." ;
  }
],;
;
export const AppFeatures:React.FC = () => {;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Everything you love about Zion, now in your pocket. Our mobile app brings all the powerful features you need to succeed.;
          </p>;
        </div>;
<<<<<<< HEAD

              </CardContent>;
            </Card>;
          ))}
        </div>;
      </div>;
    </section>;

