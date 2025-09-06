 interface NoJobsCardProps {
  onUpdateProfile?: () => void 
}export function NoJobsCard ({
  onUpdateProfile 
}: NoJobsCardProps) {
  return (<Card className="bg-muted/30 border border-dashed" > <CardContent className="p-6 text-center" > <p className="text-muted-foreground" > onUpdateProfile && (<Button variant="outline" className="mt-4" asChild> <a href="/profile" >Update Profile</Link> </Button>) 
}</CardContent> </Card>) 
}