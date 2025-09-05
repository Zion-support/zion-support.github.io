
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
=======
import { Button } from &quot;@/components/ui/button&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ContractHeaderProps {
  onCreateClick: () => void
}

export function ContractHeader({ onCreateClick }: ContractHeaderProps) {
  return (
    <div className=&quot;flex justify-between items-center mb-8&quot;>
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
}
