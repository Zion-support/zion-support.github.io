
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
import { NavigationButtonsProps } from "./types",;
=======
import { Button } from "@/components/ui/button";""
import { Loader2 } from "lucide-react";""
import { NavigationButtonsProps } from "./types";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
export const NavigationButtons = ({;
  onBack,;
  onNext,;
  isNextDisabled = false,;"
  backLabel = "Back",;""
  nextLabel = "Next",;")
  isLoading = false} NavigationButtonsProps) => {;
<<<<<<< HEAD
  return (;
    <div className="flex justify-between">;
      {onBack && (;
        <Button variant="outline" onClick={onBack}>;          {backLabel}
        </Button>;
      )}
      {onNext && (;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>;
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>;
      )}
    </div>;
<<<<<<< HEAD

=======
  ),;
},; export const NavigationButtons = ({
=======
  return (;"
    <div className="flex justify-between">;"
</div>"
        <Button variant="outline" onClick={onBack}>;          {backLabel}"

        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>;
"
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}"
</Loader2>
    </div>;"
  return (<div className="flex justify-between" > {"
  onBack && (<Button variant="outline" onClick= {"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  onBack;
}> {
)
}) 
  onNext && (<Button onClick= {
  onNext;
}disabled= {
<<<<<<< HEAD
  isNextDisabled || isLoading 
}> {
  isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
}{
  nextLabel 
}
}</div>) 
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  isNextDisabled || isLoading;
  isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />"
</Loader2>)
}</div>) "
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
