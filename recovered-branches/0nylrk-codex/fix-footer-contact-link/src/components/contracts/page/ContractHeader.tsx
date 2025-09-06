  );
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}