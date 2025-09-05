
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { FileText, ShieldCheck } from 'lucide-react'

interface ContractTypeCardsProps {
  onStandardClick: () => void;
  onSmartClick: () => void;
}

export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
  return (
    <div className=&quot;grid md:grid-cols-2 gap-6 mb-10&quot;>
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
            onClick={onSmartClick}
          >
            Create Smart Contract
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
