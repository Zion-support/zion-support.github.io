
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
=======
import { Button } from &quot;@/components/ui/button&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface Contract {
  id: string,
  title: string,
  client: string,
  talent: string,
  date: string,
  isSmartContract: boolean
}

interface RecentContractsTableProps {
  contracts: Contract[],
  onViewContract: (contractId: string) => void
}

export function RecentContractsTable({ contracts, onViewContract }: RecentContractsTableProps) {
  return (
    <>
      <h2 className=&quot;text-2xl font-bold mb-4&quot;>Recent Contracts</h2>
      <div className=&quot;overflow-x-auto rounded-md border&quot;>
        <table className=&quot;min-w-full divide-y divide-border&quot;>
          <thead className=&quot;bg-muted&quot;>
=======

interface Contract {_id: string;
  title: string;
  client: string;
  talent: string;
  date: string;
  isSmartContract: boolean;}

interface RecentContractsTableProps {_contracts: Contract[];
  onViewContract: (_contractId: string) => void;}

export function RecentContractsTable(_{_contracts, _onViewContract}: RecentContractsTableProps) {_return (_<>
      <h2 className="text-2xl font-bold mb-4">Recent Contracts</h2>
      <div className="overflow-x-auto rounded-md border">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-muted">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <tr>
              <th scope=&quot;col&quot; className=&quot;px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider&quot;>
                Contract Title
              </th>
              <th scope=&quot;col&quot; className=&quot;px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider&quot;>
                Client
              </th>
              <th scope=&quot;col&quot; className=&quot;px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider&quot;>
                Talent
              </th>
              <th scope=&quot;col&quot; className=&quot;px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider&quot;>
                Date
              </th>
              <th scope=&quot;col&quot; className=&quot;px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider&quot;>
                Type
              </th>
              <th scope=&quot;col&quot; className=&quot;relative px-6 py-3&quot;>
                <span className=&quot;sr-only&quot;>Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className=&quot;bg-card divide-y divide-border&quot;>
            {contracts.map((contract) => (
              <tr key={contract.id}>
<<<<<<< HEAD
                <td className=&quot;px-6 py-4 whitespace-nowrap text-sm&quot;>
                  {contract.title}
                </td>
                <td className=&quot;px-6 py-4 whitespace-nowrap text-sm&quot;>
                  {contract.client}
                </td>
                <td className=&quot;px-6 py-4 whitespace-nowrap text-sm&quot;>
                  {contract.talent}
                </td>
                <td className=&quot;px-6 py-4 whitespace-nowrap text-sm&quot;>
                  {new Date(contract.date).toLocaleDateString()}
                </td>
                <td className=&quot;px-6 py-4 whitespace-nowrap text-sm&quot;>
                  {contract.isSmartContract ? (
                    <span className=&quot;inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs&quot;>
=======
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {_contract.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {_contract.client}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {_contract.talent}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {_new Date(contract.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {_contract.isSmartContract ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      Smart Contract
                    </span>
                  ) : (
                    <span className=&quot;inline-flex items-center px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs&quot;>
                      Standard
                    </span>
                  )}
                </td>
                <td className=&quot;px-6 py-4 whitespace-nowrap text-right text-sm&quot;>
                  <Button 
<<<<<<< HEAD
                    variant=&quot;ghost&quot; 
                    size=&quot;sm&quot;
                    onClick={() => onViewContract(contract.id)}
=======
                    variant="ghost" 
                    size="sm"
                    onClick={_() => onViewContract(contract.id)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
