
import { GradientHeading } from "./GradientHeading";,
import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";
<TableRow key={index} className="border-b border-zion-blue">
<TableCell className="font-medium text-white">{item.service}</TableCell>
<TableCell className="text-center text-zion-slate-light">{item.traditional}</TableCell>
<TableCell className="text-center text-zion-cyan font-semibold">{item.zion}</TableCell>
<TableCell className="text-center text-green-400 font-bold">{item.savings}</TableCell>
))}
</TableBody>
</Table>
</div>
<div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">
<div className="flex items-start">
<CheckCircle2 className="mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
<p className="text-white">
<span className="font-bold">Total Annual Savings: </span>
<span className="text-green-400 font-bold text-xl">
Up to 65%;
</span>
<span className="block text-sm text-zion-slate-light mt-1">
Results may vary based on specific requirements and service;
levels;
</span>
</p>
</div>
<Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap">              Calculate Your Savings          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">
<div className="flex items-start">
<CheckCircle2 className="mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
<p className="text-white">
<span className="font-bold">Total Annual Savings: </span>
<span className="text-green-400 font-bold text-xl">Up to 65%</span>
<span className="block text-sm text-zion-slate-light mt-1">Results may vary based on specific requirements and service levels</span>
</p>
</div>
<Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap">
</Button>
</div>
</div>
</div>
</section>
)
}