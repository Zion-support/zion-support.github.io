 interface ScoreBadgeProps {
  application: JobApplication 
}export function ScoreBadge ({
  application 
}: ScoreBadgeProps) {
  const score = application.match score || 0;
// Determine color based on score return (<span className= {
  `rounded-full px-2 py-1 text-xs font-medium $ {
  className 
}` 
}> {
  score ? `$ {
  score 
}%` : "Not scored" 
}
}