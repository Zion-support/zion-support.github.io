
import { Button } from "@/components/ui/button";
interface ContractHeaderProps {
  onCreateClick: () => void;
}
=======
export function ContractHeader({ onCreateClick }: ContractHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">Smart Contract Builder</h1>
        <p className="text-muted-foreground mt-2">
          Create legally binding agreements with optional blockchain deployment
        </p>
      </div>

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
import { Button } from "@/components/ui/button",
interface ContractHeaderProps {
  onCreateClick: () => void
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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
    </div>;
  );
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
