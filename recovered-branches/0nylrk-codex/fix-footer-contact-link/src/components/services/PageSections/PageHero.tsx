

import {GradientHeading} from "@/components/GradientHeading";
import {Clock, Map, DollarSign} from "lucide-react";





import { GradientHeading } from "@/components/GradientHeading";
import { Clock, Map, DollarSign } from "lucide-react";

export function PageHero() {
  return (
    <div className="text-center mb-12">
        <div className="bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 flex flex-col items-center text-center">
          <div className="bg-zion-purple/20 p-3 rounded-full mb-4">
            <Map className="h-8 w-8 text-zion-cyan" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Global Coverage</h3>
        <div className="bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 flex flex-col items-center text-center">
          <div className="bg-zion-purple/20 p-3 rounded-full mb-4">
            <Clock className="h-8 w-8 text-zion-cyan" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Rapid Response</h3>
        <div className="bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 flex flex-col items-center text-center">
          <div className="bg-zion-purple/20 p-3 rounded-full mb-4">
            <DollarSign className="h-8 w-8 text-zion-cyan" />
          </div>




          <h3 className="text-xl font-bold text-white mb-2">Transparent Pricing</h3>
          <p className="text-zion-slate-light">Clear per-incident pricing includes transportation and first hour onsite</p>
        </div>
      </div>
    </div>
  );
}
