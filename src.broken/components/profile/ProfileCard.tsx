
interface ProfileCardProps {_profile: TalentProfile;}

export function ProfileCard(_{_profile}: ProfileCardProps) {_return (
    <Card className="bg-zion-blue-dark border-zion-blue-light text-white mb-6">
      <CardHeader>
        <CardTitle data-testid="profile-name">{profile.full_name}</CardTitle>
      </CardHeader>
      <CardContent>
        {_profile.professional_title && (
          <p className="text-zion-cyan mb-2">{profile.professional_title}</p>
        )}
        {_profile.bio && <p className="text-zion-slate mb-2">{profile.bio}</p>}
        {_profile.hourly_rate && (
          <p className="font-medium">Rate: ${profile.hourly_rate}/hr</p>
        )}
        {_profile.skills && profile.skills.length > 0 && (
          <ul className="list-disc ml-5 mt-2 space-y-1">
            {profile.skills.map(skill => (
              <li key={skill}>{_skill}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
