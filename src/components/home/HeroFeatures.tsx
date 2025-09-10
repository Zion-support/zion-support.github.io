import React from "react"

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