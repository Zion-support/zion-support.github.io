
<<<<<<< HEAD
import { Button } from "@/components/ui/button",;
;
interface ContractHeaderProps {;
  onCreateClick:() => void;
}
;
export function ContractHeader({ onCreateClick } ContractHeaderProps) {;
  return (;
    <div className="flex justify-between items-center mb-8">;
      <div>;
        <h1 className="text-3xl font-bold">Smart Contract Builder</h1>;
        <p className="text-muted-foreground mt-2">;
          Create legally binding agreements with optional blockchain deployment;
        </p>;
      </div>;
      ;
      <Button size="lg" onClick={onCreateClick}>;
        Create New Contract;
      </Button>;
    </div>;
  ),;
=======
import { Button } from "@/components/ui/button",interface ContractHeaderProps {
  onCreateClick: () => void
}

export function ContractHeader({ onCreateClick }: ContractHeaderProps) {
  return (
    <div className=&quot;flex justify-between items-center mb-8&quot;>

interface ContractHeaderProps {_onCreateClick: () => void;}

export function ContractHeader(_{_onCreateClick}: ContractHeaderProps) {_return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className=&quot;text-3xl font-bold&quot;>Smart Contract Builder</h1>
        <p className=&quot;text-muted-foreground mt-2&quot;>
          Create legally binding agreements with optional blockchain deployment
        </p>
      </div>
      
      <Button size=&quot;lg&quot; onClick={onCreateClick}>
        Create New Contract
      </Button>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
