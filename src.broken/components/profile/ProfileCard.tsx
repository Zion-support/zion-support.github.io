<<<<<<< HEAD
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card",
import { TalentProfile } from "@/types/talent",
=======
import { Card, CardHeader, CardContent, CardTitle } from &quot;@/components/ui/card&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ProfileCardProps {
  profile: TalentProfile
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card className=&quot;bg-zion-blue-dark border-zion-blue-light text-white mb-6&quot;>
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
          <ul className=&quot;list-disc ml-5 mt-2 space-y-1&quot;>
            {profile.skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
