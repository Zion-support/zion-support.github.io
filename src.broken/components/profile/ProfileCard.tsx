import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card",
import { TalentProfile } from "@/types/talent",interface ProfileCardProps {
  profile: TalentProfile
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card className=&quot;bg-zion-blue-dark border-zion-blue-light text-white mb-6&quot;>

interface ProfileCardProps {_profile: TalentProfile;}

export function ProfileCard(_{_profile}: ProfileCardProps) {_return (
    <Card className="bg-zion-blue-dark border-zion-blue-light text-white mb-6">
      <CardHeader>
        <CardTitle data-testid=&quot;profile-name&quot;>{profile.full_name}</CardTitle>
      </CardHeader>
      <CardContent>
        {profile.professional_title && (
          <p className=&quot;text-zion-cyan mb-2&quot;>{profile.professional_title}</p>
        )}
        {profile.bio && <p className=&quot;text-zion-slate mb-2&quot;>{profile.bio}</p>}
        {profile.hourly_rate && (
          <p className=&quot;font-medium&quot;>Rate: ${profile.hourly_rate}/hr</p>
        )}
        {profile.skills && profile.skills.length > 0 && (
          <ul className=&quot;list-disc ml-5 mt-2 space-y-1&quot;>            {profile.skills.map(skill => (
              <li key={skill}>{_skill}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
