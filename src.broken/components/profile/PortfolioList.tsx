 interface PortfolioItem {
  title: string;
description: string 
}interface PortfolioListProps {
  projects: PortfolioItem[] 
}export function PortfolioList ({
  projects 
}: PortfolioListProps) {
  if (!projects.length) return null;
return (<Card className="bg-zion-blue-dark border-zion-blue-light text-white mb-6" > 
}</ul> </CardContent> </Card>) 
}