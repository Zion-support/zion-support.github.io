
=======
import { Loader2 } from "lucide-react",;
;
interface ResultsHeaderProps {;
  isLoading:boolean,;
  resultCount:number;
}
;
export function ResultsHeader({ isLoading, resultCount } ResultsHeaderProps) {;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <div className="flex items-center mb-6 text-zion-slate-light">;
      {isLoading ? (;
        <div className="flex items-center">;
          <Loader2 className="h-4 w-4 animate-spin mr-2" />;
          <span>Loading talents...</span>;
        </div>;
<<<<<<< HEAD

