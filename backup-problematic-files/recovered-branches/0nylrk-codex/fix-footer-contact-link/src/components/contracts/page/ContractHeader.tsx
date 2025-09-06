<<<<<<< HEAD
export function ContractHeader(): any ({ onCreateClick }: ContractHeaderProps) {;
  return (
=======

import { Button } from "@/components/ui/button",;
;
interface ContractHeaderProps {;
  onCreateClick:() => void;
}
;
export function ContractHeader({ onCreateClick } ContractHeaderProps) {;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="flex justify-between items-center mb-8">;
      <div>;
        <h1 className="text-3xl font-bold">Smart Contract Builder</h1>;
        <p className="text-muted-foreground mt-2">;
          Create legally binding agreements with optional blockchain deployment;
        </p>;
      </div>;
<<<<<<< HEAD
=======
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <Button size="lg" onClick={onCreateClick}>;
        Create New Contract;
      </Button>;
    </div>;
<<<<<<< HEAD
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
  ),;}
 interface ContractHeaderProps {
  onCreateClick: () => void 
}export function ContractHeader ({
  onCreateClick 
}: ContractHeaderProps) {
  return (<div className="flex justify-between items-center mb-8" > text-3xl font-bold">Smart Contract Builder</h1> <p className=" text-muted-foreground mt-2"> Create legally binding agreements with optional blockchain deployment </p> </div> <Button size=" lg" onClick= {
  onCreateClick 
}> Create New Contract </Button> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
