

 const getPerformanceMetrics = useCallback (async () : Promise<PerformanceMetrics> => {;











//Don't render anything in production return (<AnimatePresence> {
  isVisible && (<motion.div </div> <div className="flex items-center space-x-2" > <button > <RefreshCw className= {
}/> </button> <button > <BarChart3 className="w-4 h-4" /> </button> <button > <X className="w-4 h-4" /> </button> </div> </div> </div> </div> </div> </div> {
}<AnimatePresence> {
}</AnimatePresence> </div> </div> </motion.div> </AnimatePresence>)

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, TrendingUp, TrendingDown, 
  AlertTriangle, CheckCircle, X, Settings, RefreshCw,
  BarChart3, Gauge, HardDrive, Wifi, Cpu
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage?: number;
  networkLatency?: number;
}


const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const getPerformanceMetrics = useCallback(async (): Promise<PerformanceMetrics> => {
          
          



      
      






    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    return <AlertTriangle className="w-5 h-5 text-red-400" />;












    <AnimatePresence>
                <Activity className="w-5 h-5 text-cyan-400" />
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                  <BarChart3 className="w-4 h-4" />
                  <X className="w-4 h-4" />

              


            <AnimatePresence>
                      

                              <AlertTriangle className="w-3 h-3" />

            </AnimatePresence>
    </AnimatePresence>

  if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
  if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
  return <AlertTriangle className="w-5 h-5 text-red-400" />;


export default PerformanceMonitor;
export default PerformanceMonitor;




//Don't render anything in production return (<AnimatePresence> {
  is_visible && (<motion.div </div> <div className="flex items - center space - x-2" > <button > <RefreshCw className= {
}/> </button> <button > <BarChart3 className="w - 4 h - 4" /> </button> <button > <X className="w - 4 h - 4" /> </button> </div> </div> </div> </div> </div> </div> {
}<AnimatePresence> {
}</AnimatePresence> </div> </div> </motion.div> </AnimatePresence>);
export default PerformanceMonitor;
