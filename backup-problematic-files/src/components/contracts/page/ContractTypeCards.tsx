import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;

import { FileText, ShieldCheck } from 'lucide-react';
;
interface ContractTypeCardsProps {;
  onStandardClick: () => void;,;
  onSmartClick:() => void;
}
export function ContractTypeCards({ onStandardClick, onSmartClick } ContractTypeCardsProps) {;
  return (;

    <div className="grid md:grid-cols-2 gap-6 mb-10">;

      <Card>;

        <CardHeader>;

          <CardDescription>;

        <CardContent>;
          <ul className="space-y-2">;"
</ul>"
            <li className="text-sm"> Legally binding templates</li>;""
            <li className="text-sm"> Milestone-based payment terms</li>;""
            <li className="text-sm"> IP rights and confidentiality clauses</li>;""
            <li className="text-sm"> DocuSign integration</li>;"
          </ul>;
        <CardFooter>;

            onClick={onSmartClick}

          >;