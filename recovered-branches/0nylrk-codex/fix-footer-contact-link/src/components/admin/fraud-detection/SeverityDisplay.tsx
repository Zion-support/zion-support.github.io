

import React from './react';
import { SeverityIndicator  } from '@/components / ui / severity - indicator';
interface SeverityDisplayProps {
  severity: string;
}
export const SeverityDisplay: React.FC < SeverityDisplayProps> = ({
  severity,

<<<<<<< HEAD
}) => {
  return (

}) => {
export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({;
  severity,;
}) => {;
  return (
    <SeverityIndicator;
      severity={severity as "safe" | "suspicious" | "dangerous"}
      show_icon={true}
      show_text={true}
    />);
}
;



interface SeverityDisplayProps {
  severity: string
}


};
export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({ severity }) => {
  return (
=======
}) => {  return (
  severity: string
}

};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    <SeverityIndicator
      severity={severity as "safe" | "suspicious" | "dangerous"}
      showIcon={true}
      showText={true}
    <SeverityIndicator 
      severity={severity as "safe" | "suspicious" | "dangerous"} 
import React from "react",;
import { SeverityIndicator } from "@/components/ui/severity-indicator",;
interface SeverityDisplayProps {;
  severity: string;
}
;
export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({ severity }) => {;
  return (;
    <SeverityIndicator;
      severity={severity as "safe" | "suspicious" | "dangerous"} ;
      showIcon={true}
      showText={true}
    />;
  );
    />
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
};
  ),;
},; interface SeverityDisplayProps {
  severity: string 
}severity 
}) => {

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    <SeverityIndicator;
      severity={severity as "safe" | "suspicious" | "dangerous"}
      show_icon={true}
      show_text={true}
    />);
}
;

interface SeverityDisplayProps {
  severity: string
}

<<<<<<< HEAD

};
};
=======
}
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
