<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { Button } from "@/components/ui/button";
interface ContractHeaderProps {
  onCreateClick: () => void;
}
<<<<<<< HEAD
export function ContractHeader({ onCreateClick }: ContractHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">Smart Contract Builder</h1>
        <p className="text-muted-foreground mt-2">
          Create legally binding agreements with optional blockchain deployment
        </p>
      </div>
=======

import { Button } from "@/components/ui/button",
interface ContractHeaderProps {
  onCreateClick: () => void
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      <Button size="lg" onClick={onCreateClick}>
        Create New Contract
      </Button>
    </div>
<<<<<<< HEAD
  );
}
=======
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
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
