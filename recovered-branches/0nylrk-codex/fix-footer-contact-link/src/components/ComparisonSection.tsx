

import {
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from "./ui/table";
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-zion-purple/20">
                  <TableHead className="text-white">Service</TableHead>
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>
                  <TableHead className="text-white text-center">With Zion</TableHead>
                  <TableHead className="text-white text-center">Savings</TableHead>                  <TableHead className="text-white text-center">Traditional Providers</TableHead>
                  <TableHead className="text-white text-center">With Zion</TableHead>
                  <TableHead className="text-white text-center">Savings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[

import { GradientHeading  } from './GradientHeading';
import { Button  } from './ui / button';
import { CheckCircle2  } from './lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui / table';
export /**
 * ComparisonSection - Function description
 */
function ComparisonSection() {
  return (
    <section className="py - 20 bg - zion - blue-dark">;
      <div className="container mx - auto px - 4 sm:px - 6 lg:px-8">;
        <div className="text - center mb-12">;
          <GradientHeading > Compare & Save</GradientHeading>;
          <p className="mt - 4 text - zion - slate - light text - xl max - w-2xl mx-auto">;
            See how Zion can drastically reduce your IT costs compared to;
            traditional providers;
          </p>;
        </div>;
        <div className="max - w-4xl mx-auto">;
          <div className="bg - zion - blue - light rounded - lg border border - zion - purple / 20 overflow-hidden">;
            <Table>;
              <TableHeader>;
                <TableRow className="border - b border - zion-purple / 20">;
                  <TableHead className="text-white">Service</TableHead>;
                  <TableHead className="text - white text-center">;
                    Traditional Providers;
                  </TableHead>;
                  <TableHead className="text - white text-center">;
                    With Zion;
                  </TableHead>;
                  <TableHead className="text - white text-center">;
                    Savings;

  // TODO: Implement
}
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow;
} from "./ui/table";"
export function ComparisonSection() {
  return ("
    <section className="py-20 bg-zion-blue-dark">"
</section>"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
        <div className="text-center mb-12">"
</div>
          <GradientHeading>Compare & Save</GradientHeading>"
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">"
</p>
          </p>
        </div>"
        <div className="max-w-4xl mx-auto">"
</div>"
          <div className="bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden">"
</div>
            <Table>
</Table>
              <TableHeader>
</TableHeader>"
                <TableRow className="border-b border-zion-purple/20">"
</TableRow>"
                  <TableHead className="text-white">Service</TableHead>""
                  <TableHead className="text-white text-center">"
</TableHead>
                  </TableHead>"
                  <TableHead className="text-white text-center">"
</TableHead>
                  </TableHead>"
                  <TableHead className="text-white text-center">"
</TableHead>
                  </TableHead>"
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>""
                  <TableHead className="text-white text-center">With Zion</TableHead>""
                  <TableHead className="text-white text-center">Savings</TableHead>"
                </TableRow>
              </TableHeader>
              <TableBody>
</TableBody>"
    <section className="py - 20 bg - zion - blue - dark">;"
</section>"
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;"
</div>"
        <div className="text - center mb - 12">;"
</div>
          <GradientHeading > Compare & Save</GradientHeading>;"
          <p className="mt - 4 text - zion - slate - light text - xl max - w-2xl mx - auto">;"
</p>
          </p>;
        </div>;"
        <div className="max - w-4xl mx - auto">;"
</div>"
          <div className="bg - zion - blue - light rounded - lg border border - zion - purple / 20 overflow - hidden">;"
</div>
            <Table>;
</Table>
              <TableHeader>;
</TableHeader>"
                <TableRow className="border - b border - zion - purple / 20">;"
</TableRow>"
                  <TableHead className="text - white">Service</TableHead>;""
                  <TableHead className="text - white text - center">;"
</TableHead>
                  </TableHead>;"
                  <TableHead className="text - white text - center">;"
</TableHead>
                  </TableHead>;"
                  <TableHead className="text - white text - center">;"
</TableHead>
                  </TableHead>;
                </TableRow>;
              </TableHeader>;
              <TableBody>;
                {[;
                  {
                    service: "Server Hosting",
                    traditional: "$1, 200 / mo",
                    zion: "$650 / mo",
                    savings: "45%",
                  },                      {item.service}

            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap">
              Calculate Your Savings;
            </Button>
          </div>
        </div>
      </div>  );
}
  )
import { GradientHeading } from "./GradientHeading",;
import { Button } from "./ui/button",;
import { CheckCircle2 } from "lucide-react",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table",;        <div className="max-w-4xl mx-auto">;
          <div className="bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden">;
            <Table>;
              <TableHeader>;
                <TableRow className="border-b border-zion-purple/20">;
                  <TableHead className="text-white">Service</TableHead>;
                  </TableHead>;                </TableRow>;
              </TableHeader>;
              <TableBody>;
                {[;          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">;
            <div className="flex items-start">;
              <CheckCircle2 className="mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />;
              <p className="text-white">;                  Results may vary based on specific requirements and service;
                  levels;
                </span>;
              </p>;
            </div>;              Calculate Your Savings;
            </Button>;
          </div>;
        </div>;
      </div>;
  );
}
;
    </section>

    </section>;
  );
    </section>);
}  );
}
;
