 interface ProfileCardProps {
  profile: TalentProfile 
}export function ProfileCard ({
  profile 
}: ProfileCardProps) {
  return (<Card className="bg-zion-blue-dark border-zion-blue-light text-white mb-6" > profile-name" > {
  profile.full name 
}</CardTitle> </CardHeader> <CardContent> {
  profile.skills.map (skill => (<li key= {
  skill 
}> {
  skill 
}</li>) ) 
}</ul>) 
}</CardContent> </Card>) 
}