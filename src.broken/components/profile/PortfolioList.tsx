<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
=======
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface PortfolioItem {
  title: string,
  description: string
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
interface PortfolioItem {;
  title: string,;
  description: string;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
interface PortfolioListProps {;
  projects: PortfolioItem[];
}
<<<<<<< HEAD

export function PortfolioList({ projects }: PortfolioListProps) {
  if (!projects.length) return null,

  return (
    <Card className=&quot;bg-zion-blue-dark border-zion-blue-light text-white mb-6&quot;>
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className=&quot;space-y-2 list-disc ml-5&quot;>
          {projects.map((p, i) => (
            <li key={i}>
              <span className=&quot;font-medium&quot;>{p.title}:</span> {p.description}
            </li>
=======
;
export function PortfolioList({ projects }: PortfolioListProps) {;
  if (!projects.length) return null;
  return (;
    <Card className="bg-zion-blue-dark border-zion-blue-light text-white mb-6">;
      <CardHeader>;
        <CardTitle>Portfolio</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <ul className="space-y-2 list-disc ml-5">;
          {projects.map((p, i) => (;
            <li key={i}>;
              <span className="font-medium">{p.title}:</span> {p.description}
            </li>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          ))}
        </ul>;
      </CardContent>;
    </Card>;
  );
}
;