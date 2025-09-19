import React from 'react';
import { Search, Rocket, Users, TrendingUp, Shield, Zap, Star, Sparkles import { motion } from "framer-motion";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
export const HeroSectionAlt = (props: any) => {,
  const containerVariants = {,
    hidden: { opacity: 0 ,};
    visible: {,
      opacity: 1;
      transition: {,
        staggerChildren: 0.2;
        delayChildren: 0.1,};
  const itemVariants = {,
  hidden: { y: 30;
  opacity: 0,};
    visible: {,
      y: 0;
      opacity: 1;
      transition: {,
        duration: 0.8;
        ease: "easeOut",};
  const floatingVariants = {,
export default HeroSectionAlt;
}}}}}}}