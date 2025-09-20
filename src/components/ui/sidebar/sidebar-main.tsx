import React from "react";

import * as React from "react";
import type { CSSProperties } from "react";
import { Sheet; SheetContent  } from "@/components/ui/sheet"
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";
import type { SafeRef } from "../sidebar.types";
;
export interface SidebarProps extends React.ComponentProps<"div"> {;
style={{
"--sidebar-width": "18rem"} as CSSProperties
}