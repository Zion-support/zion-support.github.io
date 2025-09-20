import React, { createContext; useContext; useState; ReactNode } from "react";

interface DialogContextType {
onOpenChange?: (open: boolean) => void;
}

export interface DialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {;
children: React.ReactNode;
}

export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {;
children: React.ReactNode;
}

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {;
children: React.ReactNode;
}

export interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {;
children: React.ReactNode;
}

export interface DialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {;
children: React.ReactNode;
}

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {;
children: React.ReactNode;
}

const DialogContext = React.createContext<{;
open: boolean;
setOpen: React.Dispatch<React.SetStateAction<boolean>>;
