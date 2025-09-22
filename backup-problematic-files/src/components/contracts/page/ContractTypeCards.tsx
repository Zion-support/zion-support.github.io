
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
=======
import { Button } from "@/components/ui/button";""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { FileText, ShieldCheck } from 'lucide-react';
;
interface ContractTypeCardsProps {;
  onStandardClick: () => void;,;
  onSmartClick:() => void;
}
export function ContractTypeCards({ onStandardClick, onSmartClick } ContractTypeCardsProps) {;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <div className="grid md:grid-cols-2 gap-6 mb-10">;
=======
    <div className="grid md:grid-cols-2 gap-6 mb-10">;"
</div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <Card>;

        <CardHeader>;
<<<<<<< HEAD
          <CardTitle className="flex items-center gap-2">;
            <FileText className="h-5 w-5" />;
<<<<<<< HEAD
<<<<<<< HEAD

=======
            Standard Contracts;
          </CardTitle>;
=======
"
          <CardTitle className="flex items-center gap-2">;"
            <FileText className="h-5 w-5" />;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <CardDescription>;

        <CardContent>;
          <ul className="space-y-2">;"
</ul>"
            <li className="text-sm"> Legally binding templates</li>;""
            <li className="text-sm"> Milestone-based payment terms</li>;""
            <li className="text-sm"> IP rights and confidentiality clauses</li>;""
            <li className="text-sm"> DocuSign integration</li>;"
          </ul>;
        <CardFooter>;
<<<<<<< HEAD
          <Button variant="outline" onClick={onStandardClick}>;
            Create Standard Contract;
          </Button>;
        </CardFooter>;
      </Card>;
      ;
      <Card>;
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">;
          <div className="flex justify-between items-center">;
            <CardTitle className="flex items-center gap-2">;
              <ShieldCheck className="h-5 w-5 text-primary" />;
              Smart Contracts;
            </CardTitle>;
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              Blockchain Powered;
            </span>;
          </div>;
          <CardDescription>;
            Deploy agreements on Ethereum or Polygon with escrow capabilities;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD

=======
          <ul className="space-y-2">;
            <li className="text-sm"> All standard contract features</li>;
            <li className="text-sm"> Automatic escrow payment release</li>;
            <li className="text-sm"> Transaction verification</li>;
            <li className="text-sm"> Permanent on-chain record</li>;
            <li className="text-sm"> Multi-signature approval flow</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button ;
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" ;
=======
          <Button variant="outline" onClick={onStandardClick}>;"

        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">;"
          <div className="flex justify-between items-center">;"
</div>"
              <ShieldCheck className="h-5 w-5 text-primary" />;"

            ;"
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">;"
</span>
            </span>;
          </div>;

            <li className="text-sm"> All standard contract features</li>;""
            <li className="text-sm"> Automatic escrow payment release</li>;""
            <li className="text-sm"> Transaction verification</li>;""
            <li className="text-sm"> Permanent on-chain record</li>;""
            <li className="text-sm"> Multi-signature approval flow</li>;"

          <Button ;"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" ;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            onClick={onSmartClick}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          >;
<<<<<<< HEAD
            Create Smart Contract;
          </Button>;
        </CardFooter>;
      </Card>;
<<<<<<< HEAD

=======
    </div>;
  ),;}
 import {;
  {;
  {;
  FileText, ShieldCheck ;
}from 'lucide-react' interface ContractTypeCardsProps {;
  onStandardClick: () => void;
onSmartClick: () => void ;
}export function ContractTypeCards ({;
  onStandardClick, onSmartClick ;
}: ContractTypeCardsProps) {;
  return (<div className="grid md:grid-cols-2 gap-6 mb-10" > flex items-center gap-2"> <FileText className=" h-5 w-5"/> Standard Contracts </CardTitle> <CardDescription> Generate traditional legal agreements for your projects </CardDescription> </CardHeader> <CardContent> <ul className=" space-y-2"> <li className=" text-sm"> Legally binding templates</li> <li className=" text-sm"> Milestone-based payment terms</li> <li className=" text-sm"> IP rights and confidentiality clauses</li> <li className=" text-sm"> DocuSign integration</li> </ul> </CardContent> <CardFooter> <Button variant=" outline"onClick={;
  onStandardClick ";
}> Create Standard Contract </Button> </CardFooter> </Card> <Card> <CardHeader className=" bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg"> <div className=" flex justify-between items-center"> <CardTitle className=" flex items-center gap-2"> <ShieldCheck className=" h-5 w-5 text-primary"/> Smart Contracts </CardTitle> <span className=" px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"> Blockchain Powered </span> </div> <CardDescription> Deploy agreements on Ethereum or Polygon with escrow capabilities </CardDescription> </CardHeader> <CardContent> <ul className=" space-y-2"> <li className=" text-sm"> All standard contract features</li> <li className=" text-sm"> Automatic escrow payment release</li> <li className=" text-sm"> Transaction verification</li> <li className=" text-sm"> Permanent on-chain record</li> <li className=" text-sm" > Multi-signature approval flow</li> </ul> </CardContent> <CardFooter> <Button > Create Smart Contract </Button> </CardFooter> </Card> </div>) ;
}'"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    </div>;"
  return (<div className="grid md:grid-cols-2 gap-6 mb-10" > flex items-center gap-2"> <FileText className=" h-5 w-5"/> Standard Contracts  <CardDescription> Generate traditional legal agreements for your projects   <CardContent> <ul className=" space-y-2"> <li className=" text-sm"> Legally binding templates</li> <li className=" text-sm"> Milestone-based payment terms</li> <li className=" text-sm"> IP rights and confidentiality clauses</li> <li className=" text-sm"> DocuSign integration</li> </ul>  <CardFooter> <Button variant=" outline"onClick={;"
</div>)"
}> Create Standard Contract    <Card> <CardHeader className=" bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg"> <div className=" flex justify-between items-center"> <CardTitle className=" flex items-center gap-2"> <ShieldCheck className=" h-5 w-5 text-primary"/> Smart Contracts  <span className=" px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"> Blockchain Powered </span> </div> <CardDescription> Deploy agreements on Ethereum or Polygon with escrow capabilities   <CardContent> <ul className=" space-y-2"> <li className=" text-sm"> All standard contract features</li> <li className=" text-sm"> Automatic escrow payment release</li> <li className=" text-sm"> Transaction verification</li> <li className=" text-sm"> Permanent on-chain record</li> <li className=" text-sm" > Multi-signature approval flow</li> </ul>  <CardFooter> <Button > Create Smart Contract    </div>) ;""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
