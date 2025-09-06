} from "@/components/ui/card";

interface ContractTypeCardsProps {
=======
interface ContractTypeCardsProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  onStandardClick: () => void;
  onSmartClick: () => void
}
            Standard Contracts;
          </CardTitle>;
          <CardDescription>;
            Generate traditional legal agreements for your projects;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
            Create Standard Contract;
          </Button>;
        </CardFooter>;
      </Card>;
              Blockchain Powered;
            </span>;
          </div>;
          <CardDescription>;
            Deploy agreements on Ethereum or Polygon with escrow capabilities;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
            onClick={onSmartClick}>;
=======
          <ul className="space - y-2">;
            <li className="text - sm">✓ All standard contract features</li>;
            <li className="text - sm">✓ Automatic escrow payment release</li>;
            <li className="text - sm">✓ Transaction verification</li>;
            <li className="text - sm">✓ Permanent on - chain record</li>;
            <li className="text - sm">✓ Multi - signature approval flow</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button;
            className="w - full bg - gradient - to - r from - blue - 600 to - indigo - 600";
            on_click={onSmartClick}
          >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            Create Smart Contract;
          </Button>;
        </CardFooter>;
      </Card>;
}