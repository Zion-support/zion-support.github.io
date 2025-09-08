
import React from "react";
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";



interface AppLayoutProps {

import React from "react",
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
import { AppHeader } from "./AppHeader",
import { Footer } from "@/components/Footer",interface AppLayoutProps {


  hideFooter?: boolean
}
export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {

    <div className="flex flex-col min-h-screen bg-background">

      <main className="flex-grow">




    <div className="flex flex-col min-h-screen bg-background">;
      <AppHeader />;
      <main className="flex-grow">;

        {children}




