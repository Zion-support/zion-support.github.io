
<<<<<<< HEAD
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, ShieldCheck } from 'lucide-react';
;
interface ContractTypeCardsProps {;
  onStandardClick:() => void,;
  onSmartClick:() => void;
}
;
export function ContractTypeCards({ onStandardClick, onSmartClick } ContractTypeCardsProps) {;
  return (;
    <div className="grid md:grid-cols-2 gap-6 mb-10">;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <FileText className="h-5 w-5" />;
            Standard Contracts;
          </CardTitle>;
          <CardDescription>;
            Generate traditional legal agreements for your projects;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
          <ul className="space-y-2">;
            <li className="text-sm">✓ Legally binding templates</li>;
            <li className="text-sm">✓ Milestone-based payment terms</li>;
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>;
            <li className="text-sm">✓ DocuSign integration</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button variant="outline" onClick={onStandardClick}>;
            Create Standard Contract;
          </Button>;
        </CardFooter>;
      </Card>;
      ;
      <Card>;
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">;
          <div className="flex justify-between items-center">;
            <CardTitle className="flex items-center gap-2">;
              <ShieldCheck className="h-5 w-5 text-primary" />;
              Smart Contracts;
            </CardTitle>;
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">;
              Blockchain Powered;
            </span>;
          </div>;
          <CardDescription>;
            Deploy agreements on Ethereum or Polygon with escrow capabilities;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
          <ul className="space-y-2">;
            <li className="text-sm">✓ All standard contract features</li>;
            <li className="text-sm">✓ Automatic escrow payment release</li>;
            <li className="text-sm">✓ Transaction verification</li>;
            <li className="text-sm">✓ Permanent on-chain record</li>;
            <li className="text-sm">✓ Multi-signature approval flow</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button ;
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" ;
            onClick={onSmartClick}
          >;
            Create Smart Contract;
          </Button>;
        </CardFooter>;
      </Card>;
    </div>;
  ),;
=======
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",import { FileText, ShieldCheck } from 'lucide-react'

interface ContractTypeCardsProps {
  onStandardClick: () => void,
  onSmartClick: () => void
}

export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
  return (
    <div className=&quot;grid md:grid-cols-2 gap-6 mb-10&quot;>

interface ContractTypeCardsProps {_onStandardClick: () => void;
  onSmartClick: () => void;}

export function ContractTypeCards(_{_onStandardClick, _onSmartClick}: ContractTypeCardsProps) {_return (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <Card>
        <CardHeader>
          <CardTitle className=&quot;flex items-center gap-2&quot;>
            <FileText className=&quot;h-5 w-5&quot; />
            Standard Contracts
          </CardTitle>
          <CardDescription>
            Generate traditional legal agreements for your projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className=&quot;space-y-2&quot;>
            <li className=&quot;text-sm&quot;>✓ Legally binding templates</li>
            <li className=&quot;text-sm&quot;>✓ Milestone-based payment terms</li>
            <li className=&quot;text-sm&quot;>✓ IP rights and confidentiality clauses</li>
            <li className=&quot;text-sm&quot;>✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant=&quot;outline&quot; onClick={onStandardClick}>
            Create Standard Contract
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader className=&quot;bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg&quot;>
          <div className=&quot;flex justify-between items-center&quot;>
            <CardTitle className=&quot;flex items-center gap-2&quot;>
              <ShieldCheck className=&quot;h-5 w-5 text-primary&quot; />
              Smart Contracts
            </CardTitle>
            <span className=&quot;px-2 py-1 bg-primary/10 text-primary text-xs rounded-full&quot;>
              Blockchain Powered
            </span>
          </div>
          <CardDescription>
            Deploy agreements on Ethereum or Polygon with escrow capabilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className=&quot;space-y-2&quot;>
            <li className=&quot;text-sm&quot;>✓ All standard contract features</li>
            <li className=&quot;text-sm&quot;>✓ Automatic escrow payment release</li>
            <li className=&quot;text-sm&quot;>✓ Transaction verification</li>
            <li className=&quot;text-sm&quot;>✓ Permanent on-chain record</li>
            <li className=&quot;text-sm&quot;>✓ Multi-signature approval flow</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button 
            className=&quot;w-full bg-gradient-to-r from-blue-600 to-indigo-600&quot; 
            onClick={onSmartClick}          >
            Create Smart Contract
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
