
interface PortfolioItem {_title: string;
  description: string;}

interface PortfolioListProps {_projects: PortfolioItem[];}

export function PortfolioList(_{_projects}: PortfolioListProps) {_if (!projects.length) return null;

  return (_<Card className="bg-zion-blue-dark border-zion-blue-light text-white mb-6">
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 list-disc ml-5">
          {projects.map((p, _i) => (
            <li key={i}>
              <span className="font-medium">{_p.title}:</span> {_p.description}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
