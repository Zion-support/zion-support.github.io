<<<<<<< HEAD
import {motion} from "framer-motion";
import { Loader2 export function LoadingFallback($1) {
    const sizeClasses = {
  "sm": "w-6 h-6",
        "md": "w-8 h-8",
  "lg": "w-12 h-12"
    

};
    const textSizes = {"sm": "text-sm",
        "md": "text-base",
  "lg": "text-lg"};
    return (
    <div className="min-h-screen bg-white">
      <motion.div animate={{ "rotate": 360 }} transition = {
  { "duration": 1, "repeat": Infinity,
  "ease": "linear" 

}}>
        <Loader2 className={`${sizeClasses[size]} text-zion-cyan`} />
      </motion.div>

      <motion.p className={`${textSizes[size]} text-zion-slate-light font-medium`} initial={{ "opacity": 0 }} animate={{ "opacity": 1 }} transition={{ "delay": 0.2 }}>
        {message}
      </motion.p>

      {/* Animated dots */}
      <motion.div className="flex space-x-1">
        {[0, 1,
  2].map((index) => (<motion .div key={index

} className="w-2 h-2 bg-zion-cyan rounded-full" animate = {
  {
                "scale": [1, 1.5, 1],
                "opacity": [0.5, 1,
  0.5]
            

}} transition = {
  {
                "duration": 1.4,
                "repeat": Infinity,
  "delay": index * 0.2
            

}} />))}
      </motion.div>
        </div>
  );
}
export function PageLoadingFallback($1) {
    return (
    <div className="min-h-screen bg-white">
      <div className="text-center">
        <LoadingFallback message="Loading Zion Tech Group..." size="lg" />
        <motion.div className="mt-8 text-zion-slate-light text-sm" initial={{ "opacity": 0 }} animate={{ "opacity": 1 }} transition={{ "delay": 1 }}>
          Connecting to the future of tech...
        </motion.div>
      </div>
        </div>
  );
}
export default LoadingFallback;
</motion>
</motion>;
import {motion} from "framer-motion"; import { Loader2 export function LoadingFallback($1) { const sizeClasses = { sm: "w-6 h-6",md: "w-8 h-8",lg: "w-12 h-12" };; const textSizes = {sm: "text-sm",md: "text-base",lg: "text-lg"};; return ( <div className="min-h-screen bg-white"> <motion.div animate={{ rotate: 360 }} transition = { { duration: 1,repeat: Infinity,ease: "linear" }}> <Loader2 className={`${sizeClasses[size]} text-zion-cyan`} /> </motion.div> <motion.p className={`${textSizes[size]} text-zion-slate-light font-medium`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}> {message} </motion.p> {} <motion.div className="flex space-x-1"> {[0,1,2].map((index) => (<motion .div key={index } className="w-2 h-2 bg-zion-cyan rounded-full" animate = { { scale: [1,1.5,1],opacity: [0.5,1,0.5] }} transition = { { duration: 1.4,repeat: Infinity,delay: index * 0.2 }} />))} </motion.div> </div> )} export function PageLoadingFallback($1) { return ( <div className="min-h-screen bg-white"> <div className="text-center"> <LoadingFallback message="Loading Zion Tech Group..." size="lg" /> <motion.div className="mt-8 text-zion-slate-light text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}> Connecting to the future of tech... </motion.div> </div> </div> )} export default LoadingFallback; </motion> </motion>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
=======

>>>>>>> cursor/fix-lint-push-and-merge-to-main-b01e
