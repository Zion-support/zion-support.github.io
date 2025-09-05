
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
=======
import { Button } from "@/components/ui/button",;
interface Contract {;
  id: string,;
  title: string,;
  client: string,;
  talent: string,;
  date: string,;
  isSmartContract: boolean;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
interface RecentContractsTableProps {;
  contracts: Contract[];
  onViewContract: (contractId: string) => void;
}
<<<<<<< HEAD

export function RecentContractsTable({ contracts, onViewContract }: RecentContractsTableProps) {
  return (
    <>
      <h2 className=&quot;text-2xl font-bold mb-4&quot;>Recent Contracts</h2>
      <div className=&quot;overflow-x-auto rounded-md border&quot;>
        <table className=&quot;min-w-full divide-y divide-border&quot;>
          <thead className=&quot;bg-muted&quot;>
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
                    variant=&quot;ghost&quot; 
                    size=&quot;sm&quot;
=======
;
export function RecentContractsTable({ contracts, onViewContract }: RecentContractsTableProps) {;
  return (;
    <>;
      <h2 className="text-2xl font-bold mb-4">Recent Contracts</h2>;
      <div className="overflow-x-auto rounded-md border">;
        <table className="min-w-full divide-y divide-border">;
          <thead className="bg-muted">;
            <tr>;
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Contract Title;
              </th>;
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Client;
              </th>;
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Talent;
              </th>;
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Date;
              </th>;
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Type;
              </th>;
              <th scope="col" className="relative px-6 py-3">;
                <span className="sr-only">Actions</span>;
              </th>;
            </tr>;
          </thead>;
          <tbody className="bg-card divide-y divide-border">;
            {contracts.map((contract) => (;
              <tr key={contract.id}>;
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {contract.title}
                </td>;
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {contract.client}
                </td>;
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {contract.talent}
                </td>;
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {new Date(contract.date).toLocaleDateString()}
                </td>;
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {contract.isSmartContract ? (;
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs">;
                      Smart Contract;
                    </span>;
                  ) : (;
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs">;
                      Standard;
                    </span>;
                  )}
                </td>;
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">;
                  <Button;
                    variant="ghost";
                    size="sm";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    onClick={() => onViewContract(contract.id)}
                  >;
                    View;
                  </Button>;
                </td>;
              </tr>;
            ))}
          </tbody>;
        </table>;
      </div>;
    </>;
  );
}
;