<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
=======
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
=======

interface PortfolioItem {_title: string;
  description: string;}

interface PortfolioListProps {_projects: PortfolioItem[];}

export function PortfolioList(_{_projects}: PortfolioListProps) {_if (!projects.length) return null;

  return (_<Card className="bg-zion-blue-dark border-zion-blue-light text-white mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
        <ul className=&quot;space-y-2 list-disc ml-5&quot;>
          {projects.map((p, i) => (
            <li key={i}>
              <span className=&quot;font-medium&quot;>{p.title}:</span> {p.description}
=======
        <ul className="space-y-2 list-disc ml-5">
          {projects.map((p, _i) => (
            <li key={i}>
              <span className="font-medium">{_p.title}:</span> {_p.description}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
