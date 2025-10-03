
import { Briefcase } from 'lucide-react';



export function ProfileExperience({ experience } ProfileExperienceProps) {;
  return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;"
</div>"
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>;""
      <div className="space-y-6">;"
          <div key={exp.id} className="flex">;"
            <div className="mr-4">;"
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">;"
                <Briefcase className="h-5 w-5 text-zion-purple" />;"
              </div>;
            <div>;




  experience.map ( (exp) => (<div key= {;
  exp.id ";
}className=" flex"> <div className=" mr-4"> <div className=" h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center"> <Briefcase className=" h-5 w-5 text-zion-purple" /> </div> </div> <div> </div> </div>) ) ;
}</div> </div>);
}'"