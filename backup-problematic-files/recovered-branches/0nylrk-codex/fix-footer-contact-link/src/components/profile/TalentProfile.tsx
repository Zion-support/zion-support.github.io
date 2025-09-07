
import React from "react",;""
import { Handshake, MessageSquare, Star } from "lucide-react",;""
import { Button } from "@/components/ui/button",;"
;"
import { HireNowCTA } from "./HireNowCTA",;""
import { ProfileHero } from "./ProfileHero",;""
import { ProfileSkills } from "./ProfileSkills",;""
import { ProfileExperience } from "./ProfileExperience",;""
import { ProfileProjects } from "./ProfileProjects",;""
import { ProfileAvailability } from "./ProfileAvailability",;""
import { ProfileContact } from "./ProfileContact",;""
import { ProfileRatings } from "./ProfileRatings",;""
import { TalentProfile as TalentProfileType } from "@/types/talent",;""
import { useAuth } from "@/hooks/useAuth",;""
import { Availability } from "@/types/profile",;"
;
interface TalentProfileProps {;
  profile:TalentProfileType,;
  onRequestHire:() => void,;
  onMessageTalent?:() => void;
}
;
export function TalentProfile({ ;
  profile,;
  onRequestHire,;
  onMessageTalent;)
} TalentProfileProps) {;
  const { isAuthenticated } = useAuth(),;
  ;
  // Create proper availability object from talent profile;
  const availability: Availability = {;,"
  status:profile.availability_type === 'full_time' ? 'available' :;''
            profile.availability_type === 'part_time' ? 'limited' :'unavailable',;'
    message:`${profile.professional_title} with ${profile.years_experience} years of experience`;
  },;
  ;
  // Create proper skills array for ProfileSkills component;
  const skillsArray = profile.skills?.map(skill => ({;
    name:skill,;'
    level:3 // Default level since we don't have this data;')
  })) || [],;
  ;
  // Create proper projects array for ProfileProjects component;
  const projectsArray = profile.key_projects?.map((proj, i) => ({;
    id:`project-${i}`,;
    title:proj.title,;
    description:proj.description,;)'
    date:new Date().toISOString() // Default date since we don't have this data;'
  })) || [],;
  ;
  return (;'
    <div className="container mx-auto px-4 py-8">;"
</div>
      <ProfileHero;
        name={profile.full_name}
        title={profile.professional_title}
        avatarUrl={profile.profile_picture_url}"
        profileType="talent";"
        rating={profile.average_rating}
        reviewCount={profile.rating_count}
      />;
</ProfileHero>"
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">;"
</div>"
        <div className="space-y-8">;"
</div>
          <ProfileSkills skills={skillsArray} />;
</ProfileSkills>
          <ProfileAvailability availability={availability} />;
</ProfileAvailability>
          <ProfileContact ;
            email={profile.user_id}
            profileName={profile.full_name}"
            profileType="talent";"
          />;
</ProfileContact>
        </div>;"
        <div className="lg:col-span-2 space-y-8">;"
</div>"
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">;"
</div>"
            <h2 className="text-xl font-bold text-white mb-4">About {profile.full_name}</h2>;""
            <div className="prose prose-invert max-w-none">;"
</div>"
              <p className="text-zion-slate whitespace-pre-wrap">{profile.bio}</p>;"
            </div>;
          </div>;
          <ProfileProjects projects={projectsArray} />;
</ProfileProjects>"
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">;"
</div>"
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">;"
</h2>"
              <Star className="mr-2 h-5 w-5 text-yellow-400" />;"
</Star>
            </h2>;
            <ProfileRatings ;
              userId={profile.id}
              averageRating={profile.average_rating}
              ratingCount={profile.rating_count}
            />;
</ProfileRatings>
          </div>;"
            <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6 mb-8">;"
</div>"
              <div className="flex flex-col items-center text-center">;"
</div>"
                <h3 className="text-xl font-bold text-white mb-2">Ready to collaborate?</h3>;""
                <p className="text-zion-slate mb-6 max-w-md">;"
</p>
                </p>;"
                <div className="flex flex-wrap gap-4 justify-center">;"
</div>
                  <Button ;"
                    size="lg" ;""
                    className="bg-zion-purple text-white hover:bg-zion-purple-dark";"
                    onClick={onRequestHire}
                  >;
</Button>"
                    <Handshake className="mr-2 h-5 w-5" />;"
</Handshake>
                  </Button>;
                    <Button ;"
                      size="lg" ;""
                      variant="outline";""
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";"
                      onClick={onMessageTalent}
                    >;
</Button>"
                      <MessageSquare className="mr-2 h-5 w-5" />;"
</MessageSquare>)
                    </Button>;                  )}
                </div>;
              </div>;
            </div>;
        </div>;
      </div>;
    </div>;"