import { ProfileExperience as ProfileExperienceType } from "@/types/profile";import { Briefcase } from "lucide-react";
interface ProfileExperienceProps {

import { ProfileExperience, as, ProfileExperienceType } from "@/types/profile";""
import { Briefcase } from "lucide-react";"
interface ProfileExperienceProps {
  // TODO: Implement
}
  experience: ProfileExperienceType[];
}

interface ProfileExperienceProps {
  experience: ProfileExperienceType[];
}
export function ProfileExperience({ experience }: ProfileExperienceProps) {
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>

      <div className="space-y-6">
        {experience.map((exp) => (
          <div key={exp.id} className="flex">
            <div className="mr-4">
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-zion-purple" />
  // TODO: Implement
}
  experience: ProfileExperienceType[];
}
export function ProfileExperience({ experience }: ProfileExperienceProps) {
  return ("
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">"
</div>"
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>""
      <div className="space-y-6">"
</div>"
          <div key={exp.id} className="flex">"
</div>"
            <div className="mr-4">"
</div>"
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">"
</div>"
                <Briefcase className="h-5 w-5 text-zion-purple" />"
</Briefcase>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium">{exp.role}</h4>
              <div className="text-zion-cyan mb-1">{exp.company}</div>
              <div className="text-sm text-zion-slate-light mb-2">
                {exp.startDate} - {exp.current ? "Present" : exp.endDate}
              </div>
              <p className="text-zion-slate">{exp.description}</p>
            </div>
          </div>

import {ProfileExperience, as, ProfileExperienceType} from "@/types/profile";
import {Briefcase} from "lucide-react";
interface ProfileExperienceProps {;
  experience: ProfileExperienceType[];
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",;
import { Briefcase } from "lucide-react";
interface ProfileExperienceProps {;
  experience: ProfileExperienceType[];
}
import { ProfileExperience, as, ProfileExperienceType } from "@/types/profile";""
import { Briefcase } from "lucide-react";"
interface ProfileExperienceProps {
  // TODO: Implement
}
  experience: ProfileExperienceType[];

  // TODO: Implement
export function ProfileExperience({ experience }: ProfileExperienceProps) {
  return ("
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">"
</div>"
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>""
      <div className="space-y-6">"
          <div key={exp.id} className="flex">"
            <div className="mr-4">"
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">"
                <Briefcase className="h-5 w-5 text-zion-purple" />"

              </div>

            <div>
              <h4 className="text-white font-medium">{exp.role}</h4>""
              <div className="text-zion-cyan mb-1">{exp.company}</div>""
              <div className="text-sm text-zion-slate-light mb-2">"
              <p className="text-zion-slate">{exp.description}</p>"
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;"
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>;""
      <div className="space-y-6">;"
          <div key={exp.id} className="flex">;"
            <div className="mr-4">;"
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">;"
                <Briefcase className="h-5 w-5 text-zion-purple" />;"

              </div>;
            <div>;
              <h4 className="text-white font-medium">{exp.role}</h4>;""
              <div className="text-zion-cyan mb-1">{exp.company}</div>;""
              <div className="text-sm text-zion-slate-light mb-2">;"
              </div>;"
              <p className="text-zion-slate">{exp.description}</p>;"
          <div key={exp && exp.id} className="flex">;"

              <h4 className="text-white font-medium">{exp && exp.role}</h4>;""
              <div className="text-zion-cyan mb-1">{exp && exp.company}</div>;""
              <p className="text-zion-slate">{exp && exp.description}</p>;"
  return (<div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8" > <h3 className="text-xl font-bold text-white mb-4" >Experience</h3> space-y-6"> {"
</div>)
  experience.map ( (exp) => (<div key= {
  exp.id;)"
}className=" flex"> <div className=" mr-4"> <div className=" h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center"> <Briefcase className=" h-5 w-5 text-zion-purple" /> </div> </div> <div> </div> </div>) )"
}</div> </div>) "
    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8">;"
      <h3 className="text - xl font - bold text - white mb - 4">Experience</h3>;""
      <div className="space - y-6">;"
            <div className="mr - 4">;"
              <div className="h - 10 w - 10 rounded - full bg - zion - purple / 20 flex items - center justify - center">;"
                <Briefcase className="h - 5 w - 5 text - zion - purple" />;"

              <h4 className="text - white font - medium">{exp.role}</h4>;""
              <div className="text - zion - cyan mb - 1">{exp.company}</div>;""
              <div className="text - sm text - zion - slate - light mb - 2">;"
              <p className="text - zion - slate">{exp.description}</p>;"
          </div>))}
    </div>);"

}</div> </div>) 
pr-12325
      </div>
    </div>"

