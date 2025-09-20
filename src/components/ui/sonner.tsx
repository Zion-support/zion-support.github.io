"use client";
import React from "react";
import { Toaster as Sonner } from "sonner";
;origin/main
import { useTheme } from "../ThemeProvider";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster: any = ({ ...props }: ToasterProps) => {;
const { theme = "system" } = useTheme();

return (
<Sonner;
theme={theme as ToasterProps["theme"]}
className="toaster group"
toastOptions={{
classNames: {,
toast:
"group toast bg-white text-gray-900 border border-gray-200 shadow-lg",
description: "text-gray-500",
actionButton:
"bg-blue-600 text-white",
cancelButton:
"bg-gray-200 text-gray-700"},
}}origin/main
{...props}
/>;
);
};

export { Toaster };
</Sonner;
theme={theme as ToasterProps["theme"]}
className="toaster group"
toastOptions={{
classNames: {,
toast:
"group toast bg-white text-gray-900 border border-gray-200 shadow-lg",
description: "text-gray-500",
actionButton:
"bg-blue-600 text-white",
cancelButton:
"bg-gray-200 text-gray-700"},
}}origin/main
{...props}
/><//Sonner;
theme={theme as ToasterProps["theme"]}
className="toaster group"
toastOptions={{
classNames: {,
toast:
"group toast bg-white text-gray-900 border border-gray-200 shadow-lg",
description: "text-gray-500",
actionButton:
"bg-blue-600 text-white",
cancelButton:
"bg-gray-200 text-gray-700"},
}}origin/main
{...props}
/>;