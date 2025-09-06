import { Button } from "@/components/ui/button";
interface ContractHeaderProps {
  onCreateClick: () => void;
}

<<<<<<< HEAD
import { Button } from "@/components/ui/button",
interface ContractHeaderProps {
  onCreateClick: () => void
}

=======
>>>>>>> main
export function ContractHeader({ onCreateClick }: ContractHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">Smart Contract Builder</h1>
        <p className="text-muted-foreground mt-2">
          Create legally binding agreements with optional blockchain deployment
        </p>
      </div>
<<<<<<< HEAD
      
=======

>>>>>>> main
      <Button size="lg" onClick={onCreateClick}>
        Create New Contract
      </Button>
    </div>
<<<<<<< HEAD
  )
import { Button } from "@/components/ui/button";
interface ContractHeaderProps {;
  onCreateClick: () => void;
}
;
export function ContractHeader({ onCreateClick }: ContractHeaderProps) {;
  return (;
    <div className="flex justify-between items-center mb-8">;
      <div>;
        <h1 className="text-3xl font-bold">Smart Contract Builder</h1>;
        <p className="text-muted-foreground mt-2">;
          Create legally binding agreements with optional blockchain deployment;
        </p>;
      </div>;
      <Button size="lg" onClick={onCreateClick}>;
        Create New Contract;
      </Button>;
    </div>;
=======
>>>>>>> main
  );
}
;