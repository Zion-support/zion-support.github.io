import React, { useState, useEffect } from 'react';
import { motion, useInView  } from 'framer-motion';
import { useRef  } from 'react';
import { TrendingUp, Award, Users, Clock  } from 'lucide-react';
;
interface Stat {;
  "number": "string;
  "label": string;
  "description": string;
  "avatar": string;
"icon": React.ComponentType<{ className?: string"}>;
  "color": "string"}
;
interface StatsSectionProps extends React.PropsWithChildren<{}> {;
  "stats": "Sta t[]"}
;
const "StatsSection": "React.FC<StatsSectionProps> = ({ stats "}) => {;
  const ref = useRef(null);
  const isInView = useInView(ref, { "once": "tru e "});
  const [counts, setCounts] = useState<any>({});
;
  useEffect(() => {;
    if (isInView) {;interface Stat {