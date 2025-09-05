
import { ProfileExperience as ProfileExperienceType } from &quot;@/types/profile&quot;;
import { Briefcase } from &quot;lucide-react&quot;;

interface ProfileExperienceProps {
  experience: ProfileExperienceType[];
}

export function ProfileExperience({ experience }: ProfileExperienceProps) {
  return (
    <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8&quot;>
      <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Experience</h3>
      
      <div className=&quot;space-y-6&quot;>
        {experience.map((exp) => (
          <div key={exp.id} className=&quot;flex&quot;>
            <div className=&quot;mr-4&quot;>
              <div className=&quot;h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center&quot;>
                <Briefcase className=&quot;h-5 w-5 text-zion-purple&quot; />
              </div>
            </div>
            
            <div>
              <h4 className=&quot;text-white font-medium&quot;>{exp.role}</h4>
              <div className=&quot;text-zion-cyan mb-1&quot;>{exp.company}</div>
              <div className=&quot;text-sm text-zion-slate-light mb-2&quot;>
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>
              <p className=&quot;text-zion-slate&quot;>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
