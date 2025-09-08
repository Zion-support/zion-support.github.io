<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {Button} from "@/components/ui/button";"
import {Loader2} from "lucide-react";"
import {NavigationButtonsProps} from "./types";

<<<<<<< HEAD

=======

"
import {Button} from "@/components/ui/button";"
import {Loader2} from "lucide-react";"
import {NavigationButtonsProps} from "./types";


>>>>>>> origin/cursor/delete-old-data-records-6bba
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {NavigationButtonsProps} from "./types";export const NavigationButtons = ({;

  onBack;
  onNext;
  isNextDisabled = false;"
  backLabel = "Back";"
  nextLabel = "Next";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Button } from "@/components/ui/button",

import { Loader2 } from "lucide-react",
import { NavigationButtonsProps } from "./types",


import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { NavigationButtonsProps } from "./types",


<<<<<<< HEAD


export const NavigationButtons = ({



=======
export const NavigationButtons = ({

import { Button } from "@/components/ui/button","
>>>>>>> origin/cursor/delete-old-data-records-6bba
  onBack,
  onNext,
  isNextDisabled = false,"
  backLabel = "Back","
  nextLabel = "Next",

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  isLoading = false}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between">
      {onBack && (

<<<<<<< HEAD
        <Button variant="outline" onClick={onBack}>
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;

import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;

import { NavigationButtonsProps } from "./types",;
<<<<<<< HEAD

export const NavigationButtons = ({;
  onBack,;
  onNext,;
  isNextDisabled = false,;
  backLabel = "Back",;
  nextLabel = "Next";

    <div className="flex justify-between">;
      {onBack && (;
        <Button variant="outline" onClick={onBack}>;          {backLabel}
        </Button>;
      )}
      {onNext && (;
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>;
      {onNext && (

        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>


=======


  return (
    <div className="flex justify-between">;
      {onBack && (;
        <Button variant="outline" onClick={onBack}>;

        <Button variant="outline" onClick={onBack}>;


          {backLabel}
        </Button>
      )}
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled |isLoading}>
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>
      )}
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled |isLoading}>
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>"
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>
      )}
    </div>
  )
}


    </div>;
  );

      {onNext && (


>>>>>>> origin/cursor/delete-old-data-records-6bba
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>
      )}

          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

          {nextLabel}
        </Button>;
      )}
<<<<<<< HEAD

    </div>;
=======


    </div>;
  );
    </div>;
  );
};
  );
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
          {next_label}
        </Button>)}
    </div>);
}

;

export const NavigationButtons = ({;

import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {NavigationButtonsProps} from "./types";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {NavigationButtonsProps} from "./types";

import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {NavigationButtonsProps} from "./types";

export const NavigationButtons = ({;
>>>>>>> origin/cursor/delete-old-data-records-6bba
