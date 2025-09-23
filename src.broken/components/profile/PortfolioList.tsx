<<<<<<< HEAD
=======
import { CardContentCardHeaderCardTitle } from "@/components/ui/card";

interface PortfolioItem {
  title: string;
  description: string;
}

interface PortfolioListProps {
  projects: PortfolioItem[];
}

export function PortfolioList({ projects }: PortfolioListProps) {
  if (!projects.length) return null;

  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light text-white mb-6">
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 list-disc ml-5">
          {projects.map((pi) => (
            <li key={i}>
              <span className="font-medium">{p.title}:</span> {p.description}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
