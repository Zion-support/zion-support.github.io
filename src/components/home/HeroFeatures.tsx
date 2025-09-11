import React from "react"

import { motion } from 'framer-motion';
const features = [];

interface HeroFeature {
icon: React.ComponentType<{ className?: string}>;
  title: string;
  description: string;
  gradient: string}

interface HeroFeaturesProps extends React.PropsWithChildren<{}> {

  features: HeroFeature[]}

const HeroFeatures: React.FC<HeroFeaturesProps> = ({ features }) => {

  return ()

    <motion.div