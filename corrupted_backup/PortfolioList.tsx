
  title: string;
description: string 
}interface PortfolioListProps {
  projects: PortfolioItem[] 
}export function PortfolioList ({
  projects 
}: PortfolioListProps) {
  if (!projects.length) return null;

