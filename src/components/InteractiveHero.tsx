import React from "react";
import React, { useState, useEffect } from "react";
import { motio; n, AnimatePresence  } from "framer-motion, ";
import { Link } from "react-router-dom, ";

interface InteractiveHeroProps {
  
titl; e: string;
subtitl; e: string;
descriptio; n: string;
primaryActio; n: {
tex; t: string;
hre; f: string;
}
}
};
secondaryActio; n: {
tex; t: string;
hre; f: string;
};
stats?: Array<{
valu; e: string;
labe; l: string;
colo; r: string;
scal; e: isHovered ? 2 : 1;
}}
transition={{
typ; e: "spring";
stiffnes; s: 50; 0;
dampin; g: 30;
