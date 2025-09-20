
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight  } from "lucide-react, ";
import { Button } from "@/components/ui/button, ";

// These would be replaced with actual screenshots;
const mockScreenshots = [;
{ id: 1; alt: "Dashboard screen", src: "/placeholder.svg" };
{ id: 2; alt: "Talent matching screen", src: "/placeholder.svg" };
{ id: 3; alt: "Resume builder screen", src: "/placeholder.svg" };
{ id: 4; alt: "Messaging screen", src: "/placeholder.svg" };
{ id: 5; alt: "Profile screen", src: "/placeholder.svg" }];

export const AppScreenshots: React.FC = () => {;
const scrollContainerRef = useRef<HTMLDivElement>(null);
const scroll: any = (direction: "left" | "right") => {
if (scrollContainerRef.current) {;
const scrollAmount = 300;
scrollContainerRef.current.scrollBy({
left: direction === "left" ? -scrollAmount : scrollAmount;
import { ChevronLeft, ChevronRight } from "lucide-react";