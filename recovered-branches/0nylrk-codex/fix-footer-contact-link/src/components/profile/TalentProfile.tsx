interface TalentProfileProps {
  // TODO: Implement
}
  profile: TalentProfileType;,
  onRequestHire: () => void;
  onMessageTalent?: () => void;
import React from "react";""
import {Handshake, MessageSquare, Star} from "lucide-react";""
import {Button} from "@/components/ui/button";""
import {HireNowCTA} from "./HireNowCTA";""
import {ProfileHero} from "./ProfileHero";""
import {ProfileSkills} from "./ProfileSkills";""
import {ProfileExperience} from "./ProfileExperience";""
import {ProfileProjects} from "./ProfileProjects";""
import {ProfileAvailability} from "./ProfileAvailability";""
import {ProfileContact} from "./ProfileContact";""
import {ProfileRatings} from "./ProfileRatings";""
import {TalentProfile, as, TalentProfileType} from "@/types/talent";""
import {useAuth} from "@/hooks/useAuth";""
import {Availability} from "@/types/profile";"
interface TalentProfileProps {;
  profile: TalentProfileType,;
  onRequestHire: () => void,;

export function TalentProfile(): any ({ ;

  profile;
  onRequestHire;
  onMessageTalent;)
}: TalentProfileProps) {;
  const { isAuthenticated } = useAuth();




"
import React from "react",""
import { Handshake, MessageSquare, Star } from "lucide-react",""
import { Button } from "@/components/ui/button",""
import { HireNowCTA } from "./HireNowCTA",""
import { ProfileHero } from "./ProfileHero",""
import { ProfileSkills } from "./ProfileSkills",""
import { ProfileExperience } from "./ProfileExperience",""
import { ProfileProjects } from "./ProfileProjects",""
import { ProfileAvailability } from "./ProfileAvailability",""
import { ProfileContact } from "./ProfileContact",""
import { ProfileRatings } from "./ProfileRatings",""
import { TalentProfile as TalentProfileType } from "@/types/talent","
  // TODO: Implement
export function TalentProfile({
}: TalentProfileProps) {

export function TalentProfile({ ;
  profile,
  onRequestHire,
  const { isAuthenticated } = useAuth(),
  
  // Create proper availability object from talent profile;
  const availability: Availability = {,"
  status: profile.availability_type === 'full_time' ? 'available' :
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`


  },
  


  // Create proper skills array for ProfileSkills component;
  const skillsArray = profile.skills?.map(skill => ({
    name: skill;,
  level: 3 // Default level since we don't have this data;')
  })) || [],
  


  // Create proper projects array for ProfileProjects component;
  const projectsArray = profile.key_projects?.map((proj, i) => ({`;
    id: `project-${i}`
    title: proj.title;,
  description: proj.description;)
    date: new Date().toISOString() // Default date since we don't have this data;
  
  return (
    <div className="container mx-auto px-4 py-8">"
</div>"
    <div className="container mx-auto px-4 py-8">;"
</div>
      <ProfileHero;
        name={profile && profile.full_name}
        title={profile && profile.professional_title}
        avatarUrl={profile && profile.profile_picture_url}"
        profileType="talent""
        rating={profile && profile.average_rating}
        reviewCount={profile && profile.rating_count}
      />;
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">;"
        <div className="space-y-8">;"
          <ProfileSkills skills={skillsArray} />;

          <ProfileAvailability availability={availability} />;

          <ProfileContact;
            email={profile && profile.user_id}
            profileName={profile && profile.full_name}"

        </div>;"
        <div className="lg:col-span-2 space-y-8">;"
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">"
            <h2 className="text-xl font-bold text-white mb-4">About {profile.full_name}</h2>""
            <div className="prose prose-invert max-w-none">"
              <p className="text-zion-slate whitespace-pre-wrap">{profile.bio}</p>"
          <ProfileProjects projects={projectsArray} />
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">"
</h2>"
              <Star className="mr-2 h-5 w-5 text-yellow-400" />"

            </h2>
    <div className="container mx - auto px - 4 py - 8">;"
        name={profile.full_name}
        title={profile.professional_title}
        avatar_url={profile.profile_picture_url}"
        profile_type="talent";"
        rating={profile.average_rating}
        review_count={profile.rating_count}
      <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8 mt - 8">;"
        <div className="space - y-8">;"
          <ProfileSkills skills={skills_array} />;


            email={profile.user_id}
            profile_name={profile.full_name}"

        <div className="lg:col - span - 2 space - y-8">;"
          <div className="bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6">;"
            <h2 className="text - xl font - bold text - white mb - 4">About {profile.full_name}</h2>;""
            <div className="prose prose - invert max - w-none">;"
              <p className="text - zion - slate whitespace - pre - wrap">{profile.bio}</p>;"
            </div>;
          <ProfileProjects projects={projects_array} />;
            <h2 className="text - xl font - bold text - white mb - 4 flex items - center">;"
              <Star className="mr - 2 h - 5 w - 5 text - yellow - 400" />;"

            </h2>;
            <ProfileRatings;
              user_id={profile.id}
              average_rating={profile.average_rating}
              rating_count={profile.rating_count}

            <div className="bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6 mb - 8">;"
              <div className="flex flex - col items - center text - center">;"
                <h3 className="text - xl font - bold text - white mb - 2">Ready to collaborate?</h3>;""
                <p className="text - zion - slate mb - 6 max - w-md">;"
</p>"
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">;"
            <h2 className="text-xl font-bold text-white mb-4">About {profile && profile.full_name}</h2>;""
            <div className="prose prose-invert max-w-none">;"
              <p className="text-zion-slate whitespace-pre-wrap">{profile && profile.bio}</p>;"
          <ProfileProjects projects={projectsArray} />;
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">;"
              <Star className="mr-2 h-5 w-5 text-yellow-400" />;"

              userId={profile && profile.id}
              averageRating={profile && profile.average_rating}
              ratingCount={profile && profile.rating_count}

            <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6 mb-8">;"
              <div className="flex flex-col items-center text-center">;"
                <h3 className="text-xl font-bold text-white mb-2">Ready to collaborate?</h3>;""
                <p className="text-zion-slate mb-6 max-w-md">;"
</p>
                </p>;"
                <div className="flex flex-wrap gap-4 justify-center">;"
                  <Button;"
                    size="lg"""
                    className="bg-zion-purple text-white hover:bg-zion-purple-dark""
                    onClick={onRequestHire}>;
                    <Handshake className="mr-2 h-5 w-5" />;"

                  ;
                      variant="outline"""
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10""
                      onClick={onMessageTalent}>;
                      <MessageSquare className="mr-2 h-5 w-5" />;"

                <div className="flex flex - wrap gap - 4 justify - center">;"
                    size="lg";""
                    className="bg - zion - purple text - white hover:bg - zion - purple - dark";"
                    on_click={onRequestHire}
                  >;
                    <Handshake className="mr - 2 h - 5 w - 5" />;"

                      variant="outline";""
                      className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";"
                      on_click={onMessageTalent}
                      <MessageSquare className="mr - 2 h - 5 w - 5" />;"
)
                    )}
            </div>)}
    </div>);
return (</div> </div> {
}<ProfileProjects projects= {
  projectsArray;
}/> Reviews & Ratings </h2> <ProfileRatings userId= {

}/> </div> Connect with {"
}</p> <div className="flex flex-wrap gap-4 justify-center" > <Button > <Handshake className="mr-2 h-5 w-5" /> Hire Now  {"
  onMessageTalent && (<Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" onClick= {"
  onMessageTalent;)"
}> <MessageSquare className="mr-2 h-5 w-5" /> Message )"
}</div> </div> </div>) 
}</div> </div> </div>) "
            <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6 mb-8">"
              <div className="flex flex-col items-center text-center">"
                <h3 className="text-xl font-bold text-white mb-2">Ready to collaborate?</h3>""
                <p className="text-zion-slate mb-6 max-w-md">"
                <div className="flex flex-wrap gap-4 justify-center">"
                    onClick={onRequestHire}
                  >
                    <Handshake className="mr-2 h-5 w-5" />"

                  
                      onClick={onMessageTalent}
                      <MessageSquare className="mr-2 h-5 w-5" />"

                    
    </div>"`;