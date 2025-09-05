

interface ContractHeaderProps {_onCreateClick: () => void;}

export function ContractHeader(_{_onCreateClick}: ContractHeaderProps) {_return (
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
    </div>
  );
}
