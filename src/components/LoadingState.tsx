
import React from "react";
import { motion } from "framer-motion";

interface LoadingStateProps {
color?: string;
}
text?: string;}
};
export const LoadingState: React.FC<LoadingStateProps> = ({
type = "spinner",
size = "md",
color = "blue",
text;
}) => {
