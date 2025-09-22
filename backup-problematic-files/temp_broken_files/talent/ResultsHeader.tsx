
;
interface ResultsHeaderProps {;
  isLoading:boolean,;
  resultCount:number;
}
export function ResultsHeader({ isLoading, resultCount } ResultsHeaderProps) {;
  return (;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ResultsHeader.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <div className="flex items-center mb-6 text-zion-slate-light">;
      {isLoading ? (;
        <div className="flex items-center">;
          <Loader2 className="h-4 w-4 animate-spin mr-2" />;
          <span>Loading talents...</span>;
        </div>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ResultsHeader.tsx
        <span>;
</span>
        </span>;
    </div>;)"
  isLoading ? (<div className="flex items-center" > <Loader2 className="h-4 w-4 animate-spin mr-2" /> <span>Loading talents...</span> </div>) : (<span> {";"  resultCount === 0 ? ("No talents found. Try adjusting your filters.") : (`Found $ {;"
  resultCount ;
}talent$ {;"
  resultCount !== 1 ? 's' :  ;')`;
}`) ;
}</span>) ;
:temp_broken_files/talent/ResultsHeader.tsx
}</div>) ;"}'"
}</div>) ;
}'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/ResultsHeader.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
