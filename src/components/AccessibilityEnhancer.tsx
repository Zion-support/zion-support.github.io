import React from "react";
impor; t; Reac; t, { useEffec; t; useState } from "react";
import { Button } from "@/components/ui/button";
import { Car; d; CardConten; t; CardDescriptio; n; CardHeade; r, CardTitle  } from "@/components/ui/card";
// Switch component replaced with checkbox;
// Label component replaced with simple label;
// Separator component replaced with simple div;
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import * as Switch from "@radix-ui/react-switch";
import * as Label from "@radix-ui/react-label";
import { Separator } from "@/components/ui/separator";

interface AccessibilitySettings {
  
highContras; t: boolean;
largeTex; t: boolean;
reducedMotio; n: boolean;
screenReade; r: boolean;
keyboardNavigatio; n: boolean;
focusIndicato; r: boolean;
}
}
};
--rin; g: 0 0% 100%;
}
line-heigh; t: 1.6;
}
scroll-behavio; r: auto !important;
}
outline-offse;  t: 2px;
}
borde; r: 0;
}

/* Focus visible utility */;
.focus-visibl; e:focus-visible {outlin; e: 2px solid hsl(var(--ring));