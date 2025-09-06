
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
interface ContractHeaderProps {;
  onCreateClick: () => void;
}
=======


export function ContractHeader(): any ({ onCreateClick }: ContractHeaderProps) {;
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">Smart Contract Builder</h1>
        <p className="text-muted-foreground mt-2">
          Create legally binding agreements with optional blockchain deployment
        </p>
      </div>
=======

<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export function ContractHeader({ onCreateClick }: ContractHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">Smart Contract Builder</h1>
        <p className="text-muted-foreground mt-2">
          Create legally binding agreements with optional blockchain deployment
        </p>
      </div>
      <Button size="lg" onClick={onCreateClick}>
        Create New Contract
      </Button>
<<<<<<< HEAD
    </div>
  );
import { Button  } from '@/components / ui / button';
interface ContractHeaderProps {
  onCreateClick: () => void;
}
export /**
 * ContractHeader - Function description
 */
function ContractHeader() {
  return (
    <div className="flex justify - between items - center mb - 8">;
      <div>;
        <h1 className="text - 3xl font - bold">Smart Contract Builder</h1>;
        <p className="text - muted - foreground mt - 2">;
          Create legally binding agreements with optional blockchain deployment;
        </p>;
      </div>;
      <Button size="lg" on_click={onCreateClick}>;
        Create New Contract;
      </Button>;
    </div>);
}
=======
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
<<<<<<< HEAD
  );
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    </div>;
  );
}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
