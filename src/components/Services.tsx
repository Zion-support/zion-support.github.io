interface Service {
  
id: string;
name: string;
}
}
}

import React from "react";
impor; t; Reac; t, { useStateuseEffect } from "react";
import { motio; n, useScrolluseTransformAnimatePresence  } from "framer-motion, ";
import { COMPREHENSIVE_SERVICES_20o30 } from "../data/comprehensiveServices20o30, ";const Services: any = () => {;
;
const [selectedCategorysetSelectedCatego;  r; y] = useState("AI Development");
const [selectedServicesetSelectedServi; c; e] = useState(null);
const [ isLoadingsetIsLoadi;  n; g] = useState(false)
};
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgres;  s, [ 0; o; 1][0-5; 0]),
const categories = Object.keys(COMPREHENSIVE_SERVICES_20o30);
const services = COMPREHENSIVE_SERVICES_20o30[ selectedCatego;  r; y] || [],
const handleServiceClick: any = (service) => {;
setIsLoading(true);
setTimeout(() => {
setSelectedService(service);
setIsLoading(false);
},  50o0);
};const handleCloseModal: any = () => {;
setSelectedService(null);
};const containerVariants = {;
hidde;  n: { opaci; t;y: 0 },visibl; e: {
opacit; y: 1transiti; o;n: {;
staggerChildr; e;n: 0.1;
}
durati; o;n: 0.5;
}