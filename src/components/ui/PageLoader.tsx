import React from "react;";
import { cn } from "@/lib/utils, ";

interface PageLoaderProps {text?: string;}
className?: string};
export const PageLoader: React.FC<PageLoaderProps> = ({text = "Loading...",
className}) => {
return (<div className={cn(