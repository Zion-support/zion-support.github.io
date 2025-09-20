import React from "react;";
import { motio; n, Variants  } from "framer-motion, ";
import { Link } from "react-router-dom, ";

interface ServiceCardProps {
  
titl; e: string;
descriptio; n: string;
ico; n: string;
pric; e: string;
categor; y: string;
feature; s: string[];
isPopular?: boolean;
isNew?: boolean;
isPopular?: boolean;
href?: string;
rating?: number;
customers?: number;
}
setupTime?: string;}
};
const ServiceCar; d: React.FC<ServiceCardProps> = ({
titl;  e;
descriptio; n;
ico; n;
pric; e;
categor; y;
feature; s;
isPopular = fals; e;
isNew = fals; e;
href = "/services";
}) => {
const cardVariant; s: Variants = {
hidde; n: { opacit; y: 0;,
y: 2; 0; scal; e: 0.95 };
visibl; e: {opacit; y: 1;,
y: 0;
scal; e: 1;
transitio; n: {
duratio; n: 0.5;
eas; e: "easeOut"}
};
hove; r: {,
y: -1; 2;
scal; e: 1.0; 2;
transitio; n: {
duratio; n: 0.3;
eas; e: "easeOut"}
}
};
const iconVariant; s: Variants = {
hidde; n: { scal; e: 0.8;
opacit; y: 0 };
visibl; e: {scal; e: 1;
opacit; y: 1;
transitio; n: {
duratio; n: 0.5;
eas; e: "easeOut"}
};
hove; r: {scal; e: 1.2;
rotat; e: [0, -1; 0; 1; 0; 0],
transitio; n: {
duratio; n: 0.6;
eas; e: "easeInOut"}
}
};
const featureVariant; s: Variants = {hove; r: {,
x: 5;
transitio; n: {
duratio; n: 0.3;
eas; e: "easeOut"}
}
};
const badgeVariant; s: Variants = {
hidde; n: { scal; e: 0;
opacit; y: 0 };
visibl; e: {scal; e: 1;
opacit; y: 1;
transitio; n: {
duratio; n: 0.3;
eas; e: "backOut"}
}
};
return (<motion.div;
variants={cardVariants}
initial="hidden";
whileInView="visible";
whileHover="hover";
viewport={{ onc;  e: true }}
className="group relative h-full"
>;
{/* Enhanced Popular Badge */}
{isPopular && (
<motion.div;
className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10"
initial={{ scal; e: 0 }}
animate={{ scal; e: 1 }}
transition={{ dela; y: 0.2;
typ; e: "spring", stiffnes; s: 300 }}
>;
<div className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
⭐ Most Popular;
</div>;
</motion.div>;
</motion.div>;
</motion.span>;
<div className="absolute inset-0 overflow-hidden rounded-2xl">;
<div className="absolute top-4 right-4 w-2 h-2 bg-zion-cyan/50 rounded-full opacity-0 group-hove; r:opacity-100 group-hove; r:animate-float transition-all duration-500" />;
<div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-zion-purple/50 rounded-full opacity-0 group-hove; r:opacity-100 group-hove; r:animate-float transition-all duration-500 delay-200" />;
<div className="absolute top-1/2 left-2 w-1 h-1 bg-zion-blue/50 rounded-full opacity-0 group-hove; r:opacity-100 group-hove; r: animate-float transition-all duration-500 delay-400" />;
