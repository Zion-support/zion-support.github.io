import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
interface PortfolioItem {
  title: string,
  description: string
}

interface PortfolioListProps {
  projects: PortfolioItem[]
}

export function PortfolioList({ projects }: PortfolioListProps) {
  if (!projects.length) return null,

  return (
    <Card className=&quot;bg-zion-blue-dark border-zion-blue-light text-white mb-6&quot;>

interface PortfolioItem {_title: string;
  description: string;}

interface PortfolioListProps {_projects: PortfolioItem[];}

export function PortfolioList(_{_projects}: PortfolioListProps) {_if (!projects.length) return null;

  return (_<Card className="bg-zion-blue-dark border-zion-blue-light text-white mb-6">
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className=&quot;space-y-2 list-disc ml-5&quot;>
          {projects.map((p, i) => (
            <li key={i}>
              <span className=&quot;font-medium&quot;>{p.title}:</span> {p.description}            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
