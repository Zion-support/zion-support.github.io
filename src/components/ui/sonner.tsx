"use client";
import React from "react";
import { Toaster as Sonner } from "sonner";

import { useTheme } from "../ThemeProvider";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>

<<<<<<< HEAD
const Toaster: any = ({ ...props }: ToasterProps) => {;
const { theme = "system" } = useTheme();
=======
const Toaster = ({ ...props }: ToasterProps) : any => {
  const { theme = "system" } = useTheme();
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

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
"bg-gray-200 text-gray-700"}}}
{...props}
/>
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
"bg-gray-200 text-gray-700"}}}
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
"bg-gray-200 text-gray-700"}}}
{...props}
/>